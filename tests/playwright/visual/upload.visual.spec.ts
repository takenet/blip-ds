import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Upload - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-upload--properties', 'upload-default');
  });
});
