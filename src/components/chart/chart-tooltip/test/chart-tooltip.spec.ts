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

  it('can be configured with props', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip indicator="line" hide-label="true"></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    expect(component.indicator).toBe('line');
    expect(component.hideLabel).toBe(true);
  });

  it('has setTooltipState method', async () => {
    const page = await newSpecPage({
      components: [ChartTooltip],
      html: '<bds-chart-tooltip></bds-chart-tooltip>',
    });

    const component = page.rootInstance as any;
    expect(typeof component.setTooltipState).toBe('function');
  });
});
