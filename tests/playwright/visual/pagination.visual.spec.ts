import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Pagination - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-pagination--properties', 'pagination-default');
  });
});
