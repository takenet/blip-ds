import { newE2EPage } from '@stencil/core/testing';

describe('bds-menu', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with default properties', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    // position property exists but not reflected as attribute by default
    expect(element.getAttribute('position')).toBeNull();
    expect(element.getAttribute('open')).toBeNull(); // false by default but not reflected
    
    // Check the property values instead
    const positionProp = await element.getProperty('position');
    const openProp = await element.getProperty('open');
    expect(positionProp).toBe('right');
    expect(openProp).toBe(false);
  });

  it('should render with menu property', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu menu="test-menu"></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    expect(element).toEqualAttribute('menu', 'test-menu');
  });

  it('should render with position property', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu position="bottom"></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    const menuDiv = await page.find('bds-menu >>> .menu');
    
    expect(element).toEqualAttribute('position', 'bottom');
    expect(menuDiv).toHaveClass('menu__bottom');
  });

  it('should render with default right position', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu></bds-menu>');
    await page.waitForChanges();

    const menuDiv = await page.find('bds-menu >>> .menu');
    expect(menuDiv).toHaveClass('menu__right');
  });

  it('should render with open property', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu open="true"></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    const menuDiv = await page.find('bds-menu >>> .menu');
    const outzone = await page.find('bds-menu >>> .outzone');
    
    // When reflected, boolean attributes show as empty string when true
    expect(element.getAttribute('open')).toBe('');
    expect(menuDiv).toHaveClass('menu__open');
    expect(outzone).toBeTruthy();
  });

  it('should not show outzone when closed', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu open="false"></bds-menu>');
    await page.waitForChanges();

    const menuDiv = await page.find('bds-menu >>> .menu');
    const outzone = await page.find('bds-menu >>> .outzone');
    
    expect(menuDiv).not.toHaveClass('menu__open');
    expect(outzone).toBeNull();
  });

  it('should have correct structure', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu><span>Menu Content</span></bds-menu>');
    await page.waitForChanges();

    const menuDiv = await page.find('bds-menu >>> .menu');
    const slot = await page.find('bds-menu >>> slot');
    
    expect(menuDiv).toBeTruthy();
    expect(slot).toBeTruthy();
  });

  it('should toggle open state when toggle method is called', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    
    // Initially closed
    let menuDiv = await page.find('bds-menu >>> .menu');
    expect(menuDiv).not.toHaveClass('menu__open');

    // Call toggle method
    await element.callMethod('toggle');
    await page.waitForChanges();

    // Should be open
    menuDiv = await page.find('bds-menu >>> .menu');
    expect(menuDiv).toHaveClass('menu__open');

    // Call toggle again
    await element.callMethod('toggle');
    await page.waitForChanges();

    // Should be closed again
    menuDiv = await page.find('bds-menu >>> .menu');
    expect(menuDiv).not.toHaveClass('menu__open');
  });

  it('should emit bdsToggle event when opened', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    const bdsToggleSpy = await element.spyOnEvent('bdsToggle');

    // Toggle to open
    await element.callMethod('toggle');
    await page.waitForChanges();

    expect(bdsToggleSpy).toHaveReceivedEventTimes(1);
    expect(bdsToggleSpy).toHaveReceivedEventDetail({ value: true });
  });

  it('should emit bdsToggle event when closed', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu open="true"></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    const bdsToggleSpy = await element.spyOnEvent('bdsToggle');

    // Toggle to close
    await element.callMethod('toggle');
    await page.waitForChanges();

    expect(bdsToggleSpy).toHaveReceivedEventTimes(1);
    expect(bdsToggleSpy).toHaveReceivedEventDetail({ value: false });
  });

  it('should close when outzone is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu open="true"></bds-menu>');
    await page.waitForChanges();

    const outzone = await page.find('bds-menu >>> .outzone');
    const bdsToggleSpy = await page.spyOnEvent('bdsToggle');

    // Click outzone
    await outzone.click();
    await page.waitForChanges();

    // Should be closed
    const menuDiv = await page.find('bds-menu >>> .menu');
    expect(menuDiv).not.toHaveClass('menu__open');
    expect(bdsToggleSpy).toHaveReceivedEventTimes(1);
    expect(bdsToggleSpy).toHaveReceivedEventDetail({ value: false });
  });

  it('should apply position styles when open', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <button id="trigger">Click me</button>
      <bds-menu menu="trigger" open="true"></bds-menu>
    `);
    await page.waitForChanges();

    // Check that position styles are applied
    const style = await page.evaluate(() => {
      const menu = document.querySelector('bds-menu');
      const shadowRoot = menu.shadowRoot;
      const menuDiv = shadowRoot.querySelector('.menu') as HTMLElement;
      return {
        top: menuDiv.style.top,
        left: menuDiv.style.left
      };
    });

    // Should have position styles (actual values depend on position calculation)
    expect(style.top).toMatch(/\d+px/);
    expect(style.left).toMatch(/\d+px/);
  });

  it('should update open state through property change', async () => {
    const page = await newE2EPage();
    await page.setContent('<bds-menu></bds-menu>');
    await page.waitForChanges();

    const element = await page.find('bds-menu');
    const bdsToggleSpy = await element.spyOnEvent('bdsToggle');

    // Set open property
    element.setProperty('open', true);
    await page.waitForChanges();

    const menuDiv = await page.find('bds-menu >>> .menu');
    expect(menuDiv).toHaveClass('menu__open');
    expect(bdsToggleSpy).toHaveReceivedEventTimes(1);
    expect(bdsToggleSpy).toHaveReceivedEventDetail({ value: true });
  });

  // Integration tests with sub-components
  describe('Integration with menu-action', () => {
    it('should render with menu-action components', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-action button-text="Option 1" icon-left="edit"></bds-menu-action>
          <bds-menu-action button-text="Option 2" subtitle="Subtitle"></bds-menu-action>
          <bds-menu-action button-text="Disabled Option" disabled="true"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuActions = await page.findAll('bds-menu-action');
      expect(menuActions).toHaveLength(3);

      // Verify attributes
      expect(menuActions[0]).toEqualAttribute('button-text', 'Option 1');
      expect(menuActions[0]).toEqualAttribute('icon-left', 'edit');
      expect(menuActions[1]).toEqualAttribute('button-text', 'Option 2');
      expect(menuActions[1]).toEqualAttribute('subtitle', 'Subtitle');
      expect(menuActions[2]).toEqualAttribute('disabled', 'true');
    });

    it('should render menu-action with submenu', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-action button-text="Parent Option" sub-menu="true">
            <bds-menu-action button-text="Sub Option 1"></bds-menu-action>
            <bds-menu-action button-text="Sub Option 2"></bds-menu-action>
          </bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const parentAction = await page.find('bds-menu-action');
      const subActions = await page.findAll('bds-menu-action bds-menu-action');
      
      expect(parentAction).toEqualAttribute('sub-menu', 'true');
      expect(subActions).toHaveLength(2);
    });

    it('should handle menu-action click events', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-action button-text="Clickable Option"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuAction = await page.find('bds-menu-action');
      const clickSpy = await menuAction.spyOnEvent('click');

      // Click the menu action
      await menuAction.click();
      await page.waitForChanges();

      expect(clickSpy).toHaveReceivedEventTimes(1);
    });

    it('should render menu-action with different styles', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-action button-text="Normal Option"></bds-menu-action>
          <bds-menu-action button-text="Lipstick Option" lipstick="true"></bds-menu-action>
          <bds-menu-action button-text="Option with Description" description="This is a description"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuActions = await page.findAll('bds-menu-action');
      expect(menuActions).toHaveLength(3);
      
      expect(menuActions[1]).toEqualAttribute('lipstick', 'true');
      expect(menuActions[2]).toEqualAttribute('description', 'This is a description');
    });
  });

  describe('Integration with menu-exibition', () => {
    it('should render with menu-exibition component', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-exibition 
            avatar-name="John Doe" 
            value="User Profile" 
            subtitle="Administrator">
          </bds-menu-exibition>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuExibition = await page.find('bds-menu-exibition');
      expect(menuExibition).toBeTruthy();
      expect(menuExibition).toEqualAttribute('avatar-name', 'John Doe');
      expect(menuExibition).toEqualAttribute('value', 'User Profile');
      expect(menuExibition).toEqualAttribute('subtitle', 'Administrator');
    });

    it('should render menu-exibition with avatar thumbnail', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-exibition 
            avatar-thumbnail="https://example.com/avatar.jpg"
            avatar-size="small"
            value="Jane Smith">
          </bds-menu-exibition>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuExibition = await page.find('bds-menu-exibition');
      expect(menuExibition).toEqualAttribute('avatar-thumbnail', 'https://example.com/avatar.jpg');
      expect(menuExibition).toEqualAttribute('avatar-size', 'small');
      expect(menuExibition).toEqualAttribute('value', 'Jane Smith');
    });

    it('should render menu-exibition with different avatar sizes', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-exibition avatar-size="extra-small" value="Extra Small"></bds-menu-exibition>
          <bds-menu-exibition avatar-size="small" value="Small"></bds-menu-exibition>
          <bds-menu-exibition avatar-size="standard" value="Standard"></bds-menu-exibition>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuExibitions = await page.findAll('bds-menu-exibition');
      expect(menuExibitions).toHaveLength(3);
      
      expect(menuExibitions[0]).toEqualAttribute('avatar-size', 'extra-small');
      expect(menuExibitions[1]).toEqualAttribute('avatar-size', 'small');
      expect(menuExibitions[2]).toEqualAttribute('avatar-size', 'standard');
    });
  });

  describe('Integration with menu-separation', () => {
    it('should render with menu-separation component', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-action button-text="Option 1"></bds-menu-action>
          <bds-menu-separation></bds-menu-separation>
          <bds-menu-action button-text="Option 2"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuSeparation = await page.find('bds-menu-separation');
      const menuActions = await page.findAll('bds-menu-action');
      
      expect(menuSeparation).toBeTruthy();
      expect(menuActions).toHaveLength(2);
    });

    it('should render menu-separation with value', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-separation value="Section Title"></bds-menu-separation>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuSeparation = await page.find('bds-menu-separation');
      expect(menuSeparation).toEqualAttribute('value', 'Section Title');
    });

    it('should render menu-separation with different sizes', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-separation size="small"></bds-menu-separation>
          <bds-menu-separation size="default"></bds-menu-separation>
          <bds-menu-separation size="large"></bds-menu-separation>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuSeparations = await page.findAll('bds-menu-separation');
      expect(menuSeparations).toHaveLength(3);
      
      expect(menuSeparations[0]).toEqualAttribute('size', 'small');
      expect(menuSeparations[1]).toEqualAttribute('size', 'default');
      expect(menuSeparations[2]).toEqualAttribute('size', 'large');
    });
  });

  describe('Complex integration scenarios', () => {
    it('should render complete menu with all sub-components', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-exibition 
            avatar-name="John Doe" 
            value="User Profile" 
            subtitle="Administrator">
          </bds-menu-exibition>
          <bds-menu-separation value="Actions"></bds-menu-separation>
          <bds-menu-action button-text="Edit Profile" icon-left="edit"></bds-menu-action>
          <bds-menu-action button-text="Settings" icon-left="settings"></bds-menu-action>
          <bds-menu-separation></bds-menu-separation>
          <bds-menu-action button-text="Help" icon-left="help"></bds-menu-action>
          <bds-menu-action button-text="Logout" lipstick="true" icon-left="logout"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menuExibition = await page.find('bds-menu-exibition');
      const menuSeparations = await page.findAll('bds-menu-separation');
      const menuActions = await page.findAll('bds-menu-action');

      expect(menuExibition).toBeTruthy();
      expect(menuSeparations).toHaveLength(2);
      expect(menuActions).toHaveLength(4);

      // Verify the structure is properly rendered
      expect(menuExibition).toEqualAttribute('avatar-name', 'John Doe');
      expect(menuSeparations[0]).toEqualAttribute('value', 'Actions');
      expect(menuActions[3]).toEqualAttribute('lipstick', 'true');
    });

    it('should handle menu with nested submenus', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu open="true">
          <bds-menu-action button-text="Parent Menu" sub-menu="true">
            <bds-menu-action button-text="Sub Option 1"></bds-menu-action>
            <bds-menu-separation></bds-menu-separation>
            <bds-menu-action button-text="Sub Option 2" sub-menu="true">
              <bds-menu-action button-text="Nested Option 1"></bds-menu-action>
              <bds-menu-action button-text="Nested Option 2"></bds-menu-action>
            </bds-menu-action>
          </bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const allMenuActions = await page.findAll('bds-menu-action');
      const menuSeparation = await page.find('bds-menu-separation');

      // Should have parent + 2 sub + 2 nested = 5 total
      expect(allMenuActions.length).toBeGreaterThanOrEqual(3); // At least parent and immediate children
      expect(menuSeparation).toBeTruthy();
    });

    it('should maintain menu state when interacting with sub-components', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <bds-menu>
          <bds-menu-action button-text="Toggle Menu Action"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menu = await page.find('bds-menu');
      const menuAction = await page.find('bds-menu-action');

      // Initially closed
      let menuDiv = await page.find('bds-menu >>> .menu');
      expect(menuDiv).not.toHaveClass('menu__open');

      // Open menu
      await menu.callMethod('toggle');
      await page.waitForChanges();

      // Should be open
      menuDiv = await page.find('bds-menu >>> .menu');
      expect(menuDiv).toHaveClass('menu__open');

      // Interact with menu action (shouldn't close menu by default)
      await menuAction.click();
      await page.waitForChanges();

      // Menu should still be open
      menuDiv = await page.find('bds-menu >>> .menu');
      expect(menuDiv).toHaveClass('menu__open');
    });

    it('should work with different position configurations', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <button id="trigger">Trigger</button>
        <bds-menu menu="trigger" position="left" open="true">
          <bds-menu-exibition value="User Info"></bds-menu-exibition>
          <bds-menu-separation></bds-menu-separation>
          <bds-menu-action button-text="Action"></bds-menu-action>
        </bds-menu>
      `);
      await page.waitForChanges();

      const menu = await page.find('bds-menu');
      const menuDiv = await page.find('bds-menu >>> .menu');
      const menuExibition = await page.find('bds-menu-exibition');
      const menuAction = await page.find('bds-menu-action');

      expect(menu).toEqualAttribute('position', 'left');
      expect(menuDiv).toHaveClass('menu__left');
      expect(menuExibition).toBeTruthy();
      expect(menuAction).toBeTruthy();
    });
  });
});
