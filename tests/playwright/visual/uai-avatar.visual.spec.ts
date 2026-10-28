import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiAvatar - Visual Regression', () => {
  for (const [story, name] of [
    ['sizes', 'uai-avatar-sizes'],
    ['colors', 'uai-avatar-colors'],
    ['upload', 'uai-avatar-upload'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-avatar--${story}`, name);
    });
  }

  for (const story of ['colors', 'upload']) {
    test(`${story} in the dark theme`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-avatar--${story}&viewMode=story&globals=hasTheme:dark`);
      await expect(storybook.root()).toHaveScreenshot(`uai-avatar-${story}-dark.png`);
    });
  }
});
