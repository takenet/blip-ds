import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiTypo - Visual Regression', () => {
  test('text styles', async ({ storybook }) => {
    await storybook.screenshotStory('uai-typo--text-styles', 'uai-typo-text-styles');
  });

  test('letter spacing', async ({ storybook }) => {
    await storybook.screenshotStory('uai-typo--letter-spacing', 'uai-typo-letter-spacing');
  });

  test('text styles in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-typo--text-styles&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-typo-text-styles-dark.png');
  });
});
