import { newE2EPage } from '@stencil/core/testing';

describe('bds-tooltip e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-tooltip tooltip-text="This is a tooltip" position="top-center">
          <button>Hover me</button>
        </bds-tooltip>
      `,
    });
  });

  describe('Properties', () => {
    it('should render tooltip component', async () => {
      const tooltip = await page.find('bds-tooltip');
      expect(tooltip).toBeTruthy();
    });

    it('should accept tooltipText property', async () => {
      const tooltip = await page.find('bds-tooltip');
      const tooltipText = await tooltip.getProperty('tooltipText');
      expect(tooltipText).toBe('This is a tooltip');
    });

    it('should accept position property', async () => {
      const tooltip = await page.find('bds-tooltip');
      const position = await tooltip.getProperty('position');
      expect(position).toBe('top-center');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const tooltip = await page.find('bds-tooltip');
      expect(tooltip.shadowRoot).toBeTruthy();
    });

    it('should display slotted content', async () => {
      const button = await page.find('bds-tooltip button');
      expect(button).toBeTruthy();
      expect(await button.textContent).toBe('Hover me');
    });

    it('should render slot for content', async () => {
      const slot = await page.find('bds-tooltip >>> slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update tooltipText', async () => {
      const tooltip = await page.find('bds-tooltip');
      await tooltip.setProperty('tooltipText', 'Updated tooltip');
      await page.waitForChanges();
      
      const tooltipText = await tooltip.getProperty('tooltipText');
      expect(tooltipText).toBe('Updated tooltip');
    });

    it('should update position', async () => {
      const tooltip = await page.find('bds-tooltip');
      await tooltip.setProperty('position', 'bottom-center');
      await page.waitForChanges();
      
      const position = await tooltip.getProperty('position');
      expect(position).toBe('bottom-center');
    });
  });

  describe('Default Properties', () => {
    it('should handle tooltip without text', async () => {
      const page = await newE2EPage({
        html: `
          <bds-tooltip>
            <span>Content</span>
          </bds-tooltip>
        `,
      });
      
      const tooltip = await page.find('bds-tooltip');
      expect(tooltip).toBeTruthy();
    });
  });

  describe('Position Variations', () => {
    it('should handle different position values', async () => {
      const page = await newE2EPage({
        html: `<bds-tooltip position="left-center" tooltip-text="Test">Content</bds-tooltip>`,
      });
      
      const tooltip = await page.find('bds-tooltip');
      const position = await tooltip.getProperty('position');
      expect(position).toBe('left-center');
    });
  });
});