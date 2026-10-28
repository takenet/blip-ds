import { E2EPage, newE2EPage } from '@stencil/core/testing';

const TAG = 'uai-input-editable';
const INPUT = 'input[part="input"]';
const EDIT = 'button[part="edit-button"]';
const CONFIRM = 'button[part="confirm-button"]';
const CANCEL = 'button[part="cancel-button"]';

const EVENTS = ['uaiInputEditableSave', 'uaiChange', 'uaiInput', 'uaiCancel', 'uaiFocus', 'uaiBlur'];

const themed = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const setup = async (content: string, theme = 'light') => {
  const page = await newE2EPage();
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

const events = (page: E2EPage, name?: string) =>
  page.evaluate((n: string) => (window as any).events.filter(([event]) => !n || event === n), name);
const details = async (page: E2EPage, name: string) => (await events(page, name)).map(([, detail]) => detail);
const formData = (page: E2EPage, selector = 'form') =>
  page.$eval(selector, (form: HTMLFormElement) => [...new FormData(form).entries()]);

// Snapshot of the shadow DOM pieces the contract exposes.
const state = (page: E2EPage, selector = TAG) =>
  page.evaluate(
    (sel: string, parts: { input: string; edit: string; confirm: string; cancel: string }) => {
      const host = document.querySelector(sel);
      const root = host.shadowRoot;
      const input = root.querySelector(parts.input) as HTMLInputElement;
      const edit = root.querySelector(parts.edit);
      const confirm = root.querySelector(parts.confirm);
      const cancel = root.querySelector(parts.cancel);
      const focused = root.activeElement;
      const button = (el: Element) =>
        el
          ? {
              tag: el.tagName.toLowerCase(),
              type: el.getAttribute('type'),
              label: el.getAttribute('aria-label'),
              dataTest: el.getAttribute('data-test'),
            }
          : null;
      return {
        editing: host.classList.contains('uai-input-editable--editing'),
        label: root.querySelector('label.input__label')?.textContent.trim() ?? null,
        message: root.querySelector('[part="input__message"]')?.textContent.trim() ?? null,
        container: !!root.querySelector('[part="input-container"]'),
        view: root.querySelector('span.view__value')?.textContent.trim() ?? null,
        input: input
          ? {
              type: input.getAttribute('type'),
              value: input.value,
              selected: input.selectionStart === 0 && input.selectionEnd === input.value.length,
              dataTest: input.getAttribute('data-test'),
              name: input.getAttribute('name'),
              placeholder: input.getAttribute('placeholder'),
              minLength: input.minLength,
              maxLength: input.maxLength,
            }
          : null,
        edit: button(edit),
        confirm: button(confirm),
        cancel: button(cancel),
        focused: focused ? focused.getAttribute('part') || focused.tagName.toLowerCase() : null,
      };
    },
    selector,
    { input: INPUT, edit: EDIT, confirm: CONFIRM, cancel: CANCEL },
  );

const prop = (page: E2EPage, name: string, selector = TAG) => page.$eval(selector, (el: any, n: string) => el[n], name);
const call = async (page: E2EPage, method: string, selector = TAG) => {
  await page.$eval(selector, async (el: any, m: string) => await el[m](), method);
  await page.waitForChanges();
};

const click = async (page: E2EPage, part: string, selector = TAG) => {
  await page.click(`${selector} >>> ${part}`);
  await page.waitForChanges();
};

const focusPart = async (page: E2EPage, part: string, selector = TAG) => {
  await page.$eval(selector, (el, p: string) => (el.shadowRoot.querySelector(p) as HTMLElement).focus(), part);
  await page.waitForChanges();
};

const type = async (page: E2EPage, text: string) => {
  await page.keyboard.type(text);
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
    const container = el.shadowRoot.querySelector('[part="input-container"]');
    const style = getComputedStyle(container);
    return { height: `${container.getBoundingClientRect().height}px`, border: style.borderTopColor };
  });

