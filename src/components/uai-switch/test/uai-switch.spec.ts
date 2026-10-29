import { newSpecPage } from '@stencil/core/testing';
import { UaiSwitch } from '../uai-switch';

describe('uai-switch', () => {
  it('preserves defaults, input references and native switch semantics', async () => {
    const page = await newSpecPage({
      components: [UaiSwitch],
      html: '<uai-switch refer="setting" aria-label="Notificações" name="notifications" data-test="setting"></uai-switch>',
    });
    const input = page.root.shadowRoot.querySelector('input');
    expect(input.id).toBe('setting');
    expect(input.name).toBe('notifications');
    expect(input.value).toBe('on');
    expect(input.getAttribute('role')).toBe('switch');
    expect(input.getAttribute('aria-label')).toBe('Notificações');
    expect(input.getAttribute('data-test')).toBe('setting');
    expect(page.rootInstance.size).toBe('standard');
    expect(page.rootInstance.value).toBe('on');
    expect(await page.rootInstance.getInputElement()).toBe(input);
    expect(await page.rootInstance.getValue()).toBe(false);
  });

  it('emits one event for programmatic changes and Enter activation', async () => {
    const page = await newSpecPage({
      components: [UaiSwitch],
      html: '<uai-switch aria-label="Notificações"></uai-switch>',
    });
    const events = jest.fn();
    page.root.addEventListener('uaiChange', events);
    page.rootInstance.checked = true;
    await page.waitForChanges();
    expect(events).toHaveBeenCalledTimes(1);
    expect(events.mock.calls[0][0].detail).toEqual({ checked: true });
    const input = page.root.shadowRoot.querySelector('input');
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await page.waitForChanges();
    expect(events).toHaveBeenCalledTimes(2);
    expect(await page.rootInstance.getValue()).toBe(false);
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', repeat: true, bubbles: true }));
    await page.waitForChanges();
    expect(events).toHaveBeenCalledTimes(2);
  });

  it('preserves legacy size values and ignores disabled activation', async () => {
    for (const size of ['short', 'standard', 'tall']) {
      const page = await newSpecPage({
        components: [UaiSwitch],
        html: `<uai-switch aria-label="Notificações" size="${size}" disabled></uai-switch>`,
      });
      expect(page.root.shadowRoot.querySelector('.switch').classList.contains(`switch--${size}`)).toBe(true);
      const input = page.root.shadowRoot.querySelector('input');
      expect(input.disabled).toBe(true);
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await page.waitForChanges();
      expect(await page.rootInstance.getValue()).toBe(false);
    }
  });

  it('associates the visible setting label with the native switch', async () => {
    const page = await newSpecPage({
      components: [UaiSwitch],
      html: '<uai-switch label="Notificações"></uai-switch>',
    });
    const input = page.root.shadowRoot.querySelector('input');
    expect(page.root.shadowRoot.querySelector('label').contains(input)).toBe(true);
    expect(page.root.shadowRoot.querySelector('.switch__text').textContent).toBe('Notificações');
    expect(input.hasAttribute('aria-label')).toBe(false);
  });
});
