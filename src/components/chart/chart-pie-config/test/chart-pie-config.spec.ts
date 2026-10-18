import { newSpecPage } from '@stencil/core/testing';
import { ChartPieConfig } from '../chart-pie-config';

describe('bds-pie-config', () => {
  it('renders with display none', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    expect(page.root.style.display).toBe('none');
  });

  it('has default innerRadius of 60', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    const comp = page.rootInstance as any;
    expect(comp.innerRadius).toBe(60);
  });

  it('has default padAngle of 0.02', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    const comp = page.rootInstance as any;
    expect(comp.padAngle).toBeCloseTo(0.02);
  });

  it('has default cornerRadius of 3', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    const comp = page.rootInstance as any;
    expect(comp.cornerRadius).toBe(3);
  });

  it('exposes innerRadius as data-inner-radius attribute', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    expect(page.root.getAttribute('data-inner-radius')).toBe('60');
  });

  it('accepts custom innerRadius=0 for pie chart', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    const comp = page.rootInstance as any;
    comp.innerRadius = 0;
    await page.waitForChanges();
    expect(page.root.getAttribute('data-inner-radius')).toBe('0');
  });

  it('marks itself with data-pie-config attribute', async () => {
    const page = await newSpecPage({
      components: [ChartPieConfig],
      html: '<bds-pie-config></bds-pie-config>',
    });
    expect(page.root.getAttribute('data-pie-config')).not.toBeNull();
  });
});
