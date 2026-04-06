import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Slider - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-slider--properties', 'slider-default');
  });
});
