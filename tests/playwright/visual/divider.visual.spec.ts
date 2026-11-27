import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Divider - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-divider--properties', 'divider-default');
  });
});
