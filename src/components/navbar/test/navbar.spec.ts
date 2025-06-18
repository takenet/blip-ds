import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Navbar } from '../navbar';

describe('bds-navbar', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar></bds-navbar>`,
    });
  });

  afterEach(() => {
    page = null;
  });

  it('should create component', () => {
    const component = new Navbar();
    expect(component).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.root).toEqualHtml(`
      <bds-navbar class="vertical">
        <mock:shadow-root>
          <div class="navbar navbar__justify-content__space-between navbar__orientation__vertical navbar__background-color__surface-1">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </bds-navbar>
    `);
  });

  it('should render with default orientation (vertical)', async () => {
    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__orientation__vertical');
    expect(page.root).toHaveClass('vertical');
  });

  it('should render with horizontal orientation', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar orientation="horizontal"></bds-navbar>`,
    });

    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__orientation__horizontal');
    expect(page.root).toHaveClass('horizontal');
  });

  it('should render with custom background color', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar background-color="surface-2"></bds-navbar>`,
    });

    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__background-color__surface-2');
  });

  it('should render with surface-3 background color', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar background-color="surface-3"></bds-navbar>`,
    });

    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__background-color__surface-3');
  });

  it('should render with different justify-content values', async () => {
    const justifyContentValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];

    for (const justifyContent of justifyContentValues) {
      const page = await newSpecPage({
        components: [Navbar],
        html: `<bds-navbar justify-content="${justifyContent}"></bds-navbar>`,
      });

      const navbar = page.root.shadowRoot.querySelector('.navbar');
      expect(navbar).toHaveClass(`navbar__justify-content__${justifyContent}`);
    }
  });

  it('should render with default justify-content (space-between)', async () => {
    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__justify-content__space-between');
  });

  it('should set data-test attribute when provided', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar data-test="navbar-test"></bds-navbar>`,
    });

    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar.getAttribute('data-test')).toBe('navbar-test');
  });

  it('should not set data-test attribute when not provided', async () => {
    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar.getAttribute('data-test')).toBeNull();
  });

  it('should render slot for content', async () => {
    const slotElement = page.root.shadowRoot.querySelector('slot');
    expect(slotElement).toBeTruthy();
  });

  it('should have all required CSS classes', async () => {
    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar');
    expect(navbar).toHaveClass('navbar__justify-content__space-between');
    expect(navbar).toHaveClass('navbar__orientation__vertical');
    expect(navbar).toHaveClass('navbar__background-color__surface-1');
  });

  it('should handle complex prop combinations', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar orientation="horizontal" background-color="surface-3" justify-content="center" data-test="complex-navbar"></bds-navbar>`,
    });

    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar');
    expect(navbar).toHaveClass('navbar__orientation__horizontal');
    expect(navbar).toHaveClass('navbar__background-color__surface-3');
    expect(navbar).toHaveClass('navbar__justify-content__center');
    expect(navbar.getAttribute('data-test')).toBe('complex-navbar');

    // Check Host class
    expect(page.root).toHaveClass('horizontal');
  });

  it('should handle null and undefined props gracefully', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar></bds-navbar>`,
    });

    const component = page.rootInstance;
    
    // Test default values
    expect(component.orientation).toBe('vertical');
    expect(component.backgroundColor).toBe('surface-1');
    expect(component.justifyContent).toBe('space-between');
    expect(component.dataTest).toBe(null);
  });

  it('should handle boolean attribute coercion for props', async () => {
    // Test that string values are properly handled
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar orientation="vertical" background-color="surface-1" justify-content="flex-start"></bds-navbar>`,
    });

    const component = page.rootInstance;
    expect(component.orientation).toBe('vertical');
    expect(component.backgroundColor).toBe('surface-1');
    expect(component.justifyContent).toBe('flex-start');
  });

  it('should properly update classes when props change', async () => {
    const component = page.rootInstance;
    
    // Change orientation
    component.orientation = 'horizontal';
    await page.waitForChanges();
    
    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__orientation__horizontal');
    expect(page.root).toHaveClass('horizontal');
  });

  it('should handle edge case prop values', async () => {
    const page = await newSpecPage({
      components: [Navbar],
      html: `<bds-navbar orientation="horizontal" background-color="surface-2" justify-content="space-evenly" data-test="edge-case"></bds-navbar>`,
    });

    const navbar = page.root.shadowRoot.querySelector('.navbar');
    expect(navbar).toHaveClass('navbar__orientation__horizontal');
    expect(navbar).toHaveClass('navbar__background-color__surface-2');
    expect(navbar).toHaveClass('navbar__justify-content__space-evenly');
    expect(navbar.getAttribute('data-test')).toBe('edge-case');
  });
});
