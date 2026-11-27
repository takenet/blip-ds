import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Sidebar - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-sidebar--properties', 'sidebar-default');
  });
});
