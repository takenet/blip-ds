import { newSpecPage } from '@stencil/core/testing';
import { Chip } from '../chip';

describe('bds-chip', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [Chip],
      html: `<bds-chip>Default Chip</bds-chip>`,
    });

    // Test default property values
    expect(page.root.icon).toBeUndefined();
    expect(page.root.size).toBe('standard');
    expect(page.root.variant).toBe('default');
    expect(page.root.danger).toBe(false);
    expect(page.root.filter).toBe(false);
    expect(page.root.clickable).toBe(false);
    expect(page.root.deletable).toBe(false);
    expect(page.root.disabled).toBe(false);

    // Should render with default classes
    expect(page.root.classList.contains('chip')).toBe(true);
    expect(page.root.classList.contains('chip--default')).toBe(true);
    expect(page.root.classList.contains('chip--standard')).toBe(true);

    // Should render slot for content
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  describe('size variations', () => {
    it('should render with standard size', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip size="standard">Standard</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--standard')).toBe(true);
      expect(page.root.classList.contains('chip--tall')).toBe(false);
    });

    it('should render with tall size', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip size="tall">Tall</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--tall')).toBe(true);
      expect(page.root.classList.contains('chip--standard')).toBe(false);
    });
  });

  describe('variant styles', () => {
    it('should render with default variant', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip variant="default">Default</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--default')).toBe(true);
    });

    it('should render with primary variant', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip variant="primary">Primary</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--primary')).toBe(true);
    });

    it('should render with watermelon variant', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip variant="watermelon">Watermelon</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--watermelon')).toBe(true);
    });
  });

  describe('state variations', () => {
    it('should render with danger state', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip danger="true">Danger</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--danger')).toBe(true);
      expect(page.root.classList.contains('chip--default')).toBe(false);
    });

    it('should render with filter state', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip filter="true">Filter</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--filter')).toBe(true);
    });

    it('should render with disabled state', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip disabled="true">Disabled</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--default')).toBe(true);
    });

    it('should prioritize disabled over other states', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip disabled="true" danger="true" variant="primary">Disabled</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--default')).toBe(true);
      expect(page.root.classList.contains('chip--danger')).toBe(false);
      expect(page.root.classList.contains('chip--primary')).toBe(false);
    });

    it('should prioritize danger over variant', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip danger="true" variant="primary">Danger</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--danger')).toBe(true);
      expect(page.root.classList.contains('chip--primary')).toBe(false);
    });

    it('should prioritize filter over variant', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip filter="true" variant="primary">Filter</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--filter')).toBe(true);
      expect(page.root.classList.contains('chip--primary')).toBe(false);
    });
  });

  describe('clickable functionality', () => {
    it('should apply clickable class when clickable is true', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip clickable="true">Clickable</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--click')).toBe(true);
    });

    it('should not apply clickable class when clickable is false', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip clickable="false">Not Clickable</bds-chip>`,
      });

      expect(page.root.classList.contains('chip--click')).toBe(false);
    });
  });

  describe('icon functionality', () => {
    it('should render with icon when icon prop is provided', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip icon="user">With Icon</bds-chip>`,
      });

      const iconContainer = page.root.shadowRoot.querySelector('.chip__icon');
      expect(iconContainer).toBeTruthy();

      const iconElement = page.root.shadowRoot.querySelector('bds-icon');
      expect(iconElement).toBeTruthy();
      expect(iconElement.getAttribute('name')).toBe('user');
      expect(iconElement.getAttribute('size')).toBe('x-small');
    });

    it('should not render icon container when icon prop is not provided', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip>No Icon</bds-chip>`,
      });

      const iconContainer = page.root.shadowRoot.querySelector('.chip__icon');
      expect(iconContainer).toBeFalsy();
    });
  });

  describe('deletable functionality', () => {
    it('should render delete button when deletable is true', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip deletable="true">Deletable</bds-chip>`,
      });

      const deleteContainer = page.root.shadowRoot.querySelector('.chip__delete');
      expect(deleteContainer).toBeTruthy();

      const deleteIcon = page.root.shadowRoot.querySelector('.chip__delete bds-icon');
      expect(deleteIcon).toBeTruthy();
      expect(deleteIcon.getAttribute('name')).toBe('error');
      expect(deleteIcon.getAttribute('size')).toBe('x-small');
      expect(deleteIcon.getAttribute('theme')).toBe('solid');
    });

    it('should not render delete button when deletable is false', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip deletable="false">Not Deletable</bds-chip>`,
      });

      const deleteContainer = page.root.shadowRoot.querySelector('.chip__delete');
      expect(deleteContainer).toBeFalsy();
    });

    it('should emit bdsDelete event when delete button is clicked', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip id="test-chip" deletable="true">Deletable</bds-chip>`,
      });

      const deleteHandler = jest.fn();
      page.root.addEventListener('bdsDelete', deleteHandler);

      const deleteButton = page.root.shadowRoot.querySelector('.chip__delete');
      deleteButton.click();

      expect(deleteHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { id: 'test-chip' }
        })
      );
    });

    it('should not emit bdsDelete event when chip is disabled', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip id="test-chip" deletable="true" disabled="true">Disabled Deletable</bds-chip>`,
      });

      const deleteHandler = jest.fn();
      page.root.addEventListener('bdsDelete', deleteHandler);

      const deleteButton = page.root.shadowRoot.querySelector('.chip__delete');
      deleteButton.click();

      expect(deleteHandler).not.toHaveBeenCalled();
    });

    it('should not emit bdsDelete event when chip is not deletable', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip id="test-chip">Not Deletable</bds-chip>`,
      });

      const deleteHandler = jest.fn();
      page.root.addEventListener('bdsDelete', deleteHandler);

      // Try to call the delete handler directly
      const mockEvent = { preventDefault: jest.fn() };
      page.rootInstance.handleClickDelete(mockEvent);

      expect(deleteHandler).not.toHaveBeenCalled();
    });
  });

  describe('content rendering', () => {
    it('should render slotted content', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip><span>Custom Content</span></bds-chip>`,
      });

      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });

    it('should render with icon and deletable together', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip icon="user" deletable="true">Full Featured</bds-chip>`,
      });

      const iconContainer = page.root.shadowRoot.querySelector('.chip__icon');
      const deleteContainer = page.root.shadowRoot.querySelector('.chip__delete');
      const slot = page.root.shadowRoot.querySelector('slot');

      expect(iconContainer).toBeTruthy();
      expect(deleteContainer).toBeTruthy();
      expect(slot).toBeTruthy();
    });
  });

  describe('class methods', () => {
    it('should return correct click class from getClickClass method', () => {
      const component = new Chip();
      
      component.clickable = true;
      expect(component.getClickClass()).toEqual({ 'chip--click': true });
      
      component.clickable = false;
      expect(component.getClickClass()).toEqual({});
    });

    it('should return correct size class from getSizeClass method', () => {
      const component = new Chip();
      
      component.size = 'standard';
      expect(component.getSizeClass()).toEqual({ 'chip--standard': true });
      
      component.size = 'tall';
      expect(component.getSizeClass()).toEqual({ 'chip--tall': true });
    });

    it('should return correct state class from getStateClass method', () => {
      const component = new Chip();
      
      // Test disabled state (highest priority)
      component.disabled = true;
      component.danger = true;
      component.variant = 'primary';
      expect(component.getStateClass()).toEqual({ 'chip--default': true });
      
      // Test danger state
      component.disabled = false;
      component.danger = true;
      expect(component.getStateClass()).toEqual({ 'chip--danger': true });
      
      // Test filter state
      component.danger = false;
      component.filter = true;
      expect(component.getStateClass()).toEqual({ 'chip--filter': true });
      
      // Test primary variant
      component.filter = false;
      component.variant = 'primary';
      expect(component.getStateClass()).toEqual({ 'chip--primary': true });
      
      // Test watermelon variant
      component.variant = 'watermelon';
      expect(component.getStateClass()).toEqual({ 'chip--watermelon': true });
      
      // Test default
      component.variant = 'default';
      expect(component.getStateClass()).toEqual({ 'chip--default': true });
    });
  });

  describe('edge cases and property changes', () => {
    it('should handle property changes after initial render', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip>Test</bds-chip>`,
      });

      // Change properties
      page.root.size = 'tall';
      page.root.variant = 'primary';
      page.root.clickable = true;
      page.root.deletable = true;
      page.root.icon = 'star';
      await page.waitForChanges();

      // Check that changes are reflected
      expect(page.root.classList.contains('chip--tall')).toBe(true);
      expect(page.root.classList.contains('chip--primary')).toBe(true);
      expect(page.root.classList.contains('chip--click')).toBe(true);
      expect(page.root.shadowRoot.querySelector('.chip__icon')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.chip__delete')).toBeTruthy();
    });

    it('should handle empty or undefined icon gracefully', async () => {
      const page = await newSpecPage({
        components: [Chip],
        html: `<bds-chip icon="">Empty Icon</bds-chip>`,
      });

      const iconContainer = page.root.shadowRoot.querySelector('.chip__icon');
      expect(iconContainer).toBeFalsy();
    });
  });
});
