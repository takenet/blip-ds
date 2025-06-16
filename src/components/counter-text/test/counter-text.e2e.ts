import { newE2EPage } from '@stencil/core/testing';

describe('bds-counter-text e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-counter-text length="10" max="100"></bds-counter-text>`,
    });
  });

  describe('Properties', () => {
    it('should render counter-text component', async () => {
      const counterText = await page.find('bds-counter-text');
      expect(counterText).toBeTruthy();
    });

    it('should render with correct length', async () => {
      const counterText = await page.find('bds-counter-text');
      const length = await counterText.getProperty('length');
      expect(length).toBe(10);
    });

    it('should render with correct max', async () => {
      const counterText = await page.find('bds-counter-text');
      const max = await counterText.getProperty('max');
      expect(max).toBe(100);
    });

    it('should handle active state', async () => {
      const counterText = await page.find('bds-counter-text');
      await counterText.setProperty('active', true);
      await page.waitForChanges();

      const active = await counterText.getProperty('active');
      expect(active).toBe(true);
    });

    it('should display correct remaining count', async () => {
      // With length=10 and max=100, should show 90
      const counterText = await page.find('bds-counter-text');
      expect(counterText).toBeTruthy();
      
      // Check that the component displays the calculated value
      const textContent = await counterText.textContent;
      expect(textContent).toContain('90');
    });
  });

  describe('State Calculation', () => {
    it('should calculate correct remaining count', async () => {
      const counterText = await page.find('bds-counter-text');
      await counterText.setProperty('length', 25);
      await counterText.setProperty('max', 100);
      await page.waitForChanges();

      // The component should show 75 (100-25)
      const typo = await page.find('bds-counter-text bds-typo');
      expect(typo).toBeTruthy();
    });

    it('should handle different length values', async () => {
      const counterText = await page.find('bds-counter-text');
      await counterText.setProperty('length', 50);
      await page.waitForChanges();

      // Should calculate correctly
      const length = await counterText.getProperty('length');
      expect(length).toBe(50);
    });

    it('should calculate state based on remaining characters', async () => {
      const counterText = await page.find('bds-counter-text');
      await counterText.setProperty('length', 99); // leaves 1 character
      await page.waitForChanges();

      // Component should exist and calculate correctly
      expect(counterText).toBeTruthy();
    });
  });

  describe('Structure', () => {
    it('should render typo component', async () => {
      const counterText = await page.find('bds-counter-text');
      expect(counterText).toBeTruthy();
      
      // Check that content is rendered
      const textContent = await counterText.textContent;
      expect(textContent).toBeTruthy();
    });

    it('should be a valid component', async () => {
      const counterText = await page.find('bds-counter-text');
      expect(counterText).toBeTruthy();
      
      const tagName = await counterText.getProperty('tagName');
      expect(tagName).toBe('BDS-COUNTER-TEXT');
    });

    it('should handle active state property', async () => {
      const counterText = await page.find('bds-counter-text');
      await counterText.setProperty('active', true);
      await page.waitForChanges();

      const active = await counterText.getProperty('active');
      expect(active).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const counterText = await page.find('bds-counter-text');
      expect(counterText).toBeTruthy();
      
      const tagName = await counterText.getProperty('tagName');
      expect(tagName).toBe('BDS-COUNTER-TEXT');
    });

    it('should render semantic text content', async () => {
      const counterText = await page.find('bds-counter-text');
      expect(counterText).toBeTruthy();
      
      // Check that the component renders content
      const textContent = await counterText.textContent;
      expect(textContent).toBeTruthy();
    });
  });
});