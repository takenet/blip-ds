import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Card - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-card--properties', 'card-default');
  });
});
