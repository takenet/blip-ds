import { newE2EPage } from '@stencil/core/testing';

describe('bds-progress-bar e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-progress-bar 
          percent="50"
          size="default"
          color="default"
          text="Loading..."
          data-test="progress-bar-test"
        ></bds-progress-bar>
      `,
    });
  });

  describe('Properties', () => {
    it('should render progress bar component', async () => {
      const progressBar = await page.find('bds-progress-bar');
      expect(progressBar).toBeTruthy();
    });

    it('should accept percent property', async () => {
      const progressBar = await page.find('bds-progress-bar');
      const percent = await progressBar.getProperty('percent');
      expect(percent).toBe(50);
    });

    it('should accept size property', async () => {
      const progressBar = await page.find('bds-progress-bar');
      const size = await progressBar.getProperty('size');
      expect(size).toBe('default');
    });

    it('should accept color property', async () => {
      const progressBar = await page.find('bds-progress-bar');
      const color = await progressBar.getProperty('color');
      expect(color).toBe('default');
    });

    it('should accept text property', async () => {
      const progressBar = await page.find('bds-progress-bar');
      const text = await progressBar.getProperty('text');
      expect(text).toBe('Loading...');
    });

    it('should accept dataTest property', async () => {
      const progressBar = await page.find('bds-progress-bar');
      const dataTest = await progressBar.getProperty('dataTest');
      expect(dataTest).toBe('progress-bar-test');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const progressBar = await page.find('bds-progress-bar');
      expect(progressBar.shadowRoot).toBeTruthy();
    });

    it('should render progress bar container', async () => {
      const container = await page.find('bds-progress-bar >>> .progress_bar');
      expect(container).toBeTruthy();
    });

    it('should apply size class', async () => {
      const container = await page.find('bds-progress-bar >>> .progress_bar');
      const className = await container.getProperty('className');
      expect(className).toContain('size_default');
    });

    it('should apply data-test attribute', async () => {
      const container = await page.find('bds-progress-bar >>> .progress_bar');
      const dataTest = await container.getAttribute('data-test');
      expect(dataTest).toBe('progress-bar-test');
    });

    it('should render progress element', async () => {
      const progress = await page.find('bds-progress-bar >>> .progress');
      expect(progress).toBeTruthy();
    });

    it('should render text when provided', async () => {
      const typo = await page.find('bds-progress-bar >>> bds-typo');
      expect(typo).toBeTruthy();
      const text = await typo.textContent;
      expect(text).toBe('Loading...');
    });
  });

  describe('Property Changes', () => {
    it('should update percent value', async () => {
      const progressBar = await page.find('bds-progress-bar');
      await progressBar.setProperty('percent', 75);
      await page.waitForChanges();
      
      const percent = await progressBar.getProperty('percent');
      expect(percent).toBe(75);
    });

    it('should update size', async () => {
      const progressBar = await page.find('bds-progress-bar');
      await progressBar.setProperty('size', 'small');
      await page.waitForChanges();
      
      const container = await page.find('bds-progress-bar >>> .progress_bar');
      const className = await container.getProperty('className');
      expect(className).toContain('size_small');
    });

    it('should update color class', async () => {
      const progressBar = await page.find('bds-progress-bar');
      await progressBar.setProperty('color', 'positive');
      await page.waitForChanges();
      
      const progress = await page.find('bds-progress-bar >>> .progress');
      const className = await progress.getProperty('className');
      expect(className).toContain('color_positive');
    });

    it('should update text', async () => {
      const progressBar = await page.find('bds-progress-bar');
      await progressBar.setProperty('text', 'Updated text');
      await page.waitForChanges();
      
      const typo = await page.find('bds-progress-bar >>> bds-typo');
      const text = await typo.textContent;
      expect(text).toBe('Updated text');
    });
  });

  describe('Edge Cases', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-progress-bar></bds-progress-bar>`,
      });
      
      const progressBar = await page.find('bds-progress-bar');
      const percent = await progressBar.getProperty('percent');
      const size = await progressBar.getProperty('size');
      const color = await progressBar.getProperty('color');
      const text = await progressBar.getProperty('text');
      
      expect(percent).toBe(0);
      expect(size).toBe('default');
      expect(color).toBe('default');
      expect(text).toBe('');
    });

    it('should handle percent over 100', async () => {
      const page = await newE2EPage({
        html: `<bds-progress-bar percent="150"></bds-progress-bar>`,
      });
      
      const progressBar = await page.find('bds-progress-bar');
      expect(progressBar).toBeTruthy();
    });

    it('should handle negative percent', async () => {
      const page = await newE2EPage({
        html: `<bds-progress-bar percent="-10"></bds-progress-bar>`,
      });
      
      const progressBar = await page.find('bds-progress-bar');
      expect(progressBar).toBeTruthy();
    });

    it('should not render text element when text is empty', async () => {
      const page = await newE2EPage({
        html: `<bds-progress-bar text=""></bds-progress-bar>`,
      });
      
      const typo = await page.find('bds-progress-bar >>> bds-typo');
      expect(typo).toBeNull();
    });

    it('should handle null dataTest', async () => {
      const page = await newE2EPage({
        html: `<bds-progress-bar></bds-progress-bar>`,
      });
      
      const progressBar = await page.find('bds-progress-bar');
      const dataTest = await progressBar.getProperty('dataTest');
      expect(dataTest).toBeNull();
    });
  });
});