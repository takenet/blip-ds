import { newSpecPage } from '@stencil/core/testing';
import { BdsToast } from '../toast';

describe('bds-toast', () => {
  it.skip('renders', async () => {
    const page = await newSpecPage({
      components: [BdsToast],
      html: `<bds-toast></bds-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-toast>
    `);
  });
});
