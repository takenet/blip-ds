import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiInputPassword - Visual Regression', () => {
  for (const [story, name] of [
    ['states', 'uai-input-password-states'],
    ['sizes', 'uai-input-password-sizes'],
    ['strength-levels', 'uai-input-password-strength-levels'],
  ]) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-input-password--${story}`, name);
    });
  }

  test('states in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-input-password--states&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-input-password-states-dark.png');
  });

  test('strength levels in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(
      page,
      '/iframe.html?id=uai-input-password--strength-levels&viewMode=story&globals=hasTheme:dark',
    );
    await expect(storybook.root()).toHaveScreenshot('uai-input-password-strength-levels-dark.png');
  });
});
