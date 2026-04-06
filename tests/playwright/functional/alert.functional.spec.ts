import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Alert - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-alert--properties');
  });

  test('renders correctly', async ({ page }) => {
    const exists = await page.evaluate(() => !!document.querySelector('bds-alert'));
    expect(exists).toBe(true);
  });

  test('toggle method emits bdsAlertChanged', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const alert = document.querySelector('bds-alert') as any;
        if (!alert) {
          resolve(false);
          return;
        }
        alert.addEventListener('bdsAlertChanged', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        alert.toggle();
      });
    });
    expect(eventFired).toBe(true);
  });
});
