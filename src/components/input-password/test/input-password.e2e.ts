import { newE2EPage } from '@stencil/core/testing';

describe('bds-input-password e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-password label="Label" icon="edit" placeholder="Digite aqui..." helper-message="Mensagem de ajuda" data-test="bds-input-password"></bds-input-password>`,
    });
  });

  describe('Properties', () => {
    it('should render input-password with correct label', async () => {
      const inputPassword = await page.find('bds-input-password');
      const label = await inputPassword.getAttribute('label');
      expect(label).toBe('Label');
    });

    it('should render input-password with correct icon', async () => {
      const inputPassword = await page.find('bds-input-password');
      const icon = await inputPassword.getAttribute('icon');
      expect(icon).toBe('edit');
    });

    it('should render input-password with correct placeholder', async () => {
      const inputPassword = await page.find('bds-input-password');
      const placeholder = await inputPassword.getAttribute('placeholder');
      expect(placeholder).toBe('Digite aqui...');
    });

    it('should render input-password with correct helper message', async () => {
      const inputPassword = await page.find('bds-input-password');
      const helperMessage = await inputPassword.getAttribute('helper-message');
      expect(helperMessage).toBe('Mensagem de ajuda');
    });
  });

  describe('Interactions', () => {
    it('should allow user to focus the input-password', async () => {
      const inputPassword = await page.find('bds-input-password');
      await inputPassword.click();
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-PASSWORD');
    });

    it('should allow user to type in the input-password', async () => {
      const inputElement = await page.find('bds-input-password >>> [data-test="bds-input-password"]');
      
      await inputElement.type('Hello, E2E!');
      await page.waitForChanges();
      
      const value = await inputElement.getProperty('value');
      expect(value).toBe('Hello, E2E!');
    });
  });

  describe('Events', () => {
    it('should emit bdsInputPasswordChange event when typing', async () => {
      const inputPassword = await page.find('bds-input-password');
      const bdsChangeEvent = await inputPassword.spyOnEvent('bdsInputPasswordChange');
      const inputElement = await page.find('bds-input-password >>> [data-test="bds-input-password"]');

      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsChangeEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputPasswordInput event when typing', async () => {
      const inputPassword = await page.find('bds-input-password');
      const bdsInputEvent = await inputPassword.spyOnEvent('bdsInputPasswordInput');
      const inputElement = await page.find('bds-input-password >>> [data-test="bds-input-password"]');

      await inputElement.type('Cypress');
      await page.waitForChanges();

      expect(bdsInputEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputPasswordFocus event when focused', async () => {
      const inputPassword = await page.find('bds-input-password');
      const bdsFocusEvent = await inputPassword.spyOnEvent('bdsInputPasswordFocus');

      await inputPassword.click();
      await page.waitForChanges();

      expect(bdsFocusEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputPasswordBlur event when blurred', async () => {
      const inputPassword = await page.find('bds-input-password');
      const bdsBlurEvent = await inputPassword.spyOnEvent('bdsInputPasswordBlur');
      const inputElement = await page.find('bds-input-password >>> [data-test="bds-input-password"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(bdsBlurEvent).toHaveReceivedEvent();
    });

    it('should emit bdsInputPasswordSubmit event when Enter is pressed', async () => {
      const inputPassword = await page.find('bds-input-password');
      const bdsSubmitEvent = await inputPassword.spyOnEvent('bdsInputPasswordSubmit');
      const inputElement = await page.find('bds-input-password >>> [data-test="bds-input-password"]');

      await inputElement.type('Cypress');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(bdsSubmitEvent).toHaveReceivedEvent();
    });

    it('should emit bdsKeyDownBackspace event when Backspace is pressed', async () => {
      const inputPassword = await page.find('bds-input-password');
      const bdsKeyDownBackspaceEvent = await inputPassword.spyOnEvent('bdsKeyDownBackspace');
      const inputElement = await page.find('bds-input-password >>> [data-test="bds-input-password"]');

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
          <bds-input-password></bds-input-password>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-INPUT-PASSWORD');
    });
  });
});