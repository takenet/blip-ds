import { newSpecPage } from '@stencil/core/testing';
import { BdsModalCloseButton } from '../modal-close-button';

describe('bds-modal-close-button', () => {
  async function createModalCloseButtonPage(props = {}) {
    return await newSpecPage({
      components: [BdsModalCloseButton],
      html: `<bds-modal-close-button ${Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')}></bds-modal-close-button>`,
    });
  }

  it('should render component with correct structure', async () => {
    const page = await createModalCloseButtonPage();
    
    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-MODAL-CLOSE-BUTTON');
  });

  it('should render with shadow DOM structure', async () => {
    const page = await createModalCloseButtonPage();
    
    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    
    const wrapper = shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper).toBeTruthy();
    expect(wrapper.tagName).toBe('DIV');
  });

  it('should have default active prop as true', async () => {
    const page = await createModalCloseButtonPage();
    
    expect(page.root.active).toBe(true);
  });

  it('should render with active prop as true by default', async () => {
    const page = await createModalCloseButtonPage();
    
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon')).toBe(true);
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(true);
  });

  it('should render with active prop set to true', async () => {
    const page = await createModalCloseButtonPage({ active: true });
    
    expect(page.root.active).toBe(true);
    
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(true);
  });

  it('should render with active prop set to false', async () => {
    const page = await createModalCloseButtonPage({ active: false });
    
    expect(page.root.active).toBe(false);
    
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon')).toBe(true);
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(false);
  });

  it('should reflect active prop on attribute when true', async () => {
    const page = await createModalCloseButtonPage({ active: true });
    
    expect(page.root.hasAttribute('active')).toBe(true);
  });

  it('should reflect active prop on attribute when false', async () => {
    const page = await createModalCloseButtonPage({ active: false });
    
    // With reflect: true, attributes are present for all truthy values
    // When false, the attribute might still be present with 'false' value
    expect(page.root.getAttribute('active')).toBe('false');
  });

  it('should render bds-icon component', async () => {
    const page = await createModalCloseButtonPage();
    
    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon).toBeTruthy();
    expect(icon.getAttribute('size')).toBe('medium');
    expect(icon.getAttribute('name')).toBe('close');
  });

  it('should have correct icon properties', async () => {
    const page = await createModalCloseButtonPage();
    
    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('size')).toBe('medium');
    expect(icon.getAttribute('name')).toBe('close');
  });

  it('should maintain icon properties regardless of active state', async () => {
    const page = await createModalCloseButtonPage({ active: false });
    
    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('size')).toBe('medium');
    expect(icon.getAttribute('name')).toBe('close');
  });

  it('should update active prop dynamically', async () => {
    const page = await createModalCloseButtonPage({ active: true });
    
    expect(page.root.active).toBe(true);
    
    page.root.active = false;
    await page.waitForChanges();
    
    expect(page.root.active).toBe(false);
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(false);
  });

  it('should update CSS classes when active prop changes', async () => {
    const page = await createModalCloseButtonPage({ active: false });
    
    let wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(false);
    
    page.root.active = true;
    await page.waitForChanges();
    
    wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(true);
  });

  it('should handle string active prop values', async () => {
    const page = await createModalCloseButtonPage({ active: 'true' });
    
    expect(page.root.active).toBe(true);
    
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(true);
  });

  it('should handle string false active prop values', async () => {
    const page = await createModalCloseButtonPage({ active: 'false' });
    
    expect(page.root.active).toBe(false);
    
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper.classList.contains('modal__close__button-icon--active')).toBe(false);
  });

  it('should maintain proper DOM structure', async () => {
    const page = await createModalCloseButtonPage();
    
    // Check shadow DOM exists
    expect(page.root.shadowRoot).toBeTruthy();
    
    // Check wrapper structure
    const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(wrapper).toBeTruthy();
    expect(wrapper.tagName).toBe('DIV');
    
    // Check icon exists
    const icon = wrapper.querySelector('bds-icon');
    expect(icon).toBeTruthy();
    
    // Check no extra elements in wrapper
    const allWrapperChildren = wrapper.children;
    expect(allWrapperChildren.length).toBe(1);
    expect(allWrapperChildren[0].tagName).toBe('BDS-ICON');
  });

  it('should maintain structure with multiple instances', async () => {
    const page = await newSpecPage({
      components: [BdsModalCloseButton],
      html: `
        <bds-modal-close-button active="true"></bds-modal-close-button>
        <bds-modal-close-button active="false"></bds-modal-close-button>
      `,
    });
    
    const closeButtons = page.body.querySelectorAll('bds-modal-close-button');
    expect(closeButtons.length).toBe(2);
    
    expect(closeButtons[0].active).toBe(true);
    expect(closeButtons[1].active).toBe(false);
    
    closeButtons.forEach((closeButton) => {
      const wrapper = closeButton.shadowRoot.querySelector('.modal__close__button-icon');
      expect(wrapper).toBeTruthy();
      
      const icon = wrapper.querySelector('bds-icon');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('close');
      expect(icon.getAttribute('size')).toBe('medium');
    });
  });

  it('should handle prop mutations correctly', async () => {
    const component = new BdsModalCloseButton();
    
    // Test default value
    expect(component.active).toBe(true);
    
    // Test mutation
    component.active = false;
    expect(component.active).toBe(false);
    
    component.active = true;
    expect(component.active).toBe(true);
  });

  it('should apply correct CSS classes based on active state', async () => {
    const activePage = await createModalCloseButtonPage({ active: true });
    const inactivePage = await createModalCloseButtonPage({ active: false });
    
    const activeWrapper = activePage.root.shadowRoot.querySelector('.modal__close__button-icon');
    const inactiveWrapper = inactivePage.root.shadowRoot.querySelector('.modal__close__button-icon');
    
    // Both should have base class
    expect(activeWrapper.classList.contains('modal__close__button-icon')).toBe(true);
    expect(inactiveWrapper.classList.contains('modal__close__button-icon')).toBe(true);
    
    // Check active modifier class based on actual prop values
    expect(activeWrapper.classList.contains('modal__close__button-icon--active')).toBe(activePage.root.active);
    expect(inactiveWrapper.classList.contains('modal__close__button-icon--active')).toBe(inactivePage.root.active);
  });

  it('should handle edge cases for active prop', async () => {
    // Test with undefined
    const page1 = await newSpecPage({
      components: [BdsModalCloseButton],
      html: '<bds-modal-close-button></bds-modal-close-button>',
    });
    expect(page1.root.active).toBe(true); // default value
    
    // Test with null
    const component = new BdsModalCloseButton();
    component.active = null;
    expect(component.active).toBe(null);
    
    // Test with undefined
    component.active = undefined;
    expect(component.active).toBe(undefined);
  });

  it('should work in different active states scenarios', async () => {
    const scenarios = [
      { active: true, expectedClass: true },
      { active: false, expectedClass: false },
      { active: 'true', expectedClass: true },
      { active: 'false', expectedClass: false },
    ];
    
    for (const scenario of scenarios) {
      const page = await createModalCloseButtonPage({ active: scenario.active });
      
      const wrapper = page.root.shadowRoot.querySelector('.modal__close__button-icon');
      const hasActiveClass = wrapper.classList.contains('modal__close__button-icon--active');
      
      expect(hasActiveClass).toBe(scenario.expectedClass);
    }
  });
});
