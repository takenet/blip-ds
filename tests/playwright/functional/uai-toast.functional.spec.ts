import { test, expect, Page } from '@playwright/test';

const open = async (page: Page, story: string, ready: string) => {
  await page.goto(`/iframe.html?id=uai-components-toast--${story}&viewMode=story`);
  // The first test of a run waits for Storybook to compile and the components to hydrate.
  await expect(page.getByRole('button', { name: ready, exact: true })).toBeVisible({ timeout: 30_000 });
};

test.describe('UaiToast - Storybook', () => {
  test('showToast stacks the toast in a container inside the theme provider and removes it after closing', async ({
    page,
  }) => {
    await open(page, 'show-toast', 'success');
    await page.getByRole('button', { name: 'success', exact: true }).click();

    const toast = page.locator('uai-toast');
    await expect(toast).toBeVisible();
    await expect(toast).toContainText('Texto curto, preferencialmente 1 linha.');
    const placement = await toast.evaluate((el) => ({
      container: el.parentElement.localName,
      position: (el.parentElement as any).position,
      themed: !!el.closest('[data-uai-theme]'),
    }));
    expect(placement).toEqual({ container: 'uai-toast-container', position: 'bottom-left', themed: true });
    await expect(page.getByRole('region', { name: 'Notificações' })).toBeAttached();

    await toast.getByRole('button', { name: 'Fechar', exact: true }).click();
    await expect(toast).toHaveCount(0);
  });

  test('the newest toast stays next to the edge of the screen', async ({ page }) => {
    await open(page, 'show-toast', 'info');
    await page.getByRole('button', { name: 'info', exact: true }).click();
    await page.getByRole('button', { name: 'error', exact: true }).click();
    const toasts = page.locator('uai-toast');
    await expect(toasts).toHaveCount(2);
    const [older, newer] = await Promise.all([toasts.nth(0).boundingBox(), toasts.nth(1).boundingBox()]);
    expect(newer.y).toBeGreaterThan(older.y);
  });

  test('the action runs and closes the toast', async ({ page }) => {
    await open(page, 'with-action', 'Arquivar conversa');
    await page.getByRole('button', { name: 'Arquivar conversa' }).click();
    await expect(page.getByText('Arquivadas: 1')).toBeVisible();
    await page.getByRole('button', { name: 'Desfazer', exact: true }).click();
    await expect(page.getByText('Arquivadas: 0')).toBeVisible();
    await expect(page.locator('uai-toast')).toHaveCount(0);
  });

  test('a toast shown from a modal opens above it and can be closed', async ({ page }) => {
    await open(page, 'over-a-modal', 'Abrir modal');
    await page.getByRole('button', { name: 'Abrir modal' }).click();
    await page.getByRole('button', { name: 'Copiar link', exact: true }).click();

    const toast = page.locator('uai-toast');
    await expect(toast).toBeVisible();
    // The close button receives the click: the toast is inside the modal, so it is not inert.
    await toast.getByRole('button', { name: 'Fechar', exact: true }).click();
    await expect(toast).toHaveCount(0);
    await expect(page.locator('uai-modal')).toHaveJSProperty('open', true);
  });

  test('a toast shown right before the modal closes stays on the screen', async ({ page }) => {
    await open(page, 'over-a-modal', 'Abrir modal');
    await page.getByRole('button', { name: 'Abrir modal' }).click();
    await page.getByRole('button', { name: 'Salvar', exact: true }).click();
    await expect(page.locator('uai-modal')).toHaveJSProperty('open', false);

    const toast = page.locator('uai-toast');
    await expect(toast).toBeVisible();
    expect(await toast.evaluate((el) => el.parentElement.parentElement.localName)).toBe('uai-theme-provider');
    await toast.getByRole('button', { name: 'Fechar', exact: true }).click();
    await expect(toast).toHaveCount(0);
  });

  test('the declared toast opens, closes by itself and stays in the page', async ({ page }) => {
    await open(page, 'declarative', 'Salvar');
    await page.getByRole('button', { name: 'Salvar' }).click();
    const toast = page.locator('uai-toast');
    await expect(toast).toBeVisible();
    await page.mouse.move(0, 0);
    await expect(toast).toBeHidden({ timeout: 8_000 });
    await expect(toast).toHaveCount(1);
  });
});
