import { newSpecPage } from '@stencil/core/testing';
import { InputEditable } from '../input-editable';

describe('bds-input-editable', () => {
  it('should create component', () => {
    const component = new InputEditable();
    expect(component).toBeTruthy();
  });

  it('should render method should return JSX element', () => {
    const component = new InputEditable();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  // Comprehensive unit tests start here
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    expect(page.rootInstance.size).toBe('standard');
    expect(page.rootInstance.expand).toBe(false);
    expect(page.rootInstance.value).toBe('');
    expect(page.rootInstance.isEditing).toBe(false);
  });

  it('should render in static mode by default', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="Test Value"></bds-input-editable>',
    });

    const staticElement = page.root.shadowRoot.querySelector('.input__editable--static');
    expect(staticElement).toBeTruthy();
    expect(staticElement).not.toHaveClass('input__editable--hidden');

    const activeElement = page.root.shadowRoot.querySelector('.input__editable--active');
    expect(activeElement).toHaveClass('input__editable--hidden');
  });

  it('should display the value in static mode', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="Test Value"></bds-input-editable>',
    });

    const typoElement = page.root.shadowRoot.querySelector('.input__editable--static__typo');
    expect(typoElement.textContent).toBe('Test Value');
  });

  it('should switch to editing mode when clicked', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="Test Value"></bds-input-editable>',
    });

    const component = page.rootInstance;
    const staticElement = page.root.shadowRoot.querySelector('.input__editable--static') as HTMLElement;
    
    staticElement.click();
    await page.waitForChanges();

    expect(component.isEditing).toBe(true);
  });

  it('should handle different sizes', async () => {
    const shortComponent = new InputEditable();
    shortComponent.size = 'short';
    expect(shortComponent.getFontSizeClass()).toBe('fs-16');

    const standardComponent = new InputEditable();
    standardComponent.size = 'standard';
    expect(standardComponent.getFontSizeClass()).toBe('fs-24');

    const tallComponent = new InputEditable();
    tallComponent.size = 'tall';
    expect(tallComponent.getFontSizeClass()).toBe('fs-40');

    const defaultComponent = new InputEditable();
    expect(defaultComponent.getFontSizeClass()).toBe('fs-24');
  });

  it('should handle expand prop', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable expand></bds-input-editable>',
    });

    expect(page.rootInstance.getExpand()).toBe('expanded');

    const page2 = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    expect(page2.rootInstance.getExpand()).toBe('fixed');
  });

  it('should handle placeholder', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable placeholder="Enter text"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.placeholder).toBe('Enter text');
  });

  it('should handle minlength and maxlength', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable minlength="5" maxlength="20"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.minLength).toBe(5);
    expect(input.maxLength).toBe(20);
  });

  it('should handle danger state', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable danger error-message="Invalid input"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector('.input');
    expect(input).toHaveClass('input--state-danger');
  });

  it('should handle success state', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable success success-message="Valid input"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector('.input');
    expect(input).toHaveClass('input--state-success');
    const successIcon = page.root.shadowRoot.querySelector('.icon-success');
    expect(successIcon).toBeTruthy();
  });

  it('should handle helper message', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable helper-message="Help text"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    await page.waitForChanges();

    const message = page.root.shadowRoot.querySelector('.input__message');
    expect(message).toBeTruthy();
  });

  // Event handling tests
  it('should emit bdsFocus on focus', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    let focusEmitted = false;
    page.root.addEventListener('bdsFocus', () => {
      focusEmitted = true;
    });

    component.onFocus();
    
    expect(component.isFocused).toBe(true);
    expect(component.isPressed).toBe(true);
    expect(focusEmitted).toBe(true);
  });

  it('should emit bdsBlur on blur', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    // Mock nativeInput to prevent undefined errors
    component.nativeInput = {
      validity: { 
        valueMissing: false, 
        tooShort: false, 
        tooLong: false, 
        valid: true 
      }
    } as any;

    let blurEmitted = false;
    page.root.addEventListener('bdsBlur', () => {
      blurEmitted = true;
    });

    component.onBlur();
    
    expect(component.isPressed).toBe(false);
    expect(blurEmitted).toBe(true);
  });

  it('should emit bdsChange on input change', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="initial"></bds-input-editable>',
    });

    const component = page.rootInstance;
    const mockInput = {
      value: 'new value',
      validity: { valid: true }
    };
    component.nativeInput = mockInput as any;

    let changeEmitted = false;
    let emittedDetail = null;
    page.root.addEventListener('bdsChange', (event: any) => {
      changeEmitted = true;
      emittedDetail = event.detail;
    });

    const mockEvent = {
      target: mockInput
    } as any;

    await component.changedInputValue(mockEvent);
    
    expect(changeEmitted).toBe(true);
    expect(emittedDetail).toEqual({ value: 'new value', oldValue: 'initial' });
  });

  it('should emit bdsInput on input', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    const mockInput = {
      value: 'test',
      validity: { valid: true }
    };
    component.nativeInput = mockInput as any;

    let inputEmitted = false;
    page.root.addEventListener('bdsInput', () => {
      inputEmitted = true;
    });

    const mockEvent = {
      target: mockInput
    } as any;

    await component.changedInputValue(mockEvent);
    
    expect(inputEmitted).toBe(true);
  });

  // Editing mode tests
  it('should toggle editing mode', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    expect(component.isEditing).toBe(false);

    component.toggleEditing();
    expect(component.isEditing).toBe(true);

    component.toggleEditing();
    expect(component.isEditing).toBe(false);
  });

  it('should save text when valid', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="original" minlength="1"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    component.nativeInput = {
      value: 'new value'
    } as any;

    let saveEmitted = false;
    let emittedDetail = null;
    page.root.addEventListener('bdsInputEditableSave', (event: any) => {
      saveEmitted = true;
      emittedDetail = event.detail;
    });

    component.handleSaveText();
    
    expect(saveEmitted).toBe(true);
    expect(emittedDetail).toEqual({ value: 'new value', oldValue: 'original' });
    expect(component.value).toBe('new value');
    expect(component.oldValue).toBe('new value');
    expect(component.isEditing).toBe(false);
  });

  it('should not save text when invalid length', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="original" minlength="10"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    component.nativeInput = {
      value: 'short'
    } as any;

    let saveEmitted = false;
    page.root.addEventListener('bdsInputEditableSave', () => {
      saveEmitted = true;
    });

    component.handleSaveText();
    
    expect(saveEmitted).toBe(false);
    expect(component.value).toBe('original');
    expect(component.isEditing).toBe(true);
  });

  it('should not save text when in danger state', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="original" danger></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    component.nativeInput = {
      value: 'new value'
    } as any;

    let saveEmitted = false;
    page.root.addEventListener('bdsInputEditableSave', () => {
      saveEmitted = true;
    });

    component.handleSaveText();
    
    expect(saveEmitted).toBe(false);
    expect(component.value).toBe('original');
    expect(component.isEditing).toBe(true);
  });

  it('should not save empty text', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="original"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    component.nativeInput = {
      value: ''
    } as any;

    let saveEmitted = false;
    page.root.addEventListener('bdsInputEditableSave', () => {
      saveEmitted = true;
    });

    component.handleSaveText();
    
    expect(saveEmitted).toBe(false);
    expect(component.value).toBe('original');
    expect(component.isEditing).toBe(true);
  });

  // Keyboard handling tests
  it('should toggle editing on Enter key in static mode', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    expect(component.isEditing).toBe(false);

    const enterEvent = { key: 'Enter' };
    component.handleKeyDownToggle(enterEvent);
    
    expect(component.isEditing).toBe(true);
  });

  it('should save on Enter key in editing mode', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="original"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.isEditing = true;
    component.nativeInput = {
      value: 'new value'
    } as any;

    let saveEmitted = false;
    page.root.addEventListener('bdsInputEditableSave', () => {
      saveEmitted = true;
    });

    const enterEvent = { key: 'Enter' };
    component.handleKeyDownSave(enterEvent);
    
    expect(saveEmitted).toBe(true);
  });

  // Validation tests
  it('should validate input length and set isValid state', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable minlength="5"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.nativeInput = {
      value: 'abc',
      validity: { valid: true }
    } as any;

    const mockEvent = {
      target: component.nativeInput
    } as any;

    await component.changedInputValue(mockEvent);
    
    expect(component.isValid).toBe(false);

    component.nativeInput.value = 'abcdef';
    await component.changedInputValue(mockEvent);
    
    expect(component.isValid).toBe(true);
  });

  it('should handle required validation', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable required-error-message="Required field"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.nativeInput = {
      validity: { 
        valueMissing: true,
        valid: false
      }
    } as any;

    component.requiredValidation();
    
    expect(component.validationMesage).toBe('Required field');
    expect(component.validationDanger).toBe(true);
  });

  it('should handle minlength validation', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable minlength-error-message="Too short"></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.nativeInput = {
      validity: { 
        tooShort: true,
        valid: false
      }
    } as any;

    component.lengthValidation();
    
    expect(component.validationMesage).toBe('Too short');
    expect(component.validationDanger).toBe(true);
  });

  it('should handle maxlength validation', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.nativeInput = {
      validity: { 
        tooLong: true,
        valid: false
      }
    } as any;

    component.lengthValidation();
    
    expect(component.validationDanger).toBe(true);
  });

  it('should clear validation when input is valid', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    component.validationDanger = true;
    component.nativeInput = {
      validity: { 
        valid: true
      }
    } as any;

    component.checkValidity();
    
    expect(component.validationDanger).toBe(false);
  });

  // ComponentWillLoad test
  it('should initialize oldValue on component load', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable value="initial value"></bds-input-editable>',
    });

    expect(page.rootInstance.oldValue).toBe('initial value');
  });

  // Test data-test attributes
  it('should handle data-test attributes', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: `<bds-input-editable 
        data-test="main-input"
        dt-button-edit="edit-btn"
        dt-button-close="close-btn"
        dt-button-confirm="confirm-btn">
      </bds-input-editable>`,
    });

    const component = page.rootInstance;
    expect(component.dataTest).toBe('main-input');
    expect(component.dtButtonEdit).toBe('edit-btn');
    expect(component.dtButtonClose).toBe('close-btn');
    expect(component.dtButtonConfirm).toBe('confirm-btn');
  });

  // Test focus management
  it('should focus native input when wrapper is clicked', async () => {
    const page = await newSpecPage({
      components: [InputEditable],
      html: '<bds-input-editable></bds-input-editable>',
    });

    const component = page.rootInstance;
    const mockInput = {
      focus: jest.fn()
    };
    component.nativeInput = mockInput as any;

    component.onClickWrapper();
    
    expect(component.isFocused).toBe(true);
    expect(component.isPressed).toBe(true);
    expect(mockInput.focus).toHaveBeenCalled();
  });
});
