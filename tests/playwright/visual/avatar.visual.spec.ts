import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Avatar - Visual Regression', () => {
  test('single avatar default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-avatar-single--properties', 'avatar-single-default');
  });

  test('avatar group default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-avatar-group--properties', 'avatar-group-default');
  });
});
