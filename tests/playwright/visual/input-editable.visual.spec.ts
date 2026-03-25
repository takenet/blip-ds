import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input Editable - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-input-editable--properties', 'input-editable-default');
  });
});
