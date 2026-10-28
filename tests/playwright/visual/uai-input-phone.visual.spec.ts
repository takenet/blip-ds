import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiInputPhone - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-input-phone-states'],
    ['sizes', 'uai-input-phone-sizes'],
    ['countries', 'uai-input-phone-countries'],
    ['languages', 'uai-input-phone-languages'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-input-phone--${story}`, name);
    });
  }

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-input-phone--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-input-phone-states-dark.png');
  });

  for (const theme of ['light', 'dark']) {
    test(`country list open in the ${theme} theme`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await gotoStoryUrl(page, `/iframe.html?id=uai-input-phone--sizes&viewMode=story&globals=hasTheme:${theme}`);
      await page.locator('uai-input-phone button[part="country-button"]').first().click();
      await expect(page.locator('uai-input-phone [part="country-list"].uai-overlay--open')).toBeVisible();
      await expect(page).toHaveScreenshot(`uai-input-phone-list-open-${theme}.png`);
    });
  }
});
