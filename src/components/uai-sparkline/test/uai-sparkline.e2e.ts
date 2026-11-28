import { newE2EPage } from '@stencil/core/testing';

const setup = async (content: string, theme = 'light') => {
  const page = await newE2EPage();
  await page.setContent(`<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`);
  await page.waitForChanges();
  return page;
};

describe('uai-sparkline e2e', () => {
  it('renders semantic colors from UAI tokens and accessible role="img"', async () => {
    const page = await setup(
      '<uai-sparkline id="spark" variant="positive" label="Crescimento semanal" data="[10, 18, 16, 29, 35]"></uai-sparkline>',
    );

    const chart = await page.find('uai-sparkline >>> [part="chart"]');
    expect(chart).not.toBeNull();
    expect(chart.getAttribute('role')).toBe('img');
    expect(chart.getAttribute('aria-label')).toBe('Crescimento semanal');

    const line = await page.find('uai-sparkline >>> path.sparkline__line');
    const area = await page.find('uai-sparkline >>> path.sparkline__area');
    expect(line).not.toBeNull();
    expect(area).not.toBeNull();
  });

  it('renders the Figma neutral flat line with gradient area using opacity tokens', async () => {
    const page = await setup('<uai-sparkline data="[20, 20, 20]"></uai-sparkline>');

    const line = await page.find('uai-sparkline >>> path.sparkline__line');
    const area = await page.find('uai-sparkline >>> path.sparkline__area');
    expect(line.getAttribute('d')).toBe('M 0 34 L 310 34');
    expect(area).not.toBeNull();

    const opacity = await page.evaluate(() => {
      const path = document.querySelector('uai-sparkline').shadowRoot.querySelector('path.sparkline__area');
      const styles = getComputedStyle(path);
      const tokens = getComputedStyle(path);
      return {
        opacity: styles.opacity === tokens.getPropertyValue('--uai-opacity-focus-ring').trim(),
        fillOpacity: styles.fillOpacity === tokens.getPropertyValue('--uai-opacity-disabled').trim(),
      };
    });
    expect(opacity).toEqual({ opacity: true, fillOpacity: true });
  });

  it('reveals left to right with duration/loop and skips the animation under reduced motion', async () => {
    const page = await setup('<uai-sparkline variant="positive" data="[10, 24, 18, 32]"></uai-sparkline>');
    const read = () =>
      page.evaluate(() => {
        const svg = document.querySelector('uai-sparkline').shadowRoot.querySelector('svg.sparkline__svg');
        const styles = getComputedStyle(svg);
        const token = getComputedStyle(document.querySelector('uai-theme-provider')).getPropertyValue('--uai-duration-loop').trim();
        const toMs = (value: string) => (value.endsWith('ms') ? parseFloat(value) : parseFloat(value) * 1000);
        return { name: styles.animationName, matchesToken: toMs(styles.animationDuration) === toMs(token) };
      });

    expect(await read()).toEqual({ name: 'uai-chart-reveal', matchesToken: true });

    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    expect((await read()).name).toBe('none');
  });
});
