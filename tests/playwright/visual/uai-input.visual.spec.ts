import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiInput - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-input-states'],
    ['sizes', 'uai-input-sizes'],
    ['search-and-adornments', 'uai-input-search-and-adornments'],
    ['widths', 'uai-input-widths'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-input--${story}`, name);
    });
  }

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-input--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-input-states-dark.png');
  });
});
