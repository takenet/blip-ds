import { newSpecPage } from '@stencil/core/testing';
import { UaiCardBody } from '../uai-card-body';

describe('uai-card-body', () => {
  it('renders uai-grid wrapping slotted content', async () => {
    const page = await newSpecPage({
      components: [UaiCardBody],
      html: `<uai-card-body><p>Texto</p></uai-card-body>`,
    });
    expect(page.root.shadowRoot.querySelector('uai-grid')).toBeTruthy();
    expect(page.root.textContent).toBe('Texto');
  });
});
