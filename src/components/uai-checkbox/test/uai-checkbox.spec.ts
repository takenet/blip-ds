import { newSpecPage } from '@stencil/core/testing';
import { UaiCheckbox } from '../uai-checkbox';

describe('uai-checkbox', () => {
  it('renders the label, native checkbox semantics, and generated id', async () => {
    const page = await newSpecPage({
      components: [UaiCheckbox],
      html: '<uai-checkbox label="Receber novidades" name="updates"></uai-checkbox>',
    });
    const input = page.root.shadowRoot.querySelector('input');

    expect(input.type).toBe('checkbox');
    expect(input.name).toBe('updates');
    expect(input.value).toBe('on');
    expect(input.id).toMatch(/^uai-checkbox-\d+$/);
    expect(input.getAttribute('aria-checked')).toBe('false');
    expect(page.root.shadowRoot.querySelector('label').textContent).toContain('Receber novidades');
  });

  it('reflects an indeterminate state to the native input and accessibility tree', async () => {
    const page = await newSpecPage({
      components: [UaiCheckbox],
      html: '<uai-checkbox label="Selecionar tudo" indeterminate></uai-checkbox>',
    });
    const input = page.root.shadowRoot.querySelector('input');

    expect(input.indeterminate).toBe(true);
    expect(input.getAttribute('aria-checked')).toBe('mixed');
  });

  it('emits one change for user interaction and does not emit the deprecated event', async () => {
    const page = await newSpecPage({
      components: [UaiCheckbox],
      html: '<uai-checkbox label="Receber novidades"></uai-checkbox>',
    });
    const change = jest.fn();
    const deprecatedInput = jest.fn();
    page.root.addEventListener('uaiChange', change);
    page.root.addEventListener('uaiInput', deprecatedInput);

    const input = page.root.shadowRoot.querySelector('input');
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    await page.waitForChanges();

    expect(change).toHaveBeenCalledTimes(1);
    expect(change.mock.calls[0][0].detail).toEqual({ checked: true, indeterminate: false });
    expect(deprecatedInput).not.toHaveBeenCalled();
  });

  it('toggles from indeterminate to checked and does not toggle when disabled', async () => {
    const page = await newSpecPage({
      components: [UaiCheckbox],
      html: '<uai-checkbox label="Selecionar tudo" indeterminate></uai-checkbox>',
    });

    await page.rootInstance.toggle();
    await page.waitForChanges();
    expect(page.root.checked).toBe(true);
    expect(page.root.indeterminate).toBe(false);

    page.root.disabled = true;
    await page.waitForChanges();
    await page.rootInstance.toggle();
    await page.waitForChanges();
    expect(page.root.checked).toBe(true);
  });

  it('preserves refer, dataTest, input references and imperative toggle events', async () => {
    const page = await newSpecPage({
      components: [UaiCheckbox],
      html: '<uai-checkbox refer="terms" label="Termos" name="terms" value="accepted" data-test="terms"></uai-checkbox>',
    });
    const input = page.root.shadowRoot.querySelector('input');
    expect(input.id).toBe('terms');
    expect(input.name).toBe('terms');
    expect(input.value).toBe('accepted');
    expect(input.getAttribute('data-test')).toBe('terms');
    expect(await page.rootInstance.getInputElement()).toBe(input);
    const change = jest.fn();
    page.root.addEventListener('uaiChange', change);
    await page.rootInstance.toggle();
    await page.waitForChanges();
    expect(await page.rootInstance.getValue()).toBe(true);
    expect(change).toHaveBeenCalledTimes(1);
    expect(change.mock.calls[0][0].detail).toEqual({ checked: true, indeterminate: false });
  });
});
