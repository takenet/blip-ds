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

    it('should expose part attributes for style customization', async () => {
      const preview = await page.find('bds-rich-text .preview');
      const editor = await page.find('bds-rich-text .editor-uai-design-system');
      const toolbar = await page.find('bds-rich-text .format-buttons');
      const toolbarHeader = await page.find('bds-rich-text .accordion-header');
      const toolbarButtons = await page.find('bds-rich-text .buttons-list');
      const accordionButton = await page.find('bds-rich-text #buttonAccordion');

      expect(preview.getAttribute('part')).toBe('preview');
      expect(editor.getAttribute('part')).toBe('editor');
      expect(toolbar.getAttribute('part')).toBe('toolbar');
      expect(toolbarHeader.getAttribute('part')).toBe('toolbar-header');
      expect(toolbarButtons.getAttribute('part')).toBe('toolbar-buttons');
      expect(accordionButton.getAttribute('part')).toBe('toolbar-accordion-button');
    });

    it('should allow styling toolbar via exposed part attribute', async () => {
      await page.evaluate(() => {
        const style = document.createElement('style');
        style.innerHTML = "bds-rich-text [part='toolbar'] { background-color: rgb(255, 0, 0) !important; }";
        document.head.appendChild(style);
      });
      await page.waitForChanges();

      const toolbar = await page.find('bds-rich-text .format-buttons');
      const toolbarStyle = await toolbar.getComputedStyle();

      expect(toolbarStyle.backgroundColor).toBe('rgb(255, 0, 0)');
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