import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Paper } from '../paper';

describe('bds-paper', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper></bds-paper>`,
    });
  });

  afterEach(() => {
    page = null;
  });

  it('should create component', () => {
    const component = new Paper();
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    const component = new Paper();
    expect(component.elevation).toBe('static');
    expect(component.dataTest).toBe(null);
    expect(component.border).toBe(false);
    expect(component.height).toBe(null);
    expect(component.width).toBe(null);
    expect(component.bgColor).toBe('surface-1');
    expect(component.borderColor).toBe(null);
  });

  it('should have default state values', () => {
    const component = new Paper();
    expect(component.hasBorder).toBe(true);
    expect(component.constElevation).toBe(undefined);
  });

  it('should render with default props', async () => {
    expect(page.root).toEqualHtml(`
      <bds-paper class="bg-surface-1 border-null paper__elevation--static" elevation="static" style="height: null; width: null;">
        <mock:shadow-root>
          <div class="paper__display">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bds-paper>
    `);
  });

  it('should render with elevation prop', async () => {
    const elevations = ['static', 'primary', 'secondary', 'none'];

    for (const elevation of elevations) {
      const page = await newSpecPage({
        components: [Paper],
        html: `<bds-paper elevation="${elevation}"></bds-paper>`,
      });

      expect(page.root).toHaveClass(`paper__elevation--${elevation}`);
    }
  });

  it('should render with background color prop', async () => {
    const bgColors = ['surface-0', 'surface-1', 'surface-2', 'surface-3', 'surface-4'];

    for (const bgColor of bgColors) {
      const page = await newSpecPage({
        components: [Paper],
        html: `<bds-paper bg-color="${bgColor}"></bds-paper>`,
      });

      expect(page.root).toHaveClass(`bg-${bgColor}`);
    }
  });

  it('should render with border color prop', async () => {
    const borderColors = ['border-1', 'border-2', 'primary', 'secondary', 'positive', 'negative', 'warning', 'error', 'delete', 'success'];

    for (const borderColor of borderColors) {
      const page = await newSpecPage({
        components: [Paper],
        html: `<bds-paper border-color="${borderColor}"></bds-paper>`,
      });

      expect(page.root).toHaveClass(`border-${borderColor}`);
    }
  });

  it('should render with border enabled', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper border="true"></bds-paper>`,
    });

    expect(page.root).toHaveClass('border');
    expect(page.root).not.toHaveClass('paper__elevation--static');
  });

  it('should render with custom dimensions', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper height="100px" width="200px"></bds-paper>`,
    });

    const hostStyle = page.root.style;
    expect(hostStyle.height).toBe('100px');
    expect(hostStyle.width).toBe('200px');
  });

  it('should set data-test attribute', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper data-test="paper-test"></bds-paper>`,
    });

    const paperDisplay = page.root.shadowRoot.querySelector('.paper__display');
    expect(paperDisplay.getAttribute('data-test')).toBe('paper-test');
  });

  it('should render slot for content', async () => {
    const slotElement = page.root.shadowRoot.querySelector('slot');
    expect(slotElement).toBeTruthy();
  });

  it('should render with custom content', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper><div>Custom Content</div></bds-paper>`,
    });

    expect(page.root.querySelector('div')).toBeTruthy();
    expect(page.root.querySelector('div').textContent).toBe('Custom Content');
  });

  it('should handle componentWillLoad lifecycle', async () => {
    const component = page.rootInstance;
    
    // Default behavior: border is false, so hasBorder should be true
    expect(component.border).toBe(false);
    expect(component.hasBorder).toBe(true);

    // When border is true, hasBorder should be false
    component.border = true;
    component.componentWillLoad();
    expect(component.hasBorder).toBe(false);
  });

  it('should handle complex prop combinations', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper elevation="primary" bg-color="surface-3" border-color="secondary" border="true" height="150px" width="300px" data-test="complex-paper"></bds-paper>`,
    });

    expect(page.root).toHaveClass('border');
    expect(page.root).toHaveClass('bg-surface-3');
    expect(page.root).toHaveClass('border-secondary');
    expect(page.root).not.toHaveClass('paper__elevation--primary'); // Should be false when border is true

    const hostStyle = page.root.style;
    expect(hostStyle.height).toBe('150px');
    expect(hostStyle.width).toBe('300px');

    const paperDisplay = page.root.shadowRoot.querySelector('.paper__display');
    expect(paperDisplay.getAttribute('data-test')).toBe('complex-paper');
  });

  it('should handle null values gracefully', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper height="" width="" border-color="" data-test=""></bds-paper>`,
    });

    const component = page.rootInstance;
    expect(component.height).toBe('');
    expect(component.width).toBe('');
    expect(component.borderColor).toBe('');
    expect(component.dataTest).toBe('');
  });

  it('should accept all valid elevation values', () => {
    const component = new Paper();
    const validElevations = ['static', 'primary', 'secondary', 'none'];
    
    validElevations.forEach(elevation => {
      component.elevation = elevation as any;
      expect(component.elevation).toBe(elevation);
    });
  });

  it('should accept all valid background color values', () => {
    const component = new Paper();
    const validBgColors = ['surface-0', 'surface-1', 'surface-2', 'surface-3', 'surface-4'];
    
    validBgColors.forEach(bgColor => {
      component.bgColor = bgColor as any;
      expect(component.bgColor).toBe(bgColor);
    });
  });

  it('should accept all valid border color values', () => {
    const component = new Paper();
    const validBorderColors = ['border-1', 'border-2', 'primary', 'secondary', 'positive', 'negative', 'warning', 'error', 'delete', 'success'];
    
    validBorderColors.forEach(borderColor => {
      component.borderColor = borderColor as any;
      expect(component.borderColor).toBe(borderColor);
    });
  });

  it('should handle boolean border prop correctly', () => {
    const component = new Paper();
    
    component.border = true;
    expect(component.border).toBe(true);
    
    component.border = false;
    expect(component.border).toBe(false);
  });

  it('should handle string dimension props correctly', () => {
    const component = new Paper();
    
    component.height = '100px';
    expect(component.height).toBe('100px');
    
    component.width = '200px';
    expect(component.width).toBe('200px');
    
    component.height = null;
    component.width = null;
    expect(component.height).toBe(null);
    expect(component.width).toBe(null);
  });

  it('should handle dataTest prop correctly', () => {
    const component = new Paper();
    
    component.dataTest = 'test-id';
    expect(component.dataTest).toBe('test-id');
    
    component.dataTest = null;
    expect(component.dataTest).toBe(null);
  });

  it('should update classes when props change', async () => {
    const component = page.rootInstance;
    
    // Change elevation
    component.elevation = 'primary';
    await page.waitForChanges();
    
    expect(page.root).toHaveClass('paper__elevation--primary');
    
    // Change background color
    component.bgColor = 'surface-2';
    await page.waitForChanges();
    
    expect(page.root).toHaveClass('bg-surface-2');
  });

  it('should render JSX element from render method', () => {
    const component = new Paper();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should handle edge cases with dimensions', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `<bds-paper height="0" width="0"></bds-paper>`,
    });

    const hostStyle = page.root.style;
    expect(hostStyle.height).toBe('0');
    expect(hostStyle.width).toBe('0');
  });

  it('should maintain paper__display structure', async () => {
    const paperDisplay = page.root.shadowRoot.querySelector('.paper__display');
    expect(paperDisplay).toBeTruthy();
    expect(paperDisplay.querySelector('slot')).toBeTruthy();
  });

  it('should handle nested content', async () => {
    const page = await newSpecPage({
      components: [Paper],
      html: `
        <bds-paper>
          <div class="content">
            <h1>Title</h1>
            <p>Some text content</p>
          </div>
        </bds-paper>
      `,
    });

    const contentDiv = page.root.querySelector('.content');
    expect(contentDiv).toBeTruthy();
    expect(page.root.querySelector('h1').textContent).toBe('Title');
    expect(page.root.querySelector('p').textContent).toBe('Some text content');
  });
});