import { newE2EPage } from '@stencil/core/testing';

describe('bds-chip-selected e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <button id="prev_button">Previous button</button>
        <bds-chip-selected color="default" icon="edit" selected="true" size="tall">
          ChipSelected
        </bds-chip-selected>
        <input id="event-test" />
      `,
    });

    // Add chip-selected event functionality
    await page.evaluate(() => {
      const chipSelected = document.querySelector('bds-chip-selected');
      
      chipSelected?.addEventListener('chipClick', (event: CustomEvent) => {
        const input = document.getElementById('event-test') as HTMLInputElement;
        if (input) {
          input.value = event.detail?.selected?.toString() || 'clicked';
        }
      });
    });
  });

  describe('Properties', () => {
    it('should render chip-selected with correct color', async () => {
      const chipSelected = await page.find('bds-chip-selected');
      const color = await chipSelected.getProperty('color');
      expect(color).toBe('default');
    });

    it('should render chip-selected with correct icon', async () => {
      const chipSelected = await page.find('bds-chip-selected');
      const icon = await chipSelected.getProperty('icon');
      expect(icon).toBe('edit');
    });

    it('should render chip-selected with correct size', async () => {
      const chipSelected = await page.find('bds-chip-selected');
      const size = await chipSelected.getProperty('size');
      expect(size).toBe('tall');
    });
  });

  describe('Events', () => {
    it('should emit chipClick event when clicked', async () => {
      const chipSelected = await page.find('bds-chip-selected');
      const chipClickEvent = await chipSelected.spyOnEvent('chipClick');

      const chipElement = await page.find('bds-chip-selected >>> .chip');
      await chipElement.click();
      await page.waitForChanges();

      expect(chipClickEvent).toHaveReceivedEvent();
      
      // Check that the event detail is captured
      const eventInput = await page.find('#event-test');
      const inputValue = await eventInput.getProperty('value');
      expect(inputValue).toBe('false');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      await page.focus('#prev_button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-CHIP-SELECTED');
    });
  });
});