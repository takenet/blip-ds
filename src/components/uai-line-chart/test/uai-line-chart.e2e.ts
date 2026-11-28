import { newE2EPage } from '@stencil/core/testing';

const SERIES = JSON.stringify([
  { key: 'invested', label: 'Valor investido' },
  { key: 'conversations', label: 'Conversas iniciadas' },
  { key: 'revenue', label: 'Receita' },
]);

const DATA = JSON.stringify([
  { key: '20/07', invested: 90000, conversations: 140000, revenue: 210000 },
  { key: '01/08', invested: 120000, conversations: 185000, revenue: 260000 },
  { key: 'Hoje', invested: 170000, conversations: 280000, revenue: 350000 },
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

describe('uai-line-chart e2e', () => {
  it('inspects series points via keyboard under reduced motion and closes tooltip on Escape', async () => {
    const page = await setup(
      `<uai-line-chart tooltip-title="Evolução" series='${SERIES}' data='${DATA}'></uai-line-chart>`,
      { reducedMotion: true },
    );

    const pointHover = await page.spyOnEvent('uaiPointHover');
    const plot = await page.find('uai-line-chart >>> [part="plot"]');
    await plot.focus();
    await page.waitForChanges();

    await page.keyboard.press('ArrowRight');
    await page.waitForChanges();

    let tooltip = await page.find('uai-line-chart >>> [part="tooltip"]');
    let points = await page.findAll('uai-line-chart >>> .line-chart__point');
    expect(tooltip).not.toBeNull();
    expect(points).toHaveLength(3);
    expect(tooltip.textContent).toContain('Evolução');
    expect(tooltip.textContent).toContain('Valor investido');
    expect(pointHover).toHaveReceivedEvent();

    const transitionDuration = await page.evaluate(() => {
      const host = document.querySelector('uai-line-chart');
      const tip = host?.shadowRoot?.querySelector('[part="tooltip"]') as HTMLElement;
      return tip ? getComputedStyle(tip).transitionProperty : '';
    });
    expect(transitionDuration).toBe('none');

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    tooltip = await page.find('uai-line-chart >>> [part="tooltip"]');
    expect(tooltip).toBeNull();
  });
});
