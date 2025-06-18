import { newSpecPage } from '@stencil/core/testing';
import { Build } from '@stencil/core';

// Mock Build.isBrowser
(Build as any).isBrowser = true;

// Mock the blip-tokens imports
jest.mock('blip-tokens/build/json/assets_icons.json', () => ({
  'asset-icon-edit-outline':
    'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTMgMTdWMjFIMTBWMTlINVYxN0gzWiIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==',
  'asset-icon-edit-solid':
    'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTMgMTdWMjFIMTBWMTlINVYxN0gzWiIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==',
}));

jest.mock('blip-tokens/build/json/assets_emojis.json', () => ({
  'asset-emoji-smile':
    'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkQ1NEYiLz48L3N2Zz4=',
}));

jest.mock('blip-tokens/build/json/assets_logos.json', () => ({
  'asset-logo-brand':
    'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkQ1NEYiLz48L3N2Zz4=',
}));

// Mock DOM methods
Object.defineProperty(global, 'document', {
  value: {
    createElement: jest.fn(() => ({
      innerHTML: '',
      firstElementChild: {
        removeAttribute: jest.fn(),
        setAttribute: jest.fn(),
        getElementsByTagName: jest.fn(() => []),
      },
    })),
  },
});

// Mock atob function
global.atob = jest.fn((str) => str);

import { Icon } from '../icon';

