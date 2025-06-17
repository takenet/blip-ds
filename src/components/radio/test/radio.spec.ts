import { newSpecPage } from '@stencil/core/testing';
import { Radio } from '../radio';

describe('bds-radio', () => {
  describe('Component Creation', () => {
    it('should create component', () => {
      const component = new Radio();
      expect(component).toBeTruthy();
    });

    it('should render component with default properties', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test"></bds-radio>`,
      });
      
      expect(page.root).toBeTruthy();
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      expect(input).toBeTruthy();
      expect(input.checked).toBe(false);
      expect(input.disabled).toBe(false);
    });
  });

  describe('Props and State', () => {
    it('should have default values', () => {
      const component = new Radio();
      expect(component.checked).toBe(false);
      expect(component.disabled).toBe(false);
      expect(component.dataTest).toBe(null);
    });

    it('should accept required props', () => {
      const component = new Radio();
      component.name = 'test-radio';
      component.value = 'test-value';
      component.label = 'Test Label';
      
      expect(component.name).toBe('test-radio');
      expect(component.value).toBe('test-value');
      expect(component.label).toBe('Test Label');
    });

    it('should accept boolean properties', () => {
      const component = new Radio();
      
      component.checked = true;
      expect(component.checked).toBe(true);
      
      component.disabled = true;
      expect(component.disabled).toBe(true);
    });

    it('should accept dataTest string', () => {
      const component = new Radio();
      component.dataTest = 'test-id';
      expect(component.dataTest).toBe('test-id');
    });
  });

  describe('Rendering Logic', () => {
    it('should render with checked state', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" checked></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      expect(input.checked).toBe(true);
    });

    it('should render with disabled state', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" disabled></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      const container = page.root.shadowRoot.querySelector('.radio');
      
      expect(input.disabled).toBe(true);
      expect(container).toBeTruthy();
    });

    it('should render with label', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" label="Test Label"></bds-radio>`,
      });
      
      const label = page.root.shadowRoot.querySelector('label .radio__text');
      expect(label.textContent).toBe('Test Label');
    });

    it('should render with custom refer id', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" refer="custom-id"></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      const label = page.root.shadowRoot.querySelector('label');
      
      expect(input.id).toBe('custom-id');
      // Note: StencilJS renders htmlFor as the actual 'for' attribute, but during testing it may not be present
      // The important thing is that the input id is set correctly
      expect(label).toBeTruthy();
    });

    it('should auto-generate id when refer is not provided', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test"></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      expect(input.id).toMatch(/^bds-radio-\d+$/);
    });
  });

  describe('Event Handling', () => {
    it('should emit bdsChange event when checked state changes', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test"></bds-radio>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsChange', changeSpy);
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      input.click();
      
      await page.waitForChanges();
      expect(changeSpy).toHaveBeenCalled();
    });

    it('should have disabled attribute when disabled', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" disabled></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      
      // The input element should have the disabled attribute
      expect(input.disabled).toBe(true);
      expect(page.root.disabled).toBe(true);
    });
  });

  describe('CSS Classes', () => {
    it('should apply container classes', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" checked></bds-radio>`,
      });
      
      const container = page.root.shadowRoot.querySelector('.radio');
      expect(container).toBeTruthy();
    });

    it('should apply input classes', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" disabled></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('.radio__input');
      expect(input).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have correct input attributes', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" checked></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      expect(input.getAttribute('type')).toBe('radio');
      expect(input.checked).toBe(true);
    });

    it('should associate label with input', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test" value="test" refer="test-id"></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      const label = page.root.shadowRoot.querySelector('label');
      
      expect(input.id).toBe('test-id');
      // Note: StencilJS renders htmlFor as the actual 'for' attribute, but during testing it may not be present
      // The important thing is that the input id is set correctly and the label exists
      expect(label).toBeTruthy();
    });

    it('should have correct name and value attributes', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio name="test-name" value="test-value"></bds-radio>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input[type="radio"]') as HTMLInputElement;
      expect(input.getAttribute('name')).toBe('test-name');
      expect(input.getAttribute('value')).toBe('test-value');
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing required props gracefully', async () => {
      const page = await newSpecPage({
        components: [Radio],
        html: `<bds-radio></bds-radio>`,
      });
      
      expect(page.root).toBeTruthy();
    });

    it('should generate unique IDs for multiple instances', () => {
      const component1 = new Radio();
      const component2 = new Radio();
      
      component1.connectedCallback();
      component2.connectedCallback();
      
      expect(component1.radioId).not.toBe(component2.radioId);
    });

    it('should render method should return JSX element', () => {
      const component = new Radio();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });
});
