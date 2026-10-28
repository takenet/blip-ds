import { newE2EPage } from '@stencil/core/testing';

describe('uai-grid layout', () => {
  it('renders equal-width columns from equal 12-column spans', async () => {
    const page = await newE2EPage({
      html: `
        <uai-grid container flex-wrap="wrap">
          <uai-grid xxs="4">Column 1</uai-grid>
          <uai-grid xxs="4">Column 2</uai-grid>
          <uai-grid xxs="4">Column 3</uai-grid>
        </uai-grid>
      `,
    });

    await page.waitForChanges();
    const widths = await page.evaluate(() =>
      Array.from(document.querySelectorAll('uai-grid > uai-grid')).map(
        (column) => column.getBoundingClientRect().width,
      ),
    );

    expect(widths).toHaveLength(3);
    expect(widths[0]).toBeGreaterThan(0);
    expect(widths[0]).toBeCloseTo(widths[1], 1);
    expect(widths[1]).toBeCloseTo(widths[2], 1);
  });

  it('uses the UAI content width for the default container and keeps fluid wider', async () => {
    const page = await newE2EPage({
      html: `
        <uai-grid id="default-container" container></uai-grid>
        <uai-grid id="fluid-container" container-fluid></uai-grid>
      `,
    });

    await page.setViewport({ width: 1440, height: 900 });
    await page.waitForChanges();
    const widths = await page.evaluate(() => ({
      default: document.querySelector('#default-container').getBoundingClientRect().width,
      fluid: document.querySelector('#fluid-container').getBoundingClientRect().width,
    }));

    expect(widths.default).toBe(1112);
    expect(widths.fluid).toBe(1328);
  });

  it('allows the runtime UAI content-width token to override the default', async () => {
    const page = await newE2EPage({
      html: `
        <div style="--uai-width-content: 1100px">
          <uai-grid id="token-container" container></uai-grid>
        </div>
      `,
    });

    await page.setViewport({ width: 1440, height: 900 });
    await page.waitForChanges();
    const width = await page.evaluate(() =>
      document.querySelector('#token-container').getBoundingClientRect().width,
    );

    expect(width).toBe(1100);
  });

  it('resolves spacing and legacy background aliases from UAI theme tokens', async () => {
    const page = await newE2EPage({
      html: `
        <div style="--uai-spacing-md: 20px; --uai-surface-background: rgb(1, 2, 3)">
          <uai-grid gap="2" bg-color="$color-surface-1">Content</uai-grid>
        </div>
      `,
    });

    await page.waitForChanges();
    const styles = await page.evaluate(() => {
      const grid = document.querySelector('uai-grid');
      return {
        gap: getComputedStyle(grid).gap,
        backgroundColor: getComputedStyle(grid).backgroundColor,
      };
    });

    expect(styles.gap).toBe('20px');
    expect(styles.backgroundColor).toBe('rgb(1, 2, 3)');
  });
});
