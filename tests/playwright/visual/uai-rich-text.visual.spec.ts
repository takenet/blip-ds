import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiRichText - Visual Regression', () => {
  for (const [story, name] of [
    ['playground', 'uai-rich-text-playground'],
    ['states', 'uai-rich-text-states'],
  ]) {
    test(story, async ({ page, storybook }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await storybook.screenshotStory(`uai-rich-text--${story}`, name);
    });
  }

  test('playground in the dark theme', async ({ page, storybook }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await gotoStoryUrl(page, '/iframe.html?id=uai-rich-text--playground&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-rich-text-playground-dark.png');
  });
});
