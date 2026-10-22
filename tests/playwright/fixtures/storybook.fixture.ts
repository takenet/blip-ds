import { test as base, expect, Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import assetConfig from '../../../src/utils/asset-config.json';

const assetOrigin = new URL(assetConfig.assetRoot).origin;
const assetUrls = new Set(Object.values(assetConfig.assets).map(assetPath => new URL(assetPath, assetConfig.assetRoot).href));
const assetSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h8v8H2z"/><path fill="#006eff" d="M12 12h8v8h-8z"/></svg>';
const visualAssets = new Map([
  [new URL(assetConfig.assets['illustration/spots/star'], assetConfig.assetRoot).href, readFileSync(join(__dirname, 'assets/star.svg'), 'utf8')],
]);

/**
 * Navigates to a Storybook story iframe and waits for the component to render.
 * Story ID format: "components-deprecated-button--properties"
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
  context: async ({ context }, use) => {
    await context.route(url => url.origin === assetOrigin, async route => {
      const knownAsset = assetUrls.has(route.request().url());
      await route.fulfill({
        status: knownAsset ? 200 : 404,
        headers: {
          'content-type': 'image/svg+xml',
          'access-control-allow-origin': '*',
          'access-control-expose-headers': 'x-blip-asset-fixture',
          'x-blip-asset-fixture': 'local',
        },
        body: knownAsset ? visualAssets.get(route.request().url()) || assetSvg : '',
      });
    });
    await use(context);
  },
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
