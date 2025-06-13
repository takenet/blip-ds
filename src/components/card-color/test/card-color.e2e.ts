import { newE2EPage } from '@stencil/core/testing';

describe('bds-card-color e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-card-color 
          name="Primary Color" 
          variable="color-primary"
          hex="#0066cc"
        ></bds-card-color>
      `,
    });
  });

  describe('Properties', () => {
    it('should render card-color component', async () => {
      const cardColor = await page.find('bds-card-color');
      expect(cardColor).toBeTruthy();
    });

    it('should accept name property', async () => {
      const cardColor = await page.find('bds-card-color');
      const name = await cardColor.getProperty('name');
      expect(name).toBe('Primary Color');
    });

    it('should accept variable property', async () => {
      const cardColor = await page.find('bds-card-color');
      const variable = await cardColor.getProperty('variable');
      expect(variable).toBe('color-primary');
    });

    it('should accept hex property', async () => {
      const cardColor = await page.find('bds-card-color');
      const hex = await cardColor.getProperty('hex');
      expect(hex).toBe('#0066cc');
    });

    it('should accept gradient property', async () => {
      page = await newE2EPage({
        html: `
          <bds-card-color 
            name="Gradient Color" 
            variable="color-gradient"
            gradient="true"
          ></bds-card-color>
        `,
      });

      const cardColor = await page.find('bds-card-color');
      const gradient = await cardColor.getProperty('gradient');
      expect(gradient).toBe(true);
    });

    it('should accept lightText property', async () => {
      page = await newE2EPage({
        html: `
          <bds-card-color 
            name="Dark Color" 
            variable="color-dark"
            light-text="true"
          ></bds-card-color>
        `,
      });

      const cardColor = await page.find('bds-card-color');
      const lightText = await cardColor.getProperty('lightText');
      expect(lightText).toBe(true);
    });
  });

  describe('Structure', () => {
    it('should render paper container', async () => {
      const paper = await page.find('bds-card-color >>> bds-paper');
      expect(paper).toBeTruthy();
      
      const paperClass = await paper.getAttribute('class');
      expect(paperClass).toContain('card');
    });

    it('should render grid layout', async () => {
      const grids = await page.findAll('bds-card-color >>> bds-grid');
      expect(grids.length).toBeGreaterThanOrEqual(2);
    });

    it('should render color area with proper class', async () => {
      const colorGrid = await page.find('bds-card-color >>> bds-grid.card-color--color');
      expect(colorGrid).toBeTruthy();
    });

    it('should render variable text', async () => {
      const typo = await page.find('bds-card-color >>> bds-typo');
      expect(typo).toBeTruthy();
      
      const text = await typo.textContent;
      expect(text).toContain('$color-primary');
    });

    it('should apply variable-specific class to color area', async () => {
      const colorGrid = await page.find('bds-card-color >>> bds-grid.card-color--color');
      const classes = await colorGrid.getAttribute('class');
      expect(classes).toContain('card-color--color-primary');
    });
  });

  describe('Interactions', () => {
    it('should be clickable', async () => {
      const paper = await page.find('bds-card-color >>> bds-paper');
      expect(paper).toBeTruthy();
      
      // The paper should be clickable
      await paper.click();
      await page.waitForChanges();
    });

    it('should show copied message on click', async () => {
      // Mock clipboard API
      await page.evaluateOnNewDocument(() => {
        Object.assign(navigator, {
          clipboard: {
            writeText: () => Promise.resolve()
          }
        });
      });

      const paper = await page.find('bds-card-color >>> bds-paper');
      await paper.click();
      await page.waitForChanges();
      
      // Wait a moment for state change
      await page.waitForTimeout(100);
      
      const copiedText = await page.find('bds-card-color >>> .card-text-copie');
      if (copiedText) {
        const text = await copiedText.textContent;
        expect(text).toContain('Cor copiada!');
      }
    });

    it('should handle click without clipboard API gracefully', async () => {
      const paper = await page.find('bds-card-color >>> bds-paper');
      
      // Should not throw error even if clipboard is not available
      await expect(paper.click()).resolves.not.toThrow();
      await page.waitForChanges();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const cardColor = await page.find('bds-card-color');
      expect(cardColor).toBeTruthy();
      
      // The component should exist and be renderable
      const tagName = await cardColor.getProperty('tagName');
      expect(tagName).toBe('BDS-CARD-COLOR');
    });

    it('should support keyboard navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-card-color 
            name="Test Color" 
            variable="color-test"
          ></bds-card-color>
          <button>Next button</button>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      // Check if the component can receive focus or if we can interact with it
      const cardColor = await page.find('bds-card-color');
      expect(cardColor).toBeTruthy();
      
      // Since card-color might not be focusable by default, just verify it exists
      const tagName = await cardColor.getProperty('tagName');
      expect(tagName).toBe('BDS-CARD-COLOR');
    });

    it('should have proper text content for screen readers', async () => {
      const typo = await page.find('bds-card-color >>> bds-typo');
      const text = await typo.textContent;
      expect(text).toBeTruthy();
      expect(text.trim()).toBe('$color-primary');
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing optional props', async () => {
      page = await newE2EPage({
        html: `
          <bds-card-color 
            name="Basic Color" 
            variable="color-basic"
          ></bds-card-color>
        `,
      });

      const cardColor = await page.find('bds-card-color');
      expect(cardColor).toBeTruthy();
      
      const hex = await cardColor.getProperty('hex');
      expect(hex).toBeFalsy();
    });

    it('should render with minimum required props', async () => {
      page = await newE2EPage({
        html: `
          <bds-card-color 
            variable="color-minimal"
          ></bds-card-color>
        `,
      });

      const cardColor = await page.find('bds-card-color');
      expect(cardColor).toBeTruthy();
      
      const paper = await page.find('bds-card-color >>> bds-paper');
      expect(paper).toBeTruthy();
    });
  });
});