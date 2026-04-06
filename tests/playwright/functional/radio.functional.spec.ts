import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Radio Button - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-radio-button--properties');
  });

  test('selects on click', async ({ page }) => {
    const result = await page.evaluate(() => {
      // The component tag is bds-radio (not bds-radio-button)
      const radio = document.querySelector('bds-radio') as any;
      if (!radio) return { before: null, after: null };
      const before = !!radio.checked;
      // Click the label inside shadow DOM
      const label = radio.shadowRoot?.querySelector('label');
      if (label) label.click();
      return { before, after: !!radio.checked };
    });

    expect(result.after).toBe(true);
  });

  test('emits bdsClickChange event', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const radio = document.querySelector('bds-radio') as any;
        if (!radio) {
          resolve(false);
          return;
        }
        // Radio emits bdsClickChange on click, bdsChange via @Watch
        radio.addEventListener('bdsClickChange', () => resolve(true));
        radio.addEventListener('bdsChange', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        const label = radio.shadowRoot?.querySelector('label');
        if (label) label.click();
      });
    });

    expect(eventFired).toBe(true);
  });

  test('does not select when disabled', async ({ page }) => {
    await gotoStoryUrl(page, '/iframe.html?id=components-radio-button--properties&args=disabled:true');

    const selected = await page.evaluate(() => {
      const radio = document.querySelector('bds-radio') as any;
      if (!radio) return false;
      const before = !!radio.checked;
      radio.click();
      return before !== !!radio.checked;
    });

    expect(selected).toBe(false);
  });
});
