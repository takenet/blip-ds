import { newSpecPage } from '@stencil/core/testing';
import { UaiSparkline } from '../uai-sparkline';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiSparkline], html });
const shadow = (page) => page.root.shadowRoot as ShadowRoot;

describe('uai-sparkline', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders an accessible responsive SVG sparkline with neutral default variant', async () => {
    const page = await render('<uai-sparkline data="[10, 24, 18, 32]" data-test="kpi-spark"></uai-sparkline>');
    const chart = shadow(page).querySelector('[part="chart"]');
    const svg = shadow(page).querySelector('svg.sparkline__svg');
    const line = shadow(page).querySelector('path.sparkline__line');
    const area = shadow(page).querySelector('path.sparkline__area');

    expect(chart.getAttribute('role')).toBe('img');
    expect(chart.getAttribute('aria-label')).toBe('Gráfico de tendência neutra');
    expect(chart.getAttribute('data-test')).toBe('kpi-spark');
    expect(chart).toHaveClass('sparkline--neutral');
    expect(svg.getAttribute('viewBox')).toBe('0 0 310 68');
    expect(svg.getAttribute('preserveAspectRatio')).toBe('none');
    expect(line.getAttribute('d')).toContain('C ');
    expect(area).not.toBeNull();
  });

  it('renders gradient area for non-constant positive and negative variants and respects showArea=false', async () => {
    const page = await render('<uai-sparkline variant="positive" data="[12, 18, 29, 41]"></uai-sparkline>');
    let chart = shadow(page).querySelector('[part="chart"]');
    let area = shadow(page).querySelector('path.sparkline__area');
    const gradient = shadow(page).querySelector('linearGradient');

    expect(chart).toHaveClass('sparkline--positive');
    expect(gradient).not.toBeNull();
    expect(area).not.toBeNull();

    page.root.showArea = false;
    await page.waitForChanges();

    area = shadow(page).querySelector('path.sparkline__area');
    expect(area).toBeNull();

    page.root.showArea = true;
    page.root.variant = 'negative';
    await page.waitForChanges();

    chart = shadow(page).querySelector('[part="chart"]');
    expect(chart).toHaveClass('sparkline--negative');
    expect(shadow(page).querySelector('path.sparkline__area')).not.toBeNull();
  });

  it.each([
    ['green', 'positive'],
    ['red', 'negative'],
  ])('maps legacy variant alias "%s" to "%s" without warning', async (legacy, expected) => {
    const page = await render(`<uai-sparkline variant="${legacy}" data="[5, 10, 8]"></uai-sparkline>`);
    const chart = shadow(page).querySelector('[part="chart"]');

    expect(chart).toHaveClass(`sparkline--${expected}`);
    expect(warn).not.toHaveBeenCalled();
  });

  it('warns and falls back to neutral on unknown variant', async () => {
    const page = await render('<uai-sparkline variant="purple" data="[5, 10, 8]"></uai-sparkline>');
    const chart = shadow(page).querySelector('[part="chart"]');

    expect(chart).toHaveClass('sparkline--neutral');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported variant "purple"'));
  });

  it('draws a centered horizontal line without NaN and keeps the gradient area for constant or single-point series', async () => {
    const page = await render('<uai-sparkline variant="positive" data="[50, 50, 50, 50]"></uai-sparkline>');
    let line = shadow(page).querySelector('path.sparkline__line');

    expect(line.getAttribute('d')).toBe('M 0 34 L 310 34');
    expect(line.getAttribute('d')).not.toContain('NaN');
    expect(shadow(page).querySelector('path.sparkline__area').getAttribute('d')).toBe('M 0 34 L 310 34 L 310 68 L 0 68 Z');

    page.root.data = [42];
    await page.waitForChanges();

    line = shadow(page).querySelector('path.sparkline__line');
    expect(line.getAttribute('d')).toBe('M 0 34 L 310 34');
  });

  it('supports straight polyline segments when smooth is false and custom accessible labels', async () => {
    const page = await render(
      '<uai-sparkline smooth="false" label="Conversas +18%" language="en_US"></uai-sparkline>',
    );
    page.root.data = [10, 30, 20];
    await page.waitForChanges();

    const chart = shadow(page).querySelector('[part="chart"]');
    const line = shadow(page).querySelector('path.sparkline__line');

    expect(chart.getAttribute('aria-label')).toBe('Conversas +18%');
    expect(line.getAttribute('d')).toContain('L ');
    expect(line.getAttribute('d')).not.toContain('C ');
  });

  it('handles empty or malformed JSON gracefully with localized label', async () => {
    const page = await render('<uai-sparkline data="invalid-json" language="en_US"></uai-sparkline>');
    const chart = shadow(page).querySelector('[part="chart"]');

    expect(chart.getAttribute('aria-label')).toBe('Trend sparkline with no data');
    expect(shadow(page).querySelector('path.sparkline__line')).toBeNull();
  });
});
