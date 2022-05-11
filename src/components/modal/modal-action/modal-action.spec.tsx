import { newSpecPage } from '@stencil/core/testing';
import { BdsModalAction } from './modal-action';

describe('modal-action', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsModalAction],
      html: `<bds-modal-action></bds-modal-action>`,
    });
  });

  it('should render the component', async () => {
    expect(page.root).toEqualHtml(`
      <bds-modal-action>
        <mock:shadow-root>
          <div class="modal__action">
              <slot />
          </div>
        </mock:shadow-root>
      </bds-modal-action>
    `);
  });

  it('should render the component with text on the body', async () => {
    page = await newSpecPage({
      components: [BdsModalAction],
      html: `<bds-modal-action>Lorem ipsum</bds-modal-action>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-modal-action>
        <mock:shadow-root>
          <div class="modal__action">
            <slot />
          </div>
        </mock:shadow-root>
        Lorem ipsum
      </bds-modal-action>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector('.modal__action')).toBeTruthy();
    expect(page.root.querySelector('.modal__action')).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [BdsModalAction],
      html: `<bds-modal-action></bds-modal-action>`,
      supportsShadowDom: false,
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.modal__action')).toBeTruthy();
  });
});
