import { newSpecPage } from '@stencil/core/testing';
import { AlertBody } from './alert-body';

describe('alert-body', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [AlertBody],
      html: `<bds-alert-body></bds-alert-body>`,
    });
  });

  it('should render the component', async () => {
    expect(page.root).toEqualHtml(`
      <bds-alert-body>
        <mock:shadow-root>
          <div class="alert__body">
            <bds-typo variant="fs-14" bold="regular" slot="body">
              <slot />
            </bds-typo>
          </div>
        </mock:shadow-root>
      </bds-alert-body>
    `);
  });

  it('should render the component with text on the body', async () => {
    page = await newSpecPage({
      components: [AlertBody],
      html: `<bds-alert-body>Lorem ipsum</bds-alert-body>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-alert-body>
        <mock:shadow-root>
          <div class="alert__body">
            <bds-typo variant="fs-14" bold="regular" slot="body">
              <slot />
            </bds-typo>
          </div>
        </mock:shadow-root>
      Lorem ipsum
      </bds-alert-body>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector(".alert__body")).toBeTruthy();
    expect(page.root.querySelector(".alert__body")).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [AlertBody],
      html: `<bds-alert-body></bds-alert-body>`,
      supportsShadowDom: false
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector(".alert__body")).toBeTruthy();
  });
});
