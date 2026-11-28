import { newE2EPage } from '@stencil/core/testing';

const SAMPLE = JSON.stringify([
  { label: 'Black Friday Wpp', value: 90000 },
  { label: 'Reativação de carrinho', value: 50000 },
  { label: 'Cupom fidelização', value: 25000 },
]);

const setup = async (content: string, { theme = 'light', reducedMotion = false } = {}) => {
  const page = await newE2EPage();
  if (reducedMotion) {
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  }
  await page.setContent(`<meta charset="utf-8" /><uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`);
  await page.waitForChanges();
  return page;
};

describe('uai-bar-chart e2e', () => {
  it('renders proportional bars, opens tooltip on keyboard focus, navigates with arrows, and closes on Escape', async () => {
    const page = await setup(
      `<uai-bar-chart series-label="ROI" format="currency" currency="BRL" data='${SAMPLE}'></uai-bar-chart>`,
      { reducedMotion: true },
    );

    const barClick = await page.spyOnEvent('uaiBarClick');
    const firstBar = await page.find('uai-bar-chart >>> .bar-chart__bar-item');
    await firstBar.focus();
    await page.waitForChanges();

    let tooltip = await page.find('uai-bar-chart >>> [part="tooltip"]');
    expect(tooltip).not.toBeNull();
    expect(tooltip.textContent).toContain('Black Friday Wpp');

    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();

    tooltip = await page.find('uai-bar-chart >>> [part="tooltip"]');
    expect(tooltip.textContent).toContain('Reativação de carrinho');

    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(barClick).toHaveReceivedEvent();

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    tooltip = await page.find('uai-bar-chart >>> [part="tooltip"]');
    expect(tooltip).toBeNull();
  });
});
