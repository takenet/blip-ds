import { E2EPage, newE2EPage } from '@stencil/core/testing';

const TAG = 'uai-input-chips';
const INPUT = 'input[part="input"]';
const CHIP = 'li[part="chip"]';
const REMOVE = 'button[part="chip-remove"]';

const EVENTS = [
  'uaiChange',
  'uaiChangeChips',
  'uaiInputChipsFocus',
  'uaiBlur',
  'uaiInputChipsInput',
  'uaiExtendedQuantityInput',
  'uaiSubmit',
];

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
  await page.evaluate((names: string[]) => {
    const w = window as any;
    w.submissions = [];
    w.events = [];
    document.querySelectorAll('form').forEach((form) =>
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        w.submissions.push([...new FormData(form).entries()]);
      }),
    );
    for (const name of names) {
      document.addEventListener(name, (event: CustomEvent) => {
        const { detail } = event;
        w.events.push([name, detail instanceof Event ? detail.type : (detail ?? null)]);
      });
    }
  }, EVENTS);
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
    (sel: string, inputSel: string, chipSel: string, removeSel: string) => {
      const root = document.querySelector(sel).shadowRoot;
      const input = root.querySelector(inputSel) as HTMLInputElement;
      const list = root.querySelector('ul[part="chips"]');
      const chips = [...root.querySelectorAll(chipSel)];
      const focused = root.activeElement;
      return {
        label: root.querySelector('label.input__label')?.textContent.trim() ?? null,
        message: root.querySelector('[part="input__message"]')?.textContent.trim() ?? null,
        counter: root.querySelector('.input__counter')?.textContent.trim() ?? null,
        input: !!input,
        inputValue: input?.value ?? null,
        inputDisabled: input?.disabled ?? null,
        inputReadonly: input?.readOnly ?? null,
        listRole: list?.getAttribute('role') ?? null,
        chips: chips.map((chip) => chip.querySelector('span.chip__label')?.textContent.trim() ?? null),
        titles: chips.map((chip) => chip.querySelector('span.chip__label')?.getAttribute('title') ?? null),
        roles: chips.map((chip) => chip.getAttribute('role')),
        invalid: chips.map((chip) => chip.classList.contains('chip--invalid')),
        removeLabels: [...root.querySelectorAll(removeSel)].map((button) => button.getAttribute('aria-label')),
        focused: focused ? focused.getAttribute('part') || focused.tagName : null,
      };
    },
    selector,
    INPUT,
    CHIP,
    REMOVE,
  );

const prop = (page: E2EPage, name: string, selector = TAG) => page.$eval(selector, (el: any, n: string) => el[n], name);
const call = (page: E2EPage, method: string, selector = TAG, ...args: unknown[]) =>
  page.$eval(selector, (el: any, m: string, a: unknown[]) => el[m](...a), method, args);
const isValid = (page: E2EPage, selector = TAG) => call(page, 'isValid', selector);
const get = (page: E2EPage, selector = TAG) => call(page, 'get', selector);

const focusInput = async (page: E2EPage, selector = TAG) => {
  await page.click(`${selector} >>> ${INPUT}`);
  await page.waitForChanges();
};

const typeInto = async (page: E2EPage, text: string, selector = TAG) => {
  const input = await page.find(`${selector} >>> ${INPUT}`);
  await input.type(text);
  await page.waitForChanges();
};

const press = async (page: E2EPage, key: string) => {
  await page.keyboard.press(key as any);
  await page.waitForChanges();
};

const blur = async (page: E2EPage) => {
  await page.$eval('#outside', (el: HTMLElement) => el.focus());
  await page.waitForChanges();
};

// Simulates a paste: the browser sets the value and fires an input event.
const paste = async (page: E2EPage, text: string, selector = TAG) => {
  await page.$eval(
    selector,
    (el, inputSel: string, value: string) => {
      const input = el.shadowRoot.querySelector(inputSel) as HTMLInputElement;
      input.focus();
      input.value = value;
      input.dispatchEvent(
        new InputEvent('input', { bubbles: true, composed: true, inputType: 'insertFromPaste', data: value }),
      );
    },
    INPUT,
    text,
  );
  await page.waitForChanges();
};