describe('bds-icon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Class Logic', () => {
    it('should create component instance', () => {
      const component = new Icon();
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(Icon);
    });

    it('should have correct default properties', () => {
      const component = new Icon();
      expect(component.size).toBe('medium');
      expect(component.theme).toBe('outline');
      expect(component.type).toBe('icon');
      expect(component.lazy).toBe(false);
    });

    it('should accept property changes', () => {
      const component = new Icon();

      component.name = 'edit';
      component.size = 'large';
      component.theme = 'solid';
      component.type = 'emoji';
      component.lazy = true;
      component.color = '#ff0000';
      component.dataTest = 'test-icon';

      expect(component.name).toBe('edit');
      expect(component.size).toBe('large');
      expect(component.theme).toBe('solid');
      expect(component.type).toBe('emoji');
      expect(component.lazy).toBe(true);
      expect(component.color).toBe('#ff0000');
      expect(component.dataTest).toBe('test-icon');
    });

    it('should render method without errors', () => {
      const component = new Icon();
      const result = component.render();

      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });

  describe('Basic newSpecPage Tests', () => {
    it('should render basic component without name', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.root).toBeTruthy();
      expect(page.root.tagName).toBe('BDS-ICON');
      expect(page.root.getAttribute('role')).toBe('img');
    });

    it('should have correct CSS classes', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon size="large"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.root).toHaveClass('bds-icon');
      expect(page.root).toHaveClass('bds-icon__size--large');
    });

    it('should accept props correctly', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="edit" size="large" theme="solid" color="#ff0000" data-test="test"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.name).toBe('edit');
      expect(page.rootInstance.size).toBe('large');
      expect(page.rootInstance.theme).toBe('solid');
      expect(page.rootInstance.color).toBe('#ff0000');
      expect(page.rootInstance.dataTest).toBe('test');
    });
  });

  describe('Size Variants', () => {
    const sizes = [
      'xxx-small',
      'xx-small',
      'x-small',
      'small',
      'medium',
      'large',
      'x-large',
      'xx-large',
      'xxx-large',
      'brand',
    ];

    sizes.forEach((size) => {
      it(`should render with ${size} size`, async () => {
        const page = await newSpecPage({
          components: [Icon],
          html: `<bds-icon size="${size}"></bds-icon>`,
          supportsShadowDom: false,
          autoApplyChanges: false,
        });

        expect(page.root).toHaveClass(`bds-icon__size--${size}`);
        expect(page.rootInstance.size).toBe(size);
      });
    });
  });

  describe('Theme Properties', () => {
    it('should default to outline theme', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.theme).toBe('outline');
    });

    it('should accept solid theme', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon theme="solid"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.theme).toBe('solid');
    });
  });

  describe('Icon Types', () => {
    it('should default to icon type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.type).toBe('icon');
    });

    it('should accept emoji type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon type="emoji"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.type).toBe('emoji');
    });

    it('should accept logo type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon type="logo"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.type).toBe('logo');
    });
  });

  describe('Accessibility', () => {
    it('should have role="img"', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.root.getAttribute('role')).toBe('img');
    });

    it('should accept custom aria-label', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon aria-label="Custom label"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.ariaLabel).toBe('Custom label');
    });
  });

  describe('Lazy Loading', () => {
    it('should not lazy load by default', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.lazy).toBe(false);
    });

    it('should accept lazy loading', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon lazy="true"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.lazy).toBe(true);
    });
  });

  describe('SVG Content Loading', () => {
    it('should load SVG content for icon type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="edit" type="icon" theme="outline"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      // Ensure component is visible and browser environment is mocked
      (page.rootInstance as any).isVisible = true;
      (Build as any).isBrowser = true;
      
      // Call setSvgContent directly to test the logic
      (page.rootInstance as any).setSvgContent();

      expect(page.rootInstance.svgContent).toBeDefined();
      expect(page.rootInstance.svgContent).toContain('PHN2ZyB3aWR0aD0i');
    });

    it('should load SVG content for emoji type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="smile" type="emoji"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      // Ensure component is visible and browser environment is mocked
      (page.rootInstance as any).isVisible = true;
      (Build as any).isBrowser = true;
      
      // Call setSvgContent directly to test the logic
      (page.rootInstance as any).setSvgContent();

      expect(page.rootInstance.svgContent).toBeDefined();
      expect(page.rootInstance.svgContent).toContain('PHN2ZyB3aWR0aD0i');
    });

    it('should load SVG content for logo type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="brand" type="logo"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      // Ensure component is visible and browser environment is mocked
      (page.rootInstance as any).isVisible = true;
      (Build as any).isBrowser = true;
      
      // Call setSvgContent directly to test the logic
      (page.rootInstance as any).setSvgContent();

      expect(page.rootInstance.svgContent).toBeDefined();
      expect(page.rootInstance.svgContent).toContain('PHN2ZyB3aWR0aD0i');
    });

    it('should not load SVG content when name is not provided', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      page.rootInstance.isVisible = true;
      page.rootInstance.loadIcon();

      expect(page.rootInstance.svgContent).toBeUndefined();
    });

    it('should handle errors when loading invalid icon names', async () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

      // Mock atob to throw an error for invalid icons
      const originalAtob = global.atob;
      global.atob = jest.fn().mockImplementation((str) => {
        if (str.includes('invalid-icon')) {
          throw new Error('Invalid base64');
        }
        return str;
      });

      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="invalid-icon" type="icon"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      // Ensure component is visible and browser environment is mocked
      (page.rootInstance as any).isVisible = true;
      (Build as any).isBrowser = true;
      
      // Call setSvgContent directly to trigger the error
      (page.rootInstance as any).setSvgContent();

      expect(consoleWarnSpy).toHaveBeenCalledWith('[Warning]: Failed to setSvgContent to', 'invalid-icon');

      // Restore mocks
      global.atob = originalAtob;
      consoleWarnSpy.mockRestore();
    });
  });

  describe('Lifecycle Methods', () => {
    it('should call waitUntilVisible on connectedCallback', () => {
      const component = new Icon();
      const waitUntilVisibleSpy = jest.spyOn(component as any, 'waitUntilVisible').mockImplementation();

      component.connectedCallback();

      expect(waitUntilVisibleSpy).toHaveBeenCalled();
    });

    it('should disconnect IntersectionObserver on disconnectedCallback', () => {
      const component = new Icon();
      const mockObserver = {
        disconnect: jest.fn(),
      };
      (component as any).io = mockObserver;

      component.disconnectedCallback();

      expect(mockObserver.disconnect).toHaveBeenCalled();
      expect((component as any).io).toBeUndefined();
    });

    it('should handle disconnectedCallback when no observer exists', () => {
      const component = new Icon();
      (component as any).io = undefined;

      expect(() => component.disconnectedCallback()).not.toThrow();
    });
  });

  describe('Watch Properties', () => {
    it('should call loadIcon when name changes', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      const loadIconSpy = jest.spyOn(page.rootInstance, 'loadIcon');

      page.rootInstance.name = 'edit';

      expect(loadIconSpy).toHaveBeenCalled();
    });

    it('should call loadIcon when theme changes', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="edit"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      const loadIconSpy = jest.spyOn(page.rootInstance, 'loadIcon');

      page.rootInstance.theme = 'solid';

      expect(loadIconSpy).toHaveBeenCalled();
    });

    it('should set ariaLabel from name when ariaLabel is not provided', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      page.rootInstance.name = 'edit';
      page.rootInstance.loadIcon();

      expect(page.rootInstance.ariaLabel).toBe('edit');
    });

    it('should not override existing ariaLabel', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon aria-label="Custom Label"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      page.rootInstance.name = 'edit';
      page.rootInstance.loadIcon();

      expect(page.rootInstance.ariaLabel).toBe('Custom Label');
    });
  });

  describe('Icon Property', () => {
    it('should accept icon prop as string', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon icon="edit"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.icon).toBe('edit');
    });

    it('should accept src prop', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon src="/path/to/icon.svg"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.src).toBe('/path/to/icon.svg');
    });

    it('should accept flipRtl prop', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon flip-rtl="true"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.flipRtl).toBe(true);
    });
  });

  describe('Rendering with SVG Content', () => {
    it('should render with icon-inner class for icon type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="edit" type="icon"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      page.rootInstance.svgContent = '<svg><path></path></svg>';
      await page.waitForChanges();

      const iconInner = page.root.querySelector('.icon-inner');
      expect(iconInner).toBeTruthy();
      expect(iconInner.innerHTML).toContain('svg');
    });

    it('should render with emoji-inner class for emoji type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="smile" type="emoji"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      page.rootInstance.svgContent = '<svg><circle></circle></svg>';
      await page.waitForChanges();

      const emojiInner = page.root.querySelector('.emoji-inner');
      expect(emojiInner).toBeTruthy();
      expect(emojiInner.innerHTML).toContain('svg');
    });

    it('should render with logo-inner class for logo type', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="brand" type="logo"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      page.rootInstance.svgContent = '<svg><rect></rect></svg>';
      await page.waitForChanges();

      const logoInner = page.root.querySelector('.logo-inner');
      expect(logoInner).toBeTruthy();
      expect(logoInner.innerHTML).toContain('svg');
    });

    it('should render with data-test attribute', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon data-test="icon-test"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      const iconInner = page.root.querySelector('.icon-inner');
      expect(iconInner.getAttribute('data-test')).toBe('icon-test');
    });
  });

  describe('Error Handling', () => {
    it('should not load content when not visible in browser', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon name="edit"></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      // Set component as not visible but browser is available
      (page.rootInstance as any).isVisible = false;
      (Build as any).isBrowser = true;
      
      // Reset svgContent to ensure it starts as undefined
      (page.rootInstance as any).svgContent = undefined;
      
      page.rootInstance.loadIcon();

      // Since loadIcon checks both Build.isBrowser AND isVisible, 
      // setSvgContent should not be called when isVisible is false
      expect(page.rootInstance.svgContent).toBeUndefined();
      
      // But ariaLabel should still be set since that happens regardless of visibility
      expect(page.rootInstance.ariaLabel).toBe('edit');
    });

    it('should handle null dataTest gracefully', async () => {
      const page = await newSpecPage({
        components: [Icon],
        html: `<bds-icon></bds-icon>`,
        supportsShadowDom: false,
        autoApplyChanges: false,
      });

      expect(page.rootInstance.dataTest).toBeNull();
      const iconInner = page.root.querySelector('.icon-inner');
      expect(iconInner.getAttribute('data-test')).toBeNull();
    });
  });
});
