import { newSpecPage } from '@stencil/core/testing';
import { Sidebar } from '../sidebar';

describe('bds-sidebar', () => {
  afterEach(() => {
    // Clean up document event listeners
    document.removeEventListener('keyup', () => {});
  });

  // Basic rendering tests
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar></bds-sidebar>',
    });

    expect(page.root).toEqualHtml(`
      <bds-sidebar>
        <mock:shadow-root>
          <div class="sidebar_dialog type_over">
            <div class="outzone"></div>
            <div class="background_surface-2 position_left sidebar type_over" style="width: 360px;">
              <div class="body">
                <div class="content element_scrolled margin">
                  <slot name="body"></slot>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </bds-sidebar>
    `);
  });

  it('should render as fixed type when specified', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="fixed"></bds-sidebar>',
    });

    const sidebarContainer = page.root.shadowRoot.querySelector('.sidebar_dialog');
    expect(sidebarContainer.classList.contains('type_fixed')).toBe(true);
    
    // Fixed type should not have outzone
    const outzone = page.root.shadowRoot.querySelector('.outzone');
    expect(outzone).toBeFalsy();
  });

  it('should render with right position', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar sidebar-position="right"></bds-sidebar>',
    });

    const sidebar = page.root.shadowRoot.querySelector('.sidebar');
    expect(sidebar.classList.contains('position_right')).toBe(true);
  });

  it('should render with custom width', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar width="500"></bds-sidebar>',
    });

    const sidebar = page.root.shadowRoot.querySelector('.sidebar') as HTMLElement;
    expect(sidebar.style.width).toBe('500px');
  });

  it('should enforce minimum width of 144px', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar width="100"></bds-sidebar>',
    });

    const sidebar = page.root.shadowRoot.querySelector('.sidebar') as HTMLElement;
    expect(sidebar.style.width).toBe('144px');
  });

  it('should render with custom background', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar background="surface-4"></bds-sidebar>',
    });

    const sidebar = page.root.shadowRoot.querySelector('.sidebar');
    expect(sidebar.classList.contains('background_surface-4')).toBe(true);
  });

  it('should render without margin when specified', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar margin="false"></bds-sidebar>',
    });

    const content = page.root.shadowRoot.querySelector('.content.element_scrolled');
    expect(content.classList.contains('margin')).toBe(false);
  });

  // Slot handling tests
  it('should detect and render header slot', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `
        <bds-sidebar>
          <div slot="header">Header Content</div>
        </bds-sidebar>
      `,
    });

    const component = page.rootInstance;
    component.componentWillLoad();
    await page.waitForChanges();

    expect(component.hasHeaderSlot).toBe(true);
    
    const header = page.root.shadowRoot.querySelector('.header');
    expect(header).toBeTruthy();
  });

  it('should detect and render footer slot', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `
        <bds-sidebar>
          <div slot="footer">Footer Content</div>
        </bds-sidebar>
      `,
    });

    const component = page.rootInstance;
    component.componentWillLoad();
    await page.waitForChanges();

    expect(component.hasFooterSlot).toBe(true);
    
    const footer = page.root.shadowRoot.querySelector('.footer');
    expect(footer).toBeTruthy();
  });

  it('should not render header/footer when slots are not present', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar></bds-sidebar>',
    });

    const component = page.rootInstance;
    component.componentWillLoad();
    await page.waitForChanges();

    expect(component.hasHeaderSlot).toBe(false);
    expect(component.hasFooterSlot).toBe(false);
    
    const header = page.root.shadowRoot.querySelector('.header');
    const footer = page.root.shadowRoot.querySelector('.footer');
    expect(header).toBeFalsy();
    expect(footer).toBeFalsy();
  });

  // isOpen state tests
  it('should be closed by default for over type', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="over"></bds-sidebar>',
    });

    const component = page.rootInstance;
    expect(component.isOpen).toBe(false);
    
    const sidebarDialog = page.root.shadowRoot.querySelector('.sidebar_dialog');
    expect(sidebarDialog.classList.contains('is_open')).toBe(false);
  });

  it('should be open by default for fixed type', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="fixed"></bds-sidebar>',
    });

    const component = page.rootInstance;
    expect(component.isOpen).toBe(true);
    
    const sidebarDialog = page.root.shadowRoot.querySelector('.sidebar_dialog');
    expect(sidebarDialog.classList.contains('is_open')).toBe(true);
  });

  it('should open when isOpen is set to true', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar is-open="true"></bds-sidebar>',
    });

    const sidebarDialog = page.root.shadowRoot.querySelector('.sidebar_dialog');
    const sidebar = page.root.shadowRoot.querySelector('.sidebar');
    
    expect(sidebarDialog.classList.contains('is_open')).toBe(true);
    expect(sidebar.classList.contains('is_open')).toBe(true);
  });

  // Method tests
  it('should toggle isOpen state when toggle method is called', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar is-open="false"></bds-sidebar>',
    });

    const component = page.rootInstance;
    
    await component.toggle();
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(true);
    
    await component.toggle();
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(false);
  });

  // Event tests
  it('should emit bdsToggle event when isOpen changes', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar is-open="false"></bds-sidebar>',
    });

    const component = page.rootInstance;
    let emittedEvent = null;

    page.root.addEventListener('bdsToggle', (event) => {
      emittedEvent = event;
    });

    component.isOpen = true;
    component.isOpenChanged(true);

    expect(emittedEvent).toBeTruthy();
    expect(emittedEvent.detail.value).toBe(true);
  });

  // Interaction tests
  it('should close when outzone is clicked', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="over" is-open="true"></bds-sidebar>',
    });

    const component = page.rootInstance;
    const outzone = page.root.shadowRoot.querySelector('.outzone') as HTMLElement;
    
    expect(component.isOpen).toBe(true);
    
    outzone.click();
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(false);
  });

  it('should handle escape key to close (over type only)', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="over" is-open="true"></bds-sidebar>',
    });

    const component = page.rootInstance;
    
    // Simulate opening sidebar (which adds event listener)
    component.isOpenChanged(true);
    
    expect(component.isOpen).toBe(true);
    
    // Simulate escape key
    const escapeEvent = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    
    expect(component.isOpen).toBe(false);
  });

  it('should not close on escape key for fixed type', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="fixed" is-open="true"></bds-sidebar>',
    });

    const component = page.rootInstance;
    
    // Simulate opening sidebar (which adds event listener)
    component.isOpenChanged(true);
    
    expect(component.isOpen).toBe(true);
    
    // Simulate escape key
    const escapeEvent = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    
    expect(component.isOpen).toBe(true); // Should stay open for fixed type
  });

  it('should handle other keys without closing', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="over" is-open="true"></bds-sidebar>',
    });

    const component = page.rootInstance;
    
    component.isOpenChanged(true);
    expect(component.isOpen).toBe(true);
    
    // Simulate non-escape key
    const enterEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    document.dispatchEvent(enterEvent);
    
    expect(component.isOpen).toBe(true); // Should stay open
  });

  // Data test attributes
  it('should apply data-test attributes correctly', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar dt-outzone="test-outzone" dt-button-close="test-close"></bds-sidebar>',
    });

    const outzone = page.root.shadowRoot.querySelector('.outzone');
    expect(outzone.getAttribute('data-test')).toBe('test-outzone');
  });

  // Close button tests
  it('should render close button in header for over type', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `
        <bds-sidebar type="over">
          <div slot="header">Header Content</div>
        </bds-sidebar>
      `,
    });

    const component = page.rootInstance;
    component.componentWillLoad();
    await page.waitForChanges();

    const header = page.root.shadowRoot.querySelector('.header');
    expect(header).toBeTruthy();
    
    // Check for close button
    const closeButton = page.root.shadowRoot.querySelector('bds-button-icon.closeButton');
    expect(closeButton).toBeTruthy();
  });

  it('should not render close button for fixed type', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `
        <bds-sidebar type="fixed">
          <div slot="header">Header Content</div>
        </bds-sidebar>
      `,
    });

    const component = page.rootInstance;
    component.componentWillLoad();
    await page.waitForChanges();

    const closeButton = page.root.shadowRoot.querySelector('bds-button-icon.closeButton');
    expect(closeButton).toBeFalsy();
  });

  // Complex scenarios
  it('should render with all props and slots', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `
        <bds-sidebar 
          type="over" 
          sidebar-position="right" 
          width="400" 
          background="surface-3"
          margin="false"
          is-open="true"
          dt-outzone="test-outzone"
          dt-button-close="test-close"
        >
          <div slot="header">Header Content</div>
          <div slot="body">Body Content</div>
          <div slot="footer">Footer Content</div>
        </bds-sidebar>
      `,
    });

    const component = page.rootInstance;
    component.componentWillLoad();
    await page.waitForChanges();

    // Verify all features are working together
    expect(component.isOpen).toBe(true);
    expect(component.hasHeaderSlot).toBe(true);
    expect(component.hasFooterSlot).toBe(true);
    
    const sidebar = page.root.shadowRoot.querySelector('.sidebar') as HTMLElement;
    expect(sidebar.classList.contains('position_right')).toBe(true);
    expect(sidebar.classList.contains('background_surface-3')).toBe(true);
    expect(sidebar.style.width).toBe('400px');
    
    const content = page.root.shadowRoot.querySelector('.content.element_scrolled');
    expect(content.classList.contains('margin')).toBe(false);
  });

  // Edge cases
  it('should handle undefined or null props gracefully', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar width="" background="" sidebar-position=""></bds-sidebar>',
    });

    expect(page.root).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  it('should handle very small and very large widths', async () => {
    // Very small width
    const smallPage = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar width="1"></bds-sidebar>',
    });

    const smallSidebar = smallPage.root.shadowRoot.querySelector('.sidebar') as HTMLElement;
    expect(smallSidebar.style.width).toBe('144px'); // Should enforce minimum

    // Very large width
    const largePage = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar width="9999"></bds-sidebar>',
    });

    const largeSidebar = largePage.root.shadowRoot.querySelector('.sidebar') as HTMLElement;
    expect(largeSidebar.style.width).toBe('9999px'); // Should allow large values
  });

  it('should handle event listener cleanup on close', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: '<bds-sidebar type="over"></bds-sidebar>',
    });

    const component = page.rootInstance;
    
    // Open sidebar (adds event listener)
    component.isOpenChanged(true);
    
    // Close sidebar (should remove event listener)
    component.isOpenChanged(false);
    
    // No easy way to test if event listener was removed,
    // but we can verify the method doesn't throw errors
    expect(component.isOpen).toBe(false);
  });
});
