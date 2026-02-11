import { newE2EPage } from '@stencil/core/testing';

describe('bds-tab-group e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-tab-group align="center">
          <bds-tab-item tab="tab1" tab-title="Tab 1">Content 1</bds-tab-item>
          <bds-tab-item tab="tab2" tab-title="Tab 2">Content 2</bds-tab-item>
        </bds-tab-group>
      `,
    });
  });

  describe('Properties', () => {
    it('should render tab group component', async () => {
      const tabGroup = await page.find('bds-tab-group');
      expect(tabGroup).toBeTruthy();
    });

    it('should accept align property', async () => {
      const tabGroup = await page.find('bds-tab-group');
      const align = await tabGroup.getProperty('align');
      expect(align).toBe('center');
    });

    it('should accept contentScrollable property', async () => {
      const tabGroup = await page.find('bds-tab-group');
      const contentScrollable = await tabGroup.getProperty('contentScrollable');
      expect(contentScrollable).toBe(true);
    });
  });

  describe('Structure', () => {
    it('should have shadow DOM', async () => {
      const tabGroup = await page.find('bds-tab-group');
      expect(tabGroup.shadowRoot).toBeTruthy();
    });

    it('should render tab items', async () => {
      const tabItems = await page.findAll('bds-tab-item');
      expect(tabItems.length).toBe(2);
    });

    it('should contain tabs with correct attributes', async () => {
      const tab1 = await page.find('bds-tab-item[tab="tab1"]');
      const tab2 = await page.find('bds-tab-item[tab="tab2"]');
      
      expect(tab1).toBeTruthy();
      expect(tab2).toBeTruthy();
    });
  });

  describe('Property Changes', () => {
    it('should update align', async () => {
      const tabGroup = await page.find('bds-tab-group');
      await tabGroup.setProperty('align', 'left');
      await page.waitForChanges();
      
      const align = await tabGroup.getProperty('align');
      expect(align).toBe('left');
    });

    it('should update contentScrollable', async () => {
      const tabGroup = await page.find('bds-tab-group');
      await tabGroup.setProperty('contentScrollable', false);
      await page.waitForChanges();
      
      const contentScrollable = await tabGroup.getProperty('contentScrollable');
      expect(contentScrollable).toBe(false);
    });
  });

  describe('Default Properties', () => {
    it('should handle default properties', async () => {
      const page = await newE2EPage({
        html: `
          <bds-tab-group>
            <bds-tab-item tab="default" tab-title="Default">Content</bds-tab-item>
          </bds-tab-group>
        `,
      });
      
      const tabGroup = await page.find('bds-tab-group');
      const align = await tabGroup.getProperty('align');
      const contentScrollable = await tabGroup.getProperty('contentScrollable');
      
      expect(align).toBe('center');
      expect(contentScrollable).toBe(true);
    });
  });

  describe('Overflow Behavior', () => {
    it('should apply overflow auto when contentScrollable is true', async () => {
      const page = await newE2EPage({
        html: `
          <bds-tab-group content-scrollable="true">
            <bds-tab-item tab="tab1" tab-title="Tab 1">Content 1</bds-tab-item>
          </bds-tab-group>
        `,
      });
      
      const tabGroup = await page.find('bds-tab-group');
      const contentScrollable = await tabGroup.getProperty('contentScrollable');
      expect(contentScrollable).toBe(true);
      
      // Verify the content container gets the scrolled class
      const contentElement = await page.find('bds-tab-group >>> .tab_group__content.tab_group__scrolled');
      expect(contentElement).toBeTruthy();
    });

    it('should not apply scrolled class when contentScrollable is false', async () => {
      const page = await newE2EPage({
        html: `
          <bds-tab-group content-scrollable="false">
            <bds-tab-item tab="tab1" tab-title="Tab 1">Content 1</bds-tab-item>
          </bds-tab-group>
        `,
      });
      
      const tabGroup = await page.find('bds-tab-group');
      const contentScrollable = await tabGroup.getProperty('contentScrollable');
      expect(contentScrollable).toBe(false);
      
      // Verify the content container does NOT get the scrolled class
      const contentElement = await page.find('bds-tab-group >>> .tab_group__content');
      const contentWithScrolled = await page.find('bds-tab-group >>> .tab_group__content.tab_group__scrolled');
      
      expect(contentElement).toBeTruthy();
      expect(contentWithScrolled).toBeNull();
    });
  });
});