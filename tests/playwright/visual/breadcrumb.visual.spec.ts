import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Breadcrumb - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-breadcrumb--properties', 'breadcrumb-default');
  });
});
