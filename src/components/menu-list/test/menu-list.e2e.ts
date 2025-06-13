import { newE2EPage } from '@stencil/core/testing';

describe('bds-menu-list', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list></bds-menu-list>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list');
    expect(element).toHaveClass('hydrated');
  });

  it('should have correct structure', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list></bds-menu-list>');
    await page.waitForChanges();

    const menuList = await page.find('bds-menu-list >>> .menu-list');
    const leftDiv = await page.find('bds-menu-list >>> .menu-list__left');
    const rightDiv = await page.find('bds-menu-list >>> .menu-list__right');
    const slot = await page.find('bds-menu-list >>> slot');

    expect(menuList).toBeTruthy();
    expect(leftDiv).toBeTruthy();
    expect(rightDiv).toBeTruthy();
    expect(slot).toBeTruthy();
  });

  it('should render with slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list>
        <div>Item 1</div>
        <div>Item 2</div>
      </bds-menu-list>
    `);
    await page.waitForChanges();

    const element = await page.find('bds-menu-list');
    expect(element.textContent).toContain('Item 1');
    expect(element.textContent).toContain('Item 2');
  });

  it('should work with menu-list-item components', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list>
        <bds-menu-list-item icon="user">Profile</bds-menu-list-item>
        <bds-menu-list-item icon="settings">Settings</bds-menu-list-item>
        <bds-menu-list-item icon="logout">Logout</bds-menu-list-item>
      </bds-menu-list>
    `);
    await page.waitForChanges();

    const menuList = await page.find('bds-menu-list');
    const items = await page.findAll('bds-menu-list-item');

    expect(menuList).toBeTruthy();
    expect(items).toHaveLength(3);
    
    // Check that each item has the correct icon attribute
    expect(items[0]).toEqualAttribute('icon', 'user');
    expect(items[1]).toEqualAttribute('icon', 'settings');
    expect(items[2]).toEqualAttribute('icon', 'logout');

    // Check content
    expect(items[0].textContent).toBe('Profile');
    expect(items[1].textContent).toBe('Settings');
    expect(items[2].textContent).toBe('Logout');
  });

  it('should handle empty content', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list></bds-menu-list>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list');
    const menuList = await page.find('bds-menu-list >>> .menu-list');

    expect(element).toBeTruthy();
    expect(menuList).toBeTruthy();
    expect(element.textContent.trim()).toBe('');
  });

  it('should work with mixed content', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list>
        <bds-menu-list-item icon="home">Home</bds-menu-list-item>
        <div>Custom content</div>
        <bds-menu-list-item icon="info">About</bds-menu-list-item>
        <span>Another element</span>
      </bds-menu-list>
    `);
    await page.waitForChanges();

    const element = await page.find('bds-menu-list');
    const menuListItems = await page.findAll('bds-menu-list-item');

    expect(element).toBeTruthy();
    expect(menuListItems).toHaveLength(2);
    expect(element.textContent).toContain('Home');
    expect(element.textContent).toContain('Custom content');
    expect(element.textContent).toContain('About');
    expect(element.textContent).toContain('Another element');
  });

  it('should maintain proper structure with many items', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list>
        <bds-menu-list-item icon="user">User 1</bds-menu-list-item>
        <bds-menu-list-item icon="user">User 2</bds-menu-list-item>
        <bds-menu-list-item icon="user">User 3</bds-menu-list-item>
        <bds-menu-list-item icon="user">User 4</bds-menu-list-item>
        <bds-menu-list-item icon="user">User 5</bds-menu-list-item>
      </bds-menu-list>
    `);
    await page.waitForChanges();

    const menuList = await page.find('bds-menu-list >>> .menu-list');
    const items = await page.findAll('bds-menu-list-item');

    expect(menuList).toBeTruthy();
    expect(items).toHaveLength(5);

    // Verify all items are properly rendered
    for (let i = 0; i < items.length; i++) {
      expect(items[i]).toBeTruthy();
      expect(items[i]).toEqualAttribute('icon', 'user');
      expect(items[i].textContent).toBe(`User ${i + 1}`);
    }
  });

  it('should support nested structure', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list>
        <div class="section">
          <bds-menu-list-item icon="folder">Documents</bds-menu-list-item>
          <bds-menu-list-item icon="image">Images</bds-menu-list-item>
        </div>
        <div class="section">
          <bds-menu-list-item icon="video">Videos</bds-menu-list-item>
        </div>
      </bds-menu-list>
    `);
    await page.waitForChanges();

    const element = await page.find('bds-menu-list');
    const sections = await page.findAll('bds-menu-list .section');
    const items = await page.findAll('bds-menu-list-item');

    expect(element).toBeTruthy();
    expect(sections).toHaveLength(2);
    expect(items).toHaveLength(3);
  });
});
