import { newE2EPage } from '@stencil/core/testing';

describe('bds-nav-tree e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <button id="toggle">toggle</button>
        <bds-nav-tree colapse="single" icon="heart" text="Titulo" secondary-text="Breve Descricao">
          <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao"></bds-nav-tree-item>
          <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao">
            <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao"></bds-nav-tree-item>
            <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao"></bds-nav-tree-item>
            <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao">
              <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao"></bds-nav-tree-item>
              <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao"></bds-nav-tree-item>
            </bds-nav-tree-item>
          </bds-nav-tree-item>
          <bds-nav-tree-item text="Titulo" secondary-text="Breve Descricao"></bds-nav-tree-item>
        </bds-nav-tree>
        <input id="event-test" />
      `,
    });

    // Add nav-tree control functionality
    await page.evaluate(() => {
      const toggleButton = document.getElementById('toggle');
      const navTree = document.querySelector('bds-nav-tree');
      
      toggleButton.addEventListener('click', () => {
        navTree.toggle();
      });

      navTree.addEventListener('bdsToogleChange', (event: CustomEvent) => {
        const input = document.getElementById('event-test') as HTMLInputElement;
        input.value = event.detail?.value?.toString() || 'triggered';
      });
    });
  });

  describe('Properties', () => {
    it('should render nav-tree with correct colapse', async () => {
      const navTree = await page.find('bds-nav-tree');
      const colapse = await navTree.getAttribute('colapse');
      expect(colapse).toBe('single');
    });

    it('should render nav-tree with correct text', async () => {
      const navTree = await page.find('bds-nav-tree');
      const text = await navTree.getProperty('text');
      expect(text).toBe('Titulo');
    });

    it('should render nav-tree with correct icon', async () => {
      const navTree = await page.find('bds-nav-tree');
      const icon = await navTree.getProperty('icon');
      expect(icon).toBe('heart');
    });

    it('should render nav-tree with correct secondary-text', async () => {
      const navTree = await page.find('bds-nav-tree');
      const secondaryText = await navTree.getProperty('secondaryText');
      expect(secondaryText).toBe('Breve Descricao');
    });
  });

  describe('Events', () => {
    it('should emit bdsToogleChange event when nav tree main element is clicked', async () => {
      const navTree = await page.find('bds-nav-tree');
      const bdsToogleChangeEvent = await navTree.spyOnEvent('bdsToogleChange');

      const navMain = await page.find('bds-nav-tree >>> .nav_main');
      await navMain.click();
      await page.waitForChanges();

      expect(bdsToogleChangeEvent).toHaveReceivedEvent();
      
      // Check that the event detail is captured
      const eventInput = await page.find('#event-test');
      const inputValue = await eventInput.getProperty('value');
      expect(inputValue).toBe('true');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible via Tab navigation', async () => {
      await page.focus('#toggle');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-NAV-TREE');
    });

    it('should toggle nav tree when toggle method is called', async () => {
      const toggleButton = await page.find('#toggle');
      await toggleButton.click();
      await page.waitForChanges();

      const navMain = await page.find('bds-nav-tree >>> .nav_main');
      expect(navMain).toHaveClass('nav_main_active');
    });
  });
});

describe('bds-nav-tree-group e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-nav-tree-group id="nav-tree-group" collapse="single">
          <bds-nav-tree id="nav-tree-1" icon="heart" text="Tree 1" secondary-text="Description 1">
            <bds-nav-tree-item text="Item 1.1"></bds-nav-tree-item>
            <bds-nav-tree-item text="Item 1.2"></bds-nav-tree-item>
          </bds-nav-tree>
          <bds-nav-tree id="nav-tree-2" icon="star" text="Tree 2" secondary-text="Description 2">
            <bds-nav-tree-item text="Item 2.1"></bds-nav-tree-item>
            <bds-nav-tree-item text="Item 2.2"></bds-nav-tree-item>
          </bds-nav-tree>
          <bds-nav-tree id="nav-tree-3" icon="chat" text="Tree 3" secondary-text="Description 3">
            <bds-nav-tree-item text="Item 3.1"></bds-nav-tree-item>
            <bds-nav-tree-item text="Item 3.2"></bds-nav-tree-item>
          </bds-nav-tree>
        </bds-nav-tree-group>
        <input id="group-event-test" />
        <button id="open-all">Open All</button>
        <button id="close-all">Close All</button>
      `,
    });
  });

  describe('Properties', () => {
    it('should render nav-tree-group with correct collapse property', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const collapse = await navTreeGroup.getProperty('collapse');
      expect(collapse).toBe('single');
    });

    it('should render with multiple nav-tree children', async () => {
      const navTrees = await page.findAll('bds-nav-tree-group bds-nav-tree');
      expect(navTrees).toHaveLength(3);
    });

    it('should have correct structure and slotting', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      expect(navTreeGroup).toBeDefined();

      const slot = await page.find('bds-nav-tree-group >>> slot');
      expect(slot).toBeDefined();
    });
  });

  describe('Methods', () => {
    it('should call openAll method successfully', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const openAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupOpenAll');
      
      // Call openAll method
      await navTreeGroup.callMethod('openAll');
      await page.waitForChanges();

      // Check that the correct event was emitted
      expect(openAllEvent).toHaveReceivedEvent();
    });

    it('should call closeAll method successfully', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const closeAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupCloseAll');
      
      // Call closeAll method
      await navTreeGroup.callMethod('closeAll');
      await page.waitForChanges();

      // Check that the correct event was emitted
      expect(closeAllEvent).toHaveReceivedEvent();
    });

    it('should control child nav-trees with button interactions', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const openAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupOpenAll');
      const closeAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupCloseAll');

      // Test openAll method directly via button interaction
      await page.evaluate(() => {
        const openAllButton = document.getElementById('open-all');
        const navTreeGroup = document.getElementById('nav-tree-group');
        const eventInput = document.getElementById('group-event-test') as HTMLInputElement;
        
        openAllButton.addEventListener('click', async () => {
          await (navTreeGroup as any).openAll();
          eventInput.value = 'openAll';
        });
      });

      const openAllButton = await page.find('#open-all');
      await openAllButton.click();
      await page.waitForChanges();

      // Verify that openAll event was emitted
      expect(openAllEvent).toHaveReceivedEvent();
      
      // Verify that the input value was set correctly
      const eventInput = await page.find('#group-event-test');
      let inputValue = await eventInput.getProperty('value');
      expect(inputValue).toBe('openAll');

      // Test closeAll method directly via button interaction
      await page.evaluate(() => {
        const closeAllButton = document.getElementById('close-all');
        const navTreeGroup = document.getElementById('nav-tree-group');
        const eventInput = document.getElementById('group-event-test') as HTMLInputElement;
        
        closeAllButton.addEventListener('click', async () => {
          await (navTreeGroup as any).closeAll();
          eventInput.value = 'closeAll';
        });
      });

      const closeAllButton = await page.find('#close-all');
      await closeAllButton.click();
      await page.waitForChanges();

      // Verify that closeAll event was emitted
      expect(closeAllEvent).toHaveReceivedEvent();
      
      // Verify that the input value was set correctly
      inputValue = await eventInput.getProperty('value');
      expect(inputValue).toBe('closeAll');
    });
  });

  describe('Events', () => {
    it('should emit bdsNavTreeGroupOpenAll event when openAll is called', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const openAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupOpenAll');

      await navTreeGroup.callMethod('openAll');
      await page.waitForChanges();

      expect(openAllEvent).toHaveReceivedEvent();
    });

    it('should emit bdsNavTreeGroupCloseAll event when closeAll is called', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const closeAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupCloseAll');

      await navTreeGroup.callMethod('closeAll');
      await page.waitForChanges();

      expect(closeAllEvent).toHaveReceivedEvent();
    });
  });

  describe('Collapse Behavior', () => {
    it('should work correctly with single collapse mode', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const collapse = await navTreeGroup.getProperty('collapse');
      expect(collapse).toBe('single');

      // Test that single mode is applied correctly
      const navTrees = await page.findAll('bds-nav-tree-group bds-nav-tree');
      expect(navTrees).toHaveLength(3);
    });
  });

  describe('Integration', () => {
    it('should work with nav-tree children properly', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const navTrees = await page.findAll('bds-nav-tree-group bds-nav-tree');
      
      expect(navTreeGroup).toBeDefined();
      expect(navTrees).toHaveLength(3);

      // Verify each nav-tree has its properties set correctly
      const firstTree = navTrees[0];
      const text = await firstTree.getProperty('text');
      const icon = await firstTree.getProperty('icon');
      expect(text).toBe('Tree 1');
      expect(icon).toBe('heart');
    });

    it('should manage multiple nav-trees as a group', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const openAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupOpenAll');
      
      // Test that the group can control multiple trees
      await navTreeGroup.callMethod('openAll');
      await page.waitForChanges();

      // Should emit group event
      expect(openAllEvent).toHaveReceivedEvent();
    });

    it('should handle empty group gracefully', async () => {
      await page.setContent(`
        <bds-nav-tree-group id="empty-group" collapse="single">
        </bds-nav-tree-group>
      `);
      await page.waitForChanges();

      const emptyGroup = await page.find('bds-nav-tree-group');
      expect(emptyGroup).toBeDefined();

      // Should not throw error when calling methods on empty group
      await emptyGroup.callMethod('openAll');
      await emptyGroup.callMethod('closeAll');
      await page.waitForChanges();
    });
  });

  describe('Multiple Collapse Mode', () => {
    beforeEach(async () => {
      await page.setContent(`
        <bds-nav-tree-group id="nav-tree-group-multiple" collapse="multiple">
          <bds-nav-tree id="nav-tree-1" icon="heart" text="Tree 1">
            <bds-nav-tree-item text="Item 1.1"></bds-nav-tree-item>
          </bds-nav-tree>
          <bds-nav-tree id="nav-tree-2" icon="star" text="Tree 2">
            <bds-nav-tree-item text="Item 2.1"></bds-nav-tree-item>
          </bds-nav-tree>
        </bds-nav-tree-group>
      `);
    });

    it('should work correctly with multiple collapse mode', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const collapse = await navTreeGroup.getProperty('collapse');
      expect(collapse).toBe('multiple');

      // Test openAll with multiple mode
      const openAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupOpenAll');
      await navTreeGroup.callMethod('openAll');
      await page.waitForChanges();

      expect(openAllEvent).toHaveReceivedEvent();
    });

    it('should emit events correctly in multiple mode', async () => {
      const navTreeGroup = await page.find('bds-nav-tree-group');
      const openAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupOpenAll');
      const closeAllEvent = await navTreeGroup.spyOnEvent('bdsNavTreeGroupCloseAll');

      // Test openAll
      await navTreeGroup.callMethod('openAll');
      await page.waitForChanges();
      expect(openAllEvent).toHaveReceivedEvent();

      // Test closeAll
      await navTreeGroup.callMethod('closeAll');
      await page.waitForChanges();
      expect(closeAllEvent).toHaveReceivedEvent();
    });
  });
});