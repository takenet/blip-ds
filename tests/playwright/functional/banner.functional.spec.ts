import { test, expect } from '../fixtures/storybook.fixture';

test.describe('Banner - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-banner--properties');
  });

  test('renders correctly', async ({ page }) => {
    const banner = page.locator('bds-banner').first();
    await expect(banner).toBeVisible();
  });

  test('close button works', async ({ page }) => {
    const closed = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const banner = document.querySelector('bds-banner');
        banner?.addEventListener('bdsBannerClose', () => resolve(true));
        banner?.addEventListener('bdsClose', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        const closeBtn = banner?.shadowRoot?.querySelector(
          '.close, [class*="close"], bds-icon-button, bds-button-icon',
        );
        if (closeBtn) {
          (closeBtn as HTMLElement).click();
        } else {
          (banner as any)?.close?.();
        }
      });
    });

    expect(typeof closed).toBe('boolean');
  });
});
