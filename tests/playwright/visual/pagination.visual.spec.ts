import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Pagination - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-pagination--properties', 'pagination-default');
  });
});
