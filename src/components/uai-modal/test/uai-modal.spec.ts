import { newSpecPage } from '@stencil/core/testing';
import { UaiModal } from '../uai-modal';

describe('uai-modal', () => {
  it('preserves the legacy defaults', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal></uai-modal>' });
    const modal = page.rootInstance;
    expect(modal.open).toBe(false);
    expect(modal.closeButton).toBe(true);
    expect(modal.size).toBe('fixed');
    expect(modal.outzoneClose).toBe(true);
    expect(modal.enterClose).toBe(true);
    expect(modal.dtOutzone).toBe(null);
    expect(modal.dtButtonClose).toBe(null);
  });

  it('reflects the open state in the dialog class', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal></uai-modal>' });
    const dialog = page.root.shadowRoot.querySelector('.modal__dialog');
    expect(dialog.classList.contains('modal__dialog--open')).toBe(false);
    page.root.open = true;
    await page.waitForChanges();
    expect(dialog.classList.contains('modal__dialog--open')).toBe(true);
  });

  it.each(['fixed', 'dynamic'])('applies the %s size classes', async (size) => {
    const page = await newSpecPage({ components: [UaiModal], html: `<uai-modal size="${size}"></uai-modal>` });
    expect(page.root.shadowRoot.querySelector('.modal__dialog').classList.contains(`modal__dialog--${size}`)).toBe(
      true,
    );
    expect(page.root.shadowRoot.querySelector('.modal').classList.contains(`modal--${size}`)).toBe(true);
    expect(page.root.shadowRoot.querySelector('.modal__body')).toBeTruthy();
  });

  it('falls back to the fixed size for unknown values', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal size="huge"></uai-modal>' });
    expect(page.root.shadowRoot.querySelector('.modal').classList.contains('modal--fixed')).toBe(true);
  });

  it('exposes the dialog semantics', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal label="Confirmar"></uai-modal>' });
    const dialog = page.root.shadowRoot.querySelector('dialog.modal__dialog');
    expect(dialog).toBeTruthy();
    expect(dialog.getAttribute('aria-label')).toBe('Confirmar');
    expect(page.root.shadowRoot.querySelector('[role="dialog"]')).toBeNull();
  });

  it('renders the heading in the header and uses it as the dialog name', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal heading="Titulo"></uai-modal>' });
    const root = page.root.shadowRoot;
    const title = root.querySelector('.modal__header .modal__title');
    expect(title.textContent).toBe('Titulo');
    expect(title.getAttribute('variant')).toBe('title-md');
    expect(title.getAttribute('bold')).toBe('semibold');
    const dialog = root.querySelector('dialog.modal__dialog');
    expect(dialog.getAttribute('aria-labelledby')).toBe('modal-title');
    expect(dialog.getAttribute('aria-label')).toBeNull();
  });

  it('omits the header without heading and close button', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal></uai-modal>' });
    page.root.closeButton = false;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.modal__header')).toBeNull();
  });

  it('keeps the close button in the header', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal heading="Titulo"></uai-modal>' });
    expect(page.root.shadowRoot.querySelector('.modal__header .modal__close')).toBeTruthy();
  });

  it('keeps the footer hidden until something is slotted into it', async () => {
    const without = await newSpecPage({ components: [UaiModal], html: '<uai-modal><p>Texto</p></uai-modal>' });
    const emptyFooter = without.root.shadowRoot.querySelector('.modal__footer');
    expect(emptyFooter.classList.contains('modal__footer--empty')).toBe(true);
    expect(emptyFooter.querySelector('slot[name="footer"]')).toBeTruthy();

    const withFooter = await newSpecPage({
      components: [UaiModal],
      html: '<uai-modal><p>Texto</p><div slot="footer">Cancelar Salvar</div></uai-modal>',
    });
    expect(withFooter.root.shadowRoot.querySelector('.modal__footer').classList.contains('modal__footer--empty')).toBe(
      false,
    );
  });

  it('shows and hides the footer when its content changes after the render', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"><p>Texto</p></uai-modal>' });
    const footer = () => page.root.shadowRoot.querySelector('.modal__footer');
    const slot = page.root.shadowRoot.querySelector('slot[name="footer"]') as any;
    expect(footer().classList.contains('modal__footer--empty')).toBe(true);

    const actions = page.doc.createElement('div');
    actions.setAttribute('slot', 'footer');
    page.root.appendChild(actions);
    slot.assignedElements = () => [actions];
    slot.dispatchEvent(new Event('slotchange'));
    await page.waitForChanges();
    expect(footer().classList.contains('modal__footer--empty')).toBe(false);

    actions.remove();
    slot.assignedElements = () => [];
    slot.dispatchEvent(new Event('slotchange'));
    await page.waitForChanges();
    expect(footer().classList.contains('modal__footer--empty')).toBe(true);
  });

  it('renders an accessible close button that closes and emits', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    const spy = jest.fn();
    page.root.addEventListener('uaiModalChanged', spy);
    const button = page.root.shadowRoot.querySelector('button.modal__close') as HTMLElement;
    expect(button.getAttribute('aria-label')).toBe('Fechar');
    button.click();
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
    expect(spy.mock.calls[0][0].detail).toEqual({ modalStatus: 'closed' });
  });

  it('hides the close button when closeButton is false', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal close-button="false"></uai-modal>' });
    page.root.closeButton = false;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.modal__close')).toBeNull();
  });

  it('forwards the test selectors', async () => {
    const page = await newSpecPage({
      components: [UaiModal],
      html: '<uai-modal dt-outzone="out" dt-button-close="btn"></uai-modal>',
    });
    expect(page.root.shadowRoot.querySelector('.outzone').getAttribute('data-test')).toBe('out');
    expect(page.root.shadowRoot.querySelector('.modal__close').getAttribute('data-test')).toBe('btn');
  });

  it('closes on backdrop click only when outzoneClose is true', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    page.root.outzoneClose = false;
    (page.root.shadowRoot.querySelector('.outzone') as HTMLElement).click();
    await page.waitForChanges();
    expect(page.root.open).toBe(true);
    page.root.outzoneClose = true;
    (page.root.shadowRoot.querySelector('.outzone') as HTMLElement).click();
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
  });

  it('toggle() flips the state and emits uaiModalChanged', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal></uai-modal>' });
    const spy = jest.fn();
    page.root.addEventListener('uaiModalChanged', spy);
    await page.root.toggle();
    expect(page.root.open).toBe(true);
    await page.root.toggle();
    expect(page.root.open).toBe(false);
    expect(spy.mock.calls.map((call) => call[0].detail.modalStatus)).toEqual(['opened', 'closed']);
  });

  it('closes on Enter when no control has the focus, only while enterClose is true', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    page.root.enterClose = false;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();
    expect(page.root.open).toBe(true);
    page.root.enterClose = true;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
  });

  it.each(['button', 'a', 'input', 'textarea', 'select'])('does not close on Enter pressed on a %s', async (tag) => {
    const page = await newSpecPage({
      components: [UaiModal],
      html: `<uai-modal open="true"><${tag} id="control"></${tag}></uai-modal>`,
    });
    page.body.querySelector('#control').dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await page.waitForChanges();
    expect(page.root.open).toBe(true);
  });

  it('does not close on Enter pressed on an element with an interactive role', async () => {
    const page = await newSpecPage({
      components: [UaiModal],
      html: '<uai-modal open="true"><div id="control" role="button"></div></uai-modal>',
    });
    page.body.querySelector('#control').dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await page.waitForChanges();
    expect(page.root.open).toBe(true);
  });

  it('does not reopen through toggle() after a keyboard activation of a button', async () => {
    const page = await newSpecPage({
      components: [UaiModal],
      html: '<uai-modal open="true"><button id="ok">Ok</button></uai-modal>',
    });
    const ok = page.body.querySelector('#ok') as HTMLElement;
    ok.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    ok.addEventListener('click', () => page.root.toggle());
    ok.click();
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
  });

  it('closes on the native cancel event (Escape) only while escapeClose is true', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    const dialog = page.root.shadowRoot.querySelector('dialog');
    page.root.escapeClose = false;
    const blocked = new Event('cancel', { cancelable: true });
    dialog.dispatchEvent(blocked);
    await page.waitForChanges();
    expect(blocked.defaultPrevented).toBe(true);
    expect(page.root.open).toBe(true);
    page.root.escapeClose = true;
    dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
  });

  it('syncs open when the browser closes the dialog on its own', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    const spy = jest.fn();
    page.root.addEventListener('uaiModalChanged', spy);
    page.root.shadowRoot.querySelector('dialog').dispatchEvent(new Event('close'));
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
    expect(spy.mock.calls[0][0].detail).toEqual({ modalStatus: 'closed' });

    // A close that follows our own close() must not emit a second event.
    page.root.shadowRoot.querySelector('dialog').dispatchEvent(new Event('close'));
    await page.waitForChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('keeps Escape working when enterClose is false, as in forms', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    page.root.enterClose = false;
    page.root.shadowRoot.querySelector('dialog').dispatchEvent(new Event('cancel', { cancelable: true }));
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
  });

  it('ignores Enter that was already handled (defaultPrevented)', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    const handled = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
    handled.preventDefault();
    document.dispatchEvent(handled);
    await page.waitForChanges();
    expect(page.root.open).toBe(true);
  });

  it('warns about an invalid size once, not on every render', async () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal size="giant"></uai-modal>' });
    page.root.heading = 'A';
    await page.waitForChanges();
    page.root.heading = 'B';
    await page.waitForChanges();
    expect(warn.mock.calls.filter((call) => String(call[0]).includes('uai-modal')).length).toBe(1);
    warn.mockRestore();
  });

  it('opens and closes the native dialog in modal mode when showModal is available', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal></uai-modal>' });
    const dialog = page.root.shadowRoot.querySelector('dialog') as any;
    dialog.open = false;
    dialog.showModal = jest.fn(() => (dialog.open = true));
    dialog.close = jest.fn(() => (dialog.open = false));
    page.root.open = true;
    await page.waitForChanges();
    expect(dialog.showModal).toHaveBeenCalledTimes(1);
    page.root.open = false;
    await page.waitForChanges();
    expect(dialog.close).toHaveBeenCalledTimes(1);
  });

  it('does not react to the keyboard once closed', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    page.root.open = false;
    await page.waitForChanges();
    const spy = jest.fn();
    page.root.addEventListener('uaiModalChanged', spy);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();
    expect(spy).not.toHaveBeenCalled();
  });

  it('applies the width prop in rem and ignores invalid values', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal width="30"></uai-modal>' });
    const modal = () => page.root.shadowRoot.querySelector('.modal') as HTMLElement;
    expect(modal().style.getPropertyValue('--modal-width')).toBe('30rem');
    for (const invalid of [0, -5, NaN]) {
      page.root.width = invalid as number;
      await page.waitForChanges();
      expect(modal().style.getPropertyValue('--modal-width')).toBe('');
    }
  });
});
