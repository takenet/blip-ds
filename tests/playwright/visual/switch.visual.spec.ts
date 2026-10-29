import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Switch - Visual Regression', () => {
  test('default state (off)', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-switch--properties', 'switch-off');
  });

  test('active state (on)', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-deprecated-switch--properties&args=active:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('switch-on.png');
  });

  test('disabled state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-deprecated-switch--properties&args=disabled:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('switch-disabled.png');
  });
});
