import { E2EPage, newE2EPage } from '@stencil/core/testing';

const HTML = `
  <uai-theme-provider theme="light">
    <div style="padding: 120px 200px">
      <uai-dropdown id="dd" label="Filtros">
        <button slot="activator" id="activator">Abrir</button>
        <h2 slot="header" id="title">Título</h2>
        <button id="item-1">Item 1</button>
        <button id="item-2">Item 2</button>
        <button slot="footer" id="save">Salvar</button>
      </uai-dropdown>
    </div>
    <button id="outside">Fora</button>
  </uai-theme-provider>`;

const create = async (html = HTML): Promise<E2EPage> => {
  const page = await newE2EPage({ html });
  await page.setViewport({ width: 1000, height: 800 });
  return page;
};

const isOpen = (page: E2EPage) => page.evaluate(() => (document.getElementById('dd') as any).open);

const panelRect = (page: E2EPage) =>
  page.evaluate(() => {
    const panel = document.getElementById('dd').shadowRoot.querySelector('.dropdown__panel');
    const box = panel.getBoundingClientRect();
    return { top: box.top, bottom: box.bottom, left: box.left, right: box.right, width: box.width };
  });

const activatorRect = (page: E2EPage) =>
  page.evaluate(() => {
    const box = document.getElementById('activator').getBoundingClientRect();
    return { top: box.top, bottom: box.bottom, left: box.left, right: box.right };
  });

const open = async (page: E2EPage) => {
  await page.click('#activator');
  await page.waitForChanges();
};

