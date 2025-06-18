import { newSpecPage } from '@stencil/core/testing';
import { Warning } from '../warning';

describe('bds-warning', () => {
  it('should render with default structure', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>This is a warning message</bds-warning>`,
    });

    expect(page.root).toEqualHtml(`
      <bds-warning>
        <mock:shadow-root>
          <div class="warning__body">
            <bds-icon class="warning__icon" theme="solid" size="small" name="warning"></bds-icon>
            <bds-typo variant="fs-14" tag="span" class="warning__message">
              <slot></slot>
            </bds-typo>
          </div>
        </mock:shadow-root>
        This is a warning message
      </bds-warning>
    `);
  });

  it('should render with slotted content', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Custom warning content</bds-warning>`,
    });

    expect(page.root.textContent).toBe('Custom warning content');
    expect(page.root.shadowRoot.querySelector('.warning__body')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('bds-icon')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('bds-typo')).toBeTruthy();
  });

  it('should render with empty content', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning></bds-warning>`,
    });

    expect(page.root.shadowRoot.querySelector('.warning__body')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('bds-icon[name="warning"]')).toBeTruthy();
  });

  it('should render warning icon with correct attributes', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Test</bds-warning>`,
    });

    const icon = page.root.shadowRoot.querySelector('bds-icon');
    expect(icon.getAttribute('theme')).toBe('solid');
    expect(icon.getAttribute('size')).toBe('small');
    expect(icon.getAttribute('name')).toBe('warning');
    expect(icon.classList.contains('warning__icon')).toBe(true);
  });

  it('should render typography with correct attributes', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Test</bds-warning>`,
    });

    const typo = page.root.shadowRoot.querySelector('bds-typo');
    expect(typo.getAttribute('variant')).toBe('fs-14');
    expect(typo.getAttribute('tag')).toBe('span');
    expect(typo.classList.contains('warning__message')).toBe(true);
  });

  it('should handle HTML content in slot', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning><strong>Important</strong> warning message</bds-warning>`,
    });

    expect(page.root.innerHTML).toContain('<strong>Important</strong> warning message');
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should maintain component structure with different content lengths', async () => {
    const shortContent = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Short</bds-warning>`,
    });

    const longContent = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>This is a very long warning message that spans multiple lines and contains detailed information about the warning condition</bds-warning>`,
    });

    // Both should have the same structure
    expect(shortContent.root.shadowRoot.querySelector('.warning__body')).toBeTruthy();
    expect(longContent.root.shadowRoot.querySelector('.warning__body')).toBeTruthy();
    
    expect(shortContent.root.shadowRoot.querySelector('bds-icon')).toBeTruthy();
    expect(longContent.root.shadowRoot.querySelector('bds-icon')).toBeTruthy();
  });

  it('should implement ComponentInterface', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Test</bds-warning>`,
    });

    const warning = page.rootInstance;
    expect(typeof warning.render).toBe('function');
  });

  it('should have shadow DOM', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Test</bds-warning>`,
    });

    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.warning__body')).toBeTruthy();
  });

  it('should use Host component correctly', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>Test</bds-warning>`,
    });

    // Host should render the component content directly inside the custom element
    expect(page.root.shadowRoot.children.length).toBe(1);
    expect(page.root.shadowRoot.firstElementChild.classList.contains('warning__body')).toBe(true);
  });

  it('should preserve whitespace in slot content', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `<bds-warning>  Spaced  content  </bds-warning>`,
    });

    expect(page.root.textContent).toBe('  Spaced  content  ');
  });

  it('should handle nested components in slot', async () => {
    const page = await newSpecPage({
      components: [Warning],
      html: `
        <bds-warning>
          <div>
            <span>Nested</span>
            <strong>content</strong>
          </div>
        </bds-warning>
      `,
    });

    expect(page.root.querySelector('div')).toBeTruthy();
    expect(page.root.querySelector('span')).toBeTruthy();
    expect(page.root.querySelector('strong')).toBeTruthy();
    expect(page.root.textContent).toContain('Nested');
    expect(page.root.textContent).toContain('content');
  });
});
