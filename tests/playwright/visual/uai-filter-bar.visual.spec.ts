import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiFilterBar - Visual Regression', () => {
  for (const story of ['states']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-components-filter-bar--${story}`, `uai-filter-bar-${story}`);
    });

    test(`${story} in the dark theme`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-components-filter-bar--${story}&viewMode=story&globals=hasTheme:dark`);
      await expect(storybook.root()).toHaveScreenshot(`uai-filter-bar-${story}-dark.png`);
    });
  }
});
