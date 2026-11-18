import assets from '../asset-config.json';
import { ICON_FONT_FAMILY, ICON_FONT_URL, registerIconFont } from '../uai-icon-font';

class FakeFontFace {
  constructor(
    public family: string,
    public source: string,
    public descriptors: Record<string, string>,
  ) {}
  load = jest.fn(() => Promise.resolve(this));
}

const fakeDocument = (families: string[] = []) => {
  const faces = families.map((family) => ({ family }));
  const fonts = Object.assign(faces, { add: jest.fn((face) => faces.push(face)) });
  return { fonts } as unknown as Document & { fonts: { add: jest.Mock } & unknown[] };
};

describe('uai icon font', () => {
  const original = (globalThis as any).FontFace;
  beforeEach(() => ((globalThis as any).FontFace = FakeFontFace));
  afterAll(() => ((globalThis as any).FontFace = original));

  it('names the font after the blip-tokens release and points to its file on the CDN', () => {
    expect(ICON_FONT_FAMILY).toBe(`uai-icon-${assets.version.replace(/[^A-Za-z0-9]+/g, '-')}`);
    expect(ICON_FONT_FAMILY).toMatch(/^uai-icon-[A-Za-z0-9-]+$/);
    expect(ICON_FONT_URL).toBe(`${assets.assetRoot}uai-icon/font/uai-icon.woff2`);
  });

  it('registers the versioned font once and loads it', () => {
    const doc = fakeDocument(['uai-icon']);
    registerIconFont(doc);
    registerIconFont(doc);
    expect(doc.fonts.add).toHaveBeenCalledTimes(1);
    const face = doc.fonts.add.mock.calls[0][0] as FakeFontFace;
    expect(face.family).toBe(ICON_FONT_FAMILY);
    expect(face.source).toBe(`url("${ICON_FONT_URL}") format("woff2")`);
    expect(face.descriptors).toEqual({ display: 'block' });
    expect(face.load).toHaveBeenCalledTimes(1);
  });

  it('reuses the font another app on the same release already registered, quoted or not', () => {
    for (const family of [ICON_FONT_FAMILY, `"${ICON_FONT_FAMILY}"`]) {
      const doc = fakeDocument([family]);
      registerIconFont(doc);
      expect(doc.fonts.add).not.toHaveBeenCalled();
    }
  });

  it('does nothing without the FontFace API or a document', () => {
    (globalThis as any).FontFace = undefined;
    const doc = fakeDocument();
    expect(() => registerIconFont(doc)).not.toThrow();
    expect(doc.fonts.add).not.toHaveBeenCalled();
    (globalThis as any).FontFace = FakeFontFace;
    expect(() => registerIconFont(undefined)).not.toThrow();
  });
});
