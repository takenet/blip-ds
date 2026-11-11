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
    expect(page.root.shadowRoot.querySelector('.modal__dialog').classList.contains(`modal__dialog--${size}`)).toBe(true);
    expect(page.root.shadowRoot.querySelector('.modal').classList.contains(`modal--${size}`)).toBe(true);
    expect(page.root.shadowRoot.querySelector('.modal__body')).toBeTruthy();
  });

  it('falls back to the fixed size for unknown values', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal size="huge"></uai-modal>' });
    expect(page.root.shadowRoot.querySelector('.modal').classList.contains('modal--fixed')).toBe(true);
  });

  it('exposes the dialog semantics', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal label="Confirmar"></uai-modal>' });
    const modal = page.root.shadowRoot.querySelector('.modal');
    expect(modal.getAttribute('role')).toBe('dialog');
    expect(modal.getAttribute('aria-modal')).toBe('true');
    expect(modal.getAttribute('aria-label')).toBe('Confirmar');
  });

  it('renders the heading in the header and uses it as the dialog name', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal heading="Titulo"></uai-modal>' });
    const root = page.root.shadowRoot;
    const title = root.querySelector('.modal__header .modal__title');
    expect(title.textContent).toBe('Titulo');
    expect(title.getAttribute('variant')).toBe('title-md');
    expect(title.getAttribute('bold')).toBe('semibold');
    const modal = root.querySelector('.modal');
    expect(modal.getAttribute('aria-labelledby')).toBe('modal-title');
    expect(modal.getAttribute('aria-label')).toBeNull();
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

  it('renders the footer only when something is slotted into it', async () => {
    const without = await newSpecPage({ components: [UaiModal], html: '<uai-modal><p>Texto</p></uai-modal>' });
    expect(without.root.shadowRoot.querySelector('.modal__footer')).toBeNull();
    const withFooter = await newSpecPage({
      components: [UaiModal],
      html: '<uai-modal><p>Texto</p><div slot="footer">Cancelar Salvar</div></uai-modal>',
    });
    const footer = withFooter.root.shadowRoot.querySelector('.modal__footer');
    expect(footer).toBeTruthy();
    expect(footer.querySelector('slot[name="footer"]')).toBeTruthy();
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

  it.each(['Enter', 'Escape'])('closes on %s only while open and enterClose is true', async (key) => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    page.root.enterClose = false;
    document.dispatchEvent(new KeyboardEvent('keydown', { key }));
    await page.waitForChanges();
    expect(page.root.open).toBe(true);
    page.root.enterClose = true;
    document.dispatchEvent(new KeyboardEvent('keydown', { key }));
    await page.waitForChanges();
    expect(page.root.open).toBe(false);
  });

  it('does not react to the keyboard once closed', async () => {
    const page = await newSpecPage({ components: [UaiModal], html: '<uai-modal open="true"></uai-modal>' });
    page.root.open = false;
    await page.waitForChanges();
    const spy = jest.fn();
    page.root.addEventListener('uaiModalChanged', spy);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
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
