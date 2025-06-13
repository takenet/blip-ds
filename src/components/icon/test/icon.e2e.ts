import { newE2EPage } from '@stencil/core/testing';

describe('bds-icon e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-icon name="edit" size="medium" theme="outline"></bds-icon>`,
    });
  });

  describe('Properties', () => {
    it('should render icon component', async () => {
      const icon = await page.find('bds-icon');
      expect(icon).toBeTruthy();
    });

    it('should render with correct name', async () => {
      const icon = await page.find('bds-icon');
      const name = await icon.getProperty('name');
      expect(name).toBe('edit');
    });

    it('should render with correct size', async () => {
      const icon = await page.find('bds-icon');
      const size = await icon.getProperty('size');
      expect(size).toBe('medium');
    });

    it('should render with correct theme', async () => {
      const icon = await page.find('bds-icon');
      const theme = await icon.getProperty('theme');
      expect(theme).toBe('outline');
    });

    it('should handle different sizes', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('size', 'large');
      await page.waitForChanges();

      const size = await icon.getProperty('size');
      expect(size).toBe('large');
    });

    it('should handle different themes', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('theme', 'solid');
      await page.waitForChanges();

      const theme = await icon.getProperty('theme');
      expect(theme).toBe('solid');
    });

    it('should handle emoji type', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('type', 'emoji');
      await page.waitForChanges();

      const type = await icon.getProperty('type');
      expect(type).toBe('emoji');
    });

    it('should handle logo type', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('type', 'logo');
      await page.waitForChanges();

      const type = await icon.getProperty('type');
      expect(type).toBe('logo');
    });
  });

  describe('Structure', () => {
    it('should render with proper role', async () => {
      const icon = await page.find('bds-icon');
      const role = await icon.getAttribute('role');
      expect(role).toBe('img');
    });

    it('should render inner content container', async () => {
      await page.waitForChanges();
      await page.waitForTimeout(100);
      
      const innerDiv = await page.find('bds-icon >>> .icon-inner');
      expect(innerDiv).toBeTruthy();
    });

    it('should have proper CSS classes', async () => {
      const icon = await page.find('bds-icon');
      const className = await icon.getProperty('className');
      expect(className).toContain('bds-icon');
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria-label', async () => {
      const icon = await page.find('bds-icon');
      await page.waitForChanges();
      
      const ariaLabel = await icon.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    });

    it('should have role img for accessibility', async () => {
      const icon = await page.find('bds-icon');
      const role = await icon.getAttribute('role');
      expect(role).toBe('img');
    });

    it('should be accessible', async () => {
      const icon = await page.find('bds-icon');
      expect(icon).toBeTruthy();
      
      const tagName = await icon.getProperty('tagName');
      expect(tagName).toBe('BDS-ICON');
    });
  });

  describe('Lazy Loading', () => {
    it('should handle lazy loading property', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('lazy', true);
      await page.waitForChanges();

      const lazy = await icon.getProperty('lazy');
      expect(lazy).toBe(true);
    });
  });

  describe('Color and Styling', () => {
    it('should accept color property', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('color', '#ff0000');
      await page.waitForChanges();

      const color = await icon.getProperty('color');
      expect(color).toBe('#ff0000');
    });

    it('should handle data-test attribute', async () => {
      const icon = await page.find('bds-icon');
      await icon.setProperty('dataTest', 'test-icon');
      await page.waitForChanges();

      const dataTest = await icon.getProperty('dataTest');
      expect(dataTest).toBe('test-icon');
    });
  });
});