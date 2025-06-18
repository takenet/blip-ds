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

  describe('Search functionality', () => {
    it('should have enableSearch prop defaulting to false', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number></bds-input-phone-number>`,
      });
      
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const enableSearch = await inputPhoneNumber.getProperty('enableSearch');
      expect(enableSearch).toBe(false);
    });

    it('should have searchPlaceholder prop with default value', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number enable-search="true"></bds-input-phone-number>`,
      });
      
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const searchPlaceholder = await inputPhoneNumber.getProperty('searchPlaceholder');
      expect(searchPlaceholder).toBe('Search countries...');
    });

    it('should render search input when enableSearch is true', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number enable-search="true"></bds-input-phone-number>`,
      });
      
      // Click to open dropdown
      const flagIcon = await page.find('bds-input-phone-number >>> .input__icon');
      await flagIcon.click();
      await page.waitForChanges();
      
      // Check that search input is rendered
      const searchContainer = await page.find('bds-input-phone-number >>> .select-phone-number__search');
      expect(searchContainer).toBeTruthy();
      
      const searchInput = await page.find('bds-input-phone-number >>> .select-phone-number__search input');
      expect(searchInput).toBeTruthy();
      
      const placeholder = await searchInput.getProperty('placeholder');
      expect(placeholder).toBe('Search countries...');
    });

    it('should update search term when typing in search input', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number enable-search="true"></bds-input-phone-number>`,
      });
      
      // Click to open dropdown
      const flagIcon = await page.find('bds-input-phone-number >>> .input__icon');
      await flagIcon.click();
      await page.waitForChanges();
      
      // Find search input
      const searchInput = await page.find('bds-input-phone-number >>> .select-phone-number__search input');
      expect(searchInput).toBeTruthy();
      
      // Type "br" to filter
      await searchInput.type('br');
      await page.waitForChanges();
      
      // Check that the input value is updated
      const inputValue = await searchInput.getProperty('value');
      expect(inputValue).toBe('br');
    });

    it('should manually trigger search and filter countries', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number enable-search="true"></bds-input-phone-number>`,
      });
      
      // Click to open dropdown
      const flagIcon = await page.find('bds-input-phone-number >>> .input__icon');
      await flagIcon.click();
      await page.waitForChanges();
      
      // Get initial number of options
      const initialOptions = await page.findAll('bds-input-phone-number >>> bds-select-option');
      expect(initialOptions.length).toBeGreaterThan(1);
      
      // Call the filterCountries method directly via evaluate and set searchTerm
      await page.evaluate(() => {
        const component = document.querySelector('bds-input-phone-number') as any;
        if (component && component.filterCountries) {
          component.searchTerm = 'br';  // Set the search term as well
          component.filterCountries('br');
        }
      });
      await page.waitForChanges();
      await page.waitForTimeout(500);
      
      // Check that options are filtered
      const filteredOptions = await page.findAll('bds-input-phone-number >>> bds-select-option');
      expect(filteredOptions.length).toBeLessThan(initialOptions.length);
      expect(filteredOptions.length).toBeGreaterThan(0);
    });
  });

  describe('Initial country selection', () => {
    it('should set initial country by flag name', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number initial-country-flag="united-states-flag"></bds-input-phone-number>`,
      });
      
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const value = await inputPhoneNumber.getProperty('value');
      const selectedCountry = await inputPhoneNumber.callMethod('getSelectedCountry');
      
      expect(selectedCountry).toBe('united-states-flag');
      expect(value).toBe('+1');
    });

    it('should set initial country by ISO code', async () => {
      page = await newE2EPage({
        html: `<bds-input-phone-number initial-iso-code="GB"></bds-input-phone-number>`,
      });
      
      const inputPhoneNumber = await page.find('bds-input-phone-number');
      const value = await inputPhoneNumber.getProperty('value');
      const isoCode = await inputPhoneNumber.callMethod('getIsoCode');
      
      expect(isoCode).toContain('GB');
      expect(value).toBe('+44');
    });
  });
});