describe('uai-input-editable e2e', () => {
  describe('Requirement: Contrato herdado', () => {
    it('Scenario: Salvar emite o valor anterior — emits uaiInputEditableSave with { value: "Ana Clara", oldValue: "Ana" }', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await click(page, EDIT);
      await press(page, 'End');
      await type(page, ' Clara');
      await click(page, CONFIRM);

      expect(await details(page, 'uaiInputEditableSave')).toEqual([{ value: 'Ana Clara', oldValue: 'Ana' }]);
      expect(await prop(page, 'value')).toBe('Ana Clara');
      expect((await state(page)).view).toBe('Ana Clara');
    });

    it('emits uaiChange with { value, oldValue } on every key and uaiInput with the InputEvent', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await click(page, EDIT);
      await type(page, 'Bia');

      expect(await details(page, 'uaiChange')).toEqual([
        { value: 'B', oldValue: 'Ana' },
        { value: 'Bi', oldValue: 'Ana' },
        { value: 'Bia', oldValue: 'Ana' },
      ]);
      expect(await details(page, 'uaiInput')).toEqual(['input', 'input', 'input']);
      expect(await details(page, 'uaiInputEditableSave')).toEqual([]);
    });

    it('emits uaiFocus and uaiBlur from the input in edition', async () => {
      const page = await setup(
        `<uai-input-editable label="Nome" value="Ana"></uai-input-editable><button id="outside">Fora</button>`,
      );
      await click(page, EDIT);
      expect((await events(page, 'uaiFocus')).length).toBeGreaterThan(0);
      expect(await events(page, 'uaiBlur')).toEqual([]);

      await blur(page);
      expect((await events(page, 'uaiBlur')).length).toBeGreaterThan(0);
    });

    it('supports edit(), save(), cancel() and setFocus()', async () => {
      const page = await setup(
        `<uai-input-editable label="Nome" value="Ana"></uai-input-editable><button id="outside">Fora</button>`,
      );
      await call(page, 'setFocus');
      expect((await state(page)).focused).toBe('edit-button');

      await call(page, 'edit');
      let current = await state(page);
      expect(current.editing).toBe(true);
      expect(current.focused).toBe('input');
      expect(current.input.selected).toBe(true);

      await type(page, 'Bia');
      await blur(page);
      await call(page, 'setFocus');
      expect((await state(page)).focused).toBe('input');

      await call(page, 'save');
      current = await state(page);
      expect(current.editing).toBe(false);
      expect(current.view).toBe('Bia');
      expect(await details(page, 'uaiInputEditableSave')).toEqual([{ value: 'Bia', oldValue: 'Ana' }]);

      await call(page, 'edit');
      await type(page, 'Carla');
      await call(page, 'cancel');
      current = await state(page);
      expect(current.editing).toBe(false);
      expect(current.view).toBe('Bia');
      expect(await prop(page, 'value')).toBe('Bia');
      expect(await events(page, 'uaiCancel')).toHaveLength(1);
    });

    it('passes name, placeholder, minlength, maxlength and dataTest to the input', async () => {
      const page = await setup(
        `<uai-input-editable label="Nome" value="Ana" name="title" placeholder="Digite" minlength="2" maxlength="10"
          data-test="field" dt-button-edit="edit" dt-button-confirm="confirm" dt-button-close="close"></uai-input-editable>`,
      );
      expect((await state(page)).edit.dataTest).toBe('edit');

      await click(page, EDIT);
      const current = await state(page);
      expect(current.input).toEqual(
        expect.objectContaining({ dataTest: 'field', placeholder: 'Digite', minLength: 2, maxLength: 10 }),
      );
      expect(current.confirm.dataTest).toBe('confirm');
      expect(current.cancel.dataTest).toBe('close');
    });

    it('keeps the deprecated expand without changing the width', async () => {
      const page = await setup(`
        <div style="width: 320px">
          <uai-input-editable id="plain" label="Nome" value="Ana"></uai-input-editable>
          <uai-input-editable id="expanded" label="Nome" value="Ana" expand></uai-input-editable>
        </div>`);
      const width = (selector: string) =>
        page.$eval(
          selector,
          (el) => el.shadowRoot.querySelector('[part="input-container"]').getBoundingClientRect().width,
        );
      expect(await width('#expanded')).toBe(await width('#plain'));
    });
  });

  describe('Requirement: Modos de leitura e edição', () => {
    it('shows the value and a native "Editar <label>" button in reading mode', async () => {
      const page = await setup(`
        <uai-input-editable id="labelled" label="Nome" value="Ana"></uai-input-editable>
        <uai-input-editable id="bare" value="Ana"></uai-input-editable>`);
      const current = await state(page, '#labelled');

      expect(current.editing).toBe(false);
      expect(current.label).toBe('Nome');
      expect(current.container).toBe(true);
      expect(current.view).toBe('Ana');
      expect(current.input).toBeNull();
      expect(current.confirm).toBeNull();
      expect(current.cancel).toBeNull();
      expect(current.edit).toEqual({ tag: 'button', type: 'button', label: 'Editar Nome', dataTest: null });
      expect((await state(page, '#bare')).edit.label).toBe('Editar');
    });

    it('opens the edition by clicking the value, with the input focused, the text selected and native Salvar and Cancelar buttons', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await click(page, 'span.view__value');
      const current = await state(page);

      expect(await page.find(TAG)).toHaveClass('uai-input-editable--editing');
      expect(current.container).toBe(true);
      expect(current.edit).toBeNull();
      expect(current.input).toEqual(expect.objectContaining({ type: 'text', value: 'Ana', selected: true }));
      expect(current.focused).toBe('input');
      expect(current.confirm).toEqual({ tag: 'button', type: 'button', label: 'Salvar', dataTest: null });
      expect(current.cancel).toEqual({ tag: 'button', type: 'button', label: 'Cancelar', dataTest: null });
    });

    for (const [language, edit, save, cancel] of [
      ['pt_BR', 'Editar Nome', 'Salvar', 'Cancelar'],
      ['en_US', 'Edit Nome', 'Save', 'Cancel'],
      ['es_ES', 'Editar Nome', 'Guardar', 'Cancelar'],
    ]) {
      it(`names the buttons in ${language}`, async () => {
        const page = await setup(
          `<uai-input-editable label="Nome" value="Ana" language="${language}"></uai-input-editable>`,
        );
        expect((await state(page)).edit.label).toBe(edit);
        await click(page, EDIT);
        const current = await state(page);
        expect(current.confirm.label).toBe(save);
        expect(current.cancel.label).toBe(cancel);
      });
    }

    it('Scenario: Editar pelo teclado — Enter opens, Enter saves, the new value is shown and the focus is on Editar', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await focusPart(page, EDIT);
      await press(page, 'Enter');
      let current = await state(page);
      expect(current.editing).toBe(true);
      expect(current.focused).toBe('input');
      expect(current.input.selected).toBe(true);

      await type(page, 'Bia');
      await press(page, 'Enter');
      current = await state(page);
      expect(current.editing).toBe(false);
      expect(current.view).toBe('Bia');
      expect(current.focused).toBe('edit-button');
      expect(await details(page, 'uaiInputEditableSave')).toEqual([{ value: 'Bia', oldValue: 'Ana' }]);
    });

    it('Scenario: Cancelar — Esc shows the previous value and emits uaiCancel', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await click(page, EDIT);
      await type(page, 'Bia');
      await press(page, 'Escape');
      const current = await state(page);

      expect(current.editing).toBe(false);
      expect(current.view).toBe('Ana');
      expect(current.focused).toBe('edit-button');
      expect(await prop(page, 'value')).toBe('Ana');
      expect(await events(page, 'uaiCancel')).toHaveLength(1);
      expect(await details(page, 'uaiInputEditableSave')).toEqual([]);
    });

    it('saves and cancels with the buttons, returning the focus to Editar and discarding the draft', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await click(page, EDIT);
      await type(page, 'Bia');
      await click(page, CANCEL);
      let current = await state(page);
      expect(current.view).toBe('Ana');
      expect(current.focused).toBe('edit-button');
      expect(await events(page, 'uaiCancel')).toHaveLength(1);

      await click(page, EDIT);
      expect((await state(page)).input.value).toBe('Ana');
      await type(page, 'Carla');
      await click(page, CONFIRM);
      current = await state(page);
      expect(current.editing).toBe(false);
      expect(current.view).toBe('Carla');
      expect(current.focused).toBe('edit-button');
    });
  });

  describe('Requirement: Regras de salvar', () => {
    it('Scenario: Valor vazio — keeps editing with the required message', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await click(page, EDIT);
      await press(page, 'Backspace');
      await press(page, 'Enter');
      let current = await state(page);

      expect(current.editing).toBe(true);
      expect(current.message).toBe('Informe um valor.');
      expect(await details(page, 'uaiInputEditableSave')).toEqual([]);

      await click(page, CONFIRM);
      await call(page, 'save');
      current = await state(page);
      expect(current.editing).toBe(true);
      expect(await prop(page, 'value')).toBe('Ana');
      expect(await details(page, 'uaiInputEditableSave')).toEqual([]);
    });

    it('uses requiredErrorMessage when given', async () => {
      const page = await setup(
        `<uai-input-editable label="Nome" value="Ana" required-error-message="Informe um nome."></uai-input-editable>`,
      );
      await click(page, EDIT);
      await press(page, 'Backspace');
      await press(page, 'Enter');
      expect((await state(page)).message).toBe('Informe um nome.');
    });

    it('refuses a value shorter than minlength with the default or custom message', async () => {
      const page = await setup(`
        <uai-input-editable id="default" label="Nome" value="Ana" minlength="3"></uai-input-editable>
        <uai-input-editable id="custom" label="Nome" value="Ana" minlength="3" minlength-error-message="Curto demais."></uai-input-editable>`);
      await click(page, EDIT, '#default');
      await type(page, 'Bi');
      await press(page, 'Enter');
      let current = await state(page, '#default');
      expect(current.editing).toBe(true);
      expect(current.message).toBe('Use pelo menos 3 caracteres.');

      await click(page, EDIT, '#custom');
      await type(page, 'Bi');
      await press(page, 'Enter');
      current = await state(page, '#custom');
      expect(current.editing).toBe(true);
      expect(current.message).toBe('Curto demais.');
      expect(await details(page, 'uaiInputEditableSave')).toEqual([]);

      await type(page, 'a');
      await press(page, 'Enter');
      expect((await state(page, '#custom')).editing).toBe(false);
      expect(await details(page, 'uaiInputEditableSave')).toEqual([{ value: 'Bia', oldValue: 'Ana' }]);
    });

    it('refuses to save while danger is active', async () => {
      const page = await setup(
        `<uai-input-editable label="Nome" value="Ana" danger error-message="Nome em uso."></uai-input-editable>`,
      );
      await click(page, EDIT);
      await type(page, 'Bia');
      await press(page, 'Enter');
      const current = await state(page);

      expect(current.editing).toBe(true);
      expect(current.message).toBe('Nome em uso.');
      expect(await prop(page, 'value')).toBe('Ana');
      expect(await details(page, 'uaiInputEditableSave')).toEqual([]);
    });
  });

  describe('Requirement: Formulário nativo', () => {
    it('Scenario: Valor salvo no form — FormData has title = "Ana" with an unsaved draft "Bia"', async () => {
      const page = await setup(`
        <form>
          <uai-input-editable name="title" label="Titulo" value="Ana"></uai-input-editable>
          <uai-input-editable input-name="other" label="Outro" value="Carla"></uai-input-editable>
          <uai-input-editable label="Sem nome" value="Dani"></uai-input-editable>
          <button id="submit">Enviar</button>
        </form>`);
      await click(page, EDIT, '[name="title"]');
      await type(page, 'Bia');

      expect(await formData(page)).toEqual([
        ['title', 'Ana'],
        ['other', 'Carla'],
      ]);
      await page.click('#submit');
      await page.waitForChanges();
      expect((await page.evaluate(() => (window as any).submissions)).pop()).toEqual([
        ['title', 'Ana'],
        ['other', 'Carla'],
      ]);
    });

    it('sends the value once it is saved', async () => {
      const page = await setup(`
        <form><uai-input-editable name="title" label="Titulo" value="Ana"></uai-input-editable></form>`);
      await click(page, EDIT);
      await type(page, 'Bia');
      await press(page, 'Enter');
      expect(await formData(page)).toEqual([['title', 'Bia']]);
    });

    it('restores the initial value and leaves the edition on reset', async () => {
      const page = await setup(`
        <form>
          <uai-input-editable name="title" label="Titulo" value="Ana"></uai-input-editable>
          <button id="reset" type="reset">Limpar</button>
        </form>`);
      await click(page, EDIT);
      await type(page, 'Bia');
      await press(page, 'Enter');
      await click(page, EDIT);
      await type(page, 'Carla');

      await page.click('#reset');
      await page.waitForChanges();
      const current = await state(page);
      expect(current.editing).toBe(false);
      expect(current.view).toBe('Ana');
      expect(await prop(page, 'value')).toBe('Ana');
      expect(await formData(page)).toEqual([['title', 'Ana']]);
    });

    it('is disabled, without the Editar button and left out of FormData inside a disabled fieldset', async () => {
      const page = await setup(`
        <form>
          <fieldset id="group" disabled>
            <uai-input-editable name="title" label="Titulo" value="Ana"></uai-input-editable>
          </fieldset>
        </form>`);
      expect(await page.find(TAG)).toHaveClass('uai-input-editable--disabled');
      expect((await state(page)).edit).toBeNull();
      expect(await formData(page)).toEqual([]);

      await page.$eval('#group', (el: HTMLFieldSetElement) => (el.disabled = false));
      await page.waitForChanges();
      expect(await page.find(TAG)).not.toHaveClass('uai-input-editable--disabled');
      expect((await state(page)).edit).not.toBeNull();
      expect(await formData(page)).toEqual([['title', 'Ana']]);
    });
  });

  describe('Requirement: Tamanhos e estados', () => {
    for (const theme of ['light', 'dark']) {
      describe(theme, () => {
        it('Scenario: Tamanho alto — the field height uses control-height/large in both modes', async () => {
          const page = await setup(
            `<uai-input-editable label="Nome" value="Ana" size="tall"></uai-input-editable>`,
            theme,
          );
          const height = await token(page, 'uai-control-height-large', 'height');

          expect(await page.find(TAG)).toHaveClass('uai-input-editable--size-tall');
          expect((await containerStyle(page)).height).toBe(height);
          await click(page, EDIT);
          expect((await containerStyle(page)).height).toBe(height);
        });

        it('uses border/input, feedback/error and feedback/success in both modes', async () => {
          const page = await setup(
            `<uai-input-editable id="plain" label="A" value="Ana"></uai-input-editable>
             <uai-input-editable id="error" label="B" value="Ana" danger></uai-input-editable>
             <uai-input-editable id="ok" label="C" value="Ana" success></uai-input-editable>
             <button id="outside">Fora</button>`,
            theme,
          );
          // Without transitions, so the border is read after the focus ring leaves, not mid-animation.
          await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
          const error = await token(page, 'uai-feedback-error');
          const success = await token(page, 'uai-feedback-success');

          expect((await containerStyle(page, '#plain')).border).toBe(await token(page, 'uai-border-input'));
          expect((await containerStyle(page, '#error')).border).toBe(error);
          expect((await containerStyle(page, '#ok')).border).toBe(success);
          expect(await page.find('#error')).toHaveClass('uai-input-editable--danger');
          expect(await page.find('#ok')).toHaveClass('uai-input-editable--success');

          await call(page, 'edit', '#error');
          await call(page, 'edit', '#ok');
          await blur(page);
          expect((await containerStyle(page, '#error')).border).toBe(error);
          expect((await containerStyle(page, '#ok')).border).toBe(success);
        });
      });
    }

    for (const [size, className, tokenName] of [
      [null, 'standard', 'uai-control-height-medium'],
      ['standard', 'standard', 'uai-control-height-medium'],
      ['medium', 'standard', 'uai-control-height-medium'],
      ['short', 'short', 'uai-control-height-short'],
    ]) {
      it(`uses ${tokenName} with size ${size ?? 'default'}`, async () => {
        const page = await setup(
          `<uai-input-editable label="Nome" value="Ana" ${size ? `size="${size}"` : ''}></uai-input-editable>`,
        );
        expect(await page.find(TAG)).toHaveClass(`uai-input-editable--size-${className}`);
        expect((await containerStyle(page)).height).toBe(await token(page, tokenName, 'height'));
      });
    }

    it('shows the helper, error and success messages in both modes', async () => {
      const page = await setup(`
        <uai-input-editable id="help" label="A" value="Ana" helper-message="Ajuda."></uai-input-editable>
        <uai-input-editable id="error" label="B" value="Ana" danger error-message="Erro."></uai-input-editable>
        <uai-input-editable id="ok" label="C" value="Ana" success success-message="Certo."></uai-input-editable>`);
      for (const [selector, message] of [
        ['#help', 'Ajuda.'],
        ['#error', 'Erro.'],
        ['#ok', 'Certo.'],
      ]) {
        expect((await state(page, selector)).message).toBe(message);
        await call(page, 'edit', selector);
        expect((await state(page, selector)).message).toBe(message);
      }
    });

    it('hides the Editar button and does not open the edition with disabled', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana" disabled></uai-input-editable>`);
      expect(await page.find(TAG)).toHaveClass('uai-input-editable--disabled');
      expect((await state(page)).edit).toBeNull();

      await click(page, 'span.view__value');
      const current = await state(page);
      expect(current.editing).toBe(false);
      expect(current.input).toBeNull();
    });
  });

  describe('Requirement: Acessibilidade e movimento', () => {
    it('names the input with the label or aria-label and links the message by aria-describedby', async () => {
      const page = await setup(`
        <uai-input-editable id="labelled" label="Nome" value="Ana" helper-message="Ajuda."></uai-input-editable>
        <uai-input-editable id="bare" aria-label="Apelido" value="Ana" helper-message="Ajuda."></uai-input-editable>`);
      await call(page, 'edit', '#labelled');
      await call(page, 'edit', '#bare');
      const links = (selector: string) =>
        page.$eval(
          selector,
          (el, i: string) => {
            const root = el.shadowRoot;
            const input = root.querySelector(i) as HTMLInputElement;
            const message = root.querySelector('[part="input__message"]');
            return {
              labels: [...input.labels].map((label) => label.textContent.trim()),
              ariaLabel: input.getAttribute('aria-label'),
              describedBy: (input.getAttribute('aria-describedby') || '').split(' ').includes(message.id),
            };
          },
          INPUT,
        );

      const labelled = await links('#labelled');
      expect(labelled.labels.some((label) => label.includes('Nome')) || labelled.ariaLabel === 'Nome').toBe(true);
      expect(labelled.describedBy).toBe(true);
      const bare = await links('#bare');
      expect(bare.ariaLabel).toBe('Apelido');
      expect(bare.describedBy).toBe(true);
    });

    const durations = (page: E2EPage, part: string) =>
      page.$eval(
        TAG,
        (el, p: string) =>
          getComputedStyle(el.shadowRoot.querySelector(`[part="${p}"]`)).transitionDuration.split(', '),
        part,
      );

    it('transitions the container and the buttons with a duration token by default', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      expect((await durations(page, 'input-container')).some((value) => value !== '0s')).toBe(true);
      expect((await durations(page, 'edit-button')).some((value) => value !== '0s')).toBe(true);
    });

    it('Scenario: Movimento reduzido — with prefers-reduced-motion: reduce state changes happen without transition', async () => {
      const page = await setup(`<uai-input-editable label="Nome" value="Ana"></uai-input-editable>`);
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      expect((await durations(page, 'input-container')).every((value) => value === '0s')).toBe(true);
      expect((await durations(page, 'edit-button')).every((value) => value === '0s')).toBe(true);

      await call(page, 'edit');
      await page.$eval(TAG, (el: any) => (el.danger = true));
      await page.waitForChanges();
      expect((await durations(page, 'input-container')).every((value) => value === '0s')).toBe(true);
      expect((await durations(page, 'confirm-button')).every((value) => value === '0s')).toBe(true);
      expect((await durations(page, 'cancel-button')).every((value) => value === '0s')).toBe(true);
    });
  });
});
