import { newSpecPage } from '@stencil/core/testing';
import { UaiRadio } from '../../uai-radio/uai-radio';
import { UaiRadioGroup } from '../uai-radio-group';

describe('uai-radio-group', () => {
  it('sets radiogroup semantics and applies the selected value to its options', async () => {
    const page = await newSpecPage({
      components: [UaiRadioGroup, UaiRadio],
      html: `
        <uai-radio-group aria-label="Forma de pagamento" value="pix">
          <div>
            <uai-radio label="Cartão" value="card"></uai-radio>
            <uai-radio label="Pix" value="pix"></uai-radio>
          </div>
        </uai-radio-group>`,
    });
    const radios = page.root.querySelectorAll('uai-radio');

    expect(page.root.getAttribute('role')).toBe('radiogroup');
    expect(page.root.getAttribute('aria-label')).toBe('Forma de pagamento');
    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);
  });

  it('submits one group value and emits one group event after selection', async () => {
    const page = await newSpecPage({
      components: [UaiRadioGroup, UaiRadio],
      html: `
        <uai-radio-group aria-label="Forma de pagamento" name="payment" value="card">
          <div>
            <uai-radio label="Cartão" value="card"></uai-radio>
            <uai-radio label="Pix" value="pix"></uai-radio>
          </div>
        </uai-radio-group>`,
    });
    const change = jest.fn();
    page.root.addEventListener('uaiRadioGroupChange', change);

    const selected = page.root.querySelectorAll('uai-radio')[1].shadowRoot.querySelector('input');
    selected.checked = true;
    selected.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await page.waitForChanges();

    expect(page.root.value).toBe('pix');
    expect(change).toHaveBeenCalledTimes(1);
    expect(change.mock.calls[0][0].detail).toEqual({ value: 'pix' });
  });

  it('uses a single roving tab stop and skips disabled options with arrow navigation', async () => {
    const page = await newSpecPage({
      components: [UaiRadioGroup, UaiRadio],
      html: `
        <uai-radio-group aria-label="Forma de pagamento" value="card">
          <uai-radio label="Cartão" value="card"></uai-radio>
          <uai-radio label="Boleto" value="boleto" disabled></uai-radio>
          <uai-radio label="Pix" value="pix"></uai-radio>
        </uai-radio-group>`,
    });
    const radios = page.root.querySelectorAll('uai-radio');

    expect(radios[0].shadowRoot.querySelector('input').tabIndex).toBe(0);
    expect(radios[1].shadowRoot.querySelector('input').tabIndex).toBe(-1);
    expect(radios[2].shadowRoot.querySelector('input').tabIndex).toBe(-1);

    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true });
    radios[0].shadowRoot.querySelector('input').dispatchEvent(event);
    await page.waitForChanges();

    expect(page.root.value).toBe('pix');
    expect(radios[2].checked).toBe(true);
  });

  it('does not include radios owned by a nested group', async () => {
    const page = await newSpecPage({
      components: [UaiRadioGroup, UaiRadio],
      html: `
        <uai-radio-group aria-label="Grupo externo" value="outer">
          <div>
            <uai-radio label="Externo" value="outer"></uai-radio>
            <uai-radio-group aria-label="Grupo interno" value="inner">
              <uai-radio label="Interno" value="inner"></uai-radio>
            </uai-radio-group>
          </div>
        </uai-radio-group>`,
    });
    const [outer, inner] = page.root.querySelectorAll('uai-radio');

    expect(page.root.value).toBe('outer');
    expect(outer.checked).toBe(true);
    expect(inner.checked).toBe(true);
  });
});
