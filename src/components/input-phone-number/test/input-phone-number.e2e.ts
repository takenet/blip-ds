import { newE2EPage } from '@stencil/core/testing';

describe('bds-input-phone-number e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-phone-number label="Label" helper-message="Mensagem de ajuda" data-test="bds-input-phone-number"></bds-input-phone-number>`,
    });
  });

  describe('Properties', () => {
    it('should render input-phone-number with correct label', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const label = await inputPhoneNumber.getAttribute('label');
      expect(label).toBe('Label');
    });

    it('should render input-phone-number with correct helper message', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const helperMessage = await inputPhoneNumber.getAttribute('helper-message');
      expect(helperMessage).toBe('Mensagem de ajuda');
    });
  });

  describe('Interactions', () => {
    it('should allow user to focus the input-phone-number', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      await inputPhoneNumber.click();
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-PHONE-NUMBER');
    });

    it('should allow user to type phone numbers in the input', async () => {
      const inputElement = await page.find('bds-input-phone-number >>> [data-test="bds-input-phone-number"]');
      
      await inputElement.type('5555-5555');
      await page.waitForChanges();
      
      const value = await inputElement.getProperty('value');
      expect(value).toBe('5555-5555');
    });
  });

  describe('Events', () => {
    it('should emit bdsPhoneNumberChange event when typing', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const bdsChangeEvent = await inputPhoneNumber.spyOnEvent('bdsPhoneNumberChange');
      const inputElement = await page.find('bds-input-phone-number >>> [data-test="bds-input-phone-number"]');

      await inputElement.type('1234-1234');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInput event when typing', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const bdsInputEvent = await inputPhoneNumber.spyOnEvent('bdsInput');
      const inputElement = await page.find('bds-input-phone-number >>> [data-test="bds-input-phone-number"]');

      await inputElement.type('1234-1234');
      await page.waitForChanges();

      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should emit bdsFocus event when focused', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const bdsFocusEvent = await inputPhoneNumber.spyOnEvent('bdsFocus');

      await inputPhoneNumber.click();
      await page.waitForChanges();

      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should emit bdsBlur event when blurred', async () => {
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const bdsBlurEvent = await inputPhoneNumber.spyOnEvent('bdsBlur');

      await inputPhoneNumber.click();
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(bdsBlurEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-input-phone-number></bds-input-phone-number>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-PHONE-NUMBER');
    });
  });
});