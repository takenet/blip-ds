import { newSpecPage } from '@stencil/core/testing';
import { UaiToast } from '../uai-toast';

const render = (html: string) => newSpecPage({ components: [UaiToast], html });

describe('uai-toast', () => {
  it('starts closed, with the system variant and a close button', async () => {
    const page = await render('<uai-toast message="Texto"></uai-toast>');
    const toast = page.rootInstance;
    expect(toast.open).toBe(false);
    expect(toast.variant).toBe('system');
    expect(toast.duration).toBe(0);
    expect(toast.closable).toBe(true);
    expect(page.root.classList.contains('uai-toast--open')).toBe(false);
    expect(page.root.shadowRoot.querySelector('.toast__close').getAttribute('aria-label')).toBe('Fechar');
    expect(page.root.shadowRoot.querySelector('.toast__action')).toBeNull();
  });

  it('maps each variant to its class, icon and ARIA role', async () => {
    const expected = {
      system: ['message-ballon', 'status'],
      info: ['info', 'status'],
      success: ['checkball', 'status'],
      warning: ['warning', 'alert'],
      error: ['error', 'alert'],
    };
    for (const [variant, [icon, role]] of Object.entries(expected)) {
      const page = await render(`<uai-toast variant="${variant}" message="Texto"></uai-toast>`);
      const surface = page.root.shadowRoot.querySelector('.toast');
      expect(surface.classList.contains(`toast--${variant}`)).toBe(true);
      expect(surface.getAttribute('role')).toBe(role);
      expect(page.root.shadowRoot.querySelector('.toast__icon').getAttribute('name')).toBe(icon);
    }
  });

  it('falls back to system for an unknown variant', async () => {
    const page = await render('<uai-toast variant="undo" message="Texto"></uai-toast>');
    expect(page.root.shadowRoot.querySelector('.toast--system')).not.toBeNull();
  });

  it('renders the heading, the message as text and the action', async () => {
    const page = await render(
      '<uai-toast heading="Título" message="<b>Texto</b>" action-label="Desfazer" open></uai-toast>',
    );
    const shadow = page.root.shadowRoot;
    expect(shadow.querySelector('.toast__title').textContent).toBe('Título');
    expect(shadow.querySelector('.toast__message').textContent).toBe('<b>Texto</b>');
    expect(shadow.querySelector('.toast__message b')).toBeNull();
    expect(shadow.querySelector('.toast__action').textContent).toBe('Desfazer');
    expect(page.root.classList.contains('uai-toast--open')).toBe(true);
  });

  it('hides the close button when it is not closable', async () => {
    const page = await newSpecPage({ components: [UaiToast], html: '<uai-toast message="Texto"></uai-toast>' });
    page.root.closable = false;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.toast__close')).toBeNull();
  });
});
