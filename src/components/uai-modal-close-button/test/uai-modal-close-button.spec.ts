import { newSpecPage } from '@stencil/core/testing';
import { UaiModalCloseButton } from '../uai-modal-close-button';

describe('uai-modal-close-button', () => {
  it('is active by default and renders the close icon', async () => {
    const page = await newSpecPage({ components: [UaiModalCloseButton], html: '<uai-modal-close-button></uai-modal-close-button>' });
    const box = page.root.shadowRoot.querySelector('.modal__close__button-icon');
    expect(page.rootInstance.active).toBe(true);
    expect(box.classList.contains('modal__close__button-icon--active')).toBe(true);
    expect(box.querySelector('uai-icon').getAttribute('name')).toBe('close');
  });

  it('drops the active class when inactive', async () => {
    const page = await newSpecPage({ components: [UaiModalCloseButton], html: '<uai-modal-close-button></uai-modal-close-button>' });
    page.root.active = false;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.modal__close__button-icon--active')).toBeNull();
  });
});
