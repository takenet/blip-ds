import { newSpecPage } from '@stencil/core/testing';
import { BdsDivider } from '../divider';

describe('bds-divider', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [BdsDivider],
      html: `<bds-divider></bds-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-divider class="horizontal solid color-divider-1">
        <mock:shadow-root>
          <hr class="horizontal solid color-divider-1">
        </mock:shadow-root>
      </bds-divider>
    `);
  });

  it('should render with custom styleType', async () => {
    const page = await newSpecPage({
      components: [BdsDivider],
      html: `<bds-divider style-type="dashed"></bds-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-divider style-type="dashed" class="horizontal dashed color-divider-1">
        <mock:shadow-root>
          <hr class="horizontal dashed color-divider-1">
        </mock:shadow-root>
      </bds-divider>
    `);
  });

  it('should render with custom orientation', async () => {
    const page = await newSpecPage({
      components: [BdsDivider],
      html: `<bds-divider orientation="vertical"></bds-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-divider orientation="vertical" class="vertical solid color-divider-1">
        <mock:shadow-root>
          <hr class="vertical solid color-divider-1">
        </mock:shadow-root>
      </bds-divider>
    `);
  });

  it('should render with custom color', async () => {
    const page = await newSpecPage({
      components: [BdsDivider],
      html: `<bds-divider color="divider-2"></bds-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-divider color="divider-2" class="horizontal solid color-divider-2">
        <mock:shadow-root>
          <hr class="horizontal solid color-divider-2">
        </mock:shadow-root>
      </bds-divider>
    `);
  });

  it('should render with all custom properties', async () => {
    const page = await newSpecPage({
      components: [BdsDivider],
      html: `<bds-divider style-type="dotted" orientation="vertical" color="divider-3"></bds-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-divider style-type="dotted" orientation="vertical" color="divider-3" class="vertical dotted color-divider-3">
        <mock:shadow-root>
          <hr class="vertical dotted color-divider-3">
        </mock:shadow-root>
      </bds-divider>
    `);
  });

  it('should update CSS classes when properties change', async () => {
    const page = await newSpecPage({
      components: [BdsDivider],
      html: `<bds-divider></bds-divider>`,
    });

    // Update properties
    page.root.styleType = 'dashed';
    page.root.orientation = 'vertical';
    page.root.color = 'divider-2';
    
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <bds-divider class="vertical dashed color-divider-2">
        <mock:shadow-root>
          <hr class="vertical dashed color-divider-2">
        </mock:shadow-root>
      </bds-divider>
    `);
  });

  it('should accept all valid style types', async () => {
    const validStyleTypes = ['solid', 'dotted', 'dashed'];
    
    for (const styleType of validStyleTypes) {
      const page = await newSpecPage({
        components: [BdsDivider],
        html: `<bds-divider style-type="${styleType}"></bds-divider>`,
      });

      expect(page.root.styleType).toBe(styleType);
      expect(page.root.className).toContain(styleType);
    }
  });

  it('should accept all valid orientations', async () => {
    const validOrientations = ['horizontal', 'vertical'];
    
    for (const orientation of validOrientations) {
      const page = await newSpecPage({
        components: [BdsDivider],
        html: `<bds-divider orientation="${orientation}"></bds-divider>`,
      });

      expect(page.root.orientation).toBe(orientation);
      expect(page.root.className).toContain(orientation);
    }
  });

  it('should accept all valid colors', async () => {
    const validColors = ['divider-1', 'divider-2', 'divider-3'];
    
    for (const color of validColors) {
      const page = await newSpecPage({
        components: [BdsDivider],
        html: `<bds-divider color="${color}"></bds-divider>`,
      });

      expect(page.root.color).toBe(color);
      expect(page.root.className).toContain(`color-${color}`);
    }
  });
});