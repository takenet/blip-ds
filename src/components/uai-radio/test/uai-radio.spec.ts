import { newSpecPage } from '@stencil/core/testing';
import { UaiRadio } from '../uai-radio';

describe('uai-radio', () => {
  it('renders a native radio with its label and value', async () => {
    const page = await newSpecPage({
      components: [UaiRadio],
      html: '<uai-radio label="Cartão" value="card" name="payment"></uai-radio>',
    });
    const input = page.root.shadowRoot.querySelector('input');

    expect(input.type).toBe('radio');
    expect(input.value).toBe('card');
    expect(input.name).toBe('payment');
    expect(input.id).toMatch(/^uai-radio-\d+$/);
    expect(page.root.shadowRoot.querySelector('label').textContent).toContain('Cartão');
  });

  it('emits change and click-change for a user selection', async () => {
    const page = await newSpecPage({
      components: [UaiRadio],
      html: '<uai-radio label="Cartão" value="card"></uai-radio>',
    });
    const change = jest.fn();
    const clickChange = jest.fn();
    page.root.addEventListener('uaiChange', change);
    page.root.addEventListener('uaiClickChange', clickChange);

    const input = page.root.shadowRoot.querySelector('input');
    input.checked = true;
    input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(change).toHaveBeenCalledTimes(1);
    expect(change.mock.calls[0][0].detail).toEqual({ checked: true });
    expect(clickChange).toHaveBeenCalledTimes(1);

    input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();
    expect(change).toHaveBeenCalledTimes(1);
    expect(clickChange).toHaveBeenCalledTimes(2);
  });

  it('sets custom tab index and inherited disabled state on the native input', async () => {
    const page = await newSpecPage({
      components: [UaiRadio],
      html: '<uai-radio label="Cartão" value="card"></uai-radio>',
    });

    await page.rootInstance.setTabIndex(-1);
    await page.rootInstance.setGroupDisabled(true);
    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector('input');
    expect(input.tabIndex).toBe(-1);
    expect(input.disabled).toBe(true);
    expect(page.root.getAttribute('aria-disabled')).toBe('true');
  });
});
