import { newSpecPage } from '@stencil/core/testing';
import { TableRow } from '../table-row';

describe('bds-table-row', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TableRow],
      html: '<bds-table-row></bds-table-row>',
    });
    component = page.rootInstance;
  });

  describe('basic functionality', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render', () => {
      expect(page.root).toBeTruthy();
    });

    it('should have default props', () => {
      expect(component.clickable).toBe(false);
      expect(component.selected).toBe(false);
      expect(component.isDense).toBe(false);
      expect(component.isCollapsed).toBe(true);
    });

    it('should have correct tag name', () => {
      expect(page.root.tagName).toBe('BDS-TABLE-ROW');
    });
  });

  describe('clickable prop', () => {
    it('should not have clickable class when clickable is false', () => {
      // Component only applies clickable class when clickable is true and not in first row
      expect(page.root.classList.contains('clickable--true')).toBe(false);
    });

    it('should be clickable when set to true', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row clickable="true">Row content</bds-table-row>',
      });
      
      // Component applies clickable class when clickable is true and not in first row
      expect(page.root.classList.contains('clickable--true')).toBe(true);
    });
  });

  describe('selected prop', () => {
    it('should have selected class by default', () => {
      expect(page.root.classList.contains('selected--false')).toBe(true);
    });

    it('should apply selected class when true', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row selected="true">Row content</bds-table-row>',
      });
      
      expect(page.root.classList.contains('selected--true')).toBe(true);
    });
  });

  describe('bodyCollapse prop', () => {
    it('should render th element when bodyCollapse is set', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row body-collapse="collapse1">Collapse content</bds-table-row>',
      });
      
      const th = page.root.querySelector('th');
      expect(th).toBeTruthy();
      expect(th.hasAttribute('colspan')).toBe(true);
      expect(page.root.querySelector('.collapse-body')).toBeTruthy();
    });

    it('should render normal row when bodyCollapse is not set', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row>Normal row content</bds-table-row>',
      });
      
      expect(page.root.querySelector('th')).toBeFalsy();
      expect(page.root.classList.contains('host')).toBe(true);
    });
  });

  describe('dense table detection', () => {
    it('should detect dense table from parent bds-table', async () => {
      // Create a mock bds-table element with dense-table attribute
      const mockTable = document.createElement('bds-table');
      mockTable.setAttribute('dense-table', 'true');
      
      // Create table row and append to mock table
      const page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row>Row content</bds-table-row>',
      });
      
      // Mock the closest method to return our mock table
      const originalClosest = page.root.closest;
      page.root.closest = jest.fn().mockReturnValue(mockTable);
      
      // Access the component instance and trigger componentWillLoad
      const component = page.rootInstance;
      component.componentWillLoad();
      
      // The component should detect the dense table from parent
      expect(component.isDense).toBe(true);
      
      // Restore original method
      page.root.closest = originalClosest;
    });

    it('should apply dense-row class when table is dense', async () => {
      const page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row>Row content</bds-table-row>',
      });
      
      const component = page.rootInstance;
      component.isDense = true;
      
      await page.waitForChanges();
      
      // Check that the dense-row class is applied
      expect(page.root.classList.contains('dense-row')).toBe(true);
    });
  });

  describe('collapse functionality', () => {
    it('should show collapse icon when collapse is enabled', async () => {
      // Manually set collapse for testing
      component.collapse = true;
      await page.waitForChanges();
      
      const icon = page.root.querySelector('bds-icon[name="arrow-down"]');
      expect(icon).toBeTruthy();
    });

    it('should not show collapse icon when collapse is disabled', async () => {
      component.collapse = false;
      await page.waitForChanges();
      
      const icon = page.root.querySelector('bds-icon[name="arrow-down"]');
      expect(icon).toBeFalsy();
    });

    it('should have active class on arrow when collapsed', async () => {
      component.collapse = true;
      component.isCollapsed = true;
      await page.waitForChanges();
      
      const icon = page.root.querySelector('bds-icon.active');
      expect(icon).toBeTruthy();
    });

    it('should not have active class on arrow when expanded', async () => {
      component.collapse = true;
      component.isCollapsed = false;
      await page.waitForChanges();
      
      const icon = page.root.querySelector('bds-icon.active');
      expect(icon).toBeFalsy();
    });
  });

  describe('toggleCollapse method', () => {
    beforeEach(() => {
      // Mock document.querySelector for collapse functionality
      const mockElement = {
        classList: {
          toggle: jest.fn(),
        },
      };
      jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should toggle collapse when collapse is enabled', () => {
      component.collapse = true;
      component.isCollapsed = true;
      
      component.toggleCollapse('test-target');
      
      expect(component.isCollapsed).toBe(false);
    });

    it('should not toggle when collapse is disabled', () => {
      component.collapse = false;
      component.isCollapsed = true;
      
      component.toggleCollapse('test-target');
      
      expect(component.isCollapsed).toBe(true);
    });
  });

  describe('slot content', () => {
    it('should render slot content in normal row', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row>Table row content</bds-table-row>',
      });
      
      expect(page.root.textContent).toContain('Table row content');
    });

    it('should render slot content in collapse body', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row body-collapse="collapse1">Collapse content</bds-table-row>',
      });
      
      expect(page.root.textContent).toContain('Collapse content');
    });
  });

  describe('CSS classes', () => {
    it('should apply host class for normal rows', () => {
      expect(page.root.classList.contains('host')).toBe(true);
    });

    it('should apply dense-row class when dense', async () => {
      component.isDense = true;
      await page.waitForChanges();
      
      expect(page.root.classList.contains('dense-row')).toBe(true);
    });

    it('should apply collapse-body class in collapse mode', async () => {
      page = await newSpecPage({
        components: [TableRow],
        html: '<bds-table-row body-collapse="test">Content</bds-table-row>',
      });
      
      expect(page.root.querySelector('.collapse-body')).toBeTruthy();
    });
  });

  describe('render method', () => {
    it('should return Host element for normal rows', () => {
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });

    it('should return th element for collapse bodies', async () => {
      component.bodyCollapse = 'test';
      component.colspanNumber = 3;
      
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });
});
