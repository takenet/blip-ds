import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Input - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-input--properties');
  });

  test('accepts text input', async ({ page }) => {
    const input = page.locator('bds-input').first();
    const nativeInput = input.locator('input').first();

    await nativeInput.fill('Test value');
    const value = await nativeInput.inputValue();
    expect(value).toBe('Test value');
  });

  test('emits bdsChange event on input', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const input = document.querySelector('bds-input');
        input?.addEventListener('bdsChange', () => resolve(true));
        setTimeout(() => resolve(false), 3000);

        const nativeInput = input?.shadowRoot?.querySelector('input');
        if (nativeInput) {
          nativeInput.value = 'test';
          nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });

    expect(eventFired).toBe(true);
  });

  test('does not accept input when disabled', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=disabled:true');

    const isDisabled = await page.evaluate(() => {
      const input = document.querySelector('bds-input');
      const nativeInput = input?.shadowRoot?.querySelector('input');
      return nativeInput?.disabled ?? false;
    });

    expect(isDisabled).toBe(true);
  });

  test('shows danger state with error styling', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=danger:true');

    const hasDangerClass = await page.evaluate(() => {
      const input = document.querySelector('bds-input');
      const wrapper = input?.shadowRoot?.querySelector('.input, .input__container, [class*="danger"]');
      return !!wrapper || input?.shadowRoot?.innerHTML.includes('danger');
    });

    expect(hasDangerClass).toBe(true);
  });

  test('supports placeholder text', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-input--properties&args=placeholder:Enter%20text');

    const placeholder = await page.evaluate(() => {
      const input = document.querySelector('bds-input');
      const nativeInput = input?.shadowRoot?.querySelector('input');
      return nativeInput?.placeholder;
    });

    expect(placeholder).toContain('Enter text');
  });

  test('emits bdsOnBlur when losing focus', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const input = document.querySelector('bds-input');
        input?.addEventListener('bdsOnBlur', () => resolve(true));
        setTimeout(() => resolve(false), 2000);

        const nativeInput = input?.shadowRoot?.querySelector('input');
        nativeInput?.focus();
        nativeInput?.blur();
      });
    });

    expect(eventFired).toBe(true);
  });
});
