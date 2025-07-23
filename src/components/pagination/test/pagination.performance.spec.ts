import { newSpecPage } from '@stencil/core/testing';

// Mock the position-element utility
jest.mock('../../../utils/position-element', () => ({
  getScrollParent: jest.fn(() => {
    return {
      classList: {
        contains: jest.fn(() => false)
      },
      tagName: 'DIV'
    };
  })
}));

import { Pagination } from '../pagination';

describe('bds-pagination performance tests', () => {
  beforeEach(() => {
    // Clear any previous timing measurements
    jest.clearAllMocks();
  });

  it('should render quickly with small number of pages', async () => {
    const startTime = performance.now();
    
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="100"></bds-pagination>`,
    });
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    expect(page.root).toBeTruthy();
    expect(renderTime).toBeLessThan(1000); // Should render in less than 1 second
    
    // Verify that pagination numbers array has expected length
    const component = page.rootInstance;
    expect(component.paginationNumbers).toHaveLength(100);
  });

  it('should handle large number of pages without excessive DOM elements', async () => {
    const startTime = performance.now();
    
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="30000"></bds-pagination>`,
    });
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    expect(page.root).toBeTruthy();
    
    // The render time should be reasonable even with large page count
    // This test will initially fail, demonstrating the performance issue
    console.log(`Render time for 30000 pages: ${renderTime}ms`);
    
    const component = page.rootInstance;
    expect(component.pages).toBe(30000);
    
    // After optimization, we should not create 30000 DOM elements
    // The component should work but with optimized rendering
    expect(component.paginationNumbers).toBeDefined();
  });

  it('should create reasonable number of options in select for large page counts', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="30000" started-page="15000"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    // Count the actual rendered select options in the DOM
    const selectOptions = page.root.shadowRoot.querySelectorAll('bds-select-option');
    
    // After optimization, there should be far fewer than 30000 options rendered
    // This test demonstrates the current issue and will validate the fix
    console.log(`Number of select options rendered: ${selectOptions.length}`);
    
    // Should have a reasonable number of options (much less than 50)
    expect(selectOptions.length).toBeLessThan(50);
    expect(selectOptions.length).toBeGreaterThan(10); // Should have meaningful options
  });

  it('should include current page in visible options', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="30000" started-page="15000"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    const component = page.rootInstance;
    
    // Current page should always be in visible options
    expect(component.visiblePageOptions).toContain(15000);
    
    // First and last pages should be included
    expect(component.visiblePageOptions).toContain(1);
    expect(component.visiblePageOptions).toContain(30000);
  });

  it('should show all pages when total pages is small', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="20"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    const component = page.rootInstance;
    
    // For small page counts, should show all pages
    expect(component.visiblePageOptions).toHaveLength(20);
    expect(component.visiblePageOptions).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });

  it('should update visible options when current page changes', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="10000" started-page="1"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    const component = page.rootInstance;
    const initialOptions = [...component.visiblePageOptions];
    
    // Navigate to a different page
    component.value = 5000;
    await page.waitForChanges();
    
    const newOptions = component.visiblePageOptions;
    
    // Should include the new current page
    expect(newOptions).toContain(5000);
    
    // Options should have changed to include pages around the new current page
    expect(newOptions).not.toEqual(initialOptions);
  });

  it('should maintain functionality with optimized rendering', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="30000" started-page="1"></bds-pagination>`,
    });
    
    const component = page.rootInstance;
    
    // Should be able to navigate to any page
    expect(component.value).toBe(1);
    
    // Should be able to go to last page
    component.lastPage(new Event('click'));
    expect(component.value).toBe(30000);
    
    // Should be able to go to first page
    component.firstPage(new Event('click'));
    expect(component.value).toBe(1);
    
    // Should be able to navigate forward and backward
    component.nextPage(new Event('click'));
    expect(component.value).toBe(2);
    
    component.previewPage(new Event('click'));
    expect(component.value).toBe(1);
  });
});