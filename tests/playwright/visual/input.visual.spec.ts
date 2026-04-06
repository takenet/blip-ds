import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-input--properties', 'input-default');
  });

  test('with value', async ({ storybook, page }) => {
    await storybook.goto('components-input--properties');
    const input = page.locator('bds-input').first();
    const nativeInput = input.locator('input').first();
    await nativeInput.fill('Hello World');
    await page.waitForTimeout(300);
    await expect(storybook.root()).toHaveScreenshot('input-with-value.png');
  });

  test('disabled state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=disabled:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('input-disabled.png');
  });

  test('danger state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=danger:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('input-danger.png');
  });

  test('with icon', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=icon:search');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('input-with-icon.png');
  });

  test('with helper text', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=helperMessage:Helper%20text%20here');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('input-helper-text.png');
  });
});
