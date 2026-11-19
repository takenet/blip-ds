import {
  UAI_RICH_TEXT_FEATURES,
  UAI_RICH_TEXT_FEATURE_GROUPS,
  UAI_RICH_TEXT_HIGHLIGHT_COLORS,
  UAI_RICH_TEXT_TEXT_COLORS,
  isSafeUrl,
  normalizeUrl,
} from '../uai-rich-text-tools';

describe('uai-rich-text features', () => {
  it('lists every feature once, in toolbar order', () => {
    expect(new Set(UAI_RICH_TEXT_FEATURES).size).toBe(UAI_RICH_TEXT_FEATURES.length);
    expect(UAI_RICH_TEXT_FEATURES).toEqual(UAI_RICH_TEXT_FEATURE_GROUPS.flat());
    expect(UAI_RICH_TEXT_FEATURES).toEqual(
      expect.arrayContaining(['bold', 'link', 'image', 'table', 'textColor', 'textAlign', 'history']),
    );
  });
});

describe('uai-rich-text urls', () => {
  it.each([
    ['https://blip.ai', true],
    ['http://blip.ai', true],
    ['mailto:a@b.com', true],
    ['tel:+5531', true],
    ['/pagina', true],
    ['#secao', true],
    ['javascript:alert(1)', false],
    [' JavaScript:alert(1)', false],
    ['data:image/png;base64,AAAA', false],
    ['vbscript:x', false],
  ])('treats %s as safe: %s', (url, safe) => {
    expect(isSafeUrl(url)).toBe(safe);
  });

  it('adds https:// only to addresses without a protocol or path', () => {
    expect(normalizeUrl(' blip.ai ')).toBe('https://blip.ai');
    expect(normalizeUrl('http://blip.ai')).toBe('http://blip.ai');
    expect(normalizeUrl('mailto:a@b.com')).toBe('mailto:a@b.com');
    expect(normalizeUrl('/pagina')).toBe('/pagina');
    expect(normalizeUrl('#secao')).toBe('#secao');
    expect(normalizeUrl('javascript:x')).toBe('javascript:x');
    expect(normalizeUrl('')).toBe('');
  });
});

describe('uai-rich-text colors', () => {
  it('offers plain color values for the edited HTML', () => {
    for (const color of [...UAI_RICH_TEXT_TEXT_COLORS, ...UAI_RICH_TEXT_HIGHLIGHT_COLORS]) {
      expect(color.value).toMatch(/^#[0-9a-f]{6}$/);
      expect(color.label).toBeTruthy();
    }
  });
});
