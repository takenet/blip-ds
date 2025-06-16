import { newE2EPage } from '@stencil/core/testing';

describe('bds-sidebar e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-sidebar 
          is-open="true"
          sidebar-position="left"
          type="over"
        >
          <div>Sidebar Content</div>
        </bds-sidebar>
      `,
    });
  });

  describe('Properties', () => {
    it('should render sidebar component', async () => {
      const sidebar = await page.find('bds-sidebar');
      expect(sidebar).toBeTruthy();
    });

    it('should accept isOpen property', async () => {
      const sidebar = await page.find('bds-sidebar');
      const isOpen = await sidebar.getProperty('isOpen');
      expect(isOpen).toBe(true);
    });

    it('should accept sidebarPosition property', async () => {
      const sidebar = await page.find('bds-sidebar');
      const sidebarPosition = await sidebar.getProperty('sidebarPosition');
      expect(sidebarPosition).toBe('left');
    });

    it('should accept type property', async () => {
      const sidebar = await page.find('bds-sidebar');
      const type = await sidebar.getProperty('type');
      expect(type).toBe('over');
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const sidebar = await page.find('bds-sidebar');
      expect(sidebar.shadowRoot).toBeTruthy();
    });

    it('should display slotted content', async () => {
      const content = await page.find('bds-sidebar div');
      expect(content).toBeTruthy();
      expect(await content.textContent).toBe('Sidebar Content');
    });
  });

  describe('Property Changes', () => {
    it('should update isOpen state', async () => {
      const sidebar = await page.find('bds-sidebar');
      await sidebar.setProperty('isOpen', false);
      await page.waitForChanges();
      
      const isOpen = await sidebar.getProperty('isOpen');
      expect(isOpen).toBe(false);
    });

    it('should update sidebarPosition', async () => {
      const sidebar = await page.find('bds-sidebar');
      await sidebar.setProperty('sidebarPosition', 'right');
      await page.waitForChanges();
      
      const sidebarPosition = await sidebar.getProperty('sidebarPosition');
      expect(sidebarPosition).toBe('right');
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `<bds-sidebar></bds-sidebar>`,
      });
      
      const sidebar = await page.find('bds-sidebar');
      const sidebarPosition = await sidebar.getProperty('sidebarPosition');
      expect(sidebarPosition).toBe('left');
    });
  });
});