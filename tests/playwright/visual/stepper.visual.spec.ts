import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Stepper - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-stepper--properties', 'stepper-default');
  });
});
