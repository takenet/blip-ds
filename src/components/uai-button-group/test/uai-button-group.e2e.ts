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
    // Every item stays an outline button; the selected one is in its pressed (active) state.
    expect(await variants(page)).toEqual(['outline', 'outline', 'outline']);
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

  // Reads the group container and each button, after uai-button's background transition (duration/fast).
  const layout = async (page: E2EPage) => {
    await page.mouse.move(600, 600);
    await new Promise((resolve) => setTimeout(resolve, 400));
    return page.evaluate(() => {
      const probe = document.createElement('div');
      probe.style.border = '1px solid var(--uai-border-default)';
      probe.style.borderRadius = 'var(--uai-radius-lg)';
      document.querySelector('uai-theme-provider').appendChild(probe);
      const token = {
        border: getComputedStyle(probe).borderTopColor,
        radius: getComputedStyle(probe).borderTopLeftRadius,
      };
      probe.remove();
      const group = getComputedStyle(document.getElementById('group').shadowRoot.querySelector('.button-group'));
      const items = ['a', 'b', 'c'].map((id) => {
        const host = getComputedStyle(document.getElementById(id));
        const inner = getComputedStyle(document.getElementById(id).shadowRoot.querySelector('button'));
        return {
          radius: inner.borderTopLeftRadius,
          border: inner.borderTopColor,
          bg: inner.backgroundColor,
          dividerStart: `${host.borderLeftWidth} ${host.borderLeftColor}`,
          dividerTop: `${host.borderTopWidth} ${host.borderTopColor}`,
        };
      });
      return {
        token,
        group: { border: group.borderTopColor, radius: group.borderTopLeftRadius, overflow: group.overflow },
        items,
      };
    });
  };

  it('draws the UAI Core group: one rounded border, clipped corners and a divider between the buttons', async () => {
    const page = await create();
    const { token, group, items } = await layout(page);

    expect(group).toEqual({ border: token.border, radius: token.radius, overflow: 'hidden' });
    for (const item of items) {
      expect(item.radius).toBe('0px');
      expect(item.border).toBe('rgba(0, 0, 0, 0)');
    }
    expect(items[0].dividerStart.startsWith('0px')).toBe(true);
    expect(items[1].dividerStart).toBe(`1px ${token.border}`);
    expect(items[2].dividerStart).toBe(`1px ${token.border}`);
  });

  it('draws the dividers on top of the buttons in a column', async () => {
    const page = await create();
    await page.evaluate(() => ((document.getElementById('group') as any).direction = 'column'));
    await page.waitForChanges();
    const { token, items } = await layout(page);

    expect(items[0].dividerTop.startsWith('0px')).toBe(true);
    expect(items[1].dividerTop).toBe(`1px ${token.border}`);
    expect(items[1].dividerStart.startsWith('0px')).toBe(true);
    for (const item of items) expect(item.radius).toBe('0px');
  });

  it('shows the selected button pressed, as an active outline uai-button', async () => {
    const page = await create(`${HTML}<uai-button id="reference" variant="outline">Referência</uai-button>`);
    await page.evaluate(() => (document.getElementById('reference') as any).isActive(true));
    await page.click('#b');
    await page.waitForChanges();
    const { items } = await layout(page);
    const reference = await page.evaluate(
      () => getComputedStyle(document.getElementById('reference').shadowRoot.querySelector('button')).backgroundColor,
    );

    expect(items[1].bg).toBe(reference);
    expect(items[0].bg).not.toBe(reference);
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
    expect(
      await page.evaluate(() =>
        document.getElementById('d').shadowRoot.querySelector('button').getAttribute('aria-pressed'),
      ),
    ).toBe('true');
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
