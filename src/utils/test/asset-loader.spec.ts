jest.mock('../asset-config.json', () => ({
  assetRoot: 'https://assets.example.com/blip-tokens/1.2.3/',
  assets: {
    'asset-icon-close-outline': 'icons/close-outline.svg',
    'asset-logo-retry': 'logos/retry.svg',
    'asset-emoji-invalid': 'emojis/invalid.svg',
  },
}));

import { getAssetUrl, loadAssetSvg } from '../asset-loader';

describe('global asset delivery', () => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor"/></svg>';
  const fetchMock = jest.fn();
  const originalParser = global.DOMParser;

  beforeAll(() => {
    global.DOMParser = jest.fn(() => ({
      parseFromString: (content: string) => {
        const container = document.createElement('div');
        container.innerHTML = content;
        return { documentElement: container.firstElementChild, getElementsByTagName: (name: string) => container.getElementsByTagName(name) };
      },
    })) as unknown as typeof DOMParser;
  });

  afterAll(() => {
    global.DOMParser = originalParser;
  });

  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock;
  });

  it('resolves an exact version without consulting the application host or cluster', () => {
    expect(getAssetUrl('asset-icon-close-outline')).toBe('https://assets.example.com/blip-tokens/1.2.3/icons/close-outline.svg');
    expect(() => getAssetUrl('../unknown')).toThrow();
  });

  it('deduplicates concurrent requests and caches raw SVG', async () => {
    fetchMock.mockResolvedValue({ ok: true, headers: { get: () => 'image/svg+xml' }, text: async () => svg });
    const first = loadAssetSvg('asset-icon-close-outline');
    const second = loadAssetSvg('asset-icon-close-outline');
    expect(first).toBe(second);
    expect(await first).toBe(svg);
    expect(await loadAssetSvg('asset-icon-close-outline')).toBe(svg);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][1].credentials).toBe('omit');
  });

  it('does not cache failed requests and supports a later retry', async () => {
    fetchMock.mockResolvedValueOnce({ ok: false, headers: { get: () => 'text/html' } });
    await expect(loadAssetSvg('asset-logo-retry')).rejects.toThrow();
    fetchMock.mockResolvedValueOnce({ ok: true, headers: { get: () => 'image/svg+xml' }, text: async () => svg });
    await expect(loadAssetSvg('asset-logo-retry')).resolves.toBe(svg);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('rejects HTML error pages even with an SVG MIME type', async () => {
    fetchMock.mockResolvedValue({ ok: true, headers: { get: () => 'image/svg+xml' }, text: async () => '<html/>' });
    await expect(loadAssetSvg('asset-emoji-invalid')).rejects.toThrow('Invalid SVG');
  });
});