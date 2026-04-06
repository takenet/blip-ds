import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Button - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-button--properties', 'button-default');
  });

  test('all variants', async ({ storybook, page }) => {
    await storybook.goto('components-button--properties');
    const root = storybook.root();

    // Primary (default)
    await expect(root).toHaveScreenshot('button-primary.png');

    // Test variant changes via Storybook args URL
    for (const variant of ['secondary', 'tertiary', 'ghost']) {
      await gotoStoryUrl(page, `/iframe.html?id=components-button--properties&args=variant:${variant}`);
      await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot(`button-variant-${variant}.png`);
    }
  });

  test('disabled state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-button--properties&args=disabled:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('button-disabled.png');
  });

  test('sizes', async ({ page }) => {
    for (const size of ['short', 'standard', 'tall']) {
      await gotoStoryUrl(page, `/iframe.html?id=components-button--properties&args=size:${size}`);
      await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot(`button-size-${size}.png`);
    }
  });

  test('loading state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-button--properties&args=loading:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('button-loading.png');
  });

  test('flexible layouts', async ({ storybook }) => {
    await storybook.screenshotStory('components-button--flexible-layouts', 'button-flexible-layouts');
  });
});
