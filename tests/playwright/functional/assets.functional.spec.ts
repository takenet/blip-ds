import { test, expect } from '../fixtures/storybook.fixture';
import assetConfig from '../../../src/utils/asset-config.json';

test.describe('Offline CDN artwork', () => {
  test('serves every asset family locally with browser networking disabled', async ({ page, context }) => {
    await context.setOffline(true);
    const paths = Object.values(assetConfig.assets);
    for (const family of ['icons/', 'emojis/', 'logos/', 'illustrations/', 'components/']) {
      const assetPath = paths.find(value => value.startsWith(family));
      expect(assetPath, `Missing asset family: ${family}`).toBeTruthy();
      const url = new URL(assetPath, assetConfig.assetRoot).href;
      const result = await page.evaluate(async assetUrl => {
        const response = await fetch(assetUrl);
        return { status: response.status, fixture: response.headers.get('x-blip-asset-fixture'), body: await response.text() };
      }, url);
      expect(result.status).toBe(200);
      expect(result.fixture).toBe('local');
      expect(result.body).toContain('<svg');
    }
  });

  test('unknown CDN paths return a local 404 without an upstream request', async ({ page, context }) => {
    await context.setOffline(true);
    const url = new URL('icons/not-in-the-manifest.svg', assetConfig.assetRoot).href;
    const result = await page.evaluate(async assetUrl => {
      const response = await fetch(assetUrl);
      return { status: response.status, fixture: response.headers.get('x-blip-asset-fixture') };
    }, url);
    expect(result).toEqual({ status: 404, fixture: 'local' });
  });

  test('renders inline icons and native images from the local fixture', async ({ page, storybook }) => {
    await storybook.goto('components-icon--properties');
    await expect(page.locator('bds-icon svg').first()).toBeVisible();
    await page.context().setOffline(true);
    const assetPath = assetConfig.assets['illustration/default/accessibility-1'];
    await page.locator('body').evaluate((body, url) => {
      const image = document.createElement('img');
      image.id = 'offline-cdn-image';
      image.src = url;
      body.append(image);
    }, new URL(assetPath, assetConfig.assetRoot).href);
    await expect.poll(() => page.locator('#offline-cdn-image').evaluate(image => (image as HTMLImageElement).naturalWidth)).toBe(24);
  });
});