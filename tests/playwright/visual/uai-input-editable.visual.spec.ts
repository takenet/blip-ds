import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiInputEditable - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-input-editable-states'],
    ['sizes', 'uai-input-editable-sizes'],
    ['editing', 'uai-input-editable-editing'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-input-editable--${story}`, name);
    });
  }

  for (const story of ['editing']) {
    test(`${story} in the dark theme`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-input-editable--${story}&viewMode=story&globals=hasTheme:dark`);
      await expect(storybook.root()).toHaveScreenshot(`uai-input-editable-${story}-dark.png`);
    });
  }
});
