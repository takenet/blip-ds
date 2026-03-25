import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Select - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-select--properties', 'select-default');
  });

  test('disabled state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-select--properties&args=disabled:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('select-disabled.png');
  });

  test('danger state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-select--properties&args=danger:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('select-danger.png');
  });

  test('opened dropdown', async ({ storybook, page }) => {
    await storybook.goto('components-select--properties');
    const select = page.locator('bds-select').first();
    await select.click();
    await page.waitForTimeout(500);
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('select-opened.png');
  });
});
