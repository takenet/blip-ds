import { newSpecPage } from '@stencil/core/testing';
import { ChartLine } from '../chart-line';
import { ChartLineItem } from '../../chart-line-item/chart-line-item';

const sampleData = [
  { label: 'Jan', value: 10 },
  { label: 'Fev', value: 20 },
];

const multiSeriesData = [
  { label: 'Jan', a: 10, b: 30 },
  { label: 'Fev', a: 20, b: 15 },
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

  it('renders empty path d attribute for empty data', async () => {
    const page = await newSpecPage({
      components: [ChartLine],
      html: `<bds-chart-line data='[]'></bds-chart-line>`,
    });

    const path = page.root.shadowRoot.querySelector('.chart-line__path');
    // Component renders the path element even for empty data; d is empty
    expect(path).toBeTruthy();
    expect(path.getAttribute('d')).toBeFalsy();
  });

  it('renders one path per bds-line child (multi-series)', async () => {
    const page = await newSpecPage({
      components: [ChartLine, ChartLineItem],
      html: `<bds-chart-line data='${JSON.stringify(multiSeriesData)}'>
        <bds-line data-data-key="a" data-color="#0d6efd"></bds-line>
        <bds-line data-data-key="b" data-color="#05b96c"></bds-line>
      </bds-chart-line>`,
    });

    const paths = page.root.shadowRoot.querySelectorAll('.chart-line__path');
    expect(paths.length).toBe(2);
  });

  it('renders slot for child components', async () => {
    const page = await newSpecPage({
      components: [ChartLine],
      html: '<bds-chart-line></bds-chart-line>',
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });
});
