import { newSpecPage } from '@stencil/core/testing';
import { UaiInputPhone } from '../uai-input-phone';
import { flagUrl } from '../uai-input-phone-flags';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInputPhone], html });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input') as HTMLInputElement;
const button = (page) => shadow(page).querySelector('[part="country-button"]') as HTMLButtonElement;
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();

describe('uai-input-phone', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('anatomy', () => {
    it('renders a labelled tel input after the country selector', async () => {
      const page = await render(`<uai-input-phone label="Celular" helper-message="Com DDD"></uai-input-phone>`);
      const label = shadow(page).querySelector('label');

      expect(label.getAttribute('for')).toBe(native(page).id);
      expect(label.textContent.trim()).toBe('Celular');
      expect(native(page).getAttribute('type')).toBe('tel');
      expect(native(page).getAttribute('part')).toBe('input');
      expect(native(page).getAttribute('aria-describedby')).toBe(shadow(page).querySelector('.input__message').id);
      expect(message(page)).toBe('Com DDD');
    });

    it.each([
      ['pt_BR', 'Telefone'],
      ['en_US', 'Phone number'],
      ['es_ES', 'Teléfono'],
    ])('uses the default label of the language %s', async (language, label) => {
      const page = await render(`<uai-input-phone language="${language}"></uai-input-phone>`);

      expect(shadow(page).querySelector('label').textContent.trim()).toBe(label);
    });

    it('renders the country selector as a native button naming the country and the code', async () => {
      const page = await render(`<uai-input-phone dt-select-flag="flag"></uai-input-phone>`);

      expect(button(page).getAttribute('type')).toBe('button');
      expect(button(page).getAttribute('aria-haspopup')).toBe('listbox');
      expect(button(page).getAttribute('aria-expanded')).toBe('false');
      expect(button(page).getAttribute('aria-label')).toBe('Código do país: Brasil +55');
      expect(button(page).getAttribute('data-test')).toBe('flag');
      expect(button(page).querySelector('.prefix__code').textContent.trim()).toBe('+55');
      expect(button(page).querySelector('uai-icon.prefix__arrow')).not.toBeNull();
    });

    it('renders an empty listbox while closed', async () => {
      const page = await render(`<uai-input-phone></uai-input-phone>`);
      const list = shadow(page).querySelector('[part="country-list"]');

      expect(list.getAttribute('role')).toBe('listbox');
      expect(list.getAttribute('aria-label')).toBe('Países');
      expect(list.querySelectorAll('[role="option"]')).toHaveLength(0);
    });
  });

  describe('flags', () => {
    it('shows the official flag with an empty alt', async () => {
      const page = await render(`<uai-input-phone></uai-input-phone>`);
      const flag = button(page).querySelector('img.prefix__flag');

      expect(flag.getAttribute('alt')).toBe('');
      expect(flag.getAttribute('src')).toContain('brazil-flag-solid.svg');
    });

    it('maps country keys published under another name', () => {
      expect(flagUrl('kuwait-flag')).toContain('kwait-flag-solid.svg');
      expect(flagUrl('vatican-flag')).toContain('vatican-city-flag-solid.svg');
    });

    it('shows only the code for a country without artwork', async () => {
      const page = await render(`<uai-input-phone value="+298"></uai-input-phone>`);

      expect(flagUrl('faroe-islands-flag')).toBeNull();
      expect(button(page).querySelector('img')).toBeNull();
      expect(button(page).querySelector('.prefix__code').textContent.trim()).toBe('+298');
    });
  });

  describe('legacy contract', () => {
    it('selects the first country with the dial code', async () => {
      const page = await render(`<uai-input-phone value="+1"></uai-input-phone>`);

      expect(button(page).getAttribute('aria-label')).toBe('Código do país: Estados Unidos +1');
    });

    it('changes the country and emits uaiPhoneNumberChange', async () => {
      const page = await render(`<uai-input-phone text="555 0100"></uai-input-phone>`);
      const change = jest.fn();
      page.root.addEventListener('uaiPhoneNumberChange', (event: CustomEvent) => change(event.detail));

      await page.root.changeCountry('+1', 'US / USA', 'united-states-flag');
      await page.waitForChanges();

      expect(change).toHaveBeenCalledWith({
        value: '555 0100',
        code: '+1',
        isoCode: 'US / USA',
        country: 'united-states-flag',
      });
      expect(button(page).querySelector('.prefix__code').textContent.trim()).toBe('+1');
    });

    it('emits uaiPhoneNumberChange when the number changes', async () => {
      const page = await render(`<uai-input-phone></uai-input-phone>`);
      const change = jest.fn();
      page.root.addEventListener('uaiPhoneNumberChange', (event: CustomEvent) => change(event.detail));

      page.root.text = '11 99999-0000';
      await page.waitForChanges();

      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({ value: '11 99999-0000', code: '+55', country: 'brazil-flag' }),
      );
    });

    it('keeps 25 characters as the limit for +55', async () => {
      const page = await render(`<uai-input-phone></uai-input-phone>`);

      expect(native(page).getAttribute('maxlength')).toBe('25');
    });

    it('has no length limit for other codes', async () => {
      const page = await render(`<uai-input-phone value="+1"></uai-input-phone>`);

      expect(native(page).hasAttribute('maxlength')).toBe(false);
    });

    it('accepts options as deprecated with one warning', async () => {
      await render(`<uai-input-phone options="[]"></uai-input-phone>`);
      await render(`<uai-input-phone options="[]"></uai-input-phone>`);

      expect(warn.mock.calls.filter(([text]) => text.includes('"options" is deprecated'))).toHaveLength(1);
    });

    it('falls back to pt_BR for an unknown language', async () => {
      const page = await render(`<uai-input-phone language="fr_FR"></uai-input-phone>`);

      expect(shadow(page).querySelector('label').textContent.trim()).toBe('Telefone');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported language "fr_FR"'));
    });
  });

  describe('sizes and states', () => {
    it.each([
      ['', 'medium'],
      ['size="short"', 'short'],
      ['size="large"', 'medium'],
    ])('maps %s to the %s size', async (attribute, size) => {
      const page = await render(`<uai-input-phone ${attribute}></uai-input-phone>`);

      expect(page.root).toHaveClass(`uai-input-phone--size-${size}`);
    });

    it('gives danger priority over success', async () => {
      const page = await render(
        `<uai-input-phone danger success error-message="Número inválido" success-message="Ok"></uai-input-phone>`,
      );

      expect(page.root).toHaveClass('uai-input-phone--danger');
      expect(page.root).not.toHaveClass('uai-input-phone--success');
      expect(message(page)).toBe('Número inválido');
      expect(native(page).getAttribute('aria-invalid')).toBe('true');
      expect(shadow(page).querySelector('uai-icon.input__feedback').getAttribute('name')).toBe('error');
    });

    it('shows the success message and icon', async () => {
      const page = await render(`<uai-input-phone success success-message="Telefone confirmado"></uai-input-phone>`);

      expect(page.root).toHaveClass('uai-input-phone--success');
      expect(message(page)).toBe('Telefone confirmado');
      expect(shadow(page).querySelector('uai-icon.input__feedback').getAttribute('name')).toBe('checkball');
    });

    it.each([
      ['readonly', 'readonly'],
      ['disabled', 'disabled'],
    ])('locks the country selector when %s', async (attribute, state) => {
      const page = await render(`<uai-input-phone ${attribute} text="11 99999-0000"></uai-input-phone>`);

      expect(button(page).hasAttribute('disabled')).toBe(true);
      // As in the UAI Core: readonly hides the arrow, disabled keeps it dimmed.
      expect(!!button(page).querySelector('.prefix__arrow')).toBe(state === 'disabled');
      expect(page.root).toHaveClass(`uai-input-phone--${state}`);
      expect(native(page).hasAttribute(attribute)).toBe(true);
    });
  });

  describe('validation', () => {
    it('accepts digits, spaces and + - ( ) .', async () => {
      const page = await render(`<uai-input-phone text="+55 (11) 99999-0000."></uai-input-phone>`);

      expect(await page.root.isValid()).toBe(true);
    });

    it('rejects letters with numberErrorMessage after blur', async () => {
      const page = await render(`<uai-input-phone text="11 abc" number-error-message="Só números"></uai-input-phone>`);

      expect(await page.root.isValid()).toBe(false);
      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(page.root).toHaveClass('uai-input-phone--danger');
      expect(message(page)).toBe('Só números');
    });

    it('requires a number with the default message of the language', async () => {
      const page = await render(`<uai-input-phone required></uai-input-phone>`);

      expect(await page.root.isValid()).toBe(false);
      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(message(page)).toBe('Informe o telefone.');
    });

    it('clears the number and keeps the country', async () => {
      const page = await render(`<uai-input-phone value="+1" text="555 0100"></uai-input-phone>`);

      await page.root.clear();
      await page.waitForChanges();

      expect(native(page).value).toBe('');
      expect(button(page).querySelector('.prefix__code').textContent.trim()).toBe('+1');
    });
  });
});
