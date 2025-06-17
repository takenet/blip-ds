import { newSpecPage } from '@stencil/core/testing';
import { ExpansionPanelHeader } from '../expansion-panel-header';

describe('bds-expansion-panel-header', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `<bds-expansion-panel-header></bds-expansion-panel-header>`,
    });

    expect(page.root.text).toBe(undefined);

    expect(page.root).toEqualHtml(`
      <bds-expansion-panel-header>
        <mock:shadow-root>
          <div class="header">
            <slot></slot>
          </div>
          <bds-typo tag="p" variant="fs-12"></bds-typo>
        </mock:shadow-root>
      </bds-expansion-panel-header>
    `);
  });

  it('should render with text property', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `<bds-expansion-panel-header text="Expansion panel description"></bds-expansion-panel-header>`,
    });

    expect(page.root.text).toBe('Expansion panel description');
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('Expansion panel description');
  });

  it('should render with slotted content', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `
        <bds-expansion-panel-header>
          <h3>Header Title</h3>
        </bds-expansion-panel-header>
      `,
    });

    expect(page.root.textContent.trim()).toBe('Header Title');
    expect(page.root.shadowRoot.querySelector('.header slot')).toBeTruthy();
  });

  it('should render with both slotted content and text property', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `
        <bds-expansion-panel-header text="Description text">
          <h3>Slotted Header</h3>
        </bds-expansion-panel-header>
      `,
    });

    expect(page.root.text).toBe('Description text');
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('Description text');
    expect(page.root.textContent.trim()).toBe('Slotted Header');
  });

  it('should update text property dynamically', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `<bds-expansion-panel-header></bds-expansion-panel-header>`,
    });

    // Initial state - no text
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('');

    // Update text property
    page.root.text = 'Updated description';
    await page.waitForChanges();

    expect(page.root.text).toBe('Updated description');
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('Updated description');
  });

  it('should have proper DOM structure', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `<bds-expansion-panel-header text="Test description"></bds-expansion-panel-header>`,
    });

    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();

    // Test header div structure
    const headerDiv = shadowRoot.querySelector('.header');
    expect(headerDiv).toBeTruthy();
    expect(headerDiv.querySelector('slot')).toBeTruthy();

    // Test typo component structure
    const typoElement = shadowRoot.querySelector('bds-typo');
    expect(typoElement).toBeTruthy();
    expect(typoElement.getAttribute('tag')).toBe('p');
    expect(typoElement.getAttribute('variant')).toBe('fs-12');
  });

  it('should handle empty text property', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `<bds-expansion-panel-header text=""></bds-expansion-panel-header>`,
    });

    expect(page.root.text).toBe('');
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('');
  });

  it('should handle null text property', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelHeader],
      html: `<bds-expansion-panel-header></bds-expansion-panel-header>`,
    });

    page.root.text = null;
    await page.waitForChanges();

    expect(page.root.text).toBe(null);
    expect(page.root.shadowRoot.querySelector('bds-typo').textContent).toBe('');
  });
});
