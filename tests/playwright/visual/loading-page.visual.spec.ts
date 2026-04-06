import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Loading Page - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-loading-page--properties', 'loading-page-default');
  });
});
