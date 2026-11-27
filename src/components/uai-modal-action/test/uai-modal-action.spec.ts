import { newSpecPage } from '@stencil/core/testing';
import { UaiModalAction } from '../uai-modal-action';

describe('uai-modal-action', () => {
  it('renders the action row with a slot', async () => {
    const page = await newSpecPage({
      components: [UaiModalAction],
      html: '<uai-modal-action><button>Ok</button></uai-modal-action>',
    });
    const row = page.root.shadowRoot.querySelector('.modal__action');
    expect(row).toBeTruthy();
    expect(row.getAttribute('part')).toBe('action');
    expect(row.querySelector('slot')).toBeTruthy();
    expect(page.root.querySelector('button').textContent).toBe('Ok');
  });
});
