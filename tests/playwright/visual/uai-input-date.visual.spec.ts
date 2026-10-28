import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiInputDate - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-input-date-states'],
    ['sizes', 'uai-input-date-sizes'],
    ['languages', 'uai-input-date-languages'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-input-date--${story}`, name);
    });
  }

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-input-date--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-input-date-states-dark.png');
  });
});
