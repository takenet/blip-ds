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
});
