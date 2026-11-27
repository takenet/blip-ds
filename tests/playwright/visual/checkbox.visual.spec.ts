import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Checkbox - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-checkbox--properties', 'checkbox-default');
  });

  test('all states', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-checkbox--all-states', 'checkbox-all-states');
  });

  test('checked state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=bds-components-deprecated-checkbox--properties&args=checked:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('checkbox-checked.png');
  });

  test('disabled state', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=bds-components-deprecated-checkbox--properties&args=disabled:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('checkbox-disabled.png');
  });

  test('indeterminate state', async ({ storybook }) => {
    await storybook.screenshotStory('bds-components-deprecated-checkbox--indeterminate-example', 'checkbox-indeterminate');
  });

  test('disabled + checked', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=bds-components-deprecated-checkbox--properties&args=disabled:true;checked:true');
    await expect(page.locator('#storybook-root, #root').first()).toHaveScreenshot('checkbox-disabled-checked.png');
  });
});
