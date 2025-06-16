import { ThemeProvider } from '../theme-provider';

describe('bds-theme-provider', () => {
  it('should have default values', () => {
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

  it('should render method should return JSX element', () => {
    const component = new ThemeProvider();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should render method should handle different themes', () => {
    const component = new ThemeProvider();
    
    // Test with light theme
    component.theme = 'light';
    const result1 = component.render();
    expect(result1).toBeTruthy();
    
    // Test with dark theme
    component.theme = 'dark';
    const result2 = component.render();
    expect(result2).toBeTruthy();
    
    // Test with high-contrast theme
    component.theme = 'high-contrast';
    const result3 = component.render();
    expect(result3).toBeTruthy();
  });
});