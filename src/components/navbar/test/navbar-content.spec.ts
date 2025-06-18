import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { NavbarContent } from '../navbar-content';

describe('bds-navbar-content', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [NavbarContent],
      html: `<bds-navbar-content></bds-navbar-content>`,
    });
  });

  afterEach(() => {
    page = null;
  });

  it('should create component', () => {
    const component = new NavbarContent();
    expect(component).toBeTruthy();
  });

  it('should render with default props', async () => {
    expect(page.root).toEqualHtml(`
      <bds-navbar-content class="NavbarContent">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-navbar-content>
    `);
  });

  it('should render slot for content', async () => {
    const slotElement = page.root.shadowRoot.querySelector('slot');
    expect(slotElement).toBeTruthy();
  });

  it('should have NavbarContent class on host', async () => {
    expect(page.root).toHaveClass('NavbarContent');
  });

  it('should render with custom content', async () => {
    const page = await newSpecPage({
      components: [NavbarContent],
      html: `<bds-navbar-content><div>Custom Content</div></bds-navbar-content>`,
    });

    expect(page.root.querySelector('div')).toBeTruthy();
    expect(page.root.querySelector('div').textContent).toBe('Custom Content');
  });

  it('should handle multiple child elements', async () => {
    const page = await newSpecPage({
      components: [NavbarContent],
      html: `
        <bds-navbar-content>
          <div>First Item</div>
          <span>Second Item</span>
          <p>Third Item</p>
        </bds-navbar-content>
      `,
    });

    const children = page.root.children;
    expect(children.length).toBe(3);
    expect(children[0].textContent).toBe('First Item');
    expect(children[1].textContent).toBe('Second Item');
    expect(children[2].textContent).toBe('Third Item');
  });

  it('should render without errors when empty', async () => {
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should maintain shadow DOM structure', async () => {
    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    expect(shadowRoot.children.length).toBe(1);
    expect(shadowRoot.children[0].tagName).toBe('SLOT');
  });

  it('should have hostElement property', async () => {
    const component = page.rootInstance;
    expect(component.hostElement).toBeTruthy();
    expect(component.hostElement).toBe(page.root);
  });

  it('should render method return JSX element', () => {
    const component = new NavbarContent();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  it('should handle nested components', async () => {
    const page = await newSpecPage({
      components: [NavbarContent],
      html: `
        <bds-navbar-content>
          <bds-navbar-content>
            <div>Nested Content</div>
          </bds-navbar-content>
        </bds-navbar-content>
      `,
    });

    const nestedComponent = page.root.querySelector('bds-navbar-content');
    expect(nestedComponent).toBeTruthy();
    expect(nestedComponent.querySelector('div').textContent).toBe('Nested Content');
  });

  it('should handle complex markup as children', async () => {
    const page = await newSpecPage({
      components: [NavbarContent],
      html: `
        <bds-navbar-content>
          <nav>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </ul>
          </nav>
        </bds-navbar-content>
      `,
    });

    const nav = page.root.querySelector('nav');
    expect(nav).toBeTruthy();
    
    const links = page.root.querySelectorAll('a');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toBe('Link 1');
    expect(links[1].textContent).toBe('Link 2');
  });

  it('should handle text content as children', async () => {
    const page = await newSpecPage({
      components: [NavbarContent],
      html: `<bds-navbar-content>Simple text content</bds-navbar-content>`,
    });

    expect(page.root.textContent).toBe('Simple text content');
  });
});
