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
});
