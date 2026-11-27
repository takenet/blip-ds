import { E2EPage, newE2EPage } from '@stencil/core/testing';

const setup = async (content: string) => {
  const page = await newE2EPage({ html: `<meta charset="utf-8"><uai-theme-provider theme="light">${content}</uai-theme-provider>` });
  // Tests run in parallel tabs; keep this page focused so focus and blur come only from the test.
  const session = await page.target().createCDPSession();
  await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await page.evaluate(() => {
    const w = window as any;
    w.submissions = [];
    document.querySelectorAll('form').forEach((form) =>
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        w.submissions.push([...new FormData(form).entries()]);
      }),
    );
  });
  return page;
};

const submissions = (page: E2EPage) => page.evaluate(() => (window as any).submissions);
const isOpen = (page: E2EPage) => page.$eval('uai-input-time', (el) => el.classList.contains('uai-input-time--open'));
const clickOption = async (page: E2EPage, column: string, text: string) => {
  await page.evaluate(
    (name: string, label: string) => {
      const panel = document.querySelector('uai-input-time').shadowRoot.querySelector('[part="picker"]');
      const list = [...panel.querySelectorAll('[role="listbox"]')].find((item) => item.getAttribute('aria-label') === name);
      ([...list.querySelectorAll('[role="option"]')].find((item) => item.textContent.trim() === label) as HTMLElement).click();
    },
    column,
    text,
  );
  await page.waitForChanges();
};

describe('uai-input-time e2e', () => {
  it('submits the time under name and restores the initial time on reset', async () => {
    const page = await setup(`
      <form>
        <uai-input-time label="Abertura" name="abertura" value="08:00"></uai-input-time>
        <button id="submit">Enviar</button>
        <button id="reset" type="reset">Limpar</button>
      </form>`);
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['abertura', '08:00']]]);

    await page.$eval('uai-input-time', (el: any) => (el.value = '09:15'));
    await page.waitForChanges();
    await page.click('#reset');
    await page.waitForChanges();

    expect(await page.$eval('uai-input-time', (el: any) => el.value)).toBe('08:00');
  });

  it('types a time with the keyboard and refuses digits that cannot make one', async () => {
    const page = await setup(`<uai-input-time label="Retorno"></uai-input-time>`);
    const input = await page.find('uai-input-time >>> input');

    await input.type('0975');
    await page.waitForChanges();

    expect(await page.$eval('uai-input-time', (el) => el.shadowRoot.querySelector('input').value)).toBe('09:5');
    expect(await page.$eval('uai-input-time', (el: any) => el.value)).toBe('');
  });

  it('opens the panel on a click and fills the time with the hour and the minute', async () => {
    const page = await setup(`<uai-input-time label="Retorno"></uai-input-time>`);

    await page.click('uai-input-time >>> input');
    await page.waitForChanges();
    expect(await isOpen(page)).toBe(true);

    await clickOption(page, 'Horas', '14');
    await clickOption(page, 'Minutos', '30');

    expect(await page.$eval('uai-input-time', (el: any) => el.value)).toBe('14:30');
    expect(await isOpen(page)).toBe(false);
    expect(await page.evaluate(() => document.activeElement?.tagName)).toBe('UAI-INPUT-TIME');
  });

  it('picks with the keyboard and closes with Escape, keeping the focus in the field', async () => {
    const page = await setup(`<uai-input-time label="Retorno" value="09:30"></uai-input-time>`);
    await page.click('uai-input-time >>> input');
    await page.waitForChanges();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await page.$eval('uai-input-time', (el: any) => el.value)).toBe('10:30');

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    expect(await isOpen(page)).toBe(false);
    expect(await page.$eval('uai-input-time', (el) => el.shadowRoot.activeElement?.tagName)).toBe('INPUT');
  });

  it('closes on a click outside', async () => {
    const page = await setup(`<uai-input-time label="Retorno"></uai-input-time><p id="outside">Fora</p>`);
    await page.click('uai-input-time >>> input');
    await page.waitForChanges();

    await page.click('#outside');
    await page.waitForChanges();

    expect(await isOpen(page)).toBe(false);
  });
});
