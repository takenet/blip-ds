import { test, expect } from '@playwright/test';

test.describe('UaiGrid - Storybook', () => {
  test('updates the playground through its controls', async ({ page }) => {
    await page.goto('/?path=/story/uai-grid--playground');

    const preview = page.frameLocator('#storybook-preview-iframe');
    const grid = preview.locator('uai-grid').first();
    const items = grid.locator(':scope > uai-grid');

    await expect(items).toHaveCount(3);
    await expect(grid).toHaveJSProperty('direction', 'row');
    await expect(items.first()).toHaveJSProperty('xxs', '3');

    await page.getByRole('tab', { name: /Controls/ }).click();
    await page.getByRole('combobox', { name: 'direction', exact: true }).selectOption('column');
    await expect(grid).toHaveJSProperty('direction', 'column');
    await expect(grid).toHaveCSS('flex-direction', 'column');

    await page.getByRole('combobox', { name: 'gap', exact: true }).selectOption('2');
    await expect(grid).toHaveJSProperty('gap', '2');

    await page.getByRole('combobox', { name: 'alignItems', exact: true }).selectOption('center');
    await expect(grid).toHaveJSProperty('alignItems', 'center');

    await page.getByRole('combobox', { name: 'xxs', exact: true }).selectOption('6');
    await expect(items.first()).toHaveJSProperty('xxs', '6');

    await page.getByRole('combobox', { name: 'xs', exact: true }).selectOption('4');
    await expect(items.first()).toHaveJSProperty('xs', '4');
    await page.getByRole('combobox', { name: 'xs', exact: true }).selectOption({ label: 'Não definido' });
    await expect(items.first()).not.toHaveClass(/\bxs--/);

    await page.locator('label[for="control-container"]').click();
    await expect(grid).toHaveJSProperty('container', false);
    await page.locator('label[for="control-containerFluid"]').click();
    await expect(grid).toHaveJSProperty('containerFluid', true);
    await expect(grid).toHaveClass(/\bcontainer-fluid\b/);

    await page.locator('#control-itemCount').fill('4');
    await expect(items).toHaveCount(4);
    await expect(grid).not.toHaveAttribute('item-count');
  });

  test('shows the overview with structure, controls and React usage', async ({ page }) => {
    await page.goto('/iframe.html?id=uai-grid--vis%C3%A3o-geral&viewMode=docs');

    await expect(page.getByRole('heading', { name: 'Estrutura' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Propriedades' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Usando em React' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'xs', exact: true })).toBeVisible();
  });

  test('fits six span-2 items on one row without an additional gap', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/?path=/story/uai-grid--playground');

    const preview = page.frameLocator('#storybook-preview-iframe');
    const grid = preview.locator('uai-grid').first();
    const items = grid.locator(':scope > uai-grid');

    await page.getByRole('tab', { name: /Controls/ }).click();
    await page.getByRole('combobox', { name: 'xxs', exact: true }).selectOption('2');
    await page.locator('#control-itemCount').fill('6');

    await expect(items).toHaveCount(6);
    await expect(items.first()).toHaveClass(/\bxxs--2\b/);
    await expect(grid).toHaveCSS('gap', '0px');

    const positions = await items.evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().top));
    expect(Math.max(...positions) - Math.min(...positions)).toBeLessThan(1);

    await page.getByRole('combobox', { name: 'gap', exact: true }).selectOption('1');
    await expect(grid).toHaveCSS('gap', '8px');
    const positionsWithGap = await items.evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().top));
    expect(positionsWithGap[5]).toBeGreaterThan(positionsWithGap[0]);
  });
});
