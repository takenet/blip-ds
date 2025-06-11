import { newE2EPage } from '@stencil/core/testing';

describe('bds-input-editable e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-editable helper-message="Mensagem de ajuda" value="" data-test="input-editable" dt-button-edit="dt-button-edit" dt-button-confirm="dt-button-confirm"></bds-input-editable>`,
    });
  });

  describe('Properties', () => {
    it('should render input-editable with correct helper message', async () => {
      const inputEditable = await page.find('bds-input-editable');
      const helperMessage = await inputEditable.getAttribute('helper-message');
      expect(helperMessage).toBe('Mensagem de ajuda');
    });
  });

  describe('Interactions', () => {
    it('should allow user to focus the input after clicking edit button', async () => {
      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.focus();
      await page.waitForChanges();

      // Check if the input element exists and is in the DOM
      expect(inputElement).toBeTruthy();
    });

    it('should allow user to type in the input after entering edit mode', async () => {
      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.type('Hello, E2E!');
      await page.waitForChanges();
      
      const value = await inputElement.getProperty('value');
      expect(value).toBe('Hello, E2E!');
    });
  });

  describe('Events', () => {
    it('should emit bdsChange event when typing', async () => {
      const inputEditable = await page.find('bds-input-editable');
      const bdsChangeEvent = await inputEditable.spyOnEvent('bdsChange');

      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInput event when typing', async () => {
      const inputEditable = await page.find('bds-input-editable');
      const bdsInputEvent = await inputEditable.spyOnEvent('bdsInput');

      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should emit bdsFocus event when input is focused', async () => {
      const inputEditable = await page.find('bds-input-editable');
      const bdsFocusEvent = await inputEditable.spyOnEvent('bdsFocus');

      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.click();
      await page.waitForChanges();

      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should emit bdsBlur event when input loses focus', async () => {
      const inputEditable = await page.find('bds-input-editable');
      const bdsBlurEvent = await inputEditable.spyOnEvent('bdsBlur');

      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.type('Cypress');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(bdsBlurEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputEditableSave event when confirm button is clicked', async () => {
      const inputEditable = await page.find('bds-input-editable');
      const inputEditableSaveEvent = await inputEditable.spyOnEvent('bdsInputEditableSave');

      const editButton = await page.find('bds-input-editable >>> [data-test="dt-button-edit"]');
      await editButton.click();
      await page.waitForChanges();

      const inputElement = await page.find('bds-input-editable >>> [data-test="input-editable"]');
      await inputElement.type('Cypress');
      await page.waitForChanges();

      const confirmButton = await page.find('bds-input-editable >>> bds-icon[aria-label="checkball"] >>> [data-test="dt-button-confirm"]');
      await confirmButton.click();
      await page.waitForChanges();

      expect(inputEditableSaveEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-input-editable></bds-input-editable>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-EDITABLE');
    });
  });
});