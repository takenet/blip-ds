import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

// The panel opens in the top layer, so the whole page is captured instead of the story root.
// Motion is reduced so the screenshot never catches the open animation.
test.describe('UaiDropdown - Visual Regression', () => {
  for (const theme of ['light', 'dark']) {
    test(`opened dropdown in the ${theme} theme`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await gotoStoryUrl(page, `/iframe.html?id=uai-dropdown--opened&viewMode=story&globals=hasTheme:${theme}`);
      await expect(page.locator('uai-dropdown')).toHaveJSProperty('open', true);
      await expect(page).toHaveScreenshot(`uai-dropdown-opened-${theme}.png`);
    });
  }
});
