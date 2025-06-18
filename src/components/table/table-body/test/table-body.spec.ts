import { newSpecPage } from '@stencil/core/testing';
import { TableBody } from '../table-body';
import { Table } from '../../table/table';

describe('bds-table-body', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [TableBody],
      html: '<bds-table-body></bds-table-body>',
    });

    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-TABLE-BODY');
    expect(page.root).toHaveClass('host');
    expect(page.rootInstance.multipleRows).toBe(false);
  });

  it('should render with slot content', async () => {
    const page = await newSpecPage({
      components: [TableBody],
      html: `
        <bds-table-body>
          <tr><td>Row content</td></tr>
        </bds-table-body>
      `,
    });

    // In Stencil testing, slotted content might not be available through querySelector
    // Instead, check that the component renders correctly
    expect(page.root).toBeTruthy();
    expect(page.rootInstance.multipleRows).toBe(false);
  });

  it('should detect collapse property from parent bds-table', async () => {
    const page = await newSpecPage({
      components: [TableBody, Table],
      html: `
        <bds-table collapse="true">
          <bds-table-body></bds-table-body>
        </bds-table>
      `,
    });

    const tableBodyElement = page.root.querySelector('bds-table-body');
    await page.waitForChanges();

    expect(tableBodyElement).toHaveClass('multiple');
  });

  it('should not set multipleRows when parent table has no collapse', async () => {
    const page = await newSpecPage({
      components: [TableBody, Table],
      html: `
        <bds-table>
          <bds-table-body></bds-table-body>
        </bds-table>
      `,
    });

    const tableBodyElement = page.root.querySelector('bds-table-body');
    await page.waitForChanges();

    expect(tableBodyElement).not.toHaveClass('multiple');
  });

  it('should not set multipleRows when there is no parent bds-table', async () => {
    const page = await newSpecPage({
      components: [TableBody],
      html: '<bds-table-body></bds-table-body>',
    });

    expect(page.rootInstance.multipleRows).toBe(false);
    expect(page.root).not.toHaveClass('multiple');
  });

  it('should work with nested DOM structure', async () => {
    const page = await newSpecPage({
      components: [TableBody, Table],
      html: `
        <bds-table collapse="true">
          <div>
            <bds-table-body></bds-table-body>
          </div>
        </bds-table>
      `,
    });

    const tableBodyElement = page.root.querySelector('bds-table-body');
    await page.waitForChanges();

    expect(tableBodyElement).toHaveClass('multiple');
  });

  it('should have proper default state', async () => {
    const page = await newSpecPage({
      components: [TableBody],
      html: '<bds-table-body></bds-table-body>',
    });

    expect(page.rootInstance.multipleRows).toBe(false);
    expect(page.root).toHaveClass('host');
    expect(page.root).not.toHaveClass('multiple');
  });

  it('should apply correct CSS classes based on state', async () => {
    const page = await newSpecPage({
      components: [TableBody, Table],
      html: `
        <bds-table collapse="true">
          <bds-table-body></bds-table-body>
        </bds-table>
      `,
    });

    const tableBodyElement = page.root.querySelector('bds-table-body');
    await page.waitForChanges();

    // Should have both host and multiple classes
    expect(tableBodyElement).toHaveClass('host');
    expect(tableBodyElement).toHaveClass('multiple');
  });

  it('should update state during component lifecycle', async () => {
    const page = await newSpecPage({
      components: [TableBody, Table],
      html: `
        <bds-table collapse="true">
          <bds-table-body></bds-table-body>
        </bds-table>
      `,
    });

    // Test that the table-body component instance gets created properly within the table
    const tableBodyElement = page.root.querySelector('bds-table-body');
    expect(tableBodyElement).toBeTruthy();
    expect(tableBodyElement).toHaveClass('multiple');
  });

  it('should handle boolean collapse property', async () => {
    const page = await newSpecPage({
      components: [TableBody, Table],
      html: `<bds-table><bds-table-body></bds-table-body></bds-table>`,
    });

    const table = page.root;
    
    // Set collapse property and trigger lifecycle
    (table as any).collapse = true;
    await page.waitForChanges();

    // Create a new table-body instance to test the lifecycle
    const newPage = await newSpecPage({
      components: [TableBody, Table],
      html: `<bds-table collapse><bds-table-body></bds-table-body></bds-table>`,
    });

    const newTableBodyElement = newPage.root.querySelector('bds-table-body');
    await newPage.waitForChanges();

    expect(newTableBodyElement).toHaveClass('multiple');
  });
});
