import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Radio Button - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-radio-button--properties', 'radio-default');
  });

  test('checked state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-radio-button--properties&args=checked:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('radio-checked.png');
  });

  test('disabled state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-radio-button--properties&args=disabled:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('radio-disabled.png');
  });
});
