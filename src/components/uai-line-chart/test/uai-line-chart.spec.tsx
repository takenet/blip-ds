import { newSpecPage } from '@stencil/core/testing';
import { UaiLineChart, UaiLineChartDatum, UaiLineChartSeries } from '../uai-line-chart';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const SAMPLE_SERIES: UaiLineChartSeries[] = [
  { key: 'invested', label: 'Valor investido' },
  { key: 'conversations', label: 'Conversas iniciadas' },
  { key: 'revenue', label: 'Receita' },
];

const SAMPLE_DATA: UaiLineChartDatum[] = [
  { key: '20/07', invested: 90000, conversations: 140000, revenue: 210000 },
  { key: '01/08', invested: 120000, conversations: 185000, revenue: 260000 },
  { key: '10/08', invested: 150000, conversations: 240000, revenue: 310000 },
  { key: 'Hoje', invested: 170000, conversations: 280000, revenue: 350000 },
];

const render = (html: string) => newSpecPage({ components: [UaiLineChart], html });
const shadow = (page) => page.root.shadowRoot as ShadowRoot;

describe('uai-line-chart', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('applies the default AI series palette in order, renders 5 Y ticks, X labels, curves, and legend', async () => {
    const page = await render('<uai-line-chart tooltip-title="Evolução" data-test="evo-chart"></uai-line-chart>');
    page.root.series = [
      ...SAMPLE_SERIES,
      { key: 'leads', label: 'Leads qualificados' },
    ];
    page.root.data = SAMPLE_DATA.map((d) => ({ ...d, leads: 80000 }));
    await page.waitForChanges();

    const chart = shadow(page).querySelector('[part="chart"]');
    const curves = Array.from(shadow(page).querySelectorAll('path.line-chart__curve'));
    const yTicks = Array.from(shadow(page).querySelectorAll('.line-chart__y-tick'));
    const xTicks = Array.from(shadow(page).querySelectorAll('.line-chart__x-tick')).map((el) =>
      el.textContent.trim(),
    );
    const legendItems = Array.from(shadow(page).querySelectorAll('.line-chart__legend-item'));

    expect(chart.getAttribute('data-test')).toBe('evo-chart');
    expect(curves).toHaveLength(4);
    expect(curves[0]).toHaveClass('line-chart__color--ai-start');
    expect(curves[1]).toHaveClass('line-chart__color--ai-middle');
    expect(curves[2]).toHaveClass('line-chart__color--ai-end');
    expect(curves[3]).toHaveClass('line-chart__color--blue');
    expect(yTicks).toHaveLength(5);
    expect(xTicks).toEqual(['20/07', '01/08', '10/08', 'Hoje']);
    expect(legendItems).toHaveLength(4);
  });

  it('inspects multi-series points via keyboard ArrowRight/ArrowLeft/Home/End and clears on Escape', async () => {
    const page = await render('<uai-line-chart tooltip-title="Evolução"></uai-line-chart>');
    page.root.series = SAMPLE_SERIES;
    page.root.data = SAMPLE_DATA;
    await page.waitForChanges();

    const onPointHover = jest.fn();
    page.root.addEventListener('uaiPointHover', onPointHover);

    const plot = shadow(page).querySelector<HTMLElement>('[part="plot"]');
    expect(plot.getAttribute('tabindex')).toBe('0');

    plot.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    await page.waitForChanges();

    let tooltip = shadow(page).querySelector('[part="tooltip"]');
    let points = shadow(page).querySelectorAll('.line-chart__point');
    expect(tooltip).not.toBeNull();
    expect(points).toHaveLength(3);
    expect(tooltip.textContent).toContain('Evolução');
    expect(tooltip.textContent).toContain('20/07');
    expect(onPointHover).toHaveBeenLastCalledWith(
      expect.objectContaining({ detail: { index: 0, datum: SAMPLE_DATA[0] } }),
    );

    plot.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    await page.waitForChanges();
    expect(shadow(page).querySelector('[part="tooltip"]').textContent).toContain('01/08');
    expect(onPointHover).toHaveBeenLastCalledWith(
      expect.objectContaining({ detail: { index: 1, datum: SAMPLE_DATA[1] } }),
    );

    plot.dispatchEvent(new KeyboardEvent('keydown', { key: 'End' }));
    await page.waitForChanges();
    expect(shadow(page).querySelector('[part="tooltip"]').textContent).toContain('Hoje');

    plot.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();
    expect(shadow(page).querySelector('[part="tooltip"]')).toBeNull();
    expect(shadow(page).querySelectorAll('.line-chart__point')).toHaveLength(0);
    expect(onPointHover).toHaveBeenLastCalledWith(expect.objectContaining({ detail: null }));
  });

  it('supports pointer hover over X index slices and automatic label/name X key fallback', async () => {
    const seriesJson = JSON.stringify([{ key: 'conv', label: 'Conversão', color: 'success' }]);
    const dataJson = JSON.stringify([
      { name: 'Jan', conv: 42 },
      { name: 'Fev', conv: 68 },
    ]);
    const page = await render(
      `<uai-line-chart format="percent" series='${seriesJson}' data='${dataJson}'></uai-line-chart>`,
    );

    const hits = shadow(page).querySelectorAll('rect.line-chart__hit');
    hits[1].dispatchEvent(new MouseEvent('mouseenter'));
    await page.waitForChanges();

    const tooltip = shadow(page).querySelector('[part="tooltip"]');
    expect(tooltip).not.toBeNull();
    expect(tooltip.textContent).toContain('Fev');
    expect(tooltip.textContent).toContain('68%');

    const plot = shadow(page).querySelector('[part="plot"]');
    plot.dispatchEvent(new MouseEvent('mouseleave'));
    await page.waitForChanges();
    expect(shadow(page).querySelector('[part="tooltip"]')).toBeNull();
  });

  it('renders localized empty state when series or data is empty', async () => {
    const page = await render('<uai-line-chart language="es_ES"></uai-line-chart>');
    expect(shadow(page).querySelector('[part="empty"]').textContent.trim()).toBe(
      'Sin datos para mostrar',
    );
  });
});
