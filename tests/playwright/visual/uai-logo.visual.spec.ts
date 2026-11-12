import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiLogo - Visual Regression', () => {
  for (const story of ['playground', 'catalog']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-logo--${story}`, `uai-logo-${story}`);
    });
  }

  test('playground in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-logo--playground&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-logo-playground-dark.png');
  });
});
