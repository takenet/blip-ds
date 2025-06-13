import { newE2EPage } from '@stencil/core/testing';

describe('bds-paper e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-paper elevation="static" bg-color="surface-1">Content</bds-paper>`,
    });
  });

  describe('Properties', () => {
    it('should render paper component', async () => {
      const paper = await page.find('bds-paper');
      expect(paper).toBeTruthy();
    });

    it('should render with correct elevation', async () => {
      const paper = await page.find('bds-paper');
      const elevation = await paper.getProperty('elevation');
      expect(elevation).toBe('static');
    });

    it('should render with correct background color', async () => {
      const paper = await page.find('bds-paper');
      const bgColor = await paper.getProperty('bgColor');
      expect(bgColor).toBe('surface-1');
    });

    it('should handle border property', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('border', true);
      await page.waitForChanges();

      const border = await paper.getProperty('border');
      expect(border).toBe(true);
    });

    it('should handle height property', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('height', '200px');
      await page.waitForChanges();

      const height = await paper.getProperty('height');
      expect(height).toBe('200px');
    });

    it('should handle width property', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('width', '300px');
      await page.waitForChanges();

      const width = await paper.getProperty('width');
      expect(width).toBe('300px');
    });

    it('should handle border color property', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('borderColor', 'primary');
      await page.waitForChanges();

      const borderColor = await paper.getProperty('borderColor');
      expect(borderColor).toBe('primary');
    });

    it('should handle data test property', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('dataTest', 'test-paper');
      await page.waitForChanges();

      const dataTest = await paper.getProperty('dataTest');
      expect(dataTest).toBe('test-paper');
    });
  });

  describe('Structure', () => {
    it('should render content slot', async () => {
      const slot = await page.find('bds-paper >>> slot');
      expect(slot).toBeTruthy();
    });

    it('should render display container', async () => {
      const displayDiv = await page.find('bds-paper >>> .paper__display');
      expect(displayDiv).toBeTruthy();
    });

    it('should apply style attributes when dimensions are set', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('height', '100px');
      await paper.setProperty('width', '200px');
      await page.waitForChanges();

      // Check properties are set
      const height = await paper.getProperty('height');
      const width = await paper.getProperty('width');
      expect(height).toBe('100px');
      expect(width).toBe('200px');
    });

    it('should apply CSS classes based on properties', async () => {
      const paper = await page.find('bds-paper');
      const className = await paper.getProperty('className');
      expect(className).toContain('bg-surface-1');
    });

    it('should apply border class when border is true', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('border', true);
      await page.waitForChanges();

      const className = await paper.getProperty('className');
      expect(className).toContain('border');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const paper = await page.find('bds-paper');
      expect(paper).toBeTruthy();
      
      const tagName = await paper.getProperty('tagName');
      expect(tagName).toBe('BDS-PAPER');
    });

    it('should render content in slot', async () => {
      const paper = await page.find('bds-paper');
      const textContent = await paper.textContent;
      expect(textContent).toContain('Content');
    });

    it('should apply data-test attribute correctly', async () => {
      const paper = await page.find('bds-paper');
      await paper.setProperty('dataTest', 'accessibility-test');
      await page.waitForChanges();

      const displayDiv = await page.find('bds-paper >>> .paper__display');
      const dataTest = await displayDiv.getAttribute('data-test');
      expect(dataTest).toBe('accessibility-test');
    });
  });
});