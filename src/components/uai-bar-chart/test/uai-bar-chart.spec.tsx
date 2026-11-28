import { newSpecPage } from '@stencil/core/testing';
import { UaiBarChart, UaiBarChartItem } from '../uai-bar-chart';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const SAMPLE_ITEMS: UaiBarChartItem[] = [
  { label: 'Black Friday Wpp', value: 92000 },
  { label: 'Reativação de carrinho', value: 75000 },
  { label: 'Lançamento 2026', value: 50000 },
  { label: 'Recompra pós-venda', value: 25000 },
];

const render = (html: string) => newSpecPage({ components: [UaiBarChart], html });
const shadow = (page) => page.root.shadowRoot as ShadowRoot;

describe('uai-bar-chart', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('computes smart nice domain with 5 ticks, proportional bar widths, and legend', async () => {
    const page = await render(
      '<uai-bar-chart series-label="ROI" format="currency" currency="BRL" data-test="roi-chart"></uai-bar-chart>',
    );
    page.root.data = SAMPLE_ITEMS;
    await page.waitForChanges();

    const chart = shadow(page).querySelector('[part="chart"]');
    const bars = Array.from(shadow(page).querySelectorAll<HTMLElement>('.bar-chart__bar-item'));
    const fills = Array.from(shadow(page).querySelectorAll<HTMLElement>('.bar-chart__fill'));
    const ticks = Array.from(shadow(page).querySelectorAll('.bar-chart__tick')).map((el) =>
      el.textContent.trim(),
    );
    const legend = shadow(page).querySelector('[part="legend"]');

    expect(chart.getAttribute('data-test')).toBe('roi-chart');
    expect(bars).toHaveLength(4);
    expect(ticks).toHaveLength(5);
    expect(ticks[0]).toBe('0');
    expect(ticks[4]).toContain('100k');
    expect(fills[0].style.width).toBe('92%');
    expect(fills[1].style.width).toBe('75%');
    expect(fills[2].style.width).toBe('50%');
    expect(fills[3].style.width).toBe('25%');
    expect(legend.textContent.trim()).toBe('ROI');
  });

  it('hides legend when seriesLabel is empty or showLegend is false', async () => {
    const page = await render('<uai-bar-chart></uai-bar-chart>');
    page.root.data = SAMPLE_ITEMS;
    await page.waitForChanges();

    expect(shadow(page).querySelector('[part="legend"]')).toBeNull();

    page.root.seriesLabel = 'ROI';
    page.root.showLegend = false;
    await page.waitForChanges();

    expect(shadow(page).querySelector('[part="legend"]')).toBeNull();
  });

  it('navigates bars with keyboard ArrowDown/ArrowUp, shows tooltip, emits events, and closes on Escape', async () => {
    const page = await render('<uai-bar-chart series-label="ROI"></uai-bar-chart>');
    page.root.data = SAMPLE_ITEMS;
    await page.waitForChanges();

    const onHover = jest.fn();
    const onClick = jest.fn();
    page.root.addEventListener('uaiBarHover', onHover);
    page.root.addEventListener('uaiBarClick', onClick);

    const bars = Array.from(shadow(page).querySelectorAll<HTMLElement>('.bar-chart__bar-item'));
    expect(bars[0].getAttribute('role')).toBe('listitem');
    expect(bars[0].getAttribute('tabindex')).toBe('0');

    bars[0].dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    let tooltip = shadow(page).querySelector('[part="tooltip"]');
    expect(tooltip).not.toBeNull();
    expect(tooltip.textContent).toContain('Black Friday Wpp');
    expect(onHover).toHaveBeenLastCalledWith(
      expect.objectContaining({ detail: expect.objectContaining({ label: 'Black Friday Wpp', value: 92000 }) }),
    );

    bars[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    await page.waitForChanges();

    tooltip = shadow(page).querySelector('[part="tooltip"]');
    expect(tooltip.textContent).toContain('Reativação de carrinho');

    bars[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();
    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({ detail: expect.objectContaining({ label: 'Reativação de carrinho', value: 75000 }) }),
    );

    bars[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    expect(shadow(page).querySelector('[part="tooltip"]')).toBeNull();
    expect(onHover).toHaveBeenLastCalledWith(expect.objectContaining({ detail: null }));
  });

  it('accepts JSON string data, explicit maxValue, percent format, and custom formattedValue', async () => {
    const json = JSON.stringify([
      { label: 'Campanha A', value: 40, formattedValue: '40,0% conv.' },
      { label: 'Campanha B', value: 80 },
    ]);
    const page = await render(
      `<uai-bar-chart format="percent" max-value="100" data='${json}'></uai-bar-chart>`,
    );

    const bars = Array.from(shadow(page).querySelectorAll<HTMLElement>('.bar-chart__bar-item'));
    const fills = Array.from(shadow(page).querySelectorAll<HTMLElement>('.bar-chart__fill'));

    expect(bars[0].getAttribute('aria-label')).toContain('40,0% conv.');
    expect(fills[0].style.width).toBe('40%');
    expect(fills[1].style.width).toBe('80%');
  });

  it('renders localized empty state when data is empty', async () => {
    const page = await render('<uai-bar-chart language="en_US"></uai-bar-chart>');
    const empty = shadow(page).querySelector('[part="empty"]');

    expect(empty.textContent.trim()).toBe('No data available');
  });
});
