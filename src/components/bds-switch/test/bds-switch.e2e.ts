import { newE2EPage } from '@stencil/core/testing';

describe('bds-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-switch></bds-switch>');

    const element = await page.find('bds-switch');
    expect(element).toHaveClass('hydrated');
  });
});
