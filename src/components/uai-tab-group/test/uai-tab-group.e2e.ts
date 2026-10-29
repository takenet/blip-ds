import { E2EPage, newE2EPage } from '@stencil/core/testing';

interface TabEventRecord {
  type: string;
  detail: string | { item: number; disable: boolean };
  itemElement: boolean;
  bubbles: boolean;
  composed: boolean;
  cancelable: boolean;
}

declare global {
  interface Window {
    tabEvents: TabEventRecord[];
  }
}

const items = `
  <uai-tab-item id="first" label="Resumo"><p>Conteúdo do resumo</p></uai-tab-item>
  <uai-tab-item id="disabled" label="Indisponível" disable><p>Conteúdo indisponível</p></uai-tab-item>
  <uai-tab-item id="last" label="Detalhes"><p>Conteúdo dos detalhes</p></uai-tab-item>`;

async function createGroup(content = items, attributes = '') {
  return newE2EPage({
    html: `<meta charset="UTF-8"><uai-theme-provider><button id="before">Antes</button>
      <uai-tab-group aria-label="Informações" ${attributes}>${content}</uai-tab-group>
      <button id="after">Depois</button></uai-theme-provider>`,
  });
}

async function observeEvents(page: E2EPage) {
  await page.evaluate(() => {
    window.tabEvents = [];
    for (const type of ['uaiTabChange', 'uaiTabDisabled', 'uaiDisabled']) {
      document.addEventListener(type, (event: CustomEvent) => {
        window.tabEvents.push({
          type,
          detail: event.detail instanceof HTMLElement ? event.detail.id : event.detail,
          itemElement: event.detail instanceof HTMLElement && event.detail.matches('uai-tab-item'),
          bubbles: event.bubbles,
          composed: event.composed,
          cancelable: event.cancelable,
        });
      });
    }
  });
}

async function events(page: E2EPage) {
  return page.evaluate(() => window.tabEvents);
}

async function state(page: E2EPage) {
  return page.evaluate(() => ({
    selected: Array.from(document.querySelectorAll('[role="tab"][aria-selected="true"]')).map(tab =>
      document.getElementById(tab.getAttribute('aria-controls')).id,
    ),
    open: Array.from(document.querySelectorAll('uai-tab-item')).filter(item => item.open).map(item => item.id),
    focused: document.activeElement?.getAttribute('aria-controls'),
    tabStops: document.querySelectorAll('[role="tab"][tabindex="0"]').length,
  }));
}

