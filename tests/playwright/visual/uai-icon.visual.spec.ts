import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiIcon - Visual Regression', () => {
  for (const story of ['sizes', 'colors', 'themes']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-icon--${story}`, `uai-icon-${story}`);
    });
  }

  test('colors in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-icon--colors&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-icon-colors-dark.png');
  });
});
