import { newSpecPage } from '@stencil/core/testing';
import { AccordionHeader } from '../accordion-header';

describe('bds-accordion-header', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `<bds-accordion-header></bds-accordion-header>`,
    });
    component = page.rootInstance;
  });

  it('should create and render component', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toEqualHtml(`
      <bds-accordion-header>
        <mock:shadow-root>
          <div class="accordion_header">
            <slot></slot>
            <bds-icon class="accButton" color="inherit" name="arrow-down" size="x-large" tabindex="0"></bds-icon>
          </div>
        </mock:shadow-root>
      </bds-accordion-header>
    `);
  });

  it('should have default property values', () => {
    expect(component.isOpen).toBe(false);
    expect(component.btToggleIsfocus).toBe(false);
    expect(component.numberElement).toBe(null);
    expect(component.accordionTitle).toBe(null);
    expect(component.icon).toBe(null);
    expect(component.avatarName).toBe(null);
    expect(component.avatarThumb).toBe(null);
    expect(component.dataTest).toBe(null);
  });

  it('should render with accordionTitle property', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `<bds-accordion-header accordion-title="Test Title"></bds-accordion-header>`,
    });
    component = page.rootInstance;
    
    expect(component.accordionTitle).toBe('Test Title');
    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    expect(typoElement).toBeTruthy();
    expect(typoElement.textContent).toBe('Test Title');
  });

  it('should render with icon property', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `<bds-accordion-header icon="user"></bds-accordion-header>`,
    });
    component = page.rootInstance;
    
    expect(component.icon).toBe('user');
    const iconElement = page.root.shadowRoot.querySelector('bds-icon[name="user"]');
    expect(iconElement).toBeTruthy();
  });

  it('should render with avatar properties', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `<bds-accordion-header avatar-name="John Doe" avatar-thumb="avatar.jpg"></bds-accordion-header>`,
    });
    component = page.rootInstance;
    
    expect(component.avatarName).toBe('John Doe');
    expect(component.avatarThumb).toBe('avatar.jpg');
    const avatarElement = page.root.shadowRoot.querySelector('bds-avatar');
    expect(avatarElement).toBeTruthy();
    expect(avatarElement.getAttribute('name')).toBe('John Doe');
    expect(avatarElement.getAttribute('thumbnail')).toBe('avatar.jpg');
  });

  it('should render with dataTest property', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `<bds-accordion-header data-test="accordion-header-test"></bds-accordion-header>`,
    });
    component = page.rootInstance;
    
    expect(component.dataTest).toBe('accordion-header-test');
    const headerDiv = page.root.shadowRoot.querySelector('[data-test="accordion-header-test"]');
    expect(headerDiv).toBeTruthy();
  });

  it('should toggle state', async () => {
    expect(component.isOpen).toBe(false);
    
    await component.toggle();
    expect(component.isOpen).toBe(true);
    
    await component.toggle();
    expect(component.isOpen).toBe(false);
  });

  it('should open accordion header', async () => {
    expect(component.isOpen).toBe(false);
    
    await component.open();
    expect(component.isOpen).toBe(true);
  });

  it('should close accordion header', async () => {
    // First open it
    await component.open();
    expect(component.isOpen).toBe(true);
    
    // Then close it
    await component.close();
    expect(component.isOpen).toBe(false);
  });

  it('should apply correct CSS classes when isOpen is true', async () => {
    await component.open();
    await page.waitForChanges();

    const toggleButton = page.root.shadowRoot.querySelector('.accButton');
    expect(toggleButton.classList.contains('accButton__isopen')).toBe(true);
  });

  it('should apply correct CSS classes when btToggleIsfocus is true', async () => {
    component.btToggleIsfocus = true;
    await page.waitForChanges();

    const toggleButton = page.root.shadowRoot.querySelector('.accButton');
    expect(toggleButton.classList.contains('accButton__isfocus')).toBe(true);
  });

  it('should handle toggleHeader method', () => {
    // Mock parent accordion element
    const mockAccordion = {
      open: jest.fn(),
      close: jest.fn()
    };
    component.accordionElement = mockAccordion;

    // Test when closed (should open)
    component.isOpen = false;
    component.toggleHeader();
    expect(mockAccordion.open).toHaveBeenCalled();

    // Test when open (should close)
    component.isOpen = true;
    component.toggleHeader();
    expect(mockAccordion.close).toHaveBeenCalled();
  });

  it('should handle click events on header', async () => {
    const mockAccordion = {
      open: jest.fn(),
      close: jest.fn()
    };
    component.accordionElement = mockAccordion;
    component.isOpen = false;

    const headerDiv = page.root.shadowRoot.querySelector('.accordion_header');
    headerDiv.click();

    expect(mockAccordion.open).toHaveBeenCalled();
  });

  it('should handle keyboard events (Enter key)', () => {
    const mockAccordion = {
      open: jest.fn(),
      close: jest.fn()
    };
    component.accordionElement = mockAccordion;

    // Test Enter key when closed
    component.isOpen = false;
    const enterEvent = { key: 'Enter' };
    component.handleKeyDown(enterEvent);
    expect(mockAccordion.open).toHaveBeenCalled();

    // Test Enter key when open
    component.isOpen = true;
    component.handleKeyDown(enterEvent);
    expect(mockAccordion.close).toHaveBeenCalled();
  });

  it('should ignore non-Enter keyboard events', () => {
    const mockAccordion = {
      open: jest.fn(),
      close: jest.fn()
    };
    component.accordionElement = mockAccordion;

    const spaceEvent = { key: ' ' };
    component.handleKeyDown(spaceEvent);
    expect(mockAccordion.open).not.toHaveBeenCalled();
    expect(mockAccordion.close).not.toHaveBeenCalled();

    const escapeEvent = { key: 'Escape' };
    component.handleKeyDown(escapeEvent);
    expect(mockAccordion.open).not.toHaveBeenCalled();
    expect(mockAccordion.close).not.toHaveBeenCalled();
  });

  it('should prioritize avatar over icon when both are provided', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `<bds-accordion-header icon="user" avatar-name="John Doe"></bds-accordion-header>`,
    });
    
    const avatarElement = page.root.shadowRoot.querySelector('bds-avatar');
    const iconElement = page.root.shadowRoot.querySelector('bds-icon[name="user"]');
    
    expect(avatarElement).toBeTruthy();
    expect(iconElement).toBeFalsy(); // Should not render icon when avatar is present
  });

  it('should render slot content correctly', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `
        <bds-accordion-header>
          <div class="test-content">Test Content</div>
        </bds-accordion-header>
      `,
    });

    expect(page.root).toEqualHtml(`
      <bds-accordion-header>
        <mock:shadow-root>
          <div class="accordion_header">
            <slot></slot>
            <bds-icon class="accButton" color="inherit" name="arrow-down" size="x-large" tabindex="0"></bds-icon>
          </div>
        </mock:shadow-root>
        <div class="test-content">Test Content</div>
      </bds-accordion-header>
    `);
  });

  it('should handle componentWillRender lifecycle', () => {
    // Mock parent element
    const mockParent = document.createElement('bds-accordion');
    Object.defineProperty(component.element, 'parentElement', {
      value: mockParent,
      writable: true
    });

    component.componentWillRender();
    
    expect(component.accordionElement).toBe(mockParent);
  });

  it('should handle null accordionElement gracefully', () => {
    component.accordionElement = null;
    
    expect(() => {
      component.toggleHeader();
    }).not.toThrow();
    
    expect(() => {
      component.handleKeyDown({ key: 'Enter' });
    }).not.toThrow();
  });

  it('should render complete header with all elements', async () => {
    page = await newSpecPage({
      components: [AccordionHeader],
      html: `
        <bds-accordion-header 
          accordion-title="Test Title" 
          icon="user"
          data-test="complete-header">
          <span>Extra content</span>
        </bds-accordion-header>
      `,
    });

    const headerDiv = page.root.shadowRoot.querySelector('.accordion_header');
    const iconElement = page.root.shadowRoot.querySelector('bds-icon[name="user"]');
    const typoElement = page.root.shadowRoot.querySelector('bds-typo');
    const toggleButton = page.root.shadowRoot.querySelector('.accButton');
    
    expect(headerDiv).toBeTruthy();
    expect(iconElement).toBeTruthy();
    expect(typoElement).toBeTruthy();
    expect(toggleButton).toBeTruthy();
    expect(headerDiv.getAttribute('data-test')).toBe('complete-header');
  });
});
