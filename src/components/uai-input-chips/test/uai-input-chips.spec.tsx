import { newSpecPage } from '@stencil/core/testing';
import { UaiInputChips } from '../uai-input-chips';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInputChips], html });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input[part="input"]') as HTMLInputElement;
const chips = (page) =>
  Array.from(shadow(page).querySelectorAll('[part="chip"] .chip__label')).map((chip) => chip.textContent.trim());
const removeButtons = (page) => Array.from(shadow(page).querySelectorAll('[part="chip-remove"]')) as HTMLElement[];
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();

const type = async (page, text: string) => {
  native(page).value = text;
  native(page).dispatchEvent(new Event('input'));
  await page.waitForChanges();
};

const key = async (page, name: string) => {
  native(page).dispatchEvent(new KeyboardEvent('keydown', { key: name }));
  await page.waitForChanges();
};

describe('uai-input-chips', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('anatomy', () => {
    it('renders the label, the chip list and the input', async () => {
      const page = await render(`<uai-input-chips label="Convidados" chips='["ana", "bia"]'></uai-input-chips>`);
      const list = shadow(page).querySelector('[part="chips"]');

      expect(shadow(page).querySelector('label').getAttribute('for')).toBe(native(page).id);
      expect(list.getAttribute('role')).toBe('list');
      expect(list.getAttribute('aria-label')).toBe('Convidados');
      expect(chips(page)).toEqual(['ana', 'bia']);
      expect(shadow(page).querySelector('[part="chip"]').getAttribute('role')).toBe('listitem');
    });

    it('names each remove button with its value', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" dt-button-close="close"></uai-input-chips>`);
      page.root.chips = ['urgente'];
      await page.waitForChanges();

      expect(removeButtons(page)[0].getAttribute('aria-label')).toBe('Remover urgente');
      expect(removeButtons(page)[0].getAttribute('type')).toBe('button');
      expect(removeButtons(page)[0].getAttribute('data-test')).toBe('close');
    });

    it.each([
      ['en_US', 'Remove ana'],
      ['es_ES', 'Quitar ana'],
    ])('names the remove button in %s', async (language, name) => {
      const page = await render(
        `<uai-input-chips aria-label="Tags" language="${language}" chips='["ana"]'></uai-input-chips>`,
      );

      expect(removeButtons(page)[0].getAttribute('aria-label')).toBe(name);
    });

    it('keeps the full value in the title of long chips', async () => {
      const long = 'um valor bem longo que passa da largura do campo';
      const page = await render(`<uai-input-chips aria-label="Tags" chips='["${long}"]'></uai-input-chips>`);

      expect(shadow(page).querySelector('.chip__label').getAttribute('title')).toBe(long);
    });

    it('warns once without an accessible name', async () => {
      await render(`<uai-input-chips></uai-input-chips>`);

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('require an aria-label'));
    });
  });

  describe('creation', () => {
    it('creates a trimmed chip on Enter and emits the change', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags"></uai-input-chips>`);
      const change = jest.fn();
      page.root.addEventListener('uaiChange', (event: CustomEvent) => change(event.detail));

      await type(page, '  ana  ');
      await key(page, 'Enter');

      expect(chips(page)).toEqual(['ana']);
      expect(native(page).value).toBe('');
      expect(change).toHaveBeenCalledWith({ data: ['ana'], value: 'ana' });
    });

    it('splits the text by the delimiters', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags"></uai-input-chips>`);

      await type(page, 'ana, bia; carla');

      expect(chips(page)).toEqual(['ana', 'bia', 'carla']);
    });

    it('ignores empty and repeated values unless duplicated', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" chips='["Ana"]'></uai-input-chips>`);

      await page.root.add('ana,  ,bia');
      await page.waitForChanges();
      expect(chips(page)).toEqual(['Ana', 'bia']);

      page.root.duplicated = true;
      await page.root.add('ana');
      await page.waitForChanges();
      expect(chips(page)).toEqual(['Ana', 'bia', 'ana']);
    });

    it('creates the chip on blur with blurCreation', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" blur-creation></uai-input-chips>`);

      await type(page, 'ana');
      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(chips(page)).toEqual(['ana']);
    });
  });

  describe('removal', () => {
    it('removes the last chip with Backspace on the empty field', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" chips='["ana", "bia"]'></uai-input-chips>`);

      await key(page, 'Backspace');

      expect(chips(page)).toEqual(['ana']);
    });

    it('removes a chip with its button', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" chips='["ana", "bia"]'></uai-input-chips>`);
      const change = jest.fn();
      page.root.addEventListener('uaiChangeChips', (event: CustomEvent) => change(event.detail));

      removeButtons(page)[0].click();
      await page.waitForChanges();

      expect(chips(page)).toEqual(['bia']);
      expect(change).toHaveBeenCalledWith({ data: ['bia'], value: 'bia' });
    });

    it.each(['disabled', 'readonly'])('hides the remove buttons when %s', async (attribute) => {
      const page = await render(`<uai-input-chips aria-label="Tags" ${attribute} chips='["ana"]'></uai-input-chips>`);

      expect(removeButtons(page)).toHaveLength(0);
      expect(shadow(page).querySelector('.chip--static')).not.toBeNull();
    });

    it('clears all chips', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" chips='["ana", "bia"]'></uai-input-chips>`);

      await page.root.clear();
      await page.waitForChanges();

      expect(await page.root.get()).toEqual([]);
    });
  });

  describe('limit', () => {
    it('hides the input and emits when maxChipsLength is reached', async () => {
      const page = await render(
        `<uai-input-chips aria-label="Tags" max-chips-length="2" counter-length chips='["ana"]'></uai-input-chips>`,
      );
      const extended = jest.fn();
      page.root.addEventListener('uaiExtendedQuantityInput', (event: CustomEvent) => extended(event.detail));

      expect(shadow(page).querySelector('.input__counter').textContent.trim()).toBe('1/2');
      await type(page, 'bia');
      await key(page, 'Enter');

      expect(native(page)).toBeNull();
      expect(extended).toHaveBeenCalledWith({ value: true });
      expect(shadow(page).querySelector('.input__counter').textContent.trim()).toBe('2/2');
    });

    it('does not add past the limit', async () => {
      const page = await render(`<uai-input-chips aria-label="Tags" max-chips-length="2"></uai-input-chips>`);

      await page.root.add('ana, bia, carla');
      await page.waitForChanges();

      expect(chips(page)).toEqual(['ana', 'bia']);
    });
  });

  describe('validation', () => {
    it('marks chips that are not e-mails with type email', async () => {
      const page = await render(`<uai-input-chips aria-label="E-mails" type="email"></uai-input-chips>`);

      await page.root.add('ana@blip.ai, ana');
      await page.waitForChanges();
      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      const invalid = Array.from(shadow(page).querySelectorAll('.chip--invalid .chip__label')).map((chip) =>
        chip.textContent.trim(),
      );
      expect(invalid).toEqual(['ana']);
      expect(await page.root.isValid()).toBe(false);
      expect(page.root).toHaveClass('uai-input-chips--danger');
      expect(message(page)).toBe('Use apenas e-mails válidos.');
    });

    it('requires a chip', async () => {
      const page = await render(
        `<uai-input-chips aria-label="Tags" required required-error-message="Inclua uma tag"></uai-input-chips>`,
      );

      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(await page.root.isValid()).toBe(false);
      expect(message(page)).toBe('Inclua uma tag');
    });
  });

  describe('sizes, states and legacy', () => {
    it.each([
      ['', 'medium'],
      ['size="short"', 'short'],
      ['size="large"', 'medium'],
    ])('maps %s to the %s size', async (attribute, size) => {
      const page = await render(`<uai-input-chips aria-label="Tags" ${attribute}></uai-input-chips>`);

      expect(page.root).toHaveClass(`uai-input-chips--size-${size}`);
    });

    it('gives danger priority over success', async () => {
      const page = await render(
        `<uai-input-chips aria-label="Tags" danger success error-message="Erro" success-message="Ok"></uai-input-chips>`,
      );

      expect(page.root).toHaveClass('uai-input-chips--danger');
      expect(page.root).not.toHaveClass('uai-input-chips--success');
      expect(message(page)).toBe('Erro');
    });

    it('accepts height and maxHeight as deprecated with one warning each', async () => {
      await render(`<uai-input-chips aria-label="Tags" height="80px" max-height="120px"></uai-input-chips>`);

      expect(warn.mock.calls.filter(([text]) => text.includes('"height" is deprecated'))).toHaveLength(1);
      expect(warn.mock.calls.filter(([text]) => text.includes('"maxHeight" is deprecated'))).toHaveLength(1);
    });
  });
});
