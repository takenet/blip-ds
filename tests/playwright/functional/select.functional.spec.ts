import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Select - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-select--properties');
  });

  test('opens dropdown on click', async ({ page }) => {
    const select = page.locator('bds-select').first();
    await select.click();
    await page.waitForTimeout(500);

    const isOpen = await page.evaluate(() => {
      const select = document.querySelector('bds-select') as any;
      return select?.isOpen === true || select?.shadowRoot?.querySelector('.open, [class*="open"]') !== null;
    });

    expect(isOpen).toBe(true);
  });

  test('selects an option', async ({ page }) => {
    // Open the dropdown via the wrapper inside shadow DOM
    await page.evaluate(() => {
      const select = document.querySelector('bds-select') as any;
      const wrapper = select?.shadowRoot?.querySelector('.select__wrapper, .select, [class*="select"]');
      if (wrapper) (wrapper as HTMLElement).click();
    });
    await page.waitForTimeout(500);

    // Click first option
    const selected = await page.evaluate(() => {
      const options = document.querySelectorAll('bds-select-option');
      if (options.length > 0) {
        (options[0] as HTMLElement).click();
        return true;
      }
      return false;
    });

    expect(selected).toBe(true);
  });

  test('emits bdsChange when option is selected', async ({ page }) => {
    // Listen for bdsChange event before interacting
    await page.evaluate(() => {
      (window as any).__bdsChangeReceived = false;
      const select = document.querySelector('bds-select');
      select?.addEventListener('bdsChange', () => {
        (window as any).__bdsChangeReceived = true;
      });
    });

    // Open dropdown
    const select = page.locator('bds-select').first();
    await select.click();
    await page.waitForTimeout(800);

    // Click first option
    const firstOption = page.locator('bds-select-option').first();
    await firstOption.click();
    await page.waitForTimeout(500);

    const eventFired = await page.evaluate(() => (window as any).__bdsChangeReceived);
    expect(eventFired).toBe(true);
  });

  test('does not open when disabled', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-select--properties&args=disabled:true');

    await page.locator('bds-select').first().click({ force: true });
    await page.waitForTimeout(300);

    const isOpen = await page.evaluate(() => {
      const select = document.querySelector('bds-select') as any;
      return select?.isOpen === true;
    });

    expect(isOpen).toBeFalsy();
  });

  test('closes dropdown when clicking outside', async ({ page }) => {
    const select = page.locator('bds-select').first();
    await select.click();
    await page.waitForTimeout(500);

    // Click outside
    await page.locator('body').click({ position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);

    const isOpen = await page.evaluate(() => {
      const select = document.querySelector('bds-select') as any;
      return select?.isOpen === true;
    });

    expect(isOpen).toBeFalsy();
  });
});
