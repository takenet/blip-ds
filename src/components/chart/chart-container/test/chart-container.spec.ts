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

  it('accepts max-width and max-height props', async () => {
    const page = await newSpecPage({
      components: [ChartContainer],
      html: '<bds-chart-container max-width="1920px" max-height="1080px"></bds-chart-container>',
    });

    expect(page.root.getAttribute('max-width')).toBe('1920px');
    expect(page.root.getAttribute('max-height')).toBe('1080px');
  });
});
