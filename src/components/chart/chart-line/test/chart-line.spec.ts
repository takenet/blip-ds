import { newSpecPage } from '@stencil/core/testing';
import { ChartLine } from '../chart-line';

const sampleData = [
  { label: 'Jan', value: 10 },
  { label: 'Fev', value: 20 },
];

describe('bds-chart-line', () => {
  it('creates component and renders SVG', async () => {
    const page = await newSpecPage({
      components: [ChartLine],
      html: '<bds-chart-line></bds-chart-line>',
    });

    expect(page.root).toBeTruthy();
    const svg = page.root.shadowRoot.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('renders path when data is provided as JSON string attribute', async () => {
    const page = await newSpecPage({
      components: [ChartLine],
      html: `<bds-chart-line data='${JSON.stringify(sampleData)}'></bds-chart-line>`,
    });

    const path = page.root.shadowRoot.querySelector('path');
    expect(path).toBeTruthy();
    expect(path.getAttribute('d')).toBeTruthy();
  });

  it('renders circles for data points', async () => {
    const page = await newSpecPage({
      components: [ChartLine],
      html: `<bds-chart-line data='${JSON.stringify(sampleData)}'></bds-chart-line>`,
    });

    const circles = page.root.shadowRoot.querySelectorAll('circle');
    expect(circles.length).toBe(sampleData.length);
  });
});
