import { newSpecPage } from '@stencil/core/testing';
import { UaiCard } from '../uai-card';
import { UaiCardHeader } from '../../uai-card-header/uai-card-header';
import { UaiCardBody } from '../../uai-card-body/uai-card-body';
import { UaiCardFooter } from '../../uai-card-footer/uai-card-footer';
import { UaiCardTitle } from '../../uai-card-title/uai-card-title';
import { UaiCardSubtitle } from '../../uai-card-subtitle/uai-card-subtitle';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

describe('uai-card family', () => {
  beforeEach(() => {
    resetDeprecationWarnings();
  });

  it('hides optional media, header, and footer regions when empty', async () => {
    const page = await newSpecPage({
      components: [UaiCard],
      html: `<uai-card><div>Body only</div></uai-card>`,
    });

    const media = page.root.shadowRoot.querySelector('.card__media');
    const header = page.root.shadowRoot.querySelector('.card__header');
    const footer = page.root.shadowRoot.querySelector('.card__footer');
    const surface = page.root.shadowRoot.querySelector('.card') as HTMLElement;

    expect(media).toBeNull();
    expect(header).toBeNull();
    expect(footer).toBeNull();
    expect(surface.getAttribute('role')).toBeNull();
    expect(surface.getAttribute('tabindex')).toBeNull();
  });

  it('renders heading, description, actions slot, media, and footer slot when provided', async () => {
    const page = await newSpecPage({
      components: [UaiCard],
      html: `
        <uai-card size="md" heading="Evolução temporal" description="Volume semanal" image-src="https://placehold.co/600x200" image-alt="Capa">
          <button slot="actions" type="button">Opções</button>
          <div>Conteúdo</div>
          <div slot="footer">Meta: 1.000</div>
        </uai-card>
      `,
    });

    const surface = page.root.shadowRoot.querySelector('.card');
    const heading = page.root.shadowRoot.querySelector('.card__heading');
    const description = page.root.shadowRoot.querySelector('.card__description');
    const header = page.root.shadowRoot.querySelector('.card__header');
    const footer = page.root.shadowRoot.querySelector('.card__footer');
    const image = page.root.shadowRoot.querySelector('.card__image') as HTMLImageElement;

    expect(surface.classList.contains('card--size-md')).toBe(true);
    expect(surface.classList.contains('card--has-header')).toBe(true);
    expect(surface.classList.contains('card--has-footer')).toBe(true);
    expect(header.classList.contains('card__header--with-actions')).toBe(true);
    expect(heading.textContent).toBe('Evolução temporal');
    expect(description.textContent).toBe('Volume semanal');
    expect(footer.hasAttribute('hidden')).toBe(false);
    expect(image.getAttribute('src')).toBe('https://placehold.co/600x200');
    expect(image.getAttribute('alt')).toBe('Capa');
  });

  it('renders a static surface without button semantics or tab stop', async () => {
    const page = await newSpecPage({
      components: [UaiCard],
      html: `<uai-card heading="Estático" clickable selectable selected>Corpo</uai-card>`,
    });
    const surface = page.root.shadowRoot.querySelector('.card') as HTMLElement;

    expect(surface.hasAttribute('role')).toBe(false);
    expect(surface.hasAttribute('tabindex')).toBe(false);
    expect(surface.hasAttribute('aria-pressed')).toBe(false);
  });

  it('routes legacy subcomponents uai-card-header and uai-card-footer automatically', async () => {
    const page = await newSpecPage({
      components: [UaiCard, UaiCardHeader, UaiCardBody, UaiCardFooter, UaiCardTitle, UaiCardSubtitle],
      html: `
        <uai-card>
          <uai-card-header align="flex-start">
            <uai-card-title text="@Blip"></uai-card-title>
            <uai-card-subtitle text="Atualizado agora"></uai-card-subtitle>
          </uai-card-header>
          <uai-card-body>Corpo legado</uai-card-body>
          <uai-card-footer align="space-between">Rodapé</uai-card-footer>
        </uai-card>
      `,
    });

    const headerEl = page.root.querySelector('uai-card-header');
    const footerEl = page.root.querySelector('uai-card-footer');
    const titleEl = page.root.querySelector('uai-card-title');
    const subtitleEl = page.root.querySelector('uai-card-subtitle');

    expect(headerEl.getAttribute('slot')).toBe('header');
    expect(footerEl.getAttribute('slot')).toBe('footer');
    expect(titleEl.shadowRoot.textContent).toBe('@Blip');
    expect(subtitleEl.shadowRoot.textContent).toBe('Atualizado agora');
    expect(page.root.shadowRoot.querySelector('.card__header').hasAttribute('hidden')).toBe(false);
    expect(page.root.shadowRoot.querySelector('.card__footer').hasAttribute('hidden')).toBe(false);
  });

  it('falls back to size sm and warns once on unsupported size', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const page = await newSpecPage({
      components: [UaiCard],
      html: `<uai-card size="xl">Teste</uai-card>`,
    });

    const surface = page.root.shadowRoot.querySelector('.card');
    expect(surface.classList.contains('card--size-sm')).toBe(true);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
