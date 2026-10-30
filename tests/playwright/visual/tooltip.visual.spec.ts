import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Tooltip - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-tooltip--properties', 'tooltip-default');
  });
});
