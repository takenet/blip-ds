jest.mock('../../../utils/asset-loader', () => ({
  loadAssetSvg: jest.fn(async (key: string) => {
    if (key === 'asset-logo-google') return '<svg viewBox="0 0 80 40"><path fill="#4285F4"/></svg>';
    throw new Error(`Unknown asset: ${key}`);
  }),
}));

import { newSpecPage } from '@stencil/core/testing';
import { loadAssetSvg } from '../../../utils/asset-loader';
import { UaiLogo } from '../uai-logo';

const render = (html: string) => newSpecPage({ components: [UaiLogo], html });

describe('uai-logo', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    (loadAssetSvg as jest.Mock).mockClear();
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('loads the versioned logo asset by name and preserves its artwork', async () => {
    const page = await render('<uai-logo name="google"></uai-logo>');
    await page.waitForChanges();

    expect(loadAssetSvg).toHaveBeenCalledWith('asset-logo-google');
    expect(page.root.shadowRoot.querySelector('svg').getAttribute('viewBox')).toBe('0 0 80 40');
    expect(page.root.shadowRoot.querySelector('path').getAttribute('fill')).toBe('#4285F4');
  });

  it('exposes an accessible name when aria-label is provided', async () => {
    const page = await render('<uai-logo name="google" aria-label="Google"></uai-logo>');

    expect(page.root.getAttribute('role')).toBe('img');
    expect(page.root.getAttribute('aria-label')).toBe('Google');
    expect(page.root.getAttribute('aria-hidden')).toBeNull();
  });

  it('hides a decorative logo from assistive technology and forwards data-test', async () => {
    const page = await render('<uai-logo name="google" data-test="brand-logo"></uai-logo>');
    await page.waitForChanges();

    expect(page.root.getAttribute('aria-hidden')).toBe('true');
    expect(page.root.getAttribute('role')).toBeNull();
    expect(page.root.shadowRoot.querySelector('[data-test="brand-logo"]')).not.toBeNull();
  });

  it('does not render an unknown logo and warns once', async () => {
    const page = await render('<uai-logo name="unknown"></uai-logo>');
    await page.waitForChanges();
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('svg')).toBeNull();
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith('[uai-logo] Failed to load logo "unknown" from blip-tokens.');
  });

  it('reloads the asset when its name changes', async () => {
    const page = await render('<uai-logo name="google"></uai-logo>');
    const name = page.rootInstance.name;

    page.rootInstance.name = 'updated';
    await page.waitForChanges();

    expect(page.rootInstance.name).not.toBe(name);
    expect(loadAssetSvg).toHaveBeenLastCalledWith('asset-logo-updated');
  });
});
