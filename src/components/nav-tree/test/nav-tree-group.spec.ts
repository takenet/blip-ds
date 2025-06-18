import { newSpecPage } from '@stencil/core/testing';
import { NavTreeGroup } from '../nav-tree-group';
import { NavTree } from '../nav-tree';

describe('bds-nav-tree-group', () => {
  async function createNavTreeGroupPage(props = {}, content = '') {
    const propsString = Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? `${key}="${value}"` : '';
        }
        return `${key}="${value}"`;
      })
      .filter(attr => attr !== '')
      .join(' ');
    
    return await newSpecPage({
      components: [NavTreeGroup, NavTree],
      html: `<bds-nav-tree-group ${propsString}>${content}</bds-nav-tree-group>`,
    });
  }

  it('should render component with correct structure', async () => {
    const page = await createNavTreeGroupPage();
    
    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-NAV-TREE-GROUP');
    expect(page.root.shadowRoot).toBeTruthy();
    
    // Should render a slot element
    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should have default props', async () => {
    const page = await createNavTreeGroupPage();
    
    expect(page.root.collapse).toBe('single');
  });

  it('should render with collapse prop', async () => {
    const singlePage = await createNavTreeGroupPage({ collapse: 'single' });
    const multiplePage = await createNavTreeGroupPage({ collapse: 'multiple' });
    
    // Test that the component accepts the collapse attribute and handles it
    expect(singlePage.root).toBeTruthy();
    expect(multiplePage.root).toBeTruthy();
    
    // Test the actual functionality rather than specific prop values
    expect(typeof singlePage.root.closeAll).toBe('function');
    expect(typeof multiplePage.root.openAll).toBe('function');
    
    // Verify that methods work without error
    await singlePage.root.closeAll();
    await multiplePage.root.openAll();
    expect(singlePage.root).toBeTruthy();
    expect(multiplePage.root).toBeTruthy();
  });

  it('should render nav-tree children', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    const navTrees = page.root.querySelectorAll('bds-nav-tree');
    expect(navTrees.length).toBe(2);
    expect(navTrees[0].text).toBe('Item 1');
    expect(navTrees[1].text).toBe('Item 2');
  });

  it('should handle closeAll method', async () => {
    const content = `
      <bds-nav-tree text="Item 1" is-open="true"></bds-nav-tree>
      <bds-nav-tree text="Item 2" is-open="true"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    // Method should be available
    expect(typeof page.root.closeAll).toBe('function');
    
    // Call method - should not throw error
    await page.root.closeAll();
    expect(page.root).toBeTruthy();
  });

  it('should handle openAll method', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    // Method should be available
    expect(typeof page.root.openAll).toBe('function');
    
    // Call method - should not throw error
    await page.root.openAll();
    expect(page.root).toBeTruthy();
  });

  it('should emit bdsNavTreeGroupCloseAll event on closeAll', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    let eventEmitted = false;
    page.root.addEventListener('bdsNavTreeGroupCloseAll', () => {
      eventEmitted = true;
    });
    
    await page.root.closeAll();
    expect(eventEmitted).toBe(true);
  });

  it('should emit bdsNavTreeGroupOpenAll event on openAll', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    let eventEmitted = false;
    page.root.addEventListener('bdsNavTreeGroupOpenAll', () => {
      eventEmitted = true;
    });
    
    await page.root.openAll();
    expect(eventEmitted).toBe(true);
  });

  it('should handle collapse single mode', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({ collapse: 'single' }, content);
    
    expect(page.root.collapse).toBe('single');
    
    // Should be able to call methods without error
    await page.root.closeAll();
    await page.root.openAll();
    expect(page.root).toBeTruthy();
  });

  it('should handle collapse multiple mode', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({ collapse: 'multiple' }, content);
    
    expect(page.root.collapse).toBe('multiple');
    
    // Should be able to call methods without error
    await page.root.closeAll();
    await page.root.openAll();
    expect(page.root).toBeTruthy();
  });

  it('should handle closeAll with actNumber parameter', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    // Should be able to call closeAll with actNumber
    await page.root.closeAll(0);
    await page.root.closeAll(1);
    expect(page.root).toBeTruthy();
  });

  it('should handle openAll with actNumber parameter', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    // Should be able to call openAll with actNumber
    await page.root.openAll(0);
    await page.root.openAll(1);
    expect(page.root).toBeTruthy();
  });

  it('should handle empty content', async () => {
    const page = await createNavTreeGroupPage({});
    
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
    
    // Methods should still work even with no children
    await page.root.closeAll();
    await page.root.openAll();
    expect(page.root).toBeTruthy();
  });

  it('should apply Host element correctly', async () => {
    const page = await createNavTreeGroupPage();
    
    // Component should be wrapped in Host
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    
    // Should have a slot for content projection
    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should handle componentWillRender lifecycle', async () => {
    const content = `
      <bds-nav-tree text="Item 1"></bds-nav-tree>
      <bds-nav-tree text="Item 2"></bds-nav-tree>
    `;
    const page = await createNavTreeGroupPage({}, content);
    
    // Component should render successfully with children
    expect(page.root).toBeTruthy();
    const navTrees = page.root.querySelectorAll('bds-nav-tree');
    expect(navTrees.length).toBe(2);
  });

  it('should maintain component structure integrity', async () => {
    const page = await createNavTreeGroupPage({ collapse: 'multiple' });
    
    // Basic structure checks
    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-NAV-TREE-GROUP');
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
    
    // Props should be set correctly
    expect(page.root.collapse).toBe('multiple');
    
    // Methods should be available
    expect(typeof page.root.closeAll).toBe('function');
    expect(typeof page.root.openAll).toBe('function');
  });
});
