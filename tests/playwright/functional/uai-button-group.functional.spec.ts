import { test, expect } from '@playwright/test';

test.describe('UaiButtonGroup - Storybook', () => {
  test('selects one button at a time and reports it as pressed', async ({ page }) => {
    await page.goto('/?path=/story/uai-components-button-group--playground');
    const preview = page.frameLocator('#storybook-preview-iframe');
    const center = preview.getByRole('button', { name: 'Centralizar' });
    const right = preview.getByRole('button', { name: 'Alinhar à direita' });

    // The first test of a run waits for Storybook to compile and the components to hydrate.
    await expect(center).toHaveAttribute('aria-pressed', 'false', { timeout: 30_000 });
    await center.click();
    await expect(center).toHaveAttribute('aria-pressed', 'true');

    await right.click();
    await expect(right).toHaveAttribute('aria-pressed', 'true');
    await expect(center).toHaveAttribute('aria-pressed', 'false');
  });

  test('keeps several buttons selected in the multiple story', async ({ page }) => {
    await page.goto('/?path=/story/uai-components-button-group--multiple');
    const preview = page.frameLocator('#storybook-preview-iframe');
    const today = preview.getByRole('button', { name: 'Hoje' });
    const alerts = preview.getByRole('button', { name: 'Com alerta' });

    await expect(today).toHaveAttribute('aria-pressed', 'false', { timeout: 30_000 });
    await today.click();
    await alerts.click();
    await expect(today).toHaveAttribute('aria-pressed', 'true');
    await expect(alerts).toHaveAttribute('aria-pressed', 'true');
  });
});
