import { BdsDivider } from '../divider';

describe('bds-divider', () => {
  it('should have default values', () => {
    const component = new BdsDivider();
    expect(component.styleType).toBe('solid');
    expect(component.orientation).toBe('horizontal');
    expect(component.color).toBe('divider-1');
  });

  it('should accept all valid style types', () => {
    const component = new BdsDivider();
    const validStyleTypes = ['solid', 'dotted', 'dashed'];
    
    validStyleTypes.forEach(styleType => {
      component.styleType = styleType as any;
      expect(component.styleType).toBe(styleType);
    });
  });

  it('should accept all valid orientations', () => {
    const component = new BdsDivider();
    const validOrientations = ['horizontal', 'vertical'];
    
    validOrientations.forEach(orientation => {
      component.orientation = orientation as any;
      expect(component.orientation).toBe(orientation);
    });
  });

  it('should accept all valid colors', () => {
    const component = new BdsDivider();
    const validColors = ['divider-1', 'divider-2', 'divider-3'];
    
    validColors.forEach(color => {
      component.color = color as any;
      expect(component.color).toBe(color);
    });
  });

  it('should render method should return JSX element', () => {
    const component = new BdsDivider();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should render method should handle property changes', () => {
    const component = new BdsDivider();
    
    // Test with different configurations
    component.styleType = 'dashed';
    component.orientation = 'vertical';
    component.color = 'divider-2';
    
    const result = component.render();
    expect(result).toBeTruthy();
    
    // Test with different configuration
    component.styleType = 'dotted';
    component.orientation = 'horizontal';
    component.color = 'divider-3';
    
    const result2 = component.render();
    expect(result2).toBeTruthy();
  });
});