import { newSpecPage } from '@stencil/core/testing';
import { ChartBar } from '../chart-bar';
import { ChartBar as ChartBarItem } from '../../chart-bar-item/chart-bar-item';

const sampleData = [
  { label: 'Jan', value: 10 },
  { label: 'Fev', value: 20 },
  { label: 'Mar', value: 35 },
];

describe('bds-chart-bar', () => {
  it('renders SVG element', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-chart-bar></bds-chart-bar>',
    });

    const svg = page.root.shadowRoot.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('renders bars when data is provided as JSON string attribute', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: `<bds-chart-bar data='${JSON.stringify(sampleData)}'></bds-chart-bar>`,
    });

    const barGroup = page.root.shadowRoot.querySelector('.chart-bar__bars');
    const rects = barGroup.querySelectorAll('rect');
    expect(rects.length).toBe(sampleData.length);
  });

  it('renders correct number of bars', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: `<bds-chart-bar data='${JSON.stringify(sampleData)}'></bds-chart-bar>`,
    });

    const barGroup = page.root.shadowRoot.querySelector('.chart-bar__bars');
    const rects = barGroup.querySelectorAll('rect');
    // 1 series × 3 data points = 3 bars
    expect(rects.length).toBe(3);
  });

  it('renders grouped bars for multiple bds-bar children', async () => {
    const multiData = [
      { label: 'Jan', value: 10, value2: 20 },
      { label: 'Fev', value: 30, value2: 15 },
    ];
    const page = await newSpecPage({
      components: [ChartBar, ChartBarItem],
      html: `<bds-chart-bar data='${JSON.stringify(multiData)}'>
        <bds-bar data-data-key="value" data-color="#0d6efd"></bds-bar>
        <bds-bar data-data-key="value2" data-color="#05b96c"></bds-bar>
      </bds-chart-bar>`,
    });

    const barGroup = page.root.shadowRoot.querySelector('.chart-bar__bars');
    const rects = barGroup.querySelectorAll('rect');
    // 2 series × 2 data points = 4 bars
    expect(rects.length).toBe(4);
  });

  it('renders no bars for empty data', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: `<bds-chart-bar data='[]'></bds-chart-bar>`,
    });

    const barGroup = page.root.shadowRoot.querySelector('.chart-bar__bars');
    const rects = barGroup.querySelectorAll('rect');
    expect(rects.length).toBe(0);
  });

  it('renders slot for child components', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-chart-bar></bds-chart-bar>',
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('renders stacked bars with same stackId', async () => {
    const stackData = [
      { label: 'Jan', a: 10, b: 20 },
      { label: 'Fev', a: 30, b: 15 },
    ];
    const page = await newSpecPage({
      components: [ChartBar, ChartBarItem],
      html: `<bds-chart-bar data='${JSON.stringify(stackData)}'>
        <bds-bar data-data-key="a" data-color="#0d6efd" data-stack-id="s1"></bds-bar>
        <bds-bar data-data-key="b" data-color="#05b96c" data-stack-id="s1"></bds-bar>
      </bds-chart-bar>`,
    });

    // Stacked: 1 column × 2 data points × 2 series = 4 bars (same column per group)
    const barGroup = page.root.shadowRoot.querySelector('.chart-bar__bars');
    const rects = barGroup.querySelectorAll('rect');
    expect(rects.length).toBe(4);
  });
});
