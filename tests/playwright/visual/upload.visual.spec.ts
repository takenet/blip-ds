import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Upload - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-upload--properties', 'upload-default');
  });
});
