// Mock child components
class MockLoadingSpinner {
  static get is() { return 'bds-loading-spinner'; }
  static get tagName() { return 'bds-loading-spinner'; }
  
  render() {
    return `<mock:bds-loading-spinner></mock:bds-loading-spinner>`;
  }
}

class MockIcon {
  static get is() { return 'bds-icon'; }
  static get tagName() { return 'bds-icon'; }
  
  name: string;
  theme: string;
  color: string;
  size: string;
  
  render() {
    return `<mock:bds-icon name="${this.name || ''}" theme="${this.theme || ''}" color="${this.color || ''}" size="${this.size || ''}"></mock:bds-icon>`;
  }
}

// Mock HTMLSlotElement and assignedNodes method before importing the component
global.HTMLSlotElement = class HTMLSlotElement extends HTMLElement {
  assignedNodes() {
    return [];
  }
} as any;

// Mock the element's shadowRoot property to return a mock with querySelector
Object.defineProperty(HTMLElement.prototype, 'shadowRoot', {
  get: function() {
    const slotMock = document.createElement('slot') as any;
    slotMock.assignedNodes = jest.fn().mockReturnValue([]);
    
    const buttonMock = document.createElement('button');
    
    return {
      querySelector: jest.fn().mockImplementation((selector: string) => {
        if (selector === 'slot') {
          return slotMock;
        }
        if (selector === 'button') {
          return buttonMock;
        }
        return null;
      })
    };
  },
  configurable: true
});

import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

// Mock the logSlotText method to prevent slot-related errors
Button.prototype.logSlotText = jest.fn();

