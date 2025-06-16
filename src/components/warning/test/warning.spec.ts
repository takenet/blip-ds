import { Warning } from '../warning';

describe('bds-warning', () => {
  describe('Component Creation and Rendering', () => {
    it('should create component', () => {
      const component = new Warning();
      expect(component).toBeTruthy();
    });

    it('should render JSX Host element with correct structure', () => {
      const component = new Warning();
      const result = component.render();
      
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      // Host components have empty object as $tag$
      expect(typeof result.$tag$).toBe('object');
    });

    it('should render warning body container', () => {
      const component = new Warning();
      const result = component.render();
      
      expect(result.$children$).toBeTruthy();
      expect(result.$children$.length).toBe(1);
      
      const warningBody = result.$children$[0];
      expect(warningBody.$tag$).toBe('div');
      expect(warningBody.$attrs$.class).toBe('warning__body');
    });

    it('should render icon and typography components', () => {
      const component = new Warning();
      const result = component.render();
      
      const warningBody = result.$children$[0];
      expect(warningBody.$children$).toBeTruthy();
      expect(warningBody.$children$.length).toBe(2);
      
      // Check icon
      const icon = warningBody.$children$[0];
      expect(icon.$tag$).toBe('bds-icon');
      expect(icon.$attrs$.class).toBe('warning__icon');
      expect(icon.$attrs$.theme).toBe('solid');
      expect(icon.$attrs$.size).toBe('small');
      expect(icon.$attrs$.name).toBe('warning');
      
      // Check typography
      const typo = warningBody.$children$[1];
      expect(typo.$tag$).toBe('bds-typo');
      expect(typo.$attrs$.variant).toBe('fs-14');
      expect(typo.$attrs$.tag).toBe('span');
      expect(typo.$attrs$.class).toBe('warning__message');
    });

    it('should render slot for content', () => {
      const component = new Warning();
      const result = component.render();
      
      const warningBody = result.$children$[0];
      const typo = warningBody.$children$[1];
      
      expect(typo.$children$).toBeTruthy();
      expect(typo.$children$.length).toBe(1);
      expect(typo.$children$[0].$tag$).toBe('slot');
    });
  });

  describe('Component Behavior', () => {
    it('should maintain consistent render output', () => {
      const component = new Warning();
      const result1 = component.render();
      const result2 = component.render();
      
      expect(result1.$tag$).toBe(result2.$tag$);
      expect(result1.$children$[0].$attrs$.class).toBe(result2.$children$[0].$attrs$.class);
    });

    it('should have proper component structure', () => {
      const component = new Warning();
      const result = component.render();
      
      // Verify the complete structure
      expect(typeof result.$tag$).toBe('object');
      const body = result.$children$[0];
      expect(body.$tag$).toBe('div');
      expect(body.$attrs$.class).toBe('warning__body');
      expect(body.$children$.length).toBe(2);
      expect(body.$children$[0].$tag$).toBe('bds-icon');
      expect(body.$children$[1].$tag$).toBe('bds-typo');
    });
  });
});
