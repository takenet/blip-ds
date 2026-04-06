import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input Password - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-input-password--properties', 'input-password-default');
  });
});
