import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Stepper - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-stepper--properties', 'stepper-default');
  });
});
