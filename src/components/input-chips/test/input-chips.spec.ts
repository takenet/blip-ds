import { newSpecPage } from '@stencil/core/testing';
import { InputChips } from '../input-chips';

describe('bds-input-chips', () => {
  it('should create component', () => {
    const component = new InputChips();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new InputChips();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  // Comprehensive unit tests start here
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    expect(page.root).toEqualHtml(`
      <bds-input-chips icon="" value="">
        <mock:shadow-root>
          <div class="input input--state-primary" part="input-container">
            <div class="input__container">
              <div class="input__container__wrapper" style="max-height: 80px;">
                <input class="input__container__text" placeholder="" value="">
              </div>
            </div>
            <slot name="input-right"></slot>
          </div>
        </mock:shadow-root>
      </bds-input-chips>
    `);
  });

  it('should render with label', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips label="Tags"></bds-input-chips>',
    });

    const label = page.root.shadowRoot.querySelector('.input__container__label');
    expect(label).toBeTruthy();
    const inputElement = page.root.shadowRoot.querySelector('.input');
    expect(inputElement).toHaveClass('input--label');
  });

  it('should render with icon', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips icon="search"></bds-input-chips>',
    });

    const icon = page.root.shadowRoot.querySelector('.input__icon');
    expect(icon).toBeTruthy();
  });

  it('should render with placeholder', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips placeholder="Enter tags"></bds-input-chips>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.placeholder).toBe('Enter tags');
  });

  it('should render with initial chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips chips=\'["tag1", "tag2"]\'></bds-input-chips>',
    });

    await page.waitForChanges();
    
    const chips = page.root.shadowRoot.querySelectorAll('bds-chip-clickable');
    expect(chips.length).toBe(2);
  });

  it('should handle disabled state', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips disabled></bds-input-chips>',
    });

    expect(page.root.getAttribute('aria-disabled')).toBe('true');
    const input = page.root.shadowRoot.querySelector('input');
    expect(input.disabled).toBe(true);
    expect(page.root.shadowRoot.querySelector('.input')).toHaveClass('input--state-disabled');
  });

  it('should handle danger state', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips danger error-message="Invalid input"></bds-input-chips>',
    });

    expect(page.root.shadowRoot.querySelector('.input')).toHaveClass('input--state-danger');
    const message = page.root.shadowRoot.querySelector('.input__message--danger');
    expect(message).toBeTruthy();
  });

  it('should handle success state', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips success success-message="Valid input"></bds-input-chips>',
    });

    expect(page.root.shadowRoot.querySelector('.input')).toHaveClass('input--state-success');
    const message = page.root.shadowRoot.querySelector('.input__message--success');
    expect(message).toBeTruthy();
    const successIcon = page.root.shadowRoot.querySelector('.icon-success');
    expect(successIcon).toBeTruthy();
  });

  it('should handle helper message', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips helper-message="Enter comma-separated values"></bds-input-chips>',
    });

    const message = page.root.shadowRoot.querySelector('.input__message');
    expect(message).toBeTruthy();
    expect(message).not.toHaveClass('input__message--danger');
    expect(message).not.toHaveClass('input__message--success');
  });

  it('should handle maxlength prop', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips maxlength="10"></bds-input-chips>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.maxLength).toBe(10);
  });

  it('should handle counter-length prop', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips counter-length max-chips-length="5"></bds-input-chips>',
    });

    const counter = page.root.shadowRoot.querySelector('bds-counter-text');
    expect(counter).toBeTruthy();
  });

  it('should handle custom max-height', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips max-height="120px"></bds-input-chips>',
    });

    const wrapper = page.root.shadowRoot.querySelector('.input__container__wrapper') as HTMLElement;
    expect(wrapper.style.maxHeight).toBe('120px');
  });

  it('should render tooltip for long chips', async () => {
    const longChip = 'a'.repeat(25); // Longer than 20 character limit
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips chips='["${longChip}"]'></bds-input-chips>`,
    });

    await page.waitForChanges();
    
    const tooltip = page.root.shadowRoot.querySelector('bds-tooltip');
    expect(tooltip).toBeTruthy();
    expect(tooltip.getAttribute('tooltip-text')).toBe(longChip);
  });

  // Method tests
  it('should validate chips correctly for text type', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips type="text"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['tag1', 'tag2'];
    
    const isValid = await component.isValid();
    expect(isValid).toBe(true);
  });

  it('should validate chips correctly for email type', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips type="email"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['valid@email.com', 'another@test.com'];
    
    const isValid = await component.isValid();
    expect(isValid).toBe(true);
  });

  it('should invalidate wrong email format', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips type="email"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['invalid-email', 'valid@email.com'];
    
    const isValid = await component.isValid();
    expect(isValid).toBe(false);
  });

  it('should get chips correctly', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['tag1', 'tag2', 'tag3'];
    
    const chips = await component.get();
    expect(chips).toEqual(['tag1', 'tag2', 'tag3']);
  });

  it('should clear all chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips value="test"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['tag1', 'tag2'];
    
    await component.clear();
    
    expect(component.internalChips).toEqual([]);
    expect(component.value).toBe('');
  });

  it('should add chip with provided value', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    
    await component.add('newChip');
    
    expect(component.internalChips).toContain('newChip');
    expect(component.value).toBe('');
  });

  it('should add chip from current value when no parameter provided', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips value="currentValue"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    
    await component.add();
    
    expect(component.internalChips).toContain('currentValue');
    expect(component.value).toBe('');
  });

  // Focus management tests
  it('should handle focus management', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    const mockInput = {
      focus: jest.fn(),
      blur: jest.fn(),
    };
    component.nativeInput = mockInput as any;

    await component.setFocus();
    expect(mockInput.focus).toHaveBeenCalled();

    await component.removeFocus();
    expect(mockInput.blur).toHaveBeenCalled();
  });

  // Event handling tests
  it('should handle focus event', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    let focusEmitted = false;
    page.root.addEventListener('bdsInputChipsFocus', () => {
      focusEmitted = true;
    });

    component.onFocus();
    
    expect(component.isPressed).toBe(true);
    expect(focusEmitted).toBe(true);
  });

  it('should handle input event', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    let inputEmitted = false;
    page.root.addEventListener('bdsInputChipsInput', () => {
      inputEmitted = true;
    });

    const mockEvent = {
      target: { value: 'test input' }
    } as any;

    component.onInput(mockEvent);
    
    expect(component.value).toBe('test input');
    expect(inputEmitted).toBe(true);
  });

  it('should handle keypress Enter to add chip', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips value="newchip"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    let changeEmitted = false;
    page.root.addEventListener('bdsChange', () => {
      changeEmitted = true;
    });

    const enterEvent = {
      key: 'Enter'
    } as KeyboardEvent;

    component.keyPressWrapper(enterEvent);
    
    expect(component.internalChips).toContain('newchip');
    expect(component.value).toBe('');
    expect(changeEmitted).toBe(true);
  });

  it('should handle keypress Backspace to remove last chip', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips value=""></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['chip1', 'chip2'];
    let changeEmitted = false;
    page.root.addEventListener('bdsChange', () => {
      changeEmitted = true;
    });

    const backspaceEvent = {
      key: 'Backspace'
    } as KeyboardEvent;

    component.keyPressWrapper(backspaceEvent);
    
    expect(component.internalChips).toEqual(['chip1']);
    expect(changeEmitted).toBe(true);
  });

  it('should not remove chip on Backspace when input has value', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips value="some text"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['chip1', 'chip2'];

    const backspaceEvent = {
      key: 'Backspace'
    } as KeyboardEvent;

    component.keyPressWrapper(backspaceEvent);
    
    expect(component.internalChips).toEqual(['chip1', 'chip2']);
  });

  // Delimiter handling tests
  it('should handle comma delimiters', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    component.nativeInput = { value: 'tag1,tag2,tag3' } as any;

    component.handleDelimiters();
    
    expect(component.internalChips).toEqual(['tag1', 'tag2', 'tag3']);
  });

  it('should handle semicolon delimiters', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    component.nativeInput = { value: 'tag1;tag2;tag3' } as any;

    component.handleDelimiters();
    
    expect(component.internalChips).toEqual(['tag1', 'tag2', 'tag3']);
  });

  it('should handle mixed delimiters', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];
    component.nativeInput = { value: 'tag1;tag2,tag3' } as any;

    component.handleDelimiters();
    
    expect(component.internalChips).toEqual(['tag1', 'tag2', 'tag3']);
  });

  // Duplication handling tests
  it('should prevent duplicate chips by default', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['existing'];

    component.setChip('existing');
    
    expect(component.internalChips).toEqual(['existing']);
  });

  it('should allow duplicate chips when duplicated prop is true', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips duplicated></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['existing'];

    component.setChip('existing');
    
    expect(component.internalChips).toEqual(['existing', 'existing']);
  });

  it('should not add whitespace-only chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];

    component.setChip('   ');
    component.setChip('');
    
    expect(component.internalChips).toEqual([]);
  });

  // Max chips length validation
  it('should disable input when max chips length is reached', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips max-chips-length="2"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['chip1', 'chip2'];
    let extendedEmitted = false;
    page.root.addEventListener('bdsExtendedQuantityInput', () => {
      extendedEmitted = true;
    });

    component.minMaxValidation();
    
    expect(component.inputAvalible).toBe(false);
    expect(extendedEmitted).toBe(true);
  });

  it('should enable input when below max chips length', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips max-chips-length="5"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['chip1', 'chip2'];

    component.minMaxValidation();
    
    expect(component.inputAvalible).toBe(true);
  });

  // Blur creation test
  it('should create chip on blur when blur-creation is true', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips blur-creation value="newchip"></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = [];

    component.handleOnBlur();
    
    expect(component.internalChips).toContain('newchip');
    expect(component.value).toBe('');
  });

  it('should emit submit event on blur when chips exist', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['chip1'];
    let submitEmitted = false;
    page.root.addEventListener('bdsSubmit', () => {
      submitEmitted = true;
    });

    component.handleOnBlur();
    
    expect(submitEmitted).toBe(true);
    expect(component.isPressed).toBe(false);
  });

  // Chip removal tests
  it('should remove specific chip by index', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.internalChips = ['chip1', 'chip2', 'chip3'];

    const mockEvent = {
      detail: { id: '1' }
    } as CustomEvent<{ id: string }>;

    component.removeChip(mockEvent);
    
    expect(component.internalChips).toEqual(['chip1', 'chip3']);
  });

  // Watch method tests
  it('should parse chips from string format', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.chips = '["chip1", "chip2"]';

    component.valueChanged();
    
    expect(component.internalChips).toEqual(['chip1', 'chip2']);
  });

  it('should handle invalid JSON string for chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.chips = 'invalid json';

    component.valueChanged();
    
    expect(component.internalChips).toEqual([]);
  });

  it('should handle array format for chips', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: '<bds-input-chips></bds-input-chips>',
    });

    const component = page.rootInstance;
    component.chips = ['chip1', 'chip2'];

    component.valueChanged();
    
    expect(component.internalChips).toEqual(['chip1', 'chip2']);
  });
});
