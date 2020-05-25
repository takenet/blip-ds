import { newSpecPage } from '@stencil/core/testing';
import { Chip } from '../chip';

describe('bds-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<bds-chip></bds-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-chip>
    `);
  });
});
