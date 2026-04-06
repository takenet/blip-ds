import { newSpecPage } from '@stencil/core/testing';
import { ChartLegend } from '../chart-legend';

describe('bds-chart-legend', () => {
  it('renders empty with display none when no items set', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend></bds-chart-legend>',
    });
    expect(page.root).toBeTruthy();
    expect(page.root.style.display).toBe('none');
  });

  it('has correct default props', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend></bds-chart-legend>',
    });
    const comp = page.rootInstance as any;
    expect(comp.align).toBe('center');
    expect(comp.dataKey).toBeUndefined();
  });

  it('accepts dataKey prop', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend></bds-chart-legend>',
    });
    const comp = page.rootInstance as any;
    expect(comp.dataKey).toBeUndefined();
  });

  it('accepts align prop', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend align="left"></bds-chart-legend>',
    });
    const comp = page.rootInstance as any;
    expect(comp.align).toBe('left');
  });

  it('renders legend items after setLegendState', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend></bds-chart-legend>',
    });
    const comp = page.rootInstance as ChartLegend;
    await comp.setLegendState({
      items: [{ label: 'Series A', color: '#0d6efd' }, { label: 'Series B', color: '#05b96c' }],
      align: 'center',
      activeItem: null,
    });
    await page.waitForChanges();
    const items = page.root.shadowRoot.querySelectorAll('.chart__legend-item');
    expect(items.length).toBe(2);
  });

  it('marks inactive items when activeItem is set', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend></bds-chart-legend>',
    });
    const comp = page.rootInstance as ChartLegend;
    await comp.setLegendState({
      items: [{ label: 'Series A', color: '#0d6efd' }, { label: 'Series B', color: '#05b96c' }],
      align: 'center',
      activeItem: 'Series A',
    });
    await page.waitForChanges();
    const items = page.root.shadowRoot.querySelectorAll('.chart__legend-item');
    expect(items[0].classList.contains('chart__legend-item--inactive')).toBe(false);
    expect(items[1].classList.contains('chart__legend-item--inactive')).toBe(true);
  });
});
