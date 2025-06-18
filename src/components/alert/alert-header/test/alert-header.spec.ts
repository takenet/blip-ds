import { newSpecPage } from '@stencil/core/testing';
import { AlertHeader } from '../alert-header';

describe('bds-alert-header', () => {
  describe('Component Creation', () => {
    it('should create component', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });
      expect(page.rootInstance).toBeInstanceOf(AlertHeader);
    });

    it('should render with default structure', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-header>
          <mock:shadow-root>
            <div class="alert__header alert__header--system">
              <bds-typo variant="fs-16" bold="bold">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
        </bds-alert-header>
      `);
    });
  });

  describe('Default Values', () => {
    it('should have default values', () => {
      const component = new AlertHeader();
      expect(component.variant).toBe('system');
      expect(component.icon).toBe(null);
    });
  });

  describe('Variant Property', () => {
    it('should accept all valid variants', async () => {
      const validVariants = ['system', 'error', 'warning', 'delete'];
      
      for (const variant of validVariants) {
        const page = await newSpecPage({
          components: [AlertHeader],
          html: `<bds-alert-header variant="${variant}"></bds-alert-header>`,
        });

        expect(page.rootInstance.variant).toBe(variant);
        expect(page.root.shadowRoot.querySelector('.alert__header')).toHaveClass(`alert__header--${variant}`);
      }
    });

    it('should render system variant by default', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      const headerDiv = page.root.shadowRoot.querySelector('.alert__header');
      expect(headerDiv).toHaveClass('alert__header--system');
    });

    it('should update CSS class when variant changes', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      // Change variant
      page.rootInstance.variant = 'error';
      await page.waitForChanges();

      const headerDiv = page.root.shadowRoot.querySelector('.alert__header');
      expect(headerDiv).toHaveClass('alert__header--error');
    });
  });

  describe('Icon Property', () => {
    it('should not render icon when icon prop is null', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      const iconElement = page.root.shadowRoot.querySelector('bds-icon');
      expect(iconElement).toBeFalsy();
    });

    it('should render icon when icon prop is provided', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header icon="info"></bds-alert-header>',
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-header icon="info">
          <mock:shadow-root>
            <div class="alert__header alert__header--system">
              <bds-icon class="color-icon" theme="outline" size="x-large" name="info"></bds-icon>
              <bds-typo variant="fs-16" bold="bold">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
        </bds-alert-header>
      `);
    });

    it('should render icon with correct attributes', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header icon="warning"></bds-alert-header>',
      });

      const iconElement = page.root.shadowRoot.querySelector('bds-icon');
      expect(iconElement).toBeTruthy();
      expect(iconElement.getAttribute('class')).toBe('color-icon');
      expect(iconElement.getAttribute('theme')).toBe('outline');
      expect(iconElement.getAttribute('size')).toBe('x-large');
      expect(iconElement.getAttribute('name')).toBe('warning');
    });

    it('should update icon when icon prop changes', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header icon="info"></bds-alert-header>',
      });

      // Change icon
      page.rootInstance.icon = 'warning';
      await page.waitForChanges();

      const iconElement = page.root.shadowRoot.querySelector('bds-icon');
      expect(iconElement.getAttribute('name')).toBe('warning');
    });

    it('should remove icon when icon prop is set to null', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header icon="info"></bds-alert-header>',
      });

      // Remove icon
      page.rootInstance.icon = null;
      await page.waitForChanges();

      const iconElement = page.root.shadowRoot.querySelector('bds-icon');
      expect(iconElement).toBeFalsy();
    });
  });

  describe('Content Rendering', () => {
    it('should render slotted text content', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: `
          <bds-alert-header>
            Alert Header Title
          </bds-alert-header>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-header>
          <mock:shadow-root>
            <div class="alert__header alert__header--system">
              <bds-typo variant="fs-16" bold="bold">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
          Alert Header Title
        </bds-alert-header>
      `);
    });

    it('should render slotted HTML content', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: `
          <bds-alert-header>
            <span>Important</span> <strong>Alert</strong>
          </bds-alert-header>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-header>
          <mock:shadow-root>
            <div class="alert__header alert__header--system">
              <bds-typo variant="fs-16" bold="bold">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
          <span>Important</span> <strong>Alert</strong>
        </bds-alert-header>
      `);
    });

    it('should render with both icon and content', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: `
          <bds-alert-header variant="error" icon="error">
            Error Title
          </bds-alert-header>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-header variant="error" icon="error">
          <mock:shadow-root>
            <div class="alert__header alert__header--error">
              <bds-icon class="color-icon" theme="outline" size="x-large" name="error"></bds-icon>
              <bds-typo variant="fs-16" bold="bold">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
          Error Title
        </bds-alert-header>
      `);
    });
  });

  describe('Typography Component', () => {
    it('should render bds-typo with correct attributes', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      expect(typoElement).toBeTruthy();
      expect(typoElement.getAttribute('variant')).toBe('fs-16');
      expect(typoElement.getAttribute('bold')).toBe('bold');
    });

    it('should contain slot element within bds-typo', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      const slotElement = typoElement.querySelector('slot');
      expect(slotElement).toBeTruthy();
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct base CSS class', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      const headerDiv = page.root.shadowRoot.querySelector('div');
      expect(headerDiv).toHaveClass('alert__header');
    });

    it('should apply variant-specific CSS classes', async () => {
      const variants = ['system', 'error', 'warning', 'delete'];
      
      for (const variant of variants) {
        const page = await newSpecPage({
          components: [AlertHeader],
          html: `<bds-alert-header variant="${variant}"></bds-alert-header>`,
        });

        const headerDiv = page.root.shadowRoot.querySelector('div');
        expect(headerDiv).toHaveClass('alert__header');
        expect(headerDiv).toHaveClass(`alert__header--${variant}`);
      }
    });
  });

  describe('Component Structure', () => {
    it('should maintain consistent structure regardless of props', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: `
          <bds-alert-header variant="warning" icon="warning">
            Complex Content
          </bds-alert-header>
        `,
      });

      const shadowRoot = page.root.shadowRoot;
      expect(shadowRoot.children).toHaveLength(1);
      expect(shadowRoot.firstElementChild.tagName).toBe('DIV');
      expect(shadowRoot.firstElementChild).toHaveClass('alert__header');
    });

    it('should render method return JSX element', () => {
      const component = new AlertHeader();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('Shadow DOM', () => {
    it('should use shadow DOM for encapsulation', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      expect(page.root.shadowRoot).toBeTruthy();
      expect(page.root.shadowRoot.children).toHaveLength(1);
    });

    it('should have correct shadow DOM structure', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header icon="info"></bds-alert-header>',
      });

      const shadowRoot = page.root.shadowRoot;
      const divElement = shadowRoot.querySelector('div.alert__header');
      const iconElement = divElement.querySelector('bds-icon');
      const typoElement = divElement.querySelector('bds-typo');
      const slotElement = typoElement.querySelector('slot');

      expect(divElement).toBeTruthy();
      expect(iconElement).toBeTruthy();
      expect(typoElement).toBeTruthy();
      expect(slotElement).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty string icon', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header icon=""></bds-alert-header>',
      });

      // Empty string should be falsy, so icon should not render
      const iconElement = page.root.shadowRoot.querySelector('bds-icon');
      expect(iconElement).toBeFalsy();
    });

    it('should handle undefined variant gracefully', async () => {
      const page = await newSpecPage({
        components: [AlertHeader],
        html: '<bds-alert-header></bds-alert-header>',
      });

      // Set variant to undefined
      page.rootInstance.variant = undefined;
      await page.waitForChanges();

      const headerDiv = page.root.shadowRoot.querySelector('div');
      expect(headerDiv).toHaveClass('alert__header');
      expect(headerDiv).toHaveClass('alert__header--undefined');
    });
  });
});
