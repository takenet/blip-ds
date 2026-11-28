import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiCard - Visual Regression', () => {
  for (const story of ['states', 'usage']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-components-card--${story}`, `uai-card-${story}`);
    });

    test(`${story} in the dark theme`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-components-card--${story}&viewMode=story&globals=hasTheme:dark`);
      await expect(storybook.root()).toHaveScreenshot(`uai-card-${story}-dark.png`);
    });
  }
});
