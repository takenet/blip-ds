import { newE2EPage } from '@stencil/core/testing';

describe('bds-input-chips', () => {
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

  it('renders without chips', async () => {
    const element = await page.find('bds-chip');
    expect(element).toBeFalsy();
  });

  it('should add chips before fill value and press Enter', async () => {
    await inputNativeElement.press('o');
    await inputNativeElement.press('i');

    await inputRootElement.press('Enter');

    const chip = await page.find('bds-input-chips >>> bds-chip');
    const isChipDeletable = await chip.getProperty('deletable');
    const isChipDanger = await chip.getProperty('danger');

    expect(chip).toBeTruthy();
    expect(isChipDeletable).toBeTruthy();
    expect(isChipDanger).toBeFalsy();
  });

  it('should add chips type email before fill value and press Enter', async () => {
    const page = await newE2EPage({
      html: `<bds-input-chips type="email"></bds-input-chips>`,
    });

    const inputRootElement = await page.find('bds-input-chips');
    const inputNativeElement = await page.find('bds-input-chips >>> input');

    await inputNativeElement.press('o');
    await inputNativeElement.press('i');

    await inputRootElement.press('Enter');

    const chip = await page.find('bds-input-chips >>> bds-chip');
    const isChipDanger = await chip.getProperty('danger');

    expect(chip).toBeTruthy();
    expect(isChipDanger).toBeTruthy();
  });

  it('should add chips type email before fill value and press Enter (writing email)', async () => {
    const page = await newE2EPage({
      html: `<bds-input-chips type="email"></bds-input-chips>`,
    });

    const inputRootElement = await page.find('bds-input-chips');
    const inputNativeElement = await page.find('bds-input-chips >>> input');

    await inputNativeElement.press('b');
    await inputNativeElement.press('a');
    await inputNativeElement.press('e');
    await inputNativeElement.press('a');
    await inputNativeElement.press('@');
    await inputNativeElement.press('n');
    await inputNativeElement.press('e');
    await inputNativeElement.press('t');
    await inputNativeElement.press('.');
    await inputNativeElement.press('c');
    await inputNativeElement.press('o');
    await inputNativeElement.press('m');

    await inputRootElement.press('Enter');

    const chip = await page.find('bds-input-chips >>> bds-chip');
    const isChipDanger = await chip.getProperty('danger');

    expect(chip).toBeTruthy();
    expect(isChipDanger).toBeFalsy();
  });

  it('should called envet before add chips', async () => {
    const page = await newE2EPage({
      html: `<bds-input-chips type="email"></bds-input-chips>`,
    });

    const spy = await page.spyOnEvent('bdsChange');

    const inputRootElement = await page.find('bds-input-chips');
    const inputNativeElement = await page.find('bds-input-chips >>> input');

    await inputNativeElement.press('o');
    await inputNativeElement.press('i');

    await inputRootElement.press('Enter');

    expect(spy).toHaveReceivedEvent();
  });
});
