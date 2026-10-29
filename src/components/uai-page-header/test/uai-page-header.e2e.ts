import { E2EPage, newE2EPage } from '@stencil/core/testing';

const items = [
  { label: 'Início', href: '#inicio' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Atual' },
];
const breadcrumb = 'uai-page-header >>> uai-breadcrumb >>>';
const control = (name: string) => `${breadcrumb} .breadcrumb__${name} >>> button`;

type EventWindow = Window & { breadcrumbEvents?: Array<Record<string, unknown>> };

const setup = async (attributes = '', actions = '') => {
  const page = await newE2EPage({
    html: `<meta charset="utf-8"><uai-theme-provider><uai-page-header title="Título primário" ${attributes}>${actions}</uai-page-header></uai-theme-provider>`,
  });
  const session = await page.target().createCDPSession();
  await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement, value) => (el.items = value), items);
  await page.waitForChanges();
  return page;
};

const replaceDraft = async (page: E2EPage, value: string) => {
  const input = await page.find(`${breadcrumb} uai-input >>> input`);
  await input.click();
  await page.$eval('uai-page-header', async (el) => {
    const field = el.shadowRoot.querySelector('uai-breadcrumb').shadowRoot.querySelector('uai-input');
    const native = await field.getInputElement();
    native.select();
  });
  await page.keyboard.press('Backspace');
  await input.type(value);
  await page.waitForChanges();
};

