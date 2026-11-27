import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Progress Bar - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-progress-bar--properties', 'progress-bar-default');
  });
});
