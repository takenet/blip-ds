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

  describe('Textarea Functionality', () => {
    it('should render as textarea when isTextarea is true', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="3" label="Textarea Label" placeholder="Type here..."></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      expect(textareaElement).not.toBeNull();
      
      const rowsAttribute = await textareaElement.getAttribute('rows');
      expect(rowsAttribute).toBe('3');
    });

    it('should allow multi-line text input in textarea mode', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="3" data-test="textarea-input"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const multiLineText = 'Line 1\nLine 2\nLine 3';
      
      await textareaElement.type(multiLineText);
      await page.waitForChanges();
      
      const value = await textareaElement.getProperty('value');
      expect(value).toBe(multiLineText);
    });

    it('should emit events correctly in textarea mode', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="2"></bds-input>`,
      });

      const input = await page.find('bds-input');
      const bdsChangeEvent = await input.spyOnEvent('bdsChange');
      const bdsInputEvent = await input.spyOnEvent('bdsInput');
      const textareaElement = await page.find('bds-input >>> textarea');

      await textareaElement.type('Test text');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should handle focus events in textarea mode', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="2"></bds-input>`,
      });

      const input = await page.find('bds-input');
      const bdsFocusEvent = await input.spyOnEvent('bdsFocus');
      const textareaElement = await page.find('bds-input >>> textarea');

      await textareaElement.focus();
      await page.waitForChanges();
      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should support cols attribute in textarea mode', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="3" cols="50"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea');
      const colsAttribute = await textareaElement.getAttribute('cols');
      expect(colsAttribute).toBe('50');
    });

    it('should have validation logic available in textarea mode', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" required="true" required-error-message="This field is required"></bds-input>`,
      });

      const input = await page.find('bds-input');
      const textareaElement = await page.find('bds-input >>> textarea');
      
      // Check that the textarea has the required attribute
      const isRequired = await textareaElement.getAttribute('required');
      expect(isRequired).not.toBeNull();
      
      // Check that the input component has the required prop
      const inputRequired = await input.getProperty('required');
      expect(inputRequired).toBe(true);
    });

    it('should apply textarea-specific styling', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea="true" rows="3"></bds-input>`,
      });

      const inputContainer = await page.find('bds-input >>> .input');
      const textareaElement = await page.find('bds-input >>> textarea');
      
      // Check that the textarea container has the correct class
      const containerClasses = await inputContainer.getAttribute('class');
      expect(containerClasses).toContain('input--textarea');
      
      // Check that the textarea has the data attribute for styling
      const isTextareaData = await textareaElement.getAttribute('data-is-textarea');
      expect(isTextareaData).toBe('true');
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

    it('should be accessible via Tab navigation in textarea mode', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-input is-textarea="true" rows="3"></bds-input>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT');
    });
  });
});