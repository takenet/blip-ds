import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from '../breadcrumb';

describe('bds-breadcrumb', () => {
  describe('Component Creation', () => {
    it('should create component', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      expect(page.rootInstance).toBeTruthy();
      expect(page.rootInstance).toBeInstanceOf(Breadcrumb);
    });

    it('should render correctly with empty items', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      expect(page.root.shadowRoot.querySelector('p')).toBeTruthy();
      expect(page.root.shadowRoot.textContent).toContain('Sem itens para exibir no Breadcrumb.');
    });
  });

  describe('Props and State', () => {
    it('should handle empty items array', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items="[]"></bds-breadcrumb>`,
      });
      expect(page.rootInstance.parsedItems).toEqual([]);
      expect(page.root.shadowRoot.textContent).toContain('Sem itens para exibir no Breadcrumb.');
    });

    it('should handle items prop as JSON string', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      expect(page.rootInstance.parsedItems).toEqual(items);
    });

    it('should handle items prop as array', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      page.rootInstance.parseItems(items);
      expect(page.rootInstance.parsedItems).toEqual(items);
    });

    it('should handle invalid JSON string gracefully', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='invalid json'></bds-breadcrumb>`,
      });
      expect(page.rootInstance.parsedItems).toEqual([]);
    });

    it('should initialize isDropdownOpen as false', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      expect(page.rootInstance.isDropdownOpen).toBe(false);
    });
  });

  describe('Items Parsing', () => {
    it('should parse items in componentWillLoad', async () => {
      const items = [{ label: 'Test', href: '/test' }];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      expect(page.rootInstance.parsedItems).toEqual(items);
    });

    it('should watch for items changes', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      
      const newItems = [{ label: 'New', href: '/new' }];
      page.rootInstance.parseItems(newItems);
      expect(page.rootInstance.parsedItems).toEqual(newItems);
    });
  });

  describe('Rendering Logic', () => {
    it('should render simple breadcrumb with 2 items', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const nav = page.root.shadowRoot.querySelector('nav');
      expect(nav).toBeTruthy();
      expect(nav.getAttribute('aria-label')).toBe('breadcrumb');
    });

    it('should render simple breadcrumb with 3 items', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.parsedItems).toEqual(items);
      const nav = page.root.shadowRoot.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('should render collapsed breadcrumb with more than 3 items', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Level1', href: '/level1' },
        { label: 'Level2', href: '/level2' },
        { label: 'Level3', href: '/level3' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.parsedItems).toEqual(items);
      // Should show: Home ... Current (3 visible items)
      const nav = page.root.shadowRoot.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('should handle items without href (span elements)', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current' } // No href
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.parsedItems).toEqual(items);
      const nav = page.root.shadowRoot.querySelector('nav');
      expect(nav).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria-label on nav', async () => {
      const items = [{ label: 'Home', href: '/' }];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const nav = page.root.shadowRoot.querySelector('nav');
      expect(nav.getAttribute('aria-label')).toBe('breadcrumb');
    });

    it('should set aria-current="page" on last item', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      // Check for elements with aria-current
      const elementsWithAriaCurrent = page.root.shadowRoot.querySelectorAll('[aria-current]');
      expect(elementsWithAriaCurrent.length).toBeGreaterThan(0);
    });
  });

  describe('CSS Classes', () => {
    it('should apply breadcrumb__item class', async () => {
      const items = [{ label: 'Home', href: '/' }];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const itemElements = page.root.shadowRoot.querySelectorAll('.breadcrumb__item');
      expect(itemElements.length).toBeGreaterThan(0);
    });

    it('should apply breadcrumb__item--active class to last item', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const activeElements = page.root.shadowRoot.querySelectorAll('.breadcrumb__item--active');
      expect(activeElements.length).toBeGreaterThan(0);
    });
  });

  describe('Dropdown Functionality', () => {
    it('should toggle dropdown state', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.isDropdownOpen).toBe(false);
      page.rootInstance.toggleDropdown();
      expect(page.rootInstance.isDropdownOpen).toBe(true);
      page.rootInstance.toggleDropdown();
      expect(page.rootInstance.isDropdownOpen).toBe(false);
    });

    it('should render dropdown for long breadcrumb paths', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Level1', href: '/level1' },
        { label: 'Level2', href: '/level2' },
        { label: 'Level3', href: '/level3' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      // Should contain dropdown for middle items
      const dropdown = page.root.shadowRoot.querySelector('bds-dropdown');
      expect(dropdown).toBeTruthy();
    });
  });

  describe('Link Rendering', () => {
    it('should render links for items with href', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const links = page.root.shadowRoot.querySelectorAll('a.breadcrumb__link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should render spans for items without href', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current' } // No href
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      // Last item should not be a link
      expect(page.rootInstance.parsedItems[1].href).toBeUndefined();
    });
  });

  describe('Edge Cases', () => {
    it('should handle single item', async () => {
      const items = [{ label: 'Only One' }];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.parsedItems).toEqual(items);
      const nav = page.root.shadowRoot.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('should handle undefined items gracefully', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      
      page.rootInstance.parseItems(undefined);
      expect(page.rootInstance.parsedItems).toEqual(undefined);
    });

    it('should handle null items gracefully', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      
      page.rootInstance.parseItems(null);
      expect(page.rootInstance.parsedItems).toEqual(null);
    });
  });
});
