import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Image - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-image--properties', 'image-default');
  });
});
