import { test, expect } from '@playwright/test';

// Keyboard and focus behavior of the native <dialog> used by uai-modal (modal mode).
test.describe('UaiModal - Storybook', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?path=/story/uai-modal--playground');
  });

  const inside = (modal) =>
    modal.evaluate((el) => el === document.activeElement || el.contains(document.activeElement));

  test('moves the focus into the modal and keeps Tab from reaching the page behind', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const modal = preview.locator('uai-modal').first();
    const trigger = preview.getByRole('button', { name: 'Abrir modal' });

    await trigger.click();
    await expect(modal).toHaveJSProperty('open', true);
    expect(await inside(modal)).toBe(true);

    // In a modal <dialog> Tab also stops once on the browser UI before it wraps around, so the focus can be on the
    // body for a moment. What must never happen is the focus reaching the page behind (inert).
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      await expect(trigger).not.toBeFocused();
    }
    await page.keyboard.down('Shift');
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      await expect(trigger).not.toBeFocused();
    }
    await page.keyboard.up('Shift');
  });

  test('closes with Escape and gives the focus back to the trigger', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const modal = preview.locator('uai-modal').first();
    const trigger = preview.getByRole('button', { name: 'Abrir modal' });

    await trigger.click();
    await expect(modal).toHaveJSProperty('open', true);
    await page.keyboard.press('Escape');
    await expect(modal).toHaveJSProperty('open', false);
    await expect(trigger).toBeFocused();
  });

  test('does not close on Enter in a button and does not reopen after the keyboard click', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const modal = preview.locator('uai-modal').first();

    await preview.getByRole('button', { name: 'Abrir modal' }).click();
    await expect(modal).toHaveJSProperty('open', true);

    // Enter on "Salvar" activates the button (which closes the modal); it must not close and reopen it.
    await preview.getByRole('button', { name: 'Salvar' }).focus();
    await page.keyboard.press('Enter');
    await expect(modal).toHaveJSProperty('open', false);
    await page.waitForTimeout(500);
    await expect(modal).toHaveJSProperty('open', false);
  });

  test('closes with the native close button by keyboard', async ({ page }) => {
    const preview = page.frameLocator('#storybook-preview-iframe');
    const modal = preview.locator('uai-modal').first();

    await preview.getByRole('button', { name: 'Abrir modal' }).click();
    await preview.getByRole('button', { name: 'Fechar' }).focus();
    await page.keyboard.press('Space');
    await expect(modal).toHaveJSProperty('open', false);
  });
});
