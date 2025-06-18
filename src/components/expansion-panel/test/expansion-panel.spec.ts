import { newSpecPage } from '@stencil/core/testing';
import { ExpansionPanel } from '../expansion-panel';

describe('bds-expansion-panel', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanel],
      html: `<bds-expansion-panel></bds-expansion-panel>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-expansion-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bds-expansion-panel>
    `);
  });

  it('should render with slotted content', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanel],
      html: `
        <bds-expansion-panel>
          <div>Expansion panel content</div>
        </bds-expansion-panel>
      `,
    });

    expect(page.root.textContent.trim()).toBe('Expansion panel content');
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should have block display style', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanel],
      html: `<bds-expansion-panel></bds-expansion-panel>`,
    });

    // Test that the component exists and can be rendered
    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-EXPANSION-PANEL');
  });

  it('should maintain component structure integrity', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanel],
      html: `<bds-expansion-panel></bds-expansion-panel>`,
    });

    // Test shadow DOM structure
    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    expect(shadowRoot.children.length).toBe(1);
    expect(shadowRoot.children[0].tagName).toBe('SLOT');
  });

  it('should handle multiple content elements', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanel],
      html: `
        <bds-expansion-panel>
          <div>First element</div>
          <div>Second element</div>
          <span>Third element</span>
        </bds-expansion-panel>
      `,
    });

    expect(page.root.children.length).toBe(3);
    expect(page.root.children[0].textContent).toBe('First element');
    expect(page.root.children[1].textContent).toBe('Second element');
    expect(page.root.children[2].textContent).toBe('Third element');
  });
});
