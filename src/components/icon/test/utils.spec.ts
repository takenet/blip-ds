import { formatSvg, getIconName, getEmojiName, getLogoName } from '../utils';

describe('Icon Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getIconName', () => {
    it('should format icon name with outline theme', () => {
      const result = getIconName('edit', 'outline');
      expect(result).toBe('asset-icon-edit-outline');
    });

    it('should format icon name with solid theme', () => {
      const result = getIconName('home', 'solid');
      expect(result).toBe('asset-icon-home-solid');
    });

    it('should handle empty string icon name', () => {
      const result = getIconName('', 'outline');
      expect(result).toBe('asset-icon--outline');
    });
  });

  describe('getEmojiName', () => {
    it('should format emoji name correctly', () => {
      const result = getEmojiName('smile');
      expect(result).toBe('asset-emoji-smile');
    });

    it('should handle empty string emoji name', () => {
      const result = getEmojiName('');
      expect(result).toBe('asset-emoji-');
    });

    it('should handle special characters in emoji name', () => {
      const result = getEmojiName('thumbs-up');
      expect(result).toBe('asset-emoji-thumbs-up');
    });
  });

  describe('getLogoName', () => {
    it('should format logo name correctly', () => {
      const result = getLogoName('company');
      expect(result).toBe('asset-logo-company');
    });

    it('should handle empty string logo name', () => {
      const result = getLogoName('');
      expect(result).toBe('asset-logo-');
    });

    it('should handle special characters in logo name', () => {
      const result = getLogoName('brand-name');
      expect(result).toBe('asset-logo-brand-name');
    });
  });

  describe('formatSvg', () => {
    const simpleSvg = `<svg xmlns="http://www.w3.org/2000/svg">
      <path fill="#000000" d="M10 10 L20 20"/>
    </svg>`;

    const multiColorSvg = `<svg xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF0000" d="M10 10 L20 20"/>
      <path fill="#00FF00" d="M30 30 L40 40"/>
    </svg>`;

    describe('null and empty content', () => {
      it('should return empty string when svgContent is null', () => {
        const result = formatSvg(null, '#ff0000');
        expect(result).toBe('');
      });

      it('should return empty string when svgContent is empty', () => {
        const result = formatSvg('', '#ff0000');
        expect(result).toBe('');
      });
    });

    describe('single color icons', () => {
      it('should apply currentColor to mono-color icons without color prop', () => {
        const result = formatSvg(simpleSvg, null);

        expect(result).toContain('fill="currentColor"');
        expect(result).not.toContain('fill="#000000"');
        expect(result).not.toContain('data-customizable');
      });

      it('should apply provided color to mono-color icons with color prop', () => {
        const result = formatSvg(simpleSvg, '#FF0000');

        expect(result).toContain('fill="#FF0000"');
        expect(result).not.toContain('fill="#000000"');
      });

      it('should apply color without hash symbol', () => {
        const result = formatSvg(simpleSvg, 'FF5733');

        expect(result).toContain('FF5733');
        expect(result).not.toContain('fill="#000000"');
      });

      it('should remove width and height attributes', () => {
        const svgWithDimensions = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(svgWithDimensions, null);

        expect(result).not.toContain('width="24"');
        expect(result).not.toContain('height="24"');
      });

      it('should handle outline icons with hardcoded fill on path', () => {
        const outlineIcon = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill="#454545" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(outlineIcon, null);

        expect(result).not.toContain('fill="#454545"');
        expect(result).toContain('fill="currentColor"');
      });

      it('should treat single valid fill with fill="none" paths as mono-color', () => {
        const svgWithNone = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M10 10 L20 20"/>
          <path fill="#FF0000" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(svgWithNone, null);

        expect(result).toContain('fill="currentColor"');
        expect(result).not.toContain('data-customizable');
        expect(result).not.toContain('--icon-layer-');
      });

      it('should apply currentColor to svg with no paths', () => {
        const svgNoPaths = `<svg xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="5"/>
        </svg>`;

        const result = formatSvg(svgNoPaths, null);

        expect(result).toContain('fill="currentColor"');
      });

      it('should apply currentColor when all paths have fill="none"', () => {
        const svgOnlyNone = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M10 10 L20 20"/>
          <path fill="none" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(svgOnlyNone, null);

        expect(result).toContain('fill="currentColor"');
        expect(result).not.toContain('data-customizable');
      });
    });

    describe('multi color icons (solid)', () => {
      it('should detect multi-color and apply CSS variables', () => {
        const result = formatSvg(multiColorSvg, null);

        expect(result).toContain('data-customizable="true"');
        expect(result).toContain('--icon-layer-0');
        expect(result).toContain('--icon-layer-1');
        expect(result).toContain('FF0000');
        expect(result).toContain('00FF00');
      });

      it('should apply inline styles with CSS variable fallbacks', () => {
        const result = formatSvg(multiColorSvg, null);

        expect(result).toContain('style="fill: var(--icon-layer-');
        expect(result).toContain('var(--icon-layer-0, #FF0000)');
        expect(result).toContain('var(--icon-layer-1, #00FF00)');
      });

      it('should map same fill color to same layer variable', () => {
        const repeatedColorSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0000" d="M10 10 L20 20"/>
          <path fill="#00FF00" d="M30 30 L40 40"/>
          <path fill="#FF0000" d="M50 50 L60 60"/>
        </svg>`;

        const result = formatSvg(repeatedColorSvg, null);

        expect(result).toContain('--icon-layer-0');
        expect(result).toContain('--icon-layer-1');
        expect(result).not.toContain('--icon-layer-2');
      });

      it('should skip paths with fill="none" in layer assignment', () => {
        const svgWithNoneInMiddle = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0000" d="M10 10 L20 20"/>
          <path fill="none" d="M20 20 L30 30"/>
          <path fill="#00FF00" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(svgWithNoneInMiddle, null);

        expect(result).toContain('--icon-layer-0');
        expect(result).toContain('--icon-layer-1');
      });

      it('should preserve opacity attribute on paths', () => {
        const multiColorWithOpacity = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#333333" d="M10 10 L20 20"/>
          <path fill="#CCCCCC" opacity="0.5" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(multiColorWithOpacity, null);

        expect(result).toContain('data-customizable="true"');
        expect(result).toContain('opacity="0.5"');
        expect(result).toContain('--icon-layer-0');
        expect(result).toContain('--icon-layer-1');
      });

      it('should apply color prop to all paths when provided, overriding multi-color detection', () => {
        const result = formatSvg(multiColorSvg, '#0000FF');

        expect(result).toContain('fill="#0000FF"');
        expect(result).not.toContain('--icon-layer-');
        expect(result).not.toContain('data-customizable');
        expect(result).not.toContain('#FF0000');
        expect(result).not.toContain('#00FF00');
      });
    });

    describe('emoji icons', () => {
      it('should not apply CSS variables to emoji icons', () => {
        const result = formatSvg(multiColorSvg, null, true);

        expect(result).not.toContain('data-customizable');
        expect(result).not.toContain('--icon-layer-');
      });

      it('should preserve original SVG content for emoji icons', () => {
        const result = formatSvg(multiColorSvg, null, true);

        expect(result).toContain('#FF0000');
        expect(result).toContain('#00FF00');
      });

      it('should ignore color prop for emoji icons', () => {
        const result = formatSvg(multiColorSvg, '#0000FF', true);

        expect(result).not.toContain('data-customizable');
        expect(result).not.toContain('#0000FF');
      });
    });
  });
});
