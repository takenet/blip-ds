import { newE2EPage } from '@stencil/core/testing';

describe('bds-upload e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-upload 
          title-name="Upload Files"
          subtitle-name="Drag and drop files here"
          language="pt_BR"
        ></bds-upload>
      `,
    });
  });

  describe('Properties', () => {
    it('should render upload component', async () => {
      const upload = await page.find('bds-upload');
      expect(upload).toBeTruthy();
    });

    it('should accept titleName property', async () => {
      const upload = await page.find('bds-upload');
      const titleName = await upload.getProperty('titleName');
      expect(titleName).toBe('Upload Files');
    });

    it('should accept language property', async () => {
      const upload = await page.find('bds-upload');
      const language = await upload.getProperty('language');
      expect(language).toBe('pt_BR');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const upload = await page.find('bds-upload');
      expect(upload.shadowRoot).toBeTruthy();
    });

    it('should render input element', async () => {
      const input = await page.find('bds-upload >>> input[type="file"]');
      expect(input).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update titleName', async () => {
      const upload = await page.find('bds-upload');
      await upload.setProperty('titleName', 'New Title');
      await page.waitForChanges();
      
      const titleName = await upload.getProperty('titleName');
      expect(titleName).toBe('New Title');
    });

    it('should update language', async () => {
      const upload = await page.find('bds-upload');
      await upload.setProperty('language', 'en_US');
      await page.waitForChanges();
      
      const language = await upload.getProperty('language');
      expect(language).toBe('en_US');
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-upload></bds-upload>`,
      });
      
      const upload = await page.find('bds-upload');
      const language = await upload.getProperty('language');
      expect(language).toBe('pt_BR');
    });
  });

  describe('File Handling', () => {
    it('should handle upload area', async () => {
      const upload = await page.find('bds-upload');
      expect(upload).toBeTruthy();
      
      const input = await page.find('bds-upload >>> input[type="file"]');
      expect(input).toBeTruthy();
    });
  });
});