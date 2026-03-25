import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Tabs - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-tabs--properties');
  });

  test('renders tab items', async ({ page }) => {
    const hasTabs = await page.evaluate(() => {
      const tabGroup = document.querySelector('bds-tab-group') as any;
      const items = tabGroup?.shadowRoot?.querySelectorAll('[class*="tab_group__header__itens__item"]');
      return items ? items.length > 0 : false;
    });
    expect(hasTabs).toBe(true);
  });

  test('emits bdsTabChange when switching tabs', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const tabGroup = document.querySelector('bds-tab-group') as any;
        if (!tabGroup) {
          resolve(false);
          return;
        }
        tabGroup.addEventListener('bdsTabChange', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        const items = tabGroup.shadowRoot?.querySelectorAll('[class*="tab_group__header__itens__item"]');
        if (items && items.length > 1) {
          (items[1] as HTMLElement).click();
        }
      });
    });
    expect(eventFired).toBe(true);
  });
});
