import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Badge - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-badge--properties', 'badge-default');
  });
});
