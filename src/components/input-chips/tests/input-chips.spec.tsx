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
        <bds-input chips="" error-message="" helper-message="" icon="" input-name="" label="" placeholder="" value="">
          <span slot="inside-input-left"></span>
          <div slot="input-right"></div>
        </bds-input>
      </bds-input-chips>
    `);
  });

  it('renders with chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-input-chips chips='[\"chip1\", \"chip2\"]' icon="" value="">
        <bds-input chips="" error-message="" helper-message="" icon="" input-name="" label="" placeholder="" value="">
          <span slot="inside-input-left">
            <bds-chip class="input-chips__chip" deletable="" id="0" variant="primary">
              chip1
            </bds-chip>
            <bds-chip class="input-chips__chip" deletable="" id="1" variant="primary">
              chip2
            </bds-chip>
          </span>
          <div slot="input-right"></div>
        </bds-input>
      </bds-input-chips>
    `);
  });
});
