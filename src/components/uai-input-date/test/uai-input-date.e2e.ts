import { E2EPage, newE2EPage } from '@stencil/core/testing';

const TAG = 'uai-input-date';
const INPUT = 'input[part="input"]';
const BUTTON = 'button[part="calendar-button"]';
const PICKER = 'input.picker';

const themed = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const setup = async (content: string, theme = 'light', { showPicker = true } = {}) => {
  const page = await newE2EPage();
  const warnings: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'warn' || (message.type() as string) === 'warning') warnings.push(message.text());
  });
  (page as any).warnings = warnings;
  // The native picker cannot be driven by the test; count the calls instead (or remove it to test the fallback).
  await page.evaluateOnNewDocument((supported: boolean) => {
    if (supported) {
      HTMLInputElement.prototype.showPicker = function () {
        (window as any).__picked = ((window as any).__picked || 0) + 1;
      };
    } else {
      delete (HTMLInputElement.prototype as any).showPicker;
    }
  }, showPicker);
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
    for (const name of ['uaiChange', 'uaiInput', 'uaiFocus', 'uaiOnBlur']) {
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
const picked = (page: E2EPage) => page.evaluate(() => (window as any).__picked || 0);

// Snapshot of the shadow DOM pieces the contract exposes.
const state = (page: E2EPage, selector = TAG) =>
  page.evaluate(
    (sel: string, inputSel: string, buttonSel: string, pickerSel: string) => {
      const root = document.querySelector(sel).shadowRoot;
      const input = root.querySelector(inputSel) as HTMLInputElement;
      const button = root.querySelector(buttonSel) as HTMLButtonElement;
      const picker = root.querySelector(pickerSel) as HTMLInputElement;
      const focused = root.activeElement;
      return {
        label: root.querySelector('label.input__label')?.textContent.trim() ?? null,
        message: root.querySelector('[part="input__message"]')?.textContent.trim() ?? null,
        inputValue: input?.value ?? null,
        placeholder: input?.getAttribute('placeholder') ?? null,
        inputDisabled: input?.disabled ?? null,
        button: !!button,
        buttonLabel: button?.getAttribute('aria-label') ?? null,
        buttonDisabled: button?.disabled ?? null,
        feedback: !!root.querySelector('uai-icon.input__feedback'),
        picker: picker
          ? {
              type: picker.getAttribute('type'),
              tabindex: picker.getAttribute('tabindex'),
              hidden: picker.getAttribute('aria-hidden'),
              min: picker.getAttribute('min'),
              max: picker.getAttribute('max'),
            }
          : null,
        focused: focused ? focused.getAttribute('part') || focused.tagName : null,
      };
    },
    selector,
    INPUT,
    BUTTON,
    PICKER,
  );

const prop = (page: E2EPage, name: string, selector = TAG) => page.$eval(selector, (el: any, n: string) => el[n], name);
const isValid = (page: E2EPage, selector = TAG) => page.$eval(selector, (el: any) => el.isValid());

const typeInto = async (page: E2EPage, text: string, selector = TAG) => {
  const input = await page.find(`${selector} >>> ${INPUT}`);
  await input.type(text);
  await page.waitForChanges();
};

const blur = async (page: E2EPage) => {
  await page.$eval('#outside', (el: HTMLElement) => el.focus());
  await page.waitForChanges();
};

const choose = async (page: E2EPage, iso: string, selector = TAG) => {
  await page.$eval(
    selector,
    (el, pickerSel: string, value: string) => {
      const picker = el.shadowRoot.querySelector(pickerSel) as HTMLInputElement;
      picker.value = value;
      picker.dispatchEvent(new Event('change', { bubbles: true }));
    },
    PICKER,
    iso,
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
    return { height: style.height, border: style.borderTopColor, background: style.backgroundColor };
  });

describe('uai-input-date e2e', () => {
  describe('Requirement: Contrato herdado', () => {
    it('Scenario: Mudança de valor — emits uaiChange with the ISO value and uaiInput with the InputEvent', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '25122026');

      expect((await events(page, 'uaiInput')).length).toBeGreaterThan(0);
      expect((await events(page, 'uaiInput')).every(([, detail]) => detail === 'input')).toBe(true);
      expect((await events(page, 'uaiChange')).pop()).toEqual(['uaiChange', { value: '2026-12-25' }]);
      expect(await prop(page, 'value')).toBe('2026-12-25');
    });

    it('emits uaiFocus and uaiOnBlur and supports setFocus(), removeFocus() and clear()', async () => {
      const page = await setup(
        `<uai-input-date value="2026-12-25"></uai-input-date><button id="outside">Fora</button>`,
      );
      await page.$eval(TAG, (el: any) => el.setFocus());
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');

      await page.$eval(TAG, (el: any) => el.removeFocus());
      await page.waitForChanges();
      expect((await state(page)).focused).toBeNull();
      expect((await events(page)).map(([name]) => name)).toEqual(expect.arrayContaining(['uaiFocus', 'uaiOnBlur']));

      await page.$eval(TAG, (el: any) => el.clear());
      await page.waitForChanges();
      expect(await prop(page, 'value')).toBe('');
      expect((await state(page)).inputValue).toBe('');
    });

    it('puts dataTest and aria-label on the native input', async () => {
      const page = await setup(
        `<uai-input-date data-test="birth-date" aria-label="Data de nascimento" label=""></uai-input-date>`,
      );
      const attributes = await page.$eval(
        TAG,
        (el, i: string) => {
          const input = el.shadowRoot.querySelector(i);
          return { test: input.getAttribute('data-test'), label: input.getAttribute('aria-label') };
        },
        INPUT,
      );
      expect(attributes).toEqual({ test: 'birth-date', label: 'Data de nascimento' });
    });
  });

  describe('Requirement: Digitação localizada', () => {
    it('Scenario: Digitação em pt_BR — "25122026" shows 25/12/2026 and value is 2026-12-25', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '25122026');

      expect((await state(page)).inputValue).toBe('25/12/2026');
      expect(await prop(page, 'value')).toBe('2026-12-25');
    });

    it('accepts only digits and inserts the slashes', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '2a5');
      expect((await state(page)).inputValue).toBe('25');
      await typeInto(page, '1x2/');
      expect((await state(page)).inputValue).toMatch(/^25\/12\/?$/);
      await typeInto(page, '2026999');
      expect((await state(page)).inputValue).toBe('25/12/2026');
      expect(await prop(page, 'value')).toBe('2026-12-25');
    });

    it('Scenario: Formato en_US — value 2026-12-25 shows 12/25/2026', async () => {
      const page = await setup(`
        <uai-input-date id="en" language="en_US" value="2026-12-25"></uai-input-date>
        <uai-input-date id="typed" language="en_US"></uai-input-date>`);
      expect((await state(page, '#en')).inputValue).toBe('12/25/2026');

      await page.click(`#typed >>> ${INPUT}`);
      await typeInto(page, '12252026', '#typed');
      expect((await state(page, '#typed')).inputValue).toBe('12/25/2026');
      expect(await prop(page, 'value', '#typed')).toBe('2026-12-25');
    });

    it('shows dd/mm/aaaa in es_ES and formats value changes', async () => {
      const page = await setup(`<uai-input-date language="es_ES" value="2026-12-25"></uai-input-date>`);
      expect((await state(page)).inputValue).toBe('25/12/2026');

      await page.$eval(TAG, (el: any) => (el.value = '2026-01-05'));
      await page.waitForChanges();
      expect((await state(page)).inputValue).toBe('05/01/2026');
    });

    it('uses the placeholder of each language and lets placeholder win', async () => {
      const page = await setup(`
        <uai-input-date id="pt"></uai-input-date>
        <uai-input-date id="en" language="en_US"></uai-input-date>
        <uai-input-date id="es" language="es_ES"></uai-input-date>
        <uai-input-date id="custom" placeholder="Escolha"></uai-input-date>`);
      expect((await state(page, '#pt')).placeholder).toBe('dd/mm/aaaa');
      expect((await state(page, '#en')).placeholder).toBe('mm/dd/yyyy');
      expect((await state(page, '#es')).placeholder).toBe('dd/mm/aaaa');
      expect((await state(page, '#custom')).placeholder).toBe('Escolha');
    });

    it('Scenario: Idioma desconhecido — falls back to pt_BR and warns once', async () => {
      const page = await setup(`<uai-input-date language="fr_FR" value="2026-12-25"></uai-input-date>`);
      await page.$eval(TAG, (el: any) => (el.value = '2026-12-24'));
      await page.waitForChanges();

      const current = await state(page);
      expect(current.inputValue).toBe('24/12/2026');
      expect(current.label).toBe('Data');
      expect(current.placeholder).toBe('dd/mm/aaaa');
      expect(current.buttonLabel).toBe('Abrir calendário');
      expect(warningsAbout(page, /language|fr_FR/i)).toHaveLength(1);
    });
  });

  describe('Requirement: Calendário', () => {
    it('exposes a native button named in each language and a hidden native date picker with min and max', async () => {
      const page = await setup(`
        <uai-input-date id="pt" min="2026-01-01" max="2026-12-31"></uai-input-date>
        <uai-input-date id="en" language="en_US"></uai-input-date>
        <uai-input-date id="es" language="es_ES"></uai-input-date>`);
      const button = await page.$eval(
        '#pt',
        (el, b: string) => {
          const node = el.shadowRoot.querySelector(b);
          return { tag: node.tagName, type: node.getAttribute('type') };
        },
        BUTTON,
      );
      expect(button).toEqual({ tag: 'BUTTON', type: 'button' });

      const pt = await state(page, '#pt');
      expect(pt.buttonLabel).toBe('Abrir calendário');
      expect(pt.picker).toEqual({ type: 'date', tabindex: '-1', hidden: 'true', min: '2026-01-01', max: '2026-12-31' });
      expect((await state(page, '#en')).buttonLabel).toBe('Open calendar');
      expect((await state(page, '#es')).buttonLabel).toBe('Abrir calendario');
    });

    it('Scenario: Escolher pelo calendário — the chosen date shows 25/12/2026, value is 2026-12-25 and uaiChange is emitted', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> ${BUTTON}`);
      await page.waitForChanges();
      expect(await picked(page)).toBe(1);

      await choose(page, '2026-12-25');
      expect((await state(page)).inputValue).toBe('25/12/2026');
      expect(await prop(page, 'value')).toBe('2026-12-25');
      expect((await events(page, 'uaiChange')).pop()).toEqual(['uaiChange', { value: '2026-12-25' }]);
    });

    it('opens the same picker with Alt+ArrowDown on the field', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await page.keyboard.down('Alt');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.up('Alt');
      await page.waitForChanges();
      expect(await picked(page)).toBe(1);

      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      expect(await picked(page)).toBe(1);
    });

    it('moves the focus to the field when the browser has no showPicker', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`, 'light', { showPicker: false });
      await page.click(`${TAG} >>> ${BUTTON}`);
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');
    });

    it('Scenario: Somente leitura — the calendar button does not appear; disabled keeps it disabled', async () => {
      const page = await setup(`
        <uai-input-date id="ro" readonly value="2026-12-25"></uai-input-date>
        <uai-input-date id="off" disabled value="2026-12-25"></uai-input-date>`);

      const readonly = await state(page, '#ro');
      expect(readonly.button).toBe(false);
      expect(readonly.inputValue).toBe('25/12/2026');
      expect(await page.find('#ro')).toHaveClass('uai-input-date--readonly');

      await page.click(`#ro >>> ${INPUT}`);
      await page.keyboard.down('Alt');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.up('Alt');
      await page.waitForChanges();
      expect(await picked(page)).toBe(0);

      const disabled = await state(page, '#off');
      expect(disabled.button).toBe(true);
      expect(disabled.buttonDisabled).toBe(true);
      expect(disabled.inputDisabled).toBe(true);
      expect(await page.find('#off')).toHaveClass('uai-input-date--disabled');
    });
  });

  describe('Requirement: Formulário nativo', () => {
    it('Scenario: Valor nomeado — FormData has birth = "2026-12-25"', async () => {
      const page = await setup(`
        <form>
          <uai-input-date name="birth"></uai-input-date>
          <uai-input-date input-name="start" value="2026-01-10"></uai-input-date>
          <uai-input-date name="empty"></uai-input-date>
          <uai-input-date value="2026-03-01"></uai-input-date>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '25122026');
      await page.click('#submit');

      expect(await submissions(page)).toEqual([
        [
          ['birth', '2026-12-25'],
          ['start', '2026-01-10'],
        ],
      ]);
    });

    it('sends nothing without a valid date', async () => {
      const page = await setup(`
        <form>
          <uai-input-date id="partial" name="partial"></uai-input-date>
          <uai-input-date id="missing" name="missing"></uai-input-date>
          <button id="submit">Enviar</button>
        </form>`);
      await page.click(`#partial >>> ${INPUT}`);
      await typeInto(page, '2512', '#partial');
      await page.click(`#missing >>> ${INPUT}`);
      await typeInto(page, '31022026', '#missing');
      await page.click('#submit');
      await page.waitForChanges();

      const sent = (await submissions(page)).flat().map(([name]) => name);
      expect(sent).not.toContain('partial');
      expect(sent).not.toContain('missing');
    });

    it('Scenario: Reset — restores the initial value and clears the validation state', async () => {
      const page = await setup(`
        <form>
          <uai-input-date name="birth" value="2026-01-10" date-error-message="Data invalida."></uai-input-date>
          <button id="reset" type="reset">Limpar</button>
        </form>
        <button id="outside">Fora</button>`);
      await page.$eval(TAG, (el: any) => el.clear());
      await page.waitForChanges();
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '31022026');
      await blur(page);
      expect(await page.find(TAG)).toHaveClass('uai-input-date--danger');
      expect((await state(page)).message).toBe('Data invalida.');

      await page.click('#reset');
      await page.waitForChanges();

      expect(await prop(page, 'value')).toBe('2026-01-10');
      const current = await state(page);
      expect(current.inputValue).toBe('10/01/2026');
      expect(current.message).not.toBe('Data invalida.');
      expect(await page.find(TAG)).not.toHaveClass('uai-input-date--danger');
      expect(await isValid(page)).toBe(true);
    });

    it('Scenario: Fieldset desabilitado — field and button are disabled and left out of FormData', async () => {
      const page = await setup(`
        <form>
          <fieldset id="group" disabled>
            <uai-input-date name="birth" value="2026-12-25"></uai-input-date>
          </fieldset>
          <button id="submit">Enviar</button>
        </form>`);
      await page.waitForChanges();

      expect(await page.find(TAG)).toHaveClass('uai-input-date--disabled');
      const disabled = await state(page);
      expect(disabled.inputDisabled).toBe(true);
      expect(disabled.buttonDisabled).toBe(true);
      await page.click('#submit');
      expect(await submissions(page)).toEqual([[]]);

      await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = false));
      await page.waitForChanges();
      expect(await page.find(TAG)).not.toHaveClass('uai-input-date--disabled');
      expect((await state(page)).buttonDisabled).toBe(false);
      await page.click('#submit');
      expect((await submissions(page)).pop()).toEqual([['birth', '2026-12-25']]);
    });
  });

  describe('Requirement: Validação', () => {
    it('Scenario: Data inexistente — 31/02/2026 shows the error state, empties value and isValid() returns false', async () => {
      const page = await setup(`<uai-input-date></uai-input-date><button id="outside">Fora</button>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '31022026');
      await blur(page);

      const current = await state(page);
      expect(current.inputValue).toBe('31/02/2026');
      expect(current.message).toBe('Informe uma data válida.');
      expect(current.feedback).toBe(true);
      expect(await page.find(TAG)).toHaveClass('uai-input-date--danger');
      expect(await prop(page, 'value')).toBe('');
      expect(await isValid(page)).toBe(false);
    });

    it('shows dateErrorMessage for an incomplete date and clears it once the date is complete', async () => {
      const page = await setup(
        `<uai-input-date date-error-message="Data incompleta."></uai-input-date><button id="outside">Fora</button>`,
      );
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '2512');
      await blur(page);
      expect((await state(page)).message).toBe('Data incompleta.');
      expect(await prop(page, 'value')).toBe('');
      expect(await isValid(page)).toBe(false);

      await page.click(`${TAG} >>> ${INPUT}`);
      await page.keyboard.press('End');
      await typeInto(page, '2026');
      await blur(page);
      expect(await page.find(TAG)).not.toHaveClass('uai-input-date--danger');
      expect(await prop(page, 'value')).toBe('2026-12-25');
      expect(await isValid(page)).toBe(true);
    });

    it('shows the required message when required and empty, on blur and on submit', async () => {
      const page = await setup(`
        <form>
          <uai-input-date id="default" name="a" required></uai-input-date>
          <uai-input-date id="custom" name="b" required required-error-message="Informe o dia."></uai-input-date>
          <button id="submit">Enviar</button>
        </form>
        <button id="outside">Fora</button>`);
      await page.click(`#default >>> ${INPUT}`);
      await blur(page);
      expect((await state(page, '#default')).message).toBe('Informe a data.');
      expect(await page.find('#default')).toHaveClass('uai-input-date--danger');

      await page.click('#submit');
      await page.waitForChanges();
      expect(await submissions(page)).toEqual([]);
      expect((await state(page, '#custom')).message).toBe('Informe o dia.');
      expect(await isValid(page, '#custom')).toBe(false);
    });

    it('Scenario: Antes do mínimo — 31/12/2025 with min 2026-01-01 shows the default message with the minimum date', async () => {
      const page = await setup(`
        <uai-input-date id="default" min="2026-01-01"></uai-input-date>
        <uai-input-date id="custom" min="2026-01-01" min-error-message="Muito cedo."></uai-input-date>
        <button id="outside">Fora</button>`);
      await page.click(`#default >>> ${INPUT}`);
      await typeInto(page, '31122025', '#default');
      await blur(page);
      expect((await state(page, '#default')).message).toBe('Informe uma data a partir de 01/01/2026.');
      expect(await page.find('#default')).toHaveClass('uai-input-date--danger');
      expect(await isValid(page, '#default')).toBe(false);

      await page.click(`#custom >>> ${INPUT}`);
      await typeInto(page, '31122025', '#custom');
      await blur(page);
      expect((await state(page, '#custom')).message).toBe('Muito cedo.');
    });

    it('shows the max message with the date in the language format', async () => {
      const page = await setup(`
        <uai-input-date id="pt" max="2026-12-31"></uai-input-date>
        <uai-input-date id="en" language="en_US" max="2026-12-31"></uai-input-date>
        <uai-input-date id="custom" max="2026-12-31" max-error-message="Muito tarde."></uai-input-date>
        <button id="outside">Fora</button>`);
      for (const selector of ['#pt', '#en', '#custom']) {
        await page.click(`${selector} >>> ${INPUT}`);
        await typeInto(page, '01012027', selector);
        await blur(page);
        expect(await page.find(selector)).toHaveClass('uai-input-date--danger');
      }
      expect((await state(page, '#pt')).message).toBe('Informe uma data até 31/12/2026.');
      expect((await state(page, '#en')).message).toContain('12/31/2026');
      expect((await state(page, '#custom')).message).toBe('Muito tarde.');
    });

    it('accepts a date inside min and max', async () => {
      const page = await setup(
        `<uai-input-date min="2026-01-01" max="2026-12-31"></uai-input-date><button id="outside">Fora</button>`,
      );
      await page.click(`${TAG} >>> ${INPUT}`);
      await typeInto(page, '25122026');
      await blur(page);
      expect(await page.find(TAG)).not.toHaveClass('uai-input-date--danger');
      expect(await isValid(page)).toBe(true);
    });
  });

  describe('Requirement: Tamanhos e estados', () => {
    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('Scenario: Tamanho padrão — uses control-height/medium, border/input and surface/paper', async () => {
          const page = await setup(`<uai-input-date></uai-input-date>`, theme);
          const style = await containerStyle(page);

          expect(await page.find(TAG)).toHaveClass('uai-input-date--size-medium');
          expect(style.height).toBe(await token(page, 'uai-control-height-medium', 'height'));
          expect(style.border).toBe(await token(page, 'uai-border-input'));
          expect(style.background).toBe(await token(page, 'uai-surface-paper'));
        });

        it('uses feedback/error and feedback/success, with danger over success', async () => {
          const page = await setup(
            `<uai-input-date id="error" danger></uai-input-date>
             <uai-input-date id="ok" success></uai-input-date>
             <uai-input-date id="both" danger success></uai-input-date>`,
            theme,
          );
          const error = await token(page, 'uai-feedback-error');

          expect((await containerStyle(page, '#error')).border).toBe(error);
          expect((await containerStyle(page, '#ok')).border).toBe(await token(page, 'uai-feedback-success'));
          expect((await containerStyle(page, '#both')).border).toBe(error);
          expect(await page.find('#both')).toHaveClass('uai-input-date--danger');
          expect(await page.find('#both')).not.toHaveClass('uai-input-date--success');
        });
      });
    }

    it('uses control-height/short with size short', async () => {
      const page = await setup(`<uai-input-date size="short"></uai-input-date>`);
      expect(await page.find(TAG)).toHaveClass('uai-input-date--size-short');
      expect((await containerStyle(page)).height).toBe(await token(page, 'uai-control-height-short', 'height'));
    });

    it('shows the feedback icon before the calendar button and the state messages', async () => {
      const page = await setup(`
        <uai-input-date id="error" danger error-message="Erro."></uai-input-date>
        <uai-input-date id="ok" success success-message="Certo."></uai-input-date>
        <uai-input-date id="help" helper-message="Ajuda."></uai-input-date>`);
      for (const selector of ['#error', '#ok']) {
        const order = await page.$eval(
          selector,
          (el, b: string) => {
            const feedback = el.shadowRoot.querySelector('uai-icon.input__feedback');
            const button = el.shadowRoot.querySelector(b);
            return !!(feedback.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING);
          },
          BUTTON,
        );
        expect(order).toBe(true);
      }
      expect((await state(page, '#error')).message).toBe('Erro.');
      expect((await state(page, '#ok')).message).toBe('Certo.');
      expect(await page.find('#ok')).toHaveClass('uai-input-date--success');
      expect((await state(page, '#help')).message).toBe('Ajuda.');
      expect((await state(page, '#help')).feedback).toBe(false);
    });
  });

  describe('Requirement: Acessibilidade e movimento', () => {
    it('uses the default label of each language and lets label win', async () => {
      const page = await setup(`
        <uai-input-date id="pt"></uai-input-date>
        <uai-input-date id="en" language="en_US"></uai-input-date>
        <uai-input-date id="es" language="es_ES"></uai-input-date>
        <uai-input-date id="custom" label="Nascimento"></uai-input-date>`);
      expect((await state(page, '#pt')).label).toBe('Data');
      expect((await state(page, '#en')).label).toBe('Date');
      expect((await state(page, '#es')).label).toBe('Fecha');
      expect((await state(page, '#custom')).label).toBe('Nascimento');
    });

    it('links the numeric text input to the label and the message', async () => {
      const page = await setup(`<uai-input-date helper-message="Dia, mes e ano."></uai-input-date>`);
      const links = await page.$eval(
        TAG,
        (el, i: string) => {
          const root = el.shadowRoot;
          const input = root.querySelector(i) as HTMLInputElement;
          const message = root.querySelector('[part="input__message"]');
          return {
            type: input.type,
            inputmode: input.getAttribute('inputmode'),
            labelled: [...input.labels].some((label) => label.textContent.includes('Data')),
            describedBy: (input.getAttribute('aria-describedby') || '').split(' ').includes(message.id),
          };
        },
        INPUT,
      );
      expect(links).toEqual({ type: 'text', inputmode: 'numeric', labelled: true, describedBy: true });
    });

    it('focuses the native input from the label', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> label.input__label`);
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('input');
    });

    it('reaches the calendar button with Tab after the field', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.click(`${TAG} >>> ${INPUT}`);
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      expect((await state(page)).focused).toBe('calendar-button');
    });

    const durations = (page: E2EPage, part: string) =>
      page.$eval(
        TAG,
        (el, p: string) =>
          getComputedStyle(el.shadowRoot.querySelector(`[part="${p}"]`)).transitionDuration.split(', '),
        part,
      );

    it('transitions the container and the button with a duration token by default', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      expect((await durations(page, 'input-container')).some((value) => value !== '0s')).toBe(true);
      expect((await durations(page, 'calendar-button')).some((value) => value !== '0s')).toBe(true);
    });

    it('Scenario: Movimento reduzido — state changes happen without transition', async () => {
      const page = await setup(`<uai-input-date></uai-input-date>`);
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.$eval(TAG, (el: any) => (el.danger = true));
      await page.waitForChanges();

      expect((await durations(page, 'input-container')).every((value) => value === '0s')).toBe(true);
      expect((await durations(page, 'calendar-button')).every((value) => value === '0s')).toBe(true);
    });
  });
});
