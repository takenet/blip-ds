import { test, expect } from '../fixtures/storybook.fixture';

test.describe('Button - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-button--properties');
  });

  test('emits bdsClick event on click', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const btn = document.querySelector('bds-button');
        btn?.addEventListener('bdsClick', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        // Click the native button inside the shadow DOM
        const nativeBtn = btn?.shadowRoot?.querySelector('button');
        if (nativeBtn) nativeBtn.click();
        else btn?.click();
      });
    });

    expect(eventFired).toBe(true);
  });

  test('does not emit click when disabled', async ({ storybook, page }) => {
    await storybook.goto('components-button--properties');
    // Set disabled via property
    await page.evaluate(() => {
      const btn = document.querySelector('bds-button') as any;
      if (btn) btn.disabled = true;
    });
    await page.waitForTimeout(500);

    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const btn = document.querySelector('bds-button');
        btn?.addEventListener('bdsClick', () => resolve(true));
        setTimeout(() => resolve(false), 1000);
        const nativeBtn = btn?.shadowRoot?.querySelector('button');
        if (nativeBtn) nativeBtn.click();
        else btn?.click();
      });
    });

    expect(eventFired).toBe(false);
  });

  test('renders with correct text content', async ({ page }) => {
    const button = page.locator('bds-button').first();
    await expect(button).toBeVisible();
    const text = await button.textContent();
    expect(text?.trim()).toBeTruthy();
  });

  test('has correct aria attributes when disabled', async ({ page }) => {
    await page.evaluate(() => {
      const btn = document.querySelector('bds-button') as any;
      if (btn) btn.disabled = true;
    });
    await page.waitForTimeout(500);

    const isDisabled = await page.evaluate(() => {
      const btn = document.querySelector('bds-button');
      const nativeBtn = btn?.shadowRoot?.querySelector('button');
      return nativeBtn?.hasAttribute('disabled') || nativeBtn?.getAttribute('aria-disabled') === 'true';
    });

    expect(isDisabled).toBe(true);
  });

  test('shows loading spinner when loading prop is set', async ({ page }) => {
    await page.evaluate(() => {
      const btn = document.querySelector('bds-button') as any;
      if (btn) btn.bdsLoading = true;
    });
    await page.waitForTimeout(500);

    const hasSpinner = await page.evaluate(() => {
      const btn = document.querySelector('bds-button');
      const spinner = btn?.shadowRoot?.querySelector('bds-loading-spinner');
      return !!spinner;
    });

    expect(hasSpinner).toBe(true);
  });

  test('keyboard activation with Enter', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const btn = document.querySelector('bds-button');
        btn?.addEventListener('bdsClick', () => resolve(true));
        setTimeout(() => resolve(false), 2000);

        // The button has a div.focus with onKeyDown handler
        const focusDiv = btn?.shadowRoot?.querySelector('.focus');
        if (focusDiv) {
          focusDiv.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        } else {
          const nativeBtn = btn?.shadowRoot?.querySelector('button');
          nativeBtn?.click();
        }
      });
    });

    expect(eventFired).toBe(true);
  });
});
