import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiTextarea - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-textarea-states'],
    ['heights', 'uai-textarea-heights'],
    ['form', 'uai-textarea-form'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-textarea--${story}`, name);
    });
  }

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-textarea--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-textarea-states-dark.png');
  });
});
