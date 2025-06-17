import { newSpecPage } from '@stencil/core/testing';
import { AlertActions } from '../alert-actions';

describe('bds-alert-actions', () => {
  describe('Component Creation', () => {
    it('should create component', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: '<bds-alert-actions></bds-alert-actions>',
      });
      expect(page.rootInstance).toBeInstanceOf(AlertActions);
    });

    it('should render with default structure', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: '<bds-alert-actions></bds-alert-actions>',
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-actions>
          <mock:shadow-root>
            <div class="alert__actions">
              <slot></slot>
            </div>
          </mock:shadow-root>
        </bds-alert-actions>
      `);
    });
  });

  describe('Slot Content', () => {
    it('should render slotted content correctly', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: `
          <bds-alert-actions>
            <button>Action 1</button>
            <button>Action 2</button>
          </bds-alert-actions>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-actions>
          <mock:shadow-root>
            <div class="alert__actions">
              <slot></slot>
            </div>
          </mock:shadow-root>
          <button>Action 1</button>
          <button>Action 2</button>
        </bds-alert-actions>
      `);
    });

    it('should render with empty content', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: '<bds-alert-actions></bds-alert-actions>',
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-actions>
          <mock:shadow-root>
            <div class="alert__actions">
              <slot></slot>
            </div>
          </mock:shadow-root>
        </bds-alert-actions>
      `);
    });

    it('should handle various action types in slot', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: `
          <bds-alert-actions>
            <bds-button>Primary Action</bds-button>
            <bds-button variant="secondary">Secondary Action</bds-button>
            <a href="#">Link Action</a>
          </bds-alert-actions>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-actions>
          <mock:shadow-root>
            <div class="alert__actions">
              <slot></slot>
            </div>
          </mock:shadow-root>
          <bds-button>Primary Action</bds-button>
          <bds-button variant="secondary">Secondary Action</bds-button>
          <a href="#">Link Action</a>
        </bds-alert-actions>
      `);
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct CSS class to container', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: '<bds-alert-actions></bds-alert-actions>',
      });

      const containerDiv = page.root.shadowRoot.querySelector('div');
      expect(containerDiv).toHaveClass('alert__actions');
    });
  });

  describe('Component Structure', () => {
    it('should maintain consistent structure regardless of content', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: `
          <bds-alert-actions>
            <span>Simple Text</span>
          </bds-alert-actions>
        `,
      });

      const shadowRoot = page.root.shadowRoot;
      expect(shadowRoot.children).toHaveLength(1);
      expect(shadowRoot.firstElementChild.tagName).toBe('DIV');
      expect(shadowRoot.firstElementChild).toHaveClass('alert__actions');
    });

    it('should render method return JSX element', () => {
      const component = new AlertActions();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('Shadow DOM', () => {
    it('should use shadow DOM for encapsulation', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: '<bds-alert-actions></bds-alert-actions>',
      });

      expect(page.root.shadowRoot).toBeTruthy();
      expect(page.root.shadowRoot.children).toHaveLength(1);
    });

    it('should have slot element in shadow DOM', async () => {
      const page = await newSpecPage({
        components: [AlertActions],
        html: '<bds-alert-actions></bds-alert-actions>',
      });

      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });
});