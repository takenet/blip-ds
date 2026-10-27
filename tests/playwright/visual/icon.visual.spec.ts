import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Icon - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-icon--properties', 'icon-default');
  });
});
