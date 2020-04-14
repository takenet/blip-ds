import { newSpecPage } from '@stencil/core/testing';
import { AlertActions } from './alert-actions';

describe('alert-actions', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [AlertActions],
      html: `<bds-alert-actions></bds-alert-actions>`,
    });
  });

  it('should render the component', async () => {
    expect(page.root).toEqualHtml(`
      <bds-alert-actions>
        <mock:shadow-root>
          <div class="alert__actions">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bds-alert-actions>
    `);
  })

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector(".alert__actions")).toBeTruthy();
    expect(page.root.querySelector(".alert__actions")).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [AlertActions],
      html: `<bds-alert-actions></bds-alert-actions>`,
      supportsShadowDom: false
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector(".alert__actions")).toBeTruthy();
  });
});
