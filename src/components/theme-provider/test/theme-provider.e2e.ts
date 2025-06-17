import { newE2EPage } from '@stencil/core/testing';

// Helper function to normalize color values for comparison
function normalizeColor(color: string): string {
  // Convert hex to rgb for comparison
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Convert named colors to rgb
  const namedColors: Record<string, string> = {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
  };

  if (namedColors[color]) {
    return namedColors[color];
  }

  // Convert rgba to rgb for comparison (remove alpha)
  if (color.startsWith('rgba(')) {
    return color.replace('rgba(', 'rgb(').replace(/, [0-9.]+\)$/, ')');
  }

  return color;
}

async function createPage() {
  return await newE2EPage({
    html: `<bds-theme-provider theme="dark">
            <div>Theme content</div>
          </bds-theme-provider>`,
  });
}

describe('bds-theme-provider e2e tests', () => {
  describe('Properties', () => {
    it('should render theme provider component', async () => {
      const page = await createPage();

      const themeProvider = await page.find('bds-theme-provider');
      expect(themeProvider).toBeTruthy();
    });

    it('should accept theme property', async () => {
      const page = await createPage();

      const themeProvider = await page.find('bds-theme-provider');
      const theme = await themeProvider.getProperty('theme');
      expect(theme).toBe('dark');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const page = await createPage();

      const themeProvider = await page.find('bds-theme-provider');
      expect(themeProvider.shadowRoot).toBeTruthy();
    });

    it('should render slot for content', async () => {
      const page = await createPage();

      const slot = await page.find('bds-theme-provider >>> slot');
      expect(slot).toBeTruthy();
    });

    it('should display slotted content', async () => {
      const page = await createPage();

      const content = await page.find('bds-theme-provider div');
      expect(content).toBeTruthy();
      expect(await content.textContent).toBe('Theme content');
    });
  });

  describe('Property Changes', () => {
    it('should update theme', async () => {
      const page = await createPage();

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

  describe('Theme Visual Changes', () => {
    it('should apply CSS custom properties for light theme', async () => {
      const page = await newE2EPage({
        html: `<bds-theme-provider theme="light"></bds-theme-provider>`,
      });

      const primaryColor = await page.evaluate(() => {
        const provider = document.querySelector('bds-theme-provider');
        return getComputedStyle(provider).getPropertyValue('--color-primary').trim();
      });

      // Light theme primary color should be rgba(30, 107, 241, 1)
      expect(normalizeColor(primaryColor)).toBe('rgb(30, 107, 241)');
    });

    it('should apply CSS custom properties for dark theme', async () => {
      const page = await newE2EPage({
        html: `<bds-theme-provider theme="dark"></bds-theme-provider>`,
      });

      const primaryColor = await page.evaluate(() => {
        const provider = document.querySelector('bds-theme-provider');
        return getComputedStyle(provider).getPropertyValue('--color-primary').trim();
      });

      // Dark theme primary color should be rgba(73, 139, 255, 1)
      expect(normalizeColor(primaryColor)).toBe('rgb(73, 139, 255)');
    });

    it('should change CSS custom properties when theme changes', async () => {
      const page = await newE2EPage({
        html: `<bds-theme-provider theme="light"></bds-theme-provider>`,
      });

      // Get initial light theme color
      const lightPrimaryColor = await page.evaluate(() => {
        const provider = document.querySelector('bds-theme-provider');
        return getComputedStyle(provider).getPropertyValue('--color-primary').trim();
      });

      // Change to dark theme
      const themeProvider = await page.find('bds-theme-provider');
      await themeProvider.setProperty('theme', 'dark');
      await page.waitForChanges();

      // Get dark theme color
      const darkPrimaryColor = await page.evaluate(() => {
        const provider = document.querySelector('bds-theme-provider');
        return getComputedStyle(provider).getPropertyValue('--color-primary').trim();
      });

      // Colors should be different
      expect(lightPrimaryColor).not.toBe(darkPrimaryColor);
      expect(normalizeColor(lightPrimaryColor)).toBe('rgb(30, 107, 241)');
      expect(normalizeColor(darkPrimaryColor)).toBe('rgb(73, 139, 255)');
    });

    it('should apply theme to child components (button)', async () => {
      const page = await newE2EPage({
        html: `
          <bds-theme-provider theme="light">
            <bds-button variant="primary">Test Button</bds-button>
          </bds-theme-provider>
        `,
      });

      // Wait for components to load
      await page.waitForChanges();

      // Get computed styles of the button in light theme
      const lightButtonStyles = await page.evaluate(() => {
        const button = document.querySelector('bds-button');
        const buttonElement = button.shadowRoot.querySelector('button');
        const styles = getComputedStyle(buttonElement);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
        };
      });

      // Change to dark theme
      const themeProvider = await page.find('bds-theme-provider');
      await themeProvider.setProperty('theme', 'dark');
      await page.waitForChanges();

      // Get computed styles of the button in dark theme
      const darkButtonStyles = await page.evaluate(() => {
        const button = document.querySelector('bds-button');
        const buttonElement = button.shadowRoot.querySelector('button');
        const styles = getComputedStyle(buttonElement);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
        };
      });

      // Button styles should change between themes
      // Note: We're not checking exact colors because the button might use processed/computed values
      // but we ensure that the theme change results in different computed styles
      expect(lightButtonStyles).toBeDefined();
      expect(darkButtonStyles).toBeDefined();

      // At least one style property should be different
      const stylesChanged =
        lightButtonStyles.backgroundColor !== darkButtonStyles.backgroundColor ||
        lightButtonStyles.color !== darkButtonStyles.color;

      expect(stylesChanged).toBe(true);
    });

    it('should apply surface colors correctly across themes', async () => {
      const page = await newE2EPage({
        html: `<bds-theme-provider theme="light"></bds-theme-provider>`,
      });

      // Check multiple color variables to ensure theme is fully applied
      const lightColors = await page.evaluate(() => {
        const provider = document.querySelector('bds-theme-provider');
        const styles = getComputedStyle(provider);
        return {
          primary: styles.getPropertyValue('--color-primary').trim(),
          surface0: styles.getPropertyValue('--color-surface-0').trim(),
          contentDefault: styles.getPropertyValue('--color-content-default').trim(),
        };
      });

      // Change to dark theme
      const themeProvider = await page.find('bds-theme-provider');
      await themeProvider.setProperty('theme', 'dark');
      await page.waitForChanges();

      const darkColors = await page.evaluate(() => {
        const provider = document.querySelector('bds-theme-provider');
        const styles = getComputedStyle(provider);
        return {
          primary: styles.getPropertyValue('--color-primary').trim(),
          surface0: styles.getPropertyValue('--color-surface-0').trim(),
          contentDefault: styles.getPropertyValue('--color-content-default').trim(),
        };
      });

      // All theme colors should be different between light and dark
      expect(lightColors.primary).not.toBe(darkColors.primary);
      expect(lightColors.surface0).not.toBe(darkColors.surface0);
      expect(lightColors.contentDefault).not.toBe(darkColors.contentDefault);

      // Verify light theme has expected values
      expect(normalizeColor(lightColors.surface0)).toBe('rgb(255, 255, 255)'); // White background in light theme
      expect(normalizeColor(lightColors.contentDefault)).toBe('rgb(40, 40, 40)'); // Dark text in light theme

      // Verify dark theme has expected values
      expect(normalizeColor(darkColors.surface0)).toBe('rgb(66, 66, 66)'); // Dark background in dark theme
      expect(normalizeColor(darkColors.contentDefault)).toBe('rgb(255, 255, 255)'); // Light text in dark theme
    });
  });
});
