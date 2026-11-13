import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';

test.describe('UaiLogo - Visual Regression', () => {
  for (const story of ['playground', 'catalog']) {
    test(story, async ({ storybook }) => {
      await storybook.screenshotStory(`uai-logo--${story}`, `uai-logo-${story}`);
    });
  }

  test('catalog loads local logo previews from the Storybook base path', async ({ page, storybook }) => {
    await storybook.goto('uai-logo--catalog');

    for (const name of ['google-ads', 'google-rcs', 'meta']) {
      const image = page.locator(`img[src$="assets/logos/${name}.svg"]`);
      await expect(image).toHaveJSProperty('naturalWidth', 80);
    }
  });

  test('playground in the dark theme', async ({ page, storybook }) => {
    await gotoStoryUrl(page, '/iframe.html?id=uai-logo--playground&viewMode=story&globals=hasTheme:dark');
    await expect(storybook.root()).toHaveScreenshot('uai-logo-playground-dark.png');
  });
});
