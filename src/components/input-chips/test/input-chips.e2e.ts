import { newE2EPage } from '@stencil/core/testing';

describe('bds-input-chips e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-chips label="Label" icon="edit" placeholder="Digite aqui..." helper-message="Mensagem de ajuda" data-test="bds-input-chips"></bds-input-chips>`,
    });
  });

  describe('Properties', () => {
    it('should render input-chips with correct label', async () => {
      const inputChips = await page.find('bds-input-chips');
      const label = await inputChips.getAttribute('label');
      expect(label).toBe('Label');
    });

    it('should render input-chips with correct icon', async () => {
      const inputChips = await page.find('bds-input-chips');
      const icon = await inputChips.getAttribute('icon');
      expect(icon).toBe('edit');
    });

    it('should render input-chips with correct placeholder', async () => {
      const inputChips = await page.find('bds-input-chips');
      const placeholder = await inputChips.getAttribute('placeholder');
      expect(placeholder).toBe('Digite aqui...');
    });

    it('should render input-chips with correct helper message', async () => {
      const inputChips = await page.find('bds-input-chips');
      const helperMessage = await inputChips.getAttribute('helper-message');
      expect(helperMessage).toBe('Mensagem de ajuda');
    });
  });

  describe('Interactions', () => {
    it('should allow user to focus the input-chips', async () => {
      const inputChips = await page.find('bds-input-chips');
      await inputChips.click();
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-CHIPS');
    });

    it('should allow user to type in the input-chips', async () => {
      const inputElement = await page.find('bds-input-chips >>> [data-test="bds-input-chips"]');
      
      await inputElement.type('Hello, E2E!');
      await page.waitForChanges();
      
      const value = await inputElement.getProperty('value');
      expect(value).toBe('Hello, E2E!');
    });
  });

  describe('Events', () => {
    it('should emit bdsChange event when Enter is pressed', async () => {
      const inputChips = await page.find('bds-input-chips');
      const bdsChangeEvent = await inputChips.spyOnEvent('bdsChange');
      const inputElement = await page.find('bds-input-chips >>> [data-test="bds-input-chips"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should emit bdsChangeChips event when Enter is pressed', async () => {
      const inputChips = await page.find('bds-input-chips');
      const bdsChangeChipsEvent = await inputChips.spyOnEvent('bdsChangeChips');
      const inputElement = await page.find('bds-input-chips >>> [data-test="bds-input-chips"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(bdsChangeChipsEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputChipsInput event when typing', async () => {
      const inputChips = await page.find('bds-input-chips');
      const bdsInputEvent = await inputChips.spyOnEvent('bdsInputChipsInput');
      const inputElement = await page.find('bds-input-chips >>> [data-test="bds-input-chips"]');

      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputChipsFocus event when focused', async () => {
      const inputChips = await page.find('bds-input-chips');
      const bdsFocusEvent = await inputChips.spyOnEvent('bdsInputChipsFocus');

      await inputChips.click();
      await page.waitForChanges();

      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should emit bdsBlur event when blurred', async () => {
      const inputChips = await page.find('bds-input-chips');
      const bdsBlurEvent = await inputChips.spyOnEvent('bdsBlur');
      const inputElement = await page.find('bds-input-chips >>> [data-test="bds-input-chips"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(bdsBlurEvent).toHaveReceivedEvent();
    });

    it('should emit bdsSubmit event when Enter is pressed', async () => {
      const inputChips = await page.find('bds-input-chips');
      const bdsSubmitEvent = await inputChips.spyOnEvent('bdsSubmit');
      const inputElement = await page.find('bds-input-chips >>> [data-test="bds-input-chips"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(bdsSubmitEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-input-chips></bds-input-chips>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-CHIPS');
    });
  });

  describe('Character deletion while typing', () => {
    it('should allow deleting characters while typing a new chip', async () => {
      page = await newE2EPage({
        html: `<bds-input-chips label="Tags" placeholder="Type here"></bds-input-chips>`,
      });

      const inputElement = await page.find('bds-input-chips >>> input');
      
      // Type some text
      await inputElement.type('test123');
      await page.waitForChanges();
      
      let value = await inputElement.getProperty('value');
      expect(value).toBe('test123');
      
      // Press backspace to delete '3'
      await page.keyboard.press('Backspace');
      await page.waitForChanges();
      
      value = await inputElement.getProperty('value');
      expect(value).toBe('test12');
      
      // Press backspace again to delete '2'
      await page.keyboard.press('Backspace');
      await page.waitForChanges();
      
      value = await inputElement.getProperty('value');
      expect(value).toBe('test1');
    });

    it('should move last chip to input for editing when backspace is pressed on empty input', async () => {
      page = await newE2EPage({
        html: `<bds-input-chips chips='["chip1", "chip2"]'></bds-input-chips>`,
      });

      const inputChips = await page.find('bds-input-chips');
      const inputElement = await page.find('bds-input-chips >>> input');
      
      // Input should be empty initially
      let value = await inputElement.getProperty('value');
      expect(value).toBe('');
      
      // Verify we have 2 chips
      let chips = await page.findAll('bds-input-chips >>> bds-chip-clickable');
      expect(chips.length).toBe(2);
      
      // Press backspace - should move last chip to input
      await inputElement.focus();
      await page.keyboard.press('Backspace');
      await page.waitForChanges();
      
      // Should have 1 chip now
      chips = await page.findAll('bds-input-chips >>> bds-chip-clickable');
      expect(chips.length).toBe(1);
      
      // Input should now contain the removed chip's content
      value = await inputElement.getProperty('value');
      expect(value).toBe('chip2');
    });

    it('should NOT remove chip when backspace is pressed while typing', async () => {
      page = await newE2EPage({
        html: `<bds-input-chips chips='["chip1"]'></bds-input-chips>`,
      });

      const inputElement = await page.find('bds-input-chips >>> input');
      
      // Type some text
      await inputElement.type('newchip');
      await page.waitForChanges();
      
      let value = await inputElement.getProperty('value');
      expect(value).toBe('newchip');
      
      // Verify we still have 1 chip
      let chips = await page.findAll('bds-input-chips >>> bds-chip-clickable');
      expect(chips.length).toBe(1);
      
      // Press backspace - should delete 'p', NOT remove chip
      await page.keyboard.press('Backspace');
      await page.waitForChanges();
      
      value = await inputElement.getProperty('value');
      expect(value).toBe('newchi');
      
      // Should still have 1 chip
      chips = await page.findAll('bds-input-chips >>> bds-chip-clickable');
      expect(chips.length).toBe(1);
    });
  });
});