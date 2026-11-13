import { test, expect } from '@playwright/test';

test.describe('UaiDropdown - Storybook', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?path=/story/uai-dropdown--playground');
  });

  test('opens from the activator and shows the header, the body and the footer', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const dropdown = preview.locator('uai-dropdown').first();

    // The first test of a run waits for Storybook to compile and the components to hydrate.
    await expect(dropdown).toHaveJSProperty('open', false, { timeout: 30_000 });
    await preview.getByRole('button', { name: 'Abrir dropdown' }).click();
    await expect(dropdown).toHaveJSProperty('open', true);

    await expect(preview.getByText('Branchs e versões')).toBeVisible();
    await expect(preview.getByRole('button', { name: 'nome-da-branch-6' })).toBeVisible();
    await expect(preview.getByRole('button', { name: 'Criar Branch' })).toBeVisible();
  });

  test('closes with Escape and gives the focus back to the activator', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const dropdown = preview.locator('uai-dropdown').first();
    const activator = preview.getByRole('button', { name: 'Abrir dropdown' });

    await activator.click();
    await expect(dropdown).toHaveJSProperty('open', true);
    await page.keyboard.press('Escape');
    await expect(dropdown).toHaveJSProperty('open', false);
    await expect(activator).toBeFocused();
  });

  test('closes with a click outside', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const dropdown = preview.locator('uai-dropdown').first();

    await preview.getByRole('button', { name: 'Abrir dropdown' }).click();
    await expect(dropdown).toHaveJSProperty('open', true);
    // A click on the empty area of the story, away from the panel.
    const frame = await page.locator('#storybook-preview-iframe').boundingBox();
    await page.mouse.click(frame.x + frame.width - 40, frame.y + 40);
    await expect(dropdown).toHaveJSProperty('open', false);
  });

  test('closes from an action inside the panel', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const dropdown = preview.locator('uai-dropdown').first();

    await preview.getByRole('button', { name: 'Abrir dropdown' }).click();
    await preview.getByRole('button', { name: 'Criar Branch' }).click();
    await expect(dropdown).toHaveJSProperty('open', false);
  });
});
