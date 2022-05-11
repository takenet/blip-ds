import { newE2EPage } from '@stencil/core/testing';

describe.skip('bds-input-chips', () => {
  let page;
  let inputRootElement;
  let inputNativeElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-chips></bds-input-chips>`,
    });

    inputRootElement = await page.find('bds-input-chips');
    inputNativeElement = await page.find('bds-input-chips >>> input');
  });

  it('renders', async () => {
    expect(inputRootElement).toHaveClass('hydrated');
    expect(inputNativeElement).toBeTruthy();
  });
});
