import { newSpecPage } from '@stencil/core/testing';
import { BdsloadingBar } from '../loading-bar';

describe('bds-loading-bar', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BdsloadingBar],
      html: '<bds-loading-bar></bds-loading-bar>',
    });
    component = page.rootInstance;
  });

  it('should create and render', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toBeTruthy();
  });

  describe('Props', () => {
    it('should render with default props', async () => {
      expect(component.percent).toBe(0);
      expect(component.size).toBe('default');
      expect(component.text).toBe('');
      expect(component.dataTest).toBeNull();
    });

    it('should render with percent prop', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="50"></bds-loading-bar>',
      });
      
      expect(page.rootInstance.percent).toBe(50);
    });

    it('should render with various percent values', async () => {
      const percentValues = [0, 25, 50, 75, 100];
      
      for (const percent of percentValues) {
        page = await newSpecPage({
          components: [BdsloadingBar],
          html: `<bds-loading-bar percent="${percent}"></bds-loading-bar>`,
        });
        
        expect(page.rootInstance.percent).toBe(percent);
      }
    });

    it('should render with size prop', async () => {
      const sizes = ['small', 'default'];
      
      for (const size of sizes) {
        page = await newSpecPage({
          components: [BdsloadingBar],
          html: `<bds-loading-bar size="${size}"></bds-loading-bar>`,
        });
        
        expect(page.rootInstance.size).toBe(size);
      }
    });

    it('should render with text prop', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar text="Loading..."></bds-loading-bar>',
      });
      
      expect(page.rootInstance.text).toBe('Loading...');
    });

    it('should render with dataTest prop', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar data-test="loading-test"></bds-loading-bar>',
      });
      
      expect(page.rootInstance.dataTest).toBe('loading-test');
    });

    it('should render with all props combined', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="75" size="small" text="Loading progress" data-test="combined-test"></bds-loading-bar>',
      });
      
      expect(page.rootInstance.percent).toBe(75);
      expect(page.rootInstance.size).toBe('small');
      expect(page.rootInstance.text).toBe('Loading progress');
      expect(page.rootInstance.dataTest).toBe('combined-test');
    });
  });

  describe('Rendering', () => {
    it('should render loading bar container with correct classes', async () => {
      const loadingBar = page.root.shadowRoot.querySelector('.loading_bar');
      expect(loadingBar).toBeTruthy();
      expect(loadingBar).toHaveClass('loading_bar');
      expect(loadingBar).toHaveClass('size_default');
    });

    it('should render with small size class', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar size="small"></bds-loading-bar>',
      });
      
      const loadingBar = page.root.shadowRoot.querySelector('.loading_bar');
      expect(loadingBar).toHaveClass('size_small');
    });

    it('should render bar structure', async () => {
      const barBehind = page.root.shadowRoot.querySelector('.bar_behind');
      const loading = page.root.shadowRoot.querySelector('.loading');
      const loader = page.root.shadowRoot.querySelector('.loader');
      
      expect(barBehind).toBeTruthy();
      expect(loading).toBeTruthy();
      expect(loader).toBeTruthy();
    });

    it('should apply data-test attribute', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar data-test="test-bar"></bds-loading-bar>',
      });
      
      const loadingBar = page.root.shadowRoot.querySelector('.loading_bar');
      expect(loadingBar.getAttribute('data-test')).toBe('test-bar');
    });

    it('should not apply data-test attribute when null', async () => {
      const loadingBar = page.root.shadowRoot.querySelector('.loading_bar');
      expect(loadingBar.getAttribute('data-test')).toBeNull();
    });
  });

  describe('Progress Bar Styling', () => {
    it('should set width style to 0% with default percent', async () => {
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('0%');
    });

    it('should set width style based on percent prop', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="50"></bds-loading-bar>',
      });
      
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('50%');
    });

    it('should set width to 100% when percent exceeds 100', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="150"></bds-loading-bar>',
      });
      
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('100%');
    });

    it('should handle negative percent values', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="-10"></bds-loading-bar>',
      });
      
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('-10%');
    });

    it('should handle various percent values correctly', async () => {
      const testCases = [
        { percent: 0, expected: '0%' },
        { percent: 25, expected: '25%' },
        { percent: 50, expected: '50%' },
        { percent: 75, expected: '75%' },
        { percent: 100, expected: '100%' },
        { percent: 125, expected: '100%' }, // capped at 100%
      ];

      for (const testCase of testCases) {
        page = await newSpecPage({
          components: [BdsloadingBar],
          html: `<bds-loading-bar percent="${testCase.percent}"></bds-loading-bar>`,
        });
        
        const loading = page.root.shadowRoot.querySelector('.loading');
        expect(loading.style.width).toBe(testCase.expected);
      }
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined percent', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar></bds-loading-bar>',
      });
      
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('0%');
    });

    it('should handle null percent', async () => {
      component.percent = null;
      await page.waitForChanges();
      
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('0%');
    });

    it('should handle empty string text', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar text=""></bds-loading-bar>',
      });
      
      expect(page.rootInstance.text).toBe('');
    });

    it('should handle long text values', async () => {
      const longText = 'This is a very long loading text that should be handled gracefully';
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: `<bds-loading-bar text="${longText}"></bds-loading-bar>`,
      });
      
      expect(page.rootInstance.text).toBe(longText);
    });

    it('should handle special characters in text', async () => {
      const specialText = 'Loading... 50% (αβγ) 测试 🚀';
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: `<bds-loading-bar text="${specialText}"></bds-loading-bar>`,
      });
      
      expect(page.rootInstance.text).toBe(specialText);
    });

    it('should handle decimal percent values', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="33.33"></bds-loading-bar>',
      });
      
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('33.33%');
    });
  });

  describe('Component Structure', () => {
    it('should render with Host wrapper', async () => {
      expect(page.root.tagName.toLowerCase()).toBe('bds-loading-bar');
    });

    it('should have shadow DOM', async () => {
      expect(page.root.shadowRoot).toBeTruthy();
    });

    it('should render complete structure', async () => {
      expect(page.root).toEqualHtml(`
        <bds-loading-bar>
          <mock:shadow-root>
            <div class="loading_bar size_default">
              <div class="bar_behind">
                <div class="loading" style="width: 0%;">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </mock:shadow-root>
        </bds-loading-bar>
      `);
    });
  });

  describe('Type Validation', () => {
    it('should handle size type validation', async () => {
      // Test valid sizes
      const validSizes = ['small', 'default'];
      for (const size of validSizes) {
        page = await newSpecPage({
          components: [BdsloadingBar],
          html: `<bds-loading-bar size="${size}"></bds-loading-bar>`,
        });
        
        expect(page.rootInstance.size).toBe(size);
        const loadingBar = page.root.shadowRoot.querySelector('.loading_bar');
        expect(loadingBar).toHaveClass(`size_${size}`);
      }
    });

    it('should handle numeric percent prop as string', async () => {
      page = await newSpecPage({
        components: [BdsloadingBar],
        html: '<bds-loading-bar percent="42"></bds-loading-bar>',
      });
      
      expect(page.rootInstance.percent).toBe(42);
      const loading = page.root.shadowRoot.querySelector('.loading');
      expect(loading.style.width).toBe('42%');
    });
  });
});
