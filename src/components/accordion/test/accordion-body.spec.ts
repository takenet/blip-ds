import { newSpecPage } from '@stencil/core/testing';
import { AccordionBody } from '../accordion-body';

describe('bds-accordion-body', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [AccordionBody],
      html: `<bds-accordion-body></bds-accordion-body>`,
    });
    component = page.rootInstance;
  });

  it('should create and render component', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toEqualHtml(`
      <bds-accordion-body>
        <mock:shadow-root>
          <div class="accordion_body accordion_body_divisor" style="height: undefinedpx;">
            <div class="container">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </bds-accordion-body>
    `);
  });

  it('should have default property values', () => {
    expect(component.isOpen).toBe(false);
    expect(component.isOpenAftAnimation).toBe(false);
    expect(component.heightContainer).toBeUndefined();
    expect(component.numberElement).toBe(null);
    expect(component.hasDivisor).toBe(true);
    expect(component.dataTest).toBe(null);
  });

  it('should render with dataTest property', async () => {
    page = await newSpecPage({
      components: [AccordionBody],
      html: `<bds-accordion-body data-test="accordion-body-test"></bds-accordion-body>`,
    });
    component = page.rootInstance;
    
    expect(component.dataTest).toBe('accordion-body-test');
    const bodyDiv = page.root.shadowRoot.querySelector('[data-test="accordion-body-test"]');
    expect(bodyDiv).toBeTruthy();
  });

  it('should toggle state', async () => {
    expect(component.isOpen).toBe(false);
    
    await component.toggle();
    expect(component.isOpen).toBe(true);
    
    await component.toggle();
    expect(component.isOpen).toBe(false);
  });

  it('should open accordion body', async () => {
    expect(component.isOpen).toBe(false);
    
    await component.open();
    expect(component.isOpen).toBe(true);
  });

  it('should close accordion body', async () => {
    // First open it
    await component.open();
    expect(component.isOpen).toBe(true);
    
    // Then close it
    await component.close();
    expect(component.isOpen).toBe(false);
  });

  it('should set divisor property', async () => {
    expect(component.hasDivisor).toBe(true);
    
    await component.divisor(false);
    expect(component.hasDivisor).toBe(false);
    
    await component.divisor(true);
    expect(component.hasDivisor).toBe(true);
  });

  it('should apply correct CSS classes when divisor is false', async () => {
    await component.divisor(false);
    await page.waitForChanges();

    const bodyDiv = page.root.shadowRoot.querySelector('.accordion_body');
    expect(bodyDiv.classList.contains('accordion_body_divisor')).toBe(false);
  });

  it('should have proper structure with container ref', () => {
    const containerDiv = page.root.shadowRoot.querySelector('.container');
    expect(containerDiv).toBeTruthy();
    expect(containerDiv.tagName).toBe('DIV');
  });

  it('should handle ref container assignment', () => {
    const mockElement = document.createElement('div');
    
    component.refContainer(mockElement);
    
    expect(component.container).toBe(mockElement);
  });

  it('should render slot content correctly', async () => {
    page = await newSpecPage({
      components: [AccordionBody],
      html: `
        <bds-accordion-body>
          <div class="test-content">Test Content</div>
        </bds-accordion-body>
      `,
    });

    expect(page.root).toEqualHtml(`
      <bds-accordion-body>
        <mock:shadow-root>
          <div class="accordion_body accordion_body_divisor" style="height: undefinedpx;">
            <div class="container">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
        <div class="test-content">Test Content</div>
      </bds-accordion-body>
    `);
  });

  it('should apply correct CSS classes for default state', () => {
    const bodyDiv = page.root.shadowRoot.querySelector('.accordion_body');
    expect(bodyDiv.classList.contains('accordion_body')).toBe(true);
    expect(bodyDiv.classList.contains('accordion_body_divisor')).toBe(true);
    expect(bodyDiv.classList.contains('accordion_body_isOpen')).toBe(false);
  });

  it('should handle methods correctly', async () => {
    // Test toggle method
    expect(component.isOpen).toBe(false);
    await component.toggle();
    expect(component.isOpen).toBe(true);
    
    // Test close method
    await component.close();
    expect(component.isOpen).toBe(false);
    
    // Test open method
    await component.open();
    expect(component.isOpen).toBe(true);
    
    // Test divisor method
    await component.divisor(false);
    expect(component.hasDivisor).toBe(false);
  });

  it('should render with initial state properly', () => {
    expect(page.root.shadowRoot.querySelector('.accordion_body')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.container')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should handle isOpenChanged method logic', () => {
    // Mock container with offsetHeight
    const mockContainer = { offsetHeight: 150 };
    component.container = mockContainer;
    
    // Test when closed
    component.isOpen = false;
    component.isOpenChanged();
    expect(component.heightContainer).toBe(0);
    
    // Test when open
    component.isOpen = true;
    component.isOpenChanged();
    expect(component.heightContainer).toBe(150);
  });

  it('should handle undefined container gracefully', () => {
    component.container = null;
    
    // Should not throw error when container is null
    expect(() => {
      component.isOpenChanged();
    }).not.toThrow();
  });
});
