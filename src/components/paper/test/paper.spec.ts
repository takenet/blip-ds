import { Paper } from '../paper';

describe('bds-paper', () => {
  it('should have default values', () => {
    const component = new Paper();
    expect(component.elevation).toBe('static');
    expect(component.dataTest).toBe(null);
    expect(component.border).toBe(false);
    expect(component.height).toBe(null);
    expect(component.width).toBe(null);
    expect(component.bgColor).toBe('surface-1');
    expect(component.borderColor).toBe(null);
  });

  it('should have default state values', () => {
    const component = new Paper();
    expect(component.hasBorder).toBe(true);
    expect(component.constElevation).toBe(undefined);
  });

  it('should accept all valid elevations', () => {
    const component = new Paper();
    const validElevations = ['static', 'primary', 'secondary', 'none'];
    
    validElevations.forEach(elevation => {
      component.elevation = elevation as any;
      expect(component.elevation).toBe(elevation);
    });
  });

  it('should accept all valid background colors', () => {
    const component = new Paper();
    const validBgColors = ['surface-0', 'surface-1', 'surface-2', 'surface-3', 'surface-4'];
    
    validBgColors.forEach(bgColor => {
      component.bgColor = bgColor as any;
      expect(component.bgColor).toBe(bgColor);
    });
  });

  it('should accept all valid border colors', () => {
    const component = new Paper();
    const validBorderColors = ['border-1', 'border-2', 'primary', 'secondary', 'positive', 'negative', 'warning', 'error', 'delete', 'success'];
    
    validBorderColors.forEach(borderColor => {
      component.borderColor = borderColor as any;
      expect(component.borderColor).toBe(borderColor);
    });
  });

  it('should accept boolean values for border', () => {
    const component = new Paper();
    
    component.border = true;
    expect(component.border).toBe(true);
    
    component.border = false;
    expect(component.border).toBe(false);
  });

  it('should accept string values for dimensions', () => {
    const component = new Paper();
    
    component.height = '100px';
    expect(component.height).toBe('100px');
    
    component.width = '200px';
    expect(component.width).toBe('200px');
    
    component.height = null;
    component.width = null;
    expect(component.height).toBe(null);
    expect(component.width).toBe(null);
  });

  it('should accept dataTest string', () => {
    const component = new Paper();
    
    component.dataTest = 'test-id';
    expect(component.dataTest).toBe('test-id');
    
    component.dataTest = null;
    expect(component.dataTest).toBe(null);
  });

  it('should componentWillLoad should set hasBorder based on border prop', () => {
    const component = new Paper();
    
    // When border is false, hasBorder should be true
    component.border = false;
    component.componentWillLoad();
    expect(component.hasBorder).toBe(true);
    
    // When border is true, hasBorder should be false
    component.border = true;
    component.componentWillLoad();
    expect(component.hasBorder).toBe(false);
  });

  it('should render method should return JSX element', () => {
    const component = new Paper();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should render method should handle property changes', () => {
    const component = new Paper();
    
    // Test with different configurations
    component.elevation = 'primary';
    component.border = true;
    component.height = '100px';
    component.width = '200px';
    component.bgColor = 'surface-2';
    component.borderColor = 'primary';
    component.dataTest = 'test';
    component.componentWillLoad(); // Initialize hasBorder
    
    const result = component.render();
    expect(result).toBeTruthy();
    
    // Test with null values
    component.height = null;
    component.width = null;
    component.borderColor = null;
    component.dataTest = null;
    
    const result2 = component.render();
    expect(result2).toBeTruthy();
  });
});