import { newSpecPage } from '@stencil/core/testing';
import { Chip } from './chip';

describe('bds-chip', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Chip],
      html: `<bds-chip></bds-chip>`,
    });
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <bds-chip class="chip chip--default chip--standard">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-chip>                                                                                                                                     
    `);
  });
});
