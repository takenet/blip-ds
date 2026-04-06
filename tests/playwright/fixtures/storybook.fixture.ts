import { test as base, expect, Page } from '@playwright/test';

/**
 * Navigates to a Storybook story iframe and waits for the component to render.
 * Story ID format: "components-button--properties"
 */
async function gotoStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`, {
    waitUntil: 'domcontentloaded',
  });
  // Wait for Stencil components to hydrate (they get .hydrated class)
  await page.waitForFunction(
    () => {
      const root = document.querySelector('#storybook-root') || document.querySelector('#root');
      if (!root) return false;
      const bdsElements = root.querySelectorAll('[class]');
      let hasBds = false;
      for (const el of bdsElements) {
        if (el.tagName.startsWith('BDS-')) {
          hasBds = true;
          if (!el.classList.contains('hydrated')) {
            return false;
          }
        }
      }
      return hasBds || root.children.length > 0;
    },
    { timeout: 15_000 },
  );
  // Extra settle time for animations/transitions
  await page.waitForTimeout(500);
}

/**
 * Gets the storybook root container element.
 */
function getStoryRoot(page: Page) {
  return page.locator('#storybook-root, #root').first();
}

/**
 * Custom test fixture that extends Playwright's base test with Storybook helpers.
 */
export const test = base.extend<{
  storybook: {
    goto: (storyId: string) => Promise<void>;
    root: () => ReturnType<typeof getStoryRoot>;
    screenshotStory: (storyId: string, name: string) => Promise<void>;
  };
}>({
  storybook: async ({ page }, use) => {
    await use({
      goto: (storyId: string) => gotoStory(page, storyId),
      root: () => getStoryRoot(page),
      screenshotStory: async (storyId: string, name: string) => {
        await gotoStory(page, storyId);
        const root = getStoryRoot(page);
        await expect(root).toHaveScreenshot(`${name}.png`);
      },
    });
  },
});

/**
 * Navigate to a story URL with args, using domcontentloaded and hydration wait.
 * Use this instead of page.goto with networkidle for Storybook pages.
 */
export async function gotoStoryUrl(page: Page, url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(
    () => {
      const root = document.querySelector('#storybook-root') || document.querySelector('#root');
      if (!root) return false;
      const bdsElements = root.querySelectorAll('[class]');
      let hasBds = false;
      for (const el of bdsElements) {
        if (el.tagName.startsWith('BDS-')) {
          hasBds = true;
          if (!el.classList.contains('hydrated')) return false;
        }
      }
      return hasBds || root.children.length > 0;
    },
    { timeout: 15_000 },
  );
  await page.waitForTimeout(500);
}

export { expect };
