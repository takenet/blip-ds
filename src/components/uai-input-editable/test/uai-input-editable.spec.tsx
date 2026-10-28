import { newSpecPage } from '@stencil/core/testing';
import { UaiInputEditable } from '../uai-input-editable';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInputEditable], html });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const part = (page, name: string) => shadow(page).querySelector(`[part="${name}"]`) as HTMLElement;
const native = (page) => part(page, 'input') as HTMLInputElement;
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();

const startEditing = async (page) => {
  part(page, 'edit-button').click();
  await page.waitForChanges();
};

const type = async (page, text: string) => {
  native(page).value = text;
  native(page).dispatchEvent(new Event('input'));
  await page.waitForChanges();
};

const key = async (page, name: string) => {
  native(page).dispatchEvent(new KeyboardEvent('keydown', { key: name }));
  await page.waitForChanges();
};

describe('uai-input-editable', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('reading mode', () => {
    it('shows the value and an Edit button named with the label', async () => {
      const page = await render(
        `<uai-input-editable label="Título" value="Ana" dt-button-edit="edit"></uai-input-editable>`,
      );

      expect(shadow(page).querySelector('.view__value').textContent.trim()).toBe('Ana');
      expect(part(page, 'edit-button').getAttribute('type')).toBe('button');
      expect(part(page, 'edit-button').getAttribute('aria-label')).toBe('Editar Título');
      expect(part(page, 'edit-button').getAttribute('data-test')).toBe('edit');
      expect(native(page)).toBeNull();
    });

    it('shows the placeholder when empty', async () => {
      const page = await render(`<uai-input-editable label="Título" placeholder="Sem título"></uai-input-editable>`);
      const value = shadow(page).querySelector('.view__value');

      expect(value.textContent.trim()).toBe('Sem título');
      expect(value).toHaveClass('view__value--placeholder');
    });

    it.each([
      ['en_US', 'Edit Title'],
      ['es_ES', 'Editar Title'],
    ])('names the Edit button in %s', async (language, name) => {
      const page = await render(`<uai-input-editable label="Title" language="${language}"></uai-input-editable>`);

      expect(part(page, 'edit-button').getAttribute('aria-label')).toBe(name);
    });

    it('hides the Edit button when disabled', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana" disabled></uai-input-editable>`);

      expect(part(page, 'edit-button')).toBeNull();
      expect(page.root).toHaveClass('uai-input-editable--disabled');
    });
  });

  describe('editing mode', () => {
    it('opens the field with Save and Cancel', async () => {
      const page = await render(
        `<uai-input-editable label="Título" value="Ana" dt-button-confirm="ok" dt-button-close="no"></uai-input-editable>`,
      );

      await startEditing(page);

      expect(page.root).toHaveClass('uai-input-editable--editing');
      expect(native(page).value).toBe('Ana');
      expect(shadow(page).querySelector('label').getAttribute('for')).toBe(native(page).id);
      expect(part(page, 'confirm-button').getAttribute('aria-label')).toBe('Salvar');
      expect(part(page, 'confirm-button').getAttribute('data-test')).toBe('ok');
      expect(part(page, 'cancel-button').getAttribute('aria-label')).toBe('Cancelar');
      expect(part(page, 'cancel-button').getAttribute('data-test')).toBe('no');
    });

    it('starts editing when the value is clicked', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana"></uai-input-editable>`);

      (shadow(page).querySelector('.view__value') as HTMLElement).click();
      await page.waitForChanges();

      expect(native(page)).not.toBeNull();
    });

    it('saves on Enter and emits the old value', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana"></uai-input-editable>`);
      const saved = jest.fn();
      page.root.addEventListener('uaiInputEditableSave', (event: CustomEvent) => saved(event.detail));

      await startEditing(page);
      await type(page, 'Ana Clara');
      await key(page, 'Enter');

      expect(saved).toHaveBeenCalledWith({ value: 'Ana Clara', oldValue: 'Ana' });
      expect(page.root.value).toBe('Ana Clara');
      expect(native(page)).toBeNull();
      expect(shadow(page).querySelector('.view__value').textContent.trim()).toBe('Ana Clara');
    });

    it('emits uaiChange on every keystroke', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana"></uai-input-editable>`);
      const change = jest.fn();
      page.root.addEventListener('uaiChange', (event: CustomEvent) => change(event.detail));

      await startEditing(page);
      await type(page, 'An');

      expect(change).toHaveBeenCalledWith({ value: 'An', oldValue: 'Ana' });
    });

    it('cancels on Escape and keeps the saved value', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana"></uai-input-editable>`);
      const cancel = jest.fn();
      page.root.addEventListener('uaiCancel', cancel);

      await startEditing(page);
      await type(page, 'Bia');
      await key(page, 'Escape');

      expect(cancel).toHaveBeenCalled();
      expect(page.root.value).toBe('Ana');
      expect(shadow(page).querySelector('.view__value').textContent.trim()).toBe('Ana');
    });

    it('edits, saves and cancels through methods', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana"></uai-input-editable>`);

      await page.root.edit();
      await page.waitForChanges();
      await type(page, 'Bia');
      expect(await page.root.save()).toBe(true);
      await page.waitForChanges();

      expect(page.root.value).toBe('Bia');
      await page.root.edit();
      await page.waitForChanges();
      await page.root.cancel();
      await page.waitForChanges();
      expect(native(page)).toBeNull();
    });
  });

  describe('save rules', () => {
    it('does not save an empty value', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana"></uai-input-editable>`);

      await startEditing(page);
      await type(page, '');
      await key(page, 'Enter');

      expect(native(page)).not.toBeNull();
      expect(page.root.value).toBe('Ana');
      expect(message(page)).toBe('Informe um valor.');
      expect(page.root).toHaveClass('uai-input-editable--danger');
    });

    it('does not save below minlength', async () => {
      const page = await render(`<uai-input-editable label="Título" value="Ana" minlength="3"></uai-input-editable>`);

      await startEditing(page);
      await type(page, 'Al');
      expect(await page.root.save()).toBe(false);
      await page.waitForChanges();

      expect(message(page)).toBe('Use pelo menos 3 caracteres.');
    });

    it('does not save with danger', async () => {
      const page = await render(
        `<uai-input-editable label="Título" value="Ana" danger error-message="Nome em uso"></uai-input-editable>`,
      );

      await startEditing(page);
      await type(page, 'Bia');
      await key(page, 'Enter');

      expect(page.root.value).toBe('Ana');
      expect(message(page)).toBe('Nome em uso');
    });
  });

  describe('sizes and legacy', () => {
    it.each([
      ['', 'standard'],
      ['size="short"', 'short'],
      ['size="tall"', 'tall'],
      ['size="medium"', 'standard'],
      ['size="huge"', 'standard'],
    ])('maps %s to the %s size', async (attribute, size) => {
      const page = await render(`<uai-input-editable label="Título" ${attribute}></uai-input-editable>`);

      expect(page.root).toHaveClass(`uai-input-editable--size-${size}`);
    });

    it('accepts expand as deprecated with one warning', async () => {
      await render(`<uai-input-editable label="Título" expand></uai-input-editable>`);
      await render(`<uai-input-editable label="Título" expand></uai-input-editable>`);

      expect(warn.mock.calls.filter(([text]) => text.includes('"expand" is deprecated'))).toHaveLength(1);
    });

    it('shows the success message in reading mode', async () => {
      const page = await render(
        `<uai-input-editable label="Título" value="Ana" success success-message="Salvo"></uai-input-editable>`,
      );

      expect(page.root).toHaveClass('uai-input-editable--success');
      expect(message(page)).toBe('Salvo');
    });
  });
});
