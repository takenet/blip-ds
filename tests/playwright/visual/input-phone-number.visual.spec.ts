import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input Phone Number - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-deprecated-input-phone-number--properties', 'input-phone-number-default');
  });
});
