import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Toast - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-toast--properties', 'toast-default');
  });

  test('action types', async ({ page }) => {
    for (const actionType of ['icon', 'button']) {
      await gotoStoryUrl(page, `/iframe.html?id=components-toast--properties&args=actionType:${actionType}`);
      await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot(`toast-action-${actionType}.png`);
    }
  });

  test('variants', async ({ page }) => {
    for (const variant of ['system', 'error', 'success', 'warning', 'undo', 'notification']) {
      await gotoStoryUrl(page, `/iframe.html?id=components-toast--properties&args=variant:${variant}`);
      await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot(`toast-variant-${variant}.png`);
    }
  });
});
