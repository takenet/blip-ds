import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiBadge - Visual Regression', () => {
  for (const story of ['states', 'colors', 'shapes', 'number-limits']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-components-badge--${story}`, `uai-badge-${story}`);
    });

    test(`${story} in the dark theme`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-components-badge--${story}&viewMode=story&globals=hasTheme:dark`);
      await expect(storybook.root()).toHaveScreenshot(`uai-badge-${story}-dark.png`);
    });
  }
});