describe('uai-page-header integration', () => {
  it('uses title in primary even with items/editable, with a heading and no invented actions', async () => {
    const page = await setup('editable');
    expect(await page.find('uai-page-header >>> uai-breadcrumb')).toBeNull();
    expect(await page.evaluate(() => {
      const typo = document.querySelector('uai-page-header').shadowRoot.querySelector('uai-typo');
      const heading = typo.shadowRoot.querySelector('h1');
      const slot = heading?.querySelector('slot');
      return {
        heading: !!heading,
        text: slot?.assignedNodes({ flatten: true }).map((node) => node.textContent).join('').trim(),
      };
    })).toEqual({ heading: true, text: 'Título primário' });
    expect(await page.findAll('uai-page-header >>> uai-button')).toHaveLength(0);
    expect(await page.find('uai-page-header >>> .breadcrumb__edit')).toBeNull();
    expect(await page.evaluate(() =>
      document.querySelector('uai-page-header').shadowRoot.querySelector<HTMLSlotElement>('slot[name="actions"]')?.assignedElements().length || 0,
    )).toBe(0);
  });

  it('uses items in secondary, marks only the current item as a heading and forwards wrapItems', async () => {
    const page = await setup('level="secondary" editable');
    const current = await page.find(`${breadcrumb} [aria-current="page"]`);
    expect(current.textContent).toContain('Atual');
    const heading = await page.find(`${breadcrumb} [role="heading"]`);
    expect(heading.textContent).toContain('Atual');
    expect(heading.getAttribute('aria-level')).toBe('1');
    expect(await page.findAll(`${breadcrumb} [role="heading"]`)).toHaveLength(1);
    expect(await page.find(control('toggle'))).not.toBeNull();
    await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement) => (el.wrapItems = false));
    await page.waitForChanges();
    expect(await page.find(control('toggle'))).toBeNull();
    expect(await page.findAll(`${breadcrumb} a`)).toHaveLength(3);
    expect(await page.find(control('edit'))).not.toBeNull();
  });

  it('preserves the empty secondary breadcrumb rather than falling back to title', async () => {
    const page = await setup('level="secondary"');
    await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement) => {
      el.items = [];
      el.labels = { empty: 'Sem hierarquia' };
    });
    await page.waitForChanges();
    const empty = await page.find(`${breadcrumb} .breadcrumb__empty`);
    expect(empty.textContent).toContain('Sem hierarquia');
    expect(empty.textContent).not.toContain('Título primário');
    expect(await page.findAll(`${breadcrumb} a`)).toHaveLength(0);
    expect(await page.find(control('edit'))).toBeNull();
  });

  it('passes language and partial labels to the composed breadcrumb', async () => {
    const page = await setup('level="secondary" language="es_ES" editable');
    await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement) => (el.labels = { navigation: 'Ruta', edit: 'Renombrar página' }));
    await page.waitForChanges();
    const child = await page.find('uai-page-header >>> uai-breadcrumb');
    expect(await child.getProperty('language')).toBe('es_ES');
    expect(await child.getProperty('labels')).toEqual({ navigation: 'Ruta', edit: 'Renombrar página' });
    expect((await page.find(`${breadcrumb} nav`)).getAttribute('aria-label')).toBe('Ruta');
    expect((await page.find(control('edit'))).getAttribute('aria-label')).toBe('Renombrar página');
  });

  it('exposes click and edit once across both shadow boundaries without re-emitting them', async () => {
    const page = await setup('level="secondary" editable');
    const click = await page.spyOnEvent('uaiBreadcrumbItemClick');
    const edit = await page.spyOnEvent('uaiBreadcrumbItemEdit');
    await page.evaluate(() => {
      (window as EventWindow).breadcrumbEvents = [];
      for (const name of ['uaiBreadcrumbItemClick', 'uaiBreadcrumbItemEdit']) {
        document.addEventListener(name, (event: CustomEvent) => {
          (window as EventWindow).breadcrumbEvents.push({
            name, bubbles: event.bubbles, composed: event.composed,
            origin: (event.composedPath()[0] as HTMLElement).tagName,
          });
        });
      }
    });
    await (await page.find(control('toggle'))).click();
    await page.waitForChanges();
    await (await page.find(`${breadcrumb} .breadcrumb__panel a`)).click();
    await page.waitForChanges();
    expect(click).toHaveReceivedEventTimes(1);
    expect(click.lastEvent.detail).toEqual(items[1]);
    expect(new URL(page.url()).hash).toBe('#equipe');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, 'Novo título');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(edit).toHaveReceivedEventTimes(1);
    expect(edit.lastEvent.detail).toEqual({ index: 3, oldValue: 'Atual', value: 'Novo título' });
    expect(await page.evaluate(() => (window as EventWindow).breadcrumbEvents)).toEqual([
      { name: 'uaiBreadcrumbItemClick', bubbles: true, composed: true, origin: 'UAI-BREADCRUMB' },
      { name: 'uaiBreadcrumbItemEdit', bubbles: true, composed: true, origin: 'UAI-BREADCRUMB' },
    ]);
    expect(await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement) => el.items)).toEqual(items);
    await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement, value) => (el.items = value), [...items.slice(0, -1), { label: 'Novo título' }]);
    await page.waitForChanges();
    expect((await page.find(`${breadcrumb} [aria-current="page"]`)).textContent).toContain('Novo título');
    expect(edit).toHaveReceivedEventTimes(1);
  });

  it('preserves slotted UaiButton actions, listeners, disabled and loading while editing', async () => {
    const page = await setup('level="secondary" editable', `
      <uai-button id="save" slot="actions" icon-left="check" aria-label="Salvar página">Salvar</uai-button>
      <uai-button id="disabled" slot="actions" disabled>Indisponível</uai-button>
      <uai-button id="loading" slot="actions" loading>Carregando</uai-button>`);
    const save = await (await page.find('#save')).spyOnEvent('uaiClick');
    const disabled = await (await page.find('#disabled')).spyOnEvent('uaiClick');
    const loading = await (await page.find('#loading')).spyOnEvent('uaiClick');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, 'Rascunho');
    expect(await page.evaluate(() => {
      const header = document.querySelector('uai-page-header');
      return Array.from(header.shadowRoot.querySelector<HTMLSlotElement>('.header__actions slot').assignedElements()).map((el) => el.id);
    })).toEqual(['save', 'disabled', 'loading']);
    expect(await (await page.find('#disabled')).getProperty('disabled')).toBe(true);
    expect(await (await page.find('#loading')).getProperty('loading')).toBe(true);
    await (await page.find('#disabled >>> button')).click();
    await (await page.find('#loading >>> button')).click();
    await (await page.find('#save >>> button')).click();
    await page.waitForChanges();
    expect(disabled).toHaveReceivedEventTimes(0);
    expect(loading).toHaveReceivedEventTimes(0);
    expect(save).toHaveReceivedEventTimes(1);
    expect(await page.find(`${breadcrumb} uai-input`)).not.toBeNull();
    expect(await (await page.find(`${breadcrumb} uai-input >>> input`)).getProperty('value')).toBe('Rascunho');
  });

  it('cancels a stale nested editor when consumer items change', async () => {
    const page = await setup('level="secondary" editable');
    const edit = await page.spyOnEvent('uaiBreadcrumbItemEdit');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, 'Obsoleto');
    await page.$eval('uai-page-header', (el: HTMLUaiPageHeaderElement) => (el.items = [{ label: 'Outra página' }]));
    await page.waitForChanges();
    expect(await page.find(`${breadcrumb} uai-input`)).toBeNull();
    expect((await page.find(`${breadcrumb} [aria-current="page"]`)).textContent).toContain('Outra página');
    expect(edit).toHaveReceivedEventTimes(0);
  });
});
