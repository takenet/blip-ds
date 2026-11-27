import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Loading Bar - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-loading-bar--properties', 'loading-bar-default');
  });
});
