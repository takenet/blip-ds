import { newE2EPage } from '@stencil/core/testing';

describe('toast-container', () => {
  it.skip('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<toast-container></toast-container>');

    const element = await page.find('toast-container');
    expect(element).toHaveClass('hydrated');
  });
});
