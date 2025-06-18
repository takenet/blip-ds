import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { NavTreeItem } from '../nav-tree-item';

describe('bds-nav-tree-item', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test Item"></bds-nav-tree-item>`,
    });
  });

  afterEach(() => {
    page = null;
  });

  it('should create component', () => {
    const component = new NavTreeItem();
    expect(component).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.root).toEqualHtml(`
      <bds-nav-tree-item text="Test Item">
        <mock:shadow-root>
          <div tabindex="0" class="focus">
            <div class="nav_tree_item nav_tree_item_button" aria-label="Test Itemnull">
              <div class="nav_tree_item_content">
                <bds-typo class="title-item" variant="fs-14" tag="span" line-height="small" bold="semi-bold">
                  Test Item
                </bds-typo>
              </div>
              <div class="nav_tree_item_slot">
                <slot name="header-content"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </bds-nav-tree-item>
    `);
  });

  it('should render with required text prop', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Sample Text"></bds-nav-tree-item>`,
    });

    const typoElement = page.root.shadowRoot.querySelector('bds-typo.title-item');
    expect(typoElement.textContent).toBe('Sample Text');
  });

  it('should render with icon when icon prop is provided', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" icon="heart"></bds-nav-tree-item>`,
    });

    const iconElement = page.root.shadowRoot.querySelector('bds-icon');
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('name')).toBe('heart');
    expect(iconElement.getAttribute('size')).toBe('medium');
    expect(iconElement.getAttribute('color')).toBe('inherit');
    expect(iconElement.getAttribute('theme')).toBe('outline');
  });

  it('should render secondary text when provided', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Main Text" secondary-text="Secondary Text"></bds-nav-tree-item>`,
    });

    const subtitleElement = page.root.shadowRoot.querySelector('bds-typo.subtitle-item');
    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement.textContent).toBe('Secondary Text');
    expect(subtitleElement.getAttribute('variant')).toBe('fs-12');
    expect(subtitleElement.getAttribute('line-height')).toBe('small');
    expect(subtitleElement.getAttribute('tag')).toBe('span');
  });

  it('should handle loading state correctly', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" loading="true"></bds-nav-tree-item>`,
    });

    const loadingSpinner = page.root.shadowRoot.querySelector('bds-loading-spinner');
    expect(loadingSpinner).toBeTruthy();
    expect(loadingSpinner.getAttribute('size')).toBe('extra-small');

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem).toHaveClass('nav_tree_item--loading');

    const titleItem = page.root.shadowRoot.querySelector('.title-item');
    expect(titleItem).toHaveClass('title-item--loading');
  });

  it('should handle disabled state correctly', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" disable="true"></bds-nav-tree-item>`,
    });

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem).toHaveClass('nav_tree_item--disable');
  });

  it('should render with isOpen state', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" is-open="true"></bds-nav-tree-item>`,
    });

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem).toHaveClass('nav_tree_item_active');
    expect(navTreeItem).toHaveClass('nav_tree_item_button_active');

    const typoElement = page.root.shadowRoot.querySelector('bds-typo.title-item');
    expect(typoElement.getAttribute('bold')).toBe('bold');
  });

  it('should set data-test attribute', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" data-test="nav-item-test"></bds-nav-tree-item>`,
    });

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem.getAttribute('data-test')).toBe('nav-item-test');
  });

  it('should generate correct aria-label with text only', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Main Text"></bds-nav-tree-item>`,
    });

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem.getAttribute('aria-label')).toBe('Main Textnull');
  });

  it('should generate correct aria-label with text and secondary text', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Main Text" secondary-text="Secondary"></bds-nav-tree-item>`,
    });

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem.getAttribute('aria-label')).toBe('Main Text: Secondary');
  });

  it('should render with collapse prop', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" collapse="multiple"></bds-nav-tree-item>`,
    });

    expect(page.root).toBeTruthy();
    // The collapse prop affects behavior but not initial rendering
  });

  it('should handle keyboard navigation with Enter key', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const focusDiv = page.root.shadowRoot.querySelector('.focus');
    expect(focusDiv.getAttribute('tabindex')).toBe('0');

    // Simulate Enter key press
    const keydownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    focusDiv.dispatchEvent(keydownEvent);

    expect(spy).toHaveBeenCalled();
  });

  it('should emit bdsToogleChange event when isOpen changes', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const mockEmit = jest.fn();
    component.bdsToogleChange = { emit: mockEmit };

    component.isOpenChanged(true);

    expect(mockEmit).toHaveBeenCalledWith({
      value: true,
      element: expect.any(Object),
    });
  });

  it('should toggle isOpen state when toggle method is called', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    expect(component.isOpen).toBe(false);

    await component.toggle();
    expect(component.isOpen).toBe(true);

    await component.toggle();
    expect(component.isOpen).toBe(false);
  });

  it('should render slot for header content', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const slotElement = page.root.shadowRoot.querySelector('slot[name="header-content"]');
    expect(slotElement).toBeTruthy();
  });

  it('should not respond to click when loading', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" loading="true"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item') as HTMLElement;
    navTreeItem.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not respond to click when disabled', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" disable="true"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item') as HTMLElement;
    navTreeItem.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should respond to click when not loading and not disabled', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item') as HTMLElement;
    navTreeItem.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should not respond to keyboard when loading', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" loading="true"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const focusDiv = page.root.shadowRoot.querySelector('.focus');
    const keydownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    focusDiv.dispatchEvent(keydownEvent);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not respond to keyboard when disabled', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" disable="true"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const focusDiv = page.root.shadowRoot.querySelector('.focus');
    const keydownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    focusDiv.dispatchEvent(keydownEvent);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should ignore non-Enter key presses', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    const spy = jest.spyOn(component, 'toggle');

    const focusDiv = page.root.shadowRoot.querySelector('.focus');
    const keydownEvent = new KeyboardEvent('keydown', { key: 'Space' });
    focusDiv.dispatchEvent(keydownEvent);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render with complex state combinations', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Complex" secondary-text="Item" icon="home" is-open="true" data-test="complex-test"></bds-nav-tree-item>`,
    });

    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem).toHaveClass('nav_tree_item_active');
    expect(navTreeItem).toHaveClass('nav_tree_item_button_active');
    expect(navTreeItem.getAttribute('data-test')).toBe('complex-test');
    expect(navTreeItem.getAttribute('aria-label')).toBe('Complex: Item');

    const iconElement = page.root.shadowRoot.querySelector('bds-icon');
    expect(iconElement.getAttribute('name')).toBe('home');
    expect(iconElement).toHaveClass('icon-item-active');

    const titleElement = page.root.shadowRoot.querySelector('bds-typo.title-item');
    expect(titleElement.getAttribute('bold')).toBe('bold');
    expect(titleElement.textContent).toBe('Complex');

    const subtitleElement = page.root.shadowRoot.querySelector('bds-typo.subtitle-item');
    expect(subtitleElement.textContent).toBe('Item');
  });

  it('should handle boolean attribute coercion correctly', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test" loading="" disable="" is-open=""></bds-nav-tree-item>`,
    });

    // Empty string attributes should be treated as true in StencilJS
    const navTreeItem = page.root.shadowRoot.querySelector('.nav_tree_item');
    expect(navTreeItem).toHaveClass('nav_tree_item--loading');
    expect(navTreeItem).toHaveClass('nav_tree_item--disable');
    expect(navTreeItem).toHaveClass('nav_tree_item_active');
  });

  it('should handle null and undefined props gracefully', async () => {
    const page = await newSpecPage({
      components: [NavTreeItem],
      html: `<bds-nav-tree-item text="Test"></bds-nav-tree-item>`,
    });

    const component = page.rootInstance;
    
    // Test default values
    expect(component.icon).toBe(null);
    expect(component.secondaryText).toBe(null);
    expect(component.collapse).toBe('single');
    expect(component.isOpen).toBe(false);
    expect(component.loading).toBe(false);
    expect(component.disable).toBe(false);
    expect(component.dataTest).toBe(null);
  });
});
