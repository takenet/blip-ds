import { test, expect } from '@playwright/test';

test.describe('UaiPaper - Storybook', () => {
  test('updates the paper through its controls', async ({ page }) => {
    await page.goto('/?path=/story/uai-paper--properties');

    const preview = page.frameLocator('#storybook-preview-iframe');
    const paper = preview.locator('uai-paper').first();

    await expect(paper).toHaveJSProperty('elevation', 'primary');
    await expect(paper).toHaveClass(/\bpaper__elevation--primary\b/);

    await page.getByRole('tab', { name: /Controls/ }).click();
    await page.getByRole('combobox', { name: 'elevation', exact: true }).selectOption('secondary');
    await expect(paper).toHaveJSProperty('elevation', 'secondary');
    await expect(paper).toHaveClass(/\bpaper__elevation--secondary\b/);

    await page.locator('label[for="control-border"]').click();
    await expect(paper).toHaveJSProperty('border', true);
    await expect(paper).toHaveClass(/\bborder\b/);
  });
});
