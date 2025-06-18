import { newSpecPage } from '@stencil/core/testing';
import { BdsLoading } from '../loading-page';

describe('bds-loading-page', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsLoading],
      html: '<bds-loading-page></bds-loading-page>',
    });
    component = page.rootInstance;
  });

  it('should create and render', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toBeTruthy();
  });

  describe('Props', () => {
    it('should render with default props', async () => {
      expect(component.dataTest).toBeNull();
    });

    it('should render with dataTest prop', async () => {
      page = await newSpecPage({
        components: [BdsLoading],
        html: '<bds-loading-page data-test="loading-test"></bds-loading-page>',
      });
      
      expect(page.rootInstance.dataTest).toBe('loading-test');
    });
  });

  describe('Rendering', () => {
    it('should render loading container', async () => {
      const container = page.root.shadowRoot.querySelector('.loading-container');
      expect(container).toBeTruthy();
    });

    it('should render page loading element', async () => {
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      expect(pageLoading).toBeTruthy();
    });

    it('should apply data-test attribute to container', async () => {
      page = await newSpecPage({
        components: [BdsLoading],
        html: '<bds-loading-page data-test="test-loading"></bds-loading-page>',
      });
      
      const container = page.root.shadowRoot.querySelector('.loading-container');
      expect(container.getAttribute('data-test')).toBe('test-loading');
    });

    it('should not apply data-test attribute when null', async () => {
      const container = page.root.shadowRoot.querySelector('.loading-container');
      expect(container.getAttribute('data-test')).toBeNull();
    });

    it('should render with Host wrapper', async () => {
      expect(page.root.tagName.toLowerCase()).toBe('bds-loading-page');
    });

    it('should have shadow DOM', async () => {
      expect(page.root.shadowRoot).toBeTruthy();
    });
  });

  describe('SVG Content', () => {
    it('should render SVG content in page loading element', async () => {
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      expect(pageLoading.innerHTML).toBeTruthy();
      expect(pageLoading.innerHTML).toContain('svg');
    });

    it('should call setSvgContent on componentWillLoad', async () => {
      const spy = jest.spyOn(component, 'setSvgContent');
      component.componentWillLoad();
      expect(spy).toHaveBeenCalled();
    });

    it('should have SVG content after component initialization', async () => {
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      // Check that SVG content is rendered
      expect(pageLoading.innerHTML).toBeTruthy();
      expect(pageLoading.innerHTML.length).toBeGreaterThan(0);
    });
  });

  describe('SVG Processing Methods', () => {
    it('should format SVG content', async () => {
      const testSvg = '<svg width="100" height="100"><circle r="50"/></svg>';
      const formatted = component.formatSvg(testSvg);
      
      expect(formatted).toBeTruthy();
      expect(formatted).toContain('svg');
      expect(formatted).toContain('circle');
      expect(formatted).not.toContain('width="100"');
      expect(formatted).not.toContain('height="100"');
    });

    it('should remove width and height attributes from SVG', async () => {
      const testSvg = '<svg width="200" height="150" viewBox="0 0 200 150"><rect x="10" y="10"/></svg>';
      const formatted = component.formatSvg(testSvg);
      
      expect(formatted).not.toContain('width="200"');
      expect(formatted).not.toContain('height="150"');
      expect(formatted).toContain('viewBox="0 0 200 150"');
      expect(formatted).toContain('rect');
    });

    it('should preserve other SVG attributes', async () => {
      const testSvg = '<svg width="100" height="100" viewBox="0 0 100 100" fill="red"><path d="M10,10 L20,20"/></svg>';
      const formatted = component.formatSvg(testSvg);
      
      expect(formatted).toContain('viewBox="0 0 100 100"');
      expect(formatted).toContain('fill="red"');
      expect(formatted).toContain('path');
      expect(formatted).toContain('d="M10,10 L20,20"');
    });

    it('should handle SVG with multiple elements', async () => {
      const testSvg = '<svg width="100" height="100"><circle r="30"/><rect x="10" y="10"/><text>Hello</text></svg>';
      const formatted = component.formatSvg(testSvg);
      
      expect(formatted).toContain('circle');
      expect(formatted).toContain('rect');
      expect(formatted).toContain('text');
      expect(formatted).toContain('Hello');
    });
  });

  describe('Component Structure', () => {
    it('should render complete structure', async () => {
      const container = page.root.shadowRoot.querySelector('.loading-container');
      const pageLoading = container.querySelector('.page_loading');
      
      expect(container).toBeTruthy();
      expect(pageLoading).toBeTruthy();
      expect(pageLoading.innerHTML).toBeTruthy();
    });

    it('should have correct CSS classes', async () => {
      const container = page.root.shadowRoot.querySelector('.loading-container');
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      
      expect(container).toHaveClass('loading-container');
      expect(pageLoading).toHaveClass('page_loading');
    });
  });

  describe('State Management', () => {
    it('should render content after initialization', async () => {
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      expect(pageLoading.innerHTML).toBeTruthy();
    });

    it('should update content when setSvgContent is called', async () => {
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      
      component.setSvgContent();
      await page.waitForChanges();
      
      // Content should still be present after calling setSvgContent
      expect(pageLoading.innerHTML).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty dataTest prop', async () => {
      page = await newSpecPage({
        components: [BdsLoading],
        html: '<bds-loading-page data-test=""></bds-loading-page>',
      });
      
      expect(page.rootInstance.dataTest).toBe('');
      const container = page.root.shadowRoot.querySelector('.loading-container');
      expect(container.getAttribute('data-test')).toBe('');
    });

    it('should handle long dataTest values', async () => {
      const longValue = 'very-long-test-value-that-might-be-used-in-some-scenarios';
      page = await newSpecPage({
        components: [BdsLoading],
        html: `<bds-loading-page data-test="${longValue}"></bds-loading-page>`,
      });
      
      expect(page.rootInstance.dataTest).toBe(longValue);
      const container = page.root.shadowRoot.querySelector('.loading-container');
      expect(container.getAttribute('data-test')).toBe(longValue);
    });

    it('should handle special characters in dataTest', async () => {
      const specialValue = 'test-with_special.chars@123';
      page = await newSpecPage({
        components: [BdsLoading],
        html: `<bds-loading-page data-test="${specialValue}"></bds-loading-page>`,
      });
      
      expect(page.rootInstance.dataTest).toBe(specialValue);
    });
  });

  describe('Methods', () => {
    it('should have formatSvg method', async () => {
      expect(typeof component.formatSvg).toBe('function');
    });

    it('should have setSvgContent method', async () => {
      expect(typeof component.setSvgContent).toBe('function');
    });

    it('should formatSvg return string', async () => {
      const result = component.formatSvg('<svg width="10" height="10"></svg>');
      expect(typeof result).toBe('string');
    });
  });

  describe('Lifecycle', () => {
    it('should initialize SVG content during component load', async () => {
      const page = await newSpecPage({
        components: [BdsLoading],
        html: '<bds-loading-page></bds-loading-page>',
      });
      
      // Check that the component has initialized with SVG content
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      expect(pageLoading.innerHTML).toBeTruthy();
      expect(pageLoading.innerHTML).toContain('svg');
    });

    it('should render content after componentWillLoad', async () => {
      const component = new BdsLoading();
      
      component.componentWillLoad();
      
      // After componentWillLoad, the component should be ready to render content
      const page = await newSpecPage({
        components: [BdsLoading],
        html: '<bds-loading-page></bds-loading-page>',
      });
      
      const pageLoading = page.root.shadowRoot.querySelector('.page_loading');
      expect(pageLoading.innerHTML).toBeTruthy();
    });
  });
});
