import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Typo - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-typo--properties', 'typo-default');
  });
});
