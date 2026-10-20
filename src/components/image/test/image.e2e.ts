import { newE2EPage } from '@stencil/core/testing';

describe('bds-image e2e tests', () => {
  describe('Data URL Support', () => {
    it('should render data URL image successfully', async () => {
      const dataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA3YmZmIi8+PC9zdmc+';
      
      const page = await newE2EPage({
        html: `<bds-image src="${dataUrl}" alt="Data URL test"></bds-image>`,
      });

      // Wait for the component to load
      await page.waitForChanges();

      const image = await page.find('bds-image');
      expect(image).toBeTruthy();

      // Check that src attribute is set correctly
      const src = await image.getAttribute('src');
      expect(src).toBe(dataUrl);

      // Check that the image was loaded (no error state)
      const illustration = await page.find('bds-image >>> bds-illustration');
      expect(illustration).toBeFalsy();

      // Check that img element is rendered
      const img = await page.find('bds-image >>> img');
      expect(img).toBeTruthy();
    });

    it('should handle PNG data URL', async () => {
      // 1x1 red pixel PNG
      const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';
      
      const page = await newE2EPage({
        html: `<bds-image src="${dataUrl}" alt="PNG data URL"></bds-image>`,
      });

      await page.waitForChanges();

      const img = await page.find('bds-image >>> img');
      expect(img).toBeTruthy();
      
      const imgSrc = await img.getAttribute('src');
      expect(imgSrc).toBe(dataUrl);
    });

    it('should render data URL with alt text', async () => {
      const dataUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==';
      
      const page = await newE2EPage({
        html: `<bds-image src="${dataUrl}" alt="Red circle"></bds-image>`,
      });

      await page.waitForChanges();

      const img = await page.find('bds-image >>> img');
      const alt = await img.getAttribute('alt');
      expect(alt).toBe('Red circle');
    });
  });

  describe('Properties', () => {
    let page;

    beforeEach(async () => {
      const dataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+';
      page = await newE2EPage({
        html: `<bds-image src="${dataUrl}" alt="Test image"></bds-image>`,
      });
    });

    it('should render image with correct src', async () => {
      const image = await page.find('bds-image');
      const src = await image.getAttribute('src');
      expect(src).toContain('data:image/svg+xml');
    });

    it('should render image with correct alt text', async () => {
      const image = await page.find('bds-image');
      const alt = await image.getAttribute('alt');
      expect(alt).toBe('Test image');
    });
  });

  describe('Interactions', () => {
    it('should handle image src changes correctly', async () => {
      const initialDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+';
      const page = await newE2EPage({
        html: `<bds-image src="${initialDataUrl}" alt="Test image"></bds-image>`,
      });

      const image = await page.find('bds-image');
      
      // Check initial state
      const initialSrc = await image.getAttribute('src');
      expect(initialSrc).toContain('data:image/svg+xml');
      
      // Update src and verify change
      const newDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwIi8+PC9zdmc+';
      await image.setProperty('src', newDataUrl);
      await page.waitForChanges();
      
      const newSrc = await image.getAttribute('src');
      expect(newSrc).toBe(newDataUrl);
    });
  });
});