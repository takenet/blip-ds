import { newE2EPage } from '@stencil/core/testing';

describe('input-editable', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-editable
        minlength="3"
        value="Test"
        ></bds-input-editable>`,
    });
  });

  const clickOnEditRegion = async (): Promise<void> => {
    const divEdit = await page.find('bds-input-editable >>> .input__editable--static');
    divEdit.click();
    await page.waitForChanges();
  };

  it('should hide edit icon when click on edit icon', async () => {
    await clickOnEditRegion();
    const element = await page.find('bds-input-editable >>> .input__editable--static');
    expect(element).toHaveClass('input__editable--hidden');
  });
});
