import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('tooltip e2e tests', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-tooltip tooltip-text="Tooltip text test" position="top-center">
            <bds-button>Button text</bds-button>
        </bds-tooltip>
        `,
    });
  });

  it('should show the tooltip on hover', async () => {
    let tip = await page.find('bds-tooltip >>> .tooltip__tip');

    expect(tip).not.toHaveClass('tooltip__tip--visible');

    await page.hover('bds-tooltip');

    await page.waitForChanges();

    expect(tip).toHaveClass('tooltip__tip--visible');

    await page.hover('body');

    await page.waitForChanges();

    tip = await page.find('bds-tooltip >>> .tooltip__tip');

    expect(tip).not.toHaveClass('tooltip__tip--visible');
  });
});
