import { newE2EPage } from '@stencil/core/testing';

describe('bds-theme-provider e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-theme-provider theme="dark">
          <div>Theme content</div>
        </bds-theme-provider>
      `,
    });
  });

  describe('Properties', () => {
    it('should render theme provider component', async () => {
      const themeProvider = await page.find('bds-theme-provider');
      expect(themeProvider).toBeTruthy();
    });

    it('should accept theme property', async () => {
      const themeProvider = await page.find('bds-theme-provider');
      const theme = await themeProvider.getProperty('theme');
      expect(theme).toBe('dark');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const themeProvider = await page.find('bds-theme-provider');
      expect(themeProvider.shadowRoot).toBeTruthy();
    });

    it('should render slot for content', async () => {
      const slot = await page.find('bds-theme-provider >>> slot');
      expect(slot).toBeTruthy();
    });

    it('should display slotted content', async () => {
      const content = await page.find('bds-theme-provider div');
      expect(content).toBeTruthy();
      expect(await content.textContent).toBe('Theme content');
    });
  });

  describe('Property Changes', () => {
    it('should update theme', async () => {
      const themeProvider = await page.find('bds-theme-provider');
      await themeProvider.setProperty('theme', 'light');
      await page.waitForChanges();
      
      const theme = await themeProvider.getProperty('theme');
      expect(theme).toBe('light');
    });
  });

  describe('Default Properties', () => {
    it('should handle default theme', async () => {
      const page = await newE2EPage({
        html: `<bds-theme-provider><div>Content</div></bds-theme-provider>`,
      });
      
      const themeProvider = await page.find('bds-theme-provider');
      const theme = await themeProvider.getProperty('theme');
      expect(theme).toBe('light');
    });
  });

  describe('Theme Variations', () => {
    it('should handle high-contrast theme', async () => {
      const page = await newE2EPage({
        html: `<bds-theme-provider theme="high-contrast"><div>Content</div></bds-theme-provider>`,
      });
      
      const themeProvider = await page.find('bds-theme-provider');
      const theme = await themeProvider.getProperty('theme');
      expect(theme).toBe('high-contrast');
    });
  });
});