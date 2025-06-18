import { newSpecPage } from '@stencil/core/testing';
import { ThemeProvider } from '../theme-provider';

describe('bds-theme-provider', () => {
  it('should create component', () => {
    const component = new ThemeProvider();
    expect(component).toBeTruthy();
  });

  it('should have default theme value', () => {
    const component = new ThemeProvider();
    expect(component.theme).toBe('light');
  });

  it('should render with default light theme', async () => {
    const page = await newSpecPage({
      components: [ThemeProvider],
      html: `<bds-theme-provider></bds-theme-provider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-theme-provider class="theme theme--light">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-theme-provider>
    `);
  });

  it('should render with content', async () => {
    const page = await newSpecPage({
      components: [ThemeProvider],
      html: `<bds-theme-provider>Content inside theme</bds-theme-provider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-theme-provider class="theme theme--light">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Content inside theme
      </bds-theme-provider>
    `);
  });

  describe('Theme variations', () => {
    it('should render with light theme', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="light"></bds-theme-provider>`,
      });

      expect(page.rootInstance.theme).toBe('light');
      expect(page.root).toHaveClass('theme--light');
    });

    it('should render with dark theme', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="dark"></bds-theme-provider>`,
      });

      expect(page.rootInstance.theme).toBe('dark');
      expect(page.root).toHaveClass('theme--dark');
    });

    it('should render with high-contrast theme', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="high-contrast"></bds-theme-provider>`,
      });

      expect(page.rootInstance.theme).toBe('high-contrast');
      expect(page.root).toHaveClass('theme--high-contrast');
    });
  });

  describe('Class application', () => {
    it('should always have base theme class', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider></bds-theme-provider>`,
      });

      expect(page.root).toHaveClass('theme');
    });

    it('should apply correct theme-specific class for light theme', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="light"></bds-theme-provider>`,
      });

      expect(page.root).toHaveClass('theme');
      expect(page.root).toHaveClass('theme--light');
      expect(page.root).not.toHaveClass('theme--dark');
      expect(page.root).not.toHaveClass('theme--high-contrast');
    });

    it('should apply correct theme-specific class for dark theme', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="dark"></bds-theme-provider>`,
      });

      expect(page.root).toHaveClass('theme');
      expect(page.root).toHaveClass('theme--dark');
      expect(page.root).not.toHaveClass('theme--light');
      expect(page.root).not.toHaveClass('theme--high-contrast');
    });

    it('should apply correct theme-specific class for high-contrast theme', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="high-contrast"></bds-theme-provider>`,
      });

      expect(page.root).toHaveClass('theme');
      expect(page.root).toHaveClass('theme--high-contrast');
      expect(page.root).not.toHaveClass('theme--light');
      expect(page.root).not.toHaveClass('theme--dark');
    });
  });

  describe('Property validation', () => {
    it('should accept all valid themes', () => {
      const component = new ThemeProvider();
      const validThemes = ['light', 'dark', 'high-contrast'];
      
      validThemes.forEach(theme => {
        component.theme = theme as any;
        expect(component.theme).toBe(theme);
      });
    });

    it('should handle theme changes dynamically', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `<bds-theme-provider theme="light"></bds-theme-provider>`,
      });

      expect(page.root).toHaveClass('theme--light');

      // Change theme to dark
      page.rootInstance.theme = 'dark';
      await page.waitForChanges();

      expect(page.root).toHaveClass('theme--dark');
      expect(page.root).not.toHaveClass('theme--light');

      // Change theme to high-contrast
      page.rootInstance.theme = 'high-contrast';
      await page.waitForChanges();

      expect(page.root).toHaveClass('theme--high-contrast');
      expect(page.root).not.toHaveClass('theme--dark');
    });
  });

  describe('Integration scenarios', () => {
    it('should wrap content properly with themes', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `
          <bds-theme-provider theme="dark">
            <div>
              <h1>Title</h1>
              <p>Content paragraph</p>
            </div>
          </bds-theme-provider>
        `,
      });

      expect(page.root).toHaveClass('theme--dark');
      expect(page.root.innerHTML).toContain('<h1>Title</h1>');
      expect(page.root.innerHTML).toContain('<p>Content paragraph</p>');
    });

    it('should maintain theme wrapper functionality with complex content', async () => {
      const page = await newSpecPage({
        components: [ThemeProvider],
        html: `
          <bds-theme-provider theme="high-contrast">
            <div class="container">
              <header>Header content</header>
              <main>Main content</main>
              <footer>Footer content</footer>
            </div>
          </bds-theme-provider>
        `,
      });

      expect(page.rootInstance.theme).toBe('high-contrast');
      expect(page.root).toHaveClass('theme');
      expect(page.root).toHaveClass('theme--high-contrast');
      expect(page.root.innerHTML).toContain('Header content');
      expect(page.root.innerHTML).toContain('Main content');
      expect(page.root.innerHTML).toContain('Footer content');
    });
  });
});