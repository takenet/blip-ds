import { newSpecPage } from '@stencil/core/testing';
import { TableHeaderCell } from '../table-header-cell';

describe('bds-table-header-cell', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TableHeaderCell],
      html: '<bds-table-th></bds-table-th>',
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
      expect(component.sortable).toBe(false);
      expect(component.arrow).toBe('');
      expect(component.justifyContent).toBe('left');
      expect(component.isDense).toBe(false);
    });

    it('should have correct tag name', () => {
      expect(page.root.tagName).toBe('BDS-TABLE-TH');
    });
  });

  describe('sortable prop', () => {
    it('should render with sortable false by default', async () => {
      expect(page.root.querySelector('.th_cell--sortable-false')).toBeTruthy();
      expect(page.root.querySelector('bds-typo[bold="semi-bold"]')).toBeTruthy();
    });

    it('should render with sortable true', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="true">Sortable Header</bds-table-th>',
      });
      
      expect(page.root.querySelector('.th_cell--sortable-true')).toBeTruthy();
      expect(page.root.querySelector('bds-typo[bold="bold"]')).toBeTruthy();
      expect(page.root.querySelector('bds-icon')).toBeTruthy();
    });

    it('should not show icon when not sortable', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="false">Header</bds-table-th>',
      });
      
      expect(page.root.querySelector('bds-icon')).toBeFalsy();
    });
  });

  describe('arrow prop', () => {
    it('should show arrow-down icon for asc arrow', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="true" arrow="asc">Header</bds-table-th>',
      });
      
      const icon = page.root.querySelector('bds-icon');
      expect(icon.getAttribute('name')).toBe('arrow-down');
    });

    it('should show arrow-up icon for dsc arrow', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="true" arrow="dsc">Header</bds-table-th>',
      });
      
      const icon = page.root.querySelector('bds-icon');
      expect(icon.getAttribute('name')).toBe('arrow-up');
    });

    it('should show no icon name for unknown arrow value', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="true" arrow="unknown">Header</bds-table-th>',
      });
      
      const icon = page.root.querySelector('bds-icon');
      expect(icon.getAttribute('name')).toBe('');
    });

    it('should show small size icon', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="true" arrow="asc">Header</bds-table-th>',
      });
      
      const icon = page.root.querySelector('bds-icon');
      expect(icon.getAttribute('size')).toBe('small');
    });
  });

  describe('justifyContent prop', () => {
    it('should apply left justify class by default', () => {
      expect(page.root.querySelector('.justify--left')).toBeTruthy();
    });

    it('should apply center justify class', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th justify-content="center">Header</bds-table-th>',
      });
      
      expect(page.root.querySelector('.justify--center')).toBeTruthy();
    });

    it('should apply right justify class', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th justify-content="right">Header</bds-table-th>',
      });
      
      expect(page.root.querySelector('.justify--right')).toBeTruthy();
    });
  });

  describe('dense table detection', () => {
    it('should detect dense table by setting isDense directly', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th>Header</bds-table-th>',
      });
      
      const thInstance = page.rootInstance;
      
      // Test the dense detection by directly setting the state
      thInstance.isDense = true;
      await page.waitForChanges();
      
      expect(thInstance.isDense).toBe(true);
      expect(page.root.querySelector('.dense-th')).toBeTruthy();
    });

    it('should apply dense styling when isDense is true', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th>Header</bds-table-th>',
      });
      
      const thInstance = page.rootInstance;
      
      // Test setting dense state
      thInstance.isDense = true;
      await page.waitForChanges();
      
      const denseTh = page.root.querySelector('.dense-th');
      expect(denseTh).toBeTruthy();
      expect(thInstance.isDense).toBe(true);
    });

    it('should not apply dense styling when isDense is false', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th>Header</bds-table-th>',
      });
      
      const thInstance = page.rootInstance;
      
      // Ensure isDense is false (default state)
      expect(thInstance.isDense).toBe(false);
      
      const denseTh = page.root.querySelector('.dense-th');
      expect(denseTh).toBeFalsy();
    });

    it('should have default isDense value as false', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th>Header</bds-table-th>',
      });
      
      const thInstance = page.rootInstance;
      
      // Test default state
      expect(thInstance.isDense).toBe(false);
      expect(page.root.querySelector('.dense-th')).toBeFalsy();
    });
  });

  describe('CSS classes', () => {
    it('should apply base th_cell class', () => {
      expect(page.root.querySelector('.th_cell')).toBeTruthy();
    });

    it('should apply dense-th class when dense', async () => {
      // Manually set isDense for testing
      component.isDense = true;
      await page.waitForChanges();
      
      expect(page.root.querySelector('.dense-th')).toBeTruthy();
    });
  });

  describe('slot content', () => {
    it('should render slot content', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th>Header Content</bds-table-th>',
      });
      
      expect(page.root.textContent).toContain('Header Content');
    });

    it('should render slot content in bds-typo', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th>Header Text</bds-table-th>',
      });
      
      const typo = page.root.querySelector('bds-typo');
      expect(typo).toBeTruthy();
      expect(typo.getAttribute('variant')).toBe('fs-14');
    });
  });

  describe('render method', () => {
    it('should return Host element with structured content', () => {
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('prop validation', () => {
    it('should handle string boolean for sortable', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="true">Header</bds-table-th>',
      });
      
      expect(page.rootInstance.sortable).toBe(true);
    });

    it('should handle boolean false for sortable', async () => {
      page = await newSpecPage({
        components: [TableHeaderCell],
        html: '<bds-table-th sortable="false">Header</bds-table-th>',
      });
      
      expect(page.rootInstance.sortable).toBe(false);
    });
  });
});
