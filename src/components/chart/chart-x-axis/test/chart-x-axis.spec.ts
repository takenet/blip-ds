import { newSpecPage } from '@stencil/core/testing';
import { ChartXAxis } from '../chart-x-axis';

describe('bds-x-axis', () => {
  it('renders with display none', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    expect(page.root.style.display).toBe('none');
  });

  it('has correct default dataKey', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.dataKey).toBe('label');
  });

  it('has correct default tickLine', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.tickLine).toBe(true);
  });

  it('has correct default axisLine', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.axisLine).toBe(true);
  });

  it('has correct default show', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.show).toBe(true);
  });

  it('has correct default tickCount', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.tickCount).toBe(5);
  });

  it('marks itself with data-x-axis attribute', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis></bds-x-axis>',
    });
    expect(page.root.getAttribute('data-x-axis')).not.toBeNull();
  });

  it('accepts show=false prop', async () => {
    const page = await newSpecPage({
      components: [ChartXAxis],
      html: '<bds-x-axis show="false"></bds-x-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.show).toBe(false);
  });
});
