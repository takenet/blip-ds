import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Image - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-image--properties', 'image-default');
  });
});
