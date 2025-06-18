import { newSpecPage } from '@stencil/core/testing';
import { CardBody } from '../card-body';
import { Grid } from '../../../grid/grid';

describe('bds-card-body', () => {
  it('should render with default structure', async () => {
    const page = await newSpecPage({
      components: [CardBody, Grid],
      html: `<bds-card-body></bds-card-body>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-CARD-BODY');

    // Should contain a bds-grid element
    const gridElement = page.root.shadowRoot.querySelector('bds-grid');
    expect(gridElement).toBeTruthy();

    // Should contain a slot for content
    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should render slot content correctly', async () => {
    const page = await newSpecPage({
      components: [CardBody, Grid],
      html: `
        <bds-card-body>
          <p>Test content</p>
          <div>More content</div>
        </bds-card-body>
      `,
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
    
    // Verify that slot is inside the grid
    const gridElement = page.root.shadowRoot.querySelector('bds-grid');
    expect(gridElement.contains(slot)).toBe(true);
  });

  it('should have proper component structure', async () => {
    const page = await newSpecPage({
      components: [CardBody, Grid],
      html: `<bds-card-body></bds-card-body>`,
    });

    // Should have shadow DOM
    expect(page.root.shadowRoot).toBeTruthy();

    // Should have the correct structure: grid > slot
    const gridElement = page.root.shadowRoot.querySelector('bds-grid');
    const slot = gridElement.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should render with different slot content', async () => {
    const testCases = [
      '<span>Text content</span>',
      '<div><h2>Title</h2><p>Paragraph</p></div>',
      '<button>Button</button>',
      'Plain text',
    ];

    for (const content of testCases) {
      const page = await newSpecPage({
        components: [CardBody, Grid],
        html: `<bds-card-body>${content}</bds-card-body>`,
      });

      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
      
      const gridElement = page.root.shadowRoot.querySelector('bds-grid');
      expect(gridElement).toBeTruthy();
    }
  });

  it('should render without content', async () => {
    const page = await newSpecPage({
      components: [CardBody, Grid],
      html: `<bds-card-body></bds-card-body>`,
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
    
    const gridElement = page.root.shadowRoot.querySelector('bds-grid');
    expect(gridElement).toBeTruthy();
  });

  it('should maintain proper DOM hierarchy', async () => {
    const page = await newSpecPage({
      components: [CardBody, Grid],
      html: `<bds-card-body><div>Test</div></bds-card-body>`,
    });

    // Root element should be bds-card-body
    expect(page.root.tagName).toBe('BDS-CARD-BODY');

    // Shadow root should contain only bds-grid
    const shadowChildren = Array.from(page.root.shadowRoot.children);
    expect(shadowChildren.length).toBe(1);
    expect(shadowChildren[0].tagName).toBe('BDS-GRID');

    // Grid should contain only slot
    const gridChildren = Array.from(shadowChildren[0].children);
    expect(gridChildren.length).toBe(1);
    expect(gridChildren[0].tagName).toBe('SLOT');
  });

  describe('component interface compliance', () => {
    it('should implement ComponentInterface', () => {
      const component = new CardBody();
      expect(typeof component.render).toBe('function');
    });

    it('should render method return JSX element', () => {
      const component = new CardBody();
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('accessibility', () => {
    it('should be accessible with screen readers', async () => {
      const page = await newSpecPage({
        components: [CardBody, Grid],
        html: `
          <bds-card-body>
            <h2>Card Title</h2>
            <p>Card content goes here</p>
          </bds-card-body>
        `,
      });

      // Component should not interfere with accessibility
      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
      
      // Content should be slotted properly for screen readers
      expect(page.root.textContent).toContain('Card Title');
      expect(page.root.textContent).toContain('Card content goes here');
    });
  });
});
