jest.mock('../../../utils/asset-loader', () => ({
  loadAssetSvg: jest.fn(async (key: string) => {
    if (key === 'asset-emoji-smiling-face') return '<svg viewBox="0 0 40 40"><circle fill="#FABC04"/></svg>';
    throw new Error(`Unknown asset: ${key}`);
  }),
}));

import { newSpecPage } from '@stencil/core/testing';
import { loadAssetSvg } from '../../../utils/asset-loader';
import { UaiEmoji } from '../uai-emoji';

const render = (html: string) => newSpecPage({ components: [UaiEmoji], html });

describe('uai-emoji', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    (loadAssetSvg as jest.Mock).mockClear();
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('loads the versioned emoji asset by name and preserves its artwork', async () => {
    const page = await render('<uai-emoji name="smiling-face"></uai-emoji>');
    await page.waitForChanges();

    expect(loadAssetSvg).toHaveBeenCalledWith('asset-emoji-smiling-face');
    expect(page.root.shadowRoot.querySelector('svg').getAttribute('viewBox')).toBe('0 0 40 40');
    expect(page.root.shadowRoot.querySelector('circle').getAttribute('fill')).toBe('#FABC04');
  });

  it('exposes an accessible name when aria-label is provided', async () => {
    const page = await render('<uai-emoji name="smiling-face" aria-label="Sorrindo"></uai-emoji>');

    expect(page.root.getAttribute('role')).toBe('img');
    expect(page.root.getAttribute('aria-label')).toBe('Sorrindo');
    expect(page.root.getAttribute('aria-hidden')).toBeNull();
  });

  it('hides a decorative emoji from assistive technology and forwards data-test', async () => {
    const page = await render('<uai-emoji name="smiling-face" data-test="mood"></uai-emoji>');
    await page.waitForChanges();

    expect(page.root.getAttribute('aria-hidden')).toBe('true');
    expect(page.root.getAttribute('role')).toBeNull();
    expect(page.root.shadowRoot.querySelector('[data-test="mood"]')).not.toBeNull();
  });

  it('does not render an unknown emoji and warns once', async () => {
    const page = await render('<uai-emoji name="unknown"></uai-emoji>');
    await page.waitForChanges();
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('svg')).toBeNull();
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith('[uai-emoji] Failed to load emoji "unknown" from blip-tokens.');
  });

  it('reloads the asset when its name changes', async () => {
    const page = await render('<uai-emoji name="smiling-face"></uai-emoji>');
    const name = page.rootInstance.name;

    page.rootInstance.name = 'updated';
    await page.waitForChanges();

    expect(page.rootInstance.name).not.toBe(name);
    expect(loadAssetSvg).toHaveBeenLastCalledWith('asset-emoji-updated');
  });

  it('loads the emoji when reconnected while its asset request is pending', async () => {
    let resolveAsset: (svg: string) => void;
    const pendingAsset = new Promise<string>((resolve) => {
      resolveAsset = resolve;
    });
    (loadAssetSvg as jest.Mock).mockImplementationOnce(() => pendingAsset).mockImplementationOnce(() => pendingAsset);

    const page = await render('<uai-emoji name="smiling-face"></uai-emoji>');
    await Promise.resolve();
    expect(loadAssetSvg).toHaveBeenCalledTimes(1);

    page.root.remove();
    await page.waitForChanges();
    page.body.appendChild(page.root);
    await page.waitForChanges();
    await Promise.resolve();
    expect(loadAssetSvg).toHaveBeenCalledTimes(2);

    resolveAsset('<svg viewBox="0 0 40 40"><circle fill="#FABC04"/></svg>');
    await pendingAsset;
    await Promise.resolve();
    await Promise.resolve();
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('svg')).not.toBeNull();
  });
});
