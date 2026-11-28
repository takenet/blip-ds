import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Skeleton - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-skeleton--properties', 'skeleton-default');
  });
});
