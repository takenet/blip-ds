import { newSpecPage } from '@stencil/core/testing';
import { InputChips } from '../input-chips';

describe('bds-input-chips', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips></bds-input-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-input-chips icon="" value="">
        <bds-input chips="" error-message="" icon="" is-submit="" label="" value="">
          <span slot="input-left"></span>
          <div slot="input-right"></div>
        </bds-input>
      </bds-input-chips>
    `);
  });
});
