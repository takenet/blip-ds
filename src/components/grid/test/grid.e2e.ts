import { newE2EPage } from '@stencil/core/testing';

describe('bds-grid e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <bds-grid direction="row" justify-content="center" align-items="center">
          <div>Grid Item 1</div>
          <div>Grid Item 2</div>
        </bds-grid>
      `,
    });
  });

  describe('Properties', () => {
    it('should render grid component', async () => {
      const grid = await page.find('bds-grid');
      expect(grid).toBeTruthy();
    });

    it('should accept direction property', async () => {
      const grid = await page.find('bds-grid');
      const direction = await grid.getProperty('direction');
      expect(direction).toBe('row');
    });

    it('should accept justifyContent property', async () => {
      const grid = await page.find('bds-grid');
      const justifyContent = await grid.getProperty('justifyContent');
      expect(justifyContent).toBe('center');
    });

    it('should accept alignItems property', async () => {
      const grid = await page.find('bds-grid');
      const alignItems = await grid.getProperty('alignItems');
      expect(alignItems).toBe('center');
    });

    it('should accept height property', async () => {
      page = await newE2EPage({
        html: `<bds-grid height="200px">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const height = await grid.getProperty('height');
      expect(height).toBe('200px');
    });

    it('should accept container property', async () => {
      page = await newE2EPage({
        html: `<bds-grid container="true">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const container = await grid.getProperty('container');
      expect(container).toBe(true);
    });

    it('should accept containerFluid property', async () => {
      page = await newE2EPage({
        html: `<bds-grid container-fluid="true">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const containerFluid = await grid.getProperty('containerFluid');
      expect(containerFluid).toBe(true);
    });

    it('should accept flexWrap property', async () => {
      page = await newE2EPage({
        html: `<bds-grid flex-wrap="wrap">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const flexWrap = await grid.getProperty('flexWrap');
      expect(flexWrap).toBe('wrap');
    });
  });

  describe('Breakpoint Properties', () => {
    it('should accept xxs breakpoint property', async () => {
      page = await newE2EPage({
        html: `<bds-grid xxs="12">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const xxs = await grid.getProperty('xxs');
      expect(xxs).toBe('12');
    });

    it('should accept xs breakpoint property', async () => {
      page = await newE2EPage({
        html: `<bds-grid xs="6">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const xs = await grid.getProperty('xs');
      expect(xs).toBe('6');
    });

    it('should accept sm breakpoint property', async () => {
      page = await newE2EPage({
        html: `<bds-grid sm="4">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const sm = await grid.getProperty('sm');
      expect(sm).toBe('4');
    });

    it('should accept md breakpoint property', async () => {
      page = await newE2EPage({
        html: `<bds-grid md="3">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const md = await grid.getProperty('md');
      expect(md).toBe('3');
    });

    it('should accept lg breakpoint property', async () => {
      page = await newE2EPage({
        html: `<bds-grid lg="2">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const lg = await grid.getProperty('lg');
      expect(lg).toBe('2');
    });

    it('should accept xg breakpoint property', async () => {
      page = await newE2EPage({
        html: `<bds-grid xg="1">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const xg = await grid.getProperty('xg');
      expect(xg).toBe('1');
    });
  });

  describe('Offset Properties', () => {
    it('should accept xxsOffset property', async () => {
      page = await newE2EPage({
        html: `<bds-grid xxs-offset="2">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const xxsOffset = await grid.getProperty('xxsOffset');
      expect(xxsOffset).toBe('2');
    });

    it('should accept xsOffset property', async () => {
      page = await newE2EPage({
        html: `<bds-grid xs-offset="1">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const xsOffset = await grid.getProperty('xsOffset');
      expect(xsOffset).toBe('1');
    });

    it('should accept smOffset property', async () => {
      page = await newE2EPage({
        html: `<bds-grid sm-offset="3">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const smOffset = await grid.getProperty('smOffset');
      expect(smOffset).toBe('3');
    });
  });

  describe('Spacing Properties', () => {
    it('should accept gap property', async () => {
      page = await newE2EPage({
        html: `<bds-grid gap="2">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const gap = await grid.getProperty('gap');
      expect(gap).toBe('2');
    });

    it('should accept padding property', async () => {
      page = await newE2EPage({
        html: `<bds-grid padding="3">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const padding = await grid.getProperty('padding');
      expect(padding).toBe('3');
    });

    it('should accept margin property', async () => {
      page = await newE2EPage({
        html: `<bds-grid margin="4">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const margin = await grid.getProperty('margin');
      expect(margin).toBe('4');
    });

    it('should accept directional padding', async () => {
      page = await newE2EPage({
        html: `<bds-grid padding="x-2">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const padding = await grid.getProperty('padding');
      expect(padding).toBe('x-2');
    });

    it('should accept directional margin', async () => {
      page = await newE2EPage({
        html: `<bds-grid margin="y-3">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const margin = await grid.getProperty('margin');
      expect(margin).toBe('y-3');
    });
  });

  describe('Background Color Property', () => {
    it('should accept bgColor property', async () => {
      page = await newE2EPage({
        html: `<bds-grid bg-color="$color-primary">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const bgColor = await grid.getProperty('bgColor');
      expect(bgColor).toBe('$color-primary');
    });
  });

  describe('Structure', () => {
    it('should render slot content', async () => {
      const content = await page.findAll('bds-grid div');
      expect(content.length).toBe(2);

      const firstItem = await content[0].textContent;
      const secondItem = await content[1].textContent;
      expect(firstItem).toContain('Grid Item 1');
      expect(secondItem).toContain('Grid Item 2');
    });

    it('should apply direction class', async () => {
      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('direction--row');
    });

    it('should apply justify-content class', async () => {
      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('justify_content--center');
    });

    it('should apply align-items class', async () => {
      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('align_items--center');
    });

    it('should apply height style', async () => {
      page = await newE2EPage({
        html: `<bds-grid height="300px">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');

      // Check if height property is set
      const heightProp = await grid.getProperty('height');
      expect(heightProp).toBe('300px');

      // Check style is applied (may be on shadowRoot)
      const computedStyle = await page.evaluate(() => {
        const element = document.querySelector('bds-grid');
        return window.getComputedStyle(element).height;
      });

      expect(heightProp).toBeTruthy();
      expect(computedStyle).toBe('300px');
    });
  });

  describe('Advanced Properties Combinations', () => {
    it('should handle multiple breakpoints', async () => {
      page = await newE2EPage({
        html: `
          <bds-grid xxs="12" sm="6" md="4" lg="3">
            Responsive content
          </bds-grid>
        `,
      });

      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('xxs--12');
      expect(classes).toContain('sm--6');
      expect(classes).toContain('md--4');
      expect(classes).toContain('lg--3');
    });

    it('should handle container with fluid', async () => {
      page = await newE2EPage({
        html: `<bds-grid container="true" container-fluid="true">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('container');
      expect(classes).toContain('container-fluid');
    });

    it('should handle flex properties together', async () => {
      page = await newE2EPage({
        html: `
          <bds-grid 
            direction="column" 
            justify-content="space-between" 
            align-items="stretch" 
            flex-wrap="wrap"
          >
            Content
          </bds-grid>
        `,
      });

      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('direction--column');
      expect(classes).toContain('justify_content--space-between');
      expect(classes).toContain('align_items--stretch');
      expect(classes).toContain('flex_wrap--wrap');
    });

    it('should handle spacing with background color', async () => {
      page = await newE2EPage({
        html: `
          <bds-grid 
            gap="3" 
            padding="2" 
            margin="1" 
            bg-color="$color-surface-1"
          >
            Content
          </bds-grid>
        `,
      });

      const grid = await page.find('bds-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('gap--3');
      expect(classes).toContain('padding--2');
      expect(classes).toContain('margin--1');
      expect(classes).toContain('$color-surface-1');
    });
  });

  describe('Direction Variations', () => {
    it('should handle column direction', async () => {
      page = await newE2EPage({
        html: `<bds-grid direction="column">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const direction = await grid.getProperty('direction');
      const classes = await grid.getAttribute('class');
      expect(direction).toBe('column');
      expect(classes).toContain('direction--column');
    });

    it('should handle row-reverse direction', async () => {
      page = await newE2EPage({
        html: `<bds-grid direction="row-reverse">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const direction = await grid.getProperty('direction');
      const classes = await grid.getAttribute('class');
      expect(direction).toBe('row-reverse');
      expect(classes).toContain('direction--row-reverse');
    });

    it('should handle column-reverse direction', async () => {
      page = await newE2EPage({
        html: `<bds-grid direction="column-reverse">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const direction = await grid.getProperty('direction');
      const classes = await grid.getAttribute('class');
      expect(direction).toBe('column-reverse');
      expect(classes).toContain('direction--column-reverse');
    });
  });

  describe('Justify Content Variations', () => {
    it('should handle flex-start justify-content', async () => {
      page = await newE2EPage({
        html: `<bds-grid justify-content="flex-start">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const justifyContent = await grid.getProperty('justifyContent');
      const classes = await grid.getAttribute('class');
      expect(justifyContent).toBe('flex-start');
      expect(classes).toContain('justify_content--flex-start');
    });

    it('should handle space-between justify-content', async () => {
      page = await newE2EPage({
        html: `<bds-grid justify-content="space-between">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const justifyContent = await grid.getProperty('justifyContent');
      const classes = await grid.getAttribute('class');
      expect(justifyContent).toBe('space-between');
      expect(classes).toContain('justify_content--space-between');
    });

    it('should handle space-around justify-content', async () => {
      page = await newE2EPage({
        html: `<bds-grid justify-content="space-around">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const justifyContent = await grid.getProperty('justifyContent');
      const classes = await grid.getAttribute('class');
      expect(justifyContent).toBe('space-around');
      expect(classes).toContain('justify_content--space-around');
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const grid = await page.find('bds-grid');
      expect(grid).toBeTruthy();

      // The component should exist and be renderable
      const tagName = await grid.getProperty('tagName');
      expect(tagName).toBe('BDS-GRID');
    });

    it('should support keyboard navigation', async () => {
      page = await newE2EPage({
        html: `
          <button>Previous button</button>
          <bds-grid>
            <button>Grid button</button>
          </bds-grid>
          <button>Next button</button>
        `,
      });

      await page.focus('button');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      // Should focus the button inside the grid
      const focusedElement = await page.evaluate(() => document.activeElement?.textContent);
      expect(focusedElement).toContain('Grid button');
    });

    it('should preserve content structure', async () => {
      page = await newE2EPage({
        html: `
          <bds-grid>
            <h2>Title</h2>
            <p>Description</p>
            <button>Action</button>
          </bds-grid>
        `,
      });

      const title = await page.find('bds-grid h2');
      const description = await page.find('bds-grid p');
      const button = await page.find('bds-grid button');

      expect(title).toBeTruthy();
      expect(description).toBeTruthy();
      expect(button).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty grid', async () => {
      page = await newE2EPage({
        html: `<bds-grid></bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      expect(grid).toBeTruthy();
    });

    it('should handle grid without properties', async () => {
      page = await newE2EPage({
        html: `<bds-grid>Simple content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      expect(grid).toBeTruthy();

      // Should still have host class
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('host');
    });

    it('should handle auto breakpoint', async () => {
      page = await newE2EPage({
        html: `<bds-grid xxs="auto">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const xxs = await grid.getProperty('xxs');
      const classes = await grid.getAttribute('class');
      expect(xxs).toBe('auto');
      expect(classes).toContain('xxs--auto');
    });

    it('should handle none spacing values', async () => {
      page = await newE2EPage({
        html: `<bds-grid gap="none" padding="none" margin="none">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const gap = await grid.getProperty('gap');
      const padding = await grid.getProperty('padding');
      const margin = await grid.getProperty('margin');

      expect(gap).toBe('none');
      expect(padding).toBe('none');
      expect(margin).toBe('none');
    });

    it('should handle half spacing values', async () => {
      page = await newE2EPage({
        html: `<bds-grid gap="half" padding="half" margin="half">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const gap = await grid.getProperty('gap');
      const padding = await grid.getProperty('padding');
      const margin = await grid.getProperty('margin');

      expect(gap).toBe('half');
      expect(padding).toBe('half');
      expect(margin).toBe('half');
    });

    it('should handle wrap-reverse flex-wrap', async () => {
      page = await newE2EPage({
        html: `<bds-grid flex-wrap="wrap-reverse">Content</bds-grid>`,
      });

      const grid = await page.find('bds-grid');
      const flexWrap = await grid.getProperty('flexWrap');
      const classes = await grid.getAttribute('class');
      expect(flexWrap).toBe('wrap-reverse');
      expect(classes).toContain('flex_wrap--wrap-reverse');
    });
  });
});
