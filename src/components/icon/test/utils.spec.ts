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

    describe('basic SVG handling', () => {
      it('should return a string when given valid SVG content', () => {
        const simpleSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(simpleSvg, null);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should return a string when given SVG with color prop', () => {
        const simpleSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(simpleSvg, '#FF0000');

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should process multi-color SVG content', () => {
        const multiColorSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0000" d="M10 10 L20 20"/>
          <path fill="#00FF00" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(multiColorSvg, null);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should process emoji SVG content', () => {
        const multiColorSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0000" d="M10 10 L20 20"/>
          <path fill="#00FF00" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(multiColorSvg, null, true);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should handle SVG with width and height attributes', () => {
        const svgWithDimensions = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(svgWithDimensions, null);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should handle SVG with fill="none"', () => {
        const svgWithNone = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M10 10 L20 20"/>
          <path fill="#FF0000" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(svgWithNone, null);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should handle SVG with opacity attribute', () => {
        const multiColorWithOpacity = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#333333" d="M10 10 L20 20"/>
          <path fill="#CCCCCC" opacity="0.5" d="M30 30 L40 40"/>
        </svg>`;

        const result = formatSvg(multiColorWithOpacity, null);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should handle SVG with no paths', () => {
        const svgNoPaths = `<svg xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="5"/>
        </svg>`;

        const result = formatSvg(svgNoPaths, null);

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should handle color with hash symbol', () => {
        const simpleSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(simpleSvg, '#FF5733');

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });

      it('should handle color without hash symbol', () => {
        const simpleSvg = `<svg xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M10 10 L20 20"/>
        </svg>`;

        const result = formatSvg(simpleSvg, 'FF5733');

        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      });
    });
  });
});
