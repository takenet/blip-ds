import { newE2EPage } from '@stencil/core/testing';

describe('bds-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip></bds-chip>');

    const element = await page.find('bds-chip');
    expect(element).toHaveClass('hydrated');
  });
});
