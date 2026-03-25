import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Chip Clickable - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-chip-clickable--properties');
  });

  test('renders correctly', async ({ page }) => {
    const exists = await page.evaluate(() => !!document.querySelector('bds-chip-clickable'));
    expect(exists).toBe(true);
  });
});

test.describe('Chip Selected - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-chip-selected--properties');
  });

  test('emits chipClick event on click', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const chip = document.querySelector('bds-chip-selected') as any;
        if (!chip) {
          resolve(false);
          return;
        }
        chip.addEventListener('chipClick', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        const chipDiv = chip.shadowRoot?.querySelector('.chip');
        if (chipDiv) (chipDiv as HTMLElement).click();
      });
    });
    expect(eventFired).toBe(true);
  });
});

test.describe('Chip Tag - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-chip-tag--properties');
  });

  test('renders correctly', async ({ page }) => {
    const exists = await page.evaluate(() => !!document.querySelector('bds-chip-tag'));
    expect(exists).toBe(true);
  });
});
