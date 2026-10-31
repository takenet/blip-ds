import { newSpecPage } from '@stencil/core/testing';
import { UaiTableTh } from '../uai-table-th';

describe('uai-table-th', () => {
  it('is a plain column header without sorting by default', async () => {
    const page = await newSpecPage({ components: [UaiTableTh], html: '<uai-table-th>Nome</uai-table-th>' });
    expect(page.root.getAttribute('role')).toBe('columnheader');
    expect(page.root.hasAttribute('aria-sort')).toBe(false);
    expect(page.root.shadowRoot.querySelector('button')).toBeNull();
  });

  it('sets aria-sort and renders a button when sortable', async () => {
    const page = await newSpecPage({
      components: [UaiTableTh],
      html: '<uai-table-th sortable sort-direction="descending">Nome</uai-table-th>',
    });
    expect(page.root.getAttribute('aria-sort')).toBe('descending');
    expect(page.root.shadowRoot.querySelector('.th__button')).not.toBeNull();
    const icon = page.root.shadowRoot.querySelector('uai-icon');
    expect(icon.getAttribute('name')).toBe('arrow-down');
    expect(icon.classList.contains('th__icon--descending')).toBe(true);
  });

  it('emits the next direction when the sort button is activated', async () => {
    const expected = { none: 'ascending', ascending: 'descending', descending: 'ascending' };
    for (const [current, next] of Object.entries(expected)) {
      const page = await newSpecPage({
        components: [UaiTableTh],
        html: `<uai-table-th sortable sort-direction="${current}">Nome</uai-table-th>`,
      });
      const onSort = jest.fn();
      page.root.addEventListener('uaiTableSort', onSort);
      (page.root.shadowRoot.querySelector('.th__button') as HTMLElement).click();
      expect(onSort.mock.calls[0][0].detail).toBe(next);
    }
  });
});
