import { newE2EPage } from '@stencil/core/testing';

describe('bds-radio e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-radio 
          value="test-value"
          name="test-name"
          label="Test Label"
          refer="test-refer"
          checked="true"
          data-test="radio-test"
        ></bds-radio>
      `,
    });
  });

  describe('Properties', () => {
    it('should render radio component', async () => {
      const radio = await page.find('bds-radio');
      expect(radio).toBeTruthy();
    });

    it('should accept value property', async () => {
      const radio = await page.find('bds-radio');
      const value = await radio.getProperty('value');
      expect(value).toBe('test-value');
    });

    it('should accept name property', async () => {
      const radio = await page.find('bds-radio');
      const name = await radio.getProperty('name');
      expect(name).toBe('test-name');
    });

    it('should accept label property', async () => {
      const radio = await page.find('bds-radio');
      const label = await radio.getProperty('label');
      expect(label).toBe('Test Label');
    });

    it('should accept checked property', async () => {
      const radio = await page.find('bds-radio');
      const checked = await radio.getProperty('checked');
      expect(checked).toBe(true);
    });

    it('should accept refer property', async () => {
      const radio = await page.find('bds-radio');
      const refer = await radio.getProperty('refer');
      expect(refer).toBe('test-refer');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const radio = await page.find('bds-radio');
      expect(radio.shadowRoot).toBeTruthy();
    });

    it('should render input element', async () => {
      const input = await page.find('bds-radio >>> input[type="radio"]');
      expect(input).toBeTruthy();
    });

    it('should render label when provided', async () => {
      const label = await page.find('bds-radio >>> label');
      expect(label).toBeTruthy();
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-radio value="default"></bds-radio>`,
      });
      
      const radio = await page.find('bds-radio');
      const checked = await radio.getProperty('checked');
      const disabled = await radio.getProperty('disabled');
      
      expect(checked).toBe(false);
      expect(disabled).toBe(false);
    });
  });
});