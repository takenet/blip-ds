import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiInputChips - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-input-chips-states'],
    ['sizes', 'uai-input-chips-sizes'],
    ['email', 'uai-input-chips-email'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-input-chips--${story}`, name);
    });
  }

  for (const story of ['states', 'email']) {
    test(`${story} in the dark theme`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-input-chips--${story}&viewMode=story&globals=hasTheme:dark`);
      await expect(storybook.root()).toHaveScreenshot(`uai-input-chips-${story}-dark.png`);
    });
  }
});
