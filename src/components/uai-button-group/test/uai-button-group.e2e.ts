import { E2EPage, newE2EPage } from '@stencil/core/testing';

const HTML = `
  <uai-theme-provider theme="light">
    <uai-button-group id="group" label="Alinhamento">
      <uai-button id="a" aria-label="Esquerda" icon-left="align-left"></uai-button>
      <uai-button id="b" aria-label="Centro" icon-left="align-center"></uai-button>
      <uai-button id="c" aria-label="Direita" icon-left="align-right"></uai-button>
    </uai-button-group>
  </uai-theme-provider>`;

const create = async (html = HTML): Promise<E2EPage> => {
  const page = await newE2EPage({ html });
  await page.waitForChanges();
  return page;
};

const pressed = (page: E2EPage) =>
  page.evaluate(() =>
    ['a', 'b', 'c'].map((id) =>
      document.getElementById(id).shadowRoot.querySelector('button').getAttribute('aria-pressed'),
    ),
  );

const variants = (page: E2EPage) =>
  page.evaluate(() => ['a', 'b', 'c'].map((id) => (document.getElementById(id) as any).variant));

describe('uai-button-group e2e', () => {
  it('selects the clicked button and exposes aria-pressed on the native buttons', async () => {
    const page = await create();
    expect(await pressed(page)).toEqual(['false', 'false', 'false']);

    await page.click('#b');
    await page.waitForChanges();
    expect(await pressed(page)).toEqual(['false', 'true', 'false']);
    expect(await variants(page)).toEqual(['outline', 'solid', 'outline']);
  });

  it('toggles with the keyboard', async () => {
    const page = await create();
    await page.evaluate(() => (document.getElementById('c') as any).setFocus());
    await page.keyboard.press('Space');
    await page.waitForChanges();
    expect(await pressed(page)).toEqual(['false', 'false', 'true']);
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await pressed(page)).toEqual(['false', 'false', 'false']);
  });

  it('emits uaiButtonSelected once per click, even after the props change', async () => {
    const page = await create();
    const selected = await page.spyOnEvent('uaiButtonSelected');
    await page.evaluate(() => {
      const group = document.getElementById('group') as any;
      group.size = 'large';
      group.color = 'content';
    });
    await page.waitForChanges();
    await page.click('#a');
    await page.waitForChanges();
    expect(selected).toHaveReceivedEventTimes(1);
    expect(selected.firstEvent.detail).toEqual({ id: 'a', index: 0, active: true, selected: [0] });
  });

  it('keeps several buttons selected with multiple', async () => {
    const page = await create();
    await page.evaluate(() => ((document.getElementById('group') as any).multiple = true));
    await page.waitForChanges();
    await page.click('#a');
    await page.click('#c');
    await page.waitForChanges();
    expect(await pressed(page)).toEqual(['true', 'false', 'true']);
  });

  it('joins the buttons in a row and in a column', async () => {
    const page = await create();
    const radii = () =>
      page.evaluate(() =>
        ['a', 'b', 'c'].map((id) => {
          const style = getComputedStyle(document.getElementById(id).shadowRoot.querySelector('button'));
          return [style.borderTopLeftRadius, style.borderTopRightRadius, style.borderBottomLeftRadius];
        }),
      );
    let [first, middle, last] = await radii();
    expect(first[1]).toBe('0px');
    expect(middle).toEqual(['0px', '0px', '0px']);
    expect(last[0]).toBe('0px');
    expect(first[0]).not.toBe('0px');

    await page.evaluate(() => ((document.getElementById('group') as any).direction = 'column'));
    await page.waitForChanges();
    [first, middle, last] = await radii();
    expect(first[2]).toBe('0px');
    expect(last[0]).toBe('0px');
    expect(first[0]).not.toBe('0px');
  });

  it('sets up a button added after the render', async () => {
    const page = await create();
    await page.evaluate(() => {
      const button = document.createElement('uai-button');
      button.id = 'd';
      button.setAttribute('aria-label', 'Justificar');
      document.getElementById('group').appendChild(button);
    });
    await page.waitForChanges();
    await page.click('#d');
    await page.waitForChanges();
    expect(await page.evaluate(() => (document.getElementById('d') as any).variant)).toBe('solid');
    expect(
      await page.evaluate(() =>
        document
          .getElementById('c')
          .shadowRoot.querySelector('button')
          .classList.contains('button--position-row-middle'),
      ),
    ).toBe(true);
  });
});
