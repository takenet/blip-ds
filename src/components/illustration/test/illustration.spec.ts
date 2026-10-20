import { newSpecPage } from '@stencil/core/testing';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;
const mockGetAssetUrl = jest.fn();

jest.mock('../../../utils/asset-loader', () => ({ getAssetUrl: (key: string) => mockGetAssetUrl(key) }));

import { BdsIllustration } from '../illustration';

describe('bds-illustration', () => {
  beforeEach(() => {
    mockFetch.mockClear();
    mockGetAssetUrl.mockReset();
    mockGetAssetUrl.mockImplementation((key: string) => `https://assets.example.com/blip-tokens/1.2.3/illustrations/${key.slice('illustration/'.length)}.svg`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create component', () => {
    const component = new BdsIllustration();
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(BdsIllustration);
  });

  it('should have correct default properties', async () => {
    const page = await newSpecPage({
      components: [BdsIllustration],
      html: `<bds-illustration></bds-illustration>`,
    });

    expect(page.rootInstance.type).toBe('default');
    expect(page.rootInstance.name).toBeUndefined();
    expect(page.rootInstance.alt).toBeUndefined();
    expect(page.rootInstance.dataTest).toBe(null);
  });

  it('should render method should return JSX element', () => {
    const component = new BdsIllustration();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  describe('Rendering', () => {
    it('should render basic illustration component', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.root).toBeTruthy();
      expect(page.root.tagName).toBe('BDS-ILLUSTRATION');
      expect(page.root.getAttribute('role')).toBe('img');
      expect(page.root).toHaveClass('bds-illustration');
    });

    it('should render default placeholder when no illustration content', async () => {
      // Mock fetch to return a never-resolving promise so we can check initial state
      mockFetch.mockClear();
      mockGetAssetUrl.mockReturnValue(undefined);

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      // Check initial state before fetch completes
      const defaultDiv = page.root.shadowRoot.querySelector('.default');
      expect(defaultDiv).toBeTruthy();
    });

    it('should render img element when illustration content is loaded', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      // Simulate loading illustration content
      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe(
        'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg=='
      );
      expect(img.getAttribute('draggable')).toBe('false');
    });

    it('should render with data-test attribute on img', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" data-test="illustration-test"></bds-illustration>`,
      });

      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('data-test')).toBe('illustration-test');
    });

    it('should render with data-test attribute on default div', async () => {
      // Mock fetch to delay response so we can check initial state
      mockFetch.mockClear();
      mockGetAssetUrl.mockReturnValue(undefined);

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" data-test="illustration-test"></bds-illustration>`,
      });

      const defaultDiv = page.root.shadowRoot.querySelector('.default');
      expect(defaultDiv.getAttribute('data-test')).toBe('illustration-test');
    });

    it('should render with alt attribute', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" alt="Test illustration"></bds-illustration>`,
      });

      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('alt')).toBe('Test illustration');
    });
  });

  describe('Illustration Types', () => {
    const types = [
      'default',
      'screens',
      'blip-solid',
      'blip-outline',
      'logo-integration',
      'empty-states',
      'brand',
      'segmented',
      'smartphone',
    ];

    types.forEach((type) => {
      it(`should accept ${type} type`, async () => {
        const page = await newSpecPage({
          components: [BdsIllustration],
          html: `<bds-illustration type="${type}" name="test"></bds-illustration>`,
        });

        expect(page.rootInstance.type).toBe(type);
      });
    });

    it('should default to "default" type', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.rootInstance.type).toBe('default');
    });
  });

  describe('Illustration Loading', () => {
    it('should resolve the image URL without fetching metadata', async () => {
      (fetch as jest.Mock).mockClear();

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration type="default" name="test"></bds-illustration>`,
      });

      expect(mockGetAssetUrl).toHaveBeenCalledWith('illustration/default/test');
      expect(fetch).not.toHaveBeenCalled();
      expect(page.rootInstance.name).toBe('test');
      expect(page.rootInstance.type).toBe('default');
    });

    it('should set the versioned illustration URL', async () => {
      const mockSvgContent = 'https://assets.example.com/blip-tokens/1.2.3/illustrations/default/test.svg';
      (fetch as jest.Mock).mockClear();
      mockGetAssetUrl.mockReturnValue(mockSvgContent);

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration type="default" name="test"></bds-illustration>`,
      });

      // Wait for fetch to complete
      await page.waitForChanges();

      expect(page.rootInstance.IllustrationContent).toBe(mockSvgContent);
    });

    it('should resolve the correct asset key for different types', async () => {
      (fetch as jest.Mock).mockClear();

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration type="screens" name="mobile"></bds-illustration>`,
      });

      expect(mockGetAssetUrl).toHaveBeenCalledWith('illustration/screens/mobile');
      expect(page.rootInstance.type).toBe('screens');
      expect(page.rootInstance.name).toBe('mobile');
    });
  });

  describe('Component Props', () => {
    it('should accept and render name property', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="custom-illustration"></bds-illustration>`,
      });

      expect(page.rootInstance.name).toBe('custom-illustration');
      expect(page.rootInstance.IllustrationContent).toContain('custom-illustration.svg');
    });

    it('should accept alt property', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" alt="Alternative text"></bds-illustration>`,
      });

      expect(page.rootInstance.alt).toBe('Alternative text');
    });

    it('should accept dataTest property', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" data-test="custom-test"></bds-illustration>`,
      });

      expect(page.rootInstance.dataTest).toBe('custom-test');
    });

    it('should handle null dataTest gracefully', async () => {
      // Mock fetch to delay response so we can check initial state
      mockFetch.mockClear();
      mockGetAssetUrl.mockReturnValue(undefined);

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.rootInstance.dataTest).toBe(null);

      const defaultDiv = page.root.shadowRoot.querySelector('.default');
      // When dataTest is null, it should not set the attribute or sets it to null
      expect(defaultDiv.getAttribute('data-test')).toBe(null);
    });
  });

  describe('Accessibility', () => {
    it('should have role="img"', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.root.getAttribute('role')).toBe('img');
    });

    it('should support alternative text for accessibility', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" alt="Descriptive text for screen readers"></bds-illustration>`,
      });

      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('alt')).toBe('Descriptive text for screen readers');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty name gracefully', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name=""></bds-illustration>`,
      });

      expect(page.rootInstance.name).toBe('');
      expect(mockGetAssetUrl).not.toHaveBeenCalled();
      expect(page.rootInstance.IllustrationContent).toBeUndefined();
    });

    it('should not crash when no name is provided', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration></bds-illustration>`,
      });

      expect(page.root).toBeTruthy();
      expect(fetch).not.toHaveBeenCalled();
    });

    it('should handle special characters in name', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test-with-dashes_and_underscores"></bds-illustration>`,
      });

      expect(page.rootInstance.name).toBe('test-with-dashes_and_underscores');
    });
  });

  describe('Package Version', () => {
    it('should use the resolver exact version, not the application cluster', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      await page.waitForChanges();

      expect(page.rootInstance.IllustrationContent).toContain('/blip-tokens/1.2.3/');
    });
  });

  it('updates the URL when name changes and handles unknown assets', async () => {
    const page = await newSpecPage({ components: [BdsIllustration], html: '<bds-illustration name="test"></bds-illustration>' });
    page.root.name = 'next';
    await page.waitForChanges();
    expect(page.rootInstance.IllustrationContent).toContain('/next.svg');
    mockGetAssetUrl.mockImplementation(() => { throw new Error('Unknown asset'); });
    page.root.name = 'unknown';
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.default')).toBeTruthy();
  });
});
