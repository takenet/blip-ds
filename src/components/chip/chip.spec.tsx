import { newSpecPage } from '@stencil/core/testing';
import { Chip } from './chip';

describe('bds-chip', () => {
  let page;

  const getWithText = async () => {
    return await newSpecPage({
      components: [Chip],
      html: `<bds-chip>Order by asc</bds-chip>`,
    });
  };

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
