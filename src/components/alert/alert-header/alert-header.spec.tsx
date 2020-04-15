import { newSpecPage } from '@stencil/core/testing';
import { AlertHeader } from './alert-header';

describe('alert-header', () => {
  const variantMock = 'warning';
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [AlertHeader],
      html: `<bds-alert-header></bds-alert-header>`,
    });
  });

  it('should render the component', async () => {
    expect(page.root).toEqualHtml(`
      <bds-alert-header>
        <mock:shadow-root>
          <div class="alert__header alert__header--system">
            <bds-typo bold="bold" variant="fs-16">
              <slot />
            </bds-typo>
          </div>
        </mock:shadow-root>
      </bds-alert-header>
    `);
  });

  it('should render the with an icon and text', async () => {
    page = await newSpecPage({
      components: [AlertHeader],
      html: `<bds-alert-header icon="user">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</bds-alert-header>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-alert-header icon="user">
        <mock:shadow-root>
          <div class="alert__header alert__header--system">
            <bds-icon theme="outline" size="x-large" color="#fff" name="user"></bds-icon>
              <bds-typo bold="bold" variant="fs-16">
                <slot>
                </slot>
              </bds-typo>
          </div>
        </mock:shadow-root>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </bds-alert-header>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector(".alert__header")).toBeTruthy();
    expect(page.root.querySelector(".alert__header")).toBeFalsy();
  });

  it('should render with warning variant', async () => {
    const page = await newSpecPage({
      html: `<bds-alert-header variant=${variantMock}></bds-alert-header>`,
      components: [AlertHeader]
    });

      expect(page.root).toEqualHtml(`
      <bds-alert-header variant="warning">
        <mock:shadow-root>
          <div class="alert__header alert__header--warning">
            <bds-typo bold="bold" variant="fs-16">
              <slot />
            </bds-typo>
          </div>
        </mock:shadow-root>
      </bds-alert-header>
    `);
  });
});
