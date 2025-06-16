import { formatSvg, getIconName, getEmojiName, getLogoName } from '../utils';

// Mock DOM methods for testing
Object.defineProperty(global, 'document', {
  value: {
    createElement: jest.fn(() => ({
      innerHTML: '',
      firstElementChild: {
        removeAttribute: jest.fn(),
        setAttribute: jest.fn(),
        getElementsByTagName: jest.fn(() => []),
      },
    })),
  },
});

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
    let mockDiv: any;
    let mockSvgElement: any;
    let mockPath: any;

    beforeEach(() => {
      mockPath = {
        setAttribute: jest.fn(),
      };

      mockSvgElement = {
        removeAttribute: jest.fn(),
        setAttribute: jest.fn(),
        getElementsByTagName: jest.fn(() => [mockPath]),
      };

      mockDiv = {
        innerHTML: '',
        firstElementChild: mockSvgElement,
      };

      (document.createElement as jest.Mock).mockReturnValue(mockDiv);
    });

    it('should return empty string when svgContent is null', () => {
      const result = formatSvg(null, '#ff0000');
      expect(result).toBe('');
    });

    it('should return empty string when svgContent is empty', () => {
      const result = formatSvg('', '#ff0000');
      expect(result).toBe('');
    });

    it('should format SVG content for regular icons', () => {
      const svgContent = '<svg><path d="M0,0"></path></svg>';
      mockDiv.innerHTML = svgContent;

      const result = formatSvg(svgContent, '#ff0000', false);

      expect(document.createElement).toHaveBeenCalledWith('div');
      expect(mockSvgElement.removeAttribute).toHaveBeenCalledWith('width');
      expect(mockSvgElement.removeAttribute).toHaveBeenCalledWith('height');
      expect(mockSvgElement.setAttribute).toHaveBeenCalledWith('fill', 'currentColor');
      expect(mockPath.setAttribute).toHaveBeenCalledWith('fill', '#ff0000');
      expect(mockSvgElement.setAttribute).toHaveBeenCalledWith('fill', '#ff0000');
      expect(result).toBe(svgContent);
    });

    it('should format SVG content for emojis without clearing paths', () => {
      const svgContent = '<svg><path d="M0,0"></path></svg>';
      mockDiv.innerHTML = svgContent;

      const result = formatSvg(svgContent, '#ff0000', true);

      expect(mockSvgElement.removeAttribute).toHaveBeenCalledWith('width');
      expect(mockSvgElement.removeAttribute).toHaveBeenCalledWith('height');
      expect(mockSvgElement.setAttribute).toHaveBeenCalledWith('fill', 'currentColor');
      expect(mockPath.setAttribute).not.toHaveBeenCalled();
      expect(result).toBe(svgContent);
    });

    it('should use currentColor when color is null', () => {
      const svgContent = '<svg><path d="M0,0"></path></svg>';
      mockDiv.innerHTML = svgContent;

      formatSvg(svgContent, null, false);

      expect(mockPath.setAttribute).toHaveBeenCalledWith('fill', 'currentColor');
      expect(mockSvgElement.setAttribute).toHaveBeenCalledWith('fill', 'currentColor');
    });

    it('should handle SVG with multiple paths', () => {
      const svgContent = '<svg><path d="M0,0"></path></svg>';
      mockDiv.innerHTML = svgContent;
      
      const mockPath2 = { setAttribute: jest.fn() };
      mockSvgElement.getElementsByTagName.mockReturnValue([mockPath, mockPath2]);

      formatSvg(svgContent, '#00ff00', false);

      expect(mockPath.setAttribute).toHaveBeenCalledWith('fill', '#00ff00');
      expect(mockPath2.setAttribute).toHaveBeenCalledWith('fill', '#00ff00');
    });

    it('should handle SVG with no paths', () => {
      const svgContent = '<svg></svg>';
      mockDiv.innerHTML = svgContent;
      mockSvgElement.getElementsByTagName.mockReturnValue([]);

      const result = formatSvg(svgContent, '#ff0000', false);

      expect(mockSvgElement.setAttribute).toHaveBeenCalledWith('fill', '#ff0000');
      expect(result).toBe(svgContent);
    });
  });
});
