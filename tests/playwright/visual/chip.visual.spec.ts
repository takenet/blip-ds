import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Chip - Visual Regression', () => {
  test('chip clickable default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-chip-clickable--properties', 'chip-clickable-default');
  });

  test('chip selected default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-chip-selected--properties', 'chip-selected-default');
  });

  test('chip tag default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-chip-tag--properties', 'chip-tag-default');
  });
});
