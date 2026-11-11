import { E2EPage, newE2EPage } from '@stencil/core/testing';

const HTML = `
  <uai-theme-provider theme="light">
    <button id="opener">Abrir</button>
    <uai-modal id="modal" heading="Título">
      <p>Texto</p>
      <button slot="footer" id="cancel">Cancelar</button>
      <button slot="footer" id="save">Salvar</button>
    </uai-modal>
  </uai-theme-provider>`;

const create = async (html = HTML): Promise<E2EPage> => {
  const page = await newE2EPage({ html });
  await page.evaluate(() => {
    const opener = document.getElementById('opener');
    if (opener) opener.addEventListener('click', () => (document.getElementById('modal') as any).toggle());
  });
  return page;
};

const isOpen = (page: E2EPage, id = 'modal') =>
  page.evaluate((modalId) => (document.getElementById(modalId) as any).open, id);

const focusInside = (page: E2EPage, id = 'modal') =>
  page.evaluate((modalId) => {
    const host = document.getElementById(modalId);
    return host === document.activeElement || host.contains(document.activeElement);
  }, id);

const dialogStyle = (page: E2EPage, property: string) =>
  page.evaluate((prop: string) => {
    const dialog = document.getElementById('modal').shadowRoot.querySelector('dialog');
    return getComputedStyle(dialog).getPropertyValue(prop);
  }, property);

describe('uai-modal e2e', () => {
  describe('focus', () => {
    it('opens as a modal dialog and moves the focus into it', async () => {
      const page = await create();
      await page.click('#opener');
      await page.waitForChanges();

      expect(await isOpen(page)).toBe(true);
      expect(
        await page.evaluate(() =>
          document.getElementById('modal').shadowRoot.querySelector('dialog').matches(':modal'),
        ),
      ).toBe(true);
      expect(await focusInside(page)).toBe(true);
    });

    it('keeps Tab and Shift+Tab inside the modal', async () => {
      const page = await create();
      await page.click('#opener');
      await page.waitForChanges();

      for (let i = 0; i < 6; i++) {
        await page.keyboard.press('Tab');
        expect(await focusInside(page)).toBe(true);
      }
      await page.keyboard.down('Shift');
      for (let i = 0; i < 6; i++) {
        await page.keyboard.press('Tab');
        expect(await focusInside(page)).toBe(true);
      }
      await page.keyboard.up('Shift');
    });

    it('makes the page behind inert', async () => {
      const page = await create();
      await page.click('#opener');
      await page.waitForChanges();

      expect(await page.evaluate(() => document.getElementById('opener').matches(':inert'))).toBe(true);
    });

    it('gives the focus back to the element that opened it', async () => {
      const page = await create();
      await page.focus('#opener');
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(true);

      await page.keyboard.press('Escape');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(false);
      expect(await page.evaluate(() => document.activeElement.id)).toBe('opener');
    });
  });

  describe('keyboard', () => {
    it('closes with Escape, also when enterClose is false', async () => {
      const page = await create();
      await page.evaluate(() => ((document.getElementById('modal') as any).enterClose = false));
      await page.click('#opener');
      await page.waitForChanges();

      await page.keyboard.press('Escape');
      await page.waitForChanges();
      expect(await isOpen(page)).toBe(false);
    });

    it('does not close or reopen when Enter activates a button', async () => {
      const page = await create();
      await page.click('#opener');
      await page.waitForChanges();
      const changed = await page.spyOnEvent('uaiModalChanged');

      await page.focus('#cancel');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await isOpen(page)).toBe(true);
      expect(changed).toHaveReceivedEventTimes(0);
    });

    it('closes only the top modal when two are stacked', async () => {
      const page = await create(
        `<uai-modal id="modal" open heading="Abaixo"><p>Abaixo</p></uai-modal>
         <uai-modal id="top" open heading="Topo"><p>Topo</p></uai-modal>`,
      );
      await page.waitForChanges();

      await page.keyboard.press('Escape');
      await page.waitForChanges();
      expect(await isOpen(page, 'top')).toBe(false);
      expect(await isOpen(page, 'modal')).toBe(true);
    });
  });

  describe('page scroll', () => {
    it('locks the document scroll while open and restores it on close', async () => {
      const page = await create();
      const overflow = () => page.evaluate(() => document.body.style.getPropertyValue('overflow'));
      await page.click('#opener');
      await page.waitForChanges();
      expect(await overflow()).toBe('hidden');

      await page.keyboard.press('Escape');
      await page.waitForChanges();
      expect(await overflow()).not.toBe('hidden');
    });
  });

  describe('backdrop', () => {
    it('stays pinned to the viewport while a dynamic modal scrolls', async () => {
      const page = await create(
        '<uai-modal id="modal" open size="dynamic" heading="Título"><div style="height: 3000px">Conteúdo longo</div></uai-modal>',
      );
      await page.waitForChanges();

      const rect = await page.evaluate(() => {
        const dialog = document.getElementById('modal').shadowRoot.querySelector('dialog');
        dialog.scrollTop = 500;
        const box = dialog.querySelector('.outzone').getBoundingClientRect();
        return { top: box.top, height: box.height, viewport: window.innerHeight };
      });
      expect(rect.top).toBe(0);
      expect(rect.height).toBe(rect.viewport);
    });
  });

  describe('footer', () => {
    it('shows a footer added after the modal is open', async () => {
      const page = await create(`<uai-modal id="modal" open heading="Título"><p>Texto</p></uai-modal>`);
      const footerHidden = () =>
        page.evaluate(() =>
          document
            .getElementById('modal')
            .shadowRoot.querySelector('.modal__footer')
            .classList.contains('modal__footer--empty'),
        );
      expect(await footerHidden()).toBe(true);

      await page.evaluate(() => {
        const actions = document.createElement('button');
        actions.slot = 'footer';
        actions.textContent = 'Salvar';
        document.getElementById('modal').appendChild(actions);
      });
      await page.waitForChanges();
      expect(await footerHidden()).toBe(false);
    });
  });

  describe('motion', () => {
    it('animates the dialog with duration/moderate by default', async () => {
      const page = await create();
      expect(await dialogStyle(page, 'transition-duration')).toContain('0.2s');
    });

    it('turns the animation off with prefers-reduced-motion', async () => {
      const page = await create();
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.reload();
      await page.waitForChanges();
      expect(await dialogStyle(page, 'transition-duration')).toBe('0s');
    });
  });
});
