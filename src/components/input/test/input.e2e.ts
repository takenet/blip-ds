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
    it('should render textarea when isTextarea is true', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea label="Textarea Label" placeholder="Enter multiline text..." data-test="bds-textarea"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea[data-test="bds-textarea"]');
      const inputElement = await page.find('bds-input >>> input');
      
      expect(textareaElement).toBeTruthy();
      expect(inputElement).toBeFalsy();
    });

    it('should allow typing multiline text in textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea data-test="bds-textarea"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea[data-test="bds-textarea"]');
      
      await textareaElement.type('Line 1');
      await page.keyboard.press('Enter');
      await textareaElement.type('Line 2');
      await page.waitForChanges();
      
      const value = await textareaElement.getProperty('value');
      expect(value).toBe('Line 1\nLine 2');
    });

    it('should emit bdsChange event when typing in textarea', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea data-test="bds-textarea"></bds-input>`,
      });

      const input = await page.find('bds-input');
      const bdsChangeEvent = await input.spyOnEvent('bdsChange');
      const textareaElement = await page.find('bds-input >>> textarea[data-test="bds-textarea"]');

      await textareaElement.type('Multiline\nText');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should handle textarea with icon and label', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea icon="edit" label="Description" placeholder="Enter description..." data-test="bds-textarea"></bds-input>`,
      });

      const input = await page.find('bds-input');
      const icon = await input.getProperty('icon');
      const label = await input.getProperty('label');
      
      expect(icon).toBe('edit');
      expect(label).toBe('Description');
    });

    it('should support rows and cols properties', async () => {
      page = await newE2EPage({
        html: `<bds-input is-textarea rows="5" cols="40" data-test="bds-textarea"></bds-input>`,
      });

      const textareaElement = await page.find('bds-input >>> textarea[data-test="bds-textarea"]');
      const rows = await textareaElement.getProperty('rows');
      const cols = await textareaElement.getProperty('cols');
      
      expect(rows).toBe(5);
      expect(cols).toBe(40);
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

    it('should support textarea accessibility navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-input is-textarea label="Accessible Textarea" data-test="bds-textarea"></bds-input>
          <button>Next button</button>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT');
      
      // Test that we can interact with the textarea through the component
      const textareaElement = await page.find('bds-input >>> textarea[data-test="bds-textarea"]');
      await textareaElement.type('Accessibility test');
      await page.waitForChanges();
      
      const value = await textareaElement.getProperty('value');
      expect(value).toBe('Accessibility test');
    });
  });
});