import { newSpecPage } from '@stencil/core/testing';
import { UaiInputDate } from '../uai-input-date';
import { displayToIso, groupDigits, isIsoDate, isoToDisplay } from '../uai-input-date-format';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInputDate], html });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input[part="input"]') as HTMLInputElement;
const button = (page) => shadow(page).querySelector('[part="calendar-button"]') as HTMLButtonElement;
const picker = (page) => shadow(page).querySelector('input.picker') as HTMLInputElement;
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();

const type = async (page, text: string) => {
  native(page).value = text;
  native(page).dispatchEvent(new Event('input'));
  await page.waitForChanges();
};

describe('uai-input-date format', () => {
  it('accepts only ISO dates that exist', () => {
    expect(isIsoDate('2026-12-25')).toBe(true);
    expect(isIsoDate('2028-02-29')).toBe(true);
    expect(isIsoDate('2026-02-29')).toBe(false);
    expect(isIsoDate('2026-13-01')).toBe(false);
    expect(isIsoDate('25-12-2026')).toBe(false);
    expect(isIsoDate('')).toBe(false);
  });

  it('groups typed digits as DD-MM-YYYY', () => {
    expect(groupDigits('2', 'pt_BR')).toBe('2');
    expect(groupDigits('251', 'pt_BR')).toBe('25-1');
    expect(groupDigits('25122026', 'pt_BR')).toBe('25-12-2026');
    expect(groupDigits('25122026', 'en_US')).toBe('25-12-2026');
  });

  it('converts between the display and ISO', () => {
    expect(displayToIso('25122026', 'pt_BR')).toBe('2026-12-25');
    expect(displayToIso('25122026', 'en_US')).toBe('2026-12-25');
    expect(displayToIso('31022026', 'pt_BR')).toBe('');
    expect(displayToIso('2512', 'pt_BR')).toBe('');
    expect(isoToDisplay('2026-12-25', 'es_ES')).toBe('25-12-2026');
    expect(isoToDisplay('2026-12-25', 'en_US')).toBe('25-12-2026');
    expect(isoToDisplay('2026-02-30', 'pt_BR')).toBe('');
  });

  it.each(['pt_BR', 'en_US', 'es_ES'] as const)('keeps day before month in %s, including ambiguous dates', (language) => {
    expect(groupDigits('05122026', language)).toBe('05-12-2026');
    expect(displayToIso('05122026', language)).toBe('2026-12-05');
    expect(isoToDisplay('2026-12-05', language)).toBe('05-12-2026');
  });
});

