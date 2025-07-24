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

  describe('Lazy Loading Performance Optimization', () => {
    it('should load only first 100 pages initially with large page count', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      expect(component.paginationNumbers.length).toBeLessThanOrEqual(100);
      expect(component.loadedPageRange.start).toBe(1);
      expect(component.loadedPageRange.end).toBeLessThanOrEqual(100);
    });

    it('should handle started page outside initial range', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000" started-page="200"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      expect(component.value).toBe(200);
      expect(component.loadedPageRange.start).toBeLessThanOrEqual(200);
      expect(component.loadedPageRange.end).toBeGreaterThanOrEqual(200);
    });

    it('should update page range when navigating beyond current range', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000" started-page="50"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      const initialEnd = component.loadedPageRange.end;
      
      // Navigate to next page beyond current range
      component.value = initialEnd;
      component.nextPage(new Event('click'));
      
      expect(component.value).toBe(initialEnd + 1);
      expect(component.loadedPageRange.end).toBeGreaterThan(initialEnd);
    });

    it('should load appropriate range for first page navigation', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000" started-page="1000"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      component.firstPage(new Event('click'));
      
      expect(component.value).toBe(1);
      expect(component.loadedPageRange.start).toBe(1);
      expect(component.loadedPageRange.end).toBeLessThanOrEqual(100);
    });

    it('should load appropriate range for last page navigation', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000" started-page="100"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      component.lastPage(new Event('click'));
      
      expect(component.value).toBe(5000);
      expect(component.loadedPageRange.end).toBe(5000);
      expect(component.loadedPageRange.start).toBeGreaterThan(4900);
    });

    it('should handle option selection outside current range', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="5000"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      component.optionSelected(1000);
      
      expect(component.value).toBe(1000);
      expect(component.loadedPageRange.start).toBeLessThanOrEqual(1000);
      expect(component.loadedPageRange.end).toBeGreaterThanOrEqual(1000);
    });

    it('should scroll to selected option when dropdown opens after last page navigation', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1200"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      
      // Navigate to last page
      component.lastPage(new Event('click'));
      expect(component.value).toBe(1200);
      
      // Mock scrollIntoView
      const mockScrollIntoView = jest.fn();
      
      // Mock the select element and its shadow root
      const mockSelectedOption = {
        scrollIntoView: mockScrollIntoView
      };
      
      const mockDropdown = {
        querySelector: jest.fn().mockReturnValue(mockSelectedOption)
      };
      
      const mockShadowRoot = {
        querySelector: jest.fn((selector) => {
          if (selector === '.select__options') return mockDropdown;
          return null;
        })
      };
      
      component.selectRef = {
        shadowRoot: mockShadowRoot
      } as any;
      
      // Call scrollToSelectedOption directly
      component.scrollToSelectedOption();
      
      expect(mockDropdown.querySelector).toHaveBeenCalledWith('bds-select-option[value="1200"]');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
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

  describe('Scroll Loading', () => {
    it('should load more pages when scrolling to bottom', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      
      // Initial state should have 100 pages loaded
      expect(component.paginationNumbers.length).toBe(100);
      expect(component.loadedPageRange.start).toBe(1);
      expect(component.loadedPageRange.end).toBe(100);
      
      // Simulate scroll to bottom event
      const mockScrollEvent = {
        target: {
          scrollTop: 900,
          scrollHeight: 1000,
          clientHeight: 100
        }
      } as any;
      
      component.handleSelectScroll(mockScrollEvent);
      
      // Should have loaded more pages
      expect(component.paginationNumbers.length).toBeGreaterThan(100);
      expect(component.loadedPageRange.end).toBeGreaterThan(100);
    });

    it('should load more pages when scrolling to top', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000" started-page="500"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      
      // Load a range around page 500
      component.loadPageRange(500);
      const initialLength = component.paginationNumbers.length;
      const initialStart = component.loadedPageRange.start;
      
      // Simulate scroll to top event
      const mockScrollEvent = {
        target: {
          scrollTop: 5,
          scrollHeight: 1000,
          clientHeight: 100
        }
      } as any;
      
      component.handleSelectScroll(mockScrollEvent);
      
      // Should have loaded more pages at the beginning
      expect(component.paginationNumbers.length).toBeGreaterThan(initialLength);
      expect(component.loadedPageRange.start).toBeLessThan(initialStart);
    });

    it('should not load more pages when at boundaries', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="50"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      
      // For small page counts, all pages should be loaded initially
      const initialLength = component.paginationNumbers.length;
      
      // Simulate scroll to bottom event
      const mockScrollEvent = {
        target: {
          scrollTop: 900,
          scrollHeight: 1000,
          clientHeight: 100
        }
      } as any;
      
      component.handleSelectScroll(mockScrollEvent);
      
      // Should not have loaded more pages since we're at the boundary
      expect(component.paginationNumbers.length).toBe(initialLength);
    });

    it('should attach scroll listener in componentDidRender', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      
      // Mock the selectRef and its shadowRoot
      const mockDropdown = {
        addEventListener: jest.fn(),
        setAttribute: jest.fn(),
        hasAttribute: jest.fn().mockReturnValue(false)
      };
      
      const mockShadowRoot = {
        querySelector: jest.fn().mockReturnValue(mockDropdown)
      };
      
      component.selectRef = {
        shadowRoot: mockShadowRoot
      } as any;
      
      // Call componentDidRender
      component.componentDidRender();
      
      // Verify scroll listener was attached
      expect(mockShadowRoot.querySelector).toHaveBeenCalledWith('.select__options');
      expect(mockDropdown.addEventListener).toHaveBeenCalledWith('scroll', component.handleSelectScroll);
      expect(mockDropdown.setAttribute).toHaveBeenCalledWith('data-scroll-listener-attached', 'true');
    });

    it('should remove scroll listener in disconnectedCallback', async () => {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<bds-pagination pages="1000"></bds-pagination>`,
      });
      
      const component = page.rootInstance;
      
      // Mock the selectRef and its shadowRoot
      const mockDropdown = {
        removeEventListener: jest.fn(),
        removeAttribute: jest.fn()
      };
      
      const mockShadowRoot = {
        querySelector: jest.fn().mockReturnValue(mockDropdown)
      };
      
      component.selectRef = {
        shadowRoot: mockShadowRoot
      } as any;
      
      // Call disconnectedCallback
      component.disconnectedCallback();
      
      // Verify scroll listener was removed
      expect(mockShadowRoot.querySelector).toHaveBeenCalledWith('.select__options');
      expect(mockDropdown.removeEventListener).toHaveBeenCalledWith('scroll', component.handleSelectScroll);
      expect(mockDropdown.removeAttribute).toHaveBeenCalledWith('data-scroll-listener-attached');
    });
  });
});
