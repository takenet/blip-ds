import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiSwitch - Visual Regression', () => {
  for (const story of ['states', 'sizes']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-switch--${story}`, `uai-switch-${story}`);
    });
  }

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-switch--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-switch-states-dark.png');
  });
});
