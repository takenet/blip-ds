import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiToast - Visual Regression', () => {
  for (const theme of ['light', 'dark']) {
    test(`variants in the ${theme} theme`, async ({ page, storybook }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await gotoStoryUrl(page, `/iframe.html?id=uai-components-toast--variants&viewMode=story&globals=hasTheme:${theme}`);
      await expect(storybook.root()).toHaveScreenshot(`uai-toast-variants-${theme}.png`);
    });
  }

  test('content', async ({ page, storybook }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await storybook.screenshotStory('uai-components-toast--content', 'uai-toast-content');
  });

  // The container is in the top layer, so the whole page is captured.
  test('toast shown at the bottom left', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await gotoStoryUrl(page, '/iframe.html?id=uai-components-toast--show-toast&viewMode=story');
    await page.getByRole('button', { name: 'warning', exact: true }).click();
    await expect(page.locator('uai-toast')).toBeVisible();
    await page.mouse.move(0, 0);
    await expect(page).toHaveScreenshot('uai-toast-shown.png');
  });
});
