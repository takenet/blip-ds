import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input Editable - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-input-editable--properties', 'input-editable-default');
  });
});