describe('bds-button', () => {
  describe('Component Creation', () => {
    it('should create component', () => {
      const component = new Button();
      expect(component).toBeTruthy();
    });

    it('should render component with default properties', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button>Test Button</bds-button>`,
      });
      expect(page.root).toEqualHtml(`
        <bds-button class="host" icon-theme="outline" type-icon="icon">
          <mock:shadow-root>
            <div class="focus" tabindex="0"></div>
            <button aria-disabled="false" aria-live="assertive" class="button button__color--primary button__justify-content--center button__position--undefined--undefined button__size--medium button__solid button__variant--solid" part="button" tabindex="-1" type="button">
              <bds-typo bold="bold" class="button__content typo_buttom" lineheight="simple" variant="fs-14">
                <slot></slot>
              </bds-typo>
            </button>
          </mock:shadow-root>
          Test Button
        </bds-button>
      `);
    });
  });

  describe('Props and State', () => {
    it('should have default values', () => {
      const component = new Button();
      expect(component.block).toBe(false);
      expect(component.fullWidth).toBe(false);
      expect(component.justifyContent).toBe('center');
      expect(component.groupIcon).toBe(false);
      expect(component.disabled).toBe(false);
      expect(component.color).toBe('primary');
      expect(component.size).toBe('medium');
      expect(component.variant).toBe('solid');
      expect(component.icon).toBe(null);
      expect(component.iconLeft).toBe(null);
      expect(component.iconRight).toBe(null);
      expect(component.arrow).toBe(false);
      expect(component.type).toBe('button');
      expect(component.iconTheme).toBe('outline');
      expect(component.typeIcon).toBe('icon');
    });

    it('should accept different sizes', async () => {
      const component = new Button();
      const validSizes = ['tall', 'standard', 'short', 'medium', 'large'];
      
      validSizes.forEach(size => {
        component.size = size as any;
        expect(component.size).toBe(size);
      });
    });

    it('should accept different variants', async () => {
      const component = new Button();
      const validVariants = [
        'primary', 'secondary', 'tertiary', 'delete', 'secondary--white',
        'ghost', 'dashed', 'facebook', 'solid', 'outline', 'text'
      ];
      
      validVariants.forEach(variant => {
        component.variant = variant as any;
        expect(component.variant).toBe(variant);
      });
    });

    it('should accept different types', async () => {
      const component = new Button();
      const validTypes = ['button', 'submit', 'reset'];
      
      validTypes.forEach(type => {
        component.type = type as any;
        expect(component.type).toBe(type);
      });
    });

    it('should accept boolean properties', () => {
      const component = new Button();
      
      component.block = true;
      expect(component.block).toBe(true);
      
      component.disabled = true;
      expect(component.disabled).toBe(true);
      
      component.arrow = true;
      expect(component.arrow).toBe(true);

      component.fullWidth = true;
      expect(component.fullWidth).toBe(true);

      component.groupIcon = true;
      expect(component.groupIcon).toBe(true);
    });

    it('should accept different justify-content values', () => {
      const component = new Button();
      const validJustifyContent = ['center', 'space-between'];
      
      validJustifyContent.forEach(value => {
        component.justifyContent = value as any;
        expect(component.justifyContent).toBe(value);
      });
    });
  });

  describe('Rendering Logic', () => {
    it('should render with disabled state', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button disabled>Disabled Button</bds-button>`,
      });
      
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.getAttribute('aria-disabled')).toBe('true');
      // The actual class includes the variant in the name: button__variant--{variant}--disabled
      expect(button.classList.contains('button__variant--solid--disabled')).toBe(true);
    });

    it('should render with block style', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button block>Block Button</bds-button>`,
      });
      
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.classList.contains('button--block')).toBe(true);
    });

    it('should render with full-width style', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button full-width>Full Width Button</bds-button>`,
      });
      
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.classList.contains('button--full-width')).toBe(true);
      expect(page.root.classList.contains('block')).toBe(true); // Host should have block class for full-width
    });

    it('should render with justify-content styles', async () => {
      // Test center (default)
      const centerPage = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button>Center Button</bds-button>`,
      });
      
      const centerButton = centerPage.root.shadowRoot.querySelector('button');
      expect(centerButton.classList.contains('button__justify-content--center')).toBe(true);

      // Test space-between
      const spaceBetweenPage = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button justify-content="space-between">Space Between Button</bds-button>`,
      });
      
      const spaceBetweenButton = spaceBetweenPage.root.shadowRoot.querySelector('button');
      expect(spaceBetweenButton.classList.contains('button__justify-content--space-between')).toBe(true);
    });

    it('should render with loading state', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button bds-loading>Loading Button</bds-button>`,
      });
      
      // There's no specific loading class applied to the button, but the spinner should be present
      const spinner = page.root.shadowRoot.querySelector('bds-loading-spinner');
      expect(spinner).toBeTruthy();
    });

    it('should render with icon', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button icon="edit">Button with Icon</bds-button>`,
      });
      
      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('edit');
    });

    it('should render with left and right icons', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button icon-left="edit" icon-right="arrow-right">Button with Icons</bds-button>`,
      });
      
      const icons = page.root.shadowRoot.querySelectorAll('bds-icon');
      expect(icons.length).toBe(2);
      expect(icons[0].getAttribute('name')).toBe('edit');
      expect(icons[1].getAttribute('name')).toBe('arrow-right');
    });

    it('should render with grouped icon and text when groupIcon is true', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button icon-left="info" icon-right="arrow-right" group-icon>Button with grouped content</bds-button>`,
      });
      
      const groupContent = page.root.shadowRoot.querySelector('.button__group-content');
      expect(groupContent).toBeTruthy();
      
      // Should have icon and text inside the group
      const iconInsideGroup = groupContent.querySelector('bds-icon');
      const textInsideGroup = groupContent.querySelector('bds-typo');
      expect(iconInsideGroup).toBeTruthy();
      expect(textInsideGroup).toBeTruthy();
      expect(iconInsideGroup.getAttribute('name')).toBe('info');
      
      // Should still have right icon outside the group
      const rightIcon = page.root.shadowRoot.querySelector('button > bds-icon:last-of-type');
      expect(rightIcon).toBeTruthy();
      expect(rightIcon.getAttribute('name')).toBe('arrow-right');
    });

    it('should not render grouped content when groupIcon is false', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button icon-left="info" icon-right="arrow-right">Button without grouped content</bds-button>`,
      });
      
      const groupContent = page.root.shadowRoot.querySelector('.button__group-content');
      expect(groupContent).toBeFalsy();
      
      // Should have separate icon and text elements
      const icons = page.root.shadowRoot.querySelectorAll('bds-icon');
      const text = page.root.shadowRoot.querySelector('bds-typo');
      expect(icons.length).toBe(2);
      expect(text).toBeTruthy();
    });

    it('should not render grouped content when groupIcon is true but no left icon', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button icon-right="arrow-right" group-icon>Button with no left icon</bds-button>`,
      });
      
      const groupContent = page.root.shadowRoot.querySelector('.button__group-content');
      expect(groupContent).toBeFalsy();
      
      // Should render text normally and only the right icon
      const icons = page.root.shadowRoot.querySelectorAll('bds-icon');
      const text = page.root.shadowRoot.querySelector('bds-typo');
      expect(icons.length).toBe(1); // Only right icon
      expect(text).toBeTruthy();
      expect(icons[0].getAttribute('name')).toBe('arrow-right');
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct size classes', async () => {
      // Test all sizes including legacy conversions
      const sizeTests = [
        { input: 'tall', expected: 'large' },     // legacy converts tall -> large
        { input: 'standard', expected: 'medium' }, // legacy converts standard -> medium
        { input: 'short', expected: 'short' },     // no conversion, stays short
        { input: 'medium', expected: 'medium' },   // no conversion needed
        { input: 'large', expected: 'large' }      // no conversion needed
      ];
      
      for (const { input, expected } of sizeTests) {
        const page = await newSpecPage({
          components: [Button],
          html: `<bds-button size="${input}">Button</bds-button>`,
        });
        
        const htmlString = page.root.shadowRoot.innerHTML;
        
        // Check for the expected size class in the HTML output
        expect(htmlString).toContain(`button__size--${expected}`);
      }
    });

    it('should apply correct variant classes', async () => {
      const variants = ['primary', 'secondary', 'ghost', 'solid'];
      
      for (const variant of variants) {
        const page = await newSpecPage({
          components: [Button, MockLoadingSpinner, MockIcon],
          html: `<bds-button variant="${variant}">Button</bds-button>`,
        });
        
        const button = page.root.shadowRoot.querySelector('button');
        expect(button.classList.contains(`button__variant--${variant}`)).toBe(true);
      }
    });
  });

  describe('Event Handling', () => {
    it('should emit click event when not disabled', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button>Click Me</bds-button>`,
      });
      
      const clickSpy = jest.fn();
      page.root.addEventListener('bdsClick', clickSpy);
      
      const button = page.root.shadowRoot.querySelector('button');
      button.click();
      
      expect(clickSpy).toHaveBeenCalled();
    });

    it('should not emit click event when disabled', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button disabled>Click Me</bds-button>`,
      });
      
      const clickSpy = jest.fn();
      page.root.addEventListener('bdsClick', clickSpy);
      
      const button = page.root.shadowRoot.querySelector('button');
      button.click();
      
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have correct button type attribute', async () => {
      const types = ['button', 'submit', 'reset'];
      
      for (const type of types) {
        const page = await newSpecPage({
          components: [Button, MockLoadingSpinner, MockIcon],
          html: `<bds-button type="${type}">Button</bds-button>`,
        });
        
        const button = page.root.shadowRoot.querySelector('button');
        expect(button.getAttribute('type')).toBe(type);
      }
    });

    it('should set aria-disabled when disabled', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<bds-button disabled>Disabled Button</bds-button>`,
      });
      
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty content', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button></bds-button>`,
      });
      
      expect(page.root).toBeTruthy();
      const button = page.root.shadowRoot.querySelector('button');
      expect(button).toBeTruthy();
    });

    it('should handle special characters in content', async () => {
      const page = await newSpecPage({
        components: [Button, MockLoadingSpinner, MockIcon],
        html: `<bds-button>&amp; &lt; &gt;</bds-button>`,
      });
      
      expect(page.root).toBeTruthy();
    });

    it('should render method should return JSX element', () => {
      const component = new Button();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });
});
