import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input Chips - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-input-chips--properties', 'input-chips-default');
  });
});
