import { newSpecPage } from '@stencil/core/testing';
import { BdsMenuSeparation } from '../menu-separation';

describe('bds-menu-separation', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [BdsMenuSeparation],
      html: `<bds-menu-separation></bds-menu-separation>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.value).toBeNull();
    expect(page.root.size).toBeNull();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [BdsMenuSeparation],
      html: `<bds-menu-separation value="Section Title" size="large"></bds-menu-separation>`,
    });

    expect(page.root.value).toBe('Section Title');
    expect(page.root.size).toBe('large');
  });

  it('should render correct DOM structure', async () => {
    const page = await newSpecPage({
      components: [BdsMenuSeparation],
      html: `<bds-menu-separation></bds-menu-separation>`,
    });

    const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
    expect(menuseparationDiv).toBeTruthy();

    const dividorDiv = page.root.shadowRoot.querySelector('.dividor-item');
    expect(dividorDiv).toBeTruthy();
  });

  describe('Value prop', () => {
    it('should not render title when value is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement).toBeNull();
    });

    it('should render title when value is provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Menu Section"></bds-menu-separation>`,
      });

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement).toBeTruthy();
      expect(titleElement.textContent).toBe('Menu Section');
    });

    it('should render title with correct attributes', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Test Title"></bds-menu-separation>`,
      });

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement.getAttribute('variant')).toBe('fs-10');
      expect(titleElement.getAttribute('tag')).toBe('span');
      expect(titleElement.classList.contains('title-item')).toBe(true);
    });

    it('should handle different value texts', async () => {
      const values = ['Short', 'A longer menu section title', 'Special-Characters_123', ''];
      
      for (const value of values) {
        const page = await newSpecPage({
          components: [BdsMenuSeparation],
          html: `<bds-menu-separation value="${value}"></bds-menu-separation>`,
        });

        if (value) {
          const titleElement = page.root.shadowRoot.querySelector('.title-item');
          expect(titleElement).toBeTruthy();
          expect(titleElement.textContent).toBe(value);
        } else {
          const titleElement = page.root.shadowRoot.querySelector('.title-item');
          expect(titleElement).toBeNull();
        }
      }
    });

    it('should not render title when value is empty string', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value=""></bds-menu-separation>`,
      });

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement).toBeNull();
    });

    it('should not render title when value is null', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      // Explicitly set to null to test
      page.root.value = null;
      await page.waitForChanges();

      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      expect(titleElement).toBeNull();
    });
  });

  describe('Size prop', () => {
    it('should apply size class when size is provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation size="large"></bds-menu-separation>`,
      });

      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      expect(menuseparationDiv.classList.contains('menuseparation__large')).toBe(true);
    });

    it('should handle different size values', async () => {
      const sizes = ['small', 'default', 'large'];
      
      for (const size of sizes) {
        const page = await newSpecPage({
          components: [BdsMenuSeparation],
          html: `<bds-menu-separation size="${size}"></bds-menu-separation>`,
        });

        const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
        expect(menuseparationDiv.classList.contains(`menuseparation__${size}`)).toBe(true);
      }
    });

    it('should apply null size class when size is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      expect(menuseparationDiv.classList.contains('menuseparation__null')).toBe(true);
    });

    it('should handle custom size values', async () => {
      const customSizes = ['extra-small', 'medium', 'extra-large', 'custom'];
      
      for (const size of customSizes) {
        const page = await newSpecPage({
          components: [BdsMenuSeparation],
          html: `<bds-menu-separation size="${size}"></bds-menu-separation>`,
        });

        const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
        expect(menuseparationDiv.classList.contains(`menuseparation__${size}`)).toBe(true);
      }
    });
  });

  describe('CSS classes', () => {
    it('should always apply base menuseparation class', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      expect(menuseparationDiv.classList.contains('menuseparation')).toBe(true);
    });

    it('should apply dividor-item class to divider element', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      const dividorDiv = page.root.shadowRoot.querySelector('.dividor-item');
      expect(dividorDiv).toBeTruthy();
      expect(dividorDiv.classList.contains('dividor-item')).toBe(true);
    });
  });

  describe('Element ordering', () => {
    it('should render title before divider when value is provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Title Text"></bds-menu-separation>`,
      });

      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      const children = Array.from(menuseparationDiv.children);

      expect(children).toHaveLength(2);
      expect(children[0].classList.contains('title-item')).toBe(true);
      expect(children[1].classList.contains('dividor-item')).toBe(true);
    });

    it('should render only divider when value is not provided', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      const children = Array.from(menuseparationDiv.children);

      expect(children).toHaveLength(1);
      expect(children[0].classList.contains('dividor-item')).toBe(true);
    });
  });

  describe('Complex scenarios', () => {
    it('should render complete component with all props', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Navigation Section" size="large"></bds-menu-separation>`,
      });

      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      const titleElement = page.root.shadowRoot.querySelector('.title-item');
      const dividorDiv = page.root.shadowRoot.querySelector('.dividor-item');

      expect(menuseparationDiv.classList.contains('menuseparation')).toBe(true);
      expect(menuseparationDiv.classList.contains('menuseparation__large')).toBe(true);
      expect(titleElement).toBeTruthy();
      expect(titleElement.textContent).toBe('Navigation Section');
      expect(dividorDiv).toBeTruthy();
    });

    it('should handle various combinations of props', async () => {
      const combinations = [
        { value: 'Menu', size: 'small' },
        { value: 'Settings', size: 'default' },
        { value: 'Advanced Options', size: 'large' },
        { value: '', size: 'small' },
        { value: null, size: 'large' }
      ];

      for (const combo of combinations) {
        const page = await newSpecPage({
          components: [BdsMenuSeparation],
          html: `<bds-menu-separation value="${combo.value || ''}" size="${combo.size}"></bds-menu-separation>`,
        });

        const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
        const dividorDiv = page.root.shadowRoot.querySelector('.dividor-item');
        
        expect(menuseparationDiv.classList.contains(`menuseparation__${combo.size}`)).toBe(true);
        expect(dividorDiv).toBeTruthy();

        if (combo.value) {
          const titleElement = page.root.shadowRoot.querySelector('.title-item');
          expect(titleElement).toBeTruthy();
          expect(titleElement.textContent).toBe(combo.value);
        } else {
          const titleElement = page.root.shadowRoot.querySelector('.title-item');
          expect(titleElement).toBeNull();
        }
      }
    });

    it('should render consistently with multiple instances', async () => {
      const page1 = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Section 1" size="small"></bds-menu-separation>`,
      });

      const page2 = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Section 2" size="large"></bds-menu-separation>`,
      });

      const instances = [page1.root, page2.root];
      
      instances.forEach((separation) => {
        const menuseparationDiv = separation.shadowRoot.querySelector('.menuseparation');
        const titleElement = separation.shadowRoot.querySelector('.title-item');
        const dividorDiv = separation.shadowRoot.querySelector('.dividor-item');

        expect(menuseparationDiv).toBeTruthy();
        expect(titleElement).toBeTruthy();
        expect(dividorDiv).toBeTruthy();
      });
    });
  });

  describe('Component structure', () => {
    it('should maintain proper shadow DOM structure', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Test" size="default"></bds-menu-separation>`,
      });

      expect(page.root.shadowRoot).toBeTruthy();
      
      const menuseparationDiv = page.root.shadowRoot.querySelector('.menuseparation');
      expect(menuseparationDiv).toBeTruthy();
      expect(menuseparationDiv.tagName.toLowerCase()).toBe('div');
    });

    it('should render bds-typo element when title is present', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation value="Title"></bds-menu-separation>`,
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      expect(typoElement).toBeTruthy();
      expect(typoElement.tagName.toLowerCase()).toBe('bds-typo');
    });

    it('should not render bds-typo element when title is not present', async () => {
      const page = await newSpecPage({
        components: [BdsMenuSeparation],
        html: `<bds-menu-separation></bds-menu-separation>`,
      });

      const typoElement = page.root.shadowRoot.querySelector('bds-typo');
      expect(typoElement).toBeNull();
    });
  });
});
