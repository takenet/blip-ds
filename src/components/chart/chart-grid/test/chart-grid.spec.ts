import { newSpecPage } from '@stencil/core/testing';
import { ChartGrid } from '../chart-grid';

describe('bds-chart-grid', () => {
  it('renders component', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid></bds-chart-grid>',
    });
    expect(page.root).toBeTruthy();
  });

  it('has correct default horizontal=true', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid></bds-chart-grid>',
    });
    const comp = page.rootInstance as any;
    expect(comp.horizontal).toBe(true);
  });

  it('has correct default vertical=false', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid></bds-chart-grid>',
    });
    const comp = page.rootInstance as any;
    expect(comp.vertical).toBe(false);
  });

  it('has correct default strokeStyle=solid', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid></bds-chart-grid>',
    });
    const comp = page.rootInstance as any;
    expect(comp.strokeStyle).toBe('solid');
  });

  it('accepts horizontal=false', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid horizontal="false"></bds-chart-grid>',
    });
    const comp = page.rootInstance as any;
    expect(comp.horizontal).toBe('false');
  });

  it('accepts strokeStyle=dashed', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid stroke-style="dashed"></bds-chart-grid>',
    });
    const comp = page.rootInstance as any;
    expect(comp.strokeStyle).toBe('dashed');
  });

  it('exposes data-stroke-style attribute', async () => {
    const page = await newSpecPage({
      components: [ChartGrid],
      html: '<bds-chart-grid stroke-style="dashed"></bds-chart-grid>',
    });
    expect(page.root.getAttribute('data-stroke-style')).toBe('dashed');
  });
});
