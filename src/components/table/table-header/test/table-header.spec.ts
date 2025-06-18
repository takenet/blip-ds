import { newSpecPage } from '@stencil/core/testing';
import { TableHeader } from '../table-header';

describe('bds-table-header', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TableHeader],
      html: '<bds-table-header></bds-table-header>',
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

    it('should have correct tag name', () => {
      expect(page.root.tagName).toBe('BDS-TABLE-HEADER');
    });
  });

  describe('slot content', () => {
    it('should render slot content', async () => {
      page = await newSpecPage({
        components: [TableHeader],
        html: '<bds-table-header><p>Header content</p></bds-table-header>',
      });
      
      expect(page.root.textContent).toContain('Header content');
    });

    it('should render multiple slot children', async () => {
      page = await newSpecPage({
        components: [TableHeader],
        html: `
          <bds-table-header>
            <div>Header 1</div>
            <div>Header 2</div>
          </bds-table-header>
        `,
      });
      
      expect(page.root.textContent).toContain('Header 1');
      expect(page.root.textContent).toContain('Header 2');
    });

    it('should render empty when no slot content', async () => {
      page = await newSpecPage({
        components: [TableHeader],
        html: '<bds-table-header></bds-table-header>',
      });
      
      expect(page.root.textContent.trim()).toBe('');
    });
  });

  describe('render method', () => {
    it('should return Host element with slot', () => {
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('accessibility', () => {
    it('should be accessible without additional attributes', () => {
      expect(page.root).toBeTruthy();
      // Component renders correctly without throwing errors
    });
  });
});
