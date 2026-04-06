import { newSpecPage } from '@stencil/core/testing';
import { ChartPie } from '../chart-pie';

const sampleData = [
  { label: 'A', value: 50 },
  { label: 'B', value: 30 },
  { label: 'C', value: 20 },
];

describe('bds-chart-pie', () => {
  it('renders an SVG element', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: '<bds-chart-pie></bds-chart-pie>',
    });
    const svg = page.root.shadowRoot.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('renders one path per data point', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: `<bds-chart-pie data='${JSON.stringify(sampleData)}'></bds-chart-pie>`,
    });
    const paths = page.root.shadowRoot.querySelectorAll('.chart-pie__slice');
    expect(paths.length).toBe(sampleData.length);
  });

  it('each slice path has a non-empty d attribute', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: `<bds-chart-pie data='${JSON.stringify(sampleData)}'></bds-chart-pie>`,
    });
    const paths = page.root.shadowRoot.querySelectorAll<SVGPathElement>('.chart-pie__slice');
    paths.forEach(path => {
      expect(path.getAttribute('d')).toBeTruthy();
    });
  });

  it('assigns colors from DEFAULT_LEGEND_PALETTE', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: `<bds-chart-pie data='${JSON.stringify(sampleData)}'></bds-chart-pie>`,
    });
    const firstPath = page.root.shadowRoot.querySelector<SVGPathElement>('.chart-pie__slice');
    expect(firstPath.getAttribute('fill')).toBe('#0d6efd');
  });

  it('renders no slices for empty data', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: `<bds-chart-pie data='[]'></bds-chart-pie>`,
    });
    const paths = page.root.shadowRoot.querySelectorAll('.chart-pie__slice');
    expect(paths.length).toBe(0);
  });

  it('accepts data as a JSON string attribute', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: `<bds-chart-pie data='${JSON.stringify(sampleData)}'></bds-chart-pie>`,
    });
    const paths = page.root.shadowRoot.querySelectorAll('.chart-pie__slice');
    expect(paths.length).toBe(3);
  });

  it('renders slot for child components', async () => {
    const page = await newSpecPage({
      components: [ChartPie],
      html: '<bds-chart-pie></bds-chart-pie>',
    });
    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });
});