describe('uai-tab-group e2e — contrato w2-uai-tabs', () => {
  for (const [theme, background, selected] of [
    ['light', 'rgb(228, 230, 231)', 'rgb(255, 255, 255)'],
    ['dark', 'rgb(47, 52, 55)', 'rgb(36, 39, 41)'],
  ] as const) {
    it(`Tokens / ${theme}: fundo contrastante e seleção seguem o Intelligence`, async () => {
      const page = await createGroup();
      await page.evaluate(value => document.querySelector('uai-theme-provider').theme = value, theme);
      await page.waitForChanges();
      await page.waitForFunction(color =>
        getComputedStyle(document.querySelector('[aria-selected="true"]')).backgroundColor === color, {}, selected);
      expect(await page.evaluate(() => ({
        background: getComputedStyle(document.querySelector('.uai-tabs__navigation')).backgroundColor,
        selected: getComputedStyle(document.querySelector('[aria-selected="true"]')).backgroundColor,
        shadow: getComputedStyle(document.querySelector('[aria-selected="true"]')).boxShadow,
      }))).toEqual({
        background, selected, shadow: 'rgba(0, 0, 0, 0.1) 0px 1px 4px 0px',
      });
    });
  }

  for (const overflow of [false, true]) {
    it(`Tokens / sombra e foco sem recorte nas extremidades ${overflow ? 'com' : 'sem'} overflow`, async () => {
      const page = await createGroup(Array.from({ length: overflow ? 12 : 2 }, (_, index) =>
        `<uai-tab-item id="tab-${index}" label="Relatório ${index}">Painel ${index}</uai-tab-item>`,
      ).join(''), overflow ? 'style="display:block;width:320px"' : '');
      await page.focus('[role="tab"]');
      for (const key of ['End', 'Home']) {
        await page.keyboard.press(key);
        await page.keyboard.press('Enter');
        await page.waitForChanges();
        const bounds = await page.evaluate(() => {
          const tab = document.querySelector<HTMLElement>('[role="tab"]:focus');
          const rect = tab.getBoundingClientRect();
          const viewport = document.querySelector('.uai-tabs__viewport').getBoundingClientRect();
          const style = getComputedStyle(tab);
          const shadow = style.boxShadow.replace(/rgba?\([^)]+\)/, '').trim().split(/\s+/).map(parseFloat);
          const [x, y, blur, spread] = shadow;
          const focus = parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset);
          const extent = blur * 1.5 + spread;
          return {
            available: [rect.left - viewport.left, viewport.right - rect.right,
              rect.top - viewport.top, viewport.bottom - rect.bottom],
            required: [Math.max(focus, extent - x), Math.max(focus, extent + x),
              Math.max(focus, extent - y), Math.max(focus, extent + y)],
            height: document.querySelector('.uai-tabs__navigation').getBoundingClientRect().height,
            selected: tab.getAttribute('aria-selected'),
          };
        });
        expect(bounds.selected).toBe('true');
        expect(bounds.height).toBe(40);
        bounds.available.forEach((space, index) => expect(space + 1).toBeGreaterThanOrEqual(bounds.required[index]));
      }
    });
  }

  it('Contrato herdado / API e defaults: conserva props, reciveNumber e conteúdo do slot', async () => {
    const page = await createGroup();
    expect(await page.evaluate(() => {
      const group = document.querySelector('uai-tab-group');
      const item = document.querySelector('uai-tab-item');
      return {
        group: [group.align, group.contentScrollable, group.dtButtonPrev, group.dtButtonNext, group.language],
        item: [item.iconPosition, item.iconTheme, item.badge, item.badgeShape, item.badgeColor,
          item.badgeAnimation, item.badgePosition, item.badgeNumber, item.disable, item.error, item.iconOnly],
      };
    })).toEqual({
      group: ['center', true, null, null, 'pt_BR'],
      item: ['left', 'outline', false, 'circle', 'system', false, 'left', null, false, false, false],
    });
    await page.evaluate(async () => {
      const standalone = document.createElement('uai-tab-item');
      standalone.id = 'standalone';
      document.body.append(standalone);
      await standalone.componentOnReady();
      await standalone.reciveNumber(7);
    });
    await page.waitForChanges();
    expect(await page.evaluate(() => {
      const item = document.querySelector<HTMLUaiTabItemElement>('#standalone');
      return { number: item.numberElement, attribute: item.getAttribute('number-element') };
    })).toEqual({ number: 7, attribute: '7' });
    expect(await page.$eval('#first p', element => element.textContent)).toBe('Conteúdo do resumo');
    expect(await page.$eval('#first p', element => element.getBoundingClientRect().height > 0)).toBe(true);
    expect(await page.$eval('#last p', element => element.getBoundingClientRect().height > 0)).toBe(false);
  });

  it('Acessibilidade / nomes e relações: tablist light DOM e painéis ligados no mesmo document', async () => {
    const page = await createGroup(`
      <uai-tab-item id="first" label="Resumo" icon="info" icon-only><p>Resumo</p></uai-tab-item>
      <uai-tab-item id="last" label="Detalhes" aria-label="Detalhes completos"><p>Detalhes</p></uai-tab-item>`);
    expect(await page.evaluate(() => {
      const group = document.querySelector('uai-tab-group');
      const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
      return {
        lightDOM: group.shadowRoot === null,
        name: group.querySelector('[role="tablist"]').getAttribute('aria-label'),
        relationships: tabs.map(tab => {
          const panel = document.getElementById(tab.getAttribute('aria-controls'));
          return panel?.matches('uai-tab-item[role="tabpanel"]') &&
            panel.getAttribute('aria-labelledby') === tab.id && document.getElementById(tab.id) === tab;
        }),
        names: tabs.map(tab => tab.getAttribute('aria-label') || tab.textContent.trim()),
      };
    })).toEqual({
      lightDOM: true, name: 'Informações', relationships: [true, true], names: ['Resumo', 'Detalhes completos'],
    });
    await page.evaluate(() => {
      const title = document.createElement('h2');
      title.id = 'tabs-title';
      title.textContent = 'Relatórios';
      document.body.prepend(title);
      document.querySelector('uai-tab-group').ariaLabelledBy = title.id;
    });
    await page.waitForChanges();
    expect(await page.$eval('[role="tablist"]', element => element.getAttribute('aria-labelledby'))).toBe('tabs-title');
  });

  it('Eventos / seleção e reativação: clique emite uma vez com elemento e flags Stencil', async () => {
    const page = await createGroup();
    await observeEvents(page);
    for (let attempt = 0; attempt < 2; attempt++) {
      await page.click('[role="tab"][aria-controls="last"]');
      await page.waitForChanges();
    }
    expect((await state(page)).open).toEqual(['last']);
    expect(await events(page)).toEqual([0, 1].map(() => ({
      type: 'uaiTabChange', detail: 'last', itemElement: true, bubbles: true, composed: true, cancelable: true,
    })));
  });

  it('Eventos / tentativa desabilitada: anuncia aria-disabled e emite sem selecionar', async () => {
    const page = await createGroup();
    await observeEvents(page);
    expect(await page.$eval('[aria-controls="disabled"]', element => element.getAttribute('aria-disabled'))).toBe('true');
    await page.click('[role="tab"][aria-controls="disabled"]');
    await page.waitForChanges();
    expect((await state(page)).open).toEqual(['first']);
    expect(await events(page)).toEqual([{
      type: 'uaiTabDisabled', detail: 'disabled', itemElement: true, bubbles: true, composed: true, cancelable: true,
    }]);
  });

  it('Eventos / mudança de disponibilidade: uaiDisabled informa índice atual e não tentativa do grupo', async () => {
    const page = await createGroup();
    await observeEvents(page);
    await page.evaluate(() => {
      const item = document.querySelector<HTMLUaiTabItemElement>('#last');
      item.disable = true;
    });
    await page.waitForChanges();
    expect(await events(page)).toEqual([{
      type: 'uaiDisabled', detail: { item: 2, disable: true }, itemElement: false,
      bubbles: true, composed: true, cancelable: true,
    }]);
    expect((await state(page)).open).toEqual(['first']);
  });

  it('Acessibilidade / teclado sem ativação implícita: setas e Home/End circulam só habilitadas; Tab sai', async () => {
    const page = await createGroup();
    await observeEvents(page);
    await page.focus('[role="tab"][aria-controls="first"]');
    for (const [key, focused] of [
      ['ArrowRight', 'last'], ['ArrowRight', 'first'], ['ArrowLeft', 'last'],
      ['Home', 'first'], ['End', 'last'],
    ] as const) {
      await page.keyboard.press(key);
      await page.waitForChanges();
      expect(await state(page)).toEqual({ selected: ['first'], open: ['first'], focused, tabStops: 1 });
    }
    expect(await events(page)).toEqual([]);
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement.closest('[role="tablist"]'))).toBeNull();
  });

  it('Acessibilidade / teclado sem ativação implícita: Enter e Espaço ativam uma vez inclusive reativação', async () => {
    const page = await createGroup();
    await observeEvents(page);
    await page.focus('[role="tab"][aria-controls="last"]');
    for (const key of ['Enter', 'Space'] as const) {
      await page.keyboard.press(key);
      await page.waitForChanges();
      expect((await state(page)).open).toEqual(['last']);
    }
    expect((await events(page)).map(event => [event.type, event.detail])).toEqual([
      ['uaiTabChange', 'last'], ['uaiTabChange', 'last'],
    ]);
  });

  it('Acessibilidade / inicialização elegível: primeira habilitada sem open e sem ativação artificial', async () => {
    const page = await createGroup(`
      <uai-tab-item id="disabled" label="Indisponível" disable>Indisponível</uai-tab-item>
      <uai-tab-item id="first" label="Resumo">Resumo</uai-tab-item>
      <uai-tab-item id="last" label="Detalhes">Detalhes</uai-tab-item>`);
    expect(await state(page)).toMatchObject({ selected: ['first'], open: ['first'], tabStops: 1 });
    await observeEvents(page);
    await page.evaluate(() => document.querySelector<HTMLUaiTabItemElement>('#first').open = false);
    await page.waitForChanges();
    expect((await state(page)).open).toEqual(['first']);
    expect(await events(page)).toEqual([]);
  });

  it('Acessibilidade / inicialização elegível: vazio e inteiramente desabilitado não abrem painel', async () => {
    const page = await createGroup('<uai-tab-item id="disabled" label="Indisponível" disable open>Indisponível</uai-tab-item>');
    expect(await state(page)).toMatchObject({ selected: [], open: [], tabStops: 0 });
    expect(await page.$eval('#disabled', (element: HTMLElement) => element.hidden)).toBe(true);
    await page.evaluate(() => document.querySelector('#disabled').remove());
    await page.waitForChanges();
    expect(await state(page)).toMatchObject({ selected: [], open: [], tabStops: 0 });
  });

  it('Acessibilidade / normalização: múltiplas open escolhem primeira aberta habilitada', async () => {
    const page = await createGroup(`
      <uai-tab-item id="disabled" label="Indisponível" disable open>Indisponível</uai-tab-item>
      <uai-tab-item id="first" label="Resumo">Resumo</uai-tab-item>
      <uai-tab-item id="second" label="Atividade" open>Atividade</uai-tab-item>
      <uai-tab-item id="last" label="Detalhes" open>Detalhes</uai-tab-item>`);
    expect(await state(page)).toMatchObject({ selected: ['second'], open: ['second'], tabStops: 1 });
  });

  it('Acessibilidade / remoção e desabilitação da ativa: primeira restante sem uaiTabChange artificial', async () => {
    const page = await createGroup();
    await page.click('[role="tab"][aria-controls="last"]');
    await page.focus('[role="tab"][aria-controls="last"]');
    await observeEvents(page);
    await page.evaluate(() => document.querySelector<HTMLUaiTabItemElement>('#last').disable = true);
    await page.waitForChanges();
    expect(await state(page)).toMatchObject({ selected: ['first'], open: ['first'], tabStops: 1 });
    expect(await page.evaluate(() => document.activeElement.getAttribute('aria-disabled'))).not.toBe('true');
    await page.evaluate(() => {
      document.querySelector<HTMLUaiTabItemElement>('#last').disable = false;
      document.querySelector('#first').remove();
    });
    await page.waitForChanges();
    expect(await state(page)).toMatchObject({ selected: ['last'], open: ['last'], tabStops: 1 });
    expect((await events(page)).filter(event => event.type === 'uaiTabChange')).toEqual([]);
  });

  it('Atualização / prop open externa: sincroniza seleção, painel e roving tabindex sem evento do usuário', async () => {
    const page = await createGroup();
    await observeEvents(page);
    await page.evaluate(() => document.querySelector<HTMLUaiTabItemElement>('#last').open = true);
    await page.waitForChanges();
    expect(await state(page)).toMatchObject({ selected: ['last'], open: ['last'], tabStops: 1 });
    expect(await events(page)).toEqual([]);
  });

  it('Atualização / itens dinâmicos e grupos independentes: reindexa e atualiza props/slot sem duplicar eventos', async () => {
    const page = await createGroup();
    await page.evaluate(() => {
      const other = document.createElement('uai-tab-group');
      other.id = 'other';
      other.innerHTML = '<uai-tab-item id="other-first" label="Outro">Outro painel</uai-tab-item>';
      document.body.append(other);
      const item = document.createElement('uai-tab-item');
      item.id = 'added';
      item.label = 'Nova aba';
      item.innerHTML = '<p>Conteúdo inicial</p>';
      document.querySelector('uai-tab-group').append(item);
    });
    await page.waitForChanges();
    await page.waitForFunction(() => document.querySelector('[role="tab"][aria-controls="added"]'));
    await observeEvents(page);
    await page.click('[role="tab"][aria-controls="added"]');
    await page.evaluate(() => {
      const item = document.querySelector<HTMLUaiTabItemElement>('#added');
      item.label = 'Atualizada';
      item.error = true;
      item.icon = 'info';
      item.badge = true;
      item.badgeNumber = 0;
      item.innerHTML = '<p>Conteúdo atualizado</p>';
      document.querySelector('#disabled').remove();
    });
    await page.waitForChanges();
    expect(await page.$eval('[aria-controls="added"]', element => element.textContent)).toContain('Atualizada');
    expect(await page.$eval('[aria-controls="added"]', element => element.querySelectorAll('.uai-tabs__badge').length)).toBe(1);
    expect(await page.$eval('[aria-controls="added"]', element => element.getAttribute('aria-invalid'))).toBe('true');
    expect(await page.$eval('#added p', element => element.textContent)).toBe('Conteúdo atualizado');
    expect(await page.evaluate(() => Array.from(
      document.querySelector('uai-tab-group').querySelectorAll('uai-tab-item'),
    ).map(item => item.numberElement))).toEqual([0, 1, 2]);
    expect(await page.$eval('#other-first', (item: HTMLUaiTabItemElement) => item.open)).toBe(true);
    await page.click('[role="tab"][aria-controls="first"]');
    await page.click('[role="tab"][aria-controls="added"]');
    await page.waitForChanges();
    expect((await events(page)).filter(event => event.type === 'uaiTabChange').map(event => event.detail)).toEqual([
      'added', 'first', 'added',
    ]);
  });

  it('Contrato herdado / estilos herdados: headerStyle e contentStyle acompanham o item aberto', async () => {
    const page = await createGroup();
    await page.evaluate(() => {
      const first = document.querySelector<HTMLUaiTabItemElement>('#first');
      first.headerStyle = 'padding-top: var(--uai-spacing-sm)';
      first.contentStyle = 'padding-bottom: var(--uai-spacing-md)';
      const last = document.querySelector<HTMLUaiTabItemElement>('#last');
      last.headerStyle = 'padding-top: var(--uai-spacing-xs)';
      last.contentStyle = 'padding-bottom: var(--uai-spacing-lg)';
    });
    await page.waitForChanges();
    const styles = () => page.evaluate(() => Array.from(
      document.querySelector('uai-tab-group').querySelectorAll('[style]'),
    ).map(element => element.getAttribute('style')).join(';'));
    expect(await styles()).toContain('var(--uai-spacing-sm)');
    expect(await styles()).toContain('var(--uai-spacing-md)');
    await page.click('[role="tab"][aria-controls="last"]');
    await page.waitForChanges();
    expect(await styles()).toContain('var(--uai-spacing-xs)');
    expect(await styles()).toContain('var(--uai-spacing-lg)');
    expect(await styles()).not.toContain('var(--uai-spacing-md)');
  });

  it('Tokens / conteúdo adicional herdado: badge zero/999+, formas, cores e ícones sobrevivem à seleção', async () => {
    const shapes = ['circle', 'square', 'triangle', 'triangle-reverse', 'polygon'];
    const colors = ['system', 'danger', 'warning', 'success', 'neutral'];
    const page = await createGroup(shapes.map((shape, index) => `
      <uai-tab-item id="badge-${index}" label="Aba ${index}" icon="info"
        icon-position="${index % 2 ? 'right' : 'left'}" icon-theme="${index % 2 ? 'solid' : 'outline'}"
        badge badge-shape="${shape}" badge-color="${colors[index]}"
        badge-position="${index % 2 ? 'right' : 'left'}"
        ${index === 4 ? 'badge-icon="info"' : ''}>Painel ${index}</uai-tab-item>`).join(''));
    const geometry = () => page.evaluate(() => Array.from(document.querySelectorAll('[role="tab"]')).map(tab => {
      const badge = tab.querySelector('uai-badge');
      const shape = badge.shadowRoot.querySelector('.badge__shape');
      const label = tab.querySelector('uai-typo');
      const icon = tab.querySelector('uai-icon, bds-icon');
      return {
        color: getComputedStyle(shape).backgroundColor,
        shape: getComputedStyle(shape).clipPath,
        radius: getComputedStyle(shape).borderRadius,
        iconBeforeLabel: Boolean(icon.compareDocumentPosition(label) & Node.DOCUMENT_POSITION_FOLLOWING),
        badgeBeforeLabel: Boolean(badge.compareDocumentPosition(label) & Node.DOCUMENT_POSITION_FOLLOWING),
      };
    }));
    const initial = await geometry();
    for (let index = 0; index < shapes.length; index++) {
      const selector = `[role="tab"][aria-controls="badge-${index}"]`;
      await page.click(selector);
      await page.waitForChanges();
      expect(await page.$eval(selector, element => element.querySelectorAll('uai-icon, bds-icon').length)).toBeGreaterThan(0);
    }
    expect(await geometry()).toEqual(initial);
    expect(new Set(initial.map(badge => badge.color)).size).toBeGreaterThanOrEqual(4);
    expect(initial[0].radius).not.toBe(initial[1].radius);
    expect(new Set(initial.slice(2).map(badge => badge.shape)).size).toBe(3);
    expect(initial.map(badge => badge.iconBeforeLabel)).toEqual([true, false, true, false, true]);
    expect(initial.map(badge => badge.badgeBeforeLabel)).toEqual([true, false, true, false, true]);
    for (const [number, text] of [[0, ''], [998, '998'], [999, '999+'], [1000, '999+']] as const) {
      await page.evaluate(value => document.querySelector<HTMLUaiTabItemElement>('#badge-0').badgeNumber = value, number);
      await page.waitForChanges();
      expect(await page.$eval('[aria-controls="badge-0"] uai-badge', element =>
        element.shadowRoot.querySelector('uai-typo')?.textContent || '',
      )).toBe(text);
    }
  });

  it('Atualização / overflow e resize: controles dtButtonPrev/Next, limites e foco visível', async () => {
    const page = await createGroup(Array.from({ length: 12 }, (_, index) =>
      `<uai-tab-item id="tab-${index}" label="Relatório detalhado ${index}">Painel ${index}</uai-tab-item>`,
    ).join(''), 'dt-button-prev="previous-tabs" dt-button-next="next-tabs" style="display:block;width:320px"');
    const position = () => page.evaluate(() => {
      const group = document.querySelector('uai-tab-group');
      const track = [group, ...Array.from(group.querySelectorAll('*'))].find(element =>
        element.scrollWidth > element.clientWidth && ['auto', 'scroll'].includes(getComputedStyle(element).overflowX),
      );
      return track ? { left: track.scrollLeft, max: track.scrollWidth - track.clientWidth } : null;
    });
    await page.waitForFunction(() => Array.from(document.querySelectorAll<HTMLUaiButtonElement>('uai-tab-group uai-button')).some(
      control => control.dataTest === 'next-tabs',
    ));
    expect(await page.evaluate(() => Array.from(document.querySelectorAll<HTMLUaiButtonElement>('uai-tab-group uai-button')).map(
      control => control.dataTest,
    ))).toEqual(['previous-tabs', 'next-tabs']);
    expect((await position()).max).toBeGreaterThan(0);
    await page.click('uai-tab-group uai-button[aria-label="Próximas abas"]');
    await page.waitForFunction(() => {
      const group = document.querySelector('uai-tab-group');
      return [group, ...Array.from(group.querySelectorAll('*'))].some(element => element.scrollLeft > 0);
    });
    expect((await position()).left).toBeGreaterThan(0);
    await page.click('uai-tab-group uai-button[aria-label="Abas anteriores"]');
    await page.waitForFunction(() => {
      const group = document.querySelector('uai-tab-group');
      return [group, ...Array.from(group.querySelectorAll('*'))].every(element => element.scrollLeft === 0);
    });
    await page.waitForChanges();
    expect(await page.$eval('uai-tab-group uai-button[aria-label="Abas anteriores"]', (control: HTMLUaiButtonElement) => control.disabled)).toBe(true);
    await page.click('uai-tab-group uai-button[aria-label="Abas anteriores"]');
    expect((await position()).left).toBe(0);
    await page.focus('[role="tab"][aria-controls="tab-0"]');
    await page.keyboard.press('End');
    await page.waitForChanges();
    await page.waitForFunction(() => {
      const tab = document.activeElement;
      const bounds = tab.getBoundingClientRect();
      const group = tab.closest('uai-tab-group').getBoundingClientRect();
      return bounds.left >= group.left && bounds.right <= group.right;
    });
    const end = await position();
    expect(end.left).toBeLessThanOrEqual(end.max + 1);
    await page.evaluate(() => (document.querySelector('uai-tab-group') as HTMLElement).style.width = '280px');
    await page.waitForChanges();
    await page.keyboard.press('Home');
    await page.waitForFunction(() => {
      const tab = document.activeElement.getBoundingClientRect();
      const group = document.querySelector('uai-tab-group').getBoundingClientRect();
      return tab.left >= group.left && tab.right <= group.right;
    });
    expect((await position()).left).toBeGreaterThanOrEqual(0);
    await page.evaluate(() => (document.querySelector('uai-tab-group') as HTMLElement).style.width = '10000px');
    await page.waitForChanges();
    await page.waitForFunction(() => !Array.from(document.querySelectorAll<HTMLUaiButtonElement>('uai-tab-group uai-button')).some(element =>
      element.getBoundingClientRect().width > 0 && !element.hasAttribute('disabled') && !element.disabled,
    ));
  });

  it('Textos internos / idioma de navegação: pt_BR, en_US e es_ES sem alterar labels', async () => {
    const page = await createGroup(Array.from({ length: 8 }, (_, index) =>
      `<uai-tab-item label="Relatório ${index}">Painel ${index}</uai-tab-item>`,
    ).join(''), 'dt-button-prev="previous-tabs" dt-button-next="next-tabs" style="display:block;width:320px"');
    const names: string[][] = [];
    for (const language of ['pt_BR', 'en_US', 'es_ES'] as const) {
      await page.evaluate(value => document.querySelector<HTMLUaiTabGroupElement>('uai-tab-group').language = value, language);
      await page.waitForChanges();
      names.push(await page.evaluate(() => ['previous-tabs', 'next-tabs'].map(marker => {
        const control = Array.from(document.querySelectorAll<HTMLUaiButtonElement>('uai-tab-group uai-button')).find(
          element => element.dataTest === marker,
        );
        return control.getAttribute('aria-label') || control.ariaLabel;
      })));
      expect(await page.$eval('[role="tab"]', element => element.textContent)).toContain('Relatório 0');
    }
    expect(names.every(pair => pair.every(name => typeof name === 'string' && name.trim().length > 0))).toBe(true);
    expect(new Set(names.map(pair => pair.join('|'))).size).toBe(3);
    expect(names[0].join(' ')).toMatch(/anterior/i);
    expect(names[1].join(' ')).toMatch(/previous/i);
    expect(names[2].join(' ')).toMatch(/anterior/i);
  });

  it('Tokens / movimento reduzido: seleção, overflow e badgeAnimation sem animação contínua', async () => {
    const page = await createGroup(Array.from({ length: 8 }, (_, index) =>
      `<uai-tab-item id="motion-${index}" label="Relatório ${index}" badge badge-number="0" badge-animation>
        Painel ${index}</uai-tab-item>`,
    ).join(''), 'style="display:block;width:320px"');
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.focus('[role="tab"][aria-controls="motion-0"]');
    await page.keyboard.press('End');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect((await state(page)).open).toEqual(['motion-7']);
    expect(await page.evaluate(() => Array.from(document.querySelector('uai-tab-group').querySelectorAll('*')).every(element => {
      const style = getComputedStyle(element);
      return style.scrollBehavior !== 'smooth' &&
        style.transitionDuration.split(',').every(duration => parseFloat(duration) === 0) &&
        (style.animationName === 'none' || style.animationDuration.split(',').every(duration => parseFloat(duration) === 0));
    }))).toBe(true);
    expect(await page.evaluate(() => Array.from(document.querySelectorAll('uai-badge')).every(badge =>
      getComputedStyle(badge.shadowRoot.querySelector('.badge__pulse')).animationName === 'none',
    ))).toBe(true);
  });
});
