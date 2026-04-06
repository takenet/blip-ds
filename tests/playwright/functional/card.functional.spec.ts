import { test, expect } from '../fixtures/storybook.fixture';

test.describe('Card - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-card--properties');
  });

  test('renders correctly', async ({ page }) => {
    const card = page.locator('bds-card').first();
    await expect(card).toBeVisible();
  });

  test('emits click event on click', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const card = document.querySelector('bds-card');
        card?.addEventListener('click', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        const inner = card?.shadowRoot?.querySelector('.card, [class*="card"]');
        if (inner) (inner as HTMLElement).click();
        else card?.click();
      });
    });

    expect(eventFired).toBe(true);
  });
});
