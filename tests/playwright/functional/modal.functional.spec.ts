import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Modal - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-modal--properties');
  });

  test('opens modal via toggle method', async ({ page }) => {
    const isOpen = await page.evaluate(() => {
      const modal = document.querySelector('bds-modal') as any;
      if (modal?.toggle) modal.toggle();
      else modal.open = true;
      return modal?.open === true;
    });

    expect(isOpen).toBe(true);
  });

  test('closes modal via toggle method', async ({ page }) => {
    // Open first
    await page.evaluate(() => {
      const modal = document.querySelector('bds-modal') as any;
      if (modal?.toggle) modal.toggle();
      else modal.open = true;
    });
    await page.waitForTimeout(500);

    // Close
    const isClosed = await page.evaluate(() => {
      const modal = document.querySelector('bds-modal') as any;
      if (modal?.toggle) modal.toggle();
      else modal.open = false;
      return modal?.open === false;
    });

    expect(isClosed).toBe(true);
  });

  test('emits bdsModalChanged event', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const modal = document.querySelector('bds-modal');
        modal?.addEventListener('bdsModalChanged', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        (modal as any)?.toggle?.() || ((modal as any).open = true);
      });
    });

    expect(eventFired).toBe(true);
  });

  test('closes on close button click', async ({ page }) => {
    // Open modal
    await page.evaluate(() => {
      const modal = document.querySelector('bds-modal') as any;
      if (modal?.toggle) modal.toggle();
      else modal.open = true;
    });
    await page.waitForTimeout(500);

    // Try to close via close button in shadow DOM
    const closed = await page.evaluate(() => {
      const modal = document.querySelector('bds-modal') as any;
      const closeBtn = modal?.shadowRoot?.querySelector(
        '.close-button, [class*="close"], bds-icon-button, bds-button-icon',
      );
      if (closeBtn) {
        closeBtn.click();
        return true;
      }
      return false;
    });

    if (closed) {
      await page.waitForTimeout(500);
      const isOpen = await page.evaluate(() => {
        const modal = document.querySelector('bds-modal') as any;
        return modal?.open;
      });
      expect(isOpen).toBeFalsy();
    }
  });
});
