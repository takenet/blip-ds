import { newSpecPage } from '@stencil/core/testing';

// Mock the position-element utility to avoid DOM issues in tests
jest.mock('../../../../utils/position-element', () => ({
  getScrollParent: jest.fn(() => null),
  positionAbsoluteElement: jest.fn(() => ({ x: 'bottom', y: 'bottom' })),
}));

// Mock validations utility functions
jest.mock('../../../../utils/validations', () => ({
  emailValidation: jest.fn((email: string) => !email.includes('@')),
  whitespaceValidation: jest.fn((value: string) => /\S/.test(value)),
}));

import { SelectChips } from '../select-chips';

describe('bds-select-chips', () => {
  it('should create component', () => {
    const component = new SelectChips();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new SelectChips();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  // Comprehensive unit tests start here
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    expect(page.root).toEqualHtml(`
      <bds-select-chips icon="" new-prefix="" options-position="auto">
        <mock:shadow-root>
          <div class="select" tabindex="0">
            <div class="element_input">
              <div class="input input--state-primary">
                <div class="input__container">
                  <div class="input__container__wrapper">
                    <input class="input__container__text" placeholder="" value="">
                  </div>
                </div>
                <div class="select__icon">
                  <bds-icon color="inherit" size="small"></bds-icon>
                </div>
              </div>
            </div>
            <div class="select__options select__options--position-bottom">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </bds-select-chips>
    `);
  });

  it('should render with label', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips label="Select Tags"></bds-select-chips>',
    });

    const label = page.root.shadowRoot.querySelector('.input__container__label');
    expect(label).toBeTruthy();
    const inputElement = page.root.shadowRoot.querySelector('.input');
    expect(inputElement).toHaveClass('input--label');
  });

  it('should render with icon', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips icon="search"></bds-select-chips>',
    });

    const icon = page.root.shadowRoot.querySelector('.input__icon');
    expect(icon).toBeTruthy();
  });

  it('should render with placeholder', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips placeholder="Select options"></bds-select-chips>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.placeholder).toBe('Select options');
  });

  it('should render with initial chips', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips chips=\'["tag1", "tag2"]\'></bds-select-chips>',
    });

    await page.waitForChanges();
    
    const chips = page.root.shadowRoot.querySelectorAll('bds-chip-clickable');
    expect(chips.length).toBe(2);
  });

  it('should render with options as string', async () => {
    const optionsString = '[{"value": "1", "label": "Option 1"}, {"value": "2", "label": "Option 2"}]';
    const page = await newSpecPage({
      components: [SelectChips],
      html: `<bds-select-chips options='${optionsString}'></bds-select-chips>`,
    });

    await page.waitForChanges();
    
    const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
    expect(options.length).toBe(2);
  });

  it('should render with options as array', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    page.rootInstance.options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ];
    
    await page.waitForChanges();
    
    const options = page.root.shadowRoot.querySelectorAll('bds-select-option');
    expect(options.length).toBe(2);
  });

  it('should handle disabled state', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips disabled></bds-select-chips>',
    });

    const elementInput = page.root.shadowRoot.querySelector('.element_input');
    expect(elementInput.getAttribute('aria-disabled')).toBe('true');
    const input = page.root.shadowRoot.querySelector('input');
    expect(input.disabled).toBe(true);
    expect(page.root.shadowRoot.querySelector('.input')).toHaveClass('input--state-disabled');
  });

  it('should handle danger state', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips danger error-message="Invalid selection"></bds-select-chips>',
    });

    expect(page.root.shadowRoot.querySelector('.input')).toHaveClass('input--state-danger');
    const message = page.root.shadowRoot.querySelector('.input__message--danger');
    expect(message).toBeTruthy();
  });

  it('should handle success state', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips success success-message="Valid selection"></bds-select-chips>',
    });

    expect(page.root.shadowRoot.querySelector('.input')).toHaveClass('input--state-success');
    const message = page.root.shadowRoot.querySelector('.input__message--success');
    expect(message).toBeTruthy();
    const successIcon = page.root.shadowRoot.querySelector('.icon-success');
    expect(successIcon).toBeTruthy();
  });

  it('should handle helper message', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips helper-message="Select multiple options"></bds-select-chips>',
    });

    const message = page.root.shadowRoot.querySelector('.input__message');
    expect(message).toBeTruthy();
    expect(message).not.toHaveClass('input__message--danger');
    expect(message).not.toHaveClass('input__message--success');
  });

  it('should handle maxlength prop', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips maxlength="10"></bds-select-chips>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.maxLength).toBe(10);
  });

  it('should handle custom height and max-height', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips height="60px" max-height="120px" chips=\'["tag1"]\'></bds-select-chips>',
    });

    await page.waitForChanges();
    
    const chipsContainer = page.root.shadowRoot.querySelector('.inside-input-left') as HTMLElement;
    expect(chipsContainer.style.height).toBe('60px');
    expect(chipsContainer.style.maxHeight).toBe('120px');
  });

  it('should handle input name', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips input-name="tags"></bds-select-chips>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.name).toBe('tags');
  });

  it('should handle data-test attribute', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips data-test="select-chips-test"></bds-select-chips>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.getAttribute('data-test')).toBe('select-chips-test');
  });

  it('should render tooltip for long chips', async () => {
    const longChip = 'a'.repeat(35); // Longer than 30 character limit
    const page = await newSpecPage({
      components: [SelectChips],
      html: `<bds-select-chips chips='["${longChip}"]'></bds-select-chips>`,
    });

    await page.waitForChanges();
    
    const tooltip = page.root.shadowRoot.querySelector('bds-tooltip');
    expect(tooltip).toBeTruthy();
    expect(tooltip.getAttribute('tooltip-text')).toBe(longChip);
  });

  // Method tests
  it('should validate chips correctly for text type', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips type="text"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['tag1', 'tag2'];
    
    const isValid = await component.isValid();
    expect(isValid).toBe(true);
  });

  it('should validate chips correctly for email type with valid emails', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips type="email"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['valid@email.com', 'another@test.com'];
    
    const isValid = await component.isValid();
    expect(isValid).toBe(true);
  });

  it('should validate chips correctly for email type with invalid emails', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips type="email"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['invalid-email', 'another@test.com'];
    
    const isValid = await component.isValid();
    expect(isValid).toBe(false);
  });

  it('should return chips through getChips method', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips chips=\'["tag1", "tag2", "tag3"]\'></bds-select-chips>',
    });

    const component = page.rootInstance;
    await page.waitForChanges();
    
    const chips = await component.getChips();
    expect(chips).toEqual(['tag1', 'tag2', 'tag3']);
  });

  it('should clear all chips through clear method', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips chips=\'["tag1", "tag2"]\'></bds-select-chips>',
    });

    const component = page.rootInstance;
    await page.waitForChanges();
    
    expect(component.internalChips.length).toBe(2);
    
    await component.clear();
    expect(component.internalChips.length).toBe(0);
    expect(component.value).toBe('');
  });

  it('should add chip through add method with value parameter', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.value = 'current-value';
    
    await component.add('new-chip');
    
    expect(component.internalChips).toContain('new-chip');
    expect(component.value).toBe('');
  });

  it('should add chip through add method using current value', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips value="chip-from-value"></bds-select-chips>',
    });

    const component = page.rootInstance;
    
    await component.add();
    
    expect(component.internalChips).toContain('chip-from-value');
    expect(component.value).toBe('');
  });

  it('should handle setFocus method', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    const input = page.root.shadowRoot.querySelector('input');
    
    // Mock focus method
    input.focus = jest.fn();
    
    await component.setFocus();
    
    expect(input.focus).toHaveBeenCalled();
  });

  it('should handle removeFocus method', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    const input = page.root.shadowRoot.querySelector('input');
    
    // Mock blur method
    input.blur = jest.fn();
    
    await component.removeFocus();
    
    expect(input.blur).toHaveBeenCalled();
  });

  // Event handling tests
  it('should emit bdsChange event when option is selected', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips options=\'[{"value": "1", "label": "Option 1"}]\'></bds-select-chips>',
    });

    const component = page.rootInstance;
    let changeEmitted = false;
    let emittedData = null;
    
    page.root.addEventListener('bdsChange', (event: CustomEvent) => {
      changeEmitted = true;
      emittedData = event.detail;
    });

    // Simulate option selection
    const mockEvent = {
      detail: { value: '1' }
    };
    
    await component.handler(mockEvent);
    
    expect(changeEmitted).toBe(true);
    expect(emittedData).toBeTruthy();
  });

  it('should emit bdsChangeChips event when chips change', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    let changeChipsEmitted = false;
    let emittedData = null;
    
    page.root.addEventListener('bdsChangeChips', (event: CustomEvent) => {
      changeChipsEmitted = true;
      emittedData = event.detail;
    });

    component.internalChips = ['tag1'];
    
    // Trigger change event manually
    component.bdsChangeChips.emit({ data: component.internalChips, value: null });
    
    expect(changeChipsEmitted).toBe(true);
    expect(emittedData.data).toEqual(['tag1']);
  });

  it('should emit bdsFocus event on focus', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    let focusEmitted = false;
    
    page.root.addEventListener('bdsFocus', () => {
      focusEmitted = true;
    });

    component.onFocus();
    
    expect(component.isPressed).toBe(true);
    expect(focusEmitted).toBe(true);
  });

  it('should emit bdsBlur event on blur', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    let blurEmitted = false;
    
    page.root.addEventListener('bdsBlur', () => {
      blurEmitted = true;
    });

    component.handleOnBlur();
    
    expect(component.isPressed).toBe(false);
    expect(blurEmitted).toBe(true);
  });

  it('should emit bdsSelectChipsInput event on input', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    let inputEmitted = false;
    
    page.root.addEventListener('bdsSelectChipsInput', () => {
      inputEmitted = true;
    });

    // Mock the native input element
    const mockInput = {
      value: 'test input'
    };
    component.nativeInput = mockInput as any;

    const mockEvent = {
      target: { value: 'test input' }
    } as any;

    component.onInput(mockEvent);
    
    expect(component.value).toBe('test input');
    expect(inputEmitted).toBe(true);
  });

  // Keyboard interaction tests
  it('should handle Enter key to add chip', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips value="newchip" can-add-new></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    
    const enterEvent = {
      key: 'Enter'
    } as KeyboardEvent;

    component.keyPressWrapper(enterEvent);
    
    expect(component.internalChips).toContain('newchip');
    expect(component.value).toBe('');
  });

  it('should handle ArrowDown key to open dropdown', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = false;
    
    const arrowDownEvent = {
      key: 'ArrowDown'
    } as KeyboardEvent;

    component.keyPressWrapper(arrowDownEvent);
    
    expect(component.isOpen).toBe(true);
  });

  it('should handle ArrowUp key to close dropdown', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = true;
    
    const arrowUpEvent = {
      key: 'ArrowUp'
    } as KeyboardEvent;

    component.keyPressWrapper(arrowUpEvent);
    
    expect(component.isOpen).toBe(false);
  });

  it('should handle Backspace key to remove last chip', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips chips=\'["tag1", "tag2"]\'></bds-select-chips>',
    });

    const component = page.rootInstance;
    await page.waitForChanges();
    
    component.value = '';
    
    const backspaceEvent = {
      key: 'Backspace'
    } as KeyboardEvent;

    component.keyPressWrapper(backspaceEvent);
    
    expect(component.internalChips.length).toBe(1);
    expect(component.internalChips).toEqual(['tag1']);
  });

  it('should handle disabled state in keyboard interactions', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips disabled></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = false;
    
    const arrowDownEvent = {
      key: 'ArrowDown'
    } as KeyboardEvent;

    component.keyPressWrapper(arrowDownEvent);
    
    expect(component.isOpen).toBe(false);
  });

  // Dropdown toggle tests
  it('should toggle dropdown when clicked', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    const initialState = component.isOpen;
    
    component.toggle();
    
    expect(component.isOpen).toBe(!initialState);
  });

  it('should not toggle dropdown when disabled', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips disabled></bds-select-chips>',
    });

    const component = page.rootInstance;
    const initialState = component.isOpen;
    
    component.toggle();
    
    expect(component.isOpen).toBe(initialState);
  });

  // Chip removal tests
  it('should remove chip when close button is clicked', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips chips=\'["tag1", "tag2", "tag3"]\'></bds-select-chips>',
    });

    const component = page.rootInstance;
    await page.waitForChanges();
    
    const mockEvent = {
      detail: { id: '1' } // Remove second chip (index 1)
    };
    
    component.removeChip(mockEvent);
    
    expect(component.internalChips.length).toBe(2);
    expect(component.internalChips).toEqual(['tag1', 'tag3']);
  });

  // Duplication handling tests
  it('should prevent duplicate chips when duplicated is false', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips duplicated="false"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['existing'];
    
    // Try to add the same chip
    component.setChip('existing');
    
    expect(component.internalChips.length).toBe(1);
    expect(component.internalChips).toEqual(['existing']);
  });

  it('should allow duplicate chips when duplicated is true', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips duplicated="true"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['existing'];
    
    // Try to add the same chip
    component.setChip('existing');
    
    expect(component.internalChips.length).toBe(2);
    expect(component.internalChips).toEqual(['existing', 'existing']);
  });

  // Delimiter handling tests
  it('should handle comma delimiters', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    
    // Mock the native input value
    const mockInput = {
      value: 'tag1,tag2,tag3'
    };
    component.nativeInput = mockInput as any;
    component.value = 'tag1,tag2,tag3';
    
    component.handleDelimiters();
    
    expect(component.internalChips).toContain('tag1');
    expect(component.internalChips).toContain('tag2');
    expect(component.internalChips).toContain('tag3');
  });

  it('should handle semicolon delimiters', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    
    // Mock the native input value
    const mockInput = {
      value: 'tag1;tag2;tag3'
    };
    component.nativeInput = mockInput as any;
    component.value = 'tag1;tag2;tag3';
    
    component.handleDelimiters();
    
    expect(component.internalChips).toContain('tag1');
    expect(component.internalChips).toContain('tag2');
    expect(component.internalChips).toContain('tag3');
  });

  // Window click handling tests
  it('should close dropdown when clicking outside', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = true;
    
    const mockEvent = {
      target: document.body // Click outside the component
    };
    
    component.handleWindow(mockEvent as any);
    
    expect(component.isOpen).toBe(false);
  });

  it('should not close dropdown when clicking inside', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = true;
    
    const mockEvent = {
      target: page.root
    };
    
    // Mock contains method
    page.root.contains = jest.fn().mockReturnValue(true);
    
    component.handleWindow(mockEvent as any);
    
    expect(component.isOpen).toBe(true);
  });

  // Options position tests
  it('should handle options position bottom', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips options-position="bottom"></bds-select-chips>',
    });

    const component = page.rootInstance;
    
    // Mock the dropdown element
    const mockDropElement = {
      classList: {
        add: jest.fn()
      }
    };
    component.dropElement = mockDropElement as any;
    
    // Mock the icon element
    const mockIconElement = {
      name: ''
    };
    component.iconDropElement = mockIconElement as any;
    
    component.setDefaultPlacement('bottom');
    
    expect(mockDropElement.classList.add).toHaveBeenCalledWith('select__options--position-bottom');
    expect(mockIconElement.name).toBe('arrow-down');
  });

  it('should handle options position top', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips options-position="top"></bds-select-chips>',
    });

    const component = page.rootInstance;
    
    // Mock the dropdown element
    const mockDropElement = {
      classList: {
        add: jest.fn()
      }
    };
    component.dropElement = mockDropElement as any;
    
    // Mock the icon element
    const mockIconElement = {
      name: ''
    };
    component.iconDropElement = mockIconElement as any;
    
    component.setDefaultPlacement('top');
    
    expect(mockDropElement.classList.add).toHaveBeenCalledWith('select__options--position-top');
    expect(mockIconElement.name).toBe('arrow-up');
  });

  // Validation message tests
  it('should show validation message when validation fails', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips type="email"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.validationDanger = true;
    component.validationMesage = 'Invalid email format';
    
    await page.waitForChanges();
    
    const message = page.root.shadowRoot.querySelector('.input__message--danger');
    expect(message).toBeTruthy();
  });

  // New prefix tests
  it('should show new option with prefix when can-add-new is true', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips can-add-new new-prefix="Add: " value="new-option"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = true;
    
    // Mock the native input
    const mockInput = {
      value: 'new-option'
    };
    component.nativeInput = mockInput as any;
    
    // Mock empty enabled options to trigger new option creation
    Object.defineProperty(component, 'childOptionsEnabled', {
      get: () => []
    });
    
    await page.waitForChanges();
    
    const newOption = page.root.shadowRoot.querySelector('#option-add');
    expect(newOption).toBeTruthy();
  });

  it('should show not found message when can-add-new is false', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips can-add-new="false" not-found-message="No results" value="search-term"></bds-select-chips>',
    });

    const component = page.rootInstance;
    component.isOpen = true;
    
    // Mock the native input
    const mockInput = {
      value: 'search-term'
    };
    component.nativeInput = mockInput as any;
    
    // Mock empty enabled options to trigger not found message
    Object.defineProperty(component, 'childOptionsEnabled', {
      get: () => []
    });
    
    await page.waitForChanges();
    
    const noOption = page.root.shadowRoot.querySelector('#no-option');
    expect(noOption).toBeTruthy();
  });

  // Whitespace validation tests
  it('should not add chips with only whitespace', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    const initialLength = component.internalChips.length;
    
    component.setChip('   '); // Only whitespace
    
    expect(component.internalChips.length).toBe(initialLength);
  });

  it('should add chips with valid content', async () => {
    const page = await newSpecPage({
      components: [SelectChips],
      html: '<bds-select-chips></bds-select-chips>',
    });

    const component = page.rootInstance;
    const initialLength = component.internalChips.length;
    
    component.setChip('valid chip');
    
    expect(component.internalChips.length).toBe(initialLength + 1);
    expect(component.internalChips).toContain('valid chip');
  });
});
