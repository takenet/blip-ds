import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Sidebar - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-sidebar--properties', 'sidebar-default');
  });
});
