import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Alert - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-alert--properties', 'alert-default');
  });
});
