import { newSpecPage } from '@stencil/core/testing';
import { ChartHeatmap } from '../chart-heatmap';
import { ChartHeatmapCell } from '../../chart-heatmap-cell/chart-heatmap-cell';

const sampleData = [
  { x: 'Seg', y: '9h',  value: 10 },
  { x: 'Seg', y: '10h', value: 50 },
  { x: 'Ter', y: '9h',  value: 100 },
  { x: 'Ter', y: '10h', value: 50 },
];

describe('bds-chart-heatmap', () => {
  it('renders SVG element', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmap],
      html: '<bds-chart-heatmap></bds-chart-heatmap>',
    });
    const svg = page.root.shadowRoot.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('renders correct number of cells (xDomain × yDomain)', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmap],
      html: `<bds-chart-heatmap data='${JSON.stringify(sampleData)}'></bds-chart-heatmap>`,
    });
    const cells = page.root.shadowRoot.querySelectorAll('.chart-heatmap__cell');
    // 2 unique x × 2 unique y = 4 cells
    expect(cells.length).toBe(4);
  });

  it('renders cells when data is provided as JSON string attribute', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmap],
      html: `<bds-chart-heatmap data='${JSON.stringify(sampleData)}'></bds-chart-heatmap>`,
    });
    const cells = page.root.shadowRoot.querySelectorAll('.chart-heatmap__cell');
    expect(cells.length).toBeGreaterThan(0);
  });

  it('max-value cell has opacity 1.0', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmap],
      html: `<bds-chart-heatmap data='${JSON.stringify(sampleData)}'></bds-chart-heatmap>`,
    });
    const cells = Array.from(
      page.root.shadowRoot.querySelectorAll('.chart-heatmap__cell')
    ) as HTMLElement[];
    const opacities = cells.map(c => parseFloat(c.style.opacity));
    expect(Math.max(...opacities)).toBeCloseTo(1.0);
  });

  it('respects color from bds-heatmap-cell child', async () => {
    const page = await newSpecPage({
      components: [ChartHeatmap, ChartHeatmapCell],
      html: `<bds-chart-heatmap data='${JSON.stringify(sampleData)}'>
        <bds-heatmap-cell color="#ff0000"></bds-heatmap-cell>
      </bds-chart-heatmap>`,
    });
    const cells = Array.from(
      page.root.shadowRoot.querySelectorAll('.chart-heatmap__cell')
    ) as SVGRectElement[];
    expect(cells[0].getAttribute('fill')).toBe('#ff0000');
  });
});
