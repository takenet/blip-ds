import { newE2EPage } from '@stencil/core/testing';

describe('bds-input-chips', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-input-chips></bds-input-chips>');

    const element = await page.find('bds-input-chips');
    expect(element).toHaveClass('hydrated');
  });
});
