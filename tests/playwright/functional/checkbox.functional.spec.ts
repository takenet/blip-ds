import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Checkbox - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-checkbox--properties');
  });

  test('toggles checked state on click', async ({ page }) => {
    const result = await page.evaluate(() => {
      const checkbox = document.querySelector('bds-checkbox') as any;
      const before = checkbox?.checked;
      // Click the native label inside shadow DOM to trigger toggle
      const label = checkbox?.shadowRoot?.querySelector('label');
      if (label) label.click();
      else checkbox?.toggle?.();
      return { before, after: checkbox?.checked };
    });

    expect(result.after).not.toEqual(result.before);
  });

  test('emits bdsChange event on toggle', async ({ page }) => {
    const eventData = await page.evaluate(() => {
      return new Promise<any>((resolve) => {
        const checkbox = document.querySelector('bds-checkbox') as any;
        checkbox?.addEventListener('bdsChange', (e: any) => {
          resolve({ fired: true, detail: e.detail });
        });
        setTimeout(() => resolve({ fired: false }), 3000);
        // Use toggle method which is guaranteed to emit bdsChange
        checkbox?.toggle?.();
      });
    });

    expect(eventData.fired).toBe(true);
  });

  test('does not toggle when disabled', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-checkbox--properties&args=disabled:true');

    const toggled = await page.evaluate(() => {
      const checkbox = document.querySelector('bds-checkbox') as any;
      const before = checkbox?.checked;
      checkbox?.click();
      return before !== checkbox?.checked;
    });

    expect(toggled).toBe(false);
  });

  test('supports indeterminate state', async ({ storybook, page }) => {
    await storybook.goto('components-checkbox--indeterminate-example');

    const hasIndeterminate = await page.evaluate(() => {
      const checkboxes = document.querySelectorAll('bds-checkbox');
      return Array.from(checkboxes).some((cb: any) => cb.indeterminate === true);
    });

    expect(hasIndeterminate).toBe(true);
  });

  test('label click toggles checkbox', async ({ page }) => {
    const result = await page.evaluate(() => {
      const checkbox = document.querySelector('bds-checkbox') as any;
      const before = checkbox?.checked;
      const label = checkbox?.shadowRoot?.querySelector('label');
      label?.click();
      return { before, after: checkbox?.checked };
    });

    expect(result.before).not.toEqual(result.after);
  });
});
