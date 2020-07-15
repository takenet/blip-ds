import { newSpecPage } from '@stencil/core/testing';
import { InputChips } from '../input-chips';

describe('bds-input-chips', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips></bds-input-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-input-chips>
        <mock:shadow-root>
            <bds-input chips="" error-message="" is-submit="" label="" value="">
            <span slot="input-left"></span>
          </bds-input>
        </mock:shadow-root>
      </bds-input-chips>
    `);
  });
});
