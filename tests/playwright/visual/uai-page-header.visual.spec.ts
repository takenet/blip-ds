import { test, gotoStoryUrl, expect } from '../fixtures/storybook.fixture';
import type { Components } from '../../../src/components';

test.describe('UaiPageHeader - Visual Regression', () => {
  for (const theme of ['light', 'dark']) {
    test(`primary, secondary and editing in ${theme}`, async ({ page, storybook }) => {
      await gotoStoryUrl(page, `/iframe.html?id=uai-page-header--playground&viewMode=story&globals=hasTheme:${theme}`);
      const header = page.locator('uai-page-header').first();
      await expect(header).toHaveClass(/hydrated/);
      await header.evaluate((el: HTMLElement & Components.UaiPageHeader) => {
        el.level = 'primary';
        el.title = 'Visão geral dos projetos';
        el.items = [
          { label: 'Início', href: '#inicio' },
          { label: 'Equipe', href: '#equipe' },
          { label: 'Projetos', href: '#projetos' },
          { label: 'Página atual' },
        ];
        el.editable = true;
        const action = document.createElement('uai-button');
        action.slot = 'actions';
        action.textContent = 'Salvar';
        el.appendChild(action);
      });
      await expect(header.getByRole('heading', { level: 1, name: 'Visão geral dos projetos' })).toBeVisible();
      await expect(storybook.root()).toHaveScreenshot(`uai-page-header-primary-${theme}.png`);
      await header.evaluate((el: HTMLElement & Components.UaiPageHeader) => (el.level = 'secondary'));
      const breadcrumb = header.locator('uai-breadcrumb');
      await expect(breadcrumb.locator('.breadcrumb__toggle')).toBeVisible();
      await expect(storybook.root()).toHaveScreenshot(`uai-page-header-secondary-${theme}.png`);
      await breadcrumb.locator('.breadcrumb__edit button').click();
      await expect(breadcrumb.locator('uai-input input')).toBeFocused();
      await expect(storybook.root()).toHaveScreenshot(`uai-page-header-editing-${theme}.png`);
    });
  }

  test('long labels and actions remain available in a narrow viewport', async ({ page, storybook }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await gotoStoryUrl(page, '/iframe.html?id=uai-page-header--playground&viewMode=story');
    const header = page.locator('uai-page-header').first();
    await expect(header).toHaveClass(/hydrated/);
    await header.evaluate((el: HTMLElement & Components.UaiPageHeader) => {
      el.level = 'secondary';
      el.wrapItems = false;
      el.items = [
        { label: 'Organização com nome longo', href: '#inicio' },
        { label: 'Equipe de atendimento ao cliente', href: '#equipe' },
        { label: 'Projetos da organização', href: '#projetos' },
        { label: 'Relatório de acompanhamento das conversas' },
      ];
      const action = document.createElement('uai-button');
      action.slot = 'actions';
      action.textContent = 'Criar projeto';
      el.appendChild(action);
    });
    await expect(header.locator('uai-breadcrumb a')).toHaveCount(3);
    await expect(header.locator('.breadcrumb__toggle')).toHaveCount(0);
    await expect(header.locator('uai-button[slot="actions"]').last()).toBeVisible();
    await expect(storybook.root()).toHaveScreenshot('uai-page-header-narrow.png');
  });
});
