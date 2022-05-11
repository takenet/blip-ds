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
});
