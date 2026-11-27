import { E2EPage, newE2EPage } from '@stencil/core/testing';

const TAG = 'uai-datepicker';

const setup = async (content: string) => {
  const page = await newE2EPage();
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'language', { configurable: true, value: 'pt-BR' });
  });
  await page.setContent(`<meta charset="utf-8"><uai-theme-provider theme="light">${content}</uai-theme-provider>`);
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
    for (const name of ['uaiConcludeDatepicker', 'uaiEmptyConcludeDatepicker']) {
      document.addEventListener(name, (event: CustomEvent) => w.events.push([name, event.detail ?? null]));
    }
  });
  await page.waitForChanges();
  return page;
};

const events = (page: E2EPage) => page.evaluate(() => (window as any).events);
const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);
const isOpen = (page: E2EPage) => page.$eval(TAG, (el) => el.classList.contains('uai-datepicker--open'));
const shown = (page: E2EPage) =>
  page.$eval(TAG, (el) => el.shadowRoot.querySelector('.input__value').textContent.trim());
const focused = (page: E2EPage) =>
  page.$eval(TAG, (el) => {
    const active = el.shadowRoot.activeElement as HTMLElement;
    return active?.dataset.iso ?? active?.getAttribute('part') ?? null;
  });
const clickDay = async (page: E2EPage, iso: string) => {
  await page.click(`${TAG} >>> [data-iso="${iso}"]`);
  await page.waitForChanges();
};
const clickButton = async (page: E2EPage, text: string) => {
  await page.evaluate(
    (label: string) =>
      (
        [...document.querySelector('uai-datepicker').shadowRoot.querySelectorAll('uai-button')].find(
          (button) => button.textContent.trim() === label,
        ) as HTMLElement
      ).shadowRoot
        .querySelector('button')
        .click(),
    text,
  );
  await page.waitForChanges();
};
const openPanel = async (page: E2EPage) => {
  await page.click(`${TAG} >>> [part="input-container"]`);
  await page.waitForChanges();
};

describe('uai-datepicker e2e', () => {
  it('chooses a period with two clicks and applies it', async () => {
    const page = await setup(
      `<uai-datepicker type-of-date="period" value-date-selected="2026-01-15" value-end-date-selected="2026-01-20"></uai-datepicker>`,
    );
    await openPanel(page);
    expect(await isOpen(page)).toBe(true);

    await clickDay(page, '2026-01-10');
    await clickDay(page, '2026-02-05');
    await clickButton(page, 'Aplicar');

    expect(await events(page)).toEqual([['uaiConcludeDatepicker', { startDate: '2026-01-10', endDate: '2026-02-05' }]]);
    expect(await shown(page)).toBe('10/01/2026 – 05/02/2026');
    expect(await isOpen(page)).toBe(false);
    expect(await page.evaluate(() => document.activeElement?.tagName)).toBe('UAI-DATEPICKER');
  });

  it('discards the draft on Escape and on a click outside', async () => {
    const page = await setup(
      `<button id="outside">Fora</button><uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`,
    );
    await openPanel(page);
    await clickDay(page, '2026-01-20');
    await page.keyboard.press('Escape');
    await page.waitForChanges();
    expect(await isOpen(page)).toBe(false);
    expect(await focused(page)).toBe('input-container');

    await openPanel(page);
    await clickDay(page, '2026-01-22');
    await page.click('#outside');
    await page.waitForChanges();
    expect(await isOpen(page)).toBe(false);
    expect(await shown(page)).toBe('15/01/2026');
    expect(await events(page)).toEqual([]);
  });

  it('opens with ArrowDown on the field with the focus on the day, and picks with the keyboard', async () => {
    const page = await setup(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);
    await page.focus(TAG);
    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();
    expect(await focused(page)).toBe('2026-01-15');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    await clickButton(page, 'Aplicar');

    expect(await shown(page)).toBe('22/01/2026');
  });

  it('types a date in the panel field and applies it with Enter', async () => {
    const page = await setup(`<uai-datepicker value-date-selected="2026-01-15"></uai-datepicker>`);
    await openPanel(page);
    const input = await page.find(`${TAG} >>> [part="date-input"]`);
    await input.press('Backspace');
    await page.$eval(TAG, (el) => ((el.shadowRoot.querySelector('[part="date-input"]') as HTMLInputElement).value = ''));
    await input.type('03042026');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(await shown(page)).toBe('03/04/2026');
    expect(await isOpen(page)).toBe(false);
  });

  it('submits the date, or both ends of the period, under name', async () => {
    const page = await setup(`
      <form>
        <uai-datepicker name="send" value-date-selected="2026-01-15"></uai-datepicker>
        <uai-datepicker name="report" type-of-date="period" value-date-selected="2026-01-01" value-end-date-selected="2026-01-31"></uai-datepicker>
        <button id="submit">Enviar</button>
      </form>`);
    await page.click('#submit');

    expect(await submissions(page)).toEqual([
      [
        ['send', '2026-01-15'],
        ['report', '2026-01-01'],
        ['report', '2026-01-31'],
      ],
    ]);
  });
});
