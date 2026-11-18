import { test, expect, Page } from '@playwright/test';
import { existsSync, statSync } from 'node:fs';
import { extname, resolve, sep } from 'node:path';

// A page with two copies of blip-ds, as when a scoped app (MFE) runs inside the Portal: the Portal registers the plain
// names through the lazy loader, and the app registers its own build under its tag prefix. The page is served straight
// from the build output (dist and loader), so no Storybook is involved.
const ORIGIN = 'http://blip-ds.test';
const ROOT = resolve(__dirname, '../../..');
const TYPES: Record<string, string> = { '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };

const PORTAL_PAGE = `<!doctype html>
<html>
  <head>
    <!-- The Portal declares the global icon font of an older blip-tokens release under the shared "uai-icon" name. -->
    <style>@font-face { font-family: "uai-icon"; src: url("${ORIGIN}/old-uai-icon.woff2") format("woff2"); }</style>
  </head>
  <body>
    <uai-button id="portal-button">Portal</uai-button>
    <div id="app"></div>
    <script type="module">
      import { defineCustomElements } from '/loader/index.js';
      await defineCustomElements();
      window.portalReady = true;
    </script>
  </body>
</html>`;

const serve = async (page: Page, html: string) => {
  await page.route(`${ORIGIN}/**`, async (route) => {
    const { pathname } = new URL(route.request().url());
    if (pathname === '/' || pathname === '/index.html') return route.fulfill({ contentType: 'text/html', body: html });
    const file = resolve(ROOT, `.${pathname}`);
    if (!file.startsWith(ROOT + sep) || !existsSync(file) || !statSync(file).isFile())
      return route.fulfill({ status: 404 });
    return route.fulfill({ path: file, contentType: TYPES[extname(file)] || 'application/octet-stream' });
  });
  // Keep the test offline: fonts and design assets from the CDN are not needed for these checks.
  await page.route('https://cdn.blip.ai/**', (route) => route.fulfill({ status: 404 }));
  await page.goto(`${ORIGIN}/`);
};

const COMPONENTS = [
  'uai-button',
  'uai-button-group',
  'uai-icon',
  'uai-radio',
  'uai-radio-group',
  'uai-select',
  'uai-select-option',
  'uai-tab-group',
  'uai-tab-item',
];

// Scopes the tags, defines the components of the app and renders them under the prefix. Returns the prefix.
const startScopedApp = (page: Page) =>
  page.evaluate(async (components) => {
    const { scopeTags } = await import('/dist/components/index.js' as string);
    const prefix: string = scopeTags();
    for (const name of components) (await import(`/dist/components/${name}.js`)).defineCustomElement();
    const t = (tag: string) => `${prefix}-${tag}`;
    document.getElementById('app').innerHTML = `
      <${t('uai-button-group')} id="group" label="Alinhamento">
        <${t('uai-button')} id="g1">Um</${t('uai-button')}>
        <${t('uai-button')} id="g2">Dois</${t('uai-button')}>
      </${t('uai-button-group')}>
      <${t('uai-radio-group')} id="radios" value="b" aria-label="Opções">
        <${t('uai-radio')} id="ra" value="a" label="A"></${t('uai-radio')}>
        <${t('uai-radio')} id="rb" value="b" label="B"></${t('uai-radio')}>
      </${t('uai-radio-group')}>
      <${t('uai-select')} id="select" label="Número" value="2">
        <${t('uai-select-option')} value="1">Um</${t('uai-select-option')}>
        <${t('uai-select-option')} value="2">Dois</${t('uai-select-option')}>
      </${t('uai-select')}>
      <${t('uai-tab-group')} id="tabs" aria-label="Abas">
        <${t('uai-tab-item')} label="Primeira">Conteúdo 1</${t('uai-tab-item')}>
        <${t('uai-tab-item')} label="Segunda">Conteúdo 2</${t('uai-tab-item')}>
      </${t('uai-tab-group')}>
      <${t('uai-icon')} id="icon" name="info"></${t('uai-icon')}>`;
    await Promise.all(
      Array.from(document.getElementById('app').querySelectorAll('*'))
        .filter((element) => element.localName.startsWith(prefix))
        .map((element) =>
          (element as HTMLElement & { componentOnReady?: () => Promise<unknown> }).componentOnReady?.(),
        ),
    );
    return prefix;
  }, COMPONENTS);

test.describe('Scoped tags', () => {
  test('a scoped app runs its own build next to the plain names registered by the page', async ({ page }) => {
    await serve(page, PORTAL_PAGE);
    await page.waitForFunction(
      () => (window as any).portalReady && !!document.getElementById('portal-button').shadowRoot,
    );
    const prefix = await startScopedApp(page);
    expect(prefix).toMatch(/^ds-[0-9a-f]{8}$/);

    // Both copies are registered, each under its own name and with its own class.
    const registry = await page.evaluate(
      ({ prefix, components }) =>
        components.map((name) => ({
          name,
          plain: !!customElements.get(name),
          scoped: !!customElements.get(`${prefix}-${name}`),
          distinct: customElements.get(name) !== customElements.get(`${prefix}-${name}`),
        })),
      { prefix, components: COMPONENTS },
    );
    for (const entry of registry)
      expect(entry).toEqual({ name: entry.name, plain: true, scoped: true, distinct: true });

    // The Portal component keeps working under the plain name.
    await expect(page.locator('#portal-button')).toHaveJSProperty('variant', 'solid');
  });

  test('scoped components find their children and get their styles under the prefix', async ({ page }) => {
    await serve(page, PORTAL_PAGE);
    await page.waitForFunction(() => (window as any).portalReady);
    const prefix = await startScopedApp(page);

    // uai-radio-group reads its radios (closest and isTag): the value selects the matching radio.
    await expect(page.locator('#rb')).toHaveJSProperty('checked', true);
    await expect(page.locator('#ra')).toHaveJSProperty('checked', false);

    // uai-select reads its slotted options (querySelectorAll): the selected label is shown.
    await expect(page.locator('#select')).toContainText('Dois');

    // uai-tab-group renders one tab per item (isTag), also for an item added later (MutationObserver).
    const tabs = page.locator('#tabs').locator('[role="tab"]');
    await expect(tabs).toHaveCount(2);
    await page.evaluate((tag) => {
      const item = document.createElement(tag);
      item.setAttribute('label', 'Terceira');
      document.getElementById('tabs').appendChild(item);
    }, `${prefix}-uai-tab-item`);
    await expect(tabs).toHaveCount(3);

    // uai-button-group styles its slotted buttons (::slotted with the prefixed tag): a divider before the second one.
    const divider = await page.locator('#g2').evaluate((element) => getComputedStyle(element).borderLeftWidth);
    expect(divider).toBe('1px');
  });

  test('scoped icons use the font of their own blip-tokens release, not the "uai-icon" font of the page', async ({
    page,
  }) => {
    await serve(page, PORTAL_PAGE);
    await page.waitForFunction(() => (window as any).portalReady);
    await startScopedApp(page);

    const icon = await page.locator('#icon').evaluate((host) => {
      const glyph = host.shadowRoot.querySelector('.uai-icon');
      const families = Array.from(document.fonts as unknown as Iterable<FontFace>).map((face) =>
        face.family.replace(/^["']|["']$/g, ''),
      );
      return { fontFamily: getComputedStyle(glyph).fontFamily, families };
    });
    const versioned = icon.fontFamily
      .split(',')[0]
      .trim()
      .replace(/^["']|["']$/g, '');
    expect(versioned).toMatch(/^uai-icon-\d+-\d+-\d+/);
    expect(icon.families).toContain(versioned);
  });

  test('without scopeTags the components keep their plain names', async ({ page }) => {
    await serve(page, '<!doctype html><html><body><div id="app"></div></body></html>');
    const result = await page.evaluate(async () => {
      const runtime = await import('/dist/components/index.js' as string);
      (await import('/dist/components/uai-button.js' as string)).defineCustomElement();
      return {
        plain: !!customElements.get('uai-button'),
        transformed: runtime.transformTag('uai-button'),
        scope: runtime.getTagScope() ?? null,
      };
    });
    expect(result).toEqual({ plain: true, transformed: 'uai-button', scope: null });
  });
});
