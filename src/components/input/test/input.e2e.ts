import { newE2EPage } from '@stencil/core/testing';

describe('bds-input e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input label="Label" icon="edit" placeholder="Digite aqui..." helper-message="Mensagem de ajuda" data-test="bds-input"></bds-input>`,
    });
  });

  describe('Properties', () => {
    it('should render input with correct label', async () => {
      const input = await page.find('bds-input');
      const label = await input.getProperty('label');
      expect(label).toBe('Label');
    });

    it('should render input with correct icon', async () => {
      const input = await page.find('bds-input');
      const icon = await input.getProperty('icon');
      expect(icon).toBe('edit');
    });

    it('should render input with correct placeholder', async () => {
      const input = await page.find('bds-input');
      const placeholder = await input.getProperty('placeholder');
      expect(placeholder).toBe('Digite aqui...');
    });

    it('should render input with correct helper message', async () => {
      const input = await page.find('bds-input');
      const helperMessage = await input.getProperty('helperMessage');
      expect(helperMessage).toBe('Mensagem de ajuda');
    });
  });

  describe('Interactions', () => {
    it('should allow user to focus the input', async () => {
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');
      
      await inputElement.focus();
      await page.waitForChanges();
      
      const isFocused = await inputElement.getProperty('tabIndex');
      expect(isFocused).toBe(0);
    });

    it('should allow user to type in the input', async () => {
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');
      
      await inputElement.type('Hello, E2E!');
      await page.waitForChanges();
      
      const value = await inputElement.getProperty('value');
      expect(value).toBe('Hello, E2E!');
    });
  });

  describe('Events', () => {
    it('should emit bdsChange event when typing', async () => {
      const input = await page.find('bds-input');
      const bdsChangeEvent = await input.spyOnEvent('bdsChange');
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');

      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInput event when typing', async () => {
      const input = await page.find('bds-input');
      const bdsInputEvent = await input.spyOnEvent('bdsInput');
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');

      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should emit bdsFocus event when focused', async () => {
      const input = await page.find('bds-input');
      const bdsFocusEvent = await input.spyOnEvent('bdsFocus');
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');

      await inputElement.focus();
      await page.waitForChanges();

      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should emit bdsSubmit event when Enter is pressed', async () => {
      const input = await page.find('bds-input');
      const bdsSubmitEvent = await input.spyOnEvent('bdsSubmit');
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(bdsSubmitEvent).toHaveReceivedEvent();
    });

    it('should emit bdsKeyDownBackspace event when Backspace is pressed', async () => {
      const input = await page.find('bds-input');
      const bdsKeyDownBackspaceEvent = await input.spyOnEvent('bdsKeyDownBackspace');
      const inputElement = await page.find('bds-input >>> [data-test="bds-input"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Backspace');
      await page.waitForChanges();

      expect(bdsKeyDownBackspaceEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-input></bds-input>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT');
    });
  });

  describe('Textarea Functionality', () => {
    beforeEach(async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" label="Textarea Label" placeholder="Digite aqui..." data-test="bds-input"></bds-input>`,
      });
    });

    it('should render as textarea when is-textarea is true', async () => {
      const input = await page.find('bds-input');
      const isTextarea = await input.getProperty('isTextarea');
      expect(isTextarea).toBe(true);

      const textareaElement = await page.find('bds-input >>> textarea');
      expect(textareaElement).toBeTruthy();
    });

    it('should set correct default rows for textarea', async () => {
      const textareaElement = await page.find('bds-input >>> textarea');
      const rows = await textareaElement.getProperty('rows');
      expect(rows).toBe(3);
    });

    it('should allow multiline text input in textarea', async () => {
      const textareaElement = await page.find('bds-input >>> textarea');
      
      const multilineText = 'Line 1\nLine 2\nLine 3';
      await textareaElement.type(multilineText);
      await page.waitForChanges();
      
      const value = await textareaElement.getProperty('value');
      expect(value).toBe(multilineText);
    });

    it('should respect custom rows property', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="5" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const rows = await textareaElement.getProperty('rows');
      expect(rows).toBe(5);
    });

    it('should show correct CSS classes for textarea', async () => {
      const inputContainer = await page.find('bds-input >>> .input');
      const className = await inputContainer.getProperty('className');
      expect(className).toContain('input--textarea');
    });

    it('should handle auto-resize property', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" auto-resize="false" data-test="bds-input"></bds-input>`,
      });

      const input = await page.find('bds-input');
      const autoResize = await input.getProperty('autoResize');
      expect(autoResize).toBe(false);
    });

    it('should handle icon with textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" icon="edit" icon-size="medium" data-test="bds-input"></bds-input>`,
      });

      const iconElement = await page.find('bds-input >>> .input__icon bds-icon');
      expect(iconElement).toBeTruthy();
      
      const iconSize = await iconElement.getProperty('size');
      expect(iconSize).toBe('medium');
    });

    it('should handle error state with textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" danger="true" error-message="Error message" data-test="bds-input"></bds-input>`,
      });

      const inputContainer = await page.find('bds-input >>> .input');
      const className = await inputContainer.getProperty('className');
      expect(className).toContain('input--state-danger');

      const errorMessage = await page.find('bds-input >>> .input__message--danger');
      expect(errorMessage).toBeTruthy();
    });

    it('should handle success state with textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" success="true" success-message="Success message" data-test="bds-input"></bds-input>`,
      });

      const inputContainer = await page.find('bds-input >>> .input');
      const className = await inputContainer.getProperty('className');
      expect(className).toContain('input--state-success');

      const successMessage = await page.find('bds-input >>> .input__message--success');
      expect(successMessage).toBeTruthy();
    });

    it('should handle disabled state with textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" disabled="true" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const isDisabled = await textareaElement.getProperty('disabled');
      expect(isDisabled).toBe(true);

      const inputContainer = await page.find('bds-input >>> .input');
      const className = await inputContainer.getProperty('className');
      expect(className).toContain('input--state-disabled');
    });

    it('should handle character counter with textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" counter-length="true" maxlength="100" data-test="bds-input"></bds-input>`,
      });

      const counterElement = await page.find('bds-input >>> bds-counter-text');
      expect(counterElement).toBeTruthy();
    });

    it('should emit events correctly for textarea', async () => {
      const input = await page.find('bds-input');
      const bdsChangeEvent = await input.spyOnEvent('bdsChange');
      const bdsInputEvent = await input.spyOnEvent('bdsInput');
      const bdsFocusEvent = await input.spyOnEvent('bdsFocus');
      
      const textareaElement = await page.find('bds-input >>> textarea');

      await textareaElement.focus();
      await page.waitForChanges();
      expect(bdsFocusEvent).toHaveReceivedEvent();

      await textareaElement.type('Test content');
      await page.waitForChanges();
      
      expect(bdsInputEvent).toHaveReceivedEvent();
      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should handle focus and blur states correctly for textarea', async () => {
      const input = await page.find('bds-input');
      const textareaElement = await page.find('bds-input >>> textarea');
      const inputContainer = await page.find('bds-input >>> .input');

      await textareaElement.focus();
      await page.waitForChanges();
      
      let className = await inputContainer.getProperty('className');
      expect(className).toContain('input--pressed');

      // Use the component's removeFocus method to ensure proper blur handling
      await input.callMethod('removeFocus');
      await page.waitForChanges();
      
      className = await inputContainer.getProperty('className');
      expect(className).not.toContain('input--pressed');
    });

    it('should have resizable property defaulted to false', async () => {
      const input = await page.find('bds-input');
      const resizable = await input.getProperty('resizable');
      expect(resizable).toBe(false);
    });

    it('should set resize style to none when resizable is false', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" resizable="false" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const resizeStyle = await textareaElement.getComputedStyle();
      expect(resizeStyle.resize).toBe('none');
    });

    it('should set resize style to vertical when resizable is true and autoResize is false', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" resizable="true" auto-resize="false" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const resizeStyle = await textareaElement.getComputedStyle();
      expect(resizeStyle.resize).toBe('vertical');
    });

    it('should set resize style to none when resizable is true but autoResize is true', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" resizable="true" auto-resize="true" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const resizeStyle = await textareaElement.getComputedStyle();
      expect(resizeStyle.resize).toBe('none');
    });

    it('should allow manual resizing when resizable is true and autoResize is false', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" resizable="true" auto-resize="false" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      
      // Get initial height
      const initialHeight = await textareaElement.getComputedStyle().then(style => style.height);
      
      // The resize handle should be available (this test verifies the CSS is correctly applied)
      const resizeStyle = await textareaElement.getComputedStyle();
      expect(resizeStyle.resize).toBe('vertical');
      
      // Note: Actual drag and resize simulation is complex in e2e tests,
      // but we can verify the CSS property is correctly applied
      expect(initialHeight).toBeTruthy();
    });

    it('should handle min and max height correctly with resizable textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" resizable="true" auto-resize="false" min-height="100" max-height="400" data-test="bds-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const style = await textareaElement.getComputedStyle();
      
      // These should be set as inline styles and reflected in computed styles
      expect(style.minHeight).toBe('100px');
      expect(style.maxHeight).toBe('400px');
    });
  });

  describe('Textarea Methods', () => {
    beforeEach(async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" data-test="bds-input"></bds-input>`,
      });
    });

    it('should be able to set focus programmatically', async () => {
      const input = await page.find('bds-input');
      await input.callMethod('setFocus');
      await page.waitForChanges();

      const activeElement = await page.evaluate(() => {
        const shadowRoot = document.querySelector('bds-input').shadowRoot;
        return shadowRoot.activeElement?.tagName;
      });
      expect(activeElement).toBe('TEXTAREA');
    });

    it('should be able to clear textarea programmatically', async () => {
      const input = await page.find('bds-input');
      const textareaElement = await page.find('bds-input >>> textarea');
      
      await textareaElement.type('Test content');
      await page.waitForChanges();
      
      await input.callMethod('clear');
      await page.waitForChanges();
      
      const value = await textareaElement.getProperty('value');
      expect(value).toBe('');
    });

    it('should return textarea element from getInputElement method', async () => {
      const input = await page.find('bds-input');
      await input.callMethod('getInputElement');
      
      // The element should be a textarea
      const textareaElement = await page.find('bds-input >>> textarea');
      expect(textareaElement).toBeTruthy();
    });

    it('should validate textarea correctly', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" required="true" data-test="bds-input"></bds-input>`,
      });

      const input = await page.find('bds-input');
      
      // Empty textarea should be invalid when required
      let isValid = await input.callMethod('isValid');
      expect(isValid).toBe(false);
      
      // Fill textarea and check validity
      const textareaElement = await page.find('bds-input >>> textarea');
      await textareaElement.type('Valid content');
      await page.waitForChanges();
      
      isValid = await input.callMethod('isValid');
      expect(isValid).toBe(true);
    });
  });
});