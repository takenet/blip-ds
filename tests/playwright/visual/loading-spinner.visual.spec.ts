import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Loading Spinner - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-loading-spinner--properties', 'loading-spinner-default');
  });
});
