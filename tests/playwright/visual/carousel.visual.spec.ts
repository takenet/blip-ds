import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';
import type { Route } from '@playwright/test';

test.describe('Carousel - Visual Regression', () => {
  test('default state while the background image is loading', async ({ page, storybook }) => {
    const pendingBackgrounds: Route[] = [];
    await page.route('https://blipmediastore.blip.ai/**', route => { pendingBackgrounds.push(route); });
    try {
      await storybook.screenshotStory('components-carousel--properties', 'carousel-default');
    } finally {
      await Promise.all(pendingBackgrounds.map(route => route.abort()));
    }
  });
});
