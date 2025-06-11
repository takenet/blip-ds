import { newE2EPage } from '@stencil/core/testing';

describe('bds-autocomplete e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-autocomplete label="Label" icon="edit" placeholder="Digite aqui..." helper-message="Mensagem de ajuda" data-test="bds-autocomplete">
          <bds-select-option value="1">Millie Bobby</bds-select-option>
          <bds-select-option value="2">Finn Wolfhard</bds-select-option>
          <bds-select-option value="3">David Harbour</bds-select-option>
          <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
          <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
          <bds-select-option value="6">Noah Schnapp</bds-select-option>
        </bds-autocomplete>
      `,
    });
  });

  describe('Properties', () => {
    it('should render autocomplete with correct label', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const label = await autocomplete.getAttribute('label');
      expect(label).toBe('Label');
    });

    it('should render autocomplete with correct icon', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const icon = await autocomplete.getAttribute('icon');
      expect(icon).toBe('edit');
    });

    it('should render autocomplete with correct placeholder', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const placeholder = await autocomplete.getAttribute('placeholder');
      expect(placeholder).toBe('Digite aqui...');
    });

    it('should render autocomplete with correct helper message', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const helperMessage = await autocomplete.getAttribute('helper-message');
      expect(helperMessage).toBe('Mensagem de ajuda');
    });

    it('should be disabled when disabled property is true', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      await autocomplete.setProperty('disabled', true);
      await page.waitForChanges();

      const disabled = await autocomplete.getProperty('disabled');
      expect(disabled).toBe(true);
    });

    it('should not be disabled when disabled property is false', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      await autocomplete.setProperty('disabled', false);
      await page.waitForChanges();

      const disabled = await autocomplete.getProperty('disabled');
      expect(disabled).toBe(false);
    });

    it('should be danger when danger property is true', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      await autocomplete.setProperty('danger', true);
      await page.waitForChanges();

      const danger = await autocomplete.getProperty('danger');
      expect(danger).toBe(true);
    });

    it('should not be danger when danger property is false', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      await autocomplete.setProperty('danger', false);
      await page.waitForChanges();

      const danger = await autocomplete.getProperty('danger');
      expect(danger).toBe(false);
    });
  });

  describe('Interactions', () => {
    it('should allow user to focus the autocomplete', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      await autocomplete.click();
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-AUTOCOMPLETE');
    });

    it('should allow user to type in the autocomplete', async () => {
      const inputElement = await page.find('bds-autocomplete >>> [data-test="bds-autocomplete"]');
      
      await inputElement.type('Hello, E2E!');
      await page.waitForChanges();
      
      const value = await inputElement.getProperty('value');
      expect(value).toBe('Hello, E2E!');
    });
  });

  describe('Events', () => {
    it('should emit bdsChange event when typing', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const bdsChangeEvent = await autocomplete.spyOnEvent('bdsChange');
      const inputElement = await page.find('bds-autocomplete >>> [data-test="bds-autocomplete"]');

      await inputElement.type('test');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInput event when typing', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const bdsInputEvent = await autocomplete.spyOnEvent('bdsInput');
      const inputElement = await page.find('bds-autocomplete >>> [data-test="bds-autocomplete"]');

      await inputElement.type('test');
      await page.waitForChanges();

      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should emit bdsFocus event when focused', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const bdsFocusEvent = await autocomplete.spyOnEvent('bdsFocus');

      await autocomplete.click();
      await page.waitForChanges();

      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should emit bdsBlur event when blurred', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const bdsBlurEvent = await autocomplete.spyOnEvent('bdsBlur');

      await autocomplete.click();
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(bdsBlurEvent).toHaveReceivedEvent();
    });

    it('should emit bdsSelectedChange event when option is selected', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      const bdsSelectedChangeEvent = await autocomplete.spyOnEvent('bdsSelectedChange');

      await autocomplete.click();
      await page.waitForChanges();
      
      const option = await page.find('bds-select-option[value="1"]');
      await option.click();
      await page.waitForChanges();

      expect(bdsSelectedChangeEvent).toHaveReceivedEvent();
    });
  });

  describe('Selection Types', () => {
    it('should work with single selection type', async () => {
      const autocomplete = await page.find('bds-autocomplete');
      await autocomplete.setProperty('selectionType', 'single');
      await page.waitForChanges();

      const selectionType = await autocomplete.getProperty('selectionType');
      expect(selectionType).toBe('single');
    });

    it('should work with multiple selection type', async () => {
      page = await newE2EPage({
        html: `
          <bds-autocomplete selection-type="multiple" data-test="bds-autocomplete">
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
          </bds-autocomplete>
        `,
      });

      const autocomplete = await page.find('bds-autocomplete');
      const bdsMultiselectedChangeEvent = await autocomplete.spyOnEvent('bdsMultiselectedChange');

      await autocomplete.click();
      await page.waitForChanges();
      
      const option = await page.find('bds-select-option[value="1"]');
      await option.click();
      await page.waitForChanges();

      expect(bdsMultiselectedChangeEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-autocomplete>
            <bds-select-option value="1">Option 1</bds-select-option>
          </bds-autocomplete>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-AUTOCOMPLETE');
    });
  });
});
