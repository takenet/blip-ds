import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { UaiAutocomplete } from '../uai-autocomplete';
import { normalize } from '../uai-autocomplete-interface';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const CITIES = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'bh', label: 'Belo Horizonte' },
  { value: 'rec', label: 'Recife', disabled: true },
];

const render = (props: Record<string, unknown> = {}) =>
  newSpecPage({
    components: [UaiAutocomplete],
    template: () => <uai-autocomplete label="Cidade" options={CITIES} {...props}></uai-autocomplete>,
  });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input') as HTMLInputElement;
const options = (page) => [...shadow(page).querySelectorAll('[role="option"]')] as HTMLElement[];
const labels = (page) => options(page).map((option) => option.textContent.trim());
const option = (page, text: string) => options(page).find((item) => item.textContent.trim() === text);
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();
const clear = (page) => shadow(page).querySelector('[part="clear-button"]') as HTMLButtonElement;

const open = async (page) => {
  native(page).click();
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
const blur = async (page) => {
  native(page).dispatchEvent(new Event('blur'));
  await page.waitForChanges();
};
const listen = (page, name: string) => {
  const spy = jest.fn();
  page.root.addEventListener(name, (event: CustomEvent) => spy(event.detail));
  return spy;
};

describe('uai-autocomplete search', () => {
  it('ignores accents and case', () => {
    expect(normalize('São Paulo')).toBe('sao paulo');
  });
});

describe('uai-autocomplete', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('anatomy', () => {
    it('renders a labelled combobox that controls a closed listbox', async () => {
      const page = await render();
      const label = shadow(page).querySelector('label');
      const list = shadow(page).querySelector('[role="listbox"]');

      expect(label.getAttribute('for')).toBe(native(page).id);
      expect(native(page).getAttribute('role')).toBe('combobox');
      expect(native(page).getAttribute('aria-autocomplete')).toBe('list');
      expect(native(page).getAttribute('aria-expanded')).toBe('false');
      expect(native(page).getAttribute('aria-controls')).toBe(list.id);
      expect(options(page)).toHaveLength(0);
    });

    it('reads the options from a JSON array in HTML', async () => {
      const page = await newSpecPage({
        components: [UaiAutocomplete],
        html: `<uai-autocomplete label="Cidade" options='[{"value": "sp", "label": "São Paulo"}]'></uai-autocomplete>`,
      });
      await open(page);

      expect(labels(page)).toEqual(['São Paulo']);
    });

    it('warns once about searchOnlyTitle, which has no effect', async () => {
      await render({ searchOnlyTitle: false });

      expect(warn).toHaveBeenCalled();
    });
  });

  describe('single choice', () => {
    it('opens on a click with every option', async () => {
      const page = await render();

      await open(page);

      expect(page.root).toHaveClass('uai-autocomplete--open');
      expect(native(page).getAttribute('aria-expanded')).toBe('true');
      expect(labels(page)).toEqual(['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Recife']);
    });

    it('filters while typing, without accents, and keeps the value', async () => {
      const page = await render({ value: 'bh' });
      const change = listen(page, 'uaiChange');

      await type(page, 'sao');

      expect(labels(page)).toEqual(['São Paulo']);
      expect(page.root.value).toBe('bh');
      expect(change).not.toHaveBeenCalled();
    });

    it('picks the active option with Enter, shows its label and closes', async () => {
      const page = await render();
      const change = listen(page, 'uaiChange');
      const selected = listen(page, 'uaiSelectedChange');

      await type(page, 'rio');
      await key(page, 'Enter');

      expect(page.root.value).toBe('rj');
      expect(native(page).value).toBe('Rio de Janeiro');
      expect(page.root).not.toHaveClass('uai-autocomplete--open');
      expect(change).toHaveBeenCalledWith({ value: 'rj' });
      expect(selected).toHaveBeenCalledWith({ value: 'rj', label: 'Rio de Janeiro' });
    });

    it('moves with the arrows and skips disabled options', async () => {
      const page = await render({ value: 'bh' });
      await open(page);

      expect(native(page).getAttribute('aria-activedescendant')).toBe(option(page, 'Belo Horizonte').id);

      await key(page, 'ArrowDown');

      expect(native(page).getAttribute('aria-activedescendant')).toBe(option(page, 'Belo Horizonte').id);

      await key(page, 'ArrowUp');

      expect(native(page).getAttribute('aria-activedescendant')).toBe(option(page, 'Rio de Janeiro').id);
    });

    it('picks an option with a click and ignores a disabled one', async () => {
      const page = await render();
      await open(page);

      option(page, 'Recife').click();
      await page.waitForChanges();
      expect(page.root.value).toBeUndefined();

      option(page, 'São Paulo').click();
      await page.waitForChanges();
      expect(page.root.value).toBe('sp');
      expect(option(page, 'São Paulo')).toBeUndefined();
    });

    it('marks the chosen option as selected', async () => {
      const page = await render({ value: 'sp' });
      await open(page);

      expect(option(page, 'São Paulo').getAttribute('aria-selected')).toBe('true');
      expect(option(page, 'Rio de Janeiro').getAttribute('aria-selected')).toBe('false');
    });

    it('clears with the clear button', async () => {
      const page = await render({ value: 'sp' });
      const change = listen(page, 'uaiChange');
      const cancel = listen(page, 'uaiCancel');

      clear(page).click();
      await page.waitForChanges();

      expect(page.root.value).toBeNull();
      expect(native(page).value).toBe('');
      expect(change).toHaveBeenCalledWith({ value: null });
      expect(cancel).toHaveBeenCalledWith({ value: '' });
      expect(clear(page)).toBeNull();
    });

    it('clears the choice when the text is erased and the field is left', async () => {
      const page = await render({ value: 'sp' });

      await type(page, '');
      await blur(page);

      expect(page.root.value).toBeNull();
    });

    it('shows the choice again when the field is left after a search', async () => {
      const page = await render({ value: 'sp' });

      await type(page, 'bel');
      await blur(page);

      expect(native(page).value).toBe('São Paulo');
      expect(page.root.value).toBe('sp');
    });
  });

  describe('list states', () => {
    it('says when the search finds nothing', async () => {
      const page = await render();

      await type(page, 'xyz');

      expect(options(page)).toHaveLength(0);
      expect(shadow(page).querySelector('.status').textContent.trim()).toBe('Nenhum resultado');
    });

    it('says that the options are loading, in the language', async () => {
      const page = await render({ loading: true, language: 'en_US' });

      await open(page);

      expect(shadow(page).querySelector('.status').textContent.trim()).toBe('Loading…');
    });
  });

  describe('multiple choice', () => {
    const many = (props: Record<string, unknown> = {}) => render({ selectionType: 'multiple', ...props });

    it('starts with "select all" and checkboxes, in a multiselectable listbox', async () => {
      const page = await many({ selectionTitle: 'Cidades atendidas' });
      await open(page);

      expect(shadow(page).querySelector('[role="listbox"]').getAttribute('aria-multiselectable')).toBe('true');
      expect(shadow(page).querySelector('.title').textContent.trim()).toBe('Cidades atendidas');
      expect(labels(page)[0]).toBe('Selecionar todos');
      expect(shadow(page).querySelectorAll('.check')).toHaveLength(5);
    });

    it('checks and unchecks options, keeps the list open and tells the checked ones', async () => {
      const page = await many();
      const changed = listen(page, 'uaiMultiselectedChange');
      await open(page);

      option(page, 'São Paulo').click();
      await page.waitForChanges();
      option(page, 'Belo Horizonte').click();
      await page.waitForChanges();

      expect(page.root).toHaveClass('uai-autocomplete--open');
      expect(option(page, 'São Paulo').getAttribute('aria-selected')).toBe('true');
      expect(changed).toHaveBeenLastCalledWith({
        value: [
          { value: 'sp', label: 'São Paulo', checked: true },
          { value: 'bh', label: 'Belo Horizonte', checked: true },
        ],
      });

      option(page, 'São Paulo').click();
      await page.waitForChanges();

      expect(changed).toHaveBeenLastCalledWith({ value: [{ value: 'bh', label: 'Belo Horizonte', checked: true }] });
    });

    it('checks every enabled option with "select all", and unchecks them all again', async () => {
      const page = await many();
      await open(page);

      option(page, 'Selecionar todos').click();
      await page.waitForChanges();

      expect(option(page, 'Selecionar todos').getAttribute('aria-selected')).toBe('true');
      expect(option(page, 'Recife').getAttribute('aria-selected')).toBe('false');
      expect(options(page).filter((item) => item.getAttribute('aria-selected') === 'true')).toHaveLength(4);

      option(page, 'Selecionar todos').click();
      await page.waitForChanges();

      expect(options(page).filter((item) => item.getAttribute('aria-selected') === 'true')).toHaveLength(0);
    });

    it('hides "select all" while searching', async () => {
      const page = await many();

      await type(page, 'r');

      expect(labels(page)).toEqual(['Rio de Janeiro', 'Belo Horizonte', 'Recife']);
    });

    it('reads the checked options from the options and shows how many', async () => {
      const page = await many({
        options: CITIES.map((city) => ({ ...city, checked: city.value !== 'rec' && city.value !== 'bh' })),
      });

      expect(native(page).value).toBe('2 selecionados');
    });

    it('shows the label when only one is checked', async () => {
      const page = await many({ options: CITIES.map((city) => ({ ...city, checked: city.value === 'rj' })) });

      expect(native(page).value).toBe('Rio de Janeiro');
    });

    it('unchecks everything with cleanMultipleSelection()', async () => {
      const page = await many({ options: CITIES.map((city) => ({ ...city, checked: true })) });

      await page.root.cleanMultipleSelection();
      await page.waitForChanges();

      expect(native(page).value).toBe('');
    });
  });

  describe('validation and states', () => {
    it('requires a choice after the field is left', async () => {
      const page = await render({ required: true });

      await blur(page);

      expect(page.root).toHaveClass('uai-autocomplete--danger');
      expect(message(page)).toBe('Selecione uma opção.');
    });

    it('uses the custom required message', async () => {
      const page = await render({ required: true, requiredErrorMessage: 'Escolha a cidade.' });

      await blur(page);

      expect(message(page)).toBe('Escolha a cidade.');
    });

    it('gives danger priority over success', async () => {
      const page = await render({ danger: true, success: true, errorMessage: 'Fora da área', successMessage: 'Ok' });

      expect(page.root).toHaveClass('uai-autocomplete--danger');
      expect(page.root).not.toHaveClass('uai-autocomplete--success');
      expect(message(page)).toBe('Fora da área');
    });

    it('does not open, nor show the clear button, when disabled', async () => {
      const page = await render({ disabled: true, value: 'sp' });

      await open(page);

      expect(page.root).not.toHaveClass('uai-autocomplete--open');
      expect(clear(page)).toBeNull();
      expect(native(page).hasAttribute('disabled')).toBe(true);
    });

    it('falls back to single, medium and pt_BR for unknown values', async () => {
      const page = await render({ selectionType: 'many', size: 'large', language: 'fr_FR' });
      await open(page);

      expect(page.root).toHaveClass('uai-autocomplete--size-medium');
      expect(labels(page)[0]).toBe('São Paulo');
      expect(warn).toHaveBeenCalled();
    });
  });
});
