import { newE2EPage } from '@stencil/core/testing';

describe('bds-select e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-select placeholder="Select an option">
          <bds-select-option value="option1">Option 1</bds-select-option>
          <bds-select-option value="option2">Option 2</bds-select-option>
        </bds-select>
      `,
    });
  });

  describe('Properties', () => {
    it('should render select component', async () => {
      const select = await page.find('bds-select');
      expect(select).toBeTruthy();
    });

    it('should accept placeholder property', async () => {
      const select = await page.find('bds-select');
      const placeholder = await select.getProperty('placeholder');
      expect(placeholder).toBe('Select an option');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const select = await page.find('bds-select');
      expect(select.shadowRoot).toBeTruthy();
    });

    it('should render select options as children', async () => {
      const options = await page.findAll('bds-select-option');
      expect(options.length).toBe(2);
    });

    it('should contain options with correct values', async () => {
      const option1 = await page.find('bds-select-option[value="option1"]');
      const option2 = await page.find('bds-select-option[value="option2"]');
      
      expect(option1).toBeTruthy();
      expect(option2).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update placeholder', async () => {
      const select = await page.find('bds-select');
      await select.setProperty('placeholder', 'New placeholder');
      await page.waitForChanges();
      
      const placeholder = await select.getProperty('placeholder');
      expect(placeholder).toBe('New placeholder');
    });
  });

  describe('Default Properties', () => {
    it('should handle no placeholder', async () => {
      const page = await newE2EPage({
        html: `
          <bds-select>
            <bds-select-option value="test">Test</bds-select-option>
          </bds-select>
        `,
      });
      
      const select = await page.find('bds-select');
      expect(select).toBeTruthy();
    });
  });

  describe('Disabled State', () => {
    it('should handle disabled state', async () => {
      const page = await newE2EPage({
        html: `<bds-select disabled="true"></bds-select>`,
      });
      
      const select = await page.find('bds-select');
      const disabled = await select.getProperty('disabled');
      expect(disabled).toBe(true);
    });
  });
});