import { newE2EPage } from '@stencil/core/testing';

describe('bds-menu-list-item', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="user">Test Item</bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    expect(element).toHaveClass('hydrated');
  });

  it('should have role button', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="user">Test Item</bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    expect(element).toEqualAttribute('role', 'button');
  });

  it('should render with required icon attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="home">Home</bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    expect(element).toEqualAttribute('icon', 'home');
  });

  it('should have correct internal structure', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="settings">Settings</bds-menu-list-item>');
    await page.waitForChanges();

    const menuListItem = await page.find('bds-menu-list-item >>> .menu-list-item');
    const icon = await page.find('bds-menu-list-item >>> bds-icon');
    const text = await page.find('bds-menu-list-item >>> bds-typo');

    expect(menuListItem).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it('should render icon with correct name', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="user">Profile</bds-menu-list-item>');
    await page.waitForChanges();

    const icon = await page.find('bds-menu-list-item >>> bds-icon');
    const iconName = await icon.getProperty('name');
    expect(iconName).toBe('user');
  });

  it('should render text content in typo component', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="mail">Messages</bds-menu-list-item>');
    await page.waitForChanges();

    const typo = await page.find('bds-menu-list-item >>> bds-typo');
    const variant = await typo.getProperty('variant');
    expect(typo).toHaveClass('menu-list-item__text');
    expect(variant).toBe('fs-10');
  });

  it('should display slotted text content', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="bell">Notifications</bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    expect(element.textContent).toBe('Notifications');
  });

  it('should use default color when color prop is not provided', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="heart">Favorites</bds-menu-list-item>');
    await page.waitForChanges();

    const icon = await page.find('bds-menu-list-item >>> bds-icon');
    const iconColor = await icon.getProperty('color');
    expect(iconColor).toBe('currentColor');
  });

  it('should use custom color when color prop is provided', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="star" color="#ff0000">Important</bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    const icon = await page.find('bds-menu-list-item >>> bds-icon');
    const iconColor = await icon.getProperty('color');
    
    expect(element).toEqualAttribute('color', '#ff0000');
    expect(iconColor).toBe('#ff0000');
  });

  it('should render with different icons', async () => {
    const icons = ['home', 'user', 'settings', 'bell', 'mail', 'search'];
    
    for (const iconName of icons) {
      const page = await newE2EPage();
      await page.setContent(`<bds-menu-list-item icon="${iconName}">Test</bds-menu-list-item>`);
      await page.waitForChanges();

      const element = await page.find('bds-menu-list-item');
      const icon = await page.find('bds-menu-list-item >>> bds-icon');
      const iconNameProp = await icon.getProperty('name');
      
      expect(element).toEqualAttribute('icon', iconName);
      expect(iconNameProp).toBe(iconName);
    }
  });

  it('should handle empty text content', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="circle"></bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    const typo = await page.find('bds-menu-list-item >>> bds-typo');
    
    expect(element).toBeTruthy();
    expect(typo).toBeTruthy();
    expect(element.textContent.trim()).toBe('');
  });

  it('should handle HTML content in slot', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list-item icon="info">
        <strong>Important:</strong> <em>This is a test</em>
      </bds-menu-list-item>
    `);
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    expect(element.textContent).toContain('Important:');
    expect(element.textContent).toContain('This is a test');
  });

  it('should work with various color formats', async () => {
    const colorTests = [
      { color: 'red', expected: 'red' },
      { color: '#00ff00', expected: '#00ff00' },
      { color: 'rgb(0, 0, 255)', expected: 'rgb(0, 0, 255)' },
      { color: 'rgba(255, 0, 0, 0.5)', expected: 'rgba(255, 0, 0, 0.5)' }
    ];

    for (const test of colorTests) {
      const page = await newE2EPage();
      await page.setContent(`<bds-menu-list-item icon="palette" color="${test.color}">Color Test</bds-menu-list-item>`);
      await page.waitForChanges();

      const icon = await page.find('bds-menu-list-item >>> bds-icon');
      const iconColor = await icon.getProperty('color');
      expect(iconColor).toBe(test.expected);
    }
  });

  it('should be clickable', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu-list-item icon="click">Click Me</bds-menu-list-item>');
    await page.waitForChanges();

    const element = await page.find('bds-menu-list-item');
    
    // The element should be focusable and clickable since it has role="button"
    expect(element).toEqualAttribute('role', 'button');
    
    // Test that click doesn't cause errors
    await element.click();
    await page.waitForChanges();
    
    expect(element).toBeTruthy();
  });

  it('should work in combination with menu-list', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <bds-menu-list>
        <bds-menu-list-item icon="home" color="blue">Home</bds-menu-list-item>
        <bds-menu-list-item icon="user" color="green">Profile</bds-menu-list-item>
        <bds-menu-list-item icon="settings" color="orange">Settings</bds-menu-list-item>
      </bds-menu-list>
    `);
    await page.waitForChanges();

    const menuList = await page.find('bds-menu-list');
    const items = await page.findAll('bds-menu-list-item');

    expect(menuList).toBeTruthy();
    expect(items).toHaveLength(3);

    // Test each item
    expect(items[0]).toEqualAttribute('icon', 'home');
    expect(items[0]).toEqualAttribute('color', 'blue');
    expect(items[0].textContent).toBe('Home');

    expect(items[1]).toEqualAttribute('icon', 'user');
    expect(items[1]).toEqualAttribute('color', 'green');
    expect(items[1].textContent).toBe('Profile');

    expect(items[2]).toEqualAttribute('icon', 'settings');
    expect(items[2]).toEqualAttribute('color', 'orange');
    expect(items[2].textContent).toBe('Settings');
  });
});
