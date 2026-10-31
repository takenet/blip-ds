import { newSpecPage } from '@stencil/core/testing';
import { UaiTableRow } from '../uai-table-row';

describe('uai-table-row', () => {
  it('has the row role and is not focusable by default', async () => {
    const page = await newSpecPage({ components: [UaiTableRow], html: '<uai-table-row></uai-table-row>' });
    expect(page.root.getAttribute('role')).toBe('row');
    expect(page.root.hasAttribute('tabindex')).toBe(false);
    expect(page.root.hasAttribute('aria-selected')).toBe(false);
    expect(page.rootInstance.variant).toBe('row');
  });

  it('reflects selected as aria-selected', async () => {
    const page = await newSpecPage({ components: [UaiTableRow], html: '<uai-table-row selected></uai-table-row>' });
    expect(page.root.getAttribute('aria-selected')).toBe('true');
  });

  it('activates a clickable row with Enter and Space', async () => {
    const page = await newSpecPage({ components: [UaiTableRow], html: '<uai-table-row clickable></uai-table-row>' });
    expect(page.root.getAttribute('tabindex')).toBe('0');
    const onClick = jest.fn();
    page.root.addEventListener('click', onClick);
    page.root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    page.root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    page.root.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('ignores keys from nested controls and non-clickable rows', async () => {
    const page = await newSpecPage({
      components: [UaiTableRow],
      html: '<uai-table-row clickable><button id="b"></button></uai-table-row>',
    });
    const onClick = jest.fn();
    page.root.addEventListener('click', onClick);
    page.root.querySelector('#b').dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(onClick).not.toHaveBeenCalled();
  });
});
