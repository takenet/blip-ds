import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Dropdown - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-dropdown--properties');
  });

  test('opens via toggle method', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const dropdown = document.querySelector('bds-dropdown') as any;
        if (!dropdown) {
          resolve(false);
          return;
        }
        dropdown.addEventListener('bdsToggle', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        dropdown.toggle();
      });
    });
    expect(eventFired).toBe(true);
  });

  test('setOpen and setClose methods work', async ({ page }) => {
    await page.evaluate(() => {
      const dropdown = document.querySelector('bds-dropdown') as any;
      dropdown?.setOpen();
    });
    await page.waitForTimeout(500);

    const isOpen = await page.evaluate(() => {
      const dropdown = document.querySelector('bds-dropdown') as any;
      return dropdown?.open === true;
    });
    expect(isOpen).toBe(true);

    await page.evaluate(() => {
      const dropdown = document.querySelector('bds-dropdown') as any;
      dropdown?.setClose();
    });
    await page.waitForTimeout(500);

    const isClosed = await page.evaluate(() => {
      const dropdown = document.querySelector('bds-dropdown') as any;
      return dropdown?.open === false;
    });
    expect(isClosed).toBe(true);
  });
});
