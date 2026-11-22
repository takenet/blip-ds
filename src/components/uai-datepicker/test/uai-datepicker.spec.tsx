import { newSpecPage } from '@stencil/core/testing';
import { UaiDatepicker } from '../uai-datepicker';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = async (html: string) => {
  const page = await newSpecPage({ components: [UaiDatepicker], html: '' });
  Object.defineProperty(window.navigator, 'language', { configurable: true, value: 'pt-BR' });
  await page.setContent(html);
  return page;
};

const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const trigger = (page) => shadow(page).querySelector('[part="input-container"]') as HTMLButtonElement;
const shown = (page) => trigger(page).querySelector('.input__value').textContent.trim();
const day = (page, iso: string) => shadow(page).querySelector(`[data-iso="${iso}"]`) as HTMLButtonElement;
const cell = (page, iso: string) => day(page, iso).closest('td');
const fields = (page) => [...shadow(page).querySelectorAll('[part="date-input"]')] as HTMLInputElement[];
const headers = (page) =>
  [...shadow(page).querySelectorAll('[part="calendar-picker"]')].map((picker) => picker.textContent.trim());
const button = (page, text: string) =>
  [...shadow(page).querySelectorAll('uai-button')].find((item) => item.textContent.trim() === text) as HTMLElement;
const isOpen = (page) => page.root.classList.contains('uai-datepicker--open');

const open = async (page) => {
  trigger(page).click();
  await page.waitForChanges();
};
const click = async (page, element: HTMLElement) => {
  element.click();
  await page.waitForChanges();
};
const press = async (page, element: HTMLElement, key: string) => {
  element.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  await page.waitForChanges();
};
const uai = async (page, element: HTMLElement) => {
  element.dispatchEvent(new CustomEvent('uaiClick', { bubbles: true }));
  await page.waitForChanges();
};
const listen = (page, name: string) => {
  const spy = jest.fn();
  page.root.addEventListener(name, (event: CustomEvent) => spy(event.detail));
  return spy;
};

