import { BdsDivider } from '../divider';

describe('bds-divider', () => {
  describe('Properties and Default Values', () => {
    it('should have correct default values', () => {
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
  });

  describe('Component Rendering', () => {
    it('should render JSX Host element with correct structure', () => {
      const component = new BdsDivider();
      const result = component.render();
      
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      // Host components have empty object as $tag$
      expect(typeof result.$tag$).toBe('object');
      expect(result.$attrs$.class).toBe('horizontal solid color-divider-1 ');
    });

    it('should render hr element as child', () => {
      const component = new BdsDivider();
      const result = component.render();
      
      expect(result.$children$).toBeTruthy();
      expect(result.$children$.length).toBe(1);
      
      const hrElement = result.$children$[0];
      expect(hrElement.$tag$).toBe('hr');
      expect(hrElement.$attrs$.class).toBe('horizontal solid color-divider-1');
    });

    it('should render with different style types', () => {
      const component = new BdsDivider();
      
      // Test dotted
      component.styleType = 'dotted';
      let result = component.render();
      expect(result.$attrs$.class).toContain('dotted');
      expect(result.$children$[0].$attrs$.class).toContain('dotted');
      
      // Test dashed
      component.styleType = 'dashed';
      result = component.render();
      expect(result.$attrs$.class).toContain('dashed');
      expect(result.$children$[0].$attrs$.class).toContain('dashed');
    });

    it('should render with different orientations', () => {
      const component = new BdsDivider();
      
      // Test vertical
      component.orientation = 'vertical';
      const result = component.render();
      expect(result.$attrs$.class).toContain('vertical');
      expect(result.$children$[0].$attrs$.class).toContain('vertical');
    });

    it('should render with different colors', () => {
      const component = new BdsDivider();
      
      // Test divider-2
      component.color = 'divider-2';
      let result = component.render();
      expect(result.$attrs$.class).toContain('color-divider-2');
      expect(result.$children$[0].$attrs$.class).toContain('color-divider-2');
      
      // Test divider-3
      component.color = 'divider-3';
      result = component.render();
      expect(result.$attrs$.class).toContain('color-divider-3');
      expect(result.$children$[0].$attrs$.class).toContain('color-divider-3');
    });

    it('should render with combined property changes', () => {
      const component = new BdsDivider();
      
      component.styleType = 'dashed';
      component.orientation = 'vertical';
      component.color = 'divider-2';
      
      const result = component.render();
      const expectedClass = 'vertical dashed color-divider-2 ';
      
      expect(result.$attrs$.class).toBe(expectedClass);
      expect(result.$children$[0].$attrs$.class).toBe('vertical dashed color-divider-2');
    });
  });

  describe('CSS Class Generation', () => {
    it('should generate correct CSS classes for Host element', () => {
      const component = new BdsDivider();
      
      // Test default
      let result = component.render();
      expect(result.$attrs$.class).toBe('horizontal solid color-divider-1 ');
      
      // Test with changes
      component.orientation = 'vertical';
      component.styleType = 'dotted';
      component.color = 'divider-3';
      
      result = component.render();
      expect(result.$attrs$.class).toBe('vertical dotted color-divider-3 ');
    });

    it('should generate correct CSS classes for hr element', () => {
      const component = new BdsDivider();
      
      component.orientation = 'vertical';
      component.styleType = 'dashed';
      component.color = 'divider-2';
      
      const result = component.render();
      const hrElement = result.$children$[0];
      expect(hrElement.$attrs$.class).toBe('vertical dashed color-divider-2');
    });
  });
});