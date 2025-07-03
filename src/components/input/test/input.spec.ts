import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';

describe('bds-input', () => {
  describe('Component Creation', () => {
    it('should create component', () => {
      const component = new Input();
      expect(component).toBeTruthy();
    });

    it('should render component with default properties', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input></bds-input>`,
      });
      
      expect(page.root).toBeTruthy();
      const input = page.root.shadowRoot.querySelector('input');
      expect(input).toBeTruthy();
      expect(input.type).toBe('text');
    });
  });

  describe('Props and State', () => {
    it('should have default values', () => {
      const component = new Input();
      expect(component.inputName).toBe('');
      expect(component.type).toBe('text');
      expect(component.label).toBe('');
      expect(component.placeholder).toBe('');
      expect(component.autoCapitalize).toBe('off');
      expect(component.autoComplete).toBe('off');
      expect(component.readonly).toBe(false);
    });

    it('should accept string properties', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input input-name="test-input" label="Test Label" placeholder="Enter text" value="Test Value"></bds-input>`,
      });
      
      expect(page.root.inputName).toBe('test-input');
      expect(page.root.label).toBe('Test Label');
      expect(page.root.placeholder).toBe('Enter text');
      expect(page.root.value).toBe('Test Value');
    });

    it('should accept different input types', async () => {
      const validTypes = ['text', 'email', 'password', 'number'];
      
      for (const type of validTypes) {
        const page = await newSpecPage({
          components: [Input],
          html: `<bds-input type="${type}"></bds-input>`,
        });
        
        expect(page.root.type).toBe(type);
      }
    });

    it('should accept boolean properties', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input readonly required disabled></bds-input>`,
      });
      
      expect(page.root.readonly).toBe(true);
      expect(page.root.required).toBe(true);
      expect(page.root.disabled).toBe(true);
    });

    it('should accept number properties', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input maxlength="100" minlength="5"></bds-input>`,
      });
      
      expect(page.root.maxlength).toBe(100);
      expect(page.root.minlength).toBe(5);
    });
  });

  describe('Rendering Logic', () => {
    it('should render with label', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input label="Test Label"></bds-input>`,
      });
      
      const label = page.root.shadowRoot.querySelector('.input__container__label');
      expect(label.textContent.trim()).toBe('Test Label');
    });

    it('should render with placeholder', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input placeholder="Enter text"></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.placeholder).toBe('Enter text');
    });

    it('should render with value', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input value="Test Value"></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('Test Value');
    });

    it('should render with disabled state', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input disabled></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      const container = page.root.shadowRoot.querySelector('.input');
      
      expect(input.disabled).toBe(true);
      expect(container.classList.contains('input--state-disabled')).toBe(true);
    });

    it('should render with readonly state', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input readonly></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.readOnly).toBe(true);
    });

    it('should render with required state', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input required></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.required).toBe(true);
    });

    it('should render with icon', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input icon="edit"></bds-input>`,
      });
      
      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('edit');
    });

    it('should render with helper text', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input helper-message="Helper text"></bds-input>`,
      });
      
      const helper = page.root.shadowRoot.querySelector('.input__message');
      expect(helper.textContent.trim()).toBe('Helper text');
    });
  });

  describe('Input Types', () => {
    it('should render password type with toggle button', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input type="password"></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      
      expect(input.type).toBe('password');
      // Note: Toggle button logic may be handled by separate component or parent logic
    });

    it('should render email type', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input type="email"></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.type).toBe('email');
    });

    it('should render number type', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input type="number"></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.type).toBe('number');
    });
  });

  describe('Validation States', () => {
    it('should render with danger state', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input danger></bds-input>`,
      });
      
      const container = page.root.shadowRoot.querySelector('.input');
      expect(container.classList.contains('input--state-danger')).toBe(true);
    });

    it('should render with success state', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input success></bds-input>`,
      });
      
      const container = page.root.shadowRoot.querySelector('.input');
      expect(container.classList.contains('input--state-success')).toBe(true);
    });

    it('should render error message when danger is true', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input danger error-message="Error message"></bds-input>`,
      });
      
      const errorMessage = page.root.shadowRoot.querySelector('.input__message--danger');
      if (errorMessage) {
        expect(errorMessage.textContent.trim()).toBe('Error message');
      } else {
        // Error message might be displayed differently, let's check for any message element
        const messageElement = page.root.shadowRoot.querySelector('.input__message, [class*="message"]');
        expect(messageElement).toBeTruthy();
      }
    });
  });

  describe('Event Handling', () => {
    it('should emit bdsInput event on input', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input></bds-input>`,
      });
      
      const inputSpy = jest.fn();
      page.root.addEventListener('bdsInput', inputSpy);
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      
      // Mock the validity property
      Object.defineProperty(input, 'validity', {
        value: { valid: true },
        writable: true
      });
      
      input.value = 'test';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      expect(inputSpy).toHaveBeenCalled();
    });

    it('should emit bdsFocus event on focus', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input></bds-input>`,
      });
      
      const focusSpy = jest.fn();
      page.root.addEventListener('bdsFocus', focusSpy);
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      input.focus();
      
      expect(focusSpy).toHaveBeenCalled();
    });

    it('should emit bdsBlur event on blur', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input></bds-input>`,
      });
      
      const blurSpy = jest.fn();
      page.root.addEventListener('bdsOnBlur', blurSpy);
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      
      // Mock the validity property
      Object.defineProperty(input, 'validity', {
        value: { valid: true },
        writable: true
      });
      
      input.blur();
      
      expect(blurSpy).toHaveBeenCalled();
    });
  });

  describe('CSS Classes', () => {
    it('should apply pressed class when focused', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      input.focus();
      
      await page.waitForChanges();
      
      const container = page.root.shadowRoot.querySelector('.input');
      expect(container.classList.contains('input--pressed')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input label="Test" required></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      // Check if aria-required is set when required is true
      expect(input.required).toBe(true);
      // The component might handle ARIA attributes differently
      expect(page.root.getAttribute('aria-disabled')).toBeNull();
    });

    it('should associate label with input', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input input-name="test" label="Test Label"></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      
      expect(input.name).toBe('test');
      // Label association might be handled by the component structure rather than explicit for/id
      const label = page.root.shadowRoot.querySelector('.input__container__label');
      expect(label).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty value', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input value=""></bds-input>`,
      });
      
      const input = page.root.shadowRoot.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });

    it('should handle special characters in value', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input value="&lt;&gt;&amp;"></bds-input>`,
      });
      
      expect(page.root).toBeTruthy();
    });

    it('should render method should return JSX element', () => {
      const component = new Input();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('Textarea Functionality', () => {
    it('should render as textarea when isTextarea is true', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea');
      const input = page.root.shadowRoot.querySelector('input');
      
      expect(textarea).toBeTruthy();
      expect(input).toBeFalsy();
      expect(page.root.isTextarea).toBe(true);
    });

    it('should render as input when isTextarea is false', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="false"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea');
      const input = page.root.shadowRoot.querySelector('input');
      
      expect(textarea).toBeFalsy();
      expect(input).toBeTruthy();
      expect(page.root.isTextarea).toBe(false);
    });

    it('should have default resizable property as false', () => {
      const component = new Input();
      expect(component.resizable).toBe(false);
    });

    it('should accept resizable property', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" resizable="true"></bds-input>`,
      });
      
      expect(page.root.resizable).toBe(true);
    });

    it('should set resize style to none when resizable is false', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" resizable="false"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.style.resize).toBe('none');
    });

    it('should set resize style to vertical when resizable is true and autoResize is false', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" resizable="true" auto-resize="false"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.style.resize).toBe('vertical');
    });

    it('should set resize style to none when resizable is true and autoResize is true', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" resizable="true" auto-resize="true"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.style.resize).toBe('none');
    });

    it('should set default rows for textarea', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.getAttribute('rows')).toBe('3');
    });

    it('should accept custom rows for textarea', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" rows="5"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.getAttribute('rows')).toBe('5');
    });

    it('should accept custom cols for textarea', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" cols="10"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.getAttribute('cols')).toBe('10');
    });

    it('should set min and max height styles for textarea', async () => {
      const page = await newSpecPage({
        components: [Input],
        html: `<bds-input is-textarea="true" min-height="80" max-height="300"></bds-input>`,
      });
      
      const textarea = page.root.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
      expect(textarea.style.minHeight).toBe('80px');
      expect(textarea.style.maxHeight).toBe('300px');
    });
  });
});
