import { newSpecPage } from '@stencil/core/testing';
import { ChartTooltip } from '../chart-tooltip';

describe('bds-chart-tooltip', () => {
  it('renders component', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    expect(page.root).toBeTruthy();
  });

  it('is hidden by default (display none on host)', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    expect(page.root.style.display).toBe('none');
  });

  it('can be configured with props', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip indicator="line" hide-label="true"></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    expect(component.indicator).toBe('line');
    expect(component.hideLabel).toBe(true);
  });

  it('has correct default prop values', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    expect(component.indicator).toBe('dot');
    expect(component.hideLabel).toBe(false);
    expect(component.hideIndicator).toBe(false);
  });

  it('has setTooltipState method', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    expect(typeof component.setTooltipState).toBe('function');
  });

  it('setTooltipState updates internal state', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    await component.setTooltipState({
      visible: true,
      x: 100,
      y: 200,
      label: 'Jan',
      entries: [{ color: '#0d6efd', name: 'value', value: 42 }],
    });

    expect(component.visible).toBe(true);
    expect(component.x).toBe(100);
    expect(component.y).toBe(200);
    expect(component.label).toBe('Jan');
    expect(component.entries).toHaveLength(1);
    expect(component.entries[0].value).toBe(42);
  });

  it('setTooltipState with visible=false hides tooltip', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    await component.setTooltipState({ visible: true, label: 'test', entries: [] });
    await component.setTooltipState({ visible: false });
    expect(component.visible).toBe(false);
  });
});
