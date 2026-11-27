import { E2EPage, newE2EPage } from '@stencil/core/testing';

const CITIES = JSON.stringify([
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'bh', label: 'Belo Horizonte' },
]);

const setup = async (content: string) => {
  const page = await newE2EPage({ html: `<meta charset="utf-8"><uai-theme-provider theme="light">${content}</uai-theme-provider>` });
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
const shown = (page: E2EPage) => page.$eval('uai-autocomplete', (el) => el.shadowRoot.querySelector('input').value);
const isOpen = (page: E2EPage) =>
  page.$eval('uai-autocomplete', (el) => el.classList.contains('uai-autocomplete--open'));
const clickOption = async (page: E2EPage, text: string) => {
  await page.evaluate((label: string) => {
    const options = document.querySelector('uai-autocomplete').shadowRoot.querySelectorAll('[role="option"]');
    ([...options].find((item) => item.textContent.trim() === label) as HTMLElement).click();
  }, text);
  await page.waitForChanges();
};

describe('uai-autocomplete e2e', () => {
  it('searches with the keyboard and picks with Enter', async () => {
    const page = await setup(`<uai-autocomplete label="Cidade" options='${CITIES}'></uai-autocomplete>`);
    const input = await page.find('uai-autocomplete >>> input');

    await input.type('belo');
    await page.waitForChanges();
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(await page.$eval('uai-autocomplete', (el: any) => el.value)).toBe('bh');
    expect(await shown(page)).toBe('Belo Horizonte');
    expect(await isOpen(page)).toBe(false);
  });

  it('closes on Escape and on a click outside, showing the choice again', async () => {
    const page = await setup(
      `<uai-autocomplete label="Cidade" value="sp" options='${CITIES}'></uai-autocomplete><p id="outside">Fora</p>`,
    );
    const input = await page.find('uai-autocomplete >>> input');
    await input.click();
    await page.keyboard.press('Backspace');
    await page.waitForChanges();

    await page.keyboard.press('Escape');
    await page.waitForChanges();
    expect(await isOpen(page)).toBe(false);
    expect(await shown(page)).toBe('São Paulo');

    await input.click();
    await page.waitForChanges();
    expect(await isOpen(page)).toBe(true);
    await page.click('#outside');
    await page.waitForChanges();
    expect(await isOpen(page)).toBe(false);
  });

  it('submits the chosen value under name and restores it on reset', async () => {
    const page = await setup(`
      <form>
        <uai-autocomplete label="Cidade" name="cidade" value="rj" options='${CITIES}'></uai-autocomplete>
        <button id="submit">Enviar</button>
        <button id="reset" type="reset">Limpar</button>
      </form>`);
    await page.click('#submit');
    expect(await submissions(page)).toEqual([[['cidade', 'rj']]]);

    await page.$eval('uai-autocomplete', (el: any) => (el.value = 'sp'));
    await page.waitForChanges();
    await page.click('#reset');
    await page.waitForChanges();

    expect(await page.$eval('uai-autocomplete', (el: any) => el.value)).toBe('rj');
  });

  it('submits every checked value of a multiple choice under the same name', async () => {
    const page = await setup(`
      <form>
        <uai-autocomplete label="Cidades" name="cidades" selection-type="multiple" options='${CITIES}'></uai-autocomplete>
        <button id="submit">Enviar</button>
      </form>`);
    await page.click('uai-autocomplete >>> input');
    await page.waitForChanges();
    await clickOption(page, 'São Paulo');
    await clickOption(page, 'Belo Horizonte');
    expect(await isOpen(page)).toBe(true);

    // The open list floats over the button below the field: close it first, as a person does.
    await page.keyboard.press('Escape');
    await page.waitForChanges();
    await page.click('#submit');

    expect(await submissions(page)).toEqual([
      [
        ['cidades', 'sp'],
        ['cidades', 'bh'],
      ],
    ]);
  });

  it('blocks the submission while a required field has no choice', async () => {
    const page = await setup(`
      <form>
        <uai-autocomplete label="Cidade" name="cidade" required options='${CITIES}'></uai-autocomplete>
        <button id="submit">Enviar</button>
      </form>`);
    await page.click('#submit');
    await page.waitForChanges();

    expect(await submissions(page)).toEqual([]);
    expect(await page.find('uai-autocomplete')).toHaveClass('uai-autocomplete--danger');
  });
});
