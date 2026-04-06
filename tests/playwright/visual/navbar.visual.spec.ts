import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('NavBar - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-navbar--properties', 'navbar-default');
  });
});
