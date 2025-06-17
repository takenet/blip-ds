import { newSpecPage } from '@stencil/core/testing';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Mock URL.createObjectURL
Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(() => 'blob:mocked-url'),
});

// Mock Blob constructor for test environment
global.Blob = jest.fn().mockImplementation((parts, options) => ({
  parts,
  options,
  size: parts ? parts.reduce((acc, part) => acc + part.length, 0) : 0,
  type: options?.type || '',
})) as any;

import { Image } from '../image';

describe('bds-image', () => {
  beforeEach(() => {
    // Reset and setup fetch mock before each test
    mockFetch.mockClear();
    jest.clearAllMocks();
  });

  it('should create component', () => {
    const component = new Image();
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(Image);
  });

  it('should have correct default properties', async () => {
    const page = await newSpecPage({
      components: [Image],
      html: `<bds-image></bds-image>`,
    });

    expect(page.rootInstance.src).toBeUndefined();
    expect(page.rootInstance.alt).toBeUndefined();
    expect(page.rootInstance.width).toBeUndefined();
    expect(page.rootInstance.height).toBeUndefined();
    expect(page.rootInstance.objectFit).toBe('cover');
    expect(page.rootInstance.brightness).toBeUndefined();
    expect(page.rootInstance.dataTest).toBe(null);
    expect(page.rootInstance.imageLoaded).toBe(false);
    expect(page.rootInstance.loadError).toBe(false);
  });

  it('should render method should return JSX element', () => {
    const component = new Image();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  describe('Rendering', () => {
    it('should render basic image component', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image></bds-image>`,
      });

      expect(page.root).toBeTruthy();
      expect(page.root.tagName).toBe('BDS-IMAGE');
      expect(page.root).toHaveClass('empty_img');
    });

    it('should render illustration when no image is loaded', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image></bds-image>`,
      });

      const illustration = page.root.shadowRoot.querySelector('bds-illustration');
      expect(illustration).toBeTruthy();
      expect(illustration.getAttribute('type')).toBe('empty-states');
      expect(illustration.getAttribute('name')).toBe('image-not-found');
      expect(illustration).toHaveClass('img-feedback');
    });

    it('should render illustration with broken-image when load error occurs', async () => {
      mockFetch.mockRejectedValue(new Error('Failed to fetch'));

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/image.jpg"></bds-image>`,
      });

      // Trigger load and wait for error
      await page.rootInstance.loadImage();
      await page.waitForChanges();

      const illustration = page.root.shadowRoot.querySelector('bds-illustration');
      expect(illustration).toBeTruthy();
      expect(illustration.getAttribute('name')).toBe('broken-image');
    });

    it('should render skeleton when image is loading', async () => {
      // Mock fetch to simulate loading state
      let resolvePromise;
      const loadingPromise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      mockFetch.mockReturnValue(loadingPromise);

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/image.jpg"></bds-image>`,
      });

      // Start loading but don't resolve yet
      const loadPromise = page.rootInstance.loadImage();
      await page.waitForChanges();

      const skeleton = page.root.shadowRoot.querySelector('bds-skeleton');
      expect(skeleton).toBeTruthy();
      expect(skeleton.getAttribute('shape')).toBe('square');
      expect(skeleton.getAttribute('width')).toBe('100%');
      expect(skeleton.getAttribute('height')).toBe('100%');

      // Clean up
      resolvePromise({ ok: true, blob: () => Promise.resolve(new Blob()) });
      await loadPromise;
    });

    it('should render img element when image is loaded successfully', async () => {
      const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/image.jpg" alt="Test image"></bds-image>`,
      });

      await page.rootInstance.loadImage();
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe('blob:mocked-url');
      expect(img.getAttribute('alt')).toBe('Test image');
      expect(img.getAttribute('draggable')).toBe('false');
    });
  });

  describe('Props', () => {
    it('should accept and render src property', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/test.jpg"></bds-image>`,
      });

      expect(page.rootInstance.src).toBe('https://example.com/test.jpg');
    });

    it('should accept alt property', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image alt="Alternative text"></bds-image>`,
      });

      expect(page.rootInstance.alt).toBe('Alternative text');

      const illustration = page.root.shadowRoot.querySelector('bds-illustration');
      expect(illustration.getAttribute('alt')).toBe('Alternative text');
    });

    it('should accept width and height properties', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image width="200px" height="150px"></bds-image>`,
      });

      expect(page.rootInstance.width).toBe('200px');
      expect(page.rootInstance.height).toBe('150px');
    });

    it('should accept objectFit property', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image object-fit="contain"></bds-image>`,
      });

      expect(page.rootInstance.objectFit).toBe('contain');
    });

    it('should accept brightness property', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image brightness="0.8"></bds-image>`,
      });

      expect(page.rootInstance.brightness).toBe(0.8);
    });

    it('should accept dataTest property', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image data-test="image-test"></bds-image>`,
      });

      expect(page.rootInstance.dataTest).toBe('image-test');

      const illustration = page.root.shadowRoot.querySelector('bds-illustration');
      expect(illustration.getAttribute('data-test')).toBe('image-test');
    });
  });

  describe('Object Fit Values', () => {
    const objectFitValues = ['fill', 'contain', 'cover', 'none', 'scale-down'];

    objectFitValues.forEach((value) => {
      it(`should accept ${value} objectFit value`, async () => {
        const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
        mockFetch.mockResolvedValue({
          ok: true,
          blob: () => Promise.resolve(mockBlob),
        });

        const page = await newSpecPage({
          components: [Image],
          html: `<bds-image src="test.jpg" object-fit="${value}"></bds-image>`,
        });

        expect(page.rootInstance.objectFit).toBe(value);

        await page.rootInstance.loadImage();
        await page.waitForChanges();

        const img = page.root.shadowRoot.querySelector('img');
        expect(img.style.objectFit).toBe(value);
      });
    });
  });

  describe('Image Loading', () => {
    it('should call loadImage method when src is provided', async () => {
      const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/test.jpg"></bds-image>`,
      });

      await page.waitForChanges();

      // Check that fetch was called, which indicates loadImage was executed
      expect(mockFetch).toHaveBeenCalledWith('https://example.com/test.jpg');
    });

    it('should handle successful image loading', async () => {
      const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/test.jpg"></bds-image>`,
      });

      await page.rootInstance.loadImage();

      expect(page.rootInstance.imageLoaded).toBe(true);
      expect(page.rootInstance.loadError).toBe(false);
      expect(page.rootInstance.currentSrc).toBe('blob:mocked-url');
    });

    it('should handle fetch error', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'));

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/nonexistent.jpg"></bds-image>`,
      });

      await page.rootInstance.loadImage();

      expect(page.rootInstance.imageLoaded).toBe(false);
      expect(page.rootInstance.loadError).toBe(true);
    });

    it('should handle non-ok response', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 404,
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="https://example.com/missing.jpg"></bds-image>`,
      });

      await page.rootInstance.loadImage();

      expect(page.rootInstance.imageLoaded).toBe(false);
      expect(page.rootInstance.loadError).toBe(true);
    });

    it('should not load when no src is provided', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image></bds-image>`,
      });

      await page.rootInstance.loadImage();

      expect(page.rootInstance.imageLoaded).toBe(false);
      expect(page.rootInstance.loadError).toBe(false);
      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe('Styling and Layout', () => {
    it('should apply width and height styles in componentDidLoad', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image width="300px" height="200px"></bds-image>`,
      });

      // Manually call componentDidLoad to simulate lifecycle
      page.rootInstance.componentDidLoad();

      expect(page.root.style.width).toBe('300px');
      expect(page.root.style.height).toBe('200px');
    });

    it('should apply auto width and height when not specified', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image></bds-image>`,
      });

      page.rootInstance.componentDidLoad();

      expect(page.root.style.width).toBe('auto');
      expect(page.root.style.height).toBe('auto');
    });

    it('should apply brightness filter to loaded image', async () => {
      const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="test.jpg" brightness="0.5"></bds-image>`,
      });

      await page.rootInstance.loadImage();
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.style.filter).toBe('brightness(0.5)');
    });

    it('should apply empty_img class when image is not loaded', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image></bds-image>`,
      });

      expect(page.root).toHaveClass('empty_img');
    });

    it('should remove empty_img class when image is loaded', async () => {
      const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="test.jpg"></bds-image>`,
      });

      await page.rootInstance.loadImage();
      await page.waitForChanges();

      expect(page.root).not.toHaveClass('empty_img');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty src gracefully', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src=""></bds-image>`,
      });

      await page.rootInstance.loadImage();

      expect(page.rootInstance.imageLoaded).toBe(false);
      expect(page.rootInstance.loadError).toBe(false);
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('should handle null dataTest gracefully', async () => {
      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image></bds-image>`,
      });

      expect(page.rootInstance.dataTest).toBe(null);
      
      const illustration = page.root.shadowRoot.querySelector('bds-illustration');
      expect(illustration.getAttribute('data-test')).toBe(null);
    });

    it('should handle multiple loadImage calls gracefully', async () => {
      const mockBlob = new Blob(['test'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });

      const page = await newSpecPage({
        components: [Image],
        html: `<bds-image src="test.jpg"></bds-image>`,
      });

      // Call loadImage multiple times
      await Promise.all([
        page.rootInstance.loadImage(),
        page.rootInstance.loadImage(),
        page.rootInstance.loadImage(),
      ]);

      expect(page.rootInstance.imageLoaded).toBe(true);
      expect(page.rootInstance.loadError).toBe(false);
    });
  });
});
