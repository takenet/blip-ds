import { newSpecPage } from '@stencil/core/testing';
import { ChartLabels } from '../chart-labels';

describe('bds-chart-labels', () => {
  it('renders SVG element', async () => {
    const page = await newSpecPage({
      components: [ChartLabels],
      html: '<bds-chart-labels></bds-chart-labels>',
    });
    const svg = page.root.shadowRoot.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('has correct default xkey', async () => {
    const page = await newSpecPage({
      components: [ChartLabels],
      html: '<bds-chart-labels></bds-chart-labels>',
    });
    const comp = page.rootInstance as any;
    expect(comp.xkey).toBe('label');
  });

  it('has correct default ykey', async () => {
    const page = await newSpecPage({
      components: [ChartLabels],
      html: '<bds-chart-labels></bds-chart-labels>',
    });
    const comp = page.rootInstance as any;
    expect(comp.ykey).toBe('value');
  });

  it('has correct default width', async () => {
    const page = await newSpecPage({
      components: [ChartLabels],
      html: '<bds-chart-labels></bds-chart-labels>',
    });
    const comp = page.rootInstance as any;
    expect(comp.width).toBe(720);
  });

  it('has correct default height', async () => {
    const page = await newSpecPage({
      components: [ChartLabels],
      html: '<bds-chart-labels></bds-chart-labels>',
    });
    const comp = page.rootInstance as any;
    expect(comp.height).toBe(320);
  });

  it('SVG dimensions match width and height props', async () => {
    const page = await newSpecPage({
      components: [ChartLabels],
      html: '<bds-chart-labels width="400" height="200"></bds-chart-labels>',
    });
    const svg = page.root.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('400');
    expect(svg.getAttribute('height')).toBe('200');
  });
});
