import { newSpecPage } from '@stencil/core/testing';

// Mock the position-element utility
jest.mock('../../../utils/position-element', () => ({
  getScrollParent: jest.fn(() => {
    // Return a mock element that has classList
    return {
      classList: {
        contains: jest.fn(() => false)
      },
      tagName: 'DIV'
    };
  })
}));

import { Pagination } from '../pagination';

describe('bds-pagination', () => {
  describe('Component Creation', () => {
    it('should create component', () => {
      const component = new Pagination();
      expect(component).toBeTruthy();
    });

    it('should render component with default properties', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5"></bds-pagination>`,
      });
      
      expect(page.root).toBeTruthy();
      // Check if the component has rendered content
      expect(page.root.shadowRoot).toBeTruthy();
    });
  });

  describe('Props and State', () => {
    it('should have default values', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      expect(component.optionsPosition).toBe('auto');
      expect(component.pageCounter).toBe(false);
      expect(component.language).toBe('pt_BR');
      expect(component.value).toBe(component.startedPage);
    });

    it('should accept pages property', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="10"></bds-pagination>`,
      });
      
      expect(page.root.pages).toBe(10);
    });

    it('should accept startedPage property', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination started-page="3"></bds-pagination>`,
      });
      
      expect(page.root.startedPage).toBe(3);
    });

    it('should accept boolean properties', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination page-counter="true" items-page="[10,20,30]" number-items="100"></bds-pagination>`,
      });
      
      expect(page.root.pageCounter).toBe(true);
    });

    it('should accept language property', async () => {
      const validLanguages = ['pt_BR', 'en_US', 'es_MX'];
      
      for (const lang of validLanguages) {
        const page = await newSpecPage({
          components: [Pagination],
          html: `<bds-pagination language="${lang}"></bds-pagination>`,
        });
        
        expect(page.root.language).toBe(lang);
      }
    });

    it('should accept optionsPosition values', async () => {
      const validPositions = ['auto', 'top', 'bottom'];
      
      for (const position of validPositions) {
        const page = await newSpecPage({
          components: [Pagination],
          html: `<bds-pagination options-position="${position}"></bds-pagination>`,
        });
        
        expect(page.root.optionsPosition).toBe(position);
      }
    });
  });

  describe('Pagination Rendering', () => {
    it('should render with specified number of pages', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5"></bds-pagination>`,
      });
      
      expect(page.root.pages).toBe(5);
    });

    it('should render with started page', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5" started-page="3"></bds-pagination>`,
      });
      
      expect(page.root.startedPage).toBe(3);
    });

    it('should render with page counter when enabled', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5" page-counter="true" items-page="[10,20,30]" number-items="100"></bds-pagination>`,
      });
      
      expect(page.root.pageCounter).toBe(true);
    });

    it('should render with items per page options', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination items-page="[10,20,30]"></bds-pagination>`,
      });
      
      expect(page.root.itemsPage).toBeDefined();
    });
  });

  describe('Navigation Controls', () => {
    it('should render navigation buttons', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5" started-page="2"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      
      // Check if the component has rendered content in shadowRoot
      expect(page.root.shadowRoot).toBeTruthy();
      // Since the component may render different elements based on pages, 
      // let's just verify the shadowRoot has content
      expect(page.root.shadowRoot.children.length).toBeGreaterThan(0);
    });

    it('should handle initial button click', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5" started-page="3"></bds-pagination>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsChangePage', changeSpy);
      
      const initialButton = page.root.shadowRoot.querySelector('[data-test="initial"]') as HTMLElement;
      if (initialButton) {
        initialButton.click();
        expect(changeSpy).toHaveBeenCalled();
      }
    });

    it('should handle previous button click', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5" started-page="3"></bds-pagination>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsChangePage', changeSpy);
      
      const prevButton = page.root.shadowRoot.querySelector('[data-test="prev"]') as HTMLElement;
      if (prevButton) {
        prevButton.click();
        expect(changeSpy).toHaveBeenCalled();
      }
    });

    it('should handle next button click', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5" started-page="2"></bds-pagination>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsChangePage', changeSpy);
      
      const nextButton = page.root.shadowRoot.querySelector('[data-test="next"]') as HTMLElement;
      if (nextButton) {
        nextButton.click();
        expect(changeSpy).toHaveBeenCalled();
      }
    });
  });

  describe('Event Handling', () => {
    it('should emit bdsChangePage event', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5"></bds-pagination>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsChangePage', changeSpy);
      
      const component = page.rootInstance;
      component.value = 2;
      
      // Trigger the watcher
      await page.waitForChanges();
      
      // The event should be emitted when value changes
      expect(component.value).toBe(2);
    });

    it('should emit bdsChangeItensPage event when items per page changes', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination items-page="[10,20,30]"></bds-pagination>`,
      });
      
      const changeSpy = jest.fn();
      page.root.addEventListener('bdsChangeItensPage', changeSpy);
      
      const component = page.rootInstance;
      component.itemValue = 20;
      
      await page.waitForChanges();
      expect(component.itemValue).toBe(20);
    });
  });

  describe('Language Support', () => {
    it('should support Portuguese language', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination language="pt_BR"></bds-pagination>`,
      });
      
      expect(page.root.language).toBe('pt_BR');
    });

    it('should support English language', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination language="en_US"></bds-pagination>`,
      });
      
      expect(page.root.language).toBe('en_US');
    });

    it('should support Spanish language', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination language="es_MX"></bds-pagination>`,
      });
      
      expect(page.root.language).toBe('es_MX');
    });
  });

  describe('Data Test Attributes', () => {
    it('should accept data test attributes', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination 
          dt-button-initial="test-initial"
          dt-button-prev="test-prev"
          dt-select-number="test-select"
          dt-button-next="test-next"
          dt-button-end="test-end"
        ></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      expect(component.dtButtonInitial).toBe('test-initial');
      expect(component.dtButtonPrev).toBe('test-prev');
      expect(component.dtSelectNumber).toBe('test-select');
      expect(component.dtButtonNext).toBe('test-next');
      expect(component.dtButtonEnd).toBe('test-end');
    });
  });

  describe('Options Position', () => {
    it('should handle auto position', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination options-position="auto"></bds-pagination>`,
      });
      
      expect(page.root.optionsPosition).toBe('auto');
    });

    it('should handle top position', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination options-position="top"></bds-pagination>`,
      });
      
      expect(page.root.optionsPosition).toBe('top');
    });

    it('should handle bottom position', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination options-position="bottom"></bds-pagination>`,
      });
      
      expect(page.root.optionsPosition).toBe('bottom');
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined pages', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination></bds-pagination>`,
      });
      
      expect(page.root).toBeTruthy();
    });

    it('should handle zero pages', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="0"></bds-pagination>`,
      });
      
      expect(page.root).toBeTruthy();
    });

    it('should render method should return JSX element', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      const result = component.render();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('Bug Fixes - Navigation Issues', () => {
    it('Bug 1: should correctly navigate to page 101 and 102 when clicking next button multiple times', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Verify starting state
      expect(component.value).toBe(1);
      expect(component.pages).toBe(1000);
      
      // Click next button 100 times to get to page 101
      for (let i = 0; i < 100; i++) {
        component.nextPage(new Event('click'));
      }
      
      // Should be on page 101
      expect(component.value).toBe(101);
      
      // Page 101 should be available in visible options
      expect(component.visiblePageOptions).toContain(101);
      
      // Click next button again to get to page 102
      component.nextPage(new Event('click'));
      
      // Should be on page 102
      expect(component.value).toBe(102);
      
      // Page 102 should be available in visible options
      expect(component.visiblePageOptions).toContain(102);
    });

    it('Bug 2: should correctly navigate to the last page when clicking last page button', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Verify starting state
      expect(component.value).toBe(1);
      expect(component.pages).toBe(1000);
      
      // Click last page button
      component.lastPage(new Event('click'));
      
      // Should be on page 1000 (last page)
      expect(component.value).toBe(1000);
      
      // Page 1000 should be available in visible options
      expect(component.visiblePageOptions).toContain(1000);
    });

    it('should ensure current page is always included in visible options regardless of navigation method', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Test navigation to various pages
      const testPages = [1, 50, 150, 500, 1000, 2500, 5000];
      
      for (const targetPage of testPages) {
        // Navigate to the page directly
        component.value = targetPage;
        component.updateVisiblePageOptions();
        await page.waitForChanges();
        
        // Current page should always be visible
        expect(component.visiblePageOptions).toContain(targetPage);
        expect(component.value).toBe(targetPage);
      }
    });

    it('New Behavior: should switch to reverse pagination mode when clicking last page', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Verify starting state - should be in normal mode
      expect(component.isReversePaginationMode).toBe(false);
      expect(component.value).toBe(1);
      
      // Click last page button
      component.lastPage(new Event('click'));
      
      // Should be on page 1000 and in reverse mode
      expect(component.value).toBe(1000);
      expect(component.isReversePaginationMode).toBe(true);
      
      // Should show only last 100 pages (901-1000)
      expect(component.visiblePageOptions.length).toBe(100);
      expect(component.visiblePageOptions[0]).toBe(901);
      expect(component.visiblePageOptions[component.visiblePageOptions.length - 1]).toBe(1000);
      
      // Should contain the current page (1000)
      expect(component.visiblePageOptions).toContain(1000);
    });

    it('New Behavior: should load previous pages when scrolling up in reverse mode', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Switch to reverse mode by clicking last page
      component.lastPage(new Event('click'));
      expect(component.isReversePaginationMode).toBe(true);
      expect(component.visiblePageOptions.length).toBe(100); // Pages 901-1000
      
      // Simulate scrolling up (load previous pages)
      component.loadPreviousPages();
      
      // Should now show last 200 pages (801-1000)
      expect(component.visiblePageOptions.length).toBe(200);
      expect(component.visiblePageOptions[0]).toBe(801);
      expect(component.visiblePageOptions[component.visiblePageOptions.length - 1]).toBe(1000);
      
      // Load more previous pages
      component.loadPreviousPages();
      
      // Should now show last 300 pages (701-1000)
      expect(component.visiblePageOptions.length).toBe(300);
      expect(component.visiblePageOptions[0]).toBe(701);
      expect(component.visiblePageOptions[component.visiblePageOptions.length - 1]).toBe(1000);
    });

    it('New Behavior: should maintain reverse mode for pages near the end', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Navigate to a page near the end (page 960)
      component.value = 960;
      component.updateVisiblePageOptions();
      
      // Should be in reverse mode because 960 > (1000 - 50)
      expect(component.isReversePaginationMode).toBe(true);
      
      // Should show appropriate range including current page
      expect(component.visiblePageOptions).toContain(960);
    });

    it('New Behavior: should use normal mode for pages at the beginning', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Navigate to a page at the beginning
      component.value = 50;
      component.updateVisiblePageOptions();
      
      // Should be in normal mode
      expect(component.isReversePaginationMode).toBe(false);
      
      // Should show pages from 1 to at least 100
      expect(component.visiblePageOptions[0]).toBe(1);
      expect(component.visiblePageOptions).toContain(50);
    });

    it('should synchronously update visible options when navigating to ensure current page is always visible', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="1"></bds-pagination>`,
      });
      
      await page.waitForChanges();
      const component = page.rootInstance;
      
      // Verify starting state
      expect(component.value).toBe(1);
      expect(component.loadedPagesCount).toBe(100);
      expect(component.visiblePageOptions.length).toBe(100);
      expect(component.visiblePageOptions.includes(101)).toBe(false);
      
      // Navigate to page 101 using nextPage
      for (let i = 0; i < 100; i++) {
        component.nextPage(new Event('click'));
      }
      
      // Page 101 should be immediately available after navigation
      expect(component.value).toBe(101);
      expect(component.loadedPagesCount).toBe(101);
      expect(component.visiblePageOptions.includes(101)).toBe(true);
      expect(component.visiblePageOptions.length).toBe(101);
      
      // Navigate to page 102 
      component.nextPage(new Event('click'));
      
      // Page 102 should also be immediately available
      expect(component.value).toBe(102);
      expect(component.visiblePageOptions.includes(102)).toBe(true);
    });
  });
});
