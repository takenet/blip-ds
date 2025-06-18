import { newSpecPage } from '@stencil/core/testing';
import { ExpansionPanelBody } from '../expansion-panel-body';

describe('bds-expansion-panel-body', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body></bds-expansion-panel-body>`,
    });

    expect(page.root.open).toBe(false);
    expect(page.root.text).toBe(null);

    expect(page.root).toEqualHtml(`
      <bds-expansion-panel-body>
        <mock:shadow-root>
          <div class="expansion-content">
            <div class="with-line">
              <slot></slot>
              <div class="circle"></div>
            </div>
          </div>
        </mock:shadow-root>
      </bds-expansion-panel-body>
    `);
  });

  it('should render with open state', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body open="true"></bds-expansion-panel-body>`,
    });

    expect(page.root.open).toBe(true);
    
    // Content should be hidden when open is true (counterintuitive but correct based on component logic)
    const expansionContent = page.root.shadowRoot.querySelector('.expansion-content');
    expect(expansionContent.hasAttribute('hidden')).toBe(true);
  });

  it('should render with text property', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body text="Body content text"></bds-expansion-panel-body>`,
    });

    expect(page.root.text).toBe('Body content text');
    
    // Should show text div instead of circle
    expect(page.root.shadowRoot.querySelector('.text')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.circle')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.text p').textContent).toBe('Body content text');
  });

  it('should render with both open and text properties', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body open="true" text="Test content"></bds-expansion-panel-body>`,
    });

    expect(page.root.open).toBe(true);
    expect(page.root.text).toBe('Test content');
    
    // Content should be hidden when open is true
    const expansionContent = page.root.shadowRoot.querySelector('.expansion-content');
    expect(expansionContent.hasAttribute('hidden')).toBe(true);
    
    // Should show text div
    expect(page.root.shadowRoot.querySelector('.text')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.text p').textContent).toBe('Test content');
  });

  it('should render with slotted content', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `
        <bds-expansion-panel-body>
          <div>Slotted content</div>
        </bds-expansion-panel-body>
      `,
    });

    expect(page.root.textContent.trim()).toBe('Slotted content');
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should show content when open is false', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body open="false"></bds-expansion-panel-body>`,
    });

    expect(page.root.open).toBe(false);
    
    // Content should be visible when open is false
    const expansionContent = page.root.shadowRoot.querySelector('.expansion-content');
    expect(expansionContent.hasAttribute('hidden')).toBe(false);
  });

  it('should show circle when text is null', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body></bds-expansion-panel-body>`,
    });

    expect(page.root.text).toBe(null);
    expect(page.root.shadowRoot.querySelector('.circle')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.text')).toBeFalsy();
  });

  it('should show circle when text is empty string', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body text=""></bds-expansion-panel-body>`,
    });

    expect(page.root.text).toBe('');
    expect(page.root.shadowRoot.querySelector('.circle')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.text')).toBeFalsy();
  });

  it('should update open property dynamically', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body></bds-expansion-panel-body>`,
    });

    // Initial state - closed (content visible)
    expect(page.root.shadowRoot.querySelector('.expansion-content').hasAttribute('hidden')).toBe(false);

    // Open the panel (content becomes hidden)
    page.root.open = true;
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('.expansion-content').hasAttribute('hidden')).toBe(true);

    // Close the panel again (content becomes visible)
    page.root.open = false;
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('.expansion-content').hasAttribute('hidden')).toBe(false);
  });

  it('should update text property dynamically', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body></bds-expansion-panel-body>`,
    });

    // Initial state - no text, should show circle
    expect(page.root.shadowRoot.querySelector('.circle')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.text')).toBeFalsy();

    // Add text
    page.root.text = 'Dynamic text';
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('.text')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.circle')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.text p').textContent).toBe('Dynamic text');

    // Remove text
    page.root.text = null;
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('.circle')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.text')).toBeFalsy();
  });

  it('should have proper DOM structure', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body open="false" text="Test"></bds-expansion-panel-body>`,
    });

    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();

    // Test main container structure
    const expansionContent = shadowRoot.querySelector('.expansion-content');
    expect(expansionContent).toBeTruthy();

    // Test with-line div structure
    const withLineDiv = expansionContent.querySelector('.with-line');
    expect(withLineDiv).toBeTruthy();
    expect(withLineDiv.querySelector('slot')).toBeTruthy();

    // Test text div when text is present
    const textDiv = withLineDiv.querySelector('.text');
    expect(textDiv).toBeTruthy();
    expect(textDiv.querySelector('p')).toBeTruthy();
  });

  it('should handle boolean string values for open property', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body open="true"></bds-expansion-panel-body>`,
    });

    expect(page.root.open).toBe(true);
    expect(page.root.shadowRoot.querySelector('.expansion-content').hasAttribute('hidden')).toBe(true);
  });

  it('should handle logic where open=true means content is hidden', async () => {
    const page = await newSpecPage({
      components: [ExpansionPanelBody],
      html: `<bds-expansion-panel-body></bds-expansion-panel-body>`,
    });

    // When open is false (default), content should be visible
    expect(page.root.open).toBe(false);
    expect(page.root.shadowRoot.querySelector('.expansion-content').hasAttribute('hidden')).toBe(false);

    // When open is true, content should be hidden
    page.root.open = true;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.expansion-content').hasAttribute('hidden')).toBe(true);
  });
});
