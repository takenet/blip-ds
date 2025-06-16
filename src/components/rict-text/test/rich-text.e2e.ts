import { newE2EPage } from '@stencil/core/testing';

describe('bds-rich-text e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-rich-text 
          position-bar="top"
          language="pt_BR"
          data-test="rich-text-test"
        ></bds-rich-text>
      `,
    });
  });

  describe('Properties', () => {
    it('should render rich text component', async () => {
      const richText = await page.find('bds-rich-text');
      expect(richText).toBeTruthy();
    });

    it('should accept positionBar property', async () => {
      const richText = await page.find('bds-rich-text');
      const positionBar = await richText.getProperty('positionBar');
      expect(positionBar).toBe('top');
    });

    it('should accept language property', async () => {
      const richText = await page.find('bds-rich-text');
      const language = await richText.getProperty('language');
      expect(language).toBe('pt_BR');
    });

    it('should accept dataTest property', async () => {
      const richText = await page.find('bds-rich-text');
      const dataTest = await richText.getProperty('dataTest');
      expect(dataTest).toBe('rich-text-test');
    });
  });

  describe('Structure', () => {
    it('should render component without shadow DOM', async () => {
      const richText = await page.find('bds-rich-text');
      expect(richText.shadowRoot).toBeNull();
    });
  });

  describe('Property Changes', () => {
    it('should update language', async () => {
      const richText = await page.find('bds-rich-text');
      await richText.setProperty('language', 'en_US');
      await page.waitForChanges();
      
      const language = await richText.getProperty('language');
      expect(language).toBe('en_US');
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-rich-text></bds-rich-text>`,
      });
      
      const richText = await page.find('bds-rich-text');
      const positionBar = await richText.getProperty('positionBar');
      const language = await richText.getProperty('language');
      
      expect(positionBar).toBe('top');
      expect(language).toBe('pt_BR');
    });

    it('should handle null dataTest', async () => {
      const page = await newE2EPage({
        html: `<bds-rich-text></bds-rich-text>`,
      });
      
      const richText = await page.find('bds-rich-text');
      const dataTest = await richText.getProperty('dataTest');
      expect(dataTest).toBeNull();
    });
  });
});