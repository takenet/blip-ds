import { newE2EPage } from '@stencil/core/testing';

describe('input-editable', () => {
  let page;
  let typo;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-editable
        value="Test"
        ></bds-input-editable>`,
    });
    typo = await page.find('bds-input-editable >>> bds-typo');
  });

  const clickOnEditIcon = async (): Promise<void> => {
    const editIcon = await page.find('bds-input-editable >>> .input__editable--static__icon');
    editIcon.click();
    await page.waitForChanges();
  };

  const clickOnCancelIcon = async (): Promise<void> => {
    const errorIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--error');
    errorIcon.click();
    await page.waitForChanges();
  };

  const clickOnConfirmIcon = async (): Promise<void> => {
    const checkballIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--checkball');
    checkballIcon.click();
    await page.waitForChanges();
  };

  it('sould hide edit icon when click on edit icon', async () => {
    await clickOnEditIcon();
    const element = await page.find('bds-input-editable >>> .input__editable--static__icon');
    expect(element).toBeNull();
  });

  it('sould show input and icons when click in edit icon', async () => {
    await clickOnEditIcon();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    const errorIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--error');
    const checkballIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--checkball');
    expect(inputElement).toBeDefined();
    expect(errorIcon).toBeDefined();
    expect(checkballIcon).toBeDefined();
  });

  it('sould cancel edit when click on cancel icon', async () => {
    await clickOnEditIcon();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', 'new value');
    await clickOnCancelIcon();
    expect(typo.innerText).toBe('Test');
  });

  it('sould confirm edit when click on confirm icon', async () => {
    await clickOnEditIcon();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', 'new value');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    const typo = await page.find('bds-input-editable >>> bds-typo');
    expect(typo.innerText).toBe('new value');
  });

  it('sould emit event bdsInputEditableSave edit when click on confirm icon', async () => {
    const spy = await page.spyOnEvent('bdsInputEditableSave');
    await clickOnEditIcon();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', 'new value');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    expect(spy).toHaveReceivedEventDetail({ oldValue: 'Test', value: 'new value' });
  });

  it('sould enter in danger state when click on confirm icon with empty input', async () => {
    const spy = await page.spyOnEvent('bdsInputEditableSave');
    await clickOnEditIcon();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', '');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    expect(spy).not.toHaveReceivedEvent();
  });
});
