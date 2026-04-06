import { newSpecPage } from '@stencil/core/testing';
import { ChartHeatmapCell } from '../chart-heatmap-cell';

describe('bds-heatmap-cell', () => {
  it('renders with display none', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmapCell],
      html: '<bds-heatmap-cell></bds-heatmap-cell>',
    });
    expect(page.root.style.display).toBe('none');
  });

  it('exposes color as data-color attribute', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmapCell],
      html: '<bds-heatmap-cell></bds-heatmap-cell>',
    });
    const comp = page.rootInstance as any;
    comp.color = '#ff0000';
    await page.waitForChanges();
    expect(page.root.getAttribute('data-color')).toBe('#ff0000');
  });

  it('exposes radius as data-radius attribute', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmapCell],
      html: '<bds-heatmap-cell></bds-heatmap-cell>',
    });
    const comp = page.rootInstance as any;
    comp.radius = 8;
    await page.waitForChanges();
    expect(page.root.getAttribute('data-radius')).toBe('8');
  });

  it('exposes valueKey as data-value-key attribute', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmapCell],
      html: '<bds-heatmap-cell></bds-heatmap-cell>',
    });
    const comp = page.rootInstance as any;
    comp.valueKey = 'total';
    await page.waitForChanges();
    expect(page.root.getAttribute('data-value-key')).toBe('total');
  });

  it('marks itself with data-heatmap-cell attribute', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmapCell],
      html: '<bds-heatmap-cell></bds-heatmap-cell>',
    });
    expect(page.root.getAttribute('data-heatmap-cell')).not.toBeNull();
  });
});
