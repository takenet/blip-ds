import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Switch - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-switch--properties');
  });

  test('toggles state on click', async ({ page }) => {
    const result = await page.evaluate(() => {
      const sw = document.querySelector('bds-switch') as any;
      const before = sw?.checked;
      // Click the native label inside shadow DOM
      const label = sw?.shadowRoot?.querySelector('label');
      if (label) label.click();
      return { before: !!before, after: !!sw?.checked };
    });

    expect(result.before).not.toEqual(result.after);
  });

  test('emits bdsChange event on toggle', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const sw = document.querySelector('bds-switch') as any;
        sw?.addEventListener('bdsChange', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        // Click native label in shadow DOM
        const label = sw?.shadowRoot?.querySelector('label');
        if (label) label.click();
      });
    });

    expect(eventFired).toBe(true);
  });

  test('does not toggle when disabled', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-switch--properties&args=disabled:true');

    const toggled = await page.evaluate(() => {
      const sw = document.querySelector('bds-switch') as any;
      const before = !!sw?.checked;
      sw?.click();
      return before !== !!sw?.checked;
    });

    expect(toggled).toBe(false);
  });
});
