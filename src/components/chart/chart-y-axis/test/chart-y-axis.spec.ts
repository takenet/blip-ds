import { newSpecPage } from '@stencil/core/testing';
import { ChartYAxis } from '../chart-y-axis';

describe('bds-y-axis', () => {
  it('renders with display none', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    expect(page.root.style.display).toBe('none');
  });

  it('has correct default dataKey', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.dataKey).toBe('value');
  });

  it('has correct default tickLine', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.tickLine).toBe(true);
  });

  it('has correct default show', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.show).toBe(true);
  });

  it('has correct default tickCount', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.tickCount).toBe(5);
  });

  it('marks itself with data-y-axis attribute', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    expect(page.root.getAttribute('data-y-axis')).not.toBeNull();
  });

  it('exposes data-show attribute', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis></bds-y-axis>',
    });
    // Boolean true renders as empty string in Stencil JSX attributes
    expect(page.root.getAttribute('data-show')).not.toBeNull();
  });

  it('accepts show=false prop', async () => {
    const page = await newSpecPage({
      components: [ChartYAxis],
      html: '<bds-y-axis show="false"></bds-y-axis>',
    });
    const comp = page.rootInstance as any;
    expect(comp.show).toBe(false);
  });
});
