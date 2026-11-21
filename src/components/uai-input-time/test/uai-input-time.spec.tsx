import { newSpecPage } from '@stencil/core/testing';
import { UaiInputTime } from '../uai-input-time';
import { acceptDigits, digitsToTime, groupTime, isTime } from '../uai-input-time-format';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiInputTime], html });

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const native = (page) => shadow(page).querySelector('input[part="input"]') as HTMLInputElement;
const button = (page) => shadow(page).querySelector('[part="picker-button"]') as HTMLButtonElement;
const panel = (page) => shadow(page).querySelector('[part="picker"]') as HTMLElement;
const column = (page, name: string) =>
  [...panel(page).querySelectorAll('[role="listbox"]')].find((list) => list.getAttribute('aria-label') === name);
const option = (page, name: string, text: string) =>
  [...column(page, name).querySelectorAll('[role="option"]')].find((item) => item.textContent.trim() === text) as HTMLElement;
const texts = (page, name: string) => [...column(page, name).querySelectorAll('[role="option"]')].map((item) => item.textContent.trim());
const key = async (page, name: string, init: KeyboardEventInit = {}) => {
  native(page).dispatchEvent(new KeyboardEvent('keydown', { key: name, ...init }));
  await page.waitForChanges();
};
const openByClick = async (page) => {
  native(page).click();
  await page.waitForChanges();
};
const message = (page) => shadow(page).querySelector('.input__message')?.textContent.trim();

const type = async (page, text: string) => {
  native(page).value = text;
  native(page).dispatchEvent(new Event('input'));
  await page.waitForChanges();
};

const blur = async (page) => {
  native(page).dispatchEvent(new Event('blur'));
  await page.waitForChanges();
};

describe('uai-input-time format', () => {
  it('accepts only times of day from 00:00 to 23:59', () => {
    expect(isTime('00:00')).toBe(true);
    expect(isTime('23:59')).toBe(true);
    expect(isTime('24:00')).toBe(false);
    expect(isTime('12:60')).toBe(false);
    expect(isTime('9:30')).toBe(false);
    expect(isTime('')).toBe(false);
  });

  it('refuses digits that cannot make a time and keeps the previous ones', () => {
    expect(acceptDigits('1', '')).toBe('1');
    expect(acceptDigits('3', '')).toBe('');
    expect(acceptDigits('24', '2')).toBe('2');
    expect(acceptDigits('236', '23')).toBe('23');
    expect(acceptDigits('2359', '235')).toBe('2359');
    expect(acceptDigits('23590', '2359')).toBe('2359');
  });

  it('groups the digits as HH:mm and gives the time only when complete', () => {
    expect(groupTime('9')).toBe('9');
    expect(groupTime('093')).toBe('09:3');
    expect(digitsToTime('093')).toBe('');
    expect(digitsToTime('0930')).toBe('09:30');
  });
});

