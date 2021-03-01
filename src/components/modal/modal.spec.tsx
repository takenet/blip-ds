import { newSpecPage } from '@stencil/core/testing';
import { BdsModal } from './modal';

describe('bds-modal', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsModal],
      html: `<bds-modal close-button="false"></bds-modal>`,
    });
  });

  it('should render', async () => {
    expect(page.root).toEqualHtml(`
      <bds-modal close-button="false">
        <mock:shadow-root>
        <div class="modal__dialog">
          <div class="modal">
            <slot />
          </div>
        </div>
        </mock:shadow-root>
      </bds-modal>
    `);
  });

  it('should render with close button', async () => {
    page = await newSpecPage({
      components: [BdsModal],
      html: `<bds-modal close-button="true"></bds-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-modal close-button>
        <mock:shadow-root>
        <div class="modal__dialog">
          <div class="modal">
            <bds-icon class="close-button" name="close" size="medium"></bds-icon>
            <slot />
          </div>
        </div>
        </mock:shadow-root>
      </bds-modal>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector('.modal__dialog')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.modal')).toBeTruthy();
    expect(page.root.querySelector('.modal__dialog')).toBeFalsy();
    expect(page.root.querySelector('.modal')).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [BdsModal],
      html: `<bds-modal></bds-modal>`,
      supportsShadowDom: false,
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.modal__dialog')).toBeTruthy();
    expect(page.root.querySelector('.modal')).toBeTruthy();
  });

  it('should open and close the dialog', async () => {
    const modal = new BdsModal();

    expect(modal.open).toBe(false);

    modal.toggle();

    expect(modal.open).toBe(true);

    modal.toggle();

    expect(modal.open).toBe(false);
  });
});
