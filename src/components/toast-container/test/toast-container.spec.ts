import { newSpecPage } from '@stencil/core/testing';
import { BdsToastContainer } from '../toast-container';

describe('bds-toast-container', () => {
  it('should render with default structure', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container></bds-toast-container>`,
    });

    expect(page.root.tagName).toBe('BDS-TOAST-CONTAINER');
    expect(page.root.innerHTML).toContain('<!---->');
  });

  it('should render with slotted content', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container><div>Toast content</div></bds-toast-container>`,
    });

    expect(page.root.textContent).toBe('Toast content');
    expect(page.root.querySelector('div')).toBeTruthy();
  });

  it('should render with multiple toast elements', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `
        <bds-toast-container>
          <bds-toast id="toast1">First toast</bds-toast>
          <bds-toast id="toast2">Second toast</bds-toast>
        </bds-toast-container>
      `,
    });

    expect(page.root.querySelectorAll('bds-toast')).toHaveLength(2);
    expect(page.root.querySelector('#toast1')).toBeTruthy();
    expect(page.root.querySelector('#toast2')).toBeTruthy();
  });

  it('should handle empty content', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container></bds-toast-container>`,
    });

    expect(page.root.textContent).toBe('');
  });

  it('should maintain container structure with different content types', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `
        <bds-toast-container>
          <div class="toast-item">Custom toast</div>
          <span>Text toast</span>
          <bds-toast>Component toast</bds-toast>
        </bds-toast-container>
      `,
    });

    expect(page.root.querySelector('.toast-item')).toBeTruthy();
    expect(page.root.querySelector('span')).toBeTruthy();
    expect(page.root.querySelector('bds-toast')).toBeTruthy();
    expect(page.root.textContent).toContain('Custom toast');
    expect(page.root.textContent).toContain('Text toast');
    expect(page.root.textContent).toContain('Component toast');
  });

  it('should have basic component functionality', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container>Test content</bds-toast-container>`,
    });

    const component = page.rootInstance;
    expect(component).toBeTruthy();
    expect(typeof component.render).toBe('function');
  });

  it('should use scoped styling', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container></bds-toast-container>`,
    });

    // Component uses scoped styling (not shadow DOM)
    expect(page.root.shadowRoot).toBeFalsy();
  });

  it('should accept any HTML content', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `
        <bds-toast-container>
          <h1>Title</h1>
          <p>Description</p>
          <button>Action</button>
        </bds-toast-container>
      `,
    });

    expect(page.root.querySelector('h1')).toBeTruthy();
    expect(page.root.querySelector('p')).toBeTruthy();
    expect(page.root.querySelector('button')).toBeTruthy();
    expect(page.root.textContent).toContain('Title');
    expect(page.root.textContent).toContain('Description');
    expect(page.root.textContent).toContain('Action');
  });

  it('should maintain proper component structure', async () => {
    const page = await newSpecPage({
      components: [BdsToastContainer],
      html: `<bds-toast-container>Content</bds-toast-container>`,
    });

    expect(page.root.tagName).toBe('BDS-TOAST-CONTAINER');
    expect(page.root.textContent).toBe('Content');
  });
});
