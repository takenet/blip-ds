import { newSpecPage } from '@stencil/core/testing';
import { UaiModalCloseButton } from '../uai-modal-close-button';

describe('uai-modal-close-button', () => {
  it('renders a native button with an accessible name and the close icon', async () => {
    const page = await newSpecPage({
      components: [UaiModalCloseButton],
      html: '<uai-modal-close-button></uai-modal-close-button>',
    });
    const button = page.root.shadowRoot.querySelector('button.modal__close__button');
    expect(page.rootInstance.active).toBe(true);
    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('aria-label')).toBe('Fechar');
    expect(button.hasAttribute('disabled')).toBe(false);
    expect(button.querySelector('uai-icon').getAttribute('name')).toBe('close');
    expect(page.root.shadowRoot.querySelector('.modal__close__button-icon--active')).toBeTruthy();
  });

  it('takes a custom label and test selector', async () => {
    const page = await newSpecPage({
      components: [UaiModalCloseButton],
      html: '<uai-modal-close-button label="Close" dt-button="close"></uai-modal-close-button>',
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('Close');
    expect(button.getAttribute('data-test')).toBe('close');
  });

  it('is disabled and leaves the tab order when inactive', async () => {
    const page = await newSpecPage({
      components: [UaiModalCloseButton],
      html: '<uai-modal-close-button></uai-modal-close-button>',
    });
    page.root.active = false;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.modal__close__button-icon--active')).toBeNull();
    expect(page.root.shadowRoot.querySelector('button').hasAttribute('disabled')).toBe(true);
  });
});
