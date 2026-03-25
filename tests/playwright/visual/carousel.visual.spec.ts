import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Carousel - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-carousel--properties', 'carousel-default');
  });
});
