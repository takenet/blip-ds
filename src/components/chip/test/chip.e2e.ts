import { newE2EPage } from '@stencil/core/testing';

describe('bds-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip></bds-chip>');

    const element = await page.find('bds-chip');
    const inputRootElement = await page.find('.chip--default');

    expect(element).toHaveClass('hydrated');
    expect(inputRootElement).toBeTruthy();
  });

  it('should render with delete option', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip deletable></bds-chip>');
    const inputRootElement = await page.find('bds-chip >>> .chip__delete');

    expect(inputRootElement).toBeTruthy();
  });

  it('should render with click class', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip clickable></bds-chip>');

    const inputRootElement = await page.find('.chip--click');

    expect(inputRootElement).toBeTruthy();
  });

  it('should render with disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip disabled></bds-chip>');

    const inputRootElement = await page.find('.chip--default');

    expect(inputRootElement).toBeTruthy();
  });

  it('should render with primary variant', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip variant="primary"></bds-chip>');

    const inputRootElement = await page.find('.chip--primary');

    expect(inputRootElement).toBeTruthy();
  });

  it('should render with standard size', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip></bds-chip>');

    const inputRootElement = await page.find('.chip--standard');

    expect(inputRootElement).toBeTruthy();
  });

  it('should render with tall size', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip size="tall"></bds-chip>');

    const inputRootElement = await page.find('.chip--tall');

    expect(inputRootElement).toBeTruthy();
  });

  it('should emit the bdsDelete event', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-chip deletable></bds-chip>');

    const spy = await page.spyOnEvent('bdsDelete');

    const inputRootElement = await page.find('bds-chip >>> .chip__delete');
    await inputRootElement.click();

    expect(spy).toHaveReceivedEvent();
  });
});
