import { newSpecPage } from '@stencil/core/testing';
import { AlertBody } from '../alert-body';

describe('bds-alert-body', () => {
  describe('Component Creation', () => {
    it('should create component', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });
      expect(page.rootInstance).toBeInstanceOf(AlertBody);
    });

    it('should render with default structure', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-body>
          <mock:shadow-root>
            <div class="alert__body">
              <bds-typo variant="fs-14" bold="regular" slot="body">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
        </bds-alert-body>
      `);
    });
  });

  describe('Content Rendering', () => {
    it('should render slotted text content', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: `
          <bds-alert-body>
            This is an alert message
          </bds-alert-body>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-body>
          <mock:shadow-root>
            <div class="alert__body">
              <bds-typo variant="fs-14" bold="regular" slot="body">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
          This is an alert message
        </bds-alert-body>
      `);
    });

    it('should render slotted HTML content', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: `
          <bds-alert-body>
            <p>Alert with <strong>strong text</strong></p>
            <span>Additional information</span>
          </bds-alert-body>
        `,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-body>
          <mock:shadow-root>
            <div class="alert__body">
              <bds-typo variant="fs-14" bold="regular" slot="body">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
          <p>Alert with <strong>strong text</strong></p>
          <span>Additional information</span>
        </bds-alert-body>
      `);
    });

    it('should render with empty content', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-body>
          <mock:shadow-root>
            <div class="alert__body">
              <bds-typo variant="fs-14" bold="regular" slot="body">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
        </bds-alert-body>
      `);
    });

    it('should handle long text content', async () => {
      const longText = 'This is a very long alert message that spans multiple lines and contains detailed information about the alert condition and recommended actions for the user to take.';
      
      const page = await newSpecPage({
        components: [AlertBody],
        html: `<bds-alert-body>${longText}</bds-alert-body>`,
      });

      expect(page.root).toEqualHtml(`
        <bds-alert-body>
          <mock:shadow-root>
            <div class="alert__body">
              <bds-typo variant="fs-14" bold="regular" slot="body">
                <slot></slot>
              </bds-typo>
            </div>
          </mock:shadow-root>
          ${longText}
        </bds-alert-body>
      `);
    });
  });

  describe('Typography Component', () => {
    it('should render bds-typo with correct attributes', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      expect(typoElement).toBeTruthy();
      expect(typoElement.getAttribute('variant')).toBe('fs-14');
      expect(typoElement.getAttribute('bold')).toBe('regular');
      expect(typoElement.getAttribute('slot')).toBe('body');
    });

    it('should contain slot element within bds-typo', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      const slotElement = typoElement.querySelector('slot');
      expect(slotElement).toBeTruthy();
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct CSS class to container', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      const containerDiv = page.root.shadowRoot.querySelector('div');
      expect(containerDiv).toHaveClass('alert__body');
    });
  });

  describe('Component Structure', () => {
    it('should maintain consistent structure regardless of content', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: `
          <bds-alert-body>
            <div>Complex nested content</div>
          </bds-alert-body>
        `,
      });

      const shadowRoot = page.root.shadowRoot;
      expect(shadowRoot.children).toHaveLength(1);
      expect(shadowRoot.firstElementChild.tagName).toBe('DIV');
      expect(shadowRoot.firstElementChild).toHaveClass('alert__body');
      
      const typoElement = shadowRoot.querySelector('bds-typo');
      expect(typoElement).toBeTruthy();
      expect(typoElement.children).toHaveLength(1);
      expect(typoElement.firstElementChild.tagName).toBe('SLOT');
    });

    it('should render method return JSX element', () => {
      const component = new AlertBody();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('Shadow DOM', () => {
    it('should use shadow DOM for encapsulation', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      expect(page.root.shadowRoot).toBeTruthy();
      expect(page.root.shadowRoot.children).toHaveLength(1);
    });

    it('should have correct shadow DOM hierarchy', async () => {
      const page = await newSpecPage({
        components: [AlertBody],
        html: '<bds-alert-body></bds-alert-body>',
      });

      const shadowRoot = page.root.shadowRoot;
      const divElement = shadowRoot.querySelector('div.alert__body');
      const typoElement = divElement.querySelector('bds-typo');
      const slotElement = typoElement.querySelector('slot');

      expect(divElement).toBeTruthy();
      expect(typoElement).toBeTruthy();
      expect(slotElement).toBeTruthy();
    });
  });
});