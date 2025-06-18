import { newSpecPage } from '@stencil/core/testing';
import { MenuListItem } from '../menu-list-item';

describe('bds-menu-list-item', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [MenuListItem],
      html: `<bds-menu-list-item></bds-menu-list-item>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.color).toBeUndefined();
    expect(page.root.icon).toBeUndefined();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [MenuListItem],
      html: `<bds-menu-list-item color="red" icon="home"></bds-menu-list-item>`,
    });

    expect(page.root.color).toBe('red');
    expect(page.root.icon).toBe('home');
  });

  it('should render correct DOM structure', async () => {
    const page = await newSpecPage({
      components: [MenuListItem],
      html: `<bds-menu-list-item icon="user"></bds-menu-list-item>`,
    });

    const menuListItemDiv = page.root.shadowRoot.querySelector('.menu-list-item');
    expect(menuListItemDiv).toBeTruthy();

    const icon = page.root.shadowRoot.querySelector('bds-icon');
    const typo = page.root.shadowRoot.querySelector('bds-typo');
    const slot = page.root.shadowRoot.querySelector('slot');

    expect(icon).toBeTruthy();
    expect(typo).toBeTruthy();
    expect(slot).toBeTruthy();
  });

  it('should apply role="button" to host element', async () => {
    const page = await newSpecPage({
      components: [MenuListItem],
      html: `<bds-menu-list-item></bds-menu-list-item>`,
    });

    expect(page.root.getAttribute('role')).toBe('button');
  });

  describe('Icon rendering', () => {
    it('should render icon with provided name', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home"></bds-menu-list-item>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('home');
    });

    it('should render icon with default color when no color prop provided', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="user"></bds-menu-list-item>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('color')).toBe('currentColor');
    });

    it('should render icon with custom color when color prop provided', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="user" color="blue"></bds-menu-list-item>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('color')).toBe('blue');
    });

    it('should handle different icon names', async () => {
      const iconNames = ['home', 'user', 'settings', 'search'];
      
      for (const iconName of iconNames) {
        const page = await newSpecPage({
          components: [MenuListItem],
          html: `<bds-menu-list-item icon="${iconName}"></bds-menu-list-item>`,
        });

        const icon = page.root.shadowRoot.querySelector('bds-icon');
        expect(icon.getAttribute('name')).toBe(iconName);
      }
    });
  });

  describe('Color variations', () => {
    it('should handle different color values', async () => {
      const colors = ['red', 'blue', 'green', '#FF0000', 'rgb(255, 0, 0)', 'currentColor'];
      
      for (const color of colors) {
        const page = await newSpecPage({
          components: [MenuListItem],
          html: `<bds-menu-list-item icon="home" color="${color}"></bds-menu-list-item>`,
        });

        const icon = page.root.shadowRoot.querySelector('bds-icon');
        expect(icon.getAttribute('color')).toBe(color);
      }
    });

    it('should default to currentColor when color is empty string', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home" color=""></bds-menu-list-item>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('color')).toBe('currentColor');
    });

    it('should default to currentColor when color is null', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home"></bds-menu-list-item>`,
      });

      // Manually set color to null to test fallback
      page.root.color = null;
      await page.waitForChanges();

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      expect(icon.getAttribute('color')).toBe('currentColor');
    });
  });

  describe('Typography element', () => {
    it('should render bds-typo with correct variant', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home"></bds-menu-list-item>`,
      });

      const typo = page.root.shadowRoot.querySelector('bds-typo');
      expect(typo.getAttribute('variant')).toBe('fs-10');
    });

    it('should render bds-typo with correct CSS class', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home"></bds-menu-list-item>`,
      });

      const typo = page.root.shadowRoot.querySelector('bds-typo');
      expect(typo.classList.contains('menu-list-item__text')).toBe(true);
    });

    it('should contain slot for text content', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home">Menu Item Text</bds-menu-list-item>`,
      });

      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Element ordering', () => {
    it('should render icon before text', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home">Text</bds-menu-list-item>`,
      });

      const menuListItemDiv = page.root.shadowRoot.querySelector('.menu-list-item');
      const children = Array.from(menuListItemDiv.children);

      expect(children).toHaveLength(2);
      expect(children[0].tagName.toLowerCase()).toBe('bds-icon');
      expect(children[1].tagName.toLowerCase()).toBe('bds-typo');
    });
  });

  describe('Complex scenarios', () => {
    it('should render complete component with all props and content', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="settings" color="purple">Settings Menu</bds-menu-list-item>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      const typo = page.root.shadowRoot.querySelector('bds-typo');
      const menuListItemDiv = page.root.shadowRoot.querySelector('.menu-list-item');

      expect(icon.getAttribute('name')).toBe('settings');
      expect(icon.getAttribute('color')).toBe('purple');
      expect(typo.getAttribute('variant')).toBe('fs-10');
      expect(menuListItemDiv).toBeTruthy();
      expect(page.root.getAttribute('role')).toBe('button');
    });

    it('should handle empty text content', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home"></bds-menu-list-item>`,
      });

      const typo = page.root.shadowRoot.querySelector('bds-typo');
      const slot = page.root.shadowRoot.querySelector('slot');
      
      expect(typo).toBeTruthy();
      expect(slot).toBeTruthy();
    });

    it('should render consistently with different icon and color combinations', async () => {
      const combinations = [
        { icon: 'home', color: 'red' },
        { icon: 'user', color: 'blue' },
        { icon: 'settings', color: 'green' },
        { icon: 'search', color: 'purple' }
      ];

      for (const combo of combinations) {
        const page = await newSpecPage({
          components: [MenuListItem],
          html: `<bds-menu-list-item icon="${combo.icon}" color="${combo.color}">Text</bds-menu-list-item>`,
        });

        const icon = page.root.shadowRoot.querySelector('bds-icon');
        const typo = page.root.shadowRoot.querySelector('bds-typo');
        const menuListItemDiv = page.root.shadowRoot.querySelector('.menu-list-item');

        expect(icon.getAttribute('name')).toBe(combo.icon);
        expect(icon.getAttribute('color')).toBe(combo.color);
        expect(typo).toBeTruthy();
        expect(menuListItemDiv).toBeTruthy();
      }
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic structure with role button', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home">Home</bds-menu-list-item>`,
      });

      expect(page.root.getAttribute('role')).toBe('button');
    });

    it('should maintain role attribute regardless of props', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="user" color="red">User</bds-menu-list-item>`,
      });

      expect(page.root.getAttribute('role')).toBe('button');
    });
  });

  describe('Component structure', () => {
    it('should maintain proper CSS class structure', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item icon="home">Home</bds-menu-list-item>`,
      });

      const menuListItemDiv = page.root.shadowRoot.querySelector('.menu-list-item');
      const typo = page.root.shadowRoot.querySelector('.menu-list-item__text');

      expect(menuListItemDiv).toBeTruthy();
      expect(typo).toBeTruthy();
      expect(menuListItemDiv.classList.contains('menu-list-item')).toBe(true);
      expect(typo.classList.contains('menu-list-item__text')).toBe(true);
    });

    it('should render without icon when icon prop is not provided', async () => {
      const page = await newSpecPage({
        components: [MenuListItem],
        html: `<bds-menu-list-item>Text only</bds-menu-list-item>`,
      });

      const icon = page.root.shadowRoot.querySelector('bds-icon');
      const typo = page.root.shadowRoot.querySelector('bds-typo');

      // Icon should still be rendered but with undefined name
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBeNull();
      expect(typo).toBeTruthy();
    });
  });
});
