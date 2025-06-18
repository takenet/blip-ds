import { newSpecPage } from '@stencil/core/testing';

// Mock the position-element utility
jest.mock('../../../utils/position-element', () => ({
  getScrollParent: jest.fn(() => document.body),
  positionElement: jest.fn(() => ({ top: 300, left: 400 })),
}));

import { BdsMenu } from '../menu';

describe('bds-menu', () => {
  beforeEach(() => {
    // Mock document.getElementById
    Object.defineProperty(document, 'getElementById', {
      value: jest.fn(() => null),
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [BdsMenu],
      html: `<bds-menu></bds-menu>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.menu).toBeNull();
    expect(page.root.position).toBe('right');
    expect(page.root.open).toBe(false);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [BdsMenu],
      html: `<bds-menu menu="test-menu" position="bottom" open="true"></bds-menu>`,
    });

    expect(page.root.menu).toBe('test-menu');
    expect(page.root.position).toBe('bottom');
    expect(page.root.open).toBe(true);
  });

  it('should render menu container with correct classes when closed', async () => {
    const page = await newSpecPage({
      components: [BdsMenu],
      html: `<bds-menu position="right"></bds-menu>`,
    });

    const menuContainer = page.root.shadowRoot.querySelector('.menu');
    expect(menuContainer).toBeTruthy();
    expect(menuContainer.classList.contains('menu')).toBe(true);
    expect(menuContainer.classList.contains('menu__right')).toBe(true);
    expect(menuContainer.classList.contains('menu__open')).toBe(false);
  });

  it('should render menu container with correct classes when open', async () => {
    const page = await newSpecPage({
      components: [BdsMenu],
      html: `<bds-menu position="bottom" open="true"></bds-menu>`,
    });

    const menuContainer = page.root.shadowRoot.querySelector('.menu');
    expect(menuContainer).toBeTruthy();
    expect(menuContainer.classList.contains('menu')).toBe(true);
    expect(menuContainer.classList.contains('menu__bottom')).toBe(true);
    expect(menuContainer.classList.contains('menu__open')).toBe(true);
  });

  it('should render outzone when menu is open', async () => {
    const page = await newSpecPage({
      components: [BdsMenu],
      html: `<bds-menu open="true"></bds-menu>`,
    });

    const outzone = page.root.shadowRoot.querySelector('.outzone');
    expect(outzone).toBeTruthy();
  });

  it('should not render outzone when menu is closed', async () => {
    const page = await newSpecPage({
      components: [BdsMenu],
      html: `<bds-menu open="false"></bds-menu>`,
    });

    const outzone = page.root.shadowRoot.querySelector('.outzone');
    expect(outzone).toBeNull();
  });

  describe('position variants', () => {
    it('should render with right position', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu position="right"></bds-menu>`,
      });

      const menuContainer = page.root.shadowRoot.querySelector('.menu');
      expect(menuContainer.classList.contains('menu__right')).toBe(true);
    });

    it('should render with bottom position', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu position="bottom"></bds-menu>`,
      });

      const menuContainer = page.root.shadowRoot.querySelector('.menu');
      expect(menuContainer.classList.contains('menu__bottom')).toBe(true);
    });
  });

  describe('toggle method', () => {
    it('should toggle open state from false to true', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu open="false"></bds-menu>`,
      });

      const component = page.rootInstance;
      expect(component.open).toBe(false);

      await component.toggle();
      expect(component.open).toBe(true);
    });

    it('should toggle open state from true to false', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu open="true"></bds-menu>`,
      });

      const component = page.rootInstance;
      expect(component.open).toBe(true);

      await component.toggle();
      expect(component.open).toBe(false);
    });
  });

  describe('events', () => {
    it('should emit bdsToggle event when opening', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu></bds-menu>`,
      });

      const component = page.rootInstance;
      // Set up required elements to avoid positioning errors
      component.refElement = document.createElement('div');
      component.menuElement = document.createElement('div');
      component.intoView = document.createElement('div');
      
      // Add required properties to avoid errors
      Object.defineProperty(component.refElement, 'offsetTop', { value: 0, writable: true });
      Object.defineProperty(component.refElement, 'offsetLeft', { value: 0, writable: true });

      const spy = jest.fn();
      page.root.addEventListener('bdsToggle', spy);

      // Simulate opening the menu
      component.open = true;
      component.openMenu();

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { value: true },
        })
      );
    });
  });

  describe('component lifecycle', () => {
    it('should handle componentWillLoad with null element', async () => {
      document.getElementById = jest.fn().mockReturnValue(null);

      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu menu="test-element"></bds-menu>`,
      });

      const component = page.rootInstance;
      expect(document.getElementById).toHaveBeenCalledWith('test-element');
      expect(component.refElement).toBeNull();
    });

    it('should handle componentWillLoad with existing element', async () => {
      const mockElement = document.createElement('div');
      // Add required properties to avoid getScrollParent errors
      Object.defineProperty(mockElement, 'offsetParent', { value: document.body, writable: true });
      
      document.getElementById = jest.fn().mockReturnValue(mockElement);

      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu menu="test-element"></bds-menu>`,
      });

      const component = page.rootInstance;
      expect(document.getElementById).toHaveBeenCalledWith('test-element');
      expect(component.refElement).toBe(mockElement);
    });
  });

  describe('positioning', () => {
    it('should calculate position when menu opens and elements are present', async () => {
      const { positionElement } = require('../../../utils/position-element');
      positionElement.mockReturnValue({ top: 300, left: 400 });

      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu></bds-menu>`,
      });

      const component = page.rootInstance;
      component.refElement = document.createElement('div');
      component.menuElement = document.createElement('div');
      component.intoView = document.createElement('div');
      
      // Add required properties to avoid positioning errors
      Object.defineProperty(component.refElement, 'offsetTop', { value: 0, writable: true });
      Object.defineProperty(component.refElement, 'offsetLeft', { value: 0, writable: true });

      // Clear previous calls and set open to true
      positionElement.mockClear();
      
      // Spy on the openMenu method to ensure it's called
      const openMenuSpy = jest.spyOn(component, 'openMenu');
      
      component.open = true;
      
      // Manually trigger the openMenu method since @Watch might not work in test environment
      component.openMenu();

      expect(openMenuSpy).toHaveBeenCalled();
      expect(positionElement).toHaveBeenCalledWith({
        actionElement: component.refElement,
        changedElement: component.menuElement,
        intoView: component.intoView,
      });
      expect(component.menupositionTop).toBe(300);
      expect(component.menupositionLeft).toBe(400);
    });

    it('should not calculate position when menu is closed', async () => {
      const { positionElement } = require('../../../utils/position-element');
      positionElement.mockClear();

      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu></bds-menu>`,
      });

      const component = page.rootInstance;

      // Simulate closing the menu
      component.open = false;
      component.openMenu();

      expect(positionElement).not.toHaveBeenCalled();
    });
  });

  describe('click handlers', () => {
    it('should close menu when clicking outzone', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu open="true"></bds-menu>`,
      });

      const component = page.rootInstance;
      expect(component.open).toBe(true);

      // Simulate click on outzone
      const mockEvent = {
        stopPropagation: jest.fn(),
      };
      component.onClickCloseButtom(mockEvent);

      expect(component.open).toBe(false);
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('ref element handling', () => {
    it('should set menu element reference', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu></bds-menu>`,
      });

      const component = page.rootInstance;
      const mockElement = document.createElement('div');

      component.refMenuElement(mockElement);
      expect(component.menuElement).toBe(mockElement);
    });
  });

  describe('style application', () => {
    it('should apply correct position styles', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu></bds-menu>`,
      });

      const component = page.rootInstance;
      component.menupositionTop = 150;
      component.menupositionLeft = 250;
      await page.waitForChanges();

      const menuContainer = page.root.shadowRoot.querySelector('.menu') as HTMLElement;
      expect(menuContainer.style.top).toBe('150px');
      expect(menuContainer.style.left).toBe('250px');
    });
  });

  describe('slot content', () => {
    it('should render slot content', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu><div class="menu-content">Menu Content</div></bds-menu>`,
      });

      expect(page.root).toEqualHtml(`
        <bds-menu>
          <mock:shadow-root>
            <div class="menu menu__right" style="top: 0px; left: 0px;">
              <slot></slot>
            </div>
          </mock:shadow-root>
          <div class="menu-content">Menu Content</div>
        </bds-menu>
      `);
    });
  });

  describe('accessibility', () => {
    it('should have proper structure for accessibility', async () => {
      const page = await newSpecPage({
        components: [BdsMenu],
        html: `<bds-menu></bds-menu>`,
      });

      const menuContainer = page.root.shadowRoot.querySelector('.menu');
      expect(menuContainer).toBeTruthy();
      expect(menuContainer.tagName.toLowerCase()).toBe('div');
    });
  });
});
