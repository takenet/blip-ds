import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Modal - Visual Regression', () => {
  test('default state', async ({ storybook }) => {
    await storybook.screenshotStory('components-modal--properties', 'modal-default');
  });

  test('open modal', async ({ storybook, page }) => {
    await storybook.goto('components-modal--properties');
    // Modals are typically toggled via a method or open prop
    await page.evaluate(() => {
      const modal = document.querySelector('bds-modal') as any;
      if (modal?.toggle) modal.toggle();
      else if (modal) modal.open = true;
    });
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('modal-open.png', { fullPage: true });
  });
});
