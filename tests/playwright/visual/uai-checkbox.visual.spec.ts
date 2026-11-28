import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiCheckbox - Visual Regression', () => {
  test('states', async ({ storybook }) => {
    await storybook.screenshotStory('uai-components-checkbox--states', 'uai-checkbox-states');
  });

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-components-checkbox--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-checkbox-states-dark.png');
  });
});
