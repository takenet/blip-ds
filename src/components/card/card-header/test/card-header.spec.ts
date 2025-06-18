import { newSpecPage } from '@stencil/core/testing';
import { CardHeader } from '../card-header';

describe('bds-card-header', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<bds-card-header></bds-card-header>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    
    const grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid).toBeTruthy();
    expect(grid.getAttribute('xxs')).toBe('12');
    expect(grid.getAttribute('direction')).toBe('row');
    expect(grid.getAttribute('gap')).toBe('1');
    expect(grid.getAttribute('justifyContent')).toBe('space-between');
    expect(grid.getAttribute('alignItems')).toBe('center');
  });

  it('should render with custom align prop', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<bds-card-header align="center"></bds-card-header>`,
    });

    const grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid.getAttribute('justifyContent')).toBe('center');
    expect(grid.getAttribute('alignItems')).toBe('center');
  });

  it('should render with all possible align values', async () => {
    const alignValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    
    for (const align of alignValues) {
      const page = await newSpecPage({
        components: [CardHeader],
        html: `<bds-card-header align="${align}"></bds-card-header>`,
      });

      const grid = page.root.shadowRoot.querySelector('bds-grid');
      expect(grid.getAttribute('justifyContent')).toBe(align);
      expect(grid.getAttribute('alignItems')).toBe('center');
    }
  });

  it('should render slot content', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `
        <bds-card-header>
          <h3>Card Title</h3>
          <button>Action</button>
        </bds-card-header>
      `,
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should have correct component structure', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<bds-card-header></bds-card-header>`,
    });

    expect(page.root.tagName).toBe('BDS-CARD-HEADER');
    
    const grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid).toBeTruthy();
    expect(grid.children.length).toBe(1);
    expect(grid.children[0].tagName).toBe('SLOT');
  });

  it('should update align prop dynamically', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<bds-card-header align="flex-start"></bds-card-header>`,
    });

    let grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid.getAttribute('justifyContent')).toBe('flex-start');

    page.root.align = 'space-evenly';
    await page.waitForChanges();

    grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid.getAttribute('justifyContent')).toBe('space-evenly');
    expect(grid.getAttribute('alignItems')).toBe('center');
  });

  it('should implement ComponentInterface', () => {
    const component = new CardHeader();
    expect(typeof component.render).toBe('function');
  });

  it('should have default align value', () => {
    const component = new CardHeader();
    expect(component.align).toBe('space-between');
  });

  it('should have correct grid configuration differences from card-footer', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<bds-card-header></bds-card-header>`,
    });

    const grid = page.root.shadowRoot.querySelector('bds-grid');
    // Card header should have gap="1" and alignItems="center" 
    // while card-footer has gap="2" and no alignItems
    expect(grid.getAttribute('gap')).toBe('1');
    expect(grid.getAttribute('alignItems')).toBe('center');
    expect(grid.getAttribute('justifyContent')).toBe('space-between'); // different default from card-footer
  });
});
