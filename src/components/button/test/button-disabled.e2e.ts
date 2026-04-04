import { newE2EPage } from '@stencil/core/testing';

describe('button disabled behavior e2e tests', () => {
  it('should not emit bdsClick event when disabled and clicked', async () => {
    const page = await newE2EPage({
      html: `<bds-button disabled>Disabled Button</bds-button>`,
    });

    const button = await page.find('bds-button');
    const bdsClickSpy = await button.spyOnEvent('bdsClick');

    await button.click();
    await page.waitForChanges();

    expect(bdsClickSpy).not.toHaveReceivedEvent();
  });

  it('should not emit bdsClick event when disabled and Enter key is pressed on focus div', async () => {
    const page = await newE2EPage({
      html: `<bds-button disabled>Disabled Button</bds-button>`,
    });

    const button = await page.find('bds-button');
    const bdsClickSpy = await button.spyOnEvent('bdsClick');

    // Focus on the focus div inside shadow DOM
    await page.evaluate(() => {
      const button = document.querySelector('bds-button');
      const focusDiv = button.shadowRoot.querySelector('.focus');
      focusDiv.focus();
    });
    await page.waitForChanges();

    // Simulate Enter key press
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(bdsClickSpy).not.toHaveReceivedEvent();
  });

  it('should not submit form when disabled button is clicked', async () => {
    const page = await newE2EPage({
      html: `<form><bds-input></bds-input><bds-button type="submit" disabled>Submit</bds-button></form>`,
    });

    const form = await page.find('form');
    const formSubmitSpy = await form.spyOnEvent('submit');

    const button = await page.find('bds-button');
    await button.click();
    await page.waitForChanges();

    expect(formSubmitSpy).not.toHaveReceivedEvent();
  });

  it('should not submit form when disabled button receives Enter key', async () => {
    const page = await newE2EPage({
      html: `<form><bds-input></bds-input><bds-button type="submit" disabled>Submit</bds-button></form>`,
    });

    const form = await page.find('form');
    const formSubmitSpy = await form.spyOnEvent('submit');

    // Focus on the focus div inside shadow DOM
    await page.evaluate(() => {
      const button = document.querySelector('bds-button');
      const focusDiv = button.shadowRoot.querySelector('.focus');
      focusDiv.focus();
    });
    await page.waitForChanges();

    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(formSubmitSpy).not.toHaveReceivedEvent();
  });

  it('should have disabled attribute on native button element', async () => {
    const page = await newE2EPage({
      html: `<bds-button disabled>Disabled Button</bds-button>`,
    });

    // Check the disabled property through the component
    const button = await page.find('bds-button');
    const disabledProp = await button.getProperty('disabled');
    expect(disabledProp).toBe(true);
  });

  it('should have aria-disabled="true" when disabled', async () => {
    const page = await newE2EPage({
      html: `<bds-button disabled>Disabled Button</bds-button>`,
    });

    // Evaluate the aria-disabled attribute in the shadow DOM
    const ariaDisabled = await page.evaluate(() => {
      const button = document.querySelector('bds-button');
      const shadowButton = button.shadowRoot.querySelector('button');
      return shadowButton.getAttribute('aria-disabled');
    });
    expect(ariaDisabled).toBe('true');
  });

  it('should have tabindex="-1" on focus div when disabled', async () => {
    const page = await newE2EPage({
      html: `<bds-button disabled>Disabled Button</bds-button>`,
    });

    // Evaluate the tabindex on the focus div
    const tabindex = await page.evaluate(() => {
      const button = document.querySelector('bds-button');
      const focusDiv = button.shadowRoot.querySelector('.focus');
      return focusDiv.getAttribute('tabindex');
    });
    expect(tabindex).toBe('-1');
  });

  it('should have tabindex="0" on focus div when not disabled', async () => {
    const page = await newE2EPage({
      html: `<bds-button>Enabled Button</bds-button>`,
    });

    // Evaluate the tabindex on the focus div
    const tabindex = await page.evaluate(() => {
      const button = document.querySelector('bds-button');
      const focusDiv = button.shadowRoot.querySelector('.focus');
      return focusDiv.getAttribute('tabindex');
    });
    expect(tabindex).toBe('0');
  });

  it('should emit bdsClick event when not disabled and clicked', async () => {
    const page = await newE2EPage({
      html: `<bds-button>Enabled Button</bds-button>`,
    });

    const button = await page.find('bds-button');
    const bdsClickSpy = await button.spyOnEvent('bdsClick');

    await button.click();
    await page.waitForChanges();

    expect(bdsClickSpy).toHaveReceivedEvent();
  });

  it('should emit bdsClick event when not disabled and Enter key is pressed', async () => {
    const page = await newE2EPage({
      html: `<bds-button>Enabled Button</bds-button>`,
    });

    const button = await page.find('bds-button');
    const bdsClickSpy = await button.spyOnEvent('bdsClick');

    // Focus on the focus div inside shadow DOM
    await page.evaluate(() => {
      const button = document.querySelector('bds-button');
      const focusDiv = button.shadowRoot.querySelector('.focus');
      focusDiv.focus();
    });
    await page.waitForChanges();

    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(bdsClickSpy).toHaveReceivedEvent();
  });
});
