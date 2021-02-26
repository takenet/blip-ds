import { newSpecPage } from '@stencil/core/testing';
import { BdsModalButtons } from './modal-buttons';

describe('modal-buttons', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsModalButtons],
      html: `<bds-modal-buttons></bds-modal-buttons>`,
    });
  });

  it('should render the component', async () => {
    expect(page.root).toEqualHtml(`
      <bds-modal-buttons>
        <mock:shadow-root>
          <div class="modal__buttons">
              <slot />
          </div>
        </mock:shadow-root>
      </bds-modal-buttons>
    `);
  });

  it('should render the component with text on the body', async () => {
    page = await newSpecPage({
      components: [BdsModalButtons],
      html: `<bds-modal-buttons>Lorem ipsum</bds-modal-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-modal-buttons>
        <mock:shadow-root>
          <div class="modal__buttons">
            <slot />
          </div>
        </mock:shadow-root>
        Lorem ipsum
      </bds-modal-buttons>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector('.modal__buttons')).toBeTruthy();
    expect(page.root.querySelector('.modal__buttons')).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [BdsModalButtons],
      html: `<bds-modal-buttons></bds-modal-buttons>`,
      supportsShadowDom: false,
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.modal__buttons')).toBeTruthy();
  });
});
