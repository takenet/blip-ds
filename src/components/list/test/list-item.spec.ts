import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from '../list-item';

describe('bds-list-item', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ListItem],
      html: '<bds-list-item></bds-list-item>',
    });
    component = page.rootInstance;
  });

  it('should create and render', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toBeTruthy();
  });

  describe('Props', () => {
    it('should render with default props', async () => {
      expect(component.checked).toBe(false);
      expect(component.typeList).toBeNull();
      expect(component.avatarName).toBeNull();
      expect(component.avatarThumbnail).toBeNull();
      expect(component.icon).toBeNull();
      expect(component.value).toBeNull();
      expect(component.text).toBeNull();
      expect(component.secondaryText).toBeNull();
      expect(component.chips).toEqual([]);
      expect(component.actionsButtons).toEqual([]);
      expect(component.clickable).toBe(false);
      expect(component.active).toBe(false);
      expect(component.borderRadius).toBe(false);
      expect(component.size).toBe('standard');
      expect(component.dataTest).toBeNull();
    });

    it('should render with checked state', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item checked></bds-list-item>',
      });
      
      expect(page.rootInstance.checked).toBe(true);
    });

    it('should render with different type lists', async () => {
      // Checkbox
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="checkbox"></bds-list-item>',
      });
      expect(page.rootInstance.typeList).toBe('checkbox');

      // Radio
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="radio"></bds-list-item>',
      });
      expect(page.rootInstance.typeList).toBe('radio');

      // Switch
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="switch"></bds-list-item>',
      });
      expect(page.rootInstance.typeList).toBe('switch');

      // Default
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="default"></bds-list-item>',
      });
      expect(page.rootInstance.typeList).toBe('default');
    });

    it('should render with avatar props', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item avatar-name="John" avatar-thumbnail="thumb.jpg"></bds-list-item>',
      });
      
      expect(page.rootInstance.avatarName).toBe('John');
      expect(page.rootInstance.avatarThumbnail).toBe('thumb.jpg');
    });

    it('should render with icon prop', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item icon="settings"></bds-list-item>',
      });
      
      expect(page.rootInstance.icon).toBe('settings');
    });

    it('should render with text props', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item value="01" text="Main Text" secondary-text="Secondary Text"></bds-list-item>',
      });
      
      expect(page.rootInstance.value).toBe('01');
      expect(page.rootInstance.text).toBe('Main Text');
      expect(page.rootInstance.secondaryText).toBe('Secondary Text');
    });

    it('should render with chips as string', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item chips=\'["chip1", "chip2"]\'></bds-list-item>',
      });
      
      expect(page.rootInstance.chips).toBe('["chip1", "chip2"]');
      expect(page.rootInstance.internalChips).toEqual(['chip1', 'chip2']);
    });

    it('should render with actions buttons as string', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item actions-buttons=\'["copy", "edit"]\'></bds-list-item>',
      });
      
      expect(page.rootInstance.actionsButtons).toBe('["copy", "edit"]');
      expect(page.rootInstance.internalActionsButtons).toEqual(['copy', 'edit']);
    });

    it('should render with boolean props', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item clickable active border-radius></bds-list-item>',
      });
      
      expect(page.rootInstance.clickable).toBe(true);
      expect(page.rootInstance.active).toBe(true);
      expect(page.rootInstance.borderRadius).toBe(true);
    });

    it('should render with size variations', async () => {
      // Tall
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item size="tall"></bds-list-item>',
      });
      expect(page.rootInstance.size).toBe('tall');

      // Short
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item size="short"></bds-list-item>',
      });
      expect(page.rootInstance.size).toBe('short');
    });

    it('should render with data-test prop', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item data-test="list-item-test"></bds-list-item>',
      });
      
      expect(page.rootInstance.dataTest).toBe('list-item-test');
    });
  });

  describe('Rendering', () => {
    it('should render list item container with correct classes', async () => {
      const listItem = page.root.shadowRoot.querySelector('.list_item');
      expect(listItem).toBeTruthy();
      expect(listItem.classList.contains('list_item_standard')).toBe(true);
      expect(listItem.classList.contains('clickable')).toBe(false);
      expect(listItem.classList.contains('border_radius')).toBe(false);
    });

    it('should apply clickable class when clickable or has input type', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item clickable></bds-list-item>',
      });
      
      const listItem = page.root.shadowRoot.querySelector('.list_item');
      expect(listItem.classList.contains('clickable')).toBe(true);
    });

    it('should apply border radius class when enabled', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item border-radius></bds-list-item>',
      });
      
      const listItem = page.root.shadowRoot.querySelector('.list_item');
      expect(listItem.classList.contains('border_radius')).toBe(true);
    });

    it('should apply size classes correctly', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item size="tall"></bds-list-item>',
      });
      
      const listItem = page.root.shadowRoot.querySelector('.list_item');
      expect(listItem.classList.contains('list_item_tall')).toBe(true);
    });

    it('should render active indicator when active', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item active></bds-list-item>',
      });
      
      const activeIndicator = page.root.shadowRoot.querySelector('.active');
      expect(activeIndicator).toBeTruthy();
    });

    it('should not render active indicator when not active', async () => {
      const activeIndicator = page.root.shadowRoot.querySelector('.active');
      expect(activeIndicator).toBeFalsy();
    });

    it('should render checkbox for checkbox type', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="checkbox"></bds-list-item>',
      });
      
      const inputList = page.root.shadowRoot.querySelector('.input_list');
      const checkbox = page.root.shadowRoot.querySelector('bds-checkbox');
      expect(inputList).toBeTruthy();
      expect(checkbox).toBeTruthy();
    });

    it('should render radio for radio type', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="radio" value="01"></bds-list-item>',
      });
      
      const inputList = page.root.shadowRoot.querySelector('.input_list');
      const radio = page.root.shadowRoot.querySelector('bds-radio');
      expect(inputList).toBeTruthy();
      expect(radio).toBeTruthy();
      expect(radio.getAttribute('value')).toBe('01');
    });

    it('should render switch for switch type', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="switch"></bds-list-item>',
      });
      
      const switchElement = page.root.shadowRoot.querySelector('bds-switch');
      expect(switchElement).toBeTruthy();
    });

    it('should render avatar when avatar props provided', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item avatar-name="John"></bds-list-item>',
      });
      
      const avatar = page.root.shadowRoot.querySelector('bds-avatar');
      expect(avatar).toBeTruthy();
      expect(avatar.getAttribute('name')).toBe('John');
      expect(avatar.getAttribute('size')).toBe('extra-small');
    });

    it('should render icon when icon prop provided and no avatar', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item icon="settings"></bds-list-item>',
      });
      
      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('settings');
      expect(icon.getAttribute('size')).toBe('medium');
      expect(icon.getAttribute('color')).toBe('inherit');
      expect(icon.getAttribute('theme')).toBe('outline');
    });

    it('should render active icon when active', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item icon="settings" active></bds-list-item>',
      });
      
      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('theme')).toBe('solid');
      expect(icon.classList.contains('icon-item-active')).toBe(true);
    });

    it('should render text content when provided', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item text="Main Text" secondary-text="Secondary Text"></bds-list-item>',
      });
      
      const contentItem = page.root.shadowRoot.querySelector('.content-item');
      const titleItem = page.root.shadowRoot.querySelector('.title-item');
      const subtitleItem = page.root.shadowRoot.querySelector('.subtitle-item');
      
      expect(contentItem).toBeTruthy();
      expect(titleItem).toBeTruthy();
      expect(subtitleItem).toBeTruthy();
      expect(titleItem.textContent.trim()).toBe('Main Text');
      expect(subtitleItem.textContent.trim()).toBe('Secondary Text');
    });

    it('should render bold text when active', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item text="Main Text" active></bds-list-item>',
      });
      
      const titleItem = page.root.shadowRoot.querySelector('.title-item');
      expect(titleItem.getAttribute('bold')).toBe('bold');
    });

    it('should render slot for content', async () => {
      const slot = page.root.shadowRoot.querySelector('.content-slot slot');
      expect(slot).toBeTruthy();
    });

    it('should render content area and action area slots', async () => {
      const contentAreaSlot = page.root.shadowRoot.querySelector('[name="content-area"]');
      const actionAreaSlot = page.root.shadowRoot.querySelector('[name="action-area"]');
      
      expect(contentAreaSlot).toBeTruthy();
      expect(actionAreaSlot).toBeTruthy();
    });

    it('should apply data-test attribute', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item data-test="test-item"></bds-list-item>',
      });
      
      const listItem = page.root.shadowRoot.querySelector('.list_item');
      expect(listItem.getAttribute('data-test')).toBe('test-item');
    });
  });

  describe('Chips Handling', () => {
    it('should parse chips from string', async () => {
      component.chips = '["chip1", "chip2"]';
      component.chipsChanged();
      
      expect(component.internalChips).toEqual(['chip1', 'chip2']);
    });

    it('should handle chips as array', async () => {
      component.chips = ['chip1', 'chip2'];
      component.chipsChanged();
      
      expect(component.internalChips).toEqual(['chip1', 'chip2']);
    });

    it('should handle empty chips', async () => {
      component.chips = null;
      component.chipsChanged();
      
      expect(component.internalChips).toEqual([]);
    });

    it('should render chips correctly', async () => {
      component.internalChips = ['chip1', 'chip2'];
      await page.waitForChanges();
      
      const chipsContainer = page.root.shadowRoot.querySelector('.internal-chips');
      expect(chipsContainer).toBeTruthy();
    });

    it('should truncate long chip text with tooltip', async () => {
      const longChip = 'a'.repeat(35); // Longer than 30 char limit
      component.internalChips = [longChip];
      await page.waitForChanges();
      
      const tooltip = page.root.shadowRoot.querySelector('bds-tooltip');
      expect(tooltip).toBeTruthy();
      expect(tooltip.getAttribute('tooltip-text')).toBe(longChip);
    });
  });

  describe('Action Buttons Handling', () => {
    it('should parse action buttons from string', async () => {
      component.actionsButtons = '["copy", "edit"]';
      component.actionsButtonsChanged();
      
      expect(component.internalActionsButtons).toEqual(['copy', 'edit']);
    });

    it('should handle action buttons as array', async () => {
      component.actionsButtons = ['copy', 'edit'];
      component.actionsButtonsChanged();
      
      expect(component.internalActionsButtons).toEqual(['copy', 'edit']);
    });

    it('should handle empty action buttons', async () => {
      component.actionsButtons = null;
      component.actionsButtonsChanged();
      
      expect(component.internalActionsButtons).toEqual([]);
    });

    it('should render action buttons correctly', async () => {
      component.internalActionsButtons = ['copy', 'edit'];
      await page.waitForChanges();
      
      const actionsContainer = page.root.shadowRoot.querySelector('.internal-actions-buttons');
      expect(actionsContainer).toBeTruthy();
    });
  });

  describe('Events', () => {
    it('should emit bdsChecked when checked state changes', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsChecked', spy);
      
      component.value = '01';
      component.text = 'Test Text';
      component.secondaryText = 'Test Secondary';
      component.typeList = 'checkbox';
      
      component.checked = true;
      component.checkedChanged(true);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            value: '01',
            text: 'Test Text',
            secondaryText: 'Test Secondary',
            typeList: 'checkbox',
            checked: true
          }
        })
      );
    });

    it('should emit bdsClickActionButtom when action button clicked', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsClickActionButtom', spy);
      
      component.value = '01';
      
      const mockEvent = {
        composedPath: () => [{ tagName: 'BDS-BUTTON-ICON' }]
      };
      
      component.clickActionButtons('copy', mockEvent);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            value: '01',
            icon: 'copy',
            elementButton: { tagName: 'BDS-BUTTON-ICON' }
          }
        })
      );
    });
  });

  describe('Click Handler', () => {
    it('should toggle checked state for non-radio types', async () => {
      component.typeList = 'checkbox';
      component.checked = false;
      
      component.handler();
      
      expect(component.checked).toBe(true);
      
      component.handler();
      
      expect(component.checked).toBe(false);
    });

    it('should set checked to true for radio type', async () => {
      component.typeList = 'radio';
      component.checked = false;
      
      component.handler();
      
      expect(component.checked).toBe(true);
      
      // Should remain true for radio
      component.handler();
      
      expect(component.checked).toBe(true);
    });
  });

  describe('Component Lifecycle', () => {
    it('should initialize slot detection on componentWillLoad', async () => {
      // Mock querySelector to return elements for slots
      const mockActionSlot = document.createElement('div');
      mockActionSlot.setAttribute('slot', 'action-area');
      const mockContentSlot = document.createElement('div');
      mockContentSlot.setAttribute('slot', 'content-area');
      
      jest.spyOn(component.hostElement, 'querySelector')
        .mockImplementation((selector) => {
          if (selector === '[slot="action-area"]') return mockActionSlot;
          if (selector === '[slot="content-area"]') return mockContentSlot;
          return null;
        });
      
      const chipsChangedSpy = jest.spyOn(component, 'chipsChanged');
      const actionsButtonsChangedSpy = jest.spyOn(component, 'actionsButtonsChanged');
      
      component.componentWillLoad();
      
      expect(component.hasActionAreaSlot).toBe(true);
      expect(component.hasContentAreaSlot).toBe(true);
      expect(chipsChangedSpy).toHaveBeenCalled();
      expect(actionsButtonsChangedSpy).toHaveBeenCalled();
    });

    it('should detect no slots when elements not present', async () => {
      jest.spyOn(component.hostElement, 'querySelector').mockReturnValue(null);
      
      component.componentWillLoad();
      
      expect(component.hasActionAreaSlot).toBe(false);
      expect(component.hasContentAreaSlot).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should handle null/undefined values gracefully', async () => {
      component.chips = null;
      component.actionsButtons = null;
      component.text = null;
      component.secondaryText = null;
      
      expect(() => {
        component.chipsChanged();
        component.actionsButtonsChanged();
      }).not.toThrow();
      
      expect(component.internalChips).toEqual([]);
      expect(component.internalActionsButtons).toEqual([]);
    });

    it('should handle invalid JSON in chips', async () => {
      component.chips = 'invalid-json';
      
      expect(() => component.chipsChanged()).toThrow();
    });

    it('should handle invalid JSON in action buttons', async () => {
      component.actionsButtons = 'invalid-json';
      
      expect(() => component.actionsButtonsChanged()).toThrow();
    });

    it('should handle empty arrays', async () => {
      component.chips = [];
      component.actionsButtons = [];
      
      component.chipsChanged();
      component.actionsButtonsChanged();
      
      expect(component.internalChips).toEqual([]);
      expect(component.internalActionsButtons).toEqual([]);
    });

    it('should not render action area for input types', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="checkbox"></bds-list-item>',
      });
      
      const actionArea = page.root.shadowRoot.querySelector('.action-area');
      expect(actionArea).toBeFalsy();
    });

    it('should render action area for default and null types', async () => {
      page = await newSpecPage({
        components: [ListItem],
        html: '<bds-list-item type-list="default"></bds-list-item>',
      });
      
      const actionArea = page.root.shadowRoot.querySelector('.action-area');
      expect(actionArea).toBeTruthy();
    });
  });
});
