import { newSpecPage } from '@stencil/core/testing';
import { Warning } from './warning';

describe('bds-warning', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning></bds-warning>`,
    });
  });

  it('should render', async () => {
    expect(page.root).toEqualHtml(`
      <bds-warning>
        <mock:shadow-root>
          <div class="warning__body">
              <bds-icon class="warning__icon" name="warning" size="small" theme="solid"></bds-icon>
              <bds-typo variant="fs-14" tag="span" class="warning__message">
                <slot></slot>
            </bds-typo>
          </div>
        </mock:shadow-root>
      </bds-warning>
    `);
  });

  it('should render with shadow dom', async () => {
    expect(page.root.shadowRoot.querySelector('.warning__body')).toBeTruthy();
    expect(page.root.querySelector('.warning__body')).toBeFalsy();
  });

  it('should render without shadow dom', async () => {
    page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning></bds-warning>`,
      supportsShadowDom: false,
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.warning__body')).toBeTruthy();
  });
});
