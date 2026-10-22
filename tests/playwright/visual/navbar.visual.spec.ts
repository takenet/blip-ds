import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('NavBar - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-navbar--properties', 'navbar-default');
  });

  test('v2 default state', async ({ storybook }) => {
    await storybook.screenshotStory('uai-navbar--playground', 'uai-navbar-default');
  });
});
