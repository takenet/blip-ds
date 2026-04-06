import { newSpecPage } from '@stencil/core/testing';
import { ChartLineItem } from '../chart-line-item';

describe('bds-line', () => {
  it('renders with display none', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    expect(page.root.style.display).toBe('none');
  });

  it('has correct default color', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    const comp = page.rootInstance as any;
    expect(comp.color).toBe('#0d6efd');
  });

  it('has correct default strokeWidth', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    const comp = page.rootInstance as any;
    expect(comp.strokeWidth).toBe(2);
  });

  it('has correct default curve', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    const comp = page.rootInstance as any;
    expect(comp.curve).toBe('monotone');
  });

  it('dot prop defaults to true', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    const comp = page.rootInstance as any;
    expect(comp.dot).toBe(true);
  });

  it('exposes dot as data-dot attribute', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    expect(page.root.getAttribute('data-dot')).toBe('true');
  });

  it('exposes dataKey as data-data-key attribute', async () => {
    const page = await newSpecPage({
      components: [ChartLineItem],
      html: '<bds-line></bds-line>',
    });
    const comp = page.rootInstance as any;
    comp.dataKey = 'revenue';
    await page.waitForChanges();
    expect(page.root.getAttribute('data-data-key')).toBe('revenue');
  });
});
