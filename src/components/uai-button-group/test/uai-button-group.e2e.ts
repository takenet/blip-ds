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

  it('draws the neutral UAI Core group: page surface, border/default and a single line between items', async () => {
    const page = await create();
    // The group sets the buttons after they load, and uai-button animates the background (duration/fast).
    await new Promise((resolve) => setTimeout(resolve, 400));
    const styles = await page.evaluate(() => {
      // The token values the theme provider applies, resolved by the browser.
      const probe = document.createElement('div');
      probe.style.background = 'var(--uai-surface-background)';
      probe.style.border = '1px solid var(--uai-border-default)';
      document.querySelector('uai-theme-provider').appendChild(probe);
      const tokens = { bg: getComputedStyle(probe).backgroundColor, border: getComputedStyle(probe).borderTopColor };
      probe.remove();
      const buttons = ['a', 'b'].map((id) => {
        const style = getComputedStyle(document.getElementById(id).shadowRoot.querySelector('button'));
        const box = document.getElementById(id).getBoundingClientRect();
        return { bg: style.backgroundColor, border: style.borderTopColor, left: box.left, right: box.right };
      });
      return { tokens, buttons };
    });
    expect(styles.buttons[0].bg).toBe(styles.tokens.bg);
    expect(styles.buttons[0].border).toBe(styles.tokens.border);
    // The second button starts one border width before the end of the first, so their borders overlap.
    expect(Math.round(styles.buttons[0].right - styles.buttons[1].left)).toBe(1);
  });

  it('draws the selected button as a regular uai-button that is on (solid primary, active)', async () => {
    const page = await create(`${HTML}<uai-button id="reference">Referência</uai-button>`);
    // A toggled-on uai-button uses its own active state, the pressed tone of its color.
    await page.evaluate(() => (document.getElementById('reference') as any).isActive(true));
    await page.click('#b');
    await page.waitForChanges();
    // Move the pointer away so the button shows its rest state, not the hover; uai-button animates the background.
    await page.mouse.move(600, 600);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const colors = await page.evaluate(() =>
      ['b', 'reference'].map((id) => {
        const style = getComputedStyle(document.getElementById(id).shadowRoot.querySelector('button'));
        return { bg: style.backgroundColor, fg: style.color };
      }),
    );
    expect(colors[0]).toEqual(colors[1]);
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
