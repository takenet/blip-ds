import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Datepicker - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-datepicker--properties');
  });

  test('renders correctly', async ({ page }) => {
    const exists = await page.evaluate(() => !!document.querySelector('bds-datepicker'));
    expect(exists).toBe(true);
  });

  test('opens calendar on click', async ({ page }) => {
    await page.evaluate(() => {
      const dp = document.querySelector('bds-datepicker') as any;
      const input = dp?.shadowRoot?.querySelector('bds-input');
      if (input) input.click();
    });
    await page.waitForTimeout(500);

    const isOpen = await page.evaluate(() => {
      const dp = document.querySelector('bds-datepicker') as any;
      const panel = dp?.shadowRoot?.querySelector('[class*="open"], bds-datepicker-single, bds-datepicker-period');
      return !!panel;
    });
    expect(isOpen).toBe(true);
  });
});
