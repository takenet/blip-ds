import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Banner - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-banner--properties', 'banner-default');
  });
});
