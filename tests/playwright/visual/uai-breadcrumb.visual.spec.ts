import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';
import type { Components } from '../../../src/components';

test.describe('UaiBreadcrumb - Visual Regression', () => {
  for (const theme of ['light', 'dark']) {
    test(`collapsed and expanded in ${theme}`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-breadcrumb--playground&viewMode=story&globals=hasTheme:${theme}`);
      const breadcrumb = page.locator('uai-breadcrumb').first();
      await expect(breadcrumb).toHaveClass(/hydrated/);
      await breadcrumb.evaluate((el: HTMLElement & Components.UaiBreadcrumb) => {
        el.items = [
          { label: 'Início', href: '#inicio' },
          { label: 'Equipe', href: '#equipe' },
          { label: 'Projetos', href: '#projetos' },
          { label: 'Página atual' },
        ];
        el.wrapItems = true;
      });
      await expect(breadcrumb.locator('.breadcrumb__toggle')).toBeVisible();
      await expect(storybook.root()).toHaveScreenshot(`uai-breadcrumb-collapsed-${theme}.png`);
      await breadcrumb.locator('.breadcrumb__toggle button').click();
      await expect(breadcrumb.locator('.breadcrumb__panel')).toBeVisible();
      await expect(page).toHaveScreenshot(`uai-breadcrumb-expanded-${theme}.png`);
    });

    test(`editor focus and invalid draft in ${theme}`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-breadcrumb--playground&viewMode=story&globals=hasTheme:${theme}`);
      const breadcrumb = page.locator('uai-breadcrumb').first();
      await expect(breadcrumb).toHaveClass(/hydrated/);
      await breadcrumb.evaluate((el: HTMLElement & Components.UaiBreadcrumb) => {
        el.items = [{ label: 'Início', href: '#inicio' }, { label: 'Página atual' }];
        el.editable = true;
      });
      await breadcrumb.locator('.breadcrumb__edit button').click();
      const input = breadcrumb.locator('uai-input input');
      await expect(input).toBeFocused();
      await expect(storybook.root()).toHaveScreenshot(`uai-breadcrumb-editing-${theme}.png`);
      await input.fill('   ');
      await breadcrumb.locator('.breadcrumb__confirm button').click();
      await expect(input).toHaveAttribute('aria-invalid', 'true');
      await expect(storybook.root()).toHaveScreenshot(`uai-breadcrumb-required-${theme}.png`);
    });
  }
});
