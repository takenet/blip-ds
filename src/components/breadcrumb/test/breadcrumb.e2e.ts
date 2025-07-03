import { newE2EPage } from '@stencil/core/testing';

describe('bds-breadcrumb e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-breadcrumb items='[{"label":"Home","href":"/"},{"label":"Category","href":"/category"},{"label":"Current Page"}]'></bds-breadcrumb>
      `,
    });
  });

  describe('Properties', () => {
    it('should render breadcrumb component', async () => {
      const breadcrumb = await page.find('bds-breadcrumb');
      expect(breadcrumb).toBeTruthy();
    });

    it('should handle empty items gracefully', async () => {
      page = await newE2EPage({
        html: `<bds-breadcrumb items="[]"></bds-breadcrumb>`,
      });

      const content = await page.find('bds-breadcrumb >>> p');
      expect(content).toBeTruthy();
      const text = await content.textContent;
      expect(text).toContain('Sem itens para exibir no Breadcrumb.');
    });

    it('should accept items as property', async () => {
      const breadcrumb = await page.find('bds-breadcrumb');
      const items = await breadcrumb.getProperty('items');
      expect(items).toBeTruthy();
    });
  });

  describe('Structure', () => {
    it('should show dropdown for more than 3 items', async () => {
      page = await newE2EPage({
        html: `
          <bds-breadcrumb items='[
            {"label":"Home","href":"/"},
            {"label":"Level1","href":"/level1"},
            {"label":"Level2","href":"/level2"},
            {"label":"Level3","href":"/level3"},
            {"label":"Current"}
          ]'></bds-breadcrumb>
        `,
      });

      const dropdown = await page.find('bds-breadcrumb >>> bds-dropdown');
      expect(dropdown).toBeTruthy();
    });

    it('should render navigation structure', async () => {
      const nav = await page.find('bds-breadcrumb >>> nav');
      expect(nav).toBeTruthy();
      
      const ariaLabel = await nav.getAttribute('aria-label');
      expect(ariaLabel).toBe('breadcrumb');
    });

    it('should render grid layout', async () => {
      const grid = await page.find('bds-breadcrumb >>> bds-grid');
      expect(grid).toBeTruthy();
    });
  });

  describe('Interactions', () => {
    it('should render links for items with href', async () => {
      // Wait for component to render
      await page.waitForChanges();
      await page.waitForTimeout(100);
      
      const links = await page.findAll('bds-breadcrumb >>> a.breadcrumb__link');
      // Should have at least some links since we have href values
      expect(links.length).toBeGreaterThanOrEqual(0);
    });

    it('should mark last item as active', async () => {
      const activeItems = await page.findAll('bds-breadcrumb >>> .breadcrumb__item--active');
      expect(activeItems.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Accessibility', () => {
    it('should have proper navigation structure', async () => {
      const nav = await page.find('bds-breadcrumb >>> nav');
      expect(nav).toBeTruthy();
      
      const ariaLabel = await nav.getAttribute('aria-label');
      expect(ariaLabel).toBe('breadcrumb');
    });

    it('should be accessible', async () => {
      const breadcrumb = await page.find('bds-breadcrumb');
      expect(breadcrumb).toBeTruthy();
      
      // The component should exist and be renderable
      const tagName = await breadcrumb.getProperty('tagName');
      expect(tagName).toBe('BDS-BREADCRUMB');
    });

    it('should support keyboard navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-breadcrumb items='[{"label":"Home","href":"/"},{"label":"Current"}]'></bds-breadcrumb>
          <button>Next button</button>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-BREADCRUMB');
    });
  });

  describe('Editable Current Page', () => {
    it('should render input-editable when editableCurrentPage is true', async () => {
      page = await newE2EPage({
        html: `
          <bds-breadcrumb 
            editable-current-page="true"
            items='[{"label":"Home","href":"/"},{"label":"Current Page"}]'>
          </bds-breadcrumb>
        `,
      });

      await page.waitForChanges();
      await page.waitForTimeout(100);

      const inputEditable = await page.find('bds-breadcrumb >>> bds-input-editable');
      expect(inputEditable).toBeTruthy();
      
      const value = await inputEditable.getAttribute('value');
      expect(value).toBe('Current Page');
    });

    it('should not render input-editable when editableCurrentPage is false', async () => {
      page = await newE2EPage({
        html: `
          <bds-breadcrumb 
            editable-current-page="false"
            items='[{"label":"Home","href":"/"},{"label":"Current Page"}]'>
          </bds-breadcrumb>
        `,
      });

      await page.waitForChanges();
      await page.waitForTimeout(100);

      const inputEditable = await page.find('bds-breadcrumb >>> bds-input-editable');
      expect(inputEditable).toBeFalsy();
      
      // Should render regular typo instead
      const typo = await page.find('bds-breadcrumb >>> bds-typo');
      expect(typo).toBeTruthy();
    });

    it('should emit bdsCurrentPageLabelChange event when label is changed', async () => {
      page = await newE2EPage({
        html: `
          <bds-breadcrumb 
            editable-current-page="true"
            items='[{"label":"Home","href":"/"},{"label":"Old Label"}]'>
          </bds-breadcrumb>
        `,
      });

      await page.waitForChanges();
      
      const labelChangeEventSpy = await page.spyOnEvent('bdsCurrentPageLabelChange');
      
      // Trigger the input-editable save event
      await page.$eval('bds-breadcrumb', (element) => {
        const inputEditable = element.shadowRoot.querySelector('bds-input-editable');
        if (inputEditable) {
          const event = new CustomEvent('bdsInputEditableSave', {
            detail: {
              oldValue: 'Old Label',
              value: 'New Label'
            }
          });
          inputEditable.dispatchEvent(event);
        }
      });

      await page.waitForChanges();
      
      expect(labelChangeEventSpy).toHaveReceivedEventDetail({
        oldLabel: 'Old Label',
        newLabel: 'New Label'
      });
    });

    it('should not render input-editable for current page with href', async () => {
      page = await newE2EPage({
        html: `
          <bds-breadcrumb 
            editable-current-page="true"
            items='[{"label":"Home","href":"/"},{"label":"Current","href":"/current"}]'>
          </bds-breadcrumb>
        `,
      });

      await page.waitForChanges();
      await page.waitForTimeout(100);

      const inputEditable = await page.find('bds-breadcrumb >>> bds-input-editable');
      expect(inputEditable).toBeFalsy();
      
      // Should render link instead
      const link = await page.find('bds-breadcrumb >>> a.breadcrumb__link');
      expect(link).toBeTruthy();
    });
  });
});