import { newSpecPage } from '@stencil/core/testing';
import { BdsModalAction } from '../modal-action';

describe('bds-modal-action', () => {
  async function createModalActionPage(props = {}, content = '') {
    return await newSpecPage({
      components: [BdsModalAction],
      html: `<bds-modal-action ${Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')}>${content}</bds-modal-action>`,
    });
  }

  it('should render component with correct structure', async () => {
    const page = await createModalActionPage();
    
    expect(page.root).toBeTruthy();
    expect(page.root.tagName).toBe('BDS-MODAL-ACTION');
  });

  it('should render with shadow DOM structure', async () => {
    const page = await createModalActionPage();
    
    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    
    const wrapper = shadowRoot.querySelector('.modal__action');
    expect(wrapper).toBeTruthy();
    expect(wrapper.tagName).toBe('DIV');
  });

  it('should have modal__action CSS class on wrapper', async () => {
    const page = await createModalActionPage();
    
    const wrapper = page.root.shadowRoot.querySelector('.modal__action');
    expect(wrapper).toBeTruthy();
    expect(wrapper.classList.contains('modal__action')).toBe(true);
  });

  it('should render slot for content', async () => {
    const page = await createModalActionPage();
    
    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should render with text content', async () => {
    const content = 'Modal action content';
    const page = await createModalActionPage({}, content);
    
    expect(page.root.textContent).toBe(content);
  });

  it('should render with button elements', async () => {
    const content = '<button>Cancel</button><button>Save</button>';
    const page = await createModalActionPage({}, content);
    
    const buttons = page.root.querySelectorAll('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toBe('Cancel');
    expect(buttons[1].textContent).toBe('Save');
  });

  it('should render with nested elements', async () => {
    const content = '<div class="action-group"><span>Action Group</span></div>';
    const page = await createModalActionPage({}, content);
    
    const actionGroup = page.root.querySelector('.action-group');
    expect(actionGroup).toBeTruthy();
    expect(actionGroup.querySelector('span').textContent).toBe('Action Group');
  });

  it('should render with complex content structure', async () => {
    const content = `
      <div class="actions-left">
        <button type="button">Cancel</button>
      </div>
      <div class="actions-right">
        <button type="button" class="primary">Save</button>
        <button type="button" class="secondary">Apply</button>
      </div>
    `;
    const page = await createModalActionPage({}, content);
    
    const leftActions = page.root.querySelector('.actions-left');
    const rightActions = page.root.querySelector('.actions-right');
    
    expect(leftActions).toBeTruthy();
    expect(rightActions).toBeTruthy();
    expect(leftActions.querySelector('button').textContent).toBe('Cancel');
    expect(rightActions.querySelectorAll('button').length).toBe(2);
  });

  it('should render empty when no content provided', async () => {
    const page = await createModalActionPage();
    
    expect(page.root.textContent.trim()).toBe('');
    
    const slot = page.root.shadowRoot.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('should maintain proper DOM structure with multiple instances', async () => {
    const page = await newSpecPage({
      components: [BdsModalAction],
      html: `
        <bds-modal-action>Action 1</bds-modal-action>
        <bds-modal-action>Action 2</bds-modal-action>
      `,
    });
    
    const modalActions = page.body.querySelectorAll('bds-modal-action');
    expect(modalActions.length).toBe(2);
    
    modalActions.forEach((modalAction, index) => {
      expect(modalAction.textContent).toBe(`Action ${index + 1}`);
      
      const wrapper = modalAction.shadowRoot.querySelector('.modal__action');
      expect(wrapper).toBeTruthy();
      expect(wrapper.classList.contains('modal__action')).toBe(true);
    });
  });

  it('should render with special characters and symbols', async () => {
    const content = 'Save & Exit • Cancel × Close';
    const page = await createModalActionPage({}, content);
    
    expect(page.root.textContent).toBe(content);
  });

  it('should render with HTML entities', async () => {
    const content = '&lt;Save&gt; &amp; &quot;Cancel&quot;';
    const page = await createModalActionPage({}, content);
    
    expect(page.root.textContent).toContain('<Save> & "Cancel"');
  });

  it('should handle large content', async () => {
    const content = 'A'.repeat(1000);
    const page = await createModalActionPage({}, content);
    
    expect(page.root.textContent).toBe(content);
    expect(page.root.textContent.length).toBe(1000);
  });

  it('should render with mixed content types', async () => {
    const content = `
      Text content
      <button>Button</button>
      <input type="text" placeholder="Input">
      <span>Span element</span>
    `;
    const page = await createModalActionPage({}, content);
    
    expect(page.root.querySelector('button')).toBeTruthy();
    expect(page.root.querySelector('input')).toBeTruthy();
    expect(page.root.querySelector('span')).toBeTruthy();
    expect(page.root.textContent).toContain('Text content');
  });

  it('should preserve content structure and attributes', async () => {
    const content = '<button id="save-btn" class="primary" disabled>Save</button>';
    const page = await createModalActionPage({}, content);
    
    const button = page.root.querySelector('button');
    expect(button.id).toBe('save-btn');
    expect(button.classList.contains('primary')).toBe(true);
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.textContent).toBe('Save');
  });

  it('should render with data attributes', async () => {
    const content = '<div data-testid="modal-actions" data-role="action-container">Actions</div>';
    const page = await createModalActionPage({}, content);
    
    const div = page.root.querySelector('[data-testid="modal-actions"]');
    expect(div).toBeTruthy();
    expect(div.getAttribute('data-role')).toBe('action-container');
    expect(div.textContent).toBe('Actions');
  });

  it('should handle whitespace-only content', async () => {
    const content = '   \n   \t   \n   ';
    const page = await createModalActionPage({}, content);
    
    expect(page.root.textContent).toBe(content);
  });

  it('should be accessible with proper structure', async () => {
    const content = `
      <button type="button" aria-label="Cancel action">Cancel</button>
      <button type="button" aria-label="Save changes">Save</button>
    `;
    const page = await createModalActionPage({}, content);
    
    const buttons = page.root.querySelectorAll('button');
    expect(buttons[0].getAttribute('aria-label')).toBe('Cancel action');
    expect(buttons[1].getAttribute('aria-label')).toBe('Save changes');
  });

  it('should maintain component structure integrity', async () => {
    const page = await createModalActionPage();
    
    // Check shadow DOM exists
    expect(page.root.shadowRoot).toBeTruthy();
    
    // Check wrapper structure
    const wrapper = page.root.shadowRoot.querySelector('.modal__action');
    expect(wrapper).toBeTruthy();
    expect(wrapper.tagName).toBe('DIV');
    
    // Check slot exists
    const slot = wrapper.querySelector('slot');
    expect(slot).toBeTruthy();
    
    // Check no extra elements
    const allElements = page.root.shadowRoot.querySelectorAll('*');
    expect(allElements.length).toBe(2); // div + slot
  });

  it('should handle component lifecycle', async () => {
    const page = await createModalActionPage({}, 'Initial content');
    
    // Verify initial state
    expect(page.root.textContent).toBe('Initial content');
    
    // Update content
    page.root.innerHTML = 'Updated content';
    await page.waitForChanges();
    
    // Verify structure is maintained
    const wrapper = page.root.shadowRoot.querySelector('.modal__action');
    expect(wrapper).toBeTruthy();
    expect(page.root.textContent).toBe('Updated content');
  });
});
