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