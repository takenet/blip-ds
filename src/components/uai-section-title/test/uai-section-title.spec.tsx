import { newSpecPage } from '@stencil/core/testing';
import { resetDeprecationWarnings } from '../../../utils/deprecation';
import { UaiSectionTitle } from '../uai-section-title';

const render = (html: string) => newSpecPage({ components: [UaiSectionTitle], html });

describe('uai-section-title', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders h2 and omits empty description from the DOM', async () => {
    const page = await render('<uai-section-title heading="Visão geral"></uai-section-title>');
    const container = page.root.shadowRoot.querySelector('.section-title');
    const heading = page.root.shadowRoot.querySelector('.section-title__heading');
    const description = page.root.shadowRoot.querySelector('.section-title__description');

    expect(container).not.toBeNull();
    expect(heading.tagName).toBe('H2');
    expect(heading.textContent).toBe('Visão geral');
    expect(description).toBeNull();
    expect(warn).not.toHaveBeenCalled();
  });

  it('omits whitespace-only description and renders non-empty description', async () => {
    const emptyDesc = await render('<uai-section-title heading="Métricas" description="   "></uai-section-title>');
    expect(emptyDesc.root.shadowRoot.querySelector('.section-title__description')).toBeNull();

    const withDesc = await render(
      '<uai-section-title heading="Métricas" description="Últimos 30 dias" data-test="sec"></uai-section-title>',
    );
    const description = withDesc.root.shadowRoot.querySelector('.section-title__description');
    expect(description).not.toBeNull();
    expect(description.textContent).toBe('Últimos 30 dias');
    expect(withDesc.root.shadowRoot.querySelector('.section-title').getAttribute('data-test')).toBe('sec');
  });

  it.each(['h2', 'h3', 'h4'])('renders semantic %s tag when headingTag="%s"', async (tag) => {
    const page = await render(`<uai-section-title heading="Subseção" heading-tag="${tag}"></uai-section-title>`);
    expect(page.root.shadowRoot.querySelector('.section-title__heading').tagName).toBe(tag.toUpperCase());
  });

  it('falls back to h2 and warns when headingTag is unsupported', async () => {
    const page = await render('<uai-section-title heading="Subseção" heading-tag="h1"></uai-section-title>');
    expect(page.root.shadowRoot.querySelector('.section-title__heading').tagName).toBe('H2');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith('[uai-section-title] Unsupported headingTag "h1". Using "h2".');
  });

  it('projects trailing controls in slot="actions"', async () => {
    const page = await render(
      '<uai-section-title heading="Canais"><button slot="actions">Exportar</button></uai-section-title>',
    );
    const actionsWrapper = page.root.shadowRoot.querySelector('.section-title__actions');

    expect(actionsWrapper).not.toBeNull();
    expect(page.root.querySelector('[slot="actions"]').textContent).toBe('Exportar');
  });
});
