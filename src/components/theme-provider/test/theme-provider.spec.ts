import { ThemeProvider } from '../theme-provider';

describe('bds-theme-provider', () => {
  describe('Properties and Default Values', () => {
    it('should have correct default values', () => {
      const component = new ThemeProvider();
      expect(component.theme).toBe('light');
    });

    it('should accept all valid themes', () => {
      const component = new ThemeProvider();
      const validThemes = ['light', 'dark', 'high-contrast'];
      
      validThemes.forEach(theme => {
        component.theme = theme as any;
        expect(component.theme).toBe(theme);
      });
    });
  });

  describe('Component Rendering', () => {
    it('should render JSX Host element with correct structure', () => {
      const component = new ThemeProvider();
      const result = component.render();
      
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      // Host components have empty object as $tag$
      expect(typeof result.$tag$).toBe('object');
    });

    it('should render with correct CSS classes for default theme', () => {
      const component = new ThemeProvider();
      const result = component.render();
      
      expect(result.$attrs$.class).toContain('theme');
      expect(result.$attrs$.class).toContain('theme--light');
    });

    it('should render with correct CSS classes for different themes', () => {
      const component = new ThemeProvider();
      
      // Test dark theme
      component.theme = 'dark';
      let result = component.render();
      expect(result.$attrs$.class).toContain('theme');
      expect(result.$attrs$.class).toContain('theme--dark');
      
      // Test high-contrast theme
      component.theme = 'high-contrast';
      result = component.render();
      expect(result.$attrs$.class).toContain('theme');
      expect(result.$attrs$.class).toContain('theme--high-contrast');
    });

    it('should render slot for content', () => {
      const component = new ThemeProvider();
      const result = component.render();
      
      expect(result.$children$).toBeTruthy();
      expect(result.$children$.length).toBe(1);
      expect(result.$children$[0].$tag$).toBe('slot');
    });
  });

  describe('Theme CSS Class Generation', () => {
    it('should generate correct theme classes', () => {
      const component = new ThemeProvider();
      const themes = ['light', 'dark', 'high-contrast'];
      
      themes.forEach(theme => {
        component.theme = theme as any;
        const result = component.render();
        
        expect(result.$attrs$.class).toContain('theme');
        expect(result.$attrs$.class).toContain(`theme--${theme}`);
      });
    });

    it('should maintain consistent structure across theme changes', () => {
      const component = new ThemeProvider();
      
      component.theme = 'light';
      const lightResult = component.render();
      
      component.theme = 'dark';
      const darkResult = component.render();
      
      // Structure should be the same
      expect(typeof lightResult.$tag$).toBe(typeof darkResult.$tag$);
      expect(lightResult.$children$.length).toBe(darkResult.$children$.length);
      expect(lightResult.$children$[0].$tag$).toBe(darkResult.$children$[0].$tag$);
      
      // Both should contain theme class
      expect(lightResult.$attrs$.class).toContain('theme');
      expect(darkResult.$attrs$.class).toContain('theme');
      expect(lightResult.$attrs$.class).toContain('theme--light');
      expect(darkResult.$attrs$.class).toContain('theme--dark');
    });
  });
});