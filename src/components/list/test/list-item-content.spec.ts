import { newSpecPage } from '@stencil/core/testing';
import { ListItemContent } from '../list-item-content';

describe('bds-list-item-content', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ListItemContent],
      html: '<bds-list-item-content></bds-list-item-content>',
    });
    component = page.rootInstance;
  });

  it('should create and render', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toBeTruthy();
  });

  describe('Props', () => {
    it('should render with default props', async () => {
      expect(component.direction).toBe('column');
      expect(component.justifyContent).toBe('flex-start');
      expect(component.flexWrap).toBe('wrap');
      expect(component.alignItems).toBe('flex-start');
      expect(component.gap).toBeUndefined();
    });

    it('should render with direction prop', async () => {
      const directions = ['row', 'row-reverse', 'column', 'column-reverse'];
      
      for (const direction of directions) {
        page = await newSpecPage({
          components: [ListItemContent],
          html: `<bds-list-item-content direction="${direction}"></bds-list-item-content>`,
        });
        
        expect(page.rootInstance.direction).toBe(direction);
      }
    });

    it('should render with justifyContent prop', async () => {
      const justifyValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'];
      
      for (const justify of justifyValues) {
        page = await newSpecPage({
          components: [ListItemContent],
          html: `<bds-list-item-content justify-content="${justify}"></bds-list-item-content>`,
        });
        
        expect(page.rootInstance.justifyContent).toBe(justify);
      }
    });

    it('should render with flexWrap prop', async () => {
      const wrapValues = ['wrap', 'wrap-reverse'];
      
      for (const wrap of wrapValues) {
        page = await newSpecPage({
          components: [ListItemContent],
          html: `<bds-list-item-content flex-wrap="${wrap}"></bds-list-item-content>`,
        });
        
        expect(page.rootInstance.flexWrap).toBe(wrap);
      }
    });

    it('should render with alignItems prop', async () => {
      const alignValues = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'];
      
      for (const align of alignValues) {
        page = await newSpecPage({
          components: [ListItemContent],
          html: `<bds-list-item-content align-items="${align}"></bds-list-item-content>`,
        });
        
        expect(page.rootInstance.alignItems).toBe(align);
      }
    });

    it('should render with gap prop', async () => {
      const gapValues = ['none', 'half', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      
      for (const gap of gapValues) {
        page = await newSpecPage({
          components: [ListItemContent],
          html: `<bds-list-item-content gap="${gap}"></bds-list-item-content>`,
        });
        
        expect(page.rootInstance.gap).toBe(gap);
      }
    });

    it('should render with multiple props combined', async () => {
      page = await newSpecPage({
        components: [ListItemContent],
        html: '<bds-list-item-content direction="row" justify-content="center" align-items="center" flex-wrap="wrap-reverse" gap="4"></bds-list-item-content>',
      });
      
      expect(page.rootInstance.direction).toBe('row');
      expect(page.rootInstance.justifyContent).toBe('center');
      expect(page.rootInstance.alignItems).toBe('center');
      expect(page.rootInstance.flexWrap).toBe('wrap-reverse');
      expect(page.rootInstance.gap).toBe('4');
    });
  });

  describe('Rendering', () => {
    it('should render host with correct class', async () => {
      const host = page.root;
      expect(host).toHaveClass('list_item_content');
    });

    it('should render bds-grid with default props', async () => {
      const grid = page.root.querySelector('bds-grid');
      expect(grid).toBeTruthy();
      expect(grid.getAttribute('direction')).toBe('column');
      expect(grid.getAttribute('flexwrap')).toBe('wrap');
      expect(grid.getAttribute('justifycontent')).toBe('flex-start');
      expect(grid.getAttribute('alignitems')).toBe('flex-start');
      expect(grid.hasAttribute('gap')).toBe(false);
    });

    it('should pass all props to bds-grid', async () => {
      page = await newSpecPage({
        components: [ListItemContent],
        html: '<bds-list-item-content direction="row" justify-content="center" align-items="center" flex-wrap="wrap-reverse" gap="4"></bds-list-item-content>',
      });
      
      const grid = page.root.querySelector('bds-grid');
      expect(grid.getAttribute('direction')).toBe('row');
      expect(grid.getAttribute('flexwrap')).toBe('wrap-reverse');
      expect(grid.getAttribute('justifycontent')).toBe('center');
      expect(grid.getAttribute('alignitems')).toBe('center');
      expect(grid.getAttribute('gap')).toBe('4');
    });

    it('should render slot for content', async () => {
      page = await newSpecPage({
        components: [ListItemContent],
        html: `<bds-list-item-content>
          <div>Content 1</div>
          <div>Content 2</div>
        </bds-list-item-content>`,
      });
      
      const grid = page.root.querySelector('bds-grid');
      expect(grid).toBeTruthy();
      
      // Since the grid component is mocked, check that slotted content exists in the parent
      expect(page.root.textContent).toContain('Content 1');
      expect(page.root.textContent).toContain('Content 2');
    });

    it('should not pass gap prop to bds-grid when undefined', async () => {
      const grid = page.root.querySelector('bds-grid');
      expect(grid.hasAttribute('gap')).toBe(false);
    });
  });

  describe('Element Reference', () => {
    it('should have hostElement reference', async () => {
      expect(component.hostElement).toBeTruthy();
      expect(component.hostElement).toBe(page.root);
    });
  });

  describe('Style Class', () => {
    it('should apply list_item_content class to host', async () => {
      expect(page.root).toHaveClass('list_item_content');
    });
  });

  describe('Component Composition', () => {
    it('should be composed of bds-grid component', async () => {
      const grid = page.root.querySelector('bds-grid');
      expect(grid).toBeTruthy();
    });

    it('should have a slot for content projection', async () => {
      const grid = page.root.querySelector('bds-grid');
      expect(grid).toBeTruthy();
      
      // Test content projection by adding content and verifying it's accessible
      page = await newSpecPage({
        components: [ListItemContent],
        html: `<bds-list-item-content>
          <span>Test content</span>
        </bds-list-item-content>`,
      });
      
      expect(page.root.textContent).toContain('Test content');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty prop values gracefully', async () => {
      page = await newSpecPage({
        components: [ListItemContent],
        html: '<bds-list-item-content direction="" justify-content="" align-items="" flex-wrap=""></bds-list-item-content>',
      });
      
      // Should fall back to defaults or handle empty strings
      expect(page.rootInstance.direction).toBe('');
      expect(page.rootInstance.justifyContent).toBe('');
      expect(page.rootInstance.alignItems).toBe('');
      expect(page.rootInstance.flexWrap).toBe('');
    });

    it('should handle all gap values including edge cases', async () => {
      const edgeGapValues = ['none', '12'];
      
      for (const gap of edgeGapValues) {
        page = await newSpecPage({
          components: [ListItemContent],
          html: `<bds-list-item-content gap="${gap}"></bds-list-item-content>`,
        });
        
        expect(page.rootInstance.gap).toBe(gap);
        
        const grid = page.root.querySelector('bds-grid');
        expect(grid.getAttribute('gap')).toBe(gap);
      }
    });
  });
});
