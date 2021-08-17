import { newSpecPage } from '@stencil/core/testing';
import { TabBar } from '../tab-bar';

describe('tab-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabBar],
      html: `<tab-bar></tab-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <tab-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tab-bar>
    `);
  });
});
