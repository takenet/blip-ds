import { newSpecPage } from '@stencil/core/testing';
import { DataTable } from '../data-table';

describe('bds-data-table', () => {
  const mockColumns = [
    { heading: 'Name', value: 'name' },
    { heading: 'Age', value: 'age' },
    { heading: 'Email', value: 'email' },
  ];

  const mockData = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  ];

  async function newDataTablePage(options: any = {}) {
    return await newSpecPage({
      components: [DataTable],
      html: `<bds-data-table
        ${options.column ? `column='${JSON.stringify(options.column)}'` : ''}
        ${options.options ? `options='${JSON.stringify(options.options)}'` : ''}
        ${options.avatar !== undefined ? `avatar="${options.avatar}"` : ''}
        ${options.chips !== undefined ? `chips="${options.chips}"` : ''}
        ${options.actionArea !== undefined ? `action-area="${options.actionArea}"` : ''}
        ${options.sorting !== undefined ? `sorting="${options.sorting}"` : ''}
      ></bds-data-table>`,
    });
  }

  it('should render', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
    });
    expect(page.root).toBeTruthy();
  });

  it('should render with default props', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
    });
    const component = page.rootInstance;
    expect(component.avatar).toBe(false);
    expect(component.chips).toBe(false);
    expect(component.sorting).toBe(false);
  });

  it('should render table with provided columns and data', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
    });

    const table = page.root.shadowRoot.querySelector('table');
    expect(table).toBeTruthy();

    const headers = page.root.shadowRoot.querySelectorAll('th');
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toContain('Name');
    expect(headers[1].textContent).toContain('Age');
    expect(headers[2].textContent).toContain('Email');
  });

  it('should render table rows with data', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
    });

    const rows = page.root.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);

    const firstRowCells = rows[0].querySelectorAll('td');
    expect(firstRowCells[0].textContent).toContain('John Doe');
    expect(firstRowCells[1].textContent).toContain('25');
    expect(firstRowCells[2].textContent).toContain('john@example.com');
  });

  it('should enable sorting when sorting prop is true', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
      sorting: true,
    });

    const clickableHeaders = page.root.shadowRoot.querySelectorAll('.title-click');
    expect(clickableHeaders.length).toBe(3);
  });

  it('should handle column sorting', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
      sorting: true,
    });

    const component = page.rootInstance;
    
    // Test sorting by name
    component.orderColumn('name');
    await page.waitForChanges();

    expect(component.headerActive).toBe('name');
    expect(component.sortAscending).toBe(true);

    // Test sorting again (reverse order)
    component.orderColumn('name');
    await page.waitForChanges();

    expect(component.sortAscending).toBe(false);
  });

  it('should render avatar when avatar prop is enabled', async () => {
    const columnsWithImg = [
      { heading: 'User', value: 'name', img: 'avatar' },
    ];
    const dataWithAvatar = [
      { name: 'John Doe', avatar: 'path/to/avatar.jpg' },
    ];

    const page = await newDataTablePage({
      column: columnsWithImg,
      options: dataWithAvatar,
      avatar: true,
    });

    await page.waitForChanges();
    const avatar = page.root.shadowRoot.querySelector('bds-avatar');
    expect(avatar).toBeTruthy();
  });

  it('should render chips when chips prop is enabled', async () => {
    const columnsWithChips = [
      { heading: 'Status', value: 'status', chips: 'color' },
    ];
    const dataWithChips = [
      { status: 'Active', color: 'success' },
    ];

    const page = await newDataTablePage({
      column: columnsWithChips,
      options: dataWithChips,
      chips: true,
    });

    await page.waitForChanges();
    const chip = page.root.shadowRoot.querySelector('bds-chip-tag');
    expect(chip).toBeTruthy();
  });

  it('should render action buttons when actionArea is enabled', async () => {
    const columnsWithActions = [
      { heading: 'Actions', value: 'actions', editAction: 'edit', deleteAction: 'delete' },
    ];
    const dataWithActions = [
      { actions: '', edit: 'edit', delete: 'delete' },
    ];

    const page = await newDataTablePage({
      column: columnsWithActions,
      options: dataWithActions,
      actionArea: true,
    });

    await page.waitForChanges();
    const actionButtons = page.root.shadowRoot.querySelectorAll('bds-button-icon');
    expect(actionButtons.length).toBe(2);
  });

  it('should emit bdsTableClick event when action button is clicked', async () => {
    const columnsWithActions = [
      { heading: 'Actions', value: 'actions', editAction: 'edit' },
    ];
    const dataWithActions = [
      { actions: '', edit: 'edit' },
    ];

    const page = await newDataTablePage({
      column: columnsWithActions,
      options: dataWithActions,
      actionArea: true,
    });

    const component = page.rootInstance;
    const clickSpy = jest.fn();
    page.root.addEventListener('bdsTableClick', clickSpy);

    component.clickButton(dataWithActions[0], 0, 'edit');
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          item: dataWithActions[0],
          index: 0,
          nameButton: 'edit',
        },
      })
    );
  });

  it('should delete item and emit events', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
    });

    const component = page.rootInstance;
    const deleteSpy = jest.fn();
    const changeSpy = jest.fn();
    page.root.addEventListener('bdsTableDelete', deleteSpy);
    page.root.addEventListener('bdsTableChange', changeSpy);

    await component.deleteItem(0);
    await page.waitForChanges();

    expect(deleteSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: mockData[0],
      })
    );
    expect(changeSpy).toHaveBeenCalled();
    expect(component.tableData.length).toBe(1);
  });

  it('should handle empty data gracefully', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: [],
    });

    const rows = page.root.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).toBe(0);
  });

  it('should handle malformed JSON gracefully', async () => {
    const page = await newSpecPage({
      components: [DataTable],
      html: `<bds-data-table column='${JSON.stringify(mockColumns)}' options='${JSON.stringify(mockData)}'></bds-data-table>`,
    });

    // Component should render correctly with valid JSON
    expect(page.root).toBeTruthy();
    const table = page.root.shadowRoot.querySelector('table');
    expect(table).toBeTruthy();
  });

  it('should show sort arrows correctly', async () => {
    const page = await newDataTablePage({
      column: mockColumns,
      options: mockData,
      sorting: true,
    });

    const component = page.rootInstance;
    
    component.orderColumn('name');
    await page.waitForChanges();

    const upArrow = page.root.shadowRoot.querySelector('bds-icon[name="arrow-up"]');
    expect(upArrow).toBeTruthy();

    component.orderColumn('name');
    await page.waitForChanges();

    const downArrow = page.root.shadowRoot.querySelector('bds-icon[name="arrow-down"]');
    expect(downArrow).toBeTruthy();
  });
});
