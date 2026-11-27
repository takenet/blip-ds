import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Data Table - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-data-table--properties', 'table-default');
  });
});
