import { newE2EPage } from '@stencil/core/testing';

describe('bds-select-option e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-select-option 
          value="test-value"
          selected="true"
          disabled="false"
        >
          Option Text
        </bds-select-option>
      `,
    });
  });

  describe('Properties', () => {
    it('should render select option component', async () => {
      const selectOption = await page.find('bds-select-option');
      expect(selectOption).toBeTruthy();
    });

    it('should accept value property', async () => {
      const selectOption = await page.find('bds-select-option');
      const value = await selectOption.getProperty('value');
      expect(value).toBe('test-value');
    });

    it('should accept selected property', async () => {
      const selectOption = await page.find('bds-select-option');
      const selected = await selectOption.getProperty('selected');
      expect(selected).toBe(true);
    });

    it('should accept disabled property', async () => {
      const selectOption = await page.find('bds-select-option');
      const disabled = await selectOption.getProperty('disabled');
      expect(disabled).toBe(false);
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const selectOption = await page.find('bds-select-option');
      expect(selectOption.shadowRoot).toBeTruthy();
    });

    it('should render slot content', async () => {
      const content = await page.evaluate(() => {
        const selectOption = document.querySelector('bds-select-option');
        return selectOption.textContent;
      });
      expect(content.trim()).toBe('Option Text');
    });
  });

  describe('Property Changes', () => {
    it('should update selected state', async () => {
      const selectOption = await page.find('bds-select-option');
      await selectOption.setProperty('selected', false);
      await page.waitForChanges();
      
      const selected = await selectOption.getProperty('selected');
      expect(selected).toBe(false);
    });

    it('should update disabled state', async () => {
      const selectOption = await page.find('bds-select-option');
      await selectOption.setProperty('disabled', true);
      await page.waitForChanges();
      
      const disabled = await selectOption.getProperty('disabled');
      expect(disabled).toBe(true);
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-select-option value="default">Default Option</bds-select-option>`,
      });
      
      const selectOption = await page.find('bds-select-option');
      const selected = await selectOption.getProperty('selected');
      const disabled = await selectOption.getProperty('disabled');
      
      expect(selected).toBe(false);
      expect(disabled).toBe(false);
    });
  });
});