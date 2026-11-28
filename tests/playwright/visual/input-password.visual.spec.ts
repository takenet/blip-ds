import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input Password - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-input-password--properties', 'input-password-default');
  });
});
