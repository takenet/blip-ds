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
});