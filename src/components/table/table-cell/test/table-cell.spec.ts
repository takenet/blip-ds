import { newSpecPage } from '@stencil/core/testing';
import { TableCell } from '../table-cell';

describe('bds-table-cell', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TableCell],
      html: '<bds-table-cell></bds-table-cell>',
    });
    component = page.rootInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(page.root).toBeTruthy();
  });

  it('should have default props', () => {
    expect(component.type).toBe('text');
    expect(component.sortable).toBe(false);
    expect(component.justifyContent).toBe('left');
    expect(component.isDense).toBe(false);
  });

  describe('type prop', () => {
    it('should render text type with bds-typo', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="text">Text content</bds-table-cell>',
      });
      
      const typoElement = page.root.querySelector('bds-typo');
      expect(typoElement).toBeTruthy();
      expect(typoElement.getAttribute('variant')).toBe('fs-14');
      expect(typoElement.getAttribute('bold')).toBe('regular');
    });

    it('should render text type with bold when sortable', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="text" sortable="true">Text content</bds-table-cell>',
      });
      
      const typoElement = page.root.querySelector('bds-typo');
      expect(typoElement.getAttribute('bold')).toBe('bold');
    });

    it('should render custom type with cell_custom class', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="custom">Custom content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.cell_custom');
      expect(cellDiv).toBeTruthy();
    });

    it('should render action type with cell_action class', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="action">Action content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.cell_action');
      expect(cellDiv).toBeTruthy();
    });

    it('should render collapse type with td element and colSpan', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="collapse">Collapse content</bds-table-cell>',
      });
      
      const tdElement = page.root.querySelector('td');
      expect(tdElement).toBeTruthy();
      expect(tdElement.getAttribute('colspan')).toBe('2');
    });

    it('should render default slot for unknown type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="unknown">Unknown content</bds-table-cell>',
      });
      
      expect(page.root.innerHTML).toContain('Unknown content');
    });
  });

  describe('justifyContent prop', () => {
    it('should apply left justify class by default', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell>Content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.justify--left');
      expect(cellDiv).toBeTruthy();
    });

    it('should apply center justify class', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell justify-content="center">Content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.justify--center');
      expect(cellDiv).toBeTruthy();
    });

    it('should apply right justify class', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell justify-content="right">Content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.justify--right');
      expect(cellDiv).toBeTruthy();
    });
  });

  describe('dense table detection', () => {
    it('should detect dense table from parent bds-table', async () => {
      // Create a mock document with bds-table parent that has dense-table attribute
      const mockTableElement = document.createElement('bds-table');
      mockTableElement.setAttribute('dense-table', 'true');
      
      // Mock the closest method to return the mock table element
      const mockClosest = jest.fn().mockReturnValue(mockTableElement);
      
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table dense-table="true"><bds-table-cell>Content</bds-table-cell></bds-table>',
      });
      
      // Mock the closest method on the element
      Object.defineProperty(page.rootInstance.element, 'closest', {
        value: mockClosest,
        writable: true
      });
      
      // Trigger componentWillLoad
      await page.rootInstance.componentWillLoad();
      
      expect(mockClosest).toHaveBeenCalledWith('bds-table');
      expect(page.rootInstance.isDense).toBe(true);
    });

    it('should not set dense when parent table is not dense', async () => {
      // Create a mock document with bds-table parent that doesn't have dense-table attribute
      const mockTableElement = document.createElement('bds-table');
      mockTableElement.setAttribute('dense-table', 'false');
      
      // Mock the closest method to return the mock table element
      const mockClosest = jest.fn().mockReturnValue(mockTableElement);
      
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table><bds-table-cell>Content</bds-table-cell></bds-table>',
      });
      
      // Mock the closest method on the element
      Object.defineProperty(page.rootInstance.element, 'closest', {
        value: mockClosest,
        writable: true
      });
      
      // Trigger componentWillLoad
      await page.rootInstance.componentWillLoad();
      
      expect(mockClosest).toHaveBeenCalledWith('bds-table');
      expect(page.rootInstance.isDense).toBe(false);
    });

    it('should not set dense when not inside bds-table', async () => {
      // Mock the closest method to return null (no bds-table parent)
      const mockClosest = jest.fn().mockReturnValue(null);
      
      page = await newSpecPage({
        components: [TableCell],
        html: '<div><bds-table-cell>Content</bds-table-cell></div>',
      });
      
      // Mock the closest method on the element
      Object.defineProperty(page.rootInstance.element, 'closest', {
        value: mockClosest,
        writable: true
      });
      
      // Trigger componentWillLoad
      await page.rootInstance.componentWillLoad();
      
      expect(mockClosest).toHaveBeenCalledWith('bds-table');
      expect(page.rootInstance.isDense).toBe(false);
    });
  });

  describe('CSS classes', () => {
    it('should apply base cell class for text type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="text">Content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.cell');
      expect(cellDiv).toBeTruthy();
    });

    it('should apply dense_cell class', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell>Content</bds-table-cell>',
      });
      
      const cellDiv = page.root.querySelector('.dense_cell');
      expect(cellDiv).toBeTruthy();
    });
  });

  describe('slot content', () => {
    it('should render slot content in text type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="text">Slot content</bds-table-cell>',
      });
      
      expect(page.root.textContent).toContain('Slot content');
    });

    it('should render slot content in custom type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="custom">Custom slot</bds-table-cell>',
      });
      
      expect(page.root.textContent).toContain('Custom slot');
    });

    it('should render slot content in action type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="action">Action slot</bds-table-cell>',
      });
      
      expect(page.root.textContent).toContain('Action slot');
    });

    it('should render slot content in collapse type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="collapse">Collapse slot</bds-table-cell>',
      });
      
      expect(page.root.textContent).toContain('Collapse slot');
    });
  });

  describe('renderContent method', () => {
    it('should return different elements based on type', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="text">Content</bds-table-cell>',
      });
      
      expect(page.root.querySelector('div.cell')).toBeTruthy();
      expect(page.root.querySelector('bds-typo')).toBeTruthy();

      // Test custom type
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="custom">Content</bds-table-cell>',
      });
      
      expect(page.root.querySelector('div.cell_custom')).toBeTruthy();

      // Test action type
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="action">Content</bds-table-cell>',
      });
      
      expect(page.root.querySelector('div.cell_action')).toBeTruthy();

      // Test collapse type
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell type="collapse">Content</bds-table-cell>',
      });
      
      expect(page.root.querySelector('td')).toBeTruthy();
      expect(page.root.querySelector('td').getAttribute('colspan')).toBe('2');
    });
  });

  describe('prop validation', () => {
    it('should handle string boolean for sortable', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell sortable="true">Content</bds-table-cell>',
      });
      
      expect(page.rootInstance.sortable).toBe(true);
    });

    it('should handle boolean false for sortable', async () => {
      page = await newSpecPage({
        components: [TableCell],
        html: '<bds-table-cell sortable="false">Content</bds-table-cell>',
      });
      
      expect(page.rootInstance.sortable).toBe(false);
    });
  });
});
