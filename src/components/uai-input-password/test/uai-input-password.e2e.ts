import { E2EPage, newE2EPage } from '@stencil/core/testing';

const setup = async (content: string, theme = 'light') => {
  const page = await newE2EPage({
    html: `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`,
  });
  await page.evaluate(() => {
    (window as any).submissions = [];
    (window as any).submitEvents = [];
    (window as any).events = [];
    document.addEventListener('uaiInputPasswordSubmit', (event: CustomEvent) => {
      (window as any).submitEvents.push(event.detail.value);
    });
    const field = document.querySelector('uai-input-password');
    for (const name of [
      'uaiInputPasswordChange',
      'uaiInputPasswordInput',
      'uaiInputPasswordFocus',
      'uaiInputPasswordBlur',
      'uaiKeyDownBackspace',
    ]) {
      field?.addEventListener(name, () => (window as any).events.push(name));
    }
    document.querySelectorAll('form').forEach((form) =>
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        (window as any).submissions.push([...new FormData(form).entries()]);
      }),
    );
  });
  return page;
};

const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);
const typeInto = async (page: E2EPage, selector: string, text: string) => {
  await (await page.find(`${selector} >>> input`)).type(text);
  await page.waitForChanges();
};

describe('uai-input-password e2e', () => {
  it('uses the short and medium control-height tokens', async () => {
    const page = await setup(`
      <uai-input-password id="short" label="Curta" size="short"></uai-input-password>
      <uai-input-password id="medium" label="Média"></uai-input-password>`);
    const heights = await page.evaluate(() =>
      ['short', 'medium'].map((id) =>
        document
          .getElementById(id)
          .shadowRoot.querySelector('.password__control')
          .getBoundingClientRect().height,
      ),
    );

    expect(heights).toEqual([32, 40]);
  });

  it('submits named values, resets to the initial value and follows a disabled fieldset', async () => {
    const page = await setup(`
      <form>
        <fieldset id="group">
          <uai-input-password label="Senha" name="password" value="initial"></uai-input-password>
          <uai-input-password label="Confirmação" input-name="confirmation" value="confirmed"></uai-input-password>
        </fieldset>
        <button id="submit">Enviar</button>
        <button id="reset" type="reset">Restaurar</button>
      </form>`);

    await typeInto(page, 'uai-input-password', '-changed');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([
      [
        ['password', 'initial-changed'],
        ['confirmation', 'confirmed'],
      ],
    ]);

    await page.click('#reset');
    await page.waitForChanges();
    expect(await page.$eval('uai-input-password[name="password"]', (el: any) => el.value)).toBe('initial');

    await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = true));
    await page.waitForChanges();
    expect(
      await page.$eval('uai-input-password[name="password"]', (el) =>
        el.shadowRoot.querySelector('input').disabled,
      ),
    ).toBe(true);
    await page.click('#submit');
    expect((await submissions(page)).at(-1)).toEqual([]);
  });

  it('blocks empty required passwords and accepts a corrected value', async () => {
    const page = await setup(`
      <form>
        <uai-input-password label="Senha" name="password" required required-error-message="Informe a senha."></uai-input-password>
        <button id="submit">Enviar</button>
      </form>`);

    await page.click('#submit');
    await page.waitForChanges();
    expect(await submissions(page)).toEqual([]);
    expect(
      await page.$eval('uai-input-password', (el) => el.shadowRoot.querySelector('input').getAttribute('aria-invalid')),
    ).toBe('true');
    expect(
      await page.$eval('uai-input-password', (el) => el.shadowRoot.querySelector('.password__message').textContent),
    ).toBe('Informe a senha.');

    await typeInto(page, 'uai-input-password', 'corrected');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['password', 'corrected']]]);
  });

  it('reveals only on explicit toggle and reports the provided strength level', async () => {
    const page = await setup(`
      <uai-input-password label="Senha" auto-complete="new-password" show-strength strength-level="high"></uai-input-password>`);

    expect(
      await page.$eval('uai-input-password', (el) => [
        el.shadowRoot.querySelector('input').type,
        el.shadowRoot.querySelector('input').autocomplete,
      ]),
    ).toEqual(['password', 'current-password']);
    expect(
      await page.$eval('uai-input-password', (el) =>
        el.shadowRoot.querySelector('[role="meter"]').getAttribute('aria-valuetext'),
      ),
    ).toBe('Alta');

    const toggle = await page.find('uai-input-password >>> button');
    await toggle.focus();
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(
      await page.$eval('uai-input-password', (el) => [
        el.shadowRoot.querySelector('input').type,
        el.shadowRoot.querySelector('input').autocomplete,
        el.shadowRoot.querySelector('button').getAttribute('aria-pressed'),
      ]),
    ).toEqual(['text', 'new-password', 'true']);
  });

  it('emits submit on Enter and ignores Enter during IME composition', async () => {
    const page = await setup(`
      <form>
        <uai-input-password label="Senha" name="password"></uai-input-password>
        <button id="submit">Enviar</button>
      </form>`);

    await typeInto(page, 'uai-input-password', 'example');
    await page.evaluate(() => {
      const input = document.querySelector('uai-input-password').shadowRoot.querySelector('input');
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }));
    });
    expect(await page.evaluate(() => (window as any).submitEvents)).toEqual([]);

    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await page.evaluate(() => (window as any).submitEvents)).toEqual(['example']);
    expect((await submissions(page)).at(-1)).toEqual([['password', 'example']]);
  });

  it('emits value, input, focus, blur and deletion events', async () => {
    const page = await setup('<uai-input-password label="Senha"></uai-input-password>');
    const input = await page.find('uai-input-password >>> input');
    await input.focus();
    await input.type('abc');
    await page.keyboard.press('Backspace');
    await page.evaluate(() =>
      document.querySelector('uai-input-password').shadowRoot.querySelector('input').blur(),
    );
    await page.waitForChanges();

    expect(await page.evaluate(() => (window as any).events)).toEqual(
      expect.arrayContaining([
        'uaiInputPasswordChange',
        'uaiInputPasswordInput',
        'uaiInputPasswordFocus',
        'uaiInputPasswordBlur',
        'uaiKeyDownBackspace',
      ]),
    );
  });

  it('enforces character length and exposes its custom validation message', async () => {
    const page = await setup(`
      <form>
        <uai-input-password label="Senha" name="password" minlength="4" maxlength="5" minlength-error-message="Use pelo menos quatro caracteres."></uai-input-password>
        <button id="submit">Enviar</button>
      </form>`);

    await typeInto(page, 'uai-input-password', 'abc');
    await page.click('#submit');
    await page.waitForChanges();
    expect(await submissions(page)).toEqual([]);
    expect(
      await page.$eval('uai-input-password', (el) => el.shadowRoot.querySelector('.password__message').textContent),
    ).toBe('Use pelo menos quatro caracteres.');

    const input = await page.find('uai-input-password >>> input');
    await input.type('deFG');
    await page.waitForChanges();
    expect(await page.$eval('uai-input-password', (el) => el.shadowRoot.querySelector('input').value)).toBe('abcde');
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['password', 'abcde']]]);
  });

  it('renders every provided strength level with distinct theme colors in light and dark', async () => {
    const meter = (page: E2EPage) =>
      page.$eval('uai-input-password', (el) => {
        const node = el.shadowRoot.querySelector('[role="meter"]');
        const segments = [...node.querySelectorAll('.password__segment')];
        return {
          valueNow: node.getAttribute('aria-valuenow'),
          valueText: node.getAttribute('aria-valuetext'),
          active: segments.filter((segment) => segment.classList.contains('password__segment--active')).length,
          colors: segments.map((segment) => getComputedStyle(segment).borderTopColor),
        };
      });
    const levels = [
      ['none', '0', 'Não informada', 0],
      ['low', '1', 'Baixa', 1],
      ['medium', '2', 'Média', 2],
      ['high', '3', 'Alta', 3],
    ] as const;
    const activeColors: Record<string, Record<string, string>> = { light: {}, dark: {} };

    for (const theme of ['light', 'dark']) {
      const page = await setup('<uai-input-password label="Senha" show-strength></uai-input-password>', theme);
      for (const [level, valueNow, valueText, active] of levels) {
        await page.$eval('uai-input-password', (el, value) => el.setAttribute('strength-level', value), level);
        await page.waitForChanges();
        const state = await meter(page);

        expect(state).toMatchObject({ valueNow, valueText, active });
        const inactiveColor = state.colors[2];
        expect(new Set(state.colors.slice(active)).size).toBeLessThanOrEqual(1);
        if (active) {
          activeColors[theme][level] = state.colors[0];
          expect(new Set(state.colors.slice(0, active))).toEqual(new Set([state.colors[0]]));
          if (active < 3) expect(state.colors[0]).not.toBe(inactiveColor);
        }
      }
    }

    for (const theme of ['light', 'dark']) {
      expect(new Set(Object.values(activeColors[theme])).size).toBe(3);
    }
    expect(activeColors.dark.low).not.toBe(activeColors.light.low);
    expect(activeColors.dark.high).not.toBe(activeColors.light.high);
  });

  it('uses theme tokens and respects forced colors and reduced motion', async () => {
    const light = await setup('<uai-input-password label="Senha"></uai-input-password>');
    const background = (page: E2EPage) =>
      page.$eval('uai-input-password', (el) =>
        getComputedStyle(el.shadowRoot.querySelector('.password__control')).backgroundColor,
      );
    const lightBackground = await background(light);
    await light.$eval('uai-theme-provider', (el) => el.setAttribute('theme', 'dark'));
    await light.waitForChanges();
    const darkBackground = await background(light);

    expect(lightBackground).not.toBe(darkBackground);

    await light.emulateMediaFeatures([
      { name: 'forced-colors', value: 'active' },
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ]);
    await (await light.find('uai-input-password >>> input')).focus();
    await light.waitForChanges();
    expect(
      await light.$eval('uai-input-password', (el) => {
        const control = getComputedStyle(el.shadowRoot.querySelector('.password__control'));
        return { outlineStyle: control.outlineStyle, boxShadow: control.boxShadow, transitionDuration: control.transitionDuration };
      }),
    ).toEqual({ outlineStyle: 'solid', boxShadow: 'none', transitionDuration: '0s' });
  });
});
