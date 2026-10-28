import { E2EPage, newE2EPage } from '@stencil/core/testing';

const themed = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const setup = async (content: string, theme = 'light') => {
  const page = await newE2EPage({ html: themed(content, theme) });
  // Tests run in parallel tabs; keep this page focused so focus and blur come only from the test.
  const session = await page.target().createCDPSession();
  await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await page.evaluate(() => {
    const w = window as any;
    w.submissions = [];
    w.events = [];
    document.querySelectorAll('form').forEach((form) =>
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        w.submissions.push([...new FormData(form).entries()]);
      }),
    );
    for (const name of [
      'uaiChange',
      'uaiInput',
      'uaiFocus',
      'uaiOnBlur',
      'uaiSubmit',
      'uaiKeyDownBackspace',
      'uaiPatternValidation',
    ]) {
      document.addEventListener(name, (event: CustomEvent) =>
        w.events.push([
          name,
          name === 'uaiInput' || name === 'uaiSubmit' || name === 'uaiKeyDownBackspace' ? null : event.detail,
        ]),
      );
    }
  });
  return page;
};

const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);
const events = (page: E2EPage, name?: string) =>
  page.evaluate((n: string) => (window as any).events.filter(([event]) => !n || event === n), name);

const typeInto = async (page: E2EPage, selector: string, text: string) => {
  const input = await page.find(`${selector} >>> input`);
  await input.type(text);
  await page.waitForChanges();
};

// Resolves a UAI token to the computed value of a property, inside the same theme as the field.
const token = (page: E2EPage, name: string, property = 'color') =>
  page.evaluate(
    (tokenName: string, prop: string) => {
      const probe = document.createElement('div');
      probe.style.setProperty(prop, `var(--${tokenName})`);
      document.querySelector('uai-theme-provider').appendChild(probe);
      const value = getComputedStyle(probe).getPropertyValue(prop);
      probe.remove();
      return value;
    },
    name,
    property,
  );

// Colors are read after interactions; without transitions they are final right away.
const settle = (page: E2EPage) => page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

const controlStyle = (page: E2EPage, selector = 'uai-input') =>
  page.evaluate((sel: string) => {
    const host = document.querySelector(sel);
    const control = host.shadowRoot.querySelector('.input__control');
    const style = getComputedStyle(control);
    const label = host.shadowRoot.querySelector('.input__label');
    const message = host.shadowRoot.querySelector('.input__message');
    return {
      border: style.borderTopColor,
      background: style.backgroundColor,
      color: style.color,
      height: style.height,
      radius: style.borderTopLeftRadius,
      shadow: style.boxShadow,
      property: style.transitionProperty,
      duration: style.transitionDuration,
      label: label ? getComputedStyle(label).color : null,
      message: message ? getComputedStyle(message).color : null,
    };
  }, selector);

