import { newE2EPage } from '@stencil/core/testing';

describe('bds-chip-clickable e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-chip-clickable
          avatar="Michael Scott"
          clickable="true"
          close="true"
          color="default"
          icon="edit"
          size="standard"
        >
          ChipClickable
        </bds-chip-clickable>
      `,
    });
  });

  describe('Properties', () => {
    it('should render chip-clickable with correct avatar', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const avatar = await chipClickable.getProperty('avatar');
      expect(avatar).toBe('Michael Scott');
    });

    it('should render chip-clickable with correct clickable', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const clickable = await chipClickable.getProperty('clickable');
      expect(clickable).toBe(true);
    });

    it('should render chip-clickable with correct close', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const close = await chipClickable.getProperty('close');
      expect(close).toBe(true);
    });

    it('should render chip-clickable with correct color', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const color = await chipClickable.getProperty('color');
      expect(color).toBe('default');
    });

    it('should render chip-clickable with correct icon', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const icon = await chipClickable.getProperty('icon');
      expect(icon).toBe('edit');
    });

    it('should render chip-clickable with correct size', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const size = await chipClickable.getProperty('size');
      expect(size).toBe('standard');
    });
  });

  describe('Events', () => {
    it('should emit chipClickableClick event when clicked', async () => {
      const chipClickable = await page.find('bds-chip-clickable');
      const chipClickableClickEvent = await chipClickable.spyOnEvent('chipClickableClick');

      const chipElement = await page.find('bds-chip-clickable >>> .chip_clickable');
      await chipElement.click();
      await page.waitForChanges();

      expect(chipClickableClickEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-chip-clickable
            avatar="Michael Scott"
            clickable="true"
            close="true"
            color="default"
            icon="edit"
            size="standard"
          >
            ChipClickable
          </bds-chip-clickable>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-CHIP-CLICKABLE');
    });
  });
});