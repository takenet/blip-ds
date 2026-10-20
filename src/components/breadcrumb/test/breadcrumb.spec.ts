import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Breadcrumb } from '../breadcrumb';

function getShadowRoot(page: SpecPage): ShadowRoot {
  const root = page.root as HTMLElement | undefined;
  if (!root || !root.shadowRoot) {
    throw new Error('SpecPage root or shadowRoot missing');
  }
  return root.shadowRoot as ShadowRoot;
}

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
      const sr = getShadowRoot(page);
      expect(sr.querySelector('p')).toBeTruthy();
      expect(sr.textContent).toContain('Sem itens para exibir no Breadcrumb.');
    });
  });

  describe('Props and State', () => {
    it('should handle empty items array', async () => {
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items="[]"></bds-breadcrumb>`,
      });
      expect(page.rootInstance.parsedItems).toEqual([]);
      const sr = getShadowRoot(page);
      expect(sr.textContent).toContain('Sem itens para exibir no Breadcrumb.');
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
      
      const sr = getShadowRoot(page);
      const nav = sr.querySelector('nav');
      expect(nav).toBeTruthy();
      expect(nav?.getAttribute('aria-label')).toBe('breadcrumb');
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
      const sr = getShadowRoot(page);
      const nav = sr.querySelector('nav');
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
      const sr = getShadowRoot(page);
      const nav = sr.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('should not collapse when there are exactly 3 items and wrap-items is true', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Current Page' },
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}' wrap-items="true"></bds-breadcrumb>`,
      });

      const sr = getShadowRoot(page);
      expect(sr.querySelector('bds-dropdown')).toBeNull();
      expect(sr.querySelectorAll('.breadcrumb__item').length).toBe(3);
    });

    it('should collapse when there are exactly 4 items and wrap-items is true', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Current Page' },
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}' wrap-items="true"></bds-breadcrumb>`,
      });

      const sr = getShadowRoot(page);
      expect(sr.querySelector('bds-dropdown')).toBeTruthy();
      expect(sr.querySelectorAll('.breadcrumb__item').length).toBe(3);
    });

    it('collapses items when wrap-items attribute is present without an explicit value', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Current Page' },
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}' wrap-items></bds-breadcrumb>`,
      });

      const sr = getShadowRoot(page);
      const breadcrumbItems = sr.querySelectorAll('.breadcrumb__item');
      expect(breadcrumbItems.length).toBe(3);

      // The collapsed item is represented by a dropdown activator (icon button), not literal '...'
      expect(sr.querySelector('bds-dropdown')).toBeTruthy();
    });

    it('shows all items when wrap-items is false', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Current Page' },
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}' wrap-items="false"></bds-breadcrumb>`,
      });

      const sr = getShadowRoot(page);
      const breadcrumbItems = sr.querySelectorAll('.breadcrumb__item');
      expect(breadcrumbItems.length).toBe(4);
      expect(sr.querySelector('bds-dropdown')).toBeNull();
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
      const sr = getShadowRoot(page);
      const nav = sr.querySelector('nav');
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
      
      const sr = getShadowRoot(page);
      const nav = sr!.querySelector('nav');
      expect(nav!.getAttribute('aria-label')).toBe('breadcrumb');
    });

    it('should set aria-current on the final breadcrumb link instead of the wrapper', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current', href: '/current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const sr = getShadowRoot(page);
      expect(sr.querySelector('.breadcrumb__item[aria-current]')).toBeNull();
      const currentLink = sr.querySelector('a.breadcrumb__link[aria-current="page"]');
      expect(currentLink).toBeTruthy();
      expect(currentLink?.getAttribute('href')).toBe('/current');
    });

    it('should set aria-current on final breadcrumb text when item has no href', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current' }
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });

      const sr = getShadowRoot(page);
      expect(sr.querySelector('.breadcrumb__item[aria-current]')).toBeNull();
      expect(sr.querySelector('a.breadcrumb__link[aria-current="page"]')).toBeNull();

      const currentText = sr.querySelector('bds-typo.breadcrumb__text[aria-current="page"]');
      expect(currentText).toBeTruthy();
      expect(currentText?.textContent?.trim()).toBe('Current');
    });

    it('should add an accessible label to the dropdown activator button', async () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Level1', href: '/level1' },
        { label: 'Level2', href: '/level2' },
        { label: 'Level3', href: '/level3' },
        { label: 'Current' },
      ];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });

      const sr = getShadowRoot(page);
      const activator = sr.querySelector('bds-button');
      expect(activator?.getAttribute('aria-label')).toBe('Mostrar itens ocultos do breadcrumb');
    });
  });

  describe('CSS Classes', () => {
    it('should apply breadcrumb__item class', async () => {
      const items = [{ label: 'Home', href: '/' }];
      const page = await newSpecPage({
        components: [Breadcrumb],
        html: `<bds-breadcrumb items='${JSON.stringify(items)}'></bds-breadcrumb>`,
      });
      
      const sr = getShadowRoot(page);
      const itemElements = sr.querySelectorAll('.breadcrumb__item');
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
      
      const sr = getShadowRoot(page);
      const activeElements = sr.querySelectorAll('.breadcrumb__item--active');
      expect(activeElements.length).toBeGreaterThan(0);
    });
  });

  describe('Dropdown Functionality', () => {
    it('should update dropdown state from bdsToggle event', async () => {
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

      const sr = getShadowRoot(page);
      const dropdown = sr.querySelector('bds-dropdown') as HTMLElement;
      expect(page.rootInstance.isDropdownOpen).toBe(false);

      dropdown.dispatchEvent(new CustomEvent('bdsToggle', { detail: { value: true } }));
      await page.waitForChanges();
      expect(page.rootInstance.isDropdownOpen).toBe(true);

      dropdown.dispatchEvent(new CustomEvent('bdsToggle', { detail: { value: false } }));
      await page.waitForChanges();
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
      const sr = getShadowRoot(page);
      const dropdown = sr.querySelector('bds-dropdown');
      expect(dropdown).toBeTruthy();
    });

    it('should bind dropdown open state correctly', async () => {
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

      const sr = getShadowRoot(page);
      const dropdown = sr.querySelector('bds-dropdown') as HTMLElement;

      expect(page.rootInstance.isDropdownOpen).toBe(false);
      expect(dropdown.hasAttribute('open')).toBe(false);

      dropdown.dispatchEvent(new CustomEvent('bdsToggle', { detail: { value: true } }));
      await page.waitForChanges();
      expect(page.rootInstance.isDropdownOpen).toBe(true);
      expect(dropdown.hasAttribute('open')).toBe(true);

      dropdown.dispatchEvent(new CustomEvent('bdsToggle', { detail: { value: false } }));
      await page.waitForChanges();
      expect(page.rootInstance.isDropdownOpen).toBe(false);
      expect(dropdown.hasAttribute('open')).toBe(false);
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
      
      const sr = getShadowRoot(page);
      const links = sr.querySelectorAll('a.breadcrumb__link');
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
      const sr = getShadowRoot(page);
      const nav = sr.querySelector('nav');
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
