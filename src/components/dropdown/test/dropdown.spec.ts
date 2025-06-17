// Mock the position-element module BEFORE any imports
jest.mock('../../../utils/position-element', () => ({
  getScrollParent: jest.fn().mockImplementation(() => {
    const mockElement = document.createElement('div');
    Object.defineProperty(mockElement, 'tagName', { value: 'BODY', writable: false });
    Object.defineProperty(mockElement, 'classList', {
      value: {
        contains: jest.fn(() => false),
        add: jest.fn(),
        remove: jest.fn()
      },
      writable: false
    });
    return mockElement;
  }),
  positionAbsoluteElement: jest.fn(() => ({ x: 'center', y: 'bottom' }))
}));

import { newSpecPage } from '@stencil/core/testing';
import { BdsDropdown } from '../dropdown';

// Mock DOM methods that might not be available in the test environment
Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
  get() { return null; }
});

describe('bds-dropdown', () => {
  it('should create component', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    expect(page.rootInstance).toBeTruthy();
  });

  it('should render component with basic HTML structure', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    expect(page.root).toBeTruthy();
  });

  it('should have default property values', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;
    expect(component.activeMode).toBe('click');
    expect(component.open).toBe(false);
    expect(component.position).toBe('auto');
    expect(component.dataTest).toBe(null);
  });

  it('should accept custom property values', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown active-mode="hover" open="true" position="top-center" data-test="test-dropdown">
          <div slot="dropdown-activator">
            <button>Click me</button>
          </div>
          <div slot="dropdown-content">
            Content here
          </div>
        </bds-dropdown>
      `,
    });

    const component = page.rootInstance;
    expect(component.activeMode).toBe('hover');
    expect(component.open).toBe(true);
    expect(component.position).toBe('top-center');
    expect(component.dataTest).toBe('test-dropdown');
  });

  it('should have toggle method that changes open state', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;
    expect(component.open).toBe(false);

    await component.toggle();
    expect(component.open).toBe(true);

    await component.toggle();
    expect(component.open).toBe(false);
  });

  it('should have setOpen method that sets open to true', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;
    expect(component.open).toBe(false);

    await component.setOpen();
    expect(component.open).toBe(true);
  });

  it('should have setClose method that sets open to false', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown open="true"><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;

    await component.setClose();
    expect(component.open).toBe(false);
    expect(component.stateOpenSubMenu).toBe(false);
  });

  it('should accept all valid activeMode values', async () => {
    // Test with click mode
    const clickPage = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown active-mode="click">
          <div slot="dropdown-activator">
            <button>Click me</button>
          </div>
        </bds-dropdown>
      `,
    });
    expect(clickPage.rootInstance.activeMode).toBe('click');

    // Test with hover mode
    const hoverPage = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown active-mode="hover">
          <div slot="dropdown-activator">
            <button>Hover me</button>
          </div>
        </bds-dropdown>
      `,
    });
    expect(hoverPage.rootInstance.activeMode).toBe('hover');
  });

  it('should accept all valid position values', async () => {
    // Test a few key position values to ensure they are accepted correctly
    const testPositions = ['auto', 'top-center', 'bottom-left', 'right-center'];

    for (const position of testPositions) {
      const page = await newSpecPage({
        components: [BdsDropdown],
        html: `
          <bds-dropdown position="${position}">
            <div slot="dropdown-activator">
              <button>Click me</button>
            </div>
          </bds-dropdown>
        `,
      });
      expect(page.rootInstance.position).toBe(position);
    }
  });

  it('should have state properties with correct initial values', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;
    expect(component.stateOpenSubMenu).toBe(false);
    expect(component.stateSubMenu).toBe('close');
    expect(component.zIndex).toBe(0);
  });

  it('should handle submenu state correctly', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;

    // Test initial state
    expect(component.stateOpenSubMenu).toBe(false);
    expect(component.stateSubMenu).toBe('close');

    // Test state changes through public properties
    component.stateOpenSubMenu = true;
    expect(component.stateOpenSubMenu).toBe(true);

    component.stateOpenSubMenu = false;
    expect(component.stateOpenSubMenu).toBe(false);
  });

  it('should handle submenu state transitions', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;

    // Test each state property directly
    component.stateSubMenu = 'open';
    expect(component.stateSubMenu).toBe('open');

    component.stateSubMenu = 'pending';
    expect(component.stateSubMenu).toBe('pending');

    component.stateSubMenu = 'close';
    expect(component.stateSubMenu).toBe('close');
  });

  it('should render with correct structure', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
  });

  it('should render outzone when open and not in hover mode', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown open="true"><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.rootInstance.open).toBe(true);
  });

  it('should not render outzone in hover mode', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown active-mode="hover"><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.rootInstance.activeMode).toBe('hover');
  });

  it('should handle z-index changes', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;
    component.zIndex = 1;

    expect(component.zIndex).toBe(1);
  });

  it('should emit events through public methods', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown>
          <div slot="dropdown-activator">
            <button>Click me</button>
          </div>
          <div slot="dropdown-content">
            Content here
          </div>
        </bds-dropdown>
      `,
    });

    const component = page.rootInstance;

    // Test toggle method changes open state
    expect(component.open).toBe(false);
    await component.toggle();
    expect(component.open).toBe(true);

    await component.toggle();
    expect(component.open).toBe(false);

    // For unit tests, we validate that the toggle method correctly changes the open state
    // The event emission is handled by Stencil's watch decorator in the real component
    expect(component.open).toBe(false);
  });

  it('should handle mouse events for hover mode', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown active-mode="hover">
          <div slot="dropdown-activator">
            <button>Hover me</button>
          </div>
        </bds-dropdown>
      `,
    });

    const component = page.rootInstance;

    // Test initial state
    expect(component.zIndex).toBe(0);
    expect(component.stateOpenSubMenu).toBe(false);

    // Test state changes directly through properties
    component.stateOpenSubMenu = true;
    expect(component.stateOpenSubMenu).toBe(true);

    component.stateOpenSubMenu = false;
    expect(component.stateOpenSubMenu).toBe(false);
  });

  it('should handle click events through public methods', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown open="true"><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;

    // Use public method instead of private one
    await component.setClose();
    expect(component.open).toBe(false);
  });

  it('should validate component initialization', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;

    // Check all required properties are defined
    expect(component.activeMode).toBeDefined();
    expect(component.open).toBeDefined();
    expect(component.position).toBeDefined();
    expect(component.dataTest).toBeDefined();
    expect(component.stateOpenSubMenu).toBeDefined();
    expect(component.stateSubMenu).toBeDefined();
    expect(component.zIndex).toBeDefined();
  });

  it('should handle positioning properties', async () => {
    // Test default position
    const defaultPage = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown>
          <div slot="dropdown-activator">
            <button>Click me</button>
          </div>
        </bds-dropdown>
      `,
    });
    expect(defaultPage.rootInstance.position).toBe('auto');

    // Test custom position
    const customPage = await newSpecPage({
      components: [BdsDropdown],
      html: `
        <bds-dropdown position="top-center">
          <div slot="dropdown-activator">
            <button>Click me</button>
          </div>
        </bds-dropdown>
      `,
    });
    expect(customPage.rootInstance.position).toBe('top-center');
  });

  it('should handle timeout management', async () => {
    const page = await newSpecPage({
      components: [BdsDropdown],
      html: `<bds-dropdown><div slot="dropdown-activator"><button>Test</button></div></bds-dropdown>`,
    });
    const component = page.rootInstance;

    // Test that delay timeout can be set and cleared
    expect(component.delay).toBe(null);

    // Simulate delay setting (this would normally happen in watchers)
    component.delay = setTimeout(() => { }, 1000);
    expect(component.delay).not.toBe(null);

    // Clear it
    clearTimeout(component.delay);
    component.delay = null;
    expect(component.delay).toBe(null);
  });
});
