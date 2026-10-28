import { E2EPage, newE2EPage } from '@stencil/core/testing';

const TAG = 'uai-input-phone';
const BUTTON = 'button[part="country-button"]';
const LIST = '[part="country-list"]';
const OPTION = '[part="country-option"]';

const themed = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const setup = async (content: string, theme = 'light') => {
  const page = await newE2EPage();
  const warnings: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'warn' || (message.type() as string) === 'warning') warnings.push(message.text());
  });
  (page as any).warnings = warnings;
  await page.setContent(themed(content, theme));
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
    for (const name of ['uaiPhoneNumberChange', 'uaiInput', 'uaiCancel', 'uaiFocus', 'uaiBlur']) {
      document.addEventListener(name, (event: CustomEvent) => {
        const { detail } = event;
        w.events.push([name, detail instanceof Event ? detail.type : (detail ?? null)]);
      });
    }
  });
  await page.waitForChanges();
  return page;
};

const warningsAbout = (page: E2EPage, pattern: RegExp) =>
  ((page as any).warnings as string[]).filter((text) => pattern.test(text));
const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);
const events = (page: E2EPage, name?: string) =>
  page.evaluate((n: string) => (window as any).events.filter(([event]) => !n || event === n), name);

// Snapshot of the shadow DOM pieces the contract exposes.
const state = (page: E2EPage, selector = TAG) =>
  page.evaluate(
    (sel: string, button: string, list: string, option: string) => {
      const host = document.querySelector(sel);
      const root = host.shadowRoot;
      const trigger = root.querySelector(button) as HTMLButtonElement;
      const panel = root.querySelector(list);
      const flag = trigger?.querySelector('img.prefix__flag');
      const active = root.querySelector(`${option}.option--active`);
      const selected = root.querySelector(`${option}[aria-selected="true"]`);
      const focused = root.activeElement;
      return {
        code: trigger?.querySelector('.prefix__code')?.textContent.trim() ?? null,
        flag: flag ? { alt: flag.getAttribute('alt') } : null,
        arrow: !!trigger?.querySelector('uai-icon.prefix__arrow'),
        expanded: trigger?.getAttribute('aria-expanded') ?? null,
        buttonLabel: trigger?.getAttribute('aria-label') ?? null,
        buttonDisabled: trigger?.disabled ?? null,
        open: !!panel?.classList.contains('uai-overlay--open'),
        options: root.querySelectorAll(option).length,
        active: active?.getAttribute('data-country') ?? null,
        activeIsDescendant: !!active && panel?.getAttribute('aria-activedescendant') === active.id,
        selected: selected?.getAttribute('data-country') ?? null,
        focused: focused ? focused.getAttribute('part') || focused.tagName : null,
        label: root.querySelector('label.input__label')?.textContent.trim() ?? null,
        message: root.querySelector('[part="input__message"]')?.textContent.trim() ?? null,
        inputValue: (root.querySelector('input[part="input"]') as HTMLInputElement)?.value ?? null,
      };
    },
    selector,
    BUTTON,
    LIST,
    OPTION,
  );

const prop = (page: E2EPage, name: string, selector = TAG) => page.$eval(selector, (el: any, n: string) => el[n], name);

const typeInto = async (page: E2EPage, text: string, selector = TAG) => {
  const input = await page.find(`${selector} >>> input[part="input"]`);
  await input.type(text);
  await page.waitForChanges();
};

const blur = async (page: E2EPage) => {
  await page.$eval('#outside', (el: HTMLElement) => el.focus());
  await page.waitForChanges();
};

const focusPrefix = async (page: E2EPage, selector = TAG) => {
  await page.$eval(
    selector,
    (el, button: string) => (el.shadowRoot.querySelector(button) as HTMLElement).focus(),
    BUTTON,
  );
  await page.waitForChanges();
};