describe('uai-dropdown e2e', () => {
  describe('opening', () => {
    it('opens in the top layer when the activator is clicked and announces it', async () => {
      const page = await create();
      expect(await isOpen(page)).toBe(false);
      await open(page);

      expect(await isOpen(page)).toBe(true);
      expect(
        await page.evaluate(() =>
          document.getElementById('dd').shadowRoot.querySelector('.dropdown__panel').matches(':popover-open'),
        ),
      ).toBe(true);
      expect(await page.evaluate(() => document.getElementById('activator').getAttribute('aria-expanded'))).toBe(
        'true',
      );
    });

    it('is already open in the top layer when it starts open', async () => {
      const page = await create(
        `<uai-dropdown id="dd"><button slot="activator" id="activator">Abrir</button><p>Corpo</p></uai-dropdown>`.replace(
          '<uai-dropdown id="dd">',
          '<uai-dropdown id="dd" open>',
        ),
      );
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(true);
      expect(
        await page.evaluate(() =>
          document.getElementById('dd').shadowRoot.querySelector('.dropdown__panel').matches(':popover-open'),
        ),
      ).toBe(true);
      // Opening on load must not take the focus away from the page.
      expect(await page.evaluate(() => document.activeElement === document.body)).toBe(true);
    });

    it('keeps working after being moved in the DOM', async () => {
      const page = await create(`${HTML}<div id="target"></div>`);
      await page.evaluate(() => document.getElementById('target').appendChild(document.getElementById('dd')));
      await page.waitForChanges();
      await open(page);
      expect(await isOpen(page)).toBe(true);
      expect(
        await page.evaluate(() =>
          document.getElementById('dd').shadowRoot.querySelector('.dropdown__panel').matches(':popover-open'),
        ),
      ).toBe(true);
    });

    it('announces the popup on the native button of a uai-button activator', async () => {
      const page = await create(
        `<uai-dropdown id="dd" label="Filtros"><uai-button slot="activator" id="activator">Abrir</uai-button><p>Corpo</p></uai-dropdown>`,
      );
      const inner = () =>
        page.evaluate(() => {
          const button = document.getElementById('activator').shadowRoot.querySelector('button');
          return { haspopup: button.getAttribute('aria-haspopup'), expanded: button.getAttribute('aria-expanded') };
        });
      expect(await inner()).toEqual({ haspopup: 'dialog', expanded: 'false' });
      await page.click('#activator');
      await page.waitForChanges();
      expect(await inner()).toEqual({ haspopup: 'dialog', expanded: 'true' });
    });

    it('closes when the activator is clicked again', async () => {
      const page = await create();
      await open(page);
      await open(page);
      expect(await isOpen(page)).toBe(false);
      expect(await page.evaluate(() => document.getElementById('activator').getAttribute('aria-expanded'))).toBe(
        'false',
      );
    });

    it('emits uaiToggle with the new state', async () => {
      const page = await create();
      const toggled = await page.spyOnEvent('uaiToggle');
      await open(page);
      await open(page);
      expect(toggled).toHaveReceivedEventTimes(2);
      expect(toggled.events.map((event) => event.detail)).toEqual([{ value: true }, { value: false }]);
    });
  });

  describe('closing and focus', () => {
    it('moves the focus into the panel on open, so Tab starts inside it', async () => {
      const page = await create();
      await open(page);
      await page.keyboard.press('Tab');
      expect(await page.evaluate(() => document.activeElement.id)).toBe('item-1');
    });

    it('closes with Escape and gives the focus back to the activator', async () => {
      const page = await create();
      await open(page);
      await page.keyboard.press('Escape');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(false);
      expect(await page.evaluate(() => document.activeElement.id)).toBe('activator');
    });

    it('closes with a click outside', async () => {
      const page = await create();
      await open(page);
      await page.click('#outside');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(false);
    });

    it('stays open while the focus moves inside the panel', async () => {
      const page = await create();
      await open(page);
      await page.focus('#item-2');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(true);
    });

    it('closes when Tab takes the focus out of the dropdown', async () => {
      const page = await create();
      await open(page);
      await page.focus('#save');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(false);
    });

    it('can be closed from an action inside the panel', async () => {
      const page = await create();
      await open(page);
      await page.evaluate(() =>
        document
          .getElementById('save')
          .addEventListener('click', () => (document.getElementById('dd') as any).setClose()),
      );
      await page.click('#save');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(false);
    });
  });

  describe('structure', () => {
    const emptyAreas = (page: E2EPage) =>
      page.evaluate(() => {
        const root = document.getElementById('dd').shadowRoot;
        return {
          header: root.querySelector('.dropdown__header').classList.contains('dropdown__header--empty'),
          footer: root.querySelector('.dropdown__footer').classList.contains('dropdown__footer--empty'),
        };
      });

    it('hides the header and the footer when nothing is slotted into them', async () => {
      const page = await create(
        `<uai-dropdown id="dd"><button slot="activator" id="activator">Abrir</button><p>Corpo</p></uai-dropdown>`,
      );
      expect(await emptyAreas(page)).toEqual({ header: true, footer: true });
    });

    it('shows a footer added after the dropdown is open', async () => {
      const page = await create(
        `<uai-dropdown id="dd"><button slot="activator" id="activator">Abrir</button><p>Corpo</p></uai-dropdown>`,
      );
      await open(page);
      await page.evaluate(() => {
        const footer = document.createElement('button');
        footer.slot = 'footer';
        footer.textContent = 'Salvar';
        document.getElementById('dd').appendChild(footer);
      });
      await page.waitForChanges();
      expect(await emptyAreas(page)).toEqual({ header: true, footer: false });
    });

    it('scrolls only the body when the content is taller than the room, keeping header and footer in view', async () => {
      const page = await create(
        `<div style="padding: 20px"><uai-dropdown id="dd">
          <button slot="activator" id="activator">Abrir</button>
          <h2 slot="header" id="title">Título</h2>
          ${Array.from({ length: 60 }, (_, i) => `<button>Item ${i}</button>`).join('')}
          <button slot="footer" id="save">Salvar</button>
        </uai-dropdown></div>`,
      );
      await open(page);

      const result = await page.evaluate(() => {
        const root = document.getElementById('dd').shadowRoot;
        const rect = (selector: string) => root.querySelector(selector).getBoundingClientRect();
        const body = root.querySelector('.dropdown__body');
        return {
          scrolls: body.scrollHeight > body.clientHeight,
          panelBottom: rect('.dropdown__panel').bottom,
          headerTop: rect('.dropdown__header').top,
          footerBottom: rect('.dropdown__footer').bottom,
          viewport: window.innerHeight,
        };
      });
      expect(result.scrolls).toBe(true);
      expect(result.panelBottom).toBeLessThanOrEqual(result.viewport);
      expect(result.headerTop).toBeGreaterThanOrEqual(0);
      expect(result.footerBottom).toBeLessThanOrEqual(result.viewport);
    });
  });

  describe('position and width', () => {
    // The activator sits in the middle of the screen, with room for the panel on every side.
    const CENTERED = `
      <div style="padding: 360px 450px">
        <uai-dropdown id="dd" label="Filtros">
          <button slot="activator" id="activator">Abrir</button>
          <h2 slot="header">Título</h2>
          <button>Item 1</button>
          <button slot="footer">Salvar</button>
        </uai-dropdown>
      </div>`;

    it('aligns to the end of the activator with bottom-right, below it', async () => {
      const page = await create(CENTERED);
      await page.evaluate(() => ((document.getElementById('dd') as any).position = 'bottom-right'));
      await open(page);
      const [panel, activator] = [await panelRect(page), await activatorRect(page)];
      expect(panel.top).toBeGreaterThanOrEqual(activator.bottom);
      expect(Math.round(panel.right)).toBe(Math.round(activator.right));
    });

    it('opens above the activator with top-left, aligned to its start', async () => {
      const page = await create(CENTERED);
      await page.evaluate(() => ((document.getElementById('dd') as any).position = 'top-left'));
      await open(page);
      const [panel, activator] = [await panelRect(page), await activatorRect(page)];
      expect(panel.bottom).toBeLessThanOrEqual(activator.top);
      expect(Math.round(panel.left)).toBe(Math.round(activator.left));
    });

    it('is 21rem wide by default and follows the width prop', async () => {
      const page = await create();
      await open(page);
      const rem = await page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).fontSize));
      expect(Math.round((await panelRect(page)).width)).toBe(Math.round(21 * rem));

      await page.evaluate(() => ((document.getElementById('dd') as any).width = 24));
      await page.waitForChanges();
      expect(Math.round((await panelRect(page)).width)).toBe(Math.round(24 * rem));
    });
  });

  describe('motion', () => {
    it('turns the animation off with prefers-reduced-motion', async () => {
      const page = await create();
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.reload();
      await page.waitForChanges();
      const duration = await page.evaluate(() =>
        getComputedStyle(document.getElementById('dd').shadowRoot.querySelector('.dropdown__panel')).getPropertyValue(
          'transition-duration',
        ),
      );
      expect(duration).toBe('0s');
    });
  });
});
