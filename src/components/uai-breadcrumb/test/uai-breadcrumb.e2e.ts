import { E2EPage, newE2EPage } from '@stencil/core/testing';

const items: Array<{ label: string; href?: string }> = [
  { label: 'Início', href: '#inicio' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Atual', href: '#atual' },
];
type SubmissionWindow = Window & { submissions?: number };

const root = 'uai-breadcrumb >>>';
const control = (name: string) => `${root} .breadcrumb__${name} >>> button`;
const input = `${root} uai-input >>> input`;

const setup = async (attributes = '', values = items, form = false) => {
  const content = `<uai-breadcrumb ${attributes}></uai-breadcrumb><button id="outside" type="button">Fora</button>`;
  const page = await newE2EPage({
    html: `<uai-theme-provider>${form ? `<form><input name="record" value="42">${content}</form>` : content}</uai-theme-provider>`,
  });
  const session = await page.target().createCDPSession();
  await session.send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement, value) => (el.items = value), values);
  await page.evaluate(() => {
    (window as SubmissionWindow).submissions = 0;
    document.querySelector('form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      (window as SubmissionWindow).submissions++;
    });
  });
  await page.waitForChanges();
  return page;
};

const replaceDraft = async (page: E2EPage, value: string) => {
  const field = await page.find(input);
  await field.click();
  await page.$eval('uai-breadcrumb', async (el) => {
    const native = await el.shadowRoot.querySelector('uai-input').getInputElement();
    native.select();
  });
  await page.keyboard.press('Backspace');
  if (value) await field.type(value);
  await page.waitForChanges();
};

const nativeFocused = (page: E2EPage, selector: string) =>
  page.evaluate((sel: string) => {
    const shadow = document.querySelector('uai-breadcrumb').shadowRoot;
    const host = shadow.querySelector(sel);
    return shadow.activeElement === host && host.shadowRoot.activeElement === host.shadowRoot.querySelector('button');
  }, selector);

