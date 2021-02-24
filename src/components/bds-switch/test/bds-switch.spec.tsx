import { newSpecPage } from '@stencil/core/testing';
import { BdsSwitch } from '../bds-switch';

describe('bds-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BdsSwitch],
      html: `<bds-switch></bds-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-switch>
    `);
  });
});
