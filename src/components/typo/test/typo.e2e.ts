import { newE2EPage } from '@stencil/core/testing';

describe('bds-typo e2e tests', () => {
  describe('Properties', () => {
    it('should render typo component', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      expect(typo).toBeTruthy();
    });

    it('should render with correct variant', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      const variant = await typo.getProperty('variant');
      expect(variant).toBe('fs-16');
    });

    it('should render with correct tag', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      const tag = await typo.getProperty('tag');
      expect(tag).toBe('p');
    });

    it('should handle bold property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('bold', 'semi-bold');
      await page.waitForChanges();

      const bold = await typo.getProperty('bold');
      expect(bold).toBe('semi-bold');
    });

    it('should handle italic property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('italic', true);
      await page.waitForChanges();

      const italic = await typo.getProperty('italic');
      expect(italic).toBe(true);
    });

    it('should handle noWrap property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('noWrap', true);
      await page.waitForChanges();

      const noWrap = await typo.getProperty('noWrap');
      expect(noWrap).toBe(true);
    });

    it('should handle paragraph property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('paragraph', true);
      await page.waitForChanges();

      const paragraph = await typo.getProperty('paragraph');
      expect(paragraph).toBe(true);
    });

    it('should handle margin property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('margin', false);
      await page.waitForChanges();

      const margin = await typo.getProperty('margin');
      expect(margin).toBe(false);
    });

    it('should handle lineHeight property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('lineHeight', 'simple');
      await page.waitForChanges();

      const lineHeight = await typo.getProperty('lineHeight');
      expect(lineHeight).toBe('simple');
    });

    it('should handle dataTest property', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('dataTest', 'test-typo');
      await page.waitForChanges();

      const dataTest = await typo.getProperty('dataTest');
      expect(dataTest).toBe('test-typo');
    });
  });

  describe('Structure', () => {
    it('should render correct HTML tag', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const element = await page.find('bds-typo >>> p');
      expect(element).toBeTruthy();
    });

    it('should render different tags when tag property changes', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('tag', 'h1');
      await page.waitForChanges();

      const h1Element = await page.find('bds-typo >>> h1');
      expect(h1Element).toBeTruthy();
    });

    it('should render slot content', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const slot = await page.find('bds-typo >>> slot');
      expect(slot).toBeTruthy();
    });

    it('should apply correct CSS classes', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const element = await page.find('bds-typo >>> p');
      const className = await element.getProperty('className');
      expect(className).toContain('typo');
      expect(className).toContain('typo__variant--fs-16');
    });

    it('should apply italic class when italic is true', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('italic', true);
      await page.waitForChanges();

      const element = await page.find('bds-typo >>> p');
      const className = await element.getProperty('className');
      expect(className).toContain('typo--italic');
    });

    it('should apply bold class when bold is set', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('bold', 'bold');
      await page.waitForChanges();

      const element = await page.find('bds-typo >>> p');
      const className = await element.getProperty('className');
      expect(className).toContain('typo__bold--bold');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      expect(typo).toBeTruthy();
      
      const tagName = await typo.getProperty('tagName');
      expect(tagName).toBe('BDS-TYPO');
    });

    it('should render semantic HTML elements', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="h2">Sample Text</bds-typo>`,
      });
      
      const h2Element = await page.find('bds-typo >>> h2');
      expect(h2Element).toBeTruthy();
    });

    it('should render text content in slot', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      const textContent = await typo.textContent;
      expect(textContent).toContain('Sample Text');
    });

    it('should apply data-test attribute correctly', async () => {
      const page = await newE2EPage({
        html: `<bds-typo variant="fs-16" tag="p" data-test="accessibility-test">Sample Text</bds-typo>`,
      });
      
      const typo = await page.find('bds-typo');
      await typo.setProperty('dataTest', 'accessibility-test');
      await page.waitForChanges();

      const element = await page.find('bds-typo >>> p');
      const dataTest = await element.getAttribute('data-test');
      expect(dataTest).toBe('accessibility-test');
    });
  });
});