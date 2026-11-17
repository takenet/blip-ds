import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiButtonGroup - Visual Regression', () => {
  for (const [story, name] of [
    ['selected', 'uai-button-group-selected'],
    ['sizes-and-colors', 'uai-button-group-sizes-and-colors'],
    ['with-labels', 'uai-button-group-with-labels'],
  ]) {
    test(story, async ({ page, storybook }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await storybook.screenshotStory(`uai-button-group--${story}`, name);
    });
  }

  test('selected in the dark theme', async ({ page, storybook }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await gotoStoryUrl(page, '/iframe.html?id=uai-button-group--selected&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-button-group-selected-dark.png');
  });
});
