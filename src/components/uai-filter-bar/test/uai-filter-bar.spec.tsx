import { newSpecPage } from '@stencil/core/testing';
import { UaiFilterBar } from '../uai-filter-bar';

const CATEGORIES = [
  {
    id: 'campanha',
    label: 'Campanha',
    search: true,
    options: ['Black Friday Wpp', 'Lançamento 2026'],
  },
  {
    id: 'canal',
    label: 'Canal',
    options: ['WhatsApp', 'Webchat'],
  },
];

describe('uai-filter-bar', () => {
  it('renders default localized period presets and emits uaiPeriodChange', async () => {
    const page = await newSpecPage({
      components: [UaiFilterBar],
      html: `<uai-filter-bar selected-period="7d"></uai-filter-bar>`,
    });

    const periodSpy = jest.fn();
    page.root.addEventListener('uaiPeriodChange', periodSpy);

    const periodBtns = Array.from(
      page.root.shadowRoot.querySelectorAll('.filter-bar__period-btn'),
    ) as HTMLButtonElement[];
    expect(periodBtns).toHaveLength(6);
    expect(periodBtns[3].getAttribute('aria-pressed')).toBe('true');

    periodBtns[2].click();
    await page.waitForChanges();

    expect(periodSpy).toHaveBeenCalledTimes(1);
    expect(periodSpy.mock.calls[0][0].detail).toEqual({ id: 'today', label: 'Hoje' });
    expect(periodBtns[2].getAttribute('aria-pressed')).toBe('true');
  });

  it('emits uaiSearchChange when search input emits uaiInput', async () => {
    const page = await newSpecPage({
      components: [UaiFilterBar],
      html: `<uai-filter-bar></uai-filter-bar>`,
    });

    const searchSpy = jest.fn();
    page.root.addEventListener('uaiSearchChange', searchSpy);

    const uaiInput = page.root.shadowRoot.querySelector('uai-input') as HTMLElement;
    uaiInput.dispatchEvent(new CustomEvent('uaiInput', { detail: { value: 'carrinho' }, bubbles: true }));
    await page.waitForChanges();

    expect(searchSpy).toHaveBeenCalledTimes(1);
    expect(searchSpy.mock.calls[0][0].detail).toEqual({ value: 'carrinho' });
  });

  it('navigates two-level category popover, applies selection, and removes active chip', async () => {
    const page = await newSpecPage({
      components: [UaiFilterBar],
      html: `<uai-filter-bar></uai-filter-bar>`,
    });

    page.root.categories = CATEGORIES;
    await page.waitForChanges();

    const filterSpy = jest.fn();
    page.root.addEventListener('uaiFilterChange', filterSpy);

    await page.root.open();
    await page.waitForChanges();

    const categoryRows = page.root.shadowRoot.querySelectorAll('.filter-panel__category-row');
    expect(categoryRows).toHaveLength(2);

    (categoryRows[0] as HTMLButtonElement).click();
    await page.waitForChanges();

    const checkboxes = page.root.shadowRoot.querySelectorAll(
      '.filter-panel__option input[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;
    expect(checkboxes).toHaveLength(2);

    checkboxes[0].dispatchEvent(new Event('change'));
    await page.waitForChanges();

    const applyBtn = page.root.shadowRoot.querySelector('.filter-panel__action--primary') as HTMLButtonElement;
    applyBtn.click();
    await page.waitForChanges();

    expect(filterSpy).toHaveBeenCalledTimes(1);
    expect(filterSpy.mock.calls[0][0].detail).toEqual({
      filters: { campanha: ['Black Friday Wpp'] },
    });

    const chipRemove = page.root.shadowRoot.querySelector('.filter-bar__chip-remove') as HTMLButtonElement;
    expect(chipRemove).toBeTruthy();
    chipRemove.click();
    await page.waitForChanges();

    expect(filterSpy).toHaveBeenCalledTimes(2);
    expect(filterSpy.mock.calls[1][0].detail).toEqual({ filters: {} });
    expect(page.root.shadowRoot.querySelector('.filter-bar__chip')).toBeNull();
  });
});
