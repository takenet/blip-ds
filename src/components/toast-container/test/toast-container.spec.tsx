import { newSpecPage } from '@stencil/core/testing';
import { ToastContainer } from '../toast-container';

describe('toast-container', () => {
  it.skip('renders', async () => {
    const page = await newSpecPage({
      components: [ToastContainer],
      html: `<toast-container></toast-container>`,
    });
    expect(page.root).toEqualHtml(`
      <toast-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </toast-container>
    `);
  });
});