describe('uai-input-date', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('anatomy', () => {
    it('renders a labelled numeric text input and the calendar button', async () => {
      const page = await render(
        `<uai-input-date label="Vencimento" helper-message="Dia do pagamento"></uai-input-date>`,
      );
      const label = shadow(page).querySelector('label');

      expect(label.getAttribute('for')).toBe(native(page).id);
      expect(label.textContent.trim()).toBe('Vencimento');
      expect(native(page).getAttribute('type')).toBe('text');
      expect(native(page).getAttribute('inputmode')).toBe('numeric');
      expect(native(page).getAttribute('aria-describedby')).toBe(shadow(page).querySelector('.input__message').id);
      expect(button(page).getAttribute('type')).toBe('button');
      expect(button(page).getAttribute('aria-label')).toBe('Abrir calendário');
      expect(button(page).querySelector('uai-icon').getAttribute('name')).toBe('calendar');
      expect(message(page)).toBe('Dia do pagamento');
    });

    it('keeps the internal date input out of focus and accessibility', async () => {
      const page = await render(`<uai-input-date min="2026-01-01" max="2026-12-31"></uai-input-date>`);

      expect(picker(page).getAttribute('type')).toBe('date');
      expect(picker(page).getAttribute('tabindex')).toBe('-1');
      expect(picker(page).getAttribute('aria-hidden')).toBe('true');
      expect(picker(page).getAttribute('min')).toBe('2026-01-01');
      expect(picker(page).getAttribute('max')).toBe('2026-12-31');
    });

    it.each([
      ['pt_BR', 'Data', 'DD-MM-YYYY', 'Abrir calendário'],
      ['en_US', 'Date', 'DD-MM-YYYY', 'Open calendar'],
      ['es_ES', 'Fecha', 'DD-MM-YYYY', 'Abrir calendario'],
    ])('uses the default texts of %s', async (language, label, placeholder, calendar) => {
      const page = await render(`<uai-input-date language="${language}"></uai-input-date>`);

      expect(shadow(page).querySelector('label').textContent.trim()).toBe(label);
      expect(native(page).getAttribute('placeholder')).toBe(placeholder);
      expect(button(page).getAttribute('aria-label')).toBe(calendar);
    });

    it('falls back to pt_BR for an unknown language', async () => {
      const page = await render(`<uai-input-date language="fr_FR"></uai-input-date>`);

      expect(native(page).getAttribute('placeholder')).toBe('DD-MM-YYYY');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported language "fr_FR"'));
    });
  });

  describe('value', () => {
    it('shows an ISO value as DD-MM-YYYY even in English', async () => {
      const page = await render(`<uai-input-date language="en_US" value="2026-12-25"></uai-input-date>`);

      expect(native(page).value).toBe('25-12-2026');
    });

    it('formats typed digits and emits the ISO value', async () => {
      const page = await render(`<uai-input-date></uai-input-date>`);
      const change = jest.fn();
      page.root.addEventListener('uaiChange', (event: CustomEvent) => change(event.detail));

      await type(page, '25a12-2026');

      expect(native(page).value).toBe('25-12-2026');
      expect(page.root.value).toBe('2026-12-25');
      expect(change).toHaveBeenLastCalledWith({ value: '2026-12-25' });
    });

    it('keeps an incomplete date visible with an empty value', async () => {
      const page = await render(`<uai-input-date value="2026-12-25"></uai-input-date>`);

      await type(page, '25-12-20');

      expect(native(page).value).toBe('25-12-20');
      expect(page.root.value).toBe('');
    });

    it('takes the date picked in the calendar', async () => {
      const page = await render(`<uai-input-date></uai-input-date>`);

      picker(page).value = '2026-12-25';
      picker(page).dispatchEvent(new Event('change'));
      await page.waitForChanges();

      expect(native(page).value).toBe('25-12-2026');
      expect(page.root.value).toBe('2026-12-25');
    });

    it('clears the date', async () => {
      const page = await render(`<uai-input-date value="2026-12-25"></uai-input-date>`);

      await page.root.clear();
      await page.waitForChanges();

      expect(native(page).value).toBe('');
      expect(page.root.value).toBe('');
    });
  });

  describe('validation', () => {
    it('rejects a date that does not exist after blur', async () => {
      const page = await render(`<uai-input-date></uai-input-date>`);

      await type(page, '31022026');
      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(await page.root.isValid()).toBe(false);
      expect(page.root).toHaveClass('uai-input-date--danger');
      expect(message(page)).toBe('Informe uma data válida.');
    });

    it('requires a date', async () => {
      const page = await render(`<uai-input-date required required-error-message="Escolha o dia"></uai-input-date>`);

      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(await page.root.isValid()).toBe(false);
      expect(message(page)).toBe('Escolha o dia');
    });

    it('checks min with the formatted date in the default message', async () => {
      const page = await render(`<uai-input-date min="2026-01-01" value="2025-12-31"></uai-input-date>`);

      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(message(page)).toBe('Informe uma data a partir de 01-01-2026.');
    });

    it('checks max with the custom message', async () => {
      const page = await render(
        `<uai-input-date max="2026-12-31" value="2027-01-01" max-error-message="Até o fim do ano"></uai-input-date>`,
      );

      expect(await page.root.isValid()).toBe(false);
      native(page).dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(message(page)).toBe('Até o fim do ano');
    });

    it('accepts a date within the range', async () => {
      const page = await render(
        `<uai-input-date min="2026-01-01" max="2026-12-31" value="2026-06-15"></uai-input-date>`,
      );

      expect(await page.root.isValid()).toBe(true);
    });
  });

  describe('sizes and states', () => {
    it.each([
      ['', 'medium'],
      ['size="short"', 'short'],
      ['size="large"', 'medium'],
    ])('maps %s to the %s size', async (attribute, size) => {
      const page = await render(`<uai-input-date ${attribute}></uai-input-date>`);

      expect(page.root).toHaveClass(`uai-input-date--size-${size}`);
    });

    it('gives danger priority over success and shows the feedback icon before the calendar button', async () => {
      const page = await render(
        `<uai-input-date danger success error-message="Data inválida" success-message="Ok"></uai-input-date>`,
      );
      const control = shadow(page).querySelector('[part="input-container"]');
      const children = Array.from(control.children);

      expect(page.root).toHaveClass('uai-input-date--danger');
      expect(page.root).not.toHaveClass('uai-input-date--success');
      expect(message(page)).toBe('Data inválida');
      expect(children.indexOf(control.querySelector('.input__feedback'))).toBeLessThan(children.indexOf(button(page)));
    });

    it('hides the calendar button when readonly', async () => {
      const page = await render(`<uai-input-date readonly value="2026-12-25"></uai-input-date>`);

      expect(button(page)).toBeNull();
      expect(page.root).toHaveClass('uai-input-date--readonly');
      expect(native(page).hasAttribute('readonly')).toBe(true);
    });

    it('disables the calendar button when disabled', async () => {
      const page = await render(`<uai-input-date disabled></uai-input-date>`);

      expect(button(page).hasAttribute('disabled')).toBe(true);
      expect(native(page).hasAttribute('disabled')).toBe(true);
      expect(page.root).toHaveClass('uai-input-date--disabled');
    });
  });
});
