import { newE2EPage } from '@stencil/core/testing';

describe('bds-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-toast></bds-toast>');

    const element = await page.find('bds-toast');
    expect(element).toHaveClass('hydrated');
  });
});
