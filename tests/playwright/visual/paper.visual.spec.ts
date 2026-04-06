import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Paper - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-paper--properties', 'paper-default');
  });
});
