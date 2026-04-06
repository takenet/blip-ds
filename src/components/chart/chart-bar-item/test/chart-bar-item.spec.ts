import { newSpecPage } from '@stencil/core/testing';
import { ChartBar } from '../chart-bar-item';

describe('bds-bar', () => {
  it('renders with display none', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-bar data-key="value"></bds-bar>',
    });
    expect(page.root.style.display).toBe('none');
  });

  it('exposes dataKey as data-data-key attribute', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-bar></bds-bar>',
    });
    const comp = page.rootInstance as any;
    comp.dataKey = 'sales';
    await page.waitForChanges();
    expect(page.root.getAttribute('data-data-key')).toBe('sales');
  });

  it('has correct default color', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-bar></bds-bar>',
    });
    const comp = page.rootInstance as any;
    expect(comp.color).toBe('#0d6efd');
  });

  it('has correct default radius', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-bar></bds-bar>',
    });
    const comp = page.rootInstance as any;
    expect(comp.radius).toBe(4);
  });

  it('exposes color as data-color attribute', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-bar></bds-bar>',
    });
    expect(page.root.getAttribute('data-color')).toBe('#0d6efd');
  });

  it('exposes stackId as data-stack-id attribute when provided', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: '<bds-bar></bds-bar>',
    });
    const comp = page.rootInstance as any;
    comp.stackId = 'group1';
    await page.waitForChanges();
    expect(page.root.getAttribute('data-stack-id')).toBe('group1');
  });
});
