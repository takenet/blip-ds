import { newE2EPage } from '@stencil/core/testing';

describe('bds-divider e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-divider orientation="horizontal" style-type="solid" color="divider-1"></bds-divider>`,
    });
  });

  describe('Properties', () => {
    it('should render divider component', async () => {
      const divider = await page.find('bds-divider');
      expect(divider).toBeTruthy();
    });

    it('should render with correct orientation', async () => {
      const divider = await page.find('bds-divider');
      const orientation = await divider.getProperty('orientation');
      expect(orientation).toBe('horizontal');
    });

    it('should render with correct style type', async () => {
      const divider = await page.find('bds-divider');
      const styleType = await divider.getProperty('styleType');
      expect(styleType).toBe('solid');
    });

    it('should render with correct color', async () => {
      const divider = await page.find('bds-divider');
      const color = await divider.getProperty('color');
      expect(color).toBe('divider-1');
    });

    it('should handle vertical orientation', async () => {
      const divider = await page.find('bds-divider');
      await divider.setProperty('orientation', 'vertical');
      await page.waitForChanges();

      const orientation = await divider.getProperty('orientation');
      expect(orientation).toBe('vertical');
    });

    it('should handle dotted style', async () => {
      const divider = await page.find('bds-divider');
      await divider.setProperty('styleType', 'dotted');
      await page.waitForChanges();

      const styleType = await divider.getProperty('styleType');
      expect(styleType).toBe('dotted');
    });

    it('should handle dashed style', async () => {
      const divider = await page.find('bds-divider');
      await divider.setProperty('styleType', 'dashed');
      await page.waitForChanges();

      const styleType = await divider.getProperty('styleType');
      expect(styleType).toBe('dashed');
    });

    it('should handle different colors', async () => {
      const divider = await page.find('bds-divider');
      await divider.setProperty('color', 'divider-2');
      await page.waitForChanges();

      const color = await divider.getProperty('color');
      expect(color).toBe('divider-2');
    });
  });

  describe('Structure', () => {
    it('should render hr element', async () => {
      const hr = await page.find('bds-divider >>> hr');
      expect(hr).toBeTruthy();
    });

    it('should apply correct CSS classes to hr element', async () => {
      const hr = await page.find('bds-divider >>> hr');
      const className = await hr.getProperty('className');
      expect(className).toContain('horizontal');
      expect(className).toContain('solid');
      expect(className).toContain('color-divider-1');
    });

    it('should update hr classes when properties change', async () => {
      const divider = await page.find('bds-divider');
      await divider.setProperty('orientation', 'vertical');
      await divider.setProperty('styleType', 'dotted');
      await divider.setProperty('color', 'divider-3');
      await page.waitForChanges();

      const hr = await page.find('bds-divider >>> hr');
      const className = await hr.getProperty('className');
      expect(className).toContain('vertical');
      expect(className).toContain('dotted');
      expect(className).toContain('color-divider-3');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const divider = await page.find('bds-divider');
      expect(divider).toBeTruthy();
      
      const tagName = await divider.getProperty('tagName');
      expect(tagName).toBe('BDS-DIVIDER');
    });

    it('should render semantic hr element', async () => {
      const hr = await page.find('bds-divider >>> hr');
      expect(hr).toBeTruthy();
      
      const tagName = await hr.getProperty('tagName');
      expect(tagName).toBe('HR');
    });
  });
});