import { newSpecPage } from '@stencil/core/testing';
import { InputPassword } from '../input-password';

describe('bds-input-password', () => {
  it('should create component', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });
    expect(page.root).toBeTruthy();
  });

  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    expect(page.root.value).toBe('');
    expect(page.root.label).toBe('');
    expect(page.root.placeholder).toBe('');
    expect(page.root.disabled).toBe(false);
    expect(page.root.danger).toBe(false);
    expect(page.root.success).toBe(false);
  });

  it('should render with custom value', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password value="test123"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.value).toBe('test123');
    expect(page.root.value).toBe('test123');
  });

  it('should render with label', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password label="Password"></bds-input-password>',
    });

    const label = page.root.shadowRoot.querySelector('label');
    expect(label).toBeTruthy();
    expect(label.textContent.trim()).toBe('Password');
    
    const inputContainer = page.root.shadowRoot.querySelector('.input');
    expect(inputContainer).toHaveClass('input--label');
  });

  it('should render with placeholder', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password placeholder="Enter password"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.placeholder).toBe('Enter password');
  });

  it('should render disabled', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password disabled></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.disabled).toBe(true);
    
    const inputContainer = page.root.shadowRoot.querySelector('.input');
    expect(inputContainer).toHaveClass('input--state-disabled');
    expect(page.root.getAttribute('aria-disabled')).toBe('true');
  });

  it('should render in danger state', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password danger error-message="Invalid password"></bds-input-password>',
    });

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    expect(inputContainer).toHaveClass('input--state-danger');
    const message = page.root.shadowRoot.querySelector('.input__message--danger');
    expect(message).toBeTruthy();
    expect(message.textContent.trim()).toBe('Invalid password');
  });

  it('should render in success state', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password success success-message="Password valid"></bds-input-password>',
    });

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    expect(inputContainer).toHaveClass('input--state-success');
    const message = page.root.shadowRoot.querySelector('.input__message--success');
    expect(message).toBeTruthy();
    expect(message.textContent.trim()).toBe('Password valid');
    const successIcon = page.root.shadowRoot.querySelector('.icon-success');
    expect(successIcon).toBeTruthy();
  });

  it('should render helper message', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password helper-message="Use at least 8 characters"></bds-input-password>',
    });

    const message = page.root.shadowRoot.querySelector('.input__message');
    expect(message).toBeTruthy();
    expect(message.textContent.trim()).toBe('Use at least 8 characters');
  });

  it('should render with icon', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password icon="user"></bds-input-password>',
    });

    const iconContainer = page.root.shadowRoot.querySelector('.input__icon');
    expect(iconContainer).toBeTruthy();
    const icon = iconContainer.querySelector('bds-icon');
    expect(icon.getAttribute('name')).toBe('user');
    expect(icon.getAttribute('size')).toBe('small');
  });

  it('should toggle password visibility', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password value="secret"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    const eyeButton = page.root.shadowRoot.querySelector('.input__password--icon');
    const eyeIcon = eyeButton.querySelector('bds-icon');

    // Initially password should be hidden
    expect(input.type).toBe('password');
    expect(eyeIcon.getAttribute('name')).toBe('eye-closed');
    expect(input.autocomplete).toBe('current-password');

    // Click to show password
    (eyeButton as HTMLElement).click();
    await page.waitForChanges();

    expect(input.type).toBe('text');
    expect(eyeIcon.getAttribute('name')).toBe('eye-open');
    expect(page.rootInstance.openEyes).toBe(true);

    // Click to hide password again
    (eyeButton as HTMLElement).click();
    await page.waitForChanges();

    expect(input.type).toBe('password');
    expect(eyeIcon.getAttribute('name')).toBe('eye-closed');
    expect(page.rootInstance.openEyes).toBe(false);
  });

  it('should not toggle password visibility when disabled', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password disabled></bds-input-password>',
    });

    const eyeButton = page.root.shadowRoot.querySelector('.input__password--icon');
    const input = page.root.shadowRoot.querySelector('input');

    expect(input.type).toBe('password');
    expect(page.rootInstance.openEyes).toBe(false);

    (eyeButton as HTMLElement).click();
    await page.waitForChanges();

    expect(input.type).toBe('password');
    expect(page.rootInstance.openEyes).toBe(false);
  });

  it('should handle readonly attribute', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password readonly></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.readOnly).toBe(true);
  });

  it('should handle min and max attributes', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password min="1" max="100"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.min).toBe('1');
    expect(input.max).toBe('100');
  });

  it('should handle autocomplete and autocapitalize', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password auto-complete="new-password" auto-capitalize="words"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    // When openEyes is false (default), autocomplete is 'current-password'
    expect(input.autocomplete).toBe('current-password');
    expect(input.getAttribute('autocapitalize')).toBe('words');
    
    // When openEyes is true, it should use the provided autocomplete
    page.rootInstance.openEyes = true;
    await page.waitForChanges();
    expect(input.autocomplete).toBe('new-password');
  });

  it('should handle minlength and maxlength', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password minlength="8" maxlength="20"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.minLength).toBe(8);
    expect(input.maxLength).toBe(20);
  });

  it('should handle input name', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password input-name="userPassword"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.name).toBe('userPassword');
  });

  it('should handle data-test attribute', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password data-test="password-input"></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.getAttribute('data-test')).toBe('password-input');
  });

  it('should emit bdsInputPasswordInput event on input', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    const inputSpy = jest.fn();
    page.root.addEventListener('bdsInputPasswordInput', inputSpy);

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(inputSpy).toHaveBeenCalled();
    expect(page.root.value).toBe('test');
  });

  it('should emit bdsInputPasswordChange event on value change', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const changeSpy = jest.fn();
    page.root.addEventListener('bdsInputPasswordChange', changeSpy);

    page.root.value = 'newValue';
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: 'newValue' }
      })
    );
  });

  it('should emit bdsInputPasswordFocus event on focus', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    const focusSpy = jest.fn();
    page.root.addEventListener('bdsInputPasswordFocus', focusSpy);

    input.dispatchEvent(new Event('focus'));

    expect(focusSpy).toHaveBeenCalled();
    expect(page.rootInstance.isPressed).toBe(true);
  });

  it('should emit bdsInputPasswordBlur event on blur', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    const blurSpy = jest.fn();
    page.root.addEventListener('bdsInputPasswordBlur', blurSpy);

    // First focus to set isPressed
    input.dispatchEvent(new Event('focus'));
    expect(page.rootInstance.isPressed).toBe(true);

    // Then blur
    input.dispatchEvent(new Event('blur'));

    expect(blurSpy).toHaveBeenCalled();
    expect(page.rootInstance.isPressed).toBe(false);
  });

  it('should emit bdsInputPasswordSubmit event on Enter key', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password value="test"></bds-input-password>',
    });

    const submitSpy = jest.fn();
    page.root.addEventListener('bdsInputPasswordSubmit', submitSpy);

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    inputContainer.dispatchEvent(keyEvent);

    expect(submitSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { event: keyEvent, value: 'test' }
      })
    );
  });

  it('should emit bdsKeyDownBackspace event on Backspace key', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password value="test"></bds-input-password>',
    });

    const backspaceSpy = jest.fn();
    page.root.addEventListener('bdsKeyDownBackspace', backspaceSpy);

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'Backspace' });
    inputContainer.dispatchEvent(keyEvent);

    expect(backspaceSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { event: keyEvent, value: 'test' }
      })
    );
  });

  it('should toggle password visibility on Enter key when eye button is focused', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const eyeButton = page.root.shadowRoot.querySelector('.input__password--icon');
    const input = page.root.shadowRoot.querySelector('input');

    expect(input.type).toBe('password');

    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    eyeButton.dispatchEvent(keyEvent);
    await page.waitForChanges();

    expect(input.type).toBe('text');
    expect(page.rootInstance.openEyes).toBe(true);
  });

  it('should focus input when wrapper is clicked', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const wrapper = page.root.shadowRoot.querySelector('.input');
    const focusSpy = jest.spyOn(page.rootInstance.nativeInput, 'focus').mockImplementation();

    (wrapper as HTMLElement).click();

    expect(focusSpy).toHaveBeenCalled();
    expect(page.rootInstance.isPressed).toBe(true);
  });

  it('should render icon with medium size when label is present', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password icon="user"></bds-input-password>',
    });

    // Set label property
    page.rootInstance.label = 'Password';
    await page.waitForChanges();

    const icon = page.root.shadowRoot.querySelector('.input__icon bds-icon');
    expect(icon.getAttribute('size')).toBe('medium');
  });

  it('should render icon with small size when no label is present', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password icon="user"></bds-input-password>',
    });

    // Ensure no label
    page.rootInstance.label = '';
    await page.waitForChanges();

    const icon = page.root.shadowRoot.querySelector('.input__icon bds-icon');
    expect(icon.getAttribute('size')).toBe('small');
  });

  it('should apply correct CSS classes based on state', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    expect(inputContainer).toHaveClass('input--state-primary');

    // Test danger state
    page.root.danger = true;
    await page.waitForChanges();
    expect(inputContainer).toHaveClass('input--state-danger');

    // Test success state
    page.root.danger = false;
    page.root.success = true;
    await page.waitForChanges();
    expect(inputContainer).toHaveClass('input--state-success');

    // Test disabled state
    page.root.success = false;
    page.root.disabled = true;
    await page.waitForChanges();
    expect(inputContainer).toHaveClass('input--state-disabled');
  });

  it('should render pressed state correctly', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password label="Password"></bds-input-password>',
    });

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    const label = page.root.shadowRoot.querySelector('.input__container__label');

    expect(inputContainer).not.toHaveClass('input--pressed');
    expect(label).not.toHaveClass('input__container__label--pressed');

    // Simulate focus
    page.rootInstance.isPressed = true;
    await page.waitForChanges();

    expect(inputContainer).toHaveClass('input--pressed');
    expect(label).toHaveClass('input__container__label--pressed');
  });

  it('should not show pressed state when disabled', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password disabled label="Password"></bds-input-password>',
    });

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    const label = page.root.shadowRoot.querySelector('.input__container__label');

    page.rootInstance.isPressed = true;
    await page.waitForChanges();

    expect(inputContainer).not.toHaveClass('input--pressed');
    expect(label).not.toHaveClass('input__container__label--pressed');
  });

  it('should handle null value correctly', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const changeSpy = jest.fn();
    page.root.addEventListener('bdsInputPasswordChange', changeSpy);

    page.root.value = null;
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { value: null }
      })
    );
  });

  it('should render message with correct icon based on state', async () => {
    // Test danger message
    const dangerPage = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password danger error-message="Error message"></bds-input-password>',
    });

    let messageIcon = dangerPage.root.shadowRoot.querySelector('.input__message__icon bds-icon');
    expect(messageIcon.getAttribute('name')).toBe('error');

    // Test success message
    const successPage = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password success success-message="Success message"></bds-input-password>',
    });

    messageIcon = successPage.root.shadowRoot.querySelector('.input__message__icon bds-icon');
    expect(messageIcon.getAttribute('name')).toBe('checkball');

    // Test helper message
    const helperPage = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password helper-message="Helper message"></bds-input-password>',
    });

    messageIcon = helperPage.root.shadowRoot.querySelector('.input__message__icon bds-icon');
    expect(messageIcon.getAttribute('name')).toBe('info');
  });

  it('should handle validation state correctly', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    // Set validation danger state
    page.rootInstance.validationDanger = true;
    page.rootInstance.validationMesage = 'Validation error';
    await page.waitForChanges();

    const inputContainer = page.root.shadowRoot.querySelector('.input');
    expect(inputContainer).toHaveClass('input--state-danger');

    const message = page.root.shadowRoot.querySelector('.input__message--danger');
    expect(message).toBeTruthy();
    expect(message.textContent.trim()).toBe('Validation error');
  });

  it('should render eye icon with correct properties', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const eyeIcon = page.root.shadowRoot.querySelector('.input__password--icon bds-icon');
    expect(eyeIcon.getAttribute('size')).toBe('small');
    expect(eyeIcon.getAttribute('color')).toBe('inherit');
    expect(eyeIcon.getAttribute('name')).toBe('eye-closed');

    // Toggle to open
    page.rootInstance.openEyes = true;
    await page.waitForChanges();

    expect(eyeIcon.getAttribute('name')).toBe('eye-open');
  });

  it('should handle input focus correctly when clicking wrapper', async () => {
    const page = await newSpecPage({
      components: [InputPassword],
      html: '<bds-input-password></bds-input-password>',
    });

    const input = page.root.shadowRoot.querySelector('input');
    const focusSpy = jest.spyOn(input, 'focus').mockImplementation();
    
    // Mock nativeInput reference
    page.rootInstance.nativeInput = input;

    const wrapper = page.root.shadowRoot.querySelector('.input');
    (wrapper as HTMLElement).click();

    expect(focusSpy).toHaveBeenCalled();
    expect(page.rootInstance.isPressed).toBe(true);
  });
});
