import { newSpecPage } from '@stencil/core/testing';
import { UaiPagination } from '../uai-pagination';

const buttons = (page) => Array.from(page.root.shadowRoot.querySelectorAll('uai-button')) as HTMLElement[];

describe('uai-pagination', () => {
  it('renders a labelled navigation with four buttons', async () => {
    const page = await newSpecPage({ components: [UaiPagination], html: '<uai-pagination pages="5"></uai-pagination>' });
    expect(page.root.shadowRoot.querySelector('nav').getAttribute('aria-label')).toBe('Paginação');
    expect(buttons(page).map((button) => button.getAttribute('aria-label'))).toEqual([
      'Primeira página',
      'Página anterior',
      'Próxima página',
      'Última página',
    ]);
  });

  it('disables backward buttons on the first page and forward buttons on the last', async () => {
    const page = await newSpecPage({ components: [UaiPagination], html: '<uai-pagination pages="5"></uai-pagination>' });
    expect(buttons(page).map((button) => button.hasAttribute('disabled'))).toEqual([true, true, false, false]);
    page.root.page = 5;
    await page.waitForChanges();
    expect(buttons(page).map((button) => button.hasAttribute('disabled'))).toEqual([false, false, true, true]);
  });

  it('disables every button with a single page', async () => {
    const page = await newSpecPage({ components: [UaiPagination], html: '<uai-pagination pages="1"></uai-pagination>' });
    expect(buttons(page).every((button) => button.hasAttribute('disabled'))).toBe(true);
  });

  it('clamps the page into 1..pages without emitting', async () => {
    const page = await newSpecPage({ components: [UaiPagination], html: '<uai-pagination pages="5" page="9"></uai-pagination>' });
    const onChange = jest.fn();
    page.root.addEventListener('uaiPaginationChange', onChange);
    expect(page.root.page).toBe(5);
    page.root.page = 0;
    await page.waitForChanges();
    expect(page.root.page).toBe(1);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('emits uaiPaginationChange only for user navigation', async () => {
    const page = await newSpecPage({ components: [UaiPagination], html: '<uai-pagination pages="5" page="2"></uai-pagination>' });
    const onChange = jest.fn();
    page.root.addEventListener('uaiPaginationChange', onChange);
    const instance = page.rootInstance;
    instance.goTo(3);
    instance.goTo(3);
    instance.goTo(99);
    expect(onChange.mock.calls.map((call) => call[0].detail)).toEqual([3, 5]);
    expect(page.root.page).toBe(5);
  });

  it('derives the pages and the range from total and pageSize', async () => {
    const page = await newSpecPage({
      components: [UaiPagination],
      html: '<uai-pagination total="95" page-size="10" page="10"></uai-pagination>',
    });
    page.root.pageSizeOptions = [10, 20];
    await page.waitForChanges();
    expect(page.rootInstance.totalPages).toBe(10);
    expect(page.root.shadowRoot.querySelector('.pagination__range').textContent.replace(/\s+/g, ' ').trim()).toBe('91-95 de 95');
  });

  it('changes the page size, goes back to page 1 and emits both events', async () => {
    const page = await newSpecPage({
      components: [UaiPagination],
      html: '<uai-pagination total="95" page-size="10" page="4"></uai-pagination>',
    });
    page.root.pageSizeOptions = [10, 20];
    await page.waitForChanges();
    const onSize = jest.fn();
    const onPage = jest.fn();
    page.root.addEventListener('uaiPageSizeChange', onSize);
    page.root.addEventListener('uaiPaginationChange', onPage);
    page.rootInstance.onSizeChange(new CustomEvent('uaiChange', { detail: { value: 20, label: '20' } }));
    await page.waitForChanges();
    expect(onSize.mock.calls[0][0].detail).toBe(20);
    expect(onPage.mock.calls[0][0].detail).toBe(1);
    expect(page.root.page).toBe(1);
    expect(page.root.pageSize).toBe(20);
  });

  it('hides the size selector without pageSizeOptions and shows the counter on request', async () => {
    const page = await newSpecPage({
      components: [UaiPagination],
      html: '<uai-pagination pages="5" page-counter language="en_US"></uai-pagination>',
    });
    expect(page.root.shadowRoot.querySelector('.pagination__size')).toBeNull();
    expect(page.root.shadowRoot.querySelector('.pagination__counter').textContent.replace(/\s+/g, ' ').trim()).toBe('of 5 pages');
  });
});
