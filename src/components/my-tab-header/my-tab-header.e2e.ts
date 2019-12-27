import { newE2EPage } from '@stencil/core/testing';

describe('my-teste', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-tab-header></my-tab-header>');

    const element = await page.find('my-tab-header');
    expect(element).toHaveClass('hydrated');
  });
});
