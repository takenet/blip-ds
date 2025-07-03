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

  describe('Editable Current Page', () => {
    it('should have editableCurrentPage prop defaulting to false', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.editableCurrentPage).toBe(false);
    });

    it('should accept editableCurrentPage prop as true', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb editable-current-page="true"></bds-breadcrumb>`,
      });
      
      expect(page.rootInstance.editableCurrentPage).toBe(true);
    });

    it('should render bds-input-editable for current page when editableCurrentPage is true', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current Page' } // No href, should be editable
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb editable-current-page="true" items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      await page.waitForChanges();
      
      // Check that input-editable is rendered for the last item
      const inputEditable = page.root.shadowRoot.querySelector('bds-input-editable');
      expect(inputEditable).toBeTruthy();
      expect(inputEditable.getAttribute('value')).toBe('Current Page');
      expect(inputEditable.getAttribute('size')).toBe('short');
    });

    it('should not render input-editable when editableCurrentPage is false', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current Page' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb editable-current-page="false" items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      await page.waitForChanges();
      
      const inputEditable = page.root.shadowRoot.querySelector('bds-input-editable');
      expect(inputEditable).toBeFalsy();
      
      // Should render regular typo instead
      const typo = page.root.shadowRoot.querySelector('bds-typo');
      expect(typo).toBeTruthy();
    });

    it('should not render input-editable for current page if it has href', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current Page', href: '/current' } // Has href, should not be editable
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb editable-current-page="true" items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      await page.waitForChanges();
      
      const inputEditable = page.root.shadowRoot.querySelector('bds-input-editable');
      expect(inputEditable).toBeFalsy();
    });

    it('should handle current page label change', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Old Label' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb editable-current-page="true" items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const eventSpy = jest.fn();
      page.root.addEventListener('bdsCurrentPageLabelChange', eventSpy);
      
      // Simulate input-editable save event
      const mockEvent = {
        detail: {
          oldValue: 'Old Label',
          value: 'New Label'
        }
      } as CustomEvent;
      
      page.rootInstance.handleCurrentPageLabelSave(mockEvent);
      await page.waitForChanges();
      
      // Check that the event was emitted
      expect(eventSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            oldLabel: 'Old Label',
            newLabel: 'New Label'
          }
        })
      );
      
      // Check that parsedItems was updated
      expect(page.rootInstance.parsedItems[1].label).toBe('New Label');
    });

    it('should not emit event if label did not change', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Same Label' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb editable-current-page="true" items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const eventSpy = jest.fn();
      page.root.addEventListener('bdsCurrentPageLabelChange', eventSpy);
      
      // Simulate input-editable save event with same value
      const mockEvent = {
        detail: {
          oldValue: 'Same Label',
          value: 'Same Label'
        }
      } as CustomEvent;
      
      page.rootInstance.handleCurrentPageLabelSave(mockEvent);
      await page.waitForChanges();
      
      // Check that the event was not emitted
      expect(eventSpy).not.toHaveBeenCalled();
    });
  });
});
