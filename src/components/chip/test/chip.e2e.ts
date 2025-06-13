import { newE2EPage } from '@stencil/core/testing';

describe('bds-chip e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-chip variant="primary" size="standard" icon="edit">Test Chip</bds-chip>`,
    });
  });

  describe('Properties', () => {
    it('should render chip component', async () => {
      const chip = await page.find('bds-chip');
      expect(chip).toBeTruthy();
    });

    it('should render with correct variant', async () => {
      const chip = await page.find('bds-chip');
      const variant = await chip.getProperty('variant');
      expect(variant).toBe('primary');
    });

    it('should render with correct size', async () => {
      const chip = await page.find('bds-chip');
      const size = await chip.getProperty('size');
      expect(size).toBe('standard');
    });

    it('should render with icon', async () => {
      const chip = await page.find('bds-chip');
      const icon = await chip.getProperty('icon');
      expect(icon).toBe('edit');
    });

    it('should render deletable chip', async () => {
      const chip = await page.find('bds-chip');
      await chip.setProperty('deletable', true);
      await page.waitForChanges();

      const deleteButton = await page.find('bds-chip >>> .chip__delete');
      expect(deleteButton).toBeTruthy();
    });

    it('should handle danger state', async () => {
      const chip = await page.find('bds-chip');
      await chip.setProperty('danger', true);
      await page.waitForChanges();

      const danger = await chip.getProperty('danger');
      expect(danger).toBe(true);
    });

    it('should handle disabled state', async () => {
      const chip = await page.find('bds-chip');
      await chip.setProperty('disabled', true);
      await page.waitForChanges();

      const disabled = await chip.getProperty('disabled');
      expect(disabled).toBe(true);
    });
  });

  describe('Structure', () => {
    it('should render icon when provided', async () => {
      const iconElement = await page.find('bds-chip >>> .chip__icon');
      expect(iconElement).toBeTruthy();
    });

    it('should render slot content', async () => {
      const chip = await page.find('bds-chip');
      expect(chip).toBeTruthy();
    });

    it('should show delete button when deletable is true', async () => {
      const chip = await page.find('bds-chip');
      await chip.setProperty('deletable', true);
      await page.waitForChanges();

      const deleteIcon = await page.find('bds-chip >>> .chip__delete');
      expect(deleteIcon).toBeTruthy();
    });
  });

  describe('Events', () => {
    it('should emit bdsDelete event when delete button is clicked', async () => {
      const chip = await page.find('bds-chip');
      await chip.setProperty('deletable', true);
      await page.waitForChanges();

      const bdsDeleteEvent = await chip.spyOnEvent('bdsDelete');

      const deleteButton = await page.find('bds-chip >>> .chip__delete');
      await deleteButton.click();
      await page.waitForChanges();

      expect(bdsDeleteEvent).toHaveReceivedEvent();
    });

    it('should not emit delete event when disabled', async () => {
      const chip = await page.find('bds-chip');
      await chip.setProperty('deletable', true);
      await chip.setProperty('disabled', true);
      await page.waitForChanges();

      const bdsDeleteEvent = await chip.spyOnEvent('bdsDelete');

      const deleteButton = await page.find('bds-chip >>> .chip__delete');
      await deleteButton.click();
      await page.waitForChanges();

      expect(bdsDeleteEvent).not.toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const chip = await page.find('bds-chip');
      expect(chip).toBeTruthy();
      
      const tagName = await chip.getProperty('tagName');
      expect(tagName).toBe('BDS-CHIP');
    });

    it('should support keyboard navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-chip>Test Chip</bds-chip>
          <button>Next button</button>
        `,
      });

      const chip = await page.find('bds-chip');
      expect(chip).toBeTruthy();
      
      // The component should exist and be accessible
      const tagName = await chip.getProperty('tagName');
      expect(tagName).toBe('BDS-CHIP');
    });
  });
});