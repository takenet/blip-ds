import { newSpecPage } from '@stencil/core/testing';
import { UaiGrid } from '../uai-grid';

describe('uai-grid', () => {
  it('renders a slot and remains a flex container', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: '<uai-grid><span>Content</span></uai-grid>',
    });

    expect(page.root.tagName).toBe('UAI-GRID');
    expect(page.root.classList.contains('host')).toBe(true);
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
    expect(page.root.textContent).toBe('Content');
  });

  it('keeps the BDS-compatible layout props and breakpoint spans', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: `
        <uai-grid
          container
          flex-wrap="wrap"
          direction="row"
          xxs="4"
          md="6"
          xxs-offset="1"
        ></uai-grid>
      `,
    });

    expect(page.root.container).toBe(true);
    expect(page.root.flexWrap).toBe('wrap');
    expect(page.root.direction).toBe('row');
    expect(page.root.xxs).toBe('4');
    expect(page.root.md).toBe('6');
    expect(page.root.xxsOffset).toBe('1');
    expect(page.root.classList.contains('container')).toBe(true);
    expect(page.root.classList.contains('flex_wrap--wrap')).toBe(true);
    expect(page.root.classList.contains('direction--row')).toBe(true);
    expect(page.root.classList.contains('xxs--4')).toBe(true);
    expect(page.root.classList.contains('md--6')).toBe(true);
    expect(page.root.classList.contains('xxsoffset--1')).toBe(true);
  });

  it('maps legacy bgColor names to UAI-compatible classes', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: '<uai-grid bg-color="$color-surface-1"></uai-grid>',
    });

    expect(page.root.bgColor).toBe('$color-surface-1');
    expect(page.root.classList.contains('bg-color--color-surface-1')).toBe(true);
  });

  it('preserves explicit height and spacing aliases', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: '<uai-grid height="240px" gap="2" padding="x-1" margin="y-3"></uai-grid>',
    });

    expect(page.root.style.height).toBe('240px');
    expect(page.root.classList.contains('gap--2')).toBe(true);
    expect(page.root.classList.contains('padding--x-1')).toBe(true);
    expect(page.root.classList.contains('margin--y-3')).toBe(true);
  });

  it('accepts space-separated lists in padding and margin', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: '<uai-grid padding="t-2  x-3" margin=" b-1 l-auto "></uai-grid>',
    });

    for (const name of ['padding--t-2', 'padding--x-3', 'margin--b-1', 'margin--l-auto']) {
      expect(page.root.classList.contains(name)).toBe(true);
    }
    const classes = page.root.className.split(/\s+/);
    expect(classes).not.toContain('padding--');
    expect(classes).not.toContain('margin--');
  });

  it('updates spacing classes when the list changes', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: '<uai-grid padding="t-2 x-3"></uai-grid>',
    });

    page.root.padding = 'l-1';
    await page.waitForChanges();

    expect(page.root.classList.contains('padding--l-1')).toBe(true);
    expect(page.root.classList.contains('padding--t-2')).toBe(false);
    expect(page.root.classList.contains('padding--x-3')).toBe(false);
  });

  it('renders drag handle and plus button in type="draggable" and preserves gap class', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: `
        <uai-grid type="draggable" max-items="2">
          <div>Item 1</div>
        </uai-grid>
      `,
    });

    const handle = page.root.shadowRoot.querySelector('.grid-draggable__handle') as HTMLButtonElement;
    const slotWrap = page.root.shadowRoot.querySelector('.grid-draggable__slot') as HTMLElement;
    const addBtn = page.root.shadowRoot.querySelector('.grid-draggable__add') as HTMLButtonElement;

    expect(page.root.classList.contains('row-draggable')).toBe(true);
    expect(handle).toBeTruthy();
    expect(slotWrap.classList.contains('grid-draggable__slot--gap-2')).toBe(true);
    expect(addBtn.getAttribute('aria-disabled')).toBeNull();

    const addSpy = jest.fn();
    page.root.addEventListener('uaiAddClick', addSpy);
    addBtn.click();
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(addSpy.mock.calls[0][0].detail).toEqual({ count: 1, maxItems: 2 });
  });

  it('marks plus button aria-disabled and blocks uaiAddClick when slot reaches maxItems', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: `
        <uai-grid type="draggable" max-items="2">
          <div>Item 1</div>
          <div>Item 2</div>
        </uai-grid>
      `,
    });

    const addSpy = jest.fn();
    page.root.addEventListener('uaiAddClick', addSpy);
    const addBtn = page.root.shadowRoot.querySelector('.grid-draggable__add') as HTMLButtonElement;

    expect(addBtn.getAttribute('aria-disabled')).toBe('true');
    addBtn.click();
    expect(addSpy).not.toHaveBeenCalled();
  });

  it('reorders child draggable rows via Alt+ArrowDown and Alt+ArrowUp when sortable is enabled', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: `
        <uai-grid id="list" direction="column" gap="2" sortable>
          <uai-grid id="row-a" type="draggable"><div>A</div></uai-grid>
          <uai-grid id="row-b" type="draggable"><div>B</div></uai-grid>
        </uai-grid>
      `,
    });

    const reorderSpy = jest.fn();
    page.root.addEventListener('uaiReorder', reorderSpy);

    const rowA = page.root.querySelector('#row-a') as HTMLElement;
    const handleA = rowA.shadowRoot.querySelector('.grid-draggable__handle') as HTMLButtonElement;

    const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', altKey: true, bubbles: true, composed: true });
    Object.defineProperty(keyEvent, 'composedPath', {
      value: () => [handleA, rowA.shadowRoot, rowA, page.root],
    });

    page.root.dispatchEvent(keyEvent);
    await page.waitForChanges();

    expect(reorderSpy).toHaveBeenCalledTimes(1);
    expect(reorderSpy.mock.calls[0][0].detail).toEqual({ fromIndex: 0, toIndex: 1 });
    const idsAfter = Array.from(page.root.querySelectorAll('uai-grid')).map((el) => el.id);
    expect(idsAfter).toEqual(['row-b', 'row-a']);
  });

  it('starts handling Alt+Arrow reorder when sortable is enabled after mount', async () => {
    const page = await newSpecPage({
      components: [UaiGrid],
      html: `
        <uai-grid id="list" direction="column" gap="2">
          <uai-grid id="row-a" type="draggable"><div>A</div></uai-grid>
          <uai-grid id="row-b" type="draggable"><div>B</div></uai-grid>
        </uai-grid>
      `,
    });

    const reorderSpy = jest.fn();
    page.root.addEventListener('uaiReorder', reorderSpy);
    const rowA = page.root.querySelector('#row-a') as HTMLElement;
    const handleA = rowA.shadowRoot.querySelector('.grid-draggable__handle') as HTMLButtonElement;
    const dispatch = () => {
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', altKey: true, bubbles: true, composed: true });
      Object.defineProperty(keyEvent, 'composedPath', { value: () => [handleA, rowA.shadowRoot, rowA, page.root] });
      page.root.dispatchEvent(keyEvent);
    };

    dispatch();
    await page.waitForChanges();
    expect(reorderSpy).not.toHaveBeenCalled();

    page.root.sortable = true;
    await page.waitForChanges();
    dispatch();
    await page.waitForChanges();
    expect(reorderSpy).toHaveBeenCalledTimes(1);
  });
});
