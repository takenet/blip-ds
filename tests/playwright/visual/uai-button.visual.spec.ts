import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiButton - Visual Regression', () => {
  for (const [story, name] of [
    ['variants-and-colors', 'uai-button-variants-and-colors'],
    ['sizes', 'uai-button-sizes'],
    ['states', 'uai-button-states'],
    ['icons', 'uai-button-icons'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-button--${story}`, name);
    });
  }

  test('variants-and-colors in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-button--variants-and-colors&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-button-variants-and-colors-dark.png');
  });
});
