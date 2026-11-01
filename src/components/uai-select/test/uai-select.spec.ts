import { newSpecPage } from '@stencil/core/testing';
import { UaiSelect } from '../uai-select';

const OPTIONS = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta', disabled: true },
  { value: 'c', label: 'Gamma' },
];

describe('uai-select', () => {
  it('renders the placeholder and the combobox contract', async () => {
    const page = await newSpecPage({
      components: [UaiSelect],
      html: '<uai-select label="Letra" placeholder="Selecione"></uai-select>',
    });
    page.root.options = OPTIONS;
    await page.waitForChanges();
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.getAttribute('role')).toBe('combobox');
    expect(button.getAttribute('aria-haspopup')).toBe('listbox');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(page.root.shadowRoot.querySelector('.select__value').textContent).toBe('Selecione');
  });

  it('shows the label of the chosen value', async () => {
    const page = await newSpecPage({ components: [UaiSelect], html: '<uai-select label="Letra"></uai-select>' });
    page.root.options = OPTIONS;
    page.root.value = 'c';
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.select__value').textContent).toBe('Gamma');
    expect(page.root.classList.contains('uai-select--filled')).toBe(true);
  });

  it('chooses an enabled option, emits uaiChange once and ignores disabled options', async () => {
    const page = await newSpecPage({ components: [UaiSelect], html: '<uai-select label="Letra"></uai-select>' });
    page.root.options = OPTIONS;
    await page.waitForChanges();
    const onChange = jest.fn();
    page.root.addEventListener('uaiChange', onChange);
    const instance = page.rootInstance;
    instance.select(1);
    expect(onChange).not.toHaveBeenCalled();
    instance.select(2);
    instance.select(2);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].detail).toEqual({ value: 'c', label: 'Gamma' });
    expect(page.root.value).toBe('c');
  });

  it('does not emit uaiChange when the value is set from outside', async () => {
    const page = await newSpecPage({ components: [UaiSelect], html: '<uai-select label="Letra"></uai-select>' });
    page.root.options = OPTIONS;
    const onChange = jest.fn();
    page.root.addEventListener('uaiChange', onChange);
    page.root.value = 'a';
    await page.waitForChanges();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('skips disabled options with the arrow keys', async () => {
    const page = await newSpecPage({ components: [UaiSelect], html: '<uai-select label="Letra"></uai-select>' });
    page.root.options = OPTIONS;
    await page.waitForChanges();
    const instance = page.rootInstance;
    instance.openList();
    expect(instance.activeIndex).toBe(0);
    instance.moveActive(instance.activeIndex + 1, 1);
    expect(instance.activeIndex).toBe(2);
    instance.moveActive(instance.activeIndex - 1, -1);
    expect(instance.activeIndex).toBe(0);
  });

  it('does not open while disabled', async () => {
    const page = await newSpecPage({ components: [UaiSelect], html: '<uai-select label="Letra" disabled></uai-select>' });
    page.root.options = OPTIONS;
    await page.waitForChanges();
    page.rootInstance.openList();
    expect(page.rootInstance.isOpen).toBe(false);
  });
});
