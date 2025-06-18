import { newSpecPage } from '@stencil/core/testing';
import { MenuList } from '../menu-list';

describe('bds-menu-list', () => {
  it('should render with default structure', async () => {
    const page = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list></bds-menu-list>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
  });

  it('should render correct DOM structure', async () => {
    const page = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list></bds-menu-list>`,
    });

    const menuListDiv = page.root.shadowRoot.querySelector('.menu-list');
    expect(menuListDiv).toBeTruthy();

    const leftDiv = page.root.shadowRoot.querySelector('.menu-list__left');
    const rightDiv = page.root.shadowRoot.querySelector('.menu-list__right');
    const slot = page.root.shadowRoot.querySelector('slot');

    expect(leftDiv).toBeTruthy();
    expect(rightDiv).toBeTruthy();
    expect(slot).toBeTruthy();
  });

  it('should contain slot for content projection', async () => {
    const page = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list>
               <span>Menu item content</span>
             </bds-menu-list>`,
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should have proper element order in DOM', async () => {
    const page = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list></bds-menu-list>`,
    });

    const menuListDiv = page.root.shadowRoot.querySelector('.menu-list');
    const children = Array.from(menuListDiv.children);

    expect(children).toHaveLength(3);
    expect(children[0].classList.contains('menu-list__left')).toBe(true);
    expect(children[1].tagName.toLowerCase()).toBe('slot');
    expect(children[2].classList.contains('menu-list__right')).toBe(true);
  });

  it('should apply correct CSS classes', async () => {
    const page = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list></bds-menu-list>`,
    });

    const menuListDiv = page.root.shadowRoot.querySelector('.menu-list');
    const leftDiv = page.root.shadowRoot.querySelector('.menu-list__left');
    const rightDiv = page.root.shadowRoot.querySelector('.menu-list__right');

    expect(menuListDiv.classList.contains('menu-list')).toBe(true);
    expect(leftDiv.classList.contains('menu-list__left')).toBe(true);
    expect(rightDiv.classList.contains('menu-list__right')).toBe(true);
  });

  it('should render consistently with multiple instances', async () => {
    const page1 = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list></bds-menu-list>`,
    });

    const page2 = await newSpecPage({
      components: [MenuList],
      html: `<bds-menu-list></bds-menu-list>`,
    });

    // Test both instances have identical structure
    const instances = [page1.root, page2.root];
    
    instances.forEach((menuList) => {
      const menuListDiv = menuList.shadowRoot.querySelector('.menu-list');
      const leftDiv = menuList.shadowRoot.querySelector('.menu-list__left');
      const rightDiv = menuList.shadowRoot.querySelector('.menu-list__right');
      const slot = menuList.shadowRoot.querySelector('slot');

      expect(menuListDiv).toBeTruthy();
      expect(leftDiv).toBeTruthy();
      expect(rightDiv).toBeTruthy();
      expect(slot).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should provide proper semantic structure', async () => {
      const page = await newSpecPage({
        components: [MenuList],
        html: `<bds-menu-list></bds-menu-list>`,
      });

      const menuListDiv = page.root.shadowRoot.querySelector('.menu-list');
      expect(menuListDiv.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('Component structure', () => {
    it('should maintain structure with slotted content', async () => {
      const page = await newSpecPage({
        components: [MenuList],
        html: `
          <bds-menu-list>
            <div>First item</div>
            <div>Second item</div>
            <div>Third item</div>
          </bds-menu-list>
        `,
      });

      const menuListDiv = page.root.shadowRoot.querySelector('.menu-list');
      const leftDiv = page.root.shadowRoot.querySelector('.menu-list__left');
      const rightDiv = page.root.shadowRoot.querySelector('.menu-list__right');
      const slot = page.root.shadowRoot.querySelector('slot');

      expect(menuListDiv).toBeTruthy();
      expect(leftDiv).toBeTruthy();
      expect(rightDiv).toBeTruthy();
      expect(slot).toBeTruthy();
    });

    it('should render empty divs for left and right sections', async () => {
      const page = await newSpecPage({
        components: [MenuList],
        html: `<bds-menu-list></bds-menu-list>`,
      });

      const leftDiv = page.root.shadowRoot.querySelector('.menu-list__left');
      const rightDiv = page.root.shadowRoot.querySelector('.menu-list__right');

      expect(leftDiv.textContent.trim()).toBe('');
      expect(rightDiv.textContent.trim()).toBe('');
      expect(leftDiv.children).toHaveLength(0);
      expect(rightDiv.children).toHaveLength(0);
    });
  });
});
