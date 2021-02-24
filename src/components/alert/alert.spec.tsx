import { newSpecPage } from '@stencil/core/testing';
import { BdsAlert } from './alert';

describe('bds-alert', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert></bds-alert>`,
    });
  });

  it('should render', async () => {
    expect(page.root).toEqualHtml(`
      <bds-alert>
        <mock:shadow-root>
        <div class="alert__dialog">
          <div class="alert alert-standard">
            <slot />
          </div>
        </div>
        </mock:shadow-root>
      </bds-alert>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector('.alert__dialog')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.alert')).toBeTruthy();
    expect(page.root.querySelector('.alert__dialog')).toBeFalsy();
    expect(page.root.querySelector('.alert')).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert></bds-alert>`,
      supportsShadowDom: false,
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.alert__dialog')).toBeTruthy();
    expect(page.root.querySelector('.alert')).toBeTruthy();
  });

  it('should open and close the dialog', async () => {
    const alert = new BdsAlert();

    expect(alert.open).toBe(false);

    alert.toggle();

    expect(alert.open).toBe(true);

    alert.toggle();

    expect(alert.open).toBe(false);
  });
});
