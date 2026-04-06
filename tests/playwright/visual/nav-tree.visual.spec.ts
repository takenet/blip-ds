import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('NavTree - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-navtree--properties', 'nav-tree-default');
  });
});
