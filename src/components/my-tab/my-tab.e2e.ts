import { newE2EPage } from '@stencil/core/testing';

describe('my-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-tab></my-tab>');

    const element = await page.find('my-tab');
    expect(element).toHaveClass('hydrated');
  });
});