describe('uai-input-time', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('anatomy', () => {
    it('renders a labelled numeric text input and the picker button', async () => {
      const page = await render(`<uai-input-time label="Horário do retorno"></uai-input-time>`);
      const label = shadow(page).querySelector('label');

      expect(label.getAttribute('for')).toBe(native(page).id);
      expect(label.textContent.trim()).toBe('Horário do retorno');
      expect(native(page).getAttribute('inputmode')).toBe('numeric');
      expect(native(page).getAttribute('placeholder')).toBe('hh:mm');
      expect(button(page).getAttribute('aria-label')).toBe('Escolher horário');
      expect(button(page).querySelector('uai-icon').getAttribute('name')).toBe('clock');
    });

    it('renders the panel closed, named, with no options until it opens', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      expect(panel(page).getAttribute('aria-label')).toBe('Escolher horário');
      expect(panel(page).querySelectorAll('[role="option"]')).toHaveLength(0);
      expect(native(page).getAttribute('role')).toBe('combobox');
      expect(native(page).getAttribute('aria-expanded')).toBe('false');
      expect(native(page).getAttribute('aria-controls')).toBe(panel(page).id);
    });

    it('shows the default label and texts of the language', async () => {
      const page = await render(`<uai-input-time language="en_US"></uai-input-time>`);

      expect(shadow(page).querySelector('label').textContent.trim()).toBe('Time');
      expect(button(page).getAttribute('aria-label')).toBe('Choose time');
    });

    it('falls back to pt_BR for an unknown language', async () => {
      const page = await render(`<uai-input-time language="fr_FR"></uai-input-time>`);

      expect(shadow(page).querySelector('label').textContent.trim()).toBe('Horário');
      expect(warn).toHaveBeenCalled();
    });
  });

  describe('value', () => {
    it('formats typed digits and emits HH:mm', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);
      const change = jest.fn();
      page.root.addEventListener('uaiChange', (event: CustomEvent) => change(event.detail));

      await type(page, '0930');

      expect(native(page).value).toBe('09:30');
      expect(page.root.value).toBe('09:30');
      expect(change).toHaveBeenLastCalledWith({ value: '09:30' });
    });

    it('keeps an incomplete time visible with an empty value', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      await type(page, '093');

      expect(native(page).value).toBe('09:3');
      expect(page.root.value).toBe('');
    });

    it('refuses a digit that cannot make a time', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      await type(page, '2');
      await type(page, '27');

      expect(native(page).value).toBe('2');
    });

    it('shows a value set from outside and ignores one that is not a time', async () => {
      const page = await render(`<uai-input-time value="18:45"></uai-input-time>`);

      expect(native(page).value).toBe('18:45');

      page.root.value = '25:00';
      await page.waitForChanges();

      expect(native(page).value).toBe('');
    });

    it('clears the time', async () => {
      const page = await render(`<uai-input-time value="08:00"></uai-input-time>`);

      await page.root.clear();
      await page.waitForChanges();

      expect(native(page).value).toBe('');
      expect(page.root.value).toBe('');
    });
  });

  describe('panel', () => {
    it('opens on a click on the field, with the hours and the minutes every 5', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      await openByClick(page);

      expect(page.root).toHaveClass('uai-input-time--open');
      expect(native(page).getAttribute('aria-expanded')).toBe('true');
      expect(texts(page, 'Horas')).toHaveLength(24);
      expect(texts(page, 'Horas')[0]).toBe('00');
      expect(texts(page, 'Minutos')).toEqual(['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
    });

    it('offers the minutes at minuteStep', async () => {
      const page = await render(`<uai-input-time minute-step="15"></uai-input-time>`);

      await openByClick(page);

      expect(texts(page, 'Minutos')).toEqual(['00', '15', '30', '45']);
    });

    it('opens and closes with the picker button', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      button(page).click();
      await page.waitForChanges();
      expect(page.root).toHaveClass('uai-input-time--open');

      button(page).click();
      await page.waitForChanges();
      expect(page.root).not.toHaveClass('uai-input-time--open');
    });

    it('fills the field with the hour at once and closes on the minute', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);
      await openByClick(page);

      option(page, 'Horas', '14').click();
      await page.waitForChanges();

      expect(page.root.value).toBe('14:00');
      expect(page.root).toHaveClass('uai-input-time--open');

      option(page, 'Minutos', '30').click();
      await page.waitForChanges();

      expect(native(page).value).toBe('14:30');
      expect(page.root.value).toBe('14:30');
      expect(page.root).not.toHaveClass('uai-input-time--open');
    });

    it('starts on the hour and minute of the value, and marks them as selected', async () => {
      const page = await render(`<uai-input-time value="09:30"></uai-input-time>`);

      await openByClick(page);

      expect(option(page, 'Horas', '09').getAttribute('aria-selected')).toBe('true');
      expect(option(page, 'Minutos', '30').getAttribute('aria-selected')).toBe('true');
      expect(native(page).getAttribute('aria-activedescendant')).toBe(option(page, 'Horas', '09').id);
    });

    it('moves with the arrows, switches columns and picks with Enter', async () => {
      const page = await render(`<uai-input-time value="09:30"></uai-input-time>`);
      await openByClick(page);

      await key(page, 'ArrowDown');
      await key(page, 'Enter');
      expect(page.root.value).toBe('10:30');

      await key(page, 'ArrowUp');
      await key(page, 'Enter');

      expect(page.root.value).toBe('10:25');
      expect(page.root).not.toHaveClass('uai-input-time--open');
    });

    it('opens with Alt+ArrowDown', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      await key(page, 'ArrowDown', { altKey: true });

      expect(page.root).toHaveClass('uai-input-time--open');
    });

    it('disables the hours and minutes outside min and max', async () => {
      const page = await render(`<uai-input-time min="08:30" max="18:00"></uai-input-time>`);
      await openByClick(page);

      expect(option(page, 'Horas', '07').getAttribute('aria-disabled')).toBe('true');
      expect(option(page, 'Horas', '08').getAttribute('aria-disabled')).toBeNull();
      expect(option(page, 'Horas', '19').getAttribute('aria-disabled')).toBe('true');

      option(page, 'Horas', '08').click();
      await page.waitForChanges();

      expect(page.root.value).toBe('08:30');
      expect(option(page, 'Minutos', '25').getAttribute('aria-disabled')).toBe('true');
      expect(option(page, 'Minutos', '30').getAttribute('aria-disabled')).toBeNull();
    });

    it('does not open when readonly or disabled', async () => {
      const readonly = await render(`<uai-input-time readonly></uai-input-time>`);
      await openByClick(readonly);
      expect(readonly.root).not.toHaveClass('uai-input-time--open');

      const disabled = await render(`<uai-input-time disabled></uai-input-time>`);
      await key(disabled, 'ArrowDown', { altKey: true });
      expect(disabled.root).not.toHaveClass('uai-input-time--open');
    });
  });

  describe('validation', () => {
    it('rejects an incomplete time after blur', async () => {
      const page = await render(`<uai-input-time></uai-input-time>`);

      await type(page, '093');
      await blur(page);

      expect(await page.root.isValid()).toBe(false);
      expect(page.root).toHaveClass('uai-input-time--danger');
      expect(message(page)).toBe('Informe um horário de 00:00 a 23:59.');
    });

    it('requires a time', async () => {
      const page = await render(`<uai-input-time required required-error-message="Escolha a hora"></uai-input-time>`);

      await blur(page);

      expect(await page.root.isValid()).toBe(false);
      expect(message(page)).toBe('Escolha a hora');
    });

    it('checks min with the time in the default message', async () => {
      const page = await render(`<uai-input-time min="08:00" value="07:59"></uai-input-time>`);

      await blur(page);

      expect(message(page)).toBe('Informe um horário a partir de 08:00.');
    });

    it('checks max with the custom message', async () => {
      const page = await render(
        `<uai-input-time max="18:00" value="18:01" max-error-message="Até o fim do expediente"></uai-input-time>`,
      );

      await blur(page);

      expect(message(page)).toBe('Até o fim do expediente');
    });

    it('accepts a time within the range', async () => {
      const page = await render(`<uai-input-time min="08:00" max="18:00" value="12:00"></uai-input-time>`);

      await blur(page);

      expect(await page.root.isValid()).toBe(true);
      expect(page.root).not.toHaveClass('uai-input-time--danger');
    });
  });

  describe('sizes and states', () => {
    it('falls back to medium for an unknown size', async () => {
      const page = await render(`<uai-input-time size="large"></uai-input-time>`);

      expect(page.root).toHaveClass('uai-input-time--size-medium');
      expect(warn).toHaveBeenCalled();
    });

    it('gives danger priority over success, with the error message', async () => {
      const page = await render(
        `<uai-input-time danger success error-message="Horário ocupado" success-message="Livre"></uai-input-time>`,
      );

      expect(page.root).toHaveClass('uai-input-time--danger');
      expect(page.root).not.toHaveClass('uai-input-time--success');
      expect(message(page)).toBe('Horário ocupado');
    });

    it('hides the picker button when readonly', async () => {
      const page = await render(`<uai-input-time readonly value="08:00"></uai-input-time>`);

      expect(button(page)).toBeNull();
      expect(native(page).hasAttribute('readonly')).toBe(true);
    });

    it('disables the field and the picker button when disabled', async () => {
      const page = await render(`<uai-input-time disabled></uai-input-time>`);

      expect(button(page).hasAttribute('disabled')).toBe(true);
      expect(native(page).hasAttribute('disabled')).toBe(true);
      expect(page.root.getAttribute('aria-disabled')).toBe('true');
    });
  });
});
