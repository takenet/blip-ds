import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('List - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-list--properties', 'list-default');
  });
});
