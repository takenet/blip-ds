import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

// The modal opens in the top layer, so the whole page is captured instead of the story root.
// Motion is reduced so the screenshot never catches the open animation.
test.describe('UaiModal - Visual Regression', () => {
  for (const theme of ['light', 'dark']) {
    test(`opened modal in the ${theme} theme`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await gotoStoryUrl(page, `/iframe.html?id=uai-modal--opened&viewMode=story&globals=hasTheme:${theme}`);
      await expect(page.locator('uai-modal')).toHaveJSProperty('open', true);
      await expect(page).toHaveScreenshot(`uai-modal-opened-${theme}.png`);
    });
  }
});
