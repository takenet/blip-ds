import { newSpecPage } from '@stencil/core/testing';
import { Table } from '../table';

describe('bds-table', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table></bds-table>',
    });

    expect(page.root).toEqualHtml(`
      <bds-table>
        <div class="bds-table"></div>
      </bds-table>
    `);
  });

  it('should render with scrollable property', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table scrollable></bds-table>',
    });

    expect(page.root).toEqualHtml(`
      <bds-table class="scrollable" scrollable="">
        <div class="bds-table"></div>
      </bds-table>
    `);

    expect(page.rootInstance.scrollable).toBe(true);
  });

  it('should render with collapse property', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table collapse></bds-table>',
    });

    expect(page.root).toEqualHtml(`
      <bds-table collapse="">
        <div class="bds-table"></div>
      </bds-table>
    `);

    expect(page.rootInstance.collapse).toBe(true);
  });

  it('should render with denseTable property', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table dense-table></bds-table>',
    });

    expect(page.root).toEqualHtml(`
      <bds-table class="dense-table" dense-table="">
        <div class="bds-table"></div>
      </bds-table>
    `);

    expect(page.rootInstance.denseTable).toBe(true);
  });

  it('should render with multiple properties combined', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table scrollable collapse dense-table></bds-table>',
    });

    expect(page.root).toEqualHtml(`
      <bds-table class="dense-table scrollable" collapse="" dense-table="" scrollable="">
        <div class="bds-table"></div>
      </bds-table>
    `);

    expect(page.rootInstance.scrollable).toBe(true);
    expect(page.rootInstance.collapse).toBe(true);
    expect(page.rootInstance.denseTable).toBe(true);
  });

  it('should update properties dynamically', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table></bds-table>',
    });

    // Initial state
    expect(page.rootInstance.scrollable).toBeUndefined();
    expect(page.rootInstance.collapse).toBeUndefined();
    expect(page.rootInstance.denseTable).toBeUndefined();

    // Update properties
    page.rootInstance.scrollable = true;
    page.rootInstance.collapse = true;
    page.rootInstance.denseTable = true;
    await page.waitForChanges();

    expect(page.rootInstance.scrollable).toBe(true);
    expect(page.rootInstance.collapse).toBe(true);
    expect(page.rootInstance.denseTable).toBe(true);
  });

  it('should handle property values correctly', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table></bds-table>',
    });

    // Test setting false values
    page.rootInstance.scrollable = false;
    page.rootInstance.collapse = false;
    page.rootInstance.denseTable = false;
    await page.waitForChanges();

    expect(page.rootInstance.scrollable).toBe(false);
    expect(page.rootInstance.collapse).toBe(false);
    expect(page.rootInstance.denseTable).toBe(false);
  });

  it('should render slot content correctly', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: `
        <bds-table>
          <div>Table content</div>
        </bds-table>
      `,
    });

    const slotContent = page.root.querySelector('div:last-child');
    expect(slotContent).toBeTruthy();
    expect(slotContent.textContent.trim()).toBe('Table content');
  });

  it('should have proper component defaults', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table></bds-table>',
    });

    expect(page.rootInstance.scrollable).toBeUndefined();
    expect(page.rootInstance.collapse).toBeUndefined();
    expect(page.rootInstance.denseTable).toBeUndefined();
  });

  it('should apply correct CSS classes based on props', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: '<bds-table scrollable dense-table></bds-table>',
    });

    // Check that both classes are applied
    expect(page.root).toHaveClass('scrollable');
    expect(page.root).toHaveClass('dense-table');
    expect(page.root).not.toHaveClass('collapse');
  });
});