describe('uai-datepicker', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('field', () => {
    it('shows the date in the regional format', async () => {
      const page = await render(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);

      expect(shown(page)).toBe('15/01/2026');
    });

    it('shows the period in the regional format', async () => {
      const page = await render(
        `<uai-datepicker type-of-date="period" value-date-selected="2026-01-15" value-end-date-selected="2026-02-15"></uai-datepicker>`,
      );

      expect(shown(page)).toBe('15/01/2026 – 15/02/2026');
    });

    it('shows the regional format as the placeholder and the default label', async () => {
      const page = await render(`<uai-datepicker type-of-date="period"></uai-datepicker>`);

      expect(shown(page)).toBe('DD/MM/YYYY – DD/MM/YYYY');
      expect(shadow(page).querySelector('label').textContent.trim()).toBe('Data');
      expect(trigger(page).getAttribute('aria-haspopup')).toBe('dialog');
    });

    it('takes the legacy DD/MM/YYYY with a warning', async () => {
      const page = await render(`<uai-datepicker value-date-selected="15/01/2026"></uai-datepicker>`);

      expect(shown(page)).toBe('15/01/2026');
      expect(warn).toHaveBeenCalled();
    });
  });

  describe('single date', () => {
    it('opens a month with the "Data" field on the chosen date', async () => {
      const page = await render(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);

      await open(page);

      expect(isOpen(page)).toBe(true);
      expect(headers(page)).toEqual(['Jan', '2026']);
      expect(fields(page).map((field) => field.value)).toEqual(['15/01/2026']);
      expect(day(page, '2026-01-15').classList.contains('calendar__day--selected')).toBe(true);
    });

    it('keeps the choice as a draft until Apply, and concludes with the date', async () => {
      const page = await render(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);
      const started = listen(page, 'uaiStartDate');
      const concluded = listen(page, 'uaiConcludeDatepicker');
      await open(page);

      await click(page, day(page, '2026-01-20'));

      expect(started).toHaveBeenLastCalledWith({ value: '2026-01-20' });
      expect(page.root.valueDateSelected).toBe('2026-01-15');
      expect(fields(page)[0].value).toBe('20/01/2026');

      await uai(page, button(page, 'Aplicar'));

      expect(page.root.valueDateSelected).toBe('2026-01-20');
      expect(concluded).toHaveBeenCalledWith({ startDate: '2026-01-20' });
      expect(isOpen(page)).toBe(false);
    });

    it('discards the draft when the panel closes without Apply', async () => {
      const page = await render(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);
      await open(page);
      await click(page, day(page, '2026-01-20'));

      await page.root.close();
      await page.waitForChanges();
      await open(page);

      expect(fields(page)[0].value).toBe('15/01/2026');
    });

    it('concludes empty after Reset and Apply', async () => {
      const page = await render(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);
      const empty = listen(page, 'uaiEmptyConcludeDatepicker');
      await open(page);

      await uai(page, button(page, 'Redefinir'));
      await uai(page, button(page, 'Aplicar'));

      expect(page.root.valueDateSelected).toBeNull();
      expect(empty).toHaveBeenCalled();
    });
  });

  describe('period', () => {
    const period = (attributes = '') => render(`<uai-datepicker type-of-date="period" ${attributes}></uai-datepicker>`);

    it('shows two months side by side with the "Começa" and "Termina" fields', async () => {
      const page = await period('value-date-selected="2026-01-15" value-end-date-selected="2026-02-15"');

      await open(page);

      expect(headers(page)).toEqual(['Jan', '2026', 'Fev', '2026']);
      expect([...shadow(page).querySelectorAll('.field__label')].map((label) => label.textContent.trim())).toEqual([
        'Começa',
        'Termina',
      ]);
      expect(fields(page).map((field) => field.value)).toEqual(['15/01/2026', '15/02/2026']);
    });

    it('fills the days between the ends, and the empty cells of a month inside the period', async () => {
      const page = await period('value-date-selected="2026-01-15" value-end-date-selected="2026-02-15"');
      await open(page);

      expect(cell(page, '2026-01-15').classList.contains('calendar__cell--start')).toBe(true);
      expect(cell(page, '2026-01-20').classList.contains('calendar__cell--between')).toBe(true);
      expect(cell(page, '2026-02-15').classList.contains('calendar__cell--end')).toBe(true);
      expect(cell(page, '2026-02-16').classList.contains('calendar__cell--between')).toBe(false);
    });

    it('starts on the first click, ends on a later one and restarts on an earlier one', async () => {
      const page = await period();
      const started = listen(page, 'uaiStartDate');
      const ended = listen(page, 'uaiEndDate');
      await open(page);
      // Without a value, the panel opens on the month of today.
      const now = new Date();
      const base = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

      await click(page, day(page, `${base}-10`));
      expect(started).toHaveBeenLastCalledWith({ value: `${base}-10` });

      await click(page, day(page, `${base}-05`));
      expect(started).toHaveBeenLastCalledWith({ value: `${base}-05` });

      await click(page, day(page, `${base}-20`));
      expect(ended).toHaveBeenLastCalledWith({ value: `${base}-20` });
      expect(fields(page)[1].value).toBe(`20/${base.slice(5)}/${base.slice(0, 4)}`);
    });

    it('applies only with both ends, and concludes with the period', async () => {
      const page = await period('value-date-selected="2026-01-15" value-end-date-selected="2026-01-20"');
      const concluded = listen(page, 'uaiConcludeDatepicker');
      await open(page);

      await click(page, day(page, '2026-01-10'));
      expect(button(page, 'Aplicar').hasAttribute('disabled')).toBe(true);

      await click(page, day(page, '2026-02-03'));
      await uai(page, button(page, 'Aplicar'));

      expect(concluded).toHaveBeenCalledWith({ startDate: '2026-01-10', endDate: '2026-02-03' });
      expect(shown(page)).toBe('10/01/2026 – 03/02/2026');
    });

    it('takes a date typed in the fields and shows its month', async () => {
      const page = await period('value-date-selected="2026-01-15" value-end-date-selected="2026-01-20"');
      await open(page);

      fields(page)[1].value = '10052026';
      fields(page)[1].dispatchEvent(new Event('input'));
      await page.waitForChanges();

      expect(fields(page)[1].value).toBe('10/05/2026');
      expect(headers(page)).toEqual(['Abr', '2026', 'Mai', '2026']);
      expect(cell(page, '2026-05-10').classList.contains('calendar__cell--end')).toBe(true);
    });

    it('turns both months with the arrows', async () => {
      const page = await period('value-date-selected="2026-01-15"');
      await open(page);

      await click(page, shadow(page).querySelectorAll('[part="calendar-arrow"]')[1] as HTMLElement);

      expect(headers(page)).toEqual(['Fev', '2026', 'Mar', '2026']);
    });
  });

  describe('limits, keyboard and states', () => {
    it('disables the days out of the limits', async () => {
      const page = await render(
        `<uai-datepicker start-date-limit="2026-01-10" end-date-limit="2026-01-20" value-date-selected="2026-01-15"></uai-datepicker>`,
      );
      await open(page);

      expect(day(page, '2026-01-09').getAttribute('aria-disabled')).toBe('true');
      expect(day(page, '2026-01-21').getAttribute('aria-disabled')).toBe('true');

      await click(page, day(page, '2026-01-21'));
      expect(fields(page)[0].value).toBe('15/01/2026');
    });

    it('moves with the keyboard into the next month and picks with Enter', async () => {
      const page = await render(`<uai-datepicker value-date-selected="2026-01-31"></uai-datepicker>`);
      await open(page);

      await press(page, day(page, '2026-01-31'), 'ArrowRight');
      expect(headers(page)).toEqual(['Fev', '2026']);

      await press(page, day(page, '2026-02-01'), 'Enter');
      expect(fields(page)[0].value).toBe('01/02/2026');
    });

    it('shows the message inside the panel in its tone', async () => {
      const page = await render(`<uai-datepicker message="Até 90 dias." variant-banner="info"></uai-datepicker>`);
      await open(page);

      const message = shadow(page).querySelector('[part="message"]');
      expect(message.textContent.trim()).toBe('Até 90 dias.');
      expect(message.classList.contains('panel__message--info')).toBe(true);
    });

    it('passes the legacy test ids to the panel controls', async () => {
      const page = await render(
        `<uai-datepicker type-of-date="period" dt-input-start="start" dt-input-end="end" dt-button-prev="prev" dt-button-next="next" dt-button-clear="clear" dt-button-confirm="confirm"></uai-datepicker>`,
      );
      await open(page);

      ['start', 'end', 'prev', 'next'].forEach((id) =>
        expect(shadow(page).querySelector(`[data-test="${id}"]`)).not.toBeNull(),
      );
      expect(button(page, 'Redefinir').getAttribute('data-test')).toBe('clear');
      expect(button(page, 'Aplicar').getAttribute('data-test')).toBe('confirm');
    });

    it('does not open when disabled', async () => {
      const page = await render(`<uai-datepicker disabled></uai-datepicker>`);

      await open(page);

      expect(isOpen(page)).toBe(false);
      expect(trigger(page).hasAttribute('disabled')).toBe(true);
    });

    it('falls back to single for an unknown typeOfDate', async () => {
      const page = await render(`<uai-datepicker type-of-date="range"></uai-datepicker>`);
      await open(page);

      expect(fields(page)).toHaveLength(1);
      expect(warn).toHaveBeenCalled();
    });
  });
});
