import { newSpecPage } from '@stencil/core/testing';
import { ChartLegend } from '../chart-legend';

describe('bds-chart-legend', () => {
  it('renders with display none', async () => {
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
      html: '<bds-chart-legend data-key="label"></bds-chart-legend>',
    });
    expect(page.root.getAttribute('data-data-key')).toBe('label');
  });

  it('accepts align prop', async () => {
    const page = await newSpecPage({
      components: [ChartLegend],
      html: '<bds-chart-legend align="left"></bds-chart-legend>',
    });
    const comp = page.rootInstance as any;
    expect(comp.align).toBe('left');
  });
});
