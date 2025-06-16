import { newSpecPage } from '@stencil/core/testing';
import { BdsAlert } from '../alert';

describe('bds-alert', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert></bds-alert>`,
    });
    component = page.rootInstance;
  });

  afterEach(() => {
    // Clean up event listeners
    document.removeEventListener('keydown', component.listener, false);
  });

  it('should create and render component', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toEqualHtml(`
      <bds-alert>
        <mock:shadow-root>
          <div class="alert__dialog alert__dialog--fixed">
            <div class="alert">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </bds-alert>
    `);
  });

  it('should have default property values', () => {
    expect(component.open).toBe(false);
    expect(component.dataTest).toBe(null);
    expect(component.position).toBe('fixed');
  });

  it('should render with open property', async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert open="true"></bds-alert>`,
    });
    component = page.rootInstance;
    
    expect(component.open).toBe(true);
    const dialogDiv = page.root.shadowRoot.querySelector('.alert__dialog');
    expect(dialogDiv.classList.contains('alert__dialog--open')).toBe(true);
  });

  it('should render with position property', async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert position="contain"></bds-alert>`,
    });
    component = page.rootInstance;
    
    expect(component.position).toBe('contain');
    const dialogDiv = page.root.shadowRoot.querySelector('.alert__dialog');
    expect(dialogDiv.classList.contains('alert__dialog--contain')).toBe(true);
  });

  it('should render with dataTest property', async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert data-test="alert-test"></bds-alert>`,
    });
    component = page.rootInstance;
    
    expect(component.dataTest).toBe('alert-test');
    const alertDiv = page.root.shadowRoot.querySelector('[data-test="alert-test"]');
    expect(alertDiv).toBeTruthy();
  });

  it('should toggle open state', async () => {
    expect(component.open).toBe(false);
    
    await component.toggle();
    expect(component.open).toBe(true);
    
    await component.toggle();
    expect(component.open).toBe(false);
  });

  it('should emit bdsAlertChanged event when toggling open', async () => {
    const alertChangedSpy = jest.fn();
    
    page.root.addEventListener('bdsAlertChanged', alertChangedSpy);
    
    // Toggle to open
    await component.toggle();
    expect(alertChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { alertStatus: 'opened' }
      })
    );
    
    // Toggle to close
    await component.toggle();
    expect(alertChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { alertStatus: 'closed' }
      })
    );
    
    expect(alertChangedSpy).toHaveBeenCalledTimes(2);
  });

  it('should apply correct CSS classes when open', async () => {
    await component.toggle();
    await page.waitForChanges();

    const dialogDiv = page.root.shadowRoot.querySelector('.alert__dialog');
    expect(dialogDiv.classList.contains('alert__dialog')).toBe(true);
    expect(dialogDiv.classList.contains('alert__dialog--open')).toBe(true);
    expect(dialogDiv.classList.contains('alert__dialog--fixed')).toBe(true);
  });

  it('should handle isOpenChanged watcher - add event listener when open', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    
    component.open = true;
    component.isOpenChanged();
    
    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', component.listener, false);
    
    addEventListenerSpy.mockRestore();
  });

  it('should handle isOpenChanged watcher - remove event listener when closed', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    
    component.open = false;
    component.isOpenChanged();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', component.listener, false);
    
    removeEventListenerSpy.mockRestore();
  });

  it('should handle keyboard events (Enter key)', async () => {
    const toggleSpy = jest.spyOn(component, 'toggle');
    
    component.open = true;
    component.isOpenChanged(); // Add event listener
    
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(enterEvent);
    
    expect(toggleSpy).toHaveBeenCalled();
    
    toggleSpy.mockRestore();
  });

  it('should handle keyboard events (Escape key)', async () => {
    const toggleSpy = jest.spyOn(component, 'toggle');
    
    component.open = true;
    component.isOpenChanged(); // Add event listener
    
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    
    expect(toggleSpy).toHaveBeenCalled();
    
    toggleSpy.mockRestore();
  });

  it('should ignore other keyboard events', async () => {
    const toggleSpy = jest.spyOn(component, 'toggle');
    
    component.open = true;
    component.isOpenChanged(); // Add event listener
    
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    document.dispatchEvent(spaceEvent);
    
    expect(toggleSpy).not.toHaveBeenCalled();
    
    toggleSpy.mockRestore();
  });

  it('should render slot content correctly', async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `
        <bds-alert>
          <div class="test-content">Alert Content</div>
        </bds-alert>
      `,
    });

    expect(page.root).toEqualHtml(`
      <bds-alert>
        <mock:shadow-root>
          <div class="alert__dialog alert__dialog--fixed">
            <div class="alert">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
        <div class="test-content">Alert Content</div>
      </bds-alert>
    `);
  });

  it('should handle different position values', async () => {
    // Test with contain position
    page = await newSpecPage({
      components: [BdsAlert],
      html: `<bds-alert position="contain"></bds-alert>`,
    });
    
    let dialogDiv = page.root.shadowRoot.querySelector('.alert__dialog');
    expect(dialogDiv.classList.contains('alert__dialog--contain')).toBe(true);
    expect(dialogDiv.classList.contains('alert__dialog--fixed')).toBe(false);
  });

  it('should have proper structure with alert elements', () => {
    const dialogDiv = page.root.shadowRoot.querySelector('.alert__dialog');
    const alertDiv = page.root.shadowRoot.querySelector('.alert');
    const slot = page.root.shadowRoot.querySelector('slot');
    
    expect(dialogDiv).toBeTruthy();
    expect(alertDiv).toBeTruthy();
    expect(slot).toBeTruthy();
    expect(dialogDiv.tagName).toBe('DIV');
    expect(alertDiv.tagName).toBe('DIV');
  });

  it('should handle complete lifecycle of opening and closing', async () => {
    const alertChangedSpy = jest.fn();
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    
    page.root.addEventListener('bdsAlertChanged', alertChangedSpy);
    
    // Initially closed
    expect(component.open).toBe(false);
    
    // Open the alert
    await component.toggle();
    expect(component.open).toBe(true);
    expect(alertChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { alertStatus: 'opened' }
      })
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', component.listener, false);
    
    // Close the alert
    await component.toggle();
    expect(component.open).toBe(false);
    expect(alertChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { alertStatus: 'closed' }
      })
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', component.listener, false);
    
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it('should render with complete configuration', async () => {
    page = await newSpecPage({
      components: [BdsAlert],
      html: `
        <bds-alert 
          open="true" 
          position="contain" 
          data-test="complete-alert">
          <span>Complete Alert Content</span>
        </bds-alert>
      `,
    });

    const dialogDiv = page.root.shadowRoot.querySelector('.alert__dialog');
    const alertDiv = page.root.shadowRoot.querySelector('.alert');
    
    expect(dialogDiv.classList.contains('alert__dialog')).toBe(true);
    expect(dialogDiv.classList.contains('alert__dialog--open')).toBe(true);
    expect(dialogDiv.classList.contains('alert__dialog--contain')).toBe(true);
    expect(alertDiv.getAttribute('data-test')).toBe('complete-alert');
  });
});
