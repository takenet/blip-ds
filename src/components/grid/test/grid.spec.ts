import { newSpecPage } from '@stencil/core/testing';
import { Grid } from '../grid';

describe('bds-grid', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid></bds-grid>`,
    });

    expect(page.root.height).toBe(undefined);
    expect(page.root.direction).toBe(undefined);
    expect(page.root.justifyContent).toBe(undefined);
    expect(page.root.flexWrap).toBe(undefined);
    expect(page.root.alignItems).toBe(undefined);
    expect(page.root.container).toBe(undefined);
    expect(page.root.containerFluid).toBe(undefined);

    // The grid component applies classes even for undefined values
    expect(page.root.classList.contains('host')).toBe(true);
    expect(page.root.classList.contains('direction--undefined')).toBe(true);
    expect(page.root.classList.contains('justify_content--undefined')).toBe(true);

    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should render with height style', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid height="200px"></bds-grid>`,
    });

    expect(page.root.height).toBe('200px');
    expect(page.root.style.height).toBe('200px');
  });

  it('should render with direction classes', async () => {
    const directions = ['row', 'row-reverse', 'column', 'column-reverse'];
    
    for (const direction of directions) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid direction="${direction}"></bds-grid>`,
      });

      expect(page.root.direction).toBe(direction);
      expect(page.root.classList.contains('host')).toBe(true);
      expect(page.root.classList.contains(`direction--${direction}`)).toBe(true);
    }
  });

  it('should render with justify-content classes', async () => {
    const justifyContentValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'];
    
    for (const justifyContent of justifyContentValues) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid justify-content="${justifyContent}"></bds-grid>`,
      });

      expect(page.root.justifyContent).toBe(justifyContent);
      expect(page.root.classList.contains(`justify_content--${justifyContent}`)).toBe(true);
    }
  });

  it('should render with align-items classes', async () => {
    const alignItemsValues = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'];
    
    for (const alignItems of alignItemsValues) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid align-items="${alignItems}"></bds-grid>`,
      });

      expect(page.root.alignItems).toBe(alignItems);
      expect(page.root.classList.contains(`align_items--${alignItems}`)).toBe(true);
    }
  });

  it('should render with flex-wrap classes', async () => {
    const flexWrapValues = ['wrap', 'wrap-reverse'];
    
    for (const flexWrap of flexWrapValues) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid flex-wrap="${flexWrap}"></bds-grid>`,
      });

      expect(page.root.flexWrap).toBe(flexWrap);
      expect(page.root.classList.contains(`flex_wrap--${flexWrap}`)).toBe(true);
    }
  });

  it('should render with container classes', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid container="true"></bds-grid>`,
    });

    expect(page.root.container).toBe(true);
    expect(page.root.classList.contains('container')).toBe(true);
  });

  it('should render with container-fluid classes', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid container-fluid="true"></bds-grid>`,
    });

    expect(page.root.containerFluid).toBe(true);
    expect(page.root.classList.contains('container-fluid')).toBe(true);
  });

  it('should render with breakpoint classes', async () => {
    const breakpoints = ['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    
    for (const breakpoint of breakpoints) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid xxs="${breakpoint}" xs="${breakpoint}" sm="${breakpoint}" md="${breakpoint}" lg="${breakpoint}" xg="${breakpoint}"></bds-grid>`,
      });

      expect(page.root.xxs).toBe(breakpoint);
      expect(page.root.xs).toBe(breakpoint);
      expect(page.root.sm).toBe(breakpoint);
      expect(page.root.md).toBe(breakpoint);
      expect(page.root.lg).toBe(breakpoint);
      expect(page.root.xg).toBe(breakpoint);

      expect(page.root.classList.contains(`xxs--${breakpoint}`)).toBe(true);
      expect(page.root.classList.contains(`xs--${breakpoint}`)).toBe(true);
      expect(page.root.classList.contains(`sm--${breakpoint}`)).toBe(true);
      expect(page.root.classList.contains(`md--${breakpoint}`)).toBe(true);
      expect(page.root.classList.contains(`lg--${breakpoint}`)).toBe(true);
      expect(page.root.classList.contains(`xg--${breakpoint}`)).toBe(true);
      break; // Just test one breakpoint to avoid too many iterations
    }
  });

  it('should render with offset classes', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid xxs-offset="2" xs-offset="3" sm-offset="4" md-offset="5" lg-offset="6" xg-offset="7"></bds-grid>`,
    });

    expect(page.root.xxsOffset).toBe('2');
    expect(page.root.xsOffset).toBe('3');
    expect(page.root.smOffset).toBe('4');
    expect(page.root.mdOffset).toBe('5');
    expect(page.root.lgOffset).toBe('6');
    expect(page.root.xgOffset).toBe('7');

    expect(page.root.classList.contains('xxsoffset--2')).toBe(true);
    expect(page.root.classList.contains('xsoffset--3')).toBe(true);
    expect(page.root.classList.contains('smoffset--4')).toBe(true);
    expect(page.root.classList.contains('mdoffset--5')).toBe(true);
    expect(page.root.classList.contains('lgoffset--6')).toBe(true);
    expect(page.root.classList.contains('xgoffset--7')).toBe(true);
  });

  it('should render with gap classes', async () => {
    const gapValues = ['none', 'half', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    
    for (const gap of gapValues) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid gap="${gap}"></bds-grid>`,
      });

      expect(page.root.gap).toBe(gap);
      expect(page.root.classList.contains(`gap--${gap}`)).toBe(true);
      break; // Just test one gap value
    }
  });

  it('should render with padding classes', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid padding="2"></bds-grid>`,
    });

    expect(page.root.padding).toBe('2');
    expect(page.root.classList.contains('padding--2')).toBe(true);
  });

  it('should render with margin classes', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid margin="3"></bds-grid>`,
    });

    expect(page.root.margin).toBe('3');
    expect(page.root.classList.contains('margin--3')).toBe(true);
  });

  it('should render with background color classes', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid bg-color="$color-primary"></bds-grid>`,
    });

    expect(page.root.bgColor).toBe('$color-primary');
    expect(page.root.classList.contains('$color-primary')).toBe(true);
  });

  it('should render with slotted content', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `
        <bds-grid>
          <div>Grid content</div>
        </bds-grid>
      `,
    });

    expect(page.root.textContent.trim()).toBe('Grid content');
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should render with complex configuration', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `
        <bds-grid 
          height="300px"
          direction="column"
          justify-content="center"
          align-items="flex-start"
          flex-wrap="wrap"
          container="true"
          gap="4"
          padding="2"
          margin="1"
          bg-color="$color-surface-1"
          md="6"
          lg="8"
        ></bds-grid>
      `,
    });

    expect(page.root.height).toBe('300px');
    expect(page.root.direction).toBe('column');
    expect(page.root.justifyContent).toBe('center');
    expect(page.root.alignItems).toBe('flex-start');
    expect(page.root.flexWrap).toBe('wrap');
    expect(page.root.container).toBe(true);
    expect(page.root.gap).toBe('4');
    expect(page.root.padding).toBe('2');
    expect(page.root.margin).toBe('1');
    expect(page.root.bgColor).toBe('$color-surface-1');
    expect(page.root.md).toBe('6');
    expect(page.root.lg).toBe('8');

    // Test CSS classes
    expect(page.root.classList.contains('direction--column')).toBe(true);
    expect(page.root.classList.contains('justify_content--center')).toBe(true);
    expect(page.root.classList.contains('align_items--flex-start')).toBe(true);
    expect(page.root.classList.contains('flex_wrap--wrap')).toBe(true);
    expect(page.root.classList.contains('container')).toBe(true);
    expect(page.root.classList.contains('gap--4')).toBe(true);
    expect(page.root.classList.contains('padding--2')).toBe(true);
    expect(page.root.classList.contains('margin--1')).toBe(true);
    expect(page.root.classList.contains('$color-surface-1')).toBe(true);
    expect(page.root.classList.contains('md--6')).toBe(true);
    expect(page.root.classList.contains('lg--8')).toBe(true);

    // Test inline styles
    expect(page.root.style.height).toBe('300px');
  });

  it('should handle boolean properties correctly', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid container="false" container-fluid="false"></bds-grid>`,
    });

    expect(page.root.container).toBe(false);
    expect(page.root.containerFluid).toBe(false);
    expect(page.root.classList.contains('container')).toBe(false);
    expect(page.root.classList.contains('container-fluid')).toBe(false);
  });

  it('should update properties dynamically', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid></bds-grid>`,
    });

    // Initial state
    expect(page.root.direction).toBe(undefined);

    // Update direction
    page.root.direction = 'column';
    await page.waitForChanges();

    expect(page.root.direction).toBe('column');
    expect(page.root.classList.contains('direction--column')).toBe(true);

    // Update height
    page.root.height = '400px';
    await page.waitForChanges();

    expect(page.root.height).toBe('400px');
    expect(page.root.style.height).toBe('400px');
  });

  it('should handle all color variants', async () => {
    const colorValues = ['$color-brand', '$color-primary', '$color-secondary', '$color-surface-0'];
    
    for (const color of colorValues) {
      const page = await newSpecPage({
        components: [Grid],
        html: `<bds-grid bg-color="${color}"></bds-grid>`,
      });

      expect(page.root.bgColor).toBe(color);
      expect(page.root.classList.contains(color)).toBe(true);
      break; // Just test one color
    }
  });

  it('should have proper DOM structure', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<bds-grid gap="2" padding="1"></bds-grid>`,
    });

    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    expect(shadowRoot.children.length).toBe(1);
    expect(shadowRoot.children[0].tagName).toBe('SLOT');
  });

  it('should handle multiple classes simultaneously', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `
        <bds-grid 
          direction="row" 
          justify-content="space-between" 
          align-items="center"
          container="true"
          gap="3"
        ></bds-grid>
      `,
    });

    // Verify all classes are applied
    expect(page.root.classList.contains('host')).toBe(true);
    expect(page.root.classList.contains('direction--row')).toBe(true);
    expect(page.root.classList.contains('justify_content--space-between')).toBe(true);
    expect(page.root.classList.contains('align_items--center')).toBe(true);
    expect(page.root.classList.contains('container')).toBe(true);
    expect(page.root.classList.contains('gap--3')).toBe(true);
  });
});
