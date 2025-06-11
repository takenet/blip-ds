import { newE2EPage } from '@stencil/core/testing';

describe('bds-image e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-image 
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+" 
          alt="Test image" 
          loading="lazy" 
          fade="true"
        ></bds-image>
      `,
    });
  });

  describe('Properties', () => {
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

    it('should render image with correct loading attribute', async () => {
      const image = await page.find('bds-image');
      const loading = await image.getAttribute('loading');
      expect(loading).toBe('lazy');
    });

    it('should render image with fade effect enabled', async () => {
      const image = await page.find('bds-image');
      const fade = await image.getAttribute('fade');
      expect(fade).toBe('true');
    });
  });

  describe('Interactions', () => {
    it('should handle image src changes correctly', async () => {
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

    it('should handle fade property changes', async () => {
      const image = await page.find('bds-image');
      
      await image.setProperty('fade', false);
      await page.waitForChanges();
      
      const fade = await image.getProperty('fade');
      expect(fade).toBe(false);
    });
  });
});