import { newSpecPage } from '@stencil/core/testing';

// Mock the getScrollParent function to avoid DOM issues in tests
jest.mock('../../../utils/position-element', () => ({
  ...jest.requireActual('../../../utils/position-element'),
  getScrollParent: jest.fn((node) => {
    if (!node) return null;
    // Return a mock element with classList
    return {
      classList: {
        contains: jest.fn(() => false)
      },
      tagName: 'BODY'
    };
  })
}));

import { SelectOption } from '../../select-option/select-option';
import { BdsAutocomplete } from '../autocomplete';
import { AutocompleteOption } from '../autocomplete-select-interface';

describe('bds-autocomplete', () => {
  const defaultOptions: AutocompleteOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const optionsWithStatus: AutocompleteOption[] = [
    { value: 'active', label: 'Active Option', status: 'active' },
    { value: 'inactive', label: 'Inactive Option', status: 'inactive' },
    { value: 'pending', label: 'Pending Option', status: 'pending' }
  ];

  describe('component creation and basic rendering', () => {
    it('should render with default properties', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      expect(page.root).toBeTruthy();
      expect(page.rootInstance).toBeInstanceOf(BdsAutocomplete);
    });

    it('should render with host element attributes', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete disabled="true"></bds-autocomplete>',
      });

      expect(page.root.getAttribute('aria-disabled')).toBe('true');
    });

    it('should have default state values', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      expect(page.rootInstance.isOpen).toBe(false);
      expect(page.rootInstance.isPressed).toBe(false);
      expect(page.rootInstance.text).toBe('');
      expect(page.rootInstance.selectionType).toBe('single');
      expect(page.rootInstance.optionsPosition).toBe('auto');
      expect(page.rootInstance.searchOnlyTitle).toBe(true);
      expect(page.rootInstance.disabled).toBe(false);
      expect(page.rootInstance.danger).toBe(false);
      expect(page.rootInstance.success).toBe(false);
    });
  });

  describe('options handling', () => {
    it('should parse string options correctly', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}'></bds-autocomplete>`,
      });

      expect(page.rootInstance.internalOptions).toEqual(defaultOptions);
    });

    it('should handle array options', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      page.rootInstance.options = defaultOptions;
      await page.waitForChanges();

      expect(page.rootInstance.internalOptions).toEqual(defaultOptions);
    });

    it('should handle invalid JSON options gracefully', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete options="invalid json"></bds-autocomplete>',
      });

      expect(page.rootInstance.internalOptions).toEqual([]);
    });

    it('should render options when provided', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}'></bds-autocomplete>`,
      });

      // Trigger dropdown open
      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
      expect(options.length).toBe(3);
    });
  });

  describe('selection behavior', () => {
    it('should handle single selection mode', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}' selection-type="single"></bds-autocomplete>`,
      });

      expect(page.rootInstance.selectionType).toBe('single');

      // Open dropdown and check option types
      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
      options.forEach(option => {
        expect(option.getAttribute('type-option')).toBe('default');
      });
    });

    it('should handle multiple selection mode', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}' selection-type="multiple"></bds-autocomplete>`,
      });

      expect(page.rootInstance.selectionType).toBe('multiple');

      // Open dropdown and check option types
      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
      options.forEach(option => {
        expect(option.getAttribute('type-option')).toBe('checkbox');
      });
    });

    it('should show "Select All" checkbox in multiple mode when selectedAll is true', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}' selection-type="multiple" selected-all="true"></bds-autocomplete>`,
      });

      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const selectAllCheckbox = page.root.shadowRoot.querySelector('bds-checkbox.select-all');
      expect(selectAllCheckbox).toBeTruthy();
    });

    it('should update value and emit events on value change', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      const changeHandler = jest.fn();
      page.root.addEventListener('bdsChange', changeHandler);

      page.rootInstance.value = 'test-value';
      await page.waitForChanges();

      expect(changeHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { value: 'test-value' }
        })
      );
    });
  });

  describe('input states and styling', () => {
    it('should apply danger state correctly', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete danger="true"></bds-autocomplete>',
      });

      const inputWrapper = page.root.shadowRoot.querySelector('.input');
      expect(inputWrapper.classList.contains('input--state-danger')).toBe(true);
      expect(inputWrapper.classList.contains('input--state-primary')).toBe(false);
    });

    it('should apply success state correctly', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete success="true"></bds-autocomplete>',
      });

      const inputWrapper = page.root.shadowRoot.querySelector('.input');
      expect(inputWrapper.classList.contains('input--state-success')).toBe(true);
    });

    it('should apply disabled state correctly', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete disabled="true"></bds-autocomplete>',
      });

      const inputWrapper = page.root.shadowRoot.querySelector('.input');
      const nativeInput = page.root.shadowRoot.querySelector('input');

      expect(inputWrapper.classList.contains('input--state-disabled')).toBe(true);
      expect(nativeInput.disabled).toBe(true);
    });

    it('should apply label state when label is provided', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete label="Test Label"></bds-autocomplete>',
      });

      const inputWrapper = page.root.shadowRoot.querySelector('.input');
      expect(inputWrapper.classList.contains('input--label')).toBe(true);
    });

    it('should apply pressed state correctly', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      page.rootInstance.isPressed = true;
      await page.waitForChanges();

      const inputWrapper = page.root.shadowRoot.querySelector('.input');
      expect(inputWrapper.classList.contains('input--pressed')).toBe(true);
    });
  });

  describe('label and placeholder', () => {
    it('should render label when provided', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete label="Test Label"></bds-autocomplete>',
      });

      const labelElement = page.root.shadowRoot.querySelector('label bds-typo');
      expect(labelElement).toBeTruthy();
      expect(labelElement.textContent.trim()).toBe('Test Label');
    });

    it('should set placeholder on native input', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete placeholder="Enter text..."></bds-autocomplete>',
      });

      const nativeInput = page.root.shadowRoot.querySelector('input');
      expect(nativeInput.placeholder).toBe('Enter text...');
    });

    it('should update placeholder state in multiple selection mode', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete placeholder="Select options..." selection-type="multiple"></bds-autocomplete>',
      });

      expect(page.rootInstance.placeholderState).toBe('Select options...');

      // Simulate having checked options
      page.rootInstance.checkedOptions = [{ value: 'test', label: 'Test' }];
      await page.waitForChanges();

      expect(page.rootInstance.placeholderState).toBe('');
    });
  });

  describe('icon rendering', () => {
    it('should render icon when provided', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete icon="search"></bds-autocomplete>',
      });

      const iconElement = page.root.shadowRoot.querySelector('.input__icon bds-icon');
      expect(iconElement).toBeTruthy();
      expect(iconElement.getAttribute('name')).toBe('search');
    });

    it('should render dropdown arrow icon', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      const dropdownIcons = page.root.shadowRoot.querySelectorAll('.select__icon bds-icon');
      expect(dropdownIcons.length).toBe(2); // Clear icon and dropdown arrow
    });

    it('should show/hide clear icon based on clearIconOnFocus and focus state', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete clear-icon-on-focus="true" value="test"></bds-autocomplete>',
      });

      const clearIcon = page.root.shadowRoot.querySelector('.select__icon bds-icon[name="error"]');
      expect(clearIcon.classList.contains('icon-hidden')).toBe(true);

      page.rootInstance.isFocused = true;
      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      expect(clearIcon.classList.contains('icon-hidden')).toBe(false);
    });
  });

  describe('message rendering', () => {
    it('should render helper message when provided', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete helper-message="This is a helper message"></bds-autocomplete>',
      });

      // Trigger renderMessage by ensuring the component has rendered
      await page.waitForChanges();
      const helperMessage = page.root.shadowRoot.querySelector('.input__message bds-typo');
      expect(helperMessage).toBeTruthy();
      expect(helperMessage.textContent.trim()).toBe('This is a helper message');
    });

    it('should render error message when provided', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete error-message="This is an error" danger="true"></bds-autocomplete>',
      });

      await page.waitForChanges();
      const errorMessage = page.root.shadowRoot.querySelector('.input__message bds-typo');
      expect(errorMessage).toBeTruthy();
      expect(errorMessage.textContent.trim()).toBe('This is an error');
    });

    it('should render success message when provided', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete success-message="Success!" success="true"></bds-autocomplete>',
      });

      await page.waitForChanges();
      const successMessage = page.root.shadowRoot.querySelector('.input__message bds-typo');
      expect(successMessage).toBeTruthy();
      expect(successMessage.textContent.trim()).toBe('Success!');
    });
  });

  describe('dropdown behavior', () => {
    it('should show dropdown when isOpen is true', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}'></bds-autocomplete>`,
      });

      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const dropdown = page.root.shadowRoot.querySelector('.select__options');
      expect(dropdown).toBeTruthy();
      expect(dropdown.classList.contains('select__options--open')).toBe(true);
    });

    it('should hide dropdown when isOpen is false', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}'></bds-autocomplete>`,
      });

      page.rootInstance.isOpen = false;
      await page.waitForChanges();

      const dropdown = page.root.shadowRoot.querySelector('.select__options');
      expect(dropdown).toBeTruthy();
      expect(dropdown.classList.contains('select__options--open')).toBe(false);
    });

    it('should render selection title when provided in multiple mode', async () => {
      const optionsString = JSON.stringify(defaultOptions);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}' selection-type="multiple" selection-title="Choose Options"></bds-autocomplete>`,
      });

      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const selectionTitle = page.root.shadowRoot.querySelector('.selection-title');
      expect(selectionTitle).toBeTruthy();
      expect(selectionTitle.textContent.trim()).toBe('Choose Options');
    });
  });

  describe('data attributes and testing', () => {
    it('should set data-test attribute on input', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete data-test="autocomplete-test"></bds-autocomplete>',
      });

      const nativeInput = page.root.shadowRoot.querySelector('input');
      expect(nativeInput.getAttribute('data-test')).toBe('autocomplete-test');
    });
  });

  describe('loading state', () => {
    it('should handle loading state', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete loading="true"></bds-autocomplete>',
      });

      expect(page.rootInstance.loading).toBe(true);
    });
  });

  describe('edge cases and error handling', () => {
    it('should handle undefined options gracefully', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      page.rootInstance.options = undefined;
      await page.waitForChanges();

      expect(page.rootInstance.internalOptions).toBeUndefined();
    });

    it('should handle null value correctly', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      page.rootInstance.value = null;
      await page.waitForChanges();

      expect(page.rootInstance.value).toBeNull();
    });

    it('should handle empty options array', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete options="[]"></bds-autocomplete>',
      });

      expect(page.rootInstance.internalOptions).toEqual([]);

      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
      expect(options.length).toBe(0);
    });
  });

  describe('method testing', () => {
    it('should have cleanMultipleSelection method', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete selection-type="multiple"></bds-autocomplete>',
      });

      expect(typeof page.rootInstance.cleanMultipleSelection).toBe('function');
    });
  });

  describe('complex option scenarios', () => {
    it('should handle options with status', async () => {
      const optionsString = JSON.stringify(optionsWithStatus);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}'></bds-autocomplete>`,
      });

      expect(page.rootInstance.internalOptions).toEqual(optionsWithStatus);

      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
      expect(options[0].getAttribute('status')).toBe('active');
      expect(options[1].getAttribute('status')).toBe('inactive');
      expect(options[2].getAttribute('status')).toBe('pending');
    });

    it('should handle options with bulkOption', async () => {
      const bulkOptions = [
        { value: 'bulk1', label: 'Bulk 1', bulkOption: 'Bulk Text 1' },
        { value: 'bulk2', label: 'Bulk 2', bulkOption: 'Bulk Text 2' }
      ];

      const page = await newSpecPage({
        components: [BdsAutocomplete, SelectOption],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      page.rootInstance.options = bulkOptions;
      await page.waitForChanges();

      page.rootInstance.isOpen = true;
      await page.waitForChanges();

      const options = page.root.shadowRoot.querySelectorAll('bds-select-option');

      // Check that the bulkOption prop is passed correctly
      expect(options[0].bulkOption).toBe('Bulk Text 1');
      expect(options[1].bulkOption).toBe('Bulk Text 2');
    });
  });

  describe('event handling', () => {
    it('should emit bdsInput event on input change', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      const inputHandler = jest.fn();
      page.root.addEventListener('bdsInput', inputHandler);

      const nativeInput = page.root.shadowRoot.querySelector('input');
      const inputEvent = new Event('input', { bubbles: true });
      Object.defineProperty(inputEvent, 'target', { value: { value: 'test input' } });

      nativeInput.dispatchEvent(inputEvent);
      await page.waitForChanges();

      expect(inputHandler).toHaveBeenCalled();
    });

    it('should emit bdsFocus event on focus', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      const focusHandler = jest.fn();
      page.root.addEventListener('bdsFocus', focusHandler);

      const nativeInput = page.root.shadowRoot.querySelector('input');
      nativeInput.dispatchEvent(new Event('focus'));
      await page.waitForChanges();

      expect(focusHandler).toHaveBeenCalled();
    });

    it('should emit bdsBlur event on blur', async () => {
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: '<bds-autocomplete></bds-autocomplete>',
      });

      const blurHandler = jest.fn();
      page.root.addEventListener('bdsBlur', blurHandler);

      const nativeInput = page.root.shadowRoot.querySelector('input');
      nativeInput.dispatchEvent(new Event('blur'));
      await page.waitForChanges();

      expect(blurHandler).toHaveBeenCalled();
    });

    it('should open dropdown when typing and dropdown is closed', async () => {
      const optionsString = JSON.stringify([
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}'></bds-autocomplete>`,
      });

      // Ensure dropdown is initially closed
      expect(page.rootInstance.isOpen).toBe(false);

      const nativeInput = page.root.shadowRoot.querySelector('input');
      nativeInput.value = 'test';
      const inputEvent = new Event('input', { bubbles: true });
      Object.defineProperty(inputEvent, 'target', { value: { value: 'test' } });

      nativeInput.dispatchEvent(inputEvent);
      await page.waitForChanges();

      // Dropdown should now be open after typing
      expect(page.rootInstance.isOpen).toBe(true);
    });

    it('should not open dropdown when typing if component is disabled', async () => {
      const optionsString = JSON.stringify([
        { value: 'option1', label: 'Option 1' }
      ]);
      const page = await newSpecPage({
        components: [BdsAutocomplete],
        html: `<bds-autocomplete options='${optionsString}' disabled="true"></bds-autocomplete>`,
      });

      expect(page.rootInstance.isOpen).toBe(false);

      const nativeInput = page.root.shadowRoot.querySelector('input');
      nativeInput.value = 'test';
      const inputEvent = new Event('input', { bubbles: true });
      Object.defineProperty(inputEvent, 'target', { value: { value: 'test' } });

      nativeInput.dispatchEvent(inputEvent);
      await page.waitForChanges();

      // Dropdown should remain closed when component is disabled
      expect(page.rootInstance.isOpen).toBe(false);
    });
  });
});
