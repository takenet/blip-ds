import { newSpecPage } from '@stencil/core/testing';
import { UaiEmptyState } from '../uai-empty-state';

const render = (html: string) => newSpecPage({ components: [UaiEmptyState], html });
const shadow = (page: Awaited<ReturnType<typeof render>>) => page.root.shadowRoot;

describe('uai-empty-state', () => {
  it('uses the page, neutral and h2 defaults', async () => {
    const page = await render('<uai-empty-state heading="Escolha uma conversa"></uai-empty-state>');
    const state = page.rootInstance as UaiEmptyState;
    expect(state.variant).toBe('page');
    expect(state.tone).toBe('neutral');
    expect(state.headingTag).toBe('h2');
    expect(state.icon).toBe(null);
    expect(state.description).toBe(null);
    expect(page.root.classList.contains('empty-state--page')).toBe(true);
    expect(page.root.classList.contains('empty-state--neutral')).toBe(true);
    expect(page.root.hasAttribute('role')).toBe(false);
    expect(page.root.hasAttribute('tabindex')).toBe(false);
    expect(shadow(page).querySelector('.empty-state__icon').getAttribute('name')).toBe('message-ballon');
  });

  it('renders the heading with title-sm semibold and the chosen tag', async () => {
    const page = await render('<uai-empty-state heading="Nenhum contato" heading-tag="h3"></uai-empty-state>');
    const heading = shadow(page).querySelector('.empty-state__heading');
    expect(heading.textContent).toBe('Nenhum contato');
    expect(heading.getAttribute('tag')).toBe('h3');
    expect(heading.getAttribute('variant')).toBe('title-sm');
    expect(heading.getAttribute('bold')).toBe('semibold');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])('accepts heading-tag %s', async (tag) => {
    const page = await render(`<uai-empty-state heading="Título" heading-tag="${tag}"></uai-empty-state>`);
    expect(shadow(page).querySelector('.empty-state__heading').getAttribute('tag')).toBe(tag);
  });

  it('falls back to known values for unsupported props', async () => {
    const page = await render(
      '<uai-empty-state heading="Título" variant="huge" tone="loud" heading-tag="div"></uai-empty-state>',
    );
    expect(page.root.classList.contains('empty-state--page')).toBe(true);
    expect(page.root.classList.contains('empty-state--neutral')).toBe(true);
    expect(shadow(page).querySelector('.empty-state__heading').getAttribute('tag')).toBe('h2');
  });

  it('omits the heading element when there is no heading', async () => {
    const page = await render('<uai-empty-state></uai-empty-state>');
    expect(shadow(page).querySelector('.empty-state__heading')).toBeNull();
  });

  it('applies the inline variant', async () => {
    const page = await render('<uai-empty-state variant="inline" heading="Título"></uai-empty-state>');
    expect(page.root.classList.contains('empty-state--inline')).toBe(true);
  });

  it('marks the icon box as decorative', async () => {
    const page = await render('<uai-empty-state heading="Título" icon="search"></uai-empty-state>');
    const box = shadow(page).querySelector('.empty-state__icon-box');
    expect(box.getAttribute('aria-hidden')).toBe('true');
    expect(box.querySelector('uai-icon').getAttribute('name')).toBe('search');
    expect(box.querySelector('uai-icon').hasAttribute('aria-label')).toBe(false);
  });

  it('announces the error tone with role="alert" and the error icon', async () => {
    const page = await render('<uai-empty-state tone="error" heading="Não foi possível carregar"></uai-empty-state>');
    expect(page.root.getAttribute('role')).toBe('alert');
    expect(page.root.classList.contains('empty-state--error')).toBe(true);
    expect(shadow(page).querySelector('.empty-state__icon').getAttribute('name')).toBe('error');
  });

  it('keeps a custom icon in the error tone', async () => {
    const page = await render('<uai-empty-state tone="error" icon="warning" heading="Falhou"></uai-empty-state>');
    expect(shadow(page).querySelector('.empty-state__icon').getAttribute('name')).toBe('warning');
  });

  it('drops the alert role when the tone goes back to neutral', async () => {
    const page = await render('<uai-empty-state tone="error" heading="Falhou"></uai-empty-state>');
    page.root.tone = 'neutral';
    await page.waitForChanges();
    expect(page.root.hasAttribute('role')).toBe(false);
  });

  it('renders the description prop and hides the description when empty', async () => {
    const page = await render('<uai-empty-state heading="Título" description="Texto de apoio"></uai-empty-state>');
    const description = shadow(page).querySelector('.empty-state__description');
    expect(description.textContent).toBe('Texto de apoio');
    expect(description.hasAttribute('hidden')).toBe(false);

    const empty = await render('<uai-empty-state heading="Título"> </uai-empty-state>');
    expect(shadow(empty).querySelector('.empty-state__description').hasAttribute('hidden')).toBe(true);
  });

  it('lets the default slot replace the description prop', async () => {
    const page = await render(
      '<uai-empty-state heading="Título" description="Prop"><span>Texto com <a href="#">link</a></span></uai-empty-state>',
    );
    const description = shadow(page).querySelector('.empty-state__description');
    expect(description.hasAttribute('hidden')).toBe(false);
    expect(description.textContent).not.toContain('Prop');
    expect(description.querySelector('slot:not([name])')).not.toBeNull();
  });

  it('keeps the description prop when only blank text and actions are slotted', async () => {
    const page = await render(`<uai-empty-state heading="Título" description="Prop">
        <uai-button slot="actions">Tentar de novo</uai-button>
      </uai-empty-state>`);
    const description = shadow(page).querySelector('.empty-state__description');
    expect(description.textContent).toContain('Prop');
    expect(description.hasAttribute('hidden')).toBe(false);
  });

  it('shows the actions row only when the actions slot is filled', async () => {
    const without = await render('<uai-empty-state heading="Título"></uai-empty-state>');
    expect(shadow(without).querySelector('.empty-state__actions').hasAttribute('hidden')).toBe(true);

    const page = await render(
      '<uai-empty-state heading="Título"><uai-button slot="actions">Tentar de novo</uai-button></uai-empty-state>',
    );
    const actions = shadow(page).querySelector('.empty-state__actions');
    expect(actions.hasAttribute('hidden')).toBe(false);
    expect(actions.querySelector('slot[name="actions"]')).not.toBeNull();
  });

  it('updates the slots when children change', async () => {
    const page = await render('<uai-empty-state heading="Título"></uai-empty-state>');
    const button = page.doc.createElement('uai-button');
    button.setAttribute('slot', 'actions');
    page.root.appendChild(button);
    (shadow(page).querySelector('slot[name="actions"]') as HTMLSlotElement).dispatchEvent(new Event('slotchange'));
    await page.waitForChanges();
    expect(shadow(page).querySelector('.empty-state__actions').hasAttribute('hidden')).toBe(false);
  });

  it('sets data-test on the host', async () => {
    const page = await render('<uai-empty-state heading="Título" data-test="empty"></uai-empty-state>');
    expect(page.root.getAttribute('data-test')).toBe('empty');
  });
});
