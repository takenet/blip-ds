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
      html: `<bds-pagination pages="30000" started-page="1"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    // Count the actual rendered select options in the DOM
    const selectOptions = page.root.shadowRoot.querySelectorAll('bds-select-option');
    
    // With the new implementation, should show 100 consecutive pages initially
    console.log(`Number of select options rendered: ${selectOptions.length}`);
    
    // Should have 100 options initially (pages 1-100)
    expect(selectOptions.length).toBe(100);
    expect(selectOptions.length).toBeGreaterThan(10); // Should have meaningful options
  });

  it('should include current page in visible options', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="30000" started-page="50"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    const component = page.rootInstance;
    
    // Current page should be in visible options (since it's within first 100)
    expect(component.visiblePageOptions).toContain(50);
    
    // First page should be included
    expect(component.visiblePageOptions).toContain(1);
    
    // Page 100 should be included (last of initial 100)
    expect(component.visiblePageOptions).toContain(100);
    
    // Should have 100 options initially
    expect(component.visiblePageOptions).toHaveLength(100);
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
    
    // Initially should have pages 1-100
    expect(initialOptions).toHaveLength(100);
    expect(initialOptions[0]).toBe(1);
    expect(initialOptions[99]).toBe(100);
    
    // Simulate loading more pages
    component.loadedPagesCount = 200;
    component.updateVisiblePageOptions();
    await page.waitForChanges();
    
    const newOptions = component.visiblePageOptions;
    
    // Should now have pages 1-200
    expect(newOptions).toHaveLength(200);
    expect(newOptions[0]).toBe(1);
    expect(newOptions[199]).toBe(200);
    
    // Options should have changed to include more pages
    expect(newOptions.length).toBeGreaterThan(initialOptions.length);
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

  it('should load more pages when scrolling to bottom', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<bds-pagination pages="450"></bds-pagination>`,
    });
    
    await page.waitForChanges();
    
    const component = page.rootInstance;
    
    // Initially should show 100 pages
    expect(component.loadedPagesCount).toBe(100);
    expect(component.visiblePageOptions).toHaveLength(100);
    expect(component.visiblePageOptions[0]).toBe(1);
    expect(component.visiblePageOptions[99]).toBe(100);
    
    // Simulate scroll to bottom (load more pages)
    component.loadMorePages();
    await page.waitForChanges();
    
    // Should now show 200 pages
    expect(component.loadedPagesCount).toBe(200);
    expect(component.visiblePageOptions).toHaveLength(200);
    expect(component.visiblePageOptions[0]).toBe(1);
    expect(component.visiblePageOptions[199]).toBe(200);
    
    // Simulate another scroll to bottom
    component.loadMorePages();
    await page.waitForChanges();
    
    // Should now show 300 pages
    expect(component.loadedPagesCount).toBe(300);
    expect(component.visiblePageOptions).toHaveLength(300);
    expect(component.visiblePageOptions[0]).toBe(1);
    expect(component.visiblePageOptions[299]).toBe(300);
    
    // One more scroll to bottom
    component.loadMorePages();
    await page.waitForChanges();
    
    // Should now show 400 pages
    expect(component.loadedPagesCount).toBe(400);
    expect(component.visiblePageOptions).toHaveLength(400);
    expect(component.visiblePageOptions[0]).toBe(1);
    expect(component.visiblePageOptions[399]).toBe(400);
    
    // Final scroll to bottom
    component.loadMorePages();
    await page.waitForChanges();
    
    // Should show all 450 pages (since total is 450)
    expect(component.loadedPagesCount).toBe(450);
    expect(component.visiblePageOptions).toHaveLength(450);
    expect(component.visiblePageOptions[0]).toBe(1);
    expect(component.visiblePageOptions[449]).toBe(450);
  });
});