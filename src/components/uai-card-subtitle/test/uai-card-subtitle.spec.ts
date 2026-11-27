import { newSpecPage } from '@stencil/core/testing';
import { UaiCardSubtitle } from '../uai-card-subtitle';

describe('uai-card-subtitle', () => {
  it('renders text prop or default slot inside uai-typo p', async () => {
    const page = await newSpecPage({
      components: [UaiCardSubtitle],
      html: `<uai-card-subtitle text="Últimos 7 dias"></uai-card-subtitle>`,
    });
    const typo = page.root.shadowRoot.querySelector('uai-typo');
    expect(typo.getAttribute('tag') || (typo as any).tag).toBe('p');
    expect(typo.textContent).toBe('Últimos 7 dias');
  });
});
