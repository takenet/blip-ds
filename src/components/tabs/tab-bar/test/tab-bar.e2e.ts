import { newE2EPage } from '@stencil/core/testing';

describe('tab-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tab-bar></tab-bar>');

    const element = await page.find('tab-bar');
    expect(element).toHaveClass('hydrated');
  });
});
