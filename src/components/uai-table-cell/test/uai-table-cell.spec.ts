import { newSpecPage } from '@stencil/core/testing';
import { UaiTableCell } from '../uai-table-cell';

describe('uai-table-cell', () => {
  it('has the cell role and aligns left by default', async () => {
    const page = await newSpecPage({ components: [UaiTableCell], html: '<uai-table-cell>Texto</uai-table-cell>' });
    expect(page.root.getAttribute('role')).toBe('cell');
    expect(page.rootInstance.justifyContent).toBe('left');
  });

  it('reflects justifyContent', async () => {
    const page = await newSpecPage({
      components: [UaiTableCell],
      html: '<uai-table-cell justify-content="right">1</uai-table-cell>',
    });
    expect(page.root.getAttribute('justify-content')).toBe('right');
  });
});
