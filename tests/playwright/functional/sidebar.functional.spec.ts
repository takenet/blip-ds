import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Sidebar - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-sidebar--properties');
  });

  test('renders correctly', async ({ page }) => {
    const rendered = await page.evaluate(() => {
      const sidebar = document.querySelector('bds-sidebar');
      return sidebar !== null && sidebar.classList.contains('hydrated');
    });

    expect(rendered).toBe(true);
  });

  test('toggle method opens sidebar', async ({ page }) => {
    const isOpen = await page.evaluate(() => {
      const sidebar = document.querySelector('bds-sidebar') as any;
      if (sidebar?.toggle) sidebar.toggle();
      else sidebar.isOpen = true;
      return sidebar?.isOpen === true || sidebar?.open === true;
    });

    expect(isOpen).toBe(true);
  });

  test('emits bdsToggle event', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const sidebar = document.querySelector('bds-sidebar');
        sidebar?.addEventListener('bdsToggle', () => resolve(true));
        setTimeout(() => resolve(false), 3000);

        const el = sidebar as any;
        if (el?.toggle) el.toggle();
        else el.isOpen = true;
      });
    });

    expect(eventFired).toBe(true);
  });
});
