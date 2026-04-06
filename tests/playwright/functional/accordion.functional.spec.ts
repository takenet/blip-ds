import { test, expect, gotoStoryUrl } from '../fixtures/storybook.fixture';

test.describe('Accordion - Functional Tests', () => {
  test.beforeEach(async ({ storybook }) => {
    await storybook.goto('components-accordion--properties');
  });

  test('toggle opens and closes accordion', async ({ page }) => {
    // Use bdsToggle event as proof that toggle worked
    const toggled = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const accordion = document.querySelector('bds-accordion') as any;
        if (!accordion) {
          resolve(false);
          return;
        }
        accordion.addEventListener('bdsToggle', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        accordion.toggle();
      });
    });
    expect(toggled).toBe(true);
  });

  test('emits bdsToggle event', async ({ page }) => {
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const accordion = document.querySelector('bds-accordion') as any;
        if (!accordion) {
          resolve(false);
          return;
        }
        accordion.addEventListener('bdsToggle', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        accordion.toggle();
      });
    });
    expect(eventFired).toBe(true);
  });

  test('open and close methods work', async ({ page }) => {
    const openResult = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const accordion = document.querySelector('bds-accordion') as any;
        if (!accordion) {
          resolve(false);
          return;
        }
        accordion.addEventListener('bdsAccordionOpen', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        accordion.open();
      });
    });
    expect(openResult).toBe(true);

    const closeResult = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const accordion = document.querySelector('bds-accordion') as any;
        if (!accordion) {
          resolve(false);
          return;
        }
        accordion.addEventListener('bdsAccordionClose', () => resolve(true));
        setTimeout(() => resolve(false), 3000);
        accordion.close();
      });
    });
    expect(closeResult).toBe(true);
  });
});
