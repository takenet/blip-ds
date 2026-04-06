import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Grid - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-grid--properties', 'grid-default');
  });
});