describe('uai-input e2e', () => {
  describe('form', () => {
    it('submits the value under name or inputName and leaves a field without name out', async () => {
      const page = await setup(`
        <form>
          <uai-input label="Cidade" name="cidade" value="Recife"></uai-input>
          <uai-input label="Estado" input-name="estado" value="PE"></uai-input>
          <uai-input label="Bairro" value="Boa Vista"></uai-input>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click('#submit');
      expect(await submissions(page)).toEqual([
        [
          ['cidade', 'Recife'],
          ['estado', 'PE'],
        ],
      ]);

      await page.$eval('uai-input[name="cidade"]', (el: any) => (el.value = 'Olinda'));
      await page.waitForChanges();
      await page.click('#submit');
      expect((await submissions(page))[1][0]).toEqual(['cidade', 'Olinda']);
    });

    it('restores the initial value on reset and emits uaiChange', async () => {
      const page = await setup(`
        <form>
          <uai-input label="Cidade" name="cidade" value="Recife"></uai-input>
          <button id="reset" type="reset">Limpar</button>
        </form>`);
      await typeInto(page, 'uai-input', ' Antigo');
      await page.click('#reset');
      await page.waitForChanges();

      expect(await page.$eval('uai-input', (el: any) => el.value)).toBe('Recife');
      expect(await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('input').value)).toBe('Recife');
      expect((await events(page, 'uaiChange')).pop()).toEqual(['uaiChange', { value: 'Recife' }]);
    });

    it('blocks the submission of an empty required field and shows the contract message', async () => {
      const page = await setup(`
        <form>
          <uai-input label="E-mail" name="email" required required-error-message="Informe o e-mail."></uai-input>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click('#submit');
      await page.waitForChanges();

      expect(await submissions(page)).toEqual([]);
      const host = await page.find('uai-input');
      expect(host).toHaveClass('uai-input--danger');
      expect(await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('.input__message').textContent)).toBe(
        'Informe o e-mail.',
      );
      expect(
        await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('input').getAttribute('aria-invalid')),
      ).toBe('true');

      await typeInto(page, 'uai-input', 'ana@blip.ai');
      expect(host).not.toHaveClass('uai-input--danger');
      await page.click('#submit');
      expect(await submissions(page)).toEqual([[['email', 'ana@blip.ai']]]);
    });

    it('uses the browser message when the contract message is not set', async () => {
      const page = await setup(`
        <form>
          <uai-input label="Nome" name="nome" required></uai-input>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click('#submit');
      await page.waitForChanges();

      const text = await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('.input__message').textContent);
      const native = await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('input').validationMessage);
      expect(text).toBe(native);
      expect(text.length).toBeGreaterThan(0);
    });

    it('follows a disabled fieldset', async () => {
      const page = await setup(`
        <form>
          <fieldset id="group" disabled>
            <uai-input label="Cidade" name="cidade" value="Recife"></uai-input>
          </fieldset>
          <button id="submit">Enviar</button>
        </form>`);
      await page.waitForChanges();

      expect(await page.find('uai-input')).toHaveClass('uai-input--disabled');
      expect(await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('input').disabled)).toBe(true);
      await page.click('#submit');
      expect(await submissions(page)).toEqual([[]]);

      await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = false));
      await page.waitForChanges();
      expect(await page.find('uai-input')).not.toHaveClass('uai-input--disabled');
    });
  });

  describe('Enter', () => {
    const form = (attributes = '') => `
      <form>
        <uai-input label="Busca" name="q" ${attributes}></uai-input>
      </form>`;

    it('emits uaiSubmit and submits the form', async () => {
      const page = await setup(form());
      await typeInto(page, 'uai-input', 'tokens');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await events(page, 'uaiSubmit')).toHaveLength(1);
      expect(await submissions(page)).toEqual([[['q', 'tokens']]]);
    });

    it('does not submit when the consumer cancels the payload event', async () => {
      const page = await setup(form());
      await page.evaluate(() =>
        document.addEventListener('uaiSubmit', (event: CustomEvent) => event.detail.event.preventDefault()),
      );
      await typeInto(page, 'uai-input', 'tokens');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await submissions(page)).toEqual([]);
    });

    it('clears the field and does not submit with isSubmit', async () => {
      const page = await setup(form('is-submit'));
      await typeInto(page, 'uai-input', 'Olá');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await events(page, 'uaiSubmit')).toHaveLength(1);
      expect(await submissions(page)).toEqual([]);
      expect(await page.$eval('uai-input', (el: any) => el.value)).toBe('');
    });

    it('ignores Enter while composing text (IME)', async () => {
      const page = await setup(form());
      await typeInto(page, 'uai-input', 'に');
      await page.$eval('uai-input', (el) =>
        el.shadowRoot
          .querySelector('input')
          .dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, composed: true }),
          ),
      );
      await page.waitForChanges();

      expect(await events(page, 'uaiSubmit')).toHaveLength(0);
      expect(await submissions(page)).toEqual([]);
    });
  });

  describe('events, methods and focus', () => {
    it('emits the bds-input events with the uai prefix', async () => {
      const page = await setup(`<uai-input label="Código" pattern="[0-9]+"></uai-input>`);
      await page.click('uai-input >>> input');
      await typeInto(page, 'uai-input', 'a1');
      await page.keyboard.press('Backspace');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const names = (await events(page)).map(([name]) => name);
      expect(names).toEqual(
        expect.arrayContaining(['uaiFocus', 'uaiInput', 'uaiChange', 'uaiKeyDownBackspace', 'uaiOnBlur']),
      );
      expect((await events(page, 'uaiChange')).pop()).toEqual(['uaiChange', { value: 'a' }]);
      expect(await events(page, 'uaiPatternValidation')).toEqual([['uaiPatternValidation', false]]);
    });

    it('focuses the native input from the label, the field box and setFocus()', async () => {
      const page = await setup(`<uai-input label="Nome" icon="search"></uai-input><button id="other">Outro</button>`);
      const focused = () => page.$eval('uai-input', (el) => el.shadowRoot.activeElement?.tagName ?? null);

      await page.click('uai-input >>> label');
      expect(await focused()).toBe('INPUT');

      await page.click('#other');
      await page.click('uai-input >>> .input__icon');
      expect(await focused()).toBe('INPUT');

      await page.click('#other');
      await page.$eval('uai-input', (el: any) => el.setFocus());
      expect(await focused()).toBe('INPUT');
    });

    it('validates minlength when the field loses focus', async () => {
      const page = await setup(
        `<uai-input label="Senha antiga" minlength="4" minlength-error-message="Use 4 caracteres ou mais."></uai-input>`,
      );
      await page.click('uai-input >>> input');
      await typeInto(page, 'uai-input', 'ab');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await page.find('uai-input')).toHaveClass('uai-input--danger');
      expect(await page.$eval('uai-input', (el: any) => el.isValid())).toBe(false);
      expect(await page.$eval('uai-input', (el) => el.shadowRoot.querySelector('.input__message').textContent)).toBe(
        'Use 4 caracteres ou mais.',
      );
    });
  });

  describe('tokens by state', () => {
    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('uses border/input, surface/paper, radius/lg and control-height/medium at rest', async () => {
          const page = await setup(`<uai-input label="Nome"></uai-input>`, theme);
          const style = await controlStyle(page);

          expect(style.border).toBe(await token(page, 'uai-border-input'));
          expect(style.background).toBe(await token(page, 'uai-surface-paper'));
          expect(style.label).toBe(await token(page, 'uai-content-primary'));
          expect(style.radius).toBe(await token(page, 'uai-radius-lg', 'border-top-left-radius'));
          expect(style.height).toBe(await token(page, 'uai-control-height-medium', 'height'));
        });

        it('uses content/secondary on hover', async () => {
          const page = await setup(`<uai-input label="Nome"></uai-input>`, theme);
          await settle(page);
          await page.hover('uai-input >>> .input__control');
          await page.waitForChanges();

          expect((await controlStyle(page)).border).toBe(await token(page, 'uai-content-secondary'));
        });

        it('uses border/ring with the opacity/focus-ring halo on focus, also with an error', async () => {
          const page = await setup(`<uai-input label="Nome" danger error-message="Erro"></uai-input>`, theme);
          await settle(page);
          await page.click('uai-input >>> input');
          await page.waitForChanges();
          const style = await controlStyle(page);
          const ring = await token(page, 'uai-border-ring');

          expect(style.border).toBe(ring);
          expect(style.shadow).not.toBe('none');
          expect(style.shadow).toContain(await token(page, 'uai-border-width-thick', 'width'));
          expect(style.label).toBe(await token(page, 'uai-feedback-error'));
          expect(style.message).toBe(await token(page, 'uai-feedback-error'));
        });

        it('uses feedback/error and feedback/success for the borders', async () => {
          const page = await setup(
            `<uai-input id="error" label="A" danger></uai-input><uai-input id="ok" label="B" success></uai-input>`,
            theme,
          );

          expect((await controlStyle(page, '#error')).border).toBe(await token(page, 'uai-feedback-error'));
          expect((await controlStyle(page, '#ok')).border).toBe(await token(page, 'uai-feedback-success'));
        });

        it('uses surface/muted, border/default and content/disabled when disabled, without opacity', async () => {
          const page = await setup(`<uai-input label="Nome" value="Ana" disabled></uai-input>`, theme);
          const style = await controlStyle(page);

          expect(style.background).toBe(await token(page, 'uai-surface-muted'));
          expect(style.border).toBe(await token(page, 'uai-border-default'));
          expect(style.color).toBe(await token(page, 'uai-content-disabled'));
          expect(style.label).toBe(await token(page, 'uai-content-disabled'));
          expect(await page.$eval('uai-input', (el) => getComputedStyle(el).opacity)).toBe('1');
        });
      });
    }

    it('keeps readonly like the default state, without hover', async () => {
      const page = await setup(`<uai-input label="Nome" value="Ana" readonly></uai-input>`);
      await settle(page);
      await page.hover('uai-input >>> .input__control');
      await page.waitForChanges();
      const style = await controlStyle(page);

      expect(style.border).toBe(await token(page, 'uai-border-input'));
      expect(style.background).toBe(await token(page, 'uai-surface-paper'));
    });

    it('uses control-height/short with size short', async () => {
      const page = await setup(`<uai-input label="Nome" size="short"></uai-input>`);

      expect((await controlStyle(page)).height).toBe(await token(page, 'uai-control-height-short', 'height'));
    });
  });

  describe('product requirements (MFEs)', () => {
    it('takes the container width and keeps the message outside the field box', async () => {
      const page = await setup(
        `<div style="width: 320px"><uai-input label="Nome" helper-message="Mensagem longa que pode quebrar em mais de uma linha"></uai-input></div>`,
      );
      const box = await page.$eval('uai-input', (el) => {
        const control = el.shadowRoot.querySelector('.input__control').getBoundingClientRect();
        const message = el.shadowRoot.querySelector('.input__message').getBoundingClientRect();
        return { host: el.getBoundingClientRect().width, control: control.bottom, message: message.top };
      });

      expect(box.host).toBe(320);
      expect(box.message).toBeGreaterThan(box.control);
    });

    it('hides the number spin buttons and the search clear button', async () => {
      const page = await setup(
        `<uai-input id="n" label="Qtd" type="number"></uai-input><uai-input id="s" label="Busca" type="search"></uai-input>`,
      );
      const appearance = (selector: string, pseudo: string) =>
        page.$eval(
          selector,
          (el, p: string) => getComputedStyle(el.shadowRoot.querySelector('input'), p).getPropertyValue('appearance'),
          pseudo,
        );

      expect(await appearance('#n', '::-webkit-inner-spin-button')).toBe('none');
      expect(await appearance('#s', '::-webkit-search-cancel-button')).toBe('none');
    });
  });

  describe('motion', () => {
    it('transitions with duration/fast and removes the transition with reduced motion', async () => {
      const page = await setup(`<uai-input label="Nome"></uai-input>`);
      const { property, duration } = await controlStyle(page);
      expect(property).toContain('border-color, box-shadow');
      expect(duration.split(', ').every((value) => value === '0.15s')).toBe(true);

      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      expect((await controlStyle(page)).duration).toBe('0s');
    });
  });
});