// Resolves a UAI token to the computed value of a property, inside the same theme as the field.
const token = (page: E2EPage, name: string, property = 'color') =>
  page.evaluate(
    (tokenName: string, p: string) => {
      const probe = document.createElement('div');
      probe.style.setProperty(p, `var(--${tokenName})`);
      document.querySelector('uai-theme-provider').appendChild(probe);
      const value = getComputedStyle(probe).getPropertyValue(p);
      probe.remove();
      return value;
    },
    name,
    property,
  );

const containerStyle = (page: E2EPage, selector = TAG) =>
  page.$eval(selector, (el) => {
    const style = getComputedStyle(el.shadowRoot.querySelector('[part="input-container"]'));
    return { minHeight: style.minHeight, border: style.borderTopColor };
  });

const chipStyle = (page: E2EPage, index = 0, selector = TAG) =>
  page.$eval(
    selector,
    (el, chipSel: string, i: number) => {
      const style = getComputedStyle(el.shadowRoot.querySelectorAll(chipSel)[i]);
      return { background: style.backgroundColor, border: style.borderTopColor };
    },
    CHIP,
    index,
  );

describe('uai-input-chips e2e', () => {
  describe('Requirement: Contrato herdado', () => {
    it('Scenario: Chips iniciais em JSON — shows two chips and get() returns both values', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="E-mails" chips='["ana@blip.ai", "bia@blip.ai"]'></uai-input-chips>`,
      );
      const current = await state(page);

      expect(current.listRole).toBe('list');
      expect(current.chips).toEqual(['ana@blip.ai', 'bia@blip.ai']);
      expect(current.roles).toEqual(['listitem', 'listitem']);
      expect(current.titles).toEqual(['ana@blip.ai', 'bia@blip.ai']);
      expect(await get(page)).toEqual(['ana@blip.ai', 'bia@blip.ai']);
    });

    it('accepts chips as an array property', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes"></uai-input-chips>`);
      await page.$eval(TAG, (el: any) => (el.chips = ['ana', 'bia']));
      await page.waitForChanges();
      expect((await state(page)).chips).toEqual(['ana', 'bia']);
      expect(await get(page)).toEqual(['ana', 'bia']);
    });

    it('Scenario: Adicionar por método — add("carla") shows the chip carla', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" chips='["ana"]'></uai-input-chips>`);
      await call(page, 'add', TAG, 'carla');
      await page.waitForChanges();

      expect((await state(page)).chips).toEqual(['ana', 'carla']);
      expect(await get(page)).toEqual(['ana', 'carla']);
    });

    it('emits focus, input, blur and submit events and supports setFocus(), removeFocus() and clear()', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="Nomes" chips='["ana"]'></uai-input-chips><button id="outside">Fora</button>`,
      );
      await call(page, 'setFocus');
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');
      expect((await events(page, 'uaiInputChipsFocus')).length).toBeGreaterThan(0);

      await typeInto(page, 'b');
      expect((await events(page, 'uaiInputChipsInput')).every(([, detail]) => detail === 'input')).toBe(true);
      expect((await events(page, 'uaiInputChipsInput')).length).toBeGreaterThan(0);
      expect(await prop(page, 'value')).toBe('b');

      await call(page, 'removeFocus');
      await page.waitForChanges();
      expect((await state(page)).focused).toBeNull();
      expect((await events(page, 'uaiBlur')).pop()).toEqual(['uaiBlur', ['ana']]);
      expect((await events(page, 'uaiSubmit')).pop()).toEqual(['uaiSubmit', { value: ['ana'] }]);

      await call(page, 'clear');
      await page.waitForChanges();
      expect((await state(page)).chips).toEqual([]);
      expect(await get(page)).toEqual([]);
    });

    it('puts dataTest and aria-label on the native input and dtButtonClose on the remove buttons', async () => {
      const page = await setup(
        `<uai-input-chips data-test="emails" dt-button-close="remove-chip" aria-label="E-mails" chips='["ana"]'></uai-input-chips>`,
      );
      const attributes = await page.$eval(
        TAG,
        (el, i: string, b: string) => {
          const input = el.shadowRoot.querySelector(i);
          const button = el.shadowRoot.querySelector(b);
          return {
            test: input.getAttribute('data-test'),
            label: input.getAttribute('aria-label'),
            type: input.getAttribute('type'),
            button: button.getAttribute('data-test'),
            buttonType: button.getAttribute('type'),
          };
        },
        INPUT,
        REMOVE,
      );
      expect(attributes).toEqual({
        test: 'emails',
        label: 'E-mails',
        type: 'text',
        button: 'remove-chip',
        buttonType: 'button',
      });
    });
  });

  describe('Requirement: Criação de chips', () => {
    it('Scenario: Enter cria chip — creates the trimmed chip, empties the field and does not submit the form', async () => {
      const page = await setup(`
        <form>
          <uai-input-chips name="names" aria-label="Nomes"></uai-input-chips>
          <button id="submit">Enviar</button>
        </form>`);
      await focusInput(page);
      await typeInto(page, '  ana  ');
      await press(page, 'Enter');

      const current = await state(page);
      expect(current.chips).toEqual(['ana']);
      expect(current.inputValue).toBe('');
      expect(await submissions(page)).toEqual([]);
      expect((await events(page, 'uaiChange')).pop()).toEqual(['uaiChange', { data: ['ana'], value: 'ana' }]);
      expect((await events(page, 'uaiChangeChips')).pop()).toEqual(['uaiChangeChips', { data: ['ana'], value: 'ana' }]);
    });

    it('submits the form with Enter when the field is empty', async () => {
      const page = await setup(`
        <form>
          <uai-input-chips name="names" aria-label="Nomes" chips='["ana"]'></uai-input-chips>
          <button id="submit">Enviar</button>
        </form>`);
      await focusInput(page);
      await press(page, 'Enter');

      expect(await submissions(page)).toEqual([[['names', 'ana']]]);
    });

    it('Scenario: Delimitadores — typing "ana, bia; carla" creates three chips', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes"></uai-input-chips>`);
      await focusInput(page);
      await typeInto(page, 'ana, bia; carla');
      await press(page, 'Enter');

      expect((await state(page)).chips).toEqual(['ana', 'bia', 'carla']);
      expect((await state(page)).inputValue).toBe('');
    });

    it('creates several chips when pasting text with delimiters', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes"></uai-input-chips>`);
      await paste(page, 'ana,bia;carla,');

      expect((await state(page)).chips).toEqual(['ana', 'bia', 'carla']);
    });

    it('splits by custom delimiters', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes"></uai-input-chips>`);
      await page.$eval(TAG, (el: any) => (el.delimiters = /\|/));
      await page.waitForChanges();
      await focusInput(page);
      await typeInto(page, 'ana|bia');
      await press(page, 'Enter');

      expect((await state(page)).chips).toEqual(['ana', 'bia']);
    });

    it('ignores empty values', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes"></uai-input-chips>`);
      await focusInput(page);
      await typeInto(page, ' , ;  ');
      await press(page, 'Enter');

      expect((await state(page)).chips).toEqual([]);
    });

    it('Scenario: Repetido — adding "ana" next to "Ana" creates no chip; duplicated allows it', async () => {
      const page = await setup(`
        <uai-input-chips id="unique" aria-label="Nomes" chips='["Ana"]'></uai-input-chips>
        <uai-input-chips id="dup" aria-label="Nomes" duplicated chips='["Ana"]'></uai-input-chips>`);
      for (const selector of ['#unique', '#dup']) {
        await focusInput(page, selector);
        await typeInto(page, 'ana', selector);
        await press(page, 'Enter');
      }

      expect((await state(page, '#unique')).chips).toEqual(['Ana']);
      expect((await state(page, '#dup')).chips).toEqual(['Ana', 'ana']);
    });

    it('creates the chip on blur with blurCreation, and not without it', async () => {
      const page = await setup(`
        <uai-input-chips id="blur" aria-label="Nomes" blur-creation></uai-input-chips>
        <uai-input-chips id="plain" aria-label="Nomes"></uai-input-chips>
        <button id="outside">Fora</button>`);
      for (const selector of ['#blur', '#plain']) {
        await focusInput(page, selector);
        await typeInto(page, 'ana', selector);
        await blur(page);
      }

      expect((await state(page, '#blur')).chips).toEqual(['ana']);
      expect((await state(page, '#plain')).chips).toEqual([]);
    });
  });

  describe('Requirement: Remoção de chips', () => {
    it('Scenario: Remover pelo botão — the chip disappears and focus moves to the field', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" chips='["ana", "bia"]'></uai-input-chips>`);
      expect((await state(page)).removeLabels).toEqual(['Remover ana', 'Remover bia']);

      await page.click(`${TAG} >>> ${REMOVE}[aria-label="Remover ana"]`);
      await page.waitForChanges();

      const current = await state(page);
      expect(current.chips).toEqual(['bia']);
      expect(current.focused).toBe('input');
      expect((await events(page, 'uaiChange')).length).toBeGreaterThan(0);
      expect((await events(page, 'uaiChangeChips')).pop()[1].data).toEqual(['bia']);
    });

    it('removes a chip with the keyboard on the remove button', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" chips='["ana", "bia"]'></uai-input-chips>`);
      await page.$eval(TAG, (el, b: string) => (el.shadowRoot.querySelector(b) as HTMLElement).focus(), REMOVE);
      await press(page, 'Enter');

      expect((await state(page)).chips).toEqual(['bia']);
      expect((await state(page)).focused).toBe('input');
    });

    it('Scenario: Backspace — removes the last chip when the field is empty; Delete too', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="Nomes" chips='["ana", "bia", "carla"]'></uai-input-chips>`,
      );
      await focusInput(page);
      await press(page, 'Backspace');
      expect((await state(page)).chips).toEqual(['ana', 'bia']);

      await press(page, 'Delete');
      expect((await state(page)).chips).toEqual(['ana']);
      expect((await events(page, 'uaiChange')).length).toBeGreaterThan(0);
    });

    it('keeps the chips while Backspace edits the typed text', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" chips='["ana"]'></uai-input-chips>`);
      await focusInput(page);
      await typeInto(page, 'bi');
      await press(page, 'Backspace');

      const current = await state(page);
      expect(current.chips).toEqual(['ana']);
      expect(current.inputValue).toBe('b');
    });

    it('names the remove button in each language', async () => {
      const page = await setup(`
        <uai-input-chips id="pt" aria-label="Nomes" chips='["ana"]'></uai-input-chips>
        <uai-input-chips id="en" aria-label="Names" language="en_US" chips='["ana"]'></uai-input-chips>
        <uai-input-chips id="es" aria-label="Nombres" language="es_ES" chips='["ana"]'></uai-input-chips>`);
      expect((await state(page, '#pt')).removeLabels).toEqual(['Remover ana']);
      expect((await state(page, '#en')).removeLabels).toEqual(['Remove ana']);
      expect((await state(page, '#es')).removeLabels).toEqual(['Quitar ana']);
    });

    it('shows no remove buttons when disabled or readonly', async () => {
      const page = await setup(`
        <uai-input-chips id="off" aria-label="Nomes" disabled chips='["ana"]'></uai-input-chips>
        <uai-input-chips id="ro" aria-label="Nomes" readonly chips='["ana"]'></uai-input-chips>`);
      const disabled = await state(page, '#off');
      const readonly = await state(page, '#ro');

      expect(disabled.chips).toEqual(['ana']);
      expect(disabled.removeLabels).toEqual([]);
      expect(disabled.inputDisabled).toBe(true);
      expect(await page.find('#off')).toHaveClass('uai-input-chips--disabled');
      expect(readonly.chips).toEqual(['ana']);
      expect(readonly.removeLabels).toEqual([]);
      expect(await page.find('#ro')).toHaveClass('uai-input-chips--readonly');
    });

    it('does not remove chips with Backspace when readonly', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" readonly chips='["ana"]'></uai-input-chips>`);
      await focusInput(page);
      await press(page, 'Backspace');
      expect((await state(page)).chips).toEqual(['ana']);
    });
  });

  describe('Requirement: Limite de chips', () => {
    it('Scenario: Limite atingido — the text field disappears and uaiExtendedQuantityInput is emitted', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" max-chips-length="2"></uai-input-chips>`);
      await focusInput(page);
      await typeInto(page, 'ana');
      await press(page, 'Enter');
      expect((await state(page)).input).toBe(true);

      await typeInto(page, 'bia');
      await press(page, 'Enter');

      const current = await state(page);
      expect(current.chips).toEqual(['ana', 'bia']);
      expect(current.input).toBe(false);
      expect((await events(page, 'uaiExtendedQuantityInput')).pop()).toEqual([
        'uaiExtendedQuantityInput',
        { value: true },
      ]);
    });

    it('shows the field again after removing a chip below the limit', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="Nomes" max-chips-length="2" chips='["ana", "bia"]'></uai-input-chips>`,
      );
      expect((await state(page)).input).toBe(false);

      await page.click(`${TAG} >>> ${REMOVE}`);
      await page.waitForChanges();
      expect((await state(page)).input).toBe(true);
    });

    it('shows the counter <chips>/<maxChipsLength> with counterLength', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="Nomes" counter-length max-chips-length="5" chips='["ana"]'></uai-input-chips>`,
      );
      expect((await state(page)).counter).toBe('1/5');

      await focusInput(page);
      await typeInto(page, 'bia');
      await press(page, 'Enter');
      expect((await state(page)).counter).toBe('2/5');
    });
  });

  describe('Requirement: Formulário nativo', () => {
    it("Scenario: Valores nomeados — FormData.getAll('emails') is ['ana', 'bia']", async () => {
      const page = await setup(`
        <form id="form">
          <uai-input-chips name="emails" aria-label="E-mails" chips='["ana", "bia"]'></uai-input-chips>
          <uai-input-chips input-name="others" aria-label="Outros" chips='["carla"]'></uai-input-chips>
          <uai-input-chips name="empty" aria-label="Vazio"></uai-input-chips>
          <uai-input-chips aria-label="Sem nome" chips='["dani"]'></uai-input-chips>
          <button id="submit">Enviar</button>
        </form>`);
      const all = await page.$eval('#form', (form: HTMLFormElement) => new FormData(form).getAll('emails'));
      expect(all).toEqual(['ana', 'bia']);

      await page.click('#submit');
      expect(await submissions(page)).toEqual([
        [
          ['emails', 'ana'],
          ['emails', 'bia'],
          ['others', 'carla'],
        ],
      ]);
    });

    it('sends the chips added by the person and not the typed text', async () => {
      const page = await setup(`
        <form>
          <uai-input-chips name="names" aria-label="Nomes"></uai-input-chips>
          <button id="submit">Enviar</button>
        </form>`);
      await focusInput(page);
      await typeInto(page, 'ana');
      await press(page, 'Enter');
      await typeInto(page, 'bi');
      await page.click('#submit');
      await page.waitForChanges();

      expect((await submissions(page)).pop()).toEqual([['names', 'ana']]);
    });

    it('Scenario: Reset — restores the initial chips and clears the validation state', async () => {
      const page = await setup(`
        <form>
          <uai-input-chips name="emails" aria-label="E-mails" type="email" chips='["ana@blip.ai"]'></uai-input-chips>
          <button id="reset" type="reset">Limpar</button>
        </form>
        <button id="outside">Fora</button>`);
      await focusInput(page);
      await typeInto(page, 'bia');
      await press(page, 'Enter');
      await blur(page);
      expect((await state(page)).chips).toEqual(['ana@blip.ai', 'bia']);
      expect(await page.find(TAG)).toHaveClass('uai-input-chips--danger');

      await page.click('#reset');
      await page.waitForChanges();

      const current = await state(page);
      expect(current.chips).toEqual(['ana@blip.ai']);
      expect(current.invalid).toEqual([false]);
      expect(current.message).not.toBe('Use apenas e-mails válidos.');
      expect(await page.find(TAG)).not.toHaveClass('uai-input-chips--danger');
      expect(await isValid(page)).toBe(true);
    });

    it('Scenario: Fieldset desabilitado — the field is disabled, without remove buttons and left out of FormData', async () => {
      const page = await setup(`
        <form>
          <fieldset id="group" disabled>
            <uai-input-chips name="names" aria-label="Nomes" chips='["ana"]'></uai-input-chips>
          </fieldset>
          <button id="submit">Enviar</button>
        </form>`);
      await page.waitForChanges();

      expect(await page.find(TAG)).toHaveClass('uai-input-chips--disabled');
      const disabled = await state(page);
      expect(disabled.inputDisabled).toBe(true);
      expect(disabled.removeLabels).toEqual([]);
      await page.click('#submit');
      expect(await submissions(page)).toEqual([[]]);

      await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = false));
      await page.waitForChanges();
      expect(await page.find(TAG)).not.toHaveClass('uai-input-chips--disabled');
      expect((await state(page)).removeLabels).toEqual(['Remover ana']);
      await page.click('#submit');
      expect((await submissions(page)).pop()).toEqual([['names', 'ana']]);
    });
  });

  describe('Requirement: Validação', () => {
    it('Scenario: E-mail inválido — chip "ana" gets the error style, the field shows the message and isValid() returns false', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="E-mails" type="email"></uai-input-chips><button id="outside">Fora</button>`,
      );
      await focusInput(page);
      await typeInto(page, 'ana');
      await press(page, 'Enter');
      await typeInto(page, 'bia@blip.ai');
      await press(page, 'Enter');
      await blur(page);

      const current = await state(page);
      expect(current.chips).toEqual(['ana', 'bia@blip.ai']);
      expect(current.invalid).toEqual([true, false]);
      expect(current.message).toBe('Use apenas e-mails válidos.');
      expect(await page.find(TAG)).toHaveClass('uai-input-chips--danger');
      expect(await isValid(page)).toBe(false);
    });

    it('uses emailErrorMessage and accepts only valid e-mails', async () => {
      const page = await setup(`
        <uai-input-chips id="custom" aria-label="E-mails" type="email" email-error-message="E-mail ruim."></uai-input-chips>
        <uai-input-chips id="ok" aria-label="E-mails" type="email" chips='["ana@blip.ai"]'></uai-input-chips>
        <button id="outside">Fora</button>`);
      await focusInput(page, '#custom');
      await typeInto(page, 'ana', '#custom');
      await press(page, 'Enter');
      await blur(page);

      expect((await state(page, '#custom')).message).toBe('E-mail ruim.');
      expect(await isValid(page, '#ok')).toBe(true);
      expect(await page.find('#ok')).not.toHaveClass('uai-input-chips--danger');
    });

    it('blocks the submit with an invalid e-mail chip', async () => {
      const page = await setup(`
        <form>
          <uai-input-chips name="emails" aria-label="E-mails" type="email" chips='["ana"]'></uai-input-chips>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click('#submit');
      await page.waitForChanges();

      expect(await submissions(page)).toEqual([]);
      expect((await state(page)).message).toBe('Use apenas e-mails válidos.');
    });

    it('shows the required message without chips, on blur and on submit', async () => {
      const page = await setup(`
        <form>
          <uai-input-chips id="default" name="a" aria-label="A" required></uai-input-chips>
          <uai-input-chips id="custom" name="b" aria-label="B" required required-error-message="Informe um nome."></uai-input-chips>
          <button id="submit">Enviar</button>
        </form>
        <button id="outside">Fora</button>`);
      await focusInput(page, '#default');
      await blur(page);
      expect((await state(page, '#default')).message).toBe('Adicione pelo menos um valor.');
      expect(await page.find('#default')).toHaveClass('uai-input-chips--danger');
      expect(await isValid(page, '#default')).toBe(false);

      await page.click('#submit');
      await page.waitForChanges();
      expect(await submissions(page)).toEqual([]);
      expect((await state(page, '#custom')).message).toBe('Informe um nome.');
      expect(await isValid(page, '#custom')).toBe(false);
    });

    it('becomes valid once a required field gets a chip', async () => {
      const page = await setup(
        `<uai-input-chips aria-label="Nomes" required></uai-input-chips><button id="outside">Fora</button>`,
      );
      await focusInput(page);
      await blur(page);
      expect(await page.find(TAG)).toHaveClass('uai-input-chips--danger');

      await focusInput(page);
      await typeInto(page, 'ana');
      await press(page, 'Enter');
      await blur(page);
      expect(await page.find(TAG)).not.toHaveClass('uai-input-chips--danger');
      expect(await isValid(page)).toBe(true);
    });
  });

  describe('Requirement: Tamanhos, estados e acessibilidade', () => {
    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('Scenario: Tamanho padrão — uses control-height/medium as minimum height and border/input', async () => {
          const page = await setup(`<uai-input-chips aria-label="Nomes"></uai-input-chips>`, theme);
          const style = await containerStyle(page);

          expect(await page.find(TAG)).toHaveClass('uai-input-chips--size-medium');
          expect(style.minHeight).toBe(await token(page, 'uai-control-height-medium', 'min-height'));
          expect(style.border).toBe(await token(page, 'uai-border-input'));
        });

        it('uses feedback/error and feedback/success, with danger over success', async () => {
          const page = await setup(
            `<uai-input-chips id="error" aria-label="A" danger></uai-input-chips>
             <uai-input-chips id="ok" aria-label="B" success></uai-input-chips>
             <uai-input-chips id="both" aria-label="C" danger success></uai-input-chips>`,
            theme,
          );
          const error = await token(page, 'uai-feedback-error');

          expect((await containerStyle(page, '#error')).border).toBe(error);
          expect((await containerStyle(page, '#ok')).border).toBe(await token(page, 'uai-feedback-success'));
          expect((await containerStyle(page, '#both')).border).toBe(error);
          expect(await page.find('#both')).toHaveClass('uai-input-chips--danger');
          expect(await page.find('#both')).not.toHaveClass('uai-input-chips--success');
        });

        it('paints chips with surface/muted and invalid chips with feedback/error', async () => {
          const page = await setup(
            `<uai-input-chips aria-label="E-mails" type="email" chips='["ana@blip.ai", "ana"]'></uai-input-chips>`,
            theme,
          );
          expect((await chipStyle(page, 0)).background).toBe(
            await token(page, 'uai-surface-muted', 'background-color'),
          );
          expect((await chipStyle(page, 1)).border).toBe(await token(page, 'uai-feedback-error'));
        });
      });
    }

    it('uses control-height/short as minimum height with size short', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" size="short"></uai-input-chips>`);
      expect(await page.find(TAG)).toHaveClass('uai-input-chips--size-short');
      expect((await containerStyle(page)).minHeight).toBe(await token(page, 'uai-control-height-short', 'min-height'));
    });

    it('grows with the chips instead of scrolling', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" style="width: 200px"></uai-input-chips>`);
      const height = () =>
        page.$eval(TAG, (el) => el.shadowRoot.querySelector('[part="input-container"]').getBoundingClientRect().height);
      const before = await height();
      await page.$eval(TAG, (el: any) => (el.chips = Array.from({ length: 10 }, (_, i) => `pessoa-${i}`)));
      await page.waitForChanges();
      expect(await height()).toBeGreaterThan(before);
    });

    it('shows the state messages', async () => {
      const page = await setup(`
        <uai-input-chips id="error" aria-label="A" danger error-message="Erro."></uai-input-chips>
        <uai-input-chips id="ok" aria-label="B" success success-message="Certo."></uai-input-chips>
        <uai-input-chips id="help" aria-label="C" helper-message="Ajuda."></uai-input-chips>`);
      expect((await state(page, '#error')).message).toBe('Erro.');
      expect((await state(page, '#ok')).message).toBe('Certo.');
      expect(await page.find('#ok')).toHaveClass('uai-input-chips--success');
      expect((await state(page, '#help')).message).toBe('Ajuda.');
    });

    it('renders the label only when given and links it and the message to the input', async () => {
      const page = await setup(`
        <uai-input-chips id="labelled" label="Convidados" placeholder="Digite" helper-message="Separe por virgula."></uai-input-chips>
        <uai-input-chips id="bare" aria-label="Convidados"></uai-input-chips>`);
      expect((await state(page, '#labelled')).label).toBe('Convidados');
      expect((await state(page, '#bare')).label).toBeNull();

      const links = await page.$eval(
        '#labelled',
        (el, i: string) => {
          const root = el.shadowRoot;
          const input = root.querySelector(i) as HTMLInputElement;
          const message = root.querySelector('[part="input__message"]');
          return {
            placeholder: input.getAttribute('placeholder'),
            labelled: [...input.labels].some((label) => label.textContent.includes('Convidados')),
            describedBy: (input.getAttribute('aria-describedby') || '').split(' ').includes(message.id),
          };
        },
        INPUT,
      );
      expect(links).toEqual({ placeholder: 'Digite', labelled: true, describedBy: true });
    });

    it('focuses the native input from the label', async () => {
      const page = await setup(`<uai-input-chips label="Convidados"></uai-input-chips>`);
      await page.click(`${TAG} >>> label.input__label`);
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');
    });

    it('warns when there is neither label nor aria-label', async () => {
      const page = await setup(`
        <uai-input-chips label="Convidados"></uai-input-chips>
        <uai-input-chips aria-label="Convidados"></uai-input-chips>`);
      expect(warningsAbout(page, /aria-label/i)).toHaveLength(0);

      const bare = await setup(`<uai-input-chips></uai-input-chips>`);
      expect(warningsAbout(bare, /aria-label/i)).toHaveLength(1);
    });

    const durations = (page: E2EPage, part: string) =>
      page.$eval(
        TAG,
        (el, p: string) =>
          getComputedStyle(el.shadowRoot.querySelector(`[part="${p}"]`)).transitionDuration.split(', '),
        part,
      );

    it('transitions the container and the remove button with a duration token by default', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" chips='["ana"]'></uai-input-chips>`);
      expect((await durations(page, 'input-container')).some((value) => value !== '0s')).toBe(true);
      expect((await durations(page, 'chip-remove')).some((value) => value !== '0s')).toBe(true);
    });

    it('Scenario: Movimento reduzido — with prefers-reduced-motion: reduce state changes happen without transition', async () => {
      const page = await setup(`<uai-input-chips aria-label="Nomes" chips='["ana"]'></uai-input-chips>`);
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.$eval(TAG, (el: any) => (el.danger = true));
      await page.waitForChanges();

      expect((await durations(page, 'input-container')).every((value) => value === '0s')).toBe(true);
      expect((await durations(page, 'chip-remove')).every((value) => value === '0s')).toBe(true);
    });
  });
});
