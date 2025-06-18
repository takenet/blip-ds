import { newSpecPage } from '@stencil/core/testing';
import { BdsMenuAction } from '../menu-action';

describe('bds-menu-action', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action></bds-menu-action>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.buttonText).toBe('');
    expect(page.root.subMenu).toBe(false);
    expect(page.root.iconLeft).toBeNull();
    expect(page.root.subtitle).toBeNull();
    expect(page.root.description).toBeNull();
    expect(page.root.lipstick).toBe(false);
    expect(page.root.disabled).toBe(false);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action 
               button-text="Test Action" 
               sub-menu="true" 
               icon-left="home" 
               subtitle="Test Subtitle" 
               description="Test Description" 
               lipstick="true" 
               disabled="true">
             </bds-menu-action>`,
    });

    expect(page.root.buttonText).toBe('Test Action');
    expect(page.root.subMenu).toBe(true);
    expect(page.root.iconLeft).toBe('home');
    expect(page.root.subtitle).toBe('Test Subtitle');
    expect(page.root.description).toBe('Test Description');
    expect(page.root.lipstick).toBe(true);
    expect(page.root.disabled).toBe(true);
  });

  it('should render basic menu action structure', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test Action"></bds-menu-action>`,
    });

    const menuactionDiv = page.root.shadowRoot.querySelector('.menuaction');
    expect(menuactionDiv).toBeTruthy();
    
    const button = page.root.shadowRoot.querySelector('.menuaction__button');
    expect(button).toBeTruthy();
  });

  it('should render button text when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test Action"></bds-menu-action>`,
    });

    const titleElement = page.root.shadowRoot.querySelector('.title-item');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Test Action');
  });

  it('should render subtitle when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" subtitle="Test Subtitle"></bds-menu-action>`,
    });

    const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement.textContent).toBe('Test Subtitle');
  });

  it('should render description when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" description="Test Description"></bds-menu-action>`,
    });

    const descriptionElement = page.root.shadowRoot.querySelector('.description-item');
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.textContent).toBe('Test Description');
  });

  it('should render left icon when provided', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" icon-left="home"></bds-menu-action>`,
    });

    const iconElement = page.root.shadowRoot.querySelector('.icon-item');
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('name')).toBe('home');
  });

  it('should apply correct button classes based on icon and submenu configuration', async () => {
    // Test with left icon only
    const pageLeftIcon = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" icon-left="home"></bds-menu-action>`,
    });

    const buttonLeftIcon = pageLeftIcon.root.shadowRoot.querySelector('.menuaction__button');
    expect(buttonLeftIcon.classList.contains('menuaction__button__activeicleft')).toBe(true);

    // Test with submenu only
    const pageSubMenu = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
    });

    const buttonSubMenu = pageSubMenu.root.shadowRoot.querySelector('.menuaction__button');
    expect(buttonSubMenu.classList.contains('menuaction__button__activeicright')).toBe(true);

    // Test with both icon and submenu
    const pageBoth = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" icon-left="home" sub-menu="true"></bds-menu-action>`,
    });

    const buttonBoth = pageBoth.root.shadowRoot.querySelector('.menuaction__button');
    expect(buttonBoth.classList.contains('menuaction__button__activeicleftright')).toBe(true);
  });

  it('should apply lipstick class when lipstick is true', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" lipstick="true"></bds-menu-action>`,
    });

    const button = page.root.shadowRoot.querySelector('.menuaction__button');
    expect(button.classList.contains('menuaction__button__lipstick')).toBe(true);
  });

  it('should apply disabled class when disabled is true', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" disabled="true"></bds-menu-action>`,
    });

    const button = page.root.shadowRoot.querySelector('.menuaction__button');
    expect(button.classList.contains('menuaction__button__disabled')).toBe(true);
  });

  it('should render submenu structure when subMenu is true', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
    });

    const submenuDiv = page.root.shadowRoot.querySelector('.menuaction__submenu');
    expect(submenuDiv).toBeTruthy();
    
    const arrowIcon = page.root.shadowRoot.querySelector('.arrow');
    expect(arrowIcon).toBeTruthy();
    expect(arrowIcon.getAttribute('name')).toBe('arrow-right'); // default position
  });

  it('should not render submenu structure when subMenu is false', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test"></bds-menu-action>`,
    });

    const submenuDiv = page.root.shadowRoot.querySelector('.menuaction__submenu');
    expect(submenuDiv).toBeNull();
    
    const arrowIcon = page.root.shadowRoot.querySelector('.arrow');
    expect(arrowIcon).toBeNull();
  });

  it('should handle submenu position changes', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
    });

    const component = page.rootInstance;
    
    // Test right position (default)
    expect(component.positionSubMenu).toBe('right');
    let arrowIcon = page.root.shadowRoot.querySelector('.arrow');
    expect(arrowIcon.getAttribute('name')).toBe('arrow-right');

    // Change to left position
    component.positionSubMenu = 'left';
    await page.waitForChanges();
    
    arrowIcon = page.root.shadowRoot.querySelector('.arrow');
    expect(arrowIcon.getAttribute('name')).toBe('arrow-left');
  });

  it('should apply position class to main container', async () => {
    const page = await newSpecPage({
      components: [BdsMenuAction],
      html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
    });

    const menuactionDiv = page.root.shadowRoot.querySelector('.menuaction');
    expect(menuactionDiv.classList.contains('position-right')).toBe(true);

    // Change position and verify class
    const component = page.rootInstance;
    component.positionSubMenu = 'left';
    await page.waitForChanges();

    expect(menuactionDiv.classList.contains('position-left')).toBe(true);
    expect(menuactionDiv.classList.contains('position-right')).toBe(false);
  });

  describe('State management', () => {
    it('should manage openSubMenu state', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      expect(component.openSubMenu).toBe(false);

      // Open submenu
      component.openSubMenu = true;
      await page.waitForChanges();
      expect(component.openSubMenu).toBe(true);
    });

    it('should manage delaySubMenu state based on stateSubMenu', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      
      // Test 'open' state
      component.stateSubMenu = 'open';
      await page.waitForChanges();
      expect(component.delaySubMenu).toBe(true);

      // Test 'pending' state
      component.stateSubMenu = 'pending';
      await page.waitForChanges();
      expect(component.delaySubMenu).toBe(true);

      // Test 'close' state
      component.stateSubMenu = 'close';
      await page.waitForChanges();
      expect(component.delaySubMenu).toBe(false);
    });

    it('should manage zIndex state', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      expect(component.zIndex).toBe(0);

      component.zIndex = 1;
      await page.waitForChanges();
      expect(component.zIndex).toBe(1);
    });
  });

  describe('Watch methods', () => {
    it('should handle openSubMenuChanged watch method', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      
      // Test opening submenu
      component.openSubMenu = true;
      await page.waitForChanges();
      expect(component.stateSubMenu).toBe('open');
      expect(component.delay).toBeNull();

      // Test reopening submenu (different from closing then opening)
      component.openSubMenu = false;
      component.openSubMenu = true;
      await page.waitForChanges();
      expect(component.stateSubMenu).toBe('open');
      expect(component.delay).toBeNull();
    });

    it('should handle stateSubMenuChanged watch method', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      
      // Test different states
      component.stateSubMenu = 'open';
      await page.waitForChanges();
      expect(component.delaySubMenu).toBe(true);

      component.stateSubMenu = 'close';
      await page.waitForChanges();
      expect(component.delaySubMenu).toBe(false);
    });
  });

  describe('Mouse events', () => {
    it('should handle mouse over event for submenu', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const menuactionDiv = page.root.shadowRoot.querySelector('.menuaction');
      const component = page.rootInstance;

      // Trigger mouse over
      const mouseOverEvent = new MouseEvent('mouseover');
      menuactionDiv.dispatchEvent(mouseOverEvent);
      await page.waitForChanges();

      expect(component.zIndex).toBe(1);
      expect(component.openSubMenu).toBe(true);
    });

    it('should handle mouse out event for submenu', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const menuactionDiv = page.root.shadowRoot.querySelector('.menuaction');
      const component = page.rootInstance;

      // Set initial state
      component.zIndex = 1;
      component.openSubMenu = true;
      await page.waitForChanges();

      // Trigger mouse out
      const mouseOutEvent = new MouseEvent('mouseout');
      menuactionDiv.dispatchEvent(mouseOutEvent);
      await page.waitForChanges();

      expect(component.zIndex).toBe(0);
      expect(component.openSubMenu).toBe(false);
    });

    it('should not handle mouse events when subMenu is false', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test"></bds-menu-action>`,
      });

      const menuactionDiv = page.root.shadowRoot.querySelector('.menuaction');
      const component = page.rootInstance;

      // Trigger mouse over
      const mouseOverEvent = new MouseEvent('mouseover');
      menuactionDiv.dispatchEvent(mouseOverEvent);
      await page.waitForChanges();

      expect(component.zIndex).toBe(0);
      expect(component.openSubMenu).toBe(false);
    });
  });

  describe('Component lifecycle', () => {
    it('should call componentWillLoad', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test"></bds-menu-action>`,
      });

      expect(page.rootInstance).toBeTruthy();
    });
  });

  describe('Submenu CSS classes', () => {
    it('should apply correct submenu classes based on delaySubMenu state', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      
      // Test closed state
      component.delaySubMenu = false;
      await page.waitForChanges();
      
      const submenu = page.root.shadowRoot.querySelector('.menuaction__submenu');
      expect(submenu.classList.contains('menuaction__submenu__open')).toBe(false);

      // Test open state
      component.delaySubMenu = true;
      await page.waitForChanges();
      
      expect(submenu.classList.contains('menuaction__submenu__open')).toBe(true);
    });

    it('should apply correct z-index style to submenu', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true"></bds-menu-action>`,
      });

      const component = page.rootInstance;
      component.zIndex = 5;
      await page.waitForChanges();

      const submenu = page.root.shadowRoot.querySelector('.menuaction__submenu') as HTMLElement;
      expect(submenu.style.zIndex).toBe('5');
    });
  });

  describe('Accessibility', () => {
    it('should render proper button element', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test Action"></bds-menu-action>`,
      });

      const button = page.root.shadowRoot.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.tagName).toBe('BUTTON');
    });

    it('should provide slot for submenu content', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test" sub-menu="true">
                 <span>Submenu content</span>
               </bds-menu-action>`,
      });

      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Content rendering', () => {
    it('should not render title when buttonText is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action></bds-menu-action>`,
      });

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement).toBeNull();
    });

    it('should not render subtitle when subtitle is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test"></bds-menu-action>`,
      });

      const subtitleElement = page.root.shadowRoot.querySelector('.subtitle-item');
      expect(subtitleElement).toBeNull();
    });

    it('should not render description when description is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test"></bds-menu-action>`,
      });

      const descriptionElement = page.root.shadowRoot.querySelector('.description-item');
      expect(descriptionElement).toBeNull();
    });

    it('should not render left icon when iconLeft is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuAction],
        html: `<bds-menu-action button-text="Test"></bds-menu-action>`,
      });

      const iconElement = page.root.shadowRoot.querySelector('.icon-item');
      expect(iconElement).toBeNull();
    });
  });
});
