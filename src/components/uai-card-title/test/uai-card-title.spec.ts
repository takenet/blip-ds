import { newSpecPage } from '@stencil/core/testing';
import { UaiCardTitle } from '../uai-card-title';

describe('uai-card-title', () => {
  it('renders text prop or default slot inside uai-typo h4', async () => {
    const page = await newSpecPage({
      components: [UaiCardTitle],
      html: `<uai-card-title text="Indicador"></uai-card-title>`,
    });
    const typo = page.root.shadowRoot.querySelector('uai-typo');
    expect(typo.getAttribute('tag') || (typo as any).tag).toBe('h4');
    expect(typo.textContent).toBe('Indicador');
  });
});
