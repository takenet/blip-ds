import { Badge } from '../badge';

describe('bds-badge', () => {
  it('should have default values', () => {
    const component = new Badge();
    expect(component.type).toBe('status');
    expect(component.color).toBe('system');
    expect(component.shape).toBe('circle');
    expect(component.icon).toBe(null);
    expect(component.number).toBe(undefined);
    expect(component.animation).toBe(false);
    expect(component.dataTest).toBe(null);
  });

  it('should accept all valid colors', () => {
    const component = new Badge();
    const validColors = ['system', 'danger', 'warning', 'success', 'neutral'];
    
    validColors.forEach(color => {
      component.color = color;
      expect(component.color).toBe(color);
    });
  });

  it('should accept all valid shapes', () => {
    const component = new Badge();
    const validShapes = ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'];
    
    validShapes.forEach(shape => {
      component.shape = shape as any;
      expect(component.shape).toBe(shape);
    });
  });

  it('should accept icon string', () => {
    const component = new Badge();
    
    component.icon = 'user';
    expect(component.icon).toBe('user');
    
    component.icon = null;
    expect(component.icon).toBe(null);
  });

  it('should accept number value', () => {
    const component = new Badge();
    
    component.number = 5;
    expect(component.number).toBe(5);
    
    component.number = 0;
    expect(component.number).toBe(0);
    
    component.number = 1000;
    expect(component.number).toBe(1000);
  });

  it('should accept boolean values for animation', () => {
    const component = new Badge();
    
    component.animation = true;
    expect(component.animation).toBe(true);
    
    component.animation = false;
    expect(component.animation).toBe(false);
  });

  it('should accept dataTest string', () => {
    const component = new Badge();
    
    component.dataTest = 'test-id';
    expect(component.dataTest).toBe('test-id');
    
    component.dataTest = null;
    expect(component.dataTest).toBe(null);
  });

  describe('componentWillLoad', () => {
    it('should set type to number when icon is null and number is provided', () => {
      const component = new Badge();
      component.icon = null;
      component.number = 5;
      component.componentWillLoad();
      expect(component.type).toBe('number');
    });

    it('should set type to icon when number is not provided and icon is provided', () => {
      const component = new Badge();
      component.number = undefined;
      component.icon = 'user';
      component.componentWillLoad();
      expect(component.type).toBe('icon');
    });

    it('should set type to number when both number and icon are provided', () => {
      const component = new Badge();
      component.number = 5;
      component.icon = 'user';
      component.componentWillLoad();
      expect(component.type).toBe('number');
    });

    it('should set type to empty when number is 0', () => {
      const component = new Badge();
      component.number = 0;
      component.componentWillLoad();
      expect(component.type).toBe('empty');
    });

    it('should keep type as status by default', () => {
      const component = new Badge();
      component.componentWillLoad();
      expect(component.type).toBe('status');
    });
  });

  describe('numberChanged', () => {
    it('should set type to empty when new number is 0', () => {
      const component = new Badge();
      component.numberChanged(0);
      expect(component.type).toBe('empty');
    });

    it('should set type to number when icon is null and new number is not null', () => {
      const component = new Badge();
      component.icon = null;
      component.numberChanged(5);
      expect(component.type).toBe('number');
    });

    it('should not change type when icon is provided and number changes', () => {
      const component = new Badge();
      component.type = 'icon';
      component.icon = 'user';
      component.numberChanged(5);
      expect(component.type).toBe('icon'); // Should remain icon since icon is not null
    });
  });

  it('should render method should return JSX element', () => {
    const component = new Badge();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should render method should handle property changes', () => {
    const component = new Badge();
    
    // Test with status type
    component.color = 'danger';
    component.shape = 'square';
    component.animation = true;
    component.dataTest = 'test';
    
    const result1 = component.render();
    expect(result1).toBeTruthy();
    
    // Test with number type
    component.number = 5;
    component.componentWillLoad();
    
    const result2 = component.render();
    expect(result2).toBeTruthy();
    
    // Test with icon type
    component.number = undefined;
    component.icon = 'user';
    component.componentWillLoad();
    
    const result3 = component.render();
    expect(result3).toBeTruthy();
    
    // Test with empty type
    component.number = 0;
    component.componentWillLoad();
    
    const result4 = component.render();
    expect(result4).toBeTruthy();
  });
});