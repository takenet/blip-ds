import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Tabs - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-tabs--properties', 'tabs-default');
  });
});
