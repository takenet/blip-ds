import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiEmoji - Visual Regression', () => {
  for (const story of ['playground', 'catalog']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-emoji--${story}`, `uai-emoji-${story}`);
    });
  }

  test('playground in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-emoji--playground&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-emoji-playground-dark.png');
  });
});
