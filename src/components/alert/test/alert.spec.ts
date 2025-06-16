import { BdsAlert } from '../alert';

describe('bds-alert', () => {
  describe('Component Creation and Properties', () => {
    it('should create component with default values', () => {
      const component = new BdsAlert();
      expect(component).toBeTruthy();
      expect(component.open).toBe(false);
      expect(component.dataTest).toBe(null);
      expect(component.position).toBe('fixed');
    });

    it('should accept all valid properties', () => {
      const component = new BdsAlert();
      
      component.open = true;
      expect(component.open).toBe(true);
      
      component.dataTest = 'test-alert';
      expect(component.dataTest).toBe('test-alert');
      
      component.position = 'contain';
      expect(component.position).toBe('contain');
    });
  });

  describe('Component Rendering', () => {
    it('should render JSX element with correct structure', () => {
      const component = new BdsAlert();
      const result = component.render();
      
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      expect(result.$tag$).toBe('div');
      expect(result.$attrs$.class).toContain('alert__dialog');
      expect(result.$attrs$.class).toContain('alert__dialog--fixed');
    });

    it('should render with open state correctly', () => {
      const component = new BdsAlert();
      
      // Test closed state
      component.open = false;
      let result = component.render();
      expect(result.$attrs$.class).not.toContain('alert__dialog--open');
      
      // Test open state
      component.open = true;
      result = component.render();
      expect(result.$attrs$.class).toContain('alert__dialog--open');
    });

    it('should render with different positions', () => {
      const component = new BdsAlert();
      
      component.position = 'contain';
      const result = component.render();
      expect(result.$attrs$.class).toContain('alert__dialog--contain');
    });

    it('should render inner alert div with slot', () => {
      const component = new BdsAlert();
      const result = component.render();
      
      // Check the inner structure
      expect(result.$children$).toBeTruthy();
      expect(result.$children$.length).toBe(1);
      
      const innerDiv = result.$children$[0];
      expect(innerDiv.$tag$).toBe('div');
      expect(innerDiv.$attrs$.class).toBe('alert');
      expect(innerDiv.$children$[0].$tag$).toBe('slot');
    });

    it('should include data-test attribute when specified', () => {
      const component = new BdsAlert();
      component.dataTest = 'alert-test';
      
      const result = component.render();
      const innerDiv = result.$children$[0];
      expect(innerDiv.$attrs$['data-test']).toBe('alert-test');
    });
  });

  describe('Component Methods', () => {
    it('should have toggle method that changes open state', async () => {
      const component = new BdsAlert();
      
      expect(component.open).toBe(false);
      
      await component.toggle();
      expect(component.open).toBe(true);
      
      await component.toggle();
      expect(component.open).toBe(false);
    });

    it('should emit events when toggled', async () => {
      const component = new BdsAlert();
      let emittedEvent = null;
      
      // Mock the event emitter
      component.bdsAlertChanged = {
        emit: jest.fn((event) => emittedEvent = event)
      } as any;
      
      // Test opening
      await component.toggle();
      expect(component.bdsAlertChanged.emit).toHaveBeenCalledWith({ alertStatus: 'opened' });
      
      // Test closing
      await component.toggle();
      expect(component.bdsAlertChanged.emit).toHaveBeenCalledWith({ alertStatus: 'closed' });
    });
  });

  describe('Lifecycle Methods', () => {
    it('should handle open state changes', () => {
      const component = new BdsAlert();
      
      // Mock document methods
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
      
      // Test opening
      component.open = true;
      component.isOpenChanged();
      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function), false);
      
      // Test closing
      component.open = false;
      component.isOpenChanged();
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function), false);
      
      // Cleanup
      addEventListenerSpy.mockRestore();
      removeEventListenerSpy.mockRestore();
    });
  });
});