const waitList = async (page: E2EPage, open: boolean, selector = TAG) => {
  await page.waitForChanges();
  await page.waitForFunction(
    (sel: string, list: string, expected: boolean) =>
      !!document.querySelector(sel).shadowRoot.querySelector(list)?.classList.contains('uai-overlay--open') ===
      expected,
    { timeout: 2000 },
    selector,
    LIST,
    open,
  );
};

const openWithKeyboard = async (page: E2EPage, selector = TAG) => {
  await focusPrefix(page, selector);
  await page.keyboard.press('Enter');
  await waitList(page, true, selector);
};

const press = async (page: E2EPage, key: string) => {
  await page.keyboard.press(key as any);
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

const containerStyle = (page: E2EPage, selector = TAG) =>
  page.$eval(selector, (el) => {
    const style = getComputedStyle(el.shadowRoot.querySelector('[part="input-container"]'));
    return { height: style.height, border: style.borderTopColor, background: style.backgroundColor };
  });

describe('uai-input-phone e2e', () => {
  it('caps the country list at 200px and scrolls the last option into view', async () => {
    const page = await setup('<uai-input-phone></uai-input-phone>');
    await openWithKeyboard(page);
    const dimensions = () =>
      page.$eval(TAG, (el) => {
        const list = el.shadowRoot.querySelector<HTMLElement>('[part="country-list"]');
        const last = list.lastElementChild.getBoundingClientRect();
        const bounds = list.getBoundingClientRect();
        return {
          height: bounds.height,
          bottom: bounds.bottom,
          scrollHeight: list.scrollHeight,
          clientHeight: list.clientHeight,
          lastTop: last.top,
          lastBottom: last.bottom,
          top: bounds.top,
          viewportHeight: document.documentElement.clientHeight,
        };
      });
    const opened = await dimensions();
    expect(opened.height).toBeLessThanOrEqual(200);
    expect(opened.height).toBeGreaterThan(0);
    expect(opened.scrollHeight).toBeGreaterThan(opened.clientHeight);

    await press(page, 'End');
    const end = await dimensions();
    expect(end.lastTop).toBeGreaterThanOrEqual(end.top);
    expect(end.lastBottom).toBeLessThanOrEqual(end.bottom);

    await page.setViewport({ width: 375, height: 180 });
    await page.waitForFunction(() => {
      const bounds = document.querySelector('uai-input-phone').shadowRoot
        .querySelector('[part="country-list"]').getBoundingClientRect();
      return bounds.bottom <= document.documentElement.clientHeight - 8;
    });
    const small = await dimensions();
    expect(small.height).toBeLessThan(200);
    expect(small.bottom).toBeLessThanOrEqual(small.viewportHeight - 8);
  });
  describe('Requirement: Contrato herdado', () => {
    it('Scenario: Mudança do número — emits uaiInput with the InputEvent and uaiPhoneNumberChange', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await page.click(`${TAG} >>> input[part="input"]`);
      await typeInto(page, '11');

      expect(await events(page, 'uaiInput')).toEqual([
        ['uaiInput', 'input'],
        ['uaiInput', 'input'],
      ]);
      expect((await events(page, 'uaiPhoneNumberChange')).pop()).toEqual([
        'uaiPhoneNumberChange',
        { value: '11', code: '+55', isoCode: expect.any(String), country: 'brazil-flag' },
      ]);
      expect(await prop(page, 'text')).toBe('11');
    });

    it("Scenario: Troca de país por método — changeCountry('+1', 'US / USA', 'united-states-flag')", async () => {
      const page = await setup(`<uai-input-phone text="555 0100"></uai-input-phone>`);
      await page.$eval(TAG, (el: any) => el.changeCountry('+1', 'US / USA', 'united-states-flag'));
      await page.waitForChanges();

      const current = await state(page);
      expect(current.code).toBe('+1');
      expect(current.flag).toEqual({ alt: '' });
      expect(current.buttonLabel).toBe('Código do país: Estados Unidos +1');
      expect(await prop(page, 'value')).toBe('+1');
      expect((await events(page, 'uaiPhoneNumberChange')).pop()).toEqual([
        'uaiPhoneNumberChange',
        { value: '555 0100', code: '+1', isoCode: 'US / USA', country: 'united-states-flag' },
      ]);
    });

    it('emits uaiFocus and uaiBlur and supports setFocus(), removeFocus() and clear()', async () => {
      const page = await setup(
        `<uai-input-phone text="11 99999-0000"></uai-input-phone><button id="outside">Fora</button>`,
      );
      await page.$eval(TAG, (el: any) => el.setFocus());
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');

      await page.$eval(TAG, (el: any) => el.removeFocus());
      await page.waitForChanges();
      expect((await state(page)).focused).toBeNull();
      expect((await events(page)).map(([name]) => name)).toEqual(expect.arrayContaining(['uaiFocus', 'uaiBlur']));

      await page.$eval(TAG, (el: any) => el.clear());
      await page.waitForChanges();
      expect(await prop(page, 'text')).toBe('');
      expect((await state(page)).inputValue).toBe('');
    });

    it('puts dtSelectFlag on the prefix button', async () => {
      const page = await setup(`<uai-input-phone dt-select-flag="phone-flag"></uai-input-phone>`);
      expect(
        await page.$eval(TAG, (el, b: string) => el.shadowRoot.querySelector(b).getAttribute('data-test'), BUTTON),
      ).toBe('phone-flag');
    });
  });

  describe('Requirement: Props legadas', () => {
    it('Scenario: Idioma desconhecido — falls back to pt_BR and warns once', async () => {
      const page = await setup(`<uai-input-phone language="fr_FR"></uai-input-phone>`);
      await page.$eval(TAG, (el: any) => (el.text = '11'));
      await page.waitForChanges();

      const current = await state(page);
      expect(current.label).toBe('Telefone');
      expect(current.buttonLabel).toBe('Código do país: Brasil +55');

      await page.click(`${TAG} >>> ${BUTTON}`);
      await waitList(page, true);
      expect(
        await page.$eval(
          TAG,
          (el, o: string) => el.shadowRoot.querySelector(`${o}[data-country="germany-flag"]`).textContent,
          OPTION,
        ),
      ).toContain('Alemanha');
      expect(warningsAbout(page, /language|fr_FR/i)).toHaveLength(1);
    });

    it('falls back to size medium and accepts the deprecated options prop with a single warning', async () => {
      const page = await setup(`
        <uai-input-phone size="large" options="[]"></uai-input-phone>
        <uai-input-phone options="[]"></uai-input-phone>`);
      expect(await page.find(TAG)).toHaveClass('uai-input-phone--size-medium');
      expect(warningsAbout(page, /size|large/i)).toHaveLength(1);

      await page.$eval(TAG, (el: any) => (el.text = '11'));
      await page.waitForChanges();
      expect(warningsAbout(page, /options/i)).toHaveLength(1);
    });
  });

  describe('Requirement: Seletor de país', () => {
    it('exposes the prefix as a native button with listbox semantics', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      const attributes = await page.$eval(
        TAG,
        (el, b: string) => {
          const button = el.shadowRoot.querySelector(b);
          return {
            tag: button.tagName,
            haspopup: button.getAttribute('aria-haspopup'),
            type: button.getAttribute('type'),
          };
        },
        BUTTON,
      );
      expect(attributes).toEqual({ tag: 'BUTTON', haspopup: 'listbox', type: 'button' });
      const closed = await state(page);
      expect(closed.expanded).toBe('false');
      expect(closed.open).toBe(false);
      expect(closed.options).toBe(0);
      expect(closed.arrow).toBe(true);
      expect(closed.buttonLabel).toBe('Código do país: Brasil +55');

      await page.click(`${TAG} >>> ${BUTTON}`);
      await waitList(page, true);
      const opened = await state(page);
      expect(opened.expanded).toBe('true');
      expect(opened.options).toBe(240);
      expect(opened.selected).toBe('brazil-flag');
      expect(opened.focused).toBe('country-list');
      expect(await page.$eval(TAG, (el, l: string) => el.shadowRoot.querySelector(l).getAttribute('role'), LIST)).toBe(
        'listbox',
      );
      expect(
        await page.$eval(TAG, (el, l: string) => el.shadowRoot.querySelector(l).matches(':popover-open'), LIST),
      ).toBe(true);
    });

    it('Scenario: Selecionar país pelo teclado — Enter opens, arrows/Home/End move, Enter selects', async () => {
      const page = await setup(`<uai-input-phone text="11 99999-0000"></uai-input-phone>`);
      await openWithKeyboard(page);
      expect((await state(page)).active).toBe('brazil-flag');

      await press(page, 'End');
      const last = await state(page);
      expect(last.active).toBe(
        await page.$eval(
          TAG,
          (el, o: string) => [...el.shadowRoot.querySelectorAll(o)].pop().getAttribute('data-country'),
          OPTION,
        ),
      );
      expect(last.activeIsDescendant).toBe(true);

      await press(page, 'Home');
      expect((await state(page)).active).toBe('brazil-flag');
      await press(page, 'ArrowDown');
      await press(page, 'ArrowDown');
      await press(page, 'ArrowUp');
      const active = await state(page);
      expect(active.active).toBe('united-states-flag');
      expect(active.activeIsDescendant).toBe(true);
      expect(active.selected).toBe('brazil-flag');

      await press(page, 'Enter');
      await waitList(page, false);
      const current = await state(page);
      expect(current.code).toBe('+1');
      expect(current.flag).toEqual({ alt: '' });
      expect(current.expanded).toBe('false');
      expect(current.focused).toBe('country-button');
      expect((await events(page, 'uaiPhoneNumberChange')).pop()).toEqual([
        'uaiPhoneNumberChange',
        { value: '11 99999-0000', code: '+1', isoCode: 'US / USA', country: 'united-states-flag' },
      ]);
      expect(await events(page, 'uaiCancel')).toEqual([]);
    });

    it('selects with Space and keeps the list closed', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await openWithKeyboard(page);
      await press(page, 'ArrowDown');
      await press(page, 'Space');
      await page.waitForChanges();

      const current = await state(page);
      expect(current.code).toBe('+1');
      expect(current.open).toBe(false);
      expect(current.expanded).toBe('false');
      expect(current.focused).toBe('country-button');
    });

    it('Scenario: Busca por letra — the first option whose name starts with the letter becomes active', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await openWithKeyboard(page);

      await press(page, 'j');
      const jamaica = await state(page);
      expect(jamaica.active).toBe('jamaica-flag');
      expect(jamaica.activeIsDescendant).toBe(true);

      await press(page, 'z');
      expect((await state(page)).active).toBe('zambia-flag');
      expect((await state(page)).code).toBe('+55');
    });

    it('Scenario: Fechar com Esc — closes without changing, returns focus and emits uaiCancel', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await openWithKeyboard(page);
      await press(page, 'ArrowDown');
      await press(page, 'Escape');
      await waitList(page, false);

      const current = await state(page);
      expect(current.code).toBe('+55');
      expect(current.expanded).toBe('false');
      expect(current.focused).toBe('country-button');
      expect(await prop(page, 'value')).toBe('+55');
      expect(await events(page, 'uaiCancel')).toHaveLength(1);
      expect(await events(page, 'uaiPhoneNumberChange')).toEqual([]);
    });

    it('closes with Tab and with a click outside, and selects with a click on an option', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone><button id="outside">Fora</button>`);
      await openWithKeyboard(page);
      await press(page, 'Tab');
      await waitList(page, false);
      expect((await state(page)).expanded).toBe('false');

      await page.click(`${TAG} >>> ${BUTTON}`);
      await waitList(page, true);
      await page.click('#outside');
      await waitList(page, false);
      expect((await state(page)).code).toBe('+55');

      await page.click(`${TAG} >>> ${BUTTON}`);
      await waitList(page, true);
      const option = await page.find(`${TAG} >>> ${OPTION}[data-country="argentina-flag"]`);
      await option.click();
      await waitList(page, false);
      expect((await state(page)).code).toBe('+54');
      expect((await events(page, 'uaiPhoneNumberChange')).pop()[1]).toEqual(
        expect.objectContaining({ code: '+54', country: 'argentina-flag' }),
      );
    });

    it('Scenario: Somente leitura e desabilitado — the prefix does not open; readonly hides the arrow', async () => {
      const page = await setup(`
        <uai-input-phone id="ro" readonly text="11 99999-0000"></uai-input-phone>
        <uai-input-phone id="off" disabled text="11 99999-0000"></uai-input-phone>`);

      for (const selector of ['#ro', '#off']) {
        expect((await state(page, selector)).arrow).toBe(selector === '#off');
        await page.click(`${selector} >>> ${BUTTON}`);
        await page.waitForChanges();
        const current = await state(page, selector);
        expect(current.open).toBe(false);
        expect(current.expanded).not.toBe('true');
      }

      await focusPrefix(page, '#ro');
      await press(page, 'Enter');
      expect((await state(page, '#ro')).open).toBe(false);
      expect(await page.find('#ro')).toHaveClass('uai-input-phone--readonly');
      expect(await page.find('#off')).toHaveClass('uai-input-phone--disabled');
      expect((await state(page, '#off')).buttonDisabled).toBe(true);
    });
  });

  describe('Requirement: Bandeiras', () => {
    it('shows the official flag with an empty alt', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      const src = await page.$eval(
        TAG,
        (el, b: string) => el.shadowRoot.querySelector(`${b} img.prefix__flag`).getAttribute('src'),
        BUTTON,
      );
      expect(src).toContain('brazil');
      expect((await state(page)).flag).toEqual({ alt: '' });
    });

    it('Scenario: País sem bandeira — shows only the code, without a broken image', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await page.$eval(TAG, (el: any) => el.changeCountry('+298', 'FO / FRO', 'faroe-islands-flag'));
      await page.waitForChanges();

      const current = await state(page);
      expect(current.code).toBe('+298');
      expect(current.flag).toBeNull();
    });
  });

  describe('Requirement: Formulário nativo', () => {
    it('Scenario: Valor nomeado — FormData has phone = "+55 11 99999-0000"', async () => {
      const page = await setup(`
        <form>
          <uai-input-phone name="phone" value="+55" text="11 99999-0000"></uai-input-phone>
          <uai-input-phone input-name="mobile" text="21 98888-0000"></uai-input-phone>
          <uai-input-phone name="empty" value="+55"></uai-input-phone>
          <uai-input-phone text="31 97777-0000"></uai-input-phone>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click('#submit');

      expect(await submissions(page)).toEqual([
        [
          ['phone', '+55 11 99999-0000'],
          ['mobile', '+55 21 98888-0000'],
        ],
      ]);
    });

    it('Scenario: Reset — restores number and code and clears the validation state', async () => {
      const page = await setup(`
        <form>
          <uai-input-phone name="phone" text="11 99999-0000" number-error-message="Numero invalido."></uai-input-phone>
          <button id="reset" type="reset">Limpar</button>
        </form>
        <button id="outside">Fora</button>`);
      await page.click(`${TAG} >>> input[part="input"]`);
      await typeInto(page, 'abc');
      await blur(page);
      await page.$eval(TAG, (el: any) => el.changeCountry('+1', 'US / USA', 'united-states-flag'));
      await page.waitForChanges();
      expect(await page.find(TAG)).toHaveClass('uai-input-phone--danger');

      await page.click('#reset');
      await page.waitForChanges();

      expect(await prop(page, 'text')).toBe('11 99999-0000');
      expect(await prop(page, 'value')).toBe('+55');
      const current = await state(page);
      expect(current.inputValue).toBe('11 99999-0000');
      expect(current.code).toBe('+55');
      expect(current.message).not.toBe('Numero invalido.');
      expect(await page.find(TAG)).not.toHaveClass('uai-input-phone--danger');
    });

    it('Scenario: Fieldset desabilitado — field and prefix are disabled and left out of FormData', async () => {
      const page = await setup(`
        <form>
          <fieldset id="group" disabled>
            <uai-input-phone name="phone" text="11 99999-0000"></uai-input-phone>
          </fieldset>
          <button id="submit">Enviar</button>
        </form>`);
      await page.waitForChanges();

      expect(await page.find(TAG)).toHaveClass('uai-input-phone--disabled');
      expect(
        await page.$eval(
          TAG,
          (el) => (el.shadowRoot.querySelector('input[part="input"]') as HTMLInputElement).disabled,
        ),
      ).toBe(true);
      expect((await state(page)).buttonDisabled).toBe(true);
      await page.click('#submit');
      expect(await submissions(page)).toEqual([[]]);

      await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = false));
      await page.waitForChanges();
      expect(await page.find(TAG)).not.toHaveClass('uai-input-phone--disabled');
      expect((await state(page)).buttonDisabled).toBe(false);
    });
  });

  describe('Requirement: Validação', () => {
    it('Scenario: Caractere inválido — shows numberErrorMessage and isValid() returns false', async () => {
      const page = await setup(
        `<uai-input-phone number-error-message="Use apenas digitos."></uai-input-phone><button id="outside">Fora</button>`,
      );
      await page.click(`${TAG} >>> input[part="input"]`);
      await typeInto(page, 'abc');
      await blur(page);

      expect(await page.find(TAG)).toHaveClass('uai-input-phone--danger');
      expect((await state(page)).message).toBe('Use apenas digitos.');
      expect(await page.$eval(TAG, (el: any) => el.isValid())).toBe(false);
    });

    it('accepts digits, space, +, -, ( ) and .', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone><button id="outside">Fora</button>`);
      await page.click(`${TAG} >>> input[part="input"]`);
      await typeInto(page, '(11) 9.9999-0000 +1');
      await blur(page);

      expect(await page.find(TAG)).not.toHaveClass('uai-input-phone--danger');
      expect(await page.$eval(TAG, (el: any) => el.isValid())).toBe(true);
    });

    it('shows requiredErrorMessage when required and empty, on blur and on submit', async () => {
      const page = await setup(`
        <form>
          <uai-input-phone name="phone" required required-error-message="Informe o telefone."></uai-input-phone>
          <button id="submit">Enviar</button>
        </form>
        <button id="outside">Fora</button>`);
      await page.click('#submit');
      await page.waitForChanges();
      expect(await submissions(page)).toEqual([]);
      expect(await page.find(TAG)).toHaveClass('uai-input-phone--danger');
      expect((await state(page)).message).toBe('Informe o telefone.');

      await page.click(`${TAG} >>> input[part="input"]`);
      await typeInto(page, '11 99999-0000');
      await blur(page);
      expect(await page.find(TAG)).not.toHaveClass('uai-input-phone--danger');
      expect(await page.$eval(TAG, (el: any) => el.isValid())).toBe(true);
    });
  });

  describe('Requirement: Tamanhos e estados', () => {
    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('Scenario: Tamanho padrão — uses control-height/medium, border/input and surface/paper', async () => {
          const page = await setup(`<uai-input-phone></uai-input-phone>`, theme);
          const style = await containerStyle(page);

          expect(await page.find(TAG)).toHaveClass('uai-input-phone--size-medium');
          expect(style.height).toBe(await token(page, 'uai-control-height-medium', 'height'));
          expect(style.border).toBe(await token(page, 'uai-border-input'));
          expect(style.background).toBe(await token(page, 'uai-surface-paper'));
        });

        it('uses feedback/error and feedback/success, with danger over success', async () => {
          const page = await setup(
            `<uai-input-phone id="error" danger></uai-input-phone>
             <uai-input-phone id="ok" success></uai-input-phone>
             <uai-input-phone id="both" danger success></uai-input-phone>`,
            theme,
          );
          const error = await token(page, 'uai-feedback-error');

          expect((await containerStyle(page, '#error')).border).toBe(error);
          expect((await containerStyle(page, '#ok')).border).toBe(await token(page, 'uai-feedback-success'));
          expect((await containerStyle(page, '#both')).border).toBe(error);
          expect(await page.find('#both')).toHaveClass('uai-input-phone--danger');
          expect(await page.find('#both')).not.toHaveClass('uai-input-phone--success');
        });
      });
    }

    it('uses control-height/short with size short', async () => {
      const page = await setup(`<uai-input-phone size="short"></uai-input-phone>`);
      expect(await page.find(TAG)).toHaveClass('uai-input-phone--size-short');
      expect((await containerStyle(page)).height).toBe(await token(page, 'uai-control-height-short', 'height'));
    });
  });

  describe('Requirement: Acessibilidade e foco', () => {
    it('Scenario: Rótulo padrão — the visible label is "Telefone" with pt_BR', async () => {
      const page = await setup(`<uai-input-phone language="pt_BR"></uai-input-phone>`);
      expect((await state(page)).label).toBe('Telefone');
    });

    it('uses the default label of each language and lets label win', async () => {
      const page = await setup(`
        <uai-input-phone id="en" language="en_US"></uai-input-phone>
        <uai-input-phone id="es" language="es_ES"></uai-input-phone>
        <uai-input-phone id="custom" label="Celular"></uai-input-phone>`);

      const en = await state(page, '#en');
      expect(en.label).toBe('Phone number');
      expect(en.buttonLabel).toContain('Brazil +55');
      expect((await state(page, '#es')).label).toBe('Teléfono');
      expect((await state(page, '#custom')).label).toBe('Celular');
    });

    it('links the native input to the label and the message', async () => {
      const page = await setup(`<uai-input-phone helper-message="Com DDD."></uai-input-phone>`);
      const links = await page.$eval(TAG, (el) => {
        const root = el.shadowRoot;
        const input = root.querySelector('input[part="input"]') as HTMLInputElement;
        const message = root.querySelector('[part="input__message"]');
        return {
          type: input.type,
          labelled: [...input.labels].some((label) => label.textContent.includes('Telefone')),
          describedBy: (input.getAttribute('aria-describedby') || '').split(' ').includes(message.id),
        };
      });
      expect(links).toEqual({ type: 'tel', labelled: true, describedBy: true });
    });

    it('focuses the native input from the label', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await page.click(`${TAG} >>> label.input__label`);
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');
    });
  });

  describe('Requirement: Movimento reduzido', () => {
    const listDurations = (page: E2EPage) =>
      page.$eval(
        TAG,
        (el, l: string) => getComputedStyle(el.shadowRoot.querySelector(l)).transitionDuration.split(', '),
        LIST,
      );

    it('fades the list with a duration token by default', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await page.click(`${TAG} >>> ${BUTTON}`);
      await waitList(page, true);
      expect((await listDurations(page)).some((value) => value !== '0s')).toBe(true);
    });

    it('Scenario: Movimento reduzido — the list appears without transition', async () => {
      const page = await setup(`<uai-input-phone></uai-input-phone>`);
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.click(`${TAG} >>> ${BUTTON}`);
      await waitList(page, true);

      expect((await listDurations(page)).every((value) => value === '0s')).toBe(true);
      expect(
        await page.$eval(TAG, (el, l: string) => getComputedStyle(el.shadowRoot.querySelector(l)).opacity, LIST),
      ).toBe('1');
      const container = await page.$eval(TAG, (el) =>
        getComputedStyle(el.shadowRoot.querySelector('[part="input-container"]')).transitionDuration.split(', '),
      );
      expect(container.every((value) => value === '0s')).toBe(true);
    });
  });
});
