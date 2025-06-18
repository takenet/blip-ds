import { newSpecPage } from '@stencil/core/testing';
import { CardFooter } from '../card-footer';

describe('bds-card-footer', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [CardFooter],
      html: `<bds-card-footer></bds-card-footer>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    
    const grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid).toBeTruthy();
    expect(grid.getAttribute('xxs')).toBe('12');
    expect(grid.getAttribute('direction')).toBe('row');
    expect(grid.getAttribute('gap')).toBe('2');
    expect(grid.getAttribute('justifyContent')).toBe('flex-end');
  });

  it('should render with custom align prop', async () => {
    const page = await newSpecPage({
      components: [CardFooter],
      html: `<bds-card-footer align="center"></bds-card-footer>`,
    });

    const grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid.getAttribute('justifyContent')).toBe('center');
  });

  it('should render with all possible align values', async () => {
    const alignValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    
    for (const align of alignValues) {
      const page = await newSpecPage({
        components: [CardFooter],
        html: `<bds-card-footer align="${align}"></bds-card-footer>`,
      });

      const grid = page.root.shadowRoot.querySelector('bds-grid');
      expect(grid.getAttribute('justifyContent')).toBe(align);
    }
  });

  it('should render slot content', async () => {
    const page = await newSpecPage({
      components: [CardFooter],
      html: `
        <bds-card-footer>
          <button>Cancel</button>
          <button>Save</button>
        </bds-card-footer>
      `,
    });

    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should have correct component structure', async () => {
    const page = await newSpecPage({
      components: [CardFooter],
      html: `<bds-card-footer></bds-card-footer>`,
    });

    expect(page.root.tagName).toBe('BDS-CARD-FOOTER');
    
    const grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid).toBeTruthy();
    expect(grid.children.length).toBe(1);
    expect(grid.children[0].tagName).toBe('SLOT');
  });

  it('should update align prop dynamically', async () => {
    const page = await newSpecPage({
      components: [CardFooter],
      html: `<bds-card-footer align="flex-start"></bds-card-footer>`,
    });

    let grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid.getAttribute('justifyContent')).toBe('flex-start');

    page.root.align = 'space-between';
    await page.waitForChanges();

    grid = page.root.shadowRoot.querySelector('bds-grid');
    expect(grid.getAttribute('justifyContent')).toBe('space-between');
  });

  it('should implement ComponentInterface', () => {
    const component = new CardFooter();
    expect(typeof component.render).toBe('function');
  });

  it('should have default align value', () => {
    const component = new CardFooter();
    expect(component.align).toBe('flex-end');
  });
});