describe('uai-breadcrumb integration', () => {
  it.each([1, 2, 3, 4, 8])('collapses only above three items (%i levels)', async (count) => {
    const values = Array.from({ length: count }, (_, index) => ({ label: `Nível ${index}`, href: `#nivel-${index}` }));
    const page = await setup('', values);
    const visible = await page.evaluate(() =>
      Array.from(document.querySelector('uai-breadcrumb').shadowRoot.querySelectorAll('a'))
        .filter((link) => !link.closest('.breadcrumb__panel'))
        .map((link) => link.textContent.trim()),
    );
    expect(visible).toEqual(count > 3 ? [values[0].label, values[count - 1].label] : values.map((item) => item.label));
    const toggle = await page.find(`${root} .breadcrumb__toggle`);
    if (count > 3) {
      expect(toggle).not.toBeNull();
      await (await page.find(control('toggle'))).click();
      await page.waitForChanges();
      const links = await page.findAll(`${root} .breadcrumb__panel a`);
      expect(links.map((link) => link.textContent.trim())).toEqual(values.slice(1, -1).map((item) => item.label));
    } else {
      expect(toggle).toBeNull();
    }
    const current = await page.findAll(`${root} [aria-current="page"]`);
    expect(current).toHaveLength(1);
    expect(current[0].textContent.trim()).toBe(values[count - 1].label);
    expect(await page.findAll(`${root} .breadcrumb__separator`)).toHaveLength(count > 3 ? 2 : count - 1);
    expect(await page.find(`${root} [role="heading"]`)).toBeNull();
  });

  it('accepts JSON and native links, without inventing interaction for text items', async () => {
    const values = [items[0], { label: 'Sem link' }, items[2], { label: 'Texto atual' }];
    const page = await setup('', values);
    const host = await page.find('uai-breadcrumb');
    const click = await host.spyOnEvent('uaiBreadcrumbItemClick');
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement, value) => (el.items = JSON.stringify(value)), values);
    await page.waitForChanges();
    const current = await page.find(`${root} [aria-current="page"]`);
    expect(current.textContent.trim()).toBe('Texto atual');
    expect(current.getAttribute('href')).toBeNull();
    await current.click();
    expect(click).toHaveReceivedEventTimes(0);
    await (await page.find(control('toggle'))).click();
    await page.waitForChanges();
    const panel = await page.find(`${root} .breadcrumb__panel`);
    expect(panel.tagName).toBe('DIV');
    expect(await page.find(`${root} .breadcrumb__panel ul`)).not.toBeNull();
    expect(await page.find(`${root} [role="menu"]`)).toBeNull();
    expect(panel.textContent).toContain('Sem link');
    expect(await page.findAll(`${root} .breadcrumb__panel a`)).toHaveLength(1);
    await (await page.find(`${root} .breadcrumb__panel a`)).click();
    await page.waitForChanges();
    expect(click).toHaveReceivedEventTimes(1);
    expect(click.lastEvent.detail).toEqual(items[2]);
    expect(new URL(page.url()).hash).toBe('#projetos');
  });

  it('keeps the current item a native link and emits once on activation', async () => {
    const page = await setup('', items.slice(0, 3));
    const click = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemClick');
    const current = await page.find(`${root} a[aria-current="page"]`);
    expect(current.getAttribute('href')).toBe('#projetos');
    await current.click();
    await page.waitForChanges();
    expect(click).toHaveReceivedEventTimes(1);
    expect(click.lastEvent.detail).toEqual(items[2]);
    expect(new URL(page.url()).hash).toBe('#projetos');
  });

  it('recomputes collapse and removes an open overlay on runtime changes', async () => {
    const page = await setup('wrap-items');
    await (await page.find(control('toggle'))).click();
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.wrapItems = false));
    await page.waitForChanges();
    expect(await page.find(`${root} .breadcrumb__toggle`)).toBeNull();
    expect(await page.findAll(`${root} a`)).toHaveLength(4);
    expect(await page.find(`${root} .uai-overlay--open`)).toBeNull();
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.wrapItems = true));
    await page.waitForChanges();
    await (await page.find(control('toggle'))).click();
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement, value) => (el.items = value), items.slice(0, 2));
    await page.waitForChanges();
    expect(await page.find(`${root} .breadcrumb__toggle`)).toBeNull();
    expect(await page.findAll(`${root} a`)).toHaveLength(2);
    await page.keyboard.press('Escape');
    await page.click('#outside');
    expect(await page.$eval('#outside', (el) => document.activeElement === el)).toBe(true);
  });

  it('honors wrap-items="false" in HTML', async () => {
    const page = await setup('wrap-items="false"');
    expect(await page.find(`${root} .breadcrumb__toggle`)).toBeNull();
    expect(await page.findAll(`${root} a`)).toHaveLength(4);
  });

  it('uses token padding on links and changes only the background on hover', async () => {
    const page = await setup('wrap-items="false"');
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const measure = () =>
      page.evaluate(() => {
        const shadow = document.querySelector('uai-breadcrumb').shadowRoot;
        const probe = document.createElement('span');
        probe.style.padding = 'var(--uai-spacing-2xs) var(--uai-spacing-xs)';
        shadow.appendChild(probe);
        const tokens = getComputedStyle(probe);
        const expected = { vertical: tokens.paddingTop, horizontal: tokens.paddingLeft };
        probe.remove();
        const link = shadow.querySelector('.breadcrumb__link');
        const style = getComputedStyle(link);
        const box = (element: Element) => {
          const { top, left, width, height } = element.getBoundingClientRect();
          return { top, left, width, height };
        };
        return {
          expected,
          padding: [style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft],
          background: style.backgroundColor,
          boxes: Array.from(shadow.querySelectorAll('.breadcrumb__item, .breadcrumb__link')).map(box),
        };
      });
    const before = await measure();
    expect(parseFloat(before.expected.vertical)).toBeGreaterThan(0);
    expect(parseFloat(before.expected.horizontal)).toBeGreaterThan(parseFloat(before.expected.vertical));
    expect(before.padding).toEqual([
      before.expected.vertical,
      before.expected.horizontal,
      before.expected.vertical,
      before.expected.horizontal,
    ]);
    await (await page.find(`${root} .breadcrumb__link`)).hover();
    await page.waitForChanges();
    const after = await measure();
    expect(after.background).not.toBe(before.background);
    expect(after.padding).toEqual(before.padding);
    expect(after.boxes).toEqual(before.boxes);
  });

  it('aligns mixed link and text items in the popup without turning text into a link', async () => {
    const values = [
      items[0],
      { label: 'Equipe', href: '#equipe' },
      { label: 'Sem link' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Outro texto' },
      items[3],
      { label: 'Atual' },
    ];
    const page = await setup('', values);
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await (await page.find(control('toggle'))).click();
    await page.waitForChanges();
    const measure = () =>
      page.evaluate(() => {
        const shadow = document.querySelector('uai-breadcrumb').shadowRoot;
        return Array.from(shadow.querySelectorAll('.breadcrumb__panel li')).map((row) => {
          const label = row.querySelector('.breadcrumb__link, .breadcrumb__text');
          const range = document.createRange();
          range.selectNodeContents(label);
          const text = range.getBoundingClientRect();
          const box = label.getBoundingClientRect();
          return {
            link: label.tagName === 'A',
            anchors: row.querySelectorAll('a').length,
            textLeft: text.left,
            labelLeft: box.left,
            labelWidth: box.width,
            labelHeight: box.height,
            rowHeight: row.getBoundingClientRect().height,
            background: getComputedStyle(label).backgroundColor,
          };
        });
      });
    const rows = await measure();
    const links = rows.filter((row) => row.link);
    const texts = rows.filter((row) => !row.link);
    expect(links.length).toBeGreaterThan(0);
    expect(texts.length).toBeGreaterThan(0);
    texts.forEach((row) => expect(row.anchors).toBe(0));
    rows.forEach((row) => {
      expect(row.textLeft).toBeCloseTo(rows[0].textLeft, 0);
      expect(row.labelLeft).toBeCloseTo(rows[0].labelLeft, 0);
      expect(row.labelWidth).toBeCloseTo(rows[0].labelWidth, 0);
      expect(row.labelHeight).toBeCloseTo(rows[0].labelHeight, 0);
      expect(row.rowHeight).toBeCloseTo(rows[0].rowHeight, 0);
    });
    await (await page.find(`${root} .breadcrumb__panel .breadcrumb__text`)).hover();
    await page.waitForChanges();
    const hovered = await measure();
    const textIndex = rows.findIndex((row) => !row.link);
    expect(hovered[textIndex].background).toBe(rows[textIndex].background);
  });

  it('opens the overlay by keyboard, tabs to native links and restores native toggle focus on Escape', async () => {
    const page = await setup();
    const nav = await page.find(`${root} nav`);
    expect(nav.getAttribute('aria-label')).toBeTruthy();
    const toggle = await page.find(control('toggle'));
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await nativeFocused(page, '.breadcrumb__toggle')).toBe(true);
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect((await page.find(control('toggle'))).getAttribute('aria-expanded')).toBe('true');
    expect(await page.find(`${root} .breadcrumb__panel.uai-overlay--open`)).not.toBeNull();
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => {
      const shadow = document.querySelector('uai-breadcrumb').shadowRoot;
      return shadow.activeElement?.matches('.breadcrumb__panel a') === true;
    })).toBe(true);
    await page.keyboard.press('Escape');
    await page.waitForChanges();
    expect(await page.find(`${root} .uai-overlay--open`)).toBeNull();
    expect((await page.find(control('toggle'))).getAttribute('aria-expanded')).toBe('false');
    expect(await nativeFocused(page, '.breadcrumb__toggle')).toBe(true);
    await page.keyboard.press('Space');
    await page.waitForChanges();
    await page.click('#outside');
    await page.waitForChanges();
    expect(await page.find(`${root} .uai-overlay--open`)).toBeNull();
  });

  it('makes editing opt-in and separates it from native navigation', async () => {
    const page = await setup();
    expect(await page.find(`${root} .breadcrumb__edit`)).toBeNull();
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.editable = true));
    await page.waitForChanges();
    const click = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemClick');
    await (await page.find(control('edit'))).click();
    await page.waitForChanges();
    expect(click).toHaveReceivedEventTimes(0);
    expect(new URL(page.url()).hash).toBe('');
    expect(await page.evaluate(() => {
      const field = document.querySelector('uai-breadcrumb').shadowRoot.querySelector('uai-input');
      return field.shadowRoot.activeElement === field.shadowRoot.querySelector('input');
    })).toBe(true);
  });

  it.each([
    ['normal', 1280],
    ['narrow', 360],
  ])('keeps input, confirm and cancel on one non-overlapping row in a %s viewport', async (_name, width) => {
    const page = await setup('editable', [...items.slice(0, -1), { label: 'Relatório de acompanhamento das conversas', href: '#atual' }]);
    await page.setViewport({ width, height: 720 });
    await page.waitForChanges();
    await (await page.find(control('edit'))).click();
    await page.waitForChanges();
    const geometry = await page.evaluate(() => {
      const shadow = document.querySelector('uai-breadcrumb').shadowRoot;
      const rect = (selector: string) => {
        const { top, right, bottom, left } = shadow.querySelector(selector).getBoundingClientRect();
        return { top, right, bottom, left };
      };
      return { input: rect('uai-input'), confirm: rect('.breadcrumb__confirm'), cancel: rect('.breadcrumb__cancel'), viewport: window.innerWidth };
    });
    const { input: field, confirm, cancel, viewport } = geometry;
    for (const action of [confirm, cancel]) {
      expect(action.top).toBeLessThan(field.bottom);
      expect(action.bottom).toBeGreaterThan(field.top);
    }
    expect(confirm.left).toBeGreaterThanOrEqual(field.right);
    expect(cancel.left).toBeGreaterThanOrEqual(confirm.right);
    expect(field.left).toBeGreaterThanOrEqual(0);
    expect(cancel.right).toBeLessThanOrEqual(viewport);
  });

  it('confirms Enter once with original index and spaces, without mutating items or submitting a consumer form', async () => {
    const page = await setup('editable', items, true);
    const edit = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemEdit');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, '  Novo nome  ');
    expect(await page.$eval('form', (el: HTMLFormElement) => [...new FormData(el).entries()])).toEqual([['record', '42']]);
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(edit).toHaveReceivedEventTimes(1);
    expect(edit.lastEvent.detail).toEqual({ index: 3, oldValue: 'Atual', value: '  Novo nome  ' });
    expect(await page.find(`${root} uai-input`)).toBeNull();
    expect(await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => el.items)).toEqual(items);
    expect(await page.evaluate(() => (window as SubmissionWindow).submissions)).toBe(0);
  });

  it.each(['Escape', 'cancel'])('discards the draft through %s and restores edit-button focus', async (action) => {
    const page = await setup('editable');
    const edit = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemEdit');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, 'Descartar');
    if (action === 'Escape') await page.keyboard.press('Escape');
    else await (await page.find(control('cancel'))).click();
    await page.waitForChanges();
    expect(edit).toHaveReceivedEventTimes(0);
    expect(await page.find(`${root} uai-input`)).toBeNull();
    expect(await nativeFocused(page, '.breadcrumb__edit')).toBe(true);
    await (await page.find(control('edit'))).click();
    await page.waitForChanges();
    expect(await (await page.find(input)).getProperty('value')).toBe('Atual');
  });

  it('keeps the draft on blur and ignores Enter during IME composition', async () => {
    const page = await setup('editable', items, true);
    const edit = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemEdit');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, '編集中');
    await page.click('#outside');
    await page.waitForChanges();
    expect(await (await page.find(input)).getProperty('value')).toBe('編集中');
    await page.evaluate(() => {
      const field = document.querySelector('uai-breadcrumb').shadowRoot.querySelector('uai-input').shadowRoot.querySelector('input');
      field.focus();
      field.dispatchEvent(new CompositionEvent('compositionstart', { bubbles: true, composed: true }));
      field.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, composed: true, cancelable: true }));
      field.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, composed: true }));
    });
    await page.waitForChanges();
    expect(edit).toHaveReceivedEventTimes(0);
    expect(await page.find(input)).not.toBeNull();
    expect(await page.evaluate(() => (window as SubmissionWindow).submissions)).toBe(0);
    await (await page.find(control('confirm'))).click();
    await page.waitForChanges();
    expect(edit).toHaveReceivedEventTimes(1);
  });

  it.each(['', '   '])('rejects an empty draft (%j) with accessible feedback', async (value) => {
    const page = await setup('editable');
    const edit = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemEdit');
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, value);
    await (await page.find(control('confirm'))).click();
    await page.waitForChanges();
    expect(edit).toHaveReceivedEventTimes(0);
    const field = await page.find(input);
    expect(field).not.toBeNull();
    expect(field.getAttribute('aria-invalid')).toBe('true');
    expect(field.getAttribute('aria-describedby')).toBeTruthy();
  });

  it('closes unchanged confirmation without emitting and cancels editing when items change', async () => {
    const page = await setup('editable');
    const edit = await (await page.find('uai-breadcrumb')).spyOnEvent('uaiBreadcrumbItemEdit');
    await (await page.find(control('edit'))).click();
    await (await page.find(control('confirm'))).click();
    await page.waitForChanges();
    expect(await page.find(`${root} uai-input`)).toBeNull();
    expect(edit).toHaveReceivedEventTimes(0);
    await (await page.find(control('edit'))).click();
    await replaceDraft(page, 'Obsoleto');
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.items = [{ label: 'Atualizado' }]));
    await page.waitForChanges();
    expect(await page.find(`${root} uai-input`)).toBeNull();
    expect((await page.find(`${root} [aria-current="page"]`)).textContent).toContain('Atualizado');
    expect(edit).toHaveReceivedEventTimes(0);
  });

  it.each(['pt_BR', 'en_US', 'es_ES'])('supports %s and partial label overrides', async (language) => {
    const page = await setup(`editable language="${language}"`);
    const original = (await page.find(control('edit'))).getAttribute('aria-label');
    expect(original).toBe({ pt_BR: 'Editar nome', en_US: 'Edit name', es_ES: 'Editar nombre' }[language]);
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.labels = { navigation: 'Trilha personalizada' }));
    await page.waitForChanges();
    expect((await page.find(`${root} nav`)).getAttribute('aria-label')).toBe('Trilha personalizada');
    expect((await page.find(control('edit'))).getAttribute('aria-label')).toBe(original);
  });

  it('uses all label overrides for the popup, editor, validation and empty state', async () => {
    const page = await setup('editable');
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.labels = {
      navigation: 'Trilha',
      hiddenItems: 'Outros níveis',
      edit: 'Renomear',
      input: 'Nome atual',
      confirm: 'Aplicar',
      cancel: 'Descartar',
      required: 'Preencha o nome.',
      empty: 'Nenhuma página.',
    }));
    await page.waitForChanges();
    expect((await page.find(control('toggle'))).getAttribute('aria-label')).toBe('Outros níveis');
    expect((await page.find(control('edit'))).getAttribute('aria-label')).toBe('Renomear');
    await (await page.find(control('edit'))).click();
    await page.waitForChanges();
    expect((await page.find(input)).getAttribute('aria-label')).toBe('Nome atual');
    expect((await page.find(control('confirm'))).getAttribute('aria-label')).toBe('Aplicar');
    expect((await page.find(control('cancel'))).getAttribute('aria-label')).toBe('Descartar');
    await replaceDraft(page, '');
    await (await page.find(control('confirm'))).click();
    await page.waitForChanges();
    expect((await page.find(`${root} uai-input >>> .input__message`)).textContent).toBe('Preencha o nome.');
    await page.$eval('uai-breadcrumb', (el: HTMLUaiBreadcrumbElement) => (el.items = []));
    await page.waitForChanges();
    expect((await page.find(`${root} .breadcrumb__empty`)).textContent).toBe('Nenhuma página.');
  });

  it('disables overlay transitions when reduced motion is requested', async () => {
    const page = await setup();
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await (await page.find(control('toggle'))).click();
    await page.waitForChanges();
    expect(await page.evaluate(() =>
      getComputedStyle(document.querySelector('uai-breadcrumb').shadowRoot.querySelector('.breadcrumb__panel')).transitionDuration,
    )).toBe('0s');
  });
});
