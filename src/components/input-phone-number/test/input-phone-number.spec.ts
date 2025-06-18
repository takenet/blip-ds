import { newSpecPage } from '@stencil/core/testing';
import { InputPhoneNumber } from '../input-phone-number';

describe('bds-input-phone-number', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [InputPhoneNumber],
      html: '<bds-input-phone-number></bds-input-phone-number>',
    });
    component = page.rootInstance;
    
    // Set up mock nativeInput with validity
    const mockInput = page.root.shadowRoot.querySelector('input');
    if (mockInput) {
      Object.defineProperty(mockInput, 'validity', {
        value: { valid: true },
        writable: true
      });
      component.nativeInput = mockInput;
    }
  });

  it('should create and render', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toBeTruthy();
  });

  describe('Props', () => {
    it('should render with default props', async () => {
      expect(component.text).toBe('');
      expect(component.value).toBe('+55');
      expect(component.label).toBe('Phone number');
      expect(component.language).toBe('pt_BR');
      expect(component.disabled).toBe(false);
      expect(component.danger).toBe(false);
      expect(component.success).toBe(false);
      expect(component.required).toBeFalsy();
    });

    it('should render with custom text value', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number text="1234567890"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.text).toBe('1234567890');
    });

    it('should render with custom country code value', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number value="+1"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.value).toBe('+1');
    });

    it('should render with custom label', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number label="Número de telefone"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.label).toBe('Número de telefone');
    });

    it('should render disabled state', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number disabled></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.disabled).toBe(true);
      expect(page.root.shadowRoot.querySelector('input').disabled).toBe(true);
    });

    it('should render danger state', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number danger></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.danger).toBe(true);
      expect(page.root.shadowRoot.querySelector('.input--state-danger')).toBeTruthy();
    });

    it('should render success state', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number success></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.success).toBe(true);
      expect(page.root.shadowRoot.querySelector('.input--state-success')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.icon-success')).toBeTruthy();
    });

    it('should render required attribute', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number required></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.required).toBe(true);
      expect(page.root.shadowRoot.querySelector('input').required).toBe(true);
    });

    it('should render with icon', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number icon="phone"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.icon).toBe('phone');
      expect(page.root.shadowRoot.querySelector('.input__icon bds-icon[name="phone"]')).toBeTruthy();
    });

    it('should render with different languages', async () => {
      // English
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number language="en_US"></bds-input-phone-number>',
      });
      expect(page.rootInstance.language).toBe('en_US');

      // Spanish
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number language="es_ES"></bds-input-phone-number>',
      });
      expect(page.rootInstance.language).toBe('es_ES');
    });

    it('should render helper message', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number helper-message="Digite seu telefone"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.helperMessage).toBe('Digite seu telefone');
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('.input__message__text').textContent.trim()).toBe('Digite seu telefone');
    });

    it('should render error message when danger is true', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number danger error-message="Telefone inválido"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.errorMessage).toBe('Telefone inválido');
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('.input__message--danger')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.input__message__text').textContent.trim()).toBe('Telefone inválido');
    });

    it('should render success message when success is true', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number success success-message="Telefone válido"></bds-input-phone-number>',
      });
      
      expect(page.rootInstance.successMessage).toBe('Telefone válido');
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('.input__message--success')).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.input__message__text').textContent.trim()).toBe('Telefone válido');
    });
  });

  describe('Rendering', () => {
    it('should render label when provided', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number label="Telefone"></bds-input-phone-number>',
      });
      
      const label = page.root.shadowRoot.querySelector('.input__container__label');
      expect(label).toBeTruthy();
      expect(label.textContent.trim()).toBe('Telefone');
    });

    it('should not render label when not provided', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number label=""></bds-input-phone-number>',
      });
      
      const label = page.root.shadowRoot.querySelector('.input__container__label');
      expect(label).toBeFalsy();
    });

    it('should render country flag icon', async () => {
      await page.waitForChanges();
      const flagIcon = page.root.shadowRoot.querySelector('bds-icon[theme="solid"][color="primary"]');
      expect(flagIcon).toBeTruthy();
    });

    it('should render dropdown arrow icon', async () => {
      await page.waitForChanges();
      const arrowIcon = page.root.shadowRoot.querySelector('bds-icon[name="arrow-down"]');
      expect(arrowIcon).toBeTruthy();
    });

    it('should render country code display', async () => {
      await page.waitForChanges();
      const countryCode = page.root.shadowRoot.querySelector('.input__container__country-code bds-typo');
      expect(countryCode).toBeTruthy();
      expect(countryCode.textContent.trim()).toBe('+55');
    });

    it('should render phone number input', async () => {
      const input = page.root.shadowRoot.querySelector('input.input__container__text');
      expect(input).toBeTruthy();
      expect(input.type).toBe('phonenumber');
      expect(input.pattern).toBe('/^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$/');
    });

    it('should apply correct CSS classes based on state', async () => {
      const inputContainer = page.root.shadowRoot.querySelector('.input');
      expect(inputContainer.classList.contains('input--state-primary')).toBe(true);
      expect(inputContainer.classList.contains('input--state-danger')).toBe(false);
      expect(inputContainer.classList.contains('input--state-success')).toBe(false);
      expect(inputContainer.classList.contains('input--state-disabled')).toBe(false);
    });

    it('should show options dropdown when open', async () => {
      component.isOpen = true;
      await page.waitForChanges();
      
      const dropdown = page.root.shadowRoot.querySelector('.select-phone-number__options--open');
      expect(dropdown).toBeTruthy();
    });

    it('should hide options dropdown when closed', async () => {
      component.isOpen = false;
      await page.waitForChanges();
      
      const dropdown = page.root.shadowRoot.querySelector('.select-phone-number__options--open');
      expect(dropdown).toBeFalsy();
    });
  });

  describe('Events', () => {
    it('should emit bdsPhoneNumberChange when text changes', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsPhoneNumberChange', spy);
      
      component.text = '1234567890';
      component.handleInputChange();
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            value: '1234567890',
            code: '+55',
          })
        })
      );
    });

    it('should emit bdsInput on input event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsInput', spy);
      
      // Directly call the method instead of triggering the event
      // to avoid the nativeInput validity check
      const mockEvent = new Event('input') as KeyboardEvent;
      Object.defineProperty(mockEvent, 'target', { 
        value: { value: '123' } 
      });
      
      // Mock the method dependencies
      component.nativeInput = {
        value: '123',
        validity: { valid: true }
      } as HTMLInputElement;
      
      await component.changedInputValue(mockEvent);
      
      expect(spy).toHaveBeenCalled();
    });

    it('should emit bdsFocus on focus', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsFocus', spy);
      
      component.onFocus();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should emit bdsBlur on blur', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsBlur', spy);
      
      component.onBlur();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should emit bdsCancel event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsCancel', spy);
      
      component.bdsCancel.emit();
      
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Methods', () => {
    it('should toggle dropdown with toggle method', async () => {
      expect(component.isOpen).toBe(false);
      
      component.toggle();
      expect(component.isOpen).toBe(true);
      
      component.toggle();
      expect(component.isOpen).toBe(false);
    });

    it('should not toggle when disabled', async () => {
      component.disabled = true;
      component.isOpen = false;
      
      component.toggle();
      expect(component.isOpen).toBe(false);
    });

    it('should remove focus with removeFocus method', async () => {
      const spy = jest.spyOn(component, 'onBlur');
      
      await component.removeFocus();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should change country with changeCountry method', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsPhoneNumberChange', spy);
      
      await component.changeCountry('+1', 'US / USA', 'united-states-flag');
      
      expect(component.value).toBe('+1');
      expect(component.isoCode).toBe('US / USA');
      expect(component.selectedCountry).toBe('united-states-flag');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Keyboard Interaction', () => {
    it('should toggle dropdown on Enter key when closed', async () => {
      component.isOpen = false;
      
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      Object.defineProperty(event, 'target', { 
        value: { localName: 'input' }
      });
      
      component.keyPressWrapper(event);
      expect(component.isOpen).toBe(true);
    });

    it('should not toggle dropdown on Enter key when already open', async () => {
      component.isOpen = true;
      
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      Object.defineProperty(event, 'target', { 
        value: { localName: 'input' }
      });
      
      component.keyPressWrapper(event);
      expect(component.isOpen).toBe(true);
    });

    it('should handle Enter key on flag selector', async () => {
      const spy = jest.spyOn(component, 'toggle');
      
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      component.handleKeyDown(event);
      
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Validation', () => {
    it('should validate numeric input', async () => {
      // Mock numberValidation to return true for invalid input
      jest.doMock('../../../utils/validations', () => ({
        numberValidation: jest.fn().mockReturnValue(true)
      }));
      
      component.nativeInput = {
        value: 'abc123',
        validity: { valid: false }
      } as HTMLInputElement;
      component.numberErrorMessage = 'Apenas números são permitidos';
      
      component.numberValidation();
      
      expect(component.validationDanger).toBe(true);
      expect(component.validationMesage).toBe('Apenas números são permitidos');
    });

    it('should pass validation for valid numeric input', async () => {
      // Mock numberValidation to return false for valid input
      jest.doMock('../../../utils/validations', () => ({
        numberValidation: jest.fn().mockReturnValue(false)
      }));
      
      component.nativeInput = {
        value: '1234567890',
        validity: { valid: true }
      } as HTMLInputElement;
      
      component.numberValidation();
      component.checkValidity();
      
      expect(component.validationDanger).toBe(false);
    });

    it('should show validation error message', async () => {
      component.numberErrorMessage = 'Apenas números são permitidos';
      component.validationDanger = true;
      component.validationMesage = 'Apenas números são permitidos';
      
      await page.waitForChanges();
      
      const errorMessage = page.root.shadowRoot.querySelector('.input__message--danger .input__message__text');
      expect(errorMessage.textContent.trim()).toBe('Apenas números são permitidos');
    });
  });

  describe('Country Selection', () => {
    it('should handle country selection from dropdown', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsPhoneNumberChange', spy);
      
      const mockEvent = {
        detail: {
          value: {
            code: '+1',
            isoCode: 'US / USA',
            flag: 'united-states-flag'
          }
        }
      } as CustomEvent;
      
      component.handler(mockEvent);
      
      expect(component.value).toBe('+1');
      expect(component.selectedCountry).toBe('united-states-flag');
      expect(component.isoCode).toBe('US / USA');
      expect(spy).toHaveBeenCalled();
    });

    it('should update countries when language changes', async () => {
      const spy = jest.spyOn(component, 'updateCountries');
      
      component.language = 'en_US';
      component.languageChanged();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should close dropdown when clicking outside', async () => {
      component.isOpen = true;
      
      const outsideElement = document.createElement('div');
      const event = new MouseEvent('mousedown', { bubbles: true });
      Object.defineProperty(event, 'target', { value: outsideElement });
      
      component.handleWindow(event);
      
      expect(component.isOpen).toBe(false);
    });

    it('should not close dropdown when clicking inside', async () => {
      component.isOpen = true;
      
      const event = new MouseEvent('mousedown', { bubbles: true });
      Object.defineProperty(event, 'target', { value: page.root });
      
      jest.spyOn(page.root, 'contains').mockReturnValue(true);
      component.handleWindow(event);
      
      expect(component.isOpen).toBe(true);
    });
  });

  describe('Data Attributes', () => {
    it('should apply data-test to input', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number data-test="phone-input"></bds-input-phone-number>',
      });
      
      const input = page.root.shadowRoot.querySelector('input[data-test="phone-input"]');
      expect(input).toBeTruthy();
    });

    it('should apply dt-select-flag to flag selector', async () => {
      page = await newSpecPage({
        components: [InputPhoneNumber],
        html: '<bds-input-phone-number dt-select-flag="flag-selector"></bds-input-phone-number>',
      });
      
      const flagSelector = page.root.shadowRoot.querySelector('[data-test="flag-selector"]');
      expect(flagSelector).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle null/undefined values gracefully', async () => {
      component.text = null;
      component.value = null;
      component.label = null;
      
      await page.waitForChanges();
      expect(page.root).toBeTruthy();
    });

    it('should handle empty string values', async () => {
      component.text = '';
      component.helperMessage = '';
      component.errorMessage = '';
      
      await page.waitForChanges();
      expect(page.root).toBeTruthy();
    });

    it('should set maxlength for Brazilian phone numbers', async () => {
      component.value = '+55';
      await page.waitForChanges();
      
      const input = page.root.shadowRoot.querySelector('input');
      expect(input.getAttribute('maxlength')).toBe('25');
    });

    it('should not set maxlength for non-Brazilian phone numbers', async () => {
      component.value = '+1';
      await page.waitForChanges();
      
      const input = page.root.shadowRoot.querySelector('input');
      expect(input.hasAttribute('maxlength')).toBe(false);
    });

    it('should update arrow icon based on dropdown state', async () => {
      // Closed state
      component.isOpen = false;
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('bds-icon[name="arrow-down"]')).toBeTruthy();
      
      // Open state
      component.isOpen = true;
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('bds-icon[name="arrow-up"]')).toBeTruthy();
    });

    it('should handle focus and click interactions', async () => {
      const mockNativeInput = {
        focus: jest.fn(),
        value: '',
        validity: { valid: true }
      } as any;
      
      component.nativeInput = mockNativeInput;
      
      component.onClickWrapper();
      
      expect(mockNativeInput.focus).toHaveBeenCalled();
      expect(component.isPressed).toBe(true);
    });

    it('should reset pressed state on blur', async () => {
      component.isPressed = true;
      
      component.onBlur();
      
      expect(component.isPressed).toBe(false);
    });
  });
});
