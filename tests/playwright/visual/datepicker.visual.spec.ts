import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Datepicker - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-datepicker--properties', 'datepicker-default');
  });

  test('opened state', async ({ storybook, page }) => {
    await storybook.goto('components-datepicker--properties');

    // Click to open the calendar via shadow DOM input
    await page.evaluate(() => {
      const datepicker = document.querySelector('bds-datepicker') as any;
      const input = datepicker?.shadowRoot?.querySelector('bds-input, input, .input, [class*="input"]');
      if (input) (input as HTMLElement).click();
      else datepicker?.click();
    });
    await page.waitForTimeout(500);

    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('datepicker-opened.png');
  });
});
