import { newSpecPage } from '@stencil/core/testing';
import { UaiTable } from '../uai-table';

describe('uai-table', () => {
  it('renders the table role and no column style by default', async () => {
    const page = await newSpecPage({ components: [UaiTable], html: '<uai-table label="Dados"></uai-table>' });
    expect(page.root.getAttribute('role')).toBe('table');
    expect(page.root.getAttribute('aria-label')).toBe('Dados');
    expect(page.root.style.getPropertyValue('--uai-table-columns')).toBe('');
  });

  it('shares the columns with the rows through a custom property', async () => {
    const page = await newSpecPage({ components: [UaiTable], html: '<uai-table columns="1fr 2fr"></uai-table>' });
    expect(page.root.style.getPropertyValue('--uai-table-columns')).toBe('1fr 2fr');
  });
});
