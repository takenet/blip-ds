import { newSpecPage } from '@stencil/core/testing';
import { ChartContainer } from '../chart-container';

describe('bds-chart-container', () => {
  it('renders component', async () => {
    const page = await newSpecPage({
      components: [ChartContainer],
      html: '<bds-chart-container></bds-chart-container>',
    });

    expect(page.root).toBeTruthy();
  });

  it('renders slot for chart content', async () => {
    const page = await newSpecPage({
      components: [ChartContainer],
      html: '<bds-chart-container><div>Chart Content</div></bds-chart-container>',
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('projects slotted children', async () => {
    const page = await newSpecPage({
      components: [ChartContainer],
      html: '<bds-chart-container><span id="child">hello</span></bds-chart-container>',
    });

    const child = page.root.querySelector('#child');
    expect(child).toBeTruthy();
    expect(child.textContent).toBe('hello');
  });
});
