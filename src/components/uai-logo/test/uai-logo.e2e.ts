import { newE2EPage } from '@stencil/core/testing';

describe('uai-logo e2e', () => {
  it('renders a known logo from its SVG asset with its original graphic and colors', async () => {
    const page = await newE2EPage({
      html: '<uai-logo name="blip-chat"></uai-logo>',
    });
    await page.waitForFunction(() => Boolean(document.querySelector('uai-logo')?.shadowRoot?.querySelector('svg')));

    const asset = await page.evaluate(() => {
      const host = document.querySelector('uai-logo');
      const svg = (host?.shadowRoot ?? host)?.querySelector('svg');
      return {
        hasSvg: Boolean(svg),
        hasGraphic: Boolean(svg?.querySelector('path, polygon, rect, circle, ellipse, line, polyline')),
        fills: Array.from(svg?.querySelectorAll('[fill]') ?? []).map((element) => element.getAttribute('fill')),
      };
    });

    expect(asset.hasSvg).toBe(true);
    expect(asset.hasGraphic).toBe(true);
    expect(asset.fills.some((fill) => fill && fill !== 'currentColor')).toBe(true);
  });

  it('does not render a broken image and warns once for an unknown logo', async () => {
    const page = await newE2EPage();
    const warnings: string[] = [];
    const warning = new Promise<void>((resolve) => {
      page.on('console', (message) => {
        if (message.text().includes('[uai-logo] Failed to load logo')) resolve();
      });
    });
    page.on('console', (message) => {
      if (message.type() === 'warn' || message.type() === 'warning') warnings.push(message.text());
    });

    await page.setContent('<uai-logo id="missing" name="not-a-logo"></uai-logo>');
    await page.waitForChanges();
    await page.evaluate(() => {
      document.querySelector('uai-logo')?.setAttribute('aria-label', 'Unknown logo');
    });
    await warning;
    await page.waitForChanges();

    const hasBrokenImage = await page.evaluate(() => {
      const host = document.querySelector('uai-logo');
      const shadowRoot = host?.shadowRoot ?? host;
      return Boolean(shadowRoot?.querySelector('img[src], svg path, svg polygon, svg rect, svg circle'));
    });

    expect(hasBrokenImage).toBe(false);
    expect(warnings).toHaveLength(1);
    await page.close();
  });

  it('follows the host width and preserves the SVG viewBox aspect ratio', async () => {
    const page = await newE2EPage({
      html: '<uai-logo name="blip-chat" style="display: block; width: 160px"></uai-logo>',
    });
    await page.waitForFunction(() => Boolean(document.querySelector('uai-logo')?.shadowRoot?.querySelector('svg')));

    const dimensions = await page.evaluate(() => {
      const host = document.querySelector('uai-logo') as HTMLElement;
      const svg = (host.shadowRoot ?? host).querySelector('svg');
      const hostWidth = host.getBoundingClientRect().width;
      const svgBounds = svg?.getBoundingClientRect();
      const viewBox = svg?.viewBox.baseVal;
      return {
        hostWidth,
        svgWidth: svgBounds?.width ?? 0,
        svgHeight: svgBounds?.height ?? 0,
        viewBoxRatio: viewBox && viewBox.width > 0 ? viewBox.height / viewBox.width : 0,
      };
    });

    expect(dimensions.svgWidth).toBeCloseTo(dimensions.hostWidth);
    expect(dimensions.svgHeight / dimensions.svgWidth).toBeCloseTo(dimensions.viewBoxRatio, 2);
  });

  it('exposes an accessible name when aria-label is provided', async () => {
    const page = await newE2EPage({
      html: '<uai-logo name="blip-chat" aria-label="Blip"></uai-logo>',
    });

    const semantics = await page.evaluate(() => {
      const host = document.querySelector('uai-logo');
      return {
        role: host?.getAttribute('role'),
        label: host?.getAttribute('aria-label'),
        hidden: host?.getAttribute('aria-hidden'),
      };
    });

    expect(semantics).toEqual({ role: 'img', label: 'Blip', hidden: null });
  });

  it('hides a decorative logo from assistive technology and keyboard focus by default', async () => {
    const page = await newE2EPage({
      html: '<button id="before">Before</button><uai-logo name="blip-chat"></uai-logo><button id="after">After</button>',
    });

    const semantics = await page.evaluate(() => {
      const host = document.querySelector('uai-logo') as HTMLElement;
      return {
        hidden: host.getAttribute('aria-hidden'),
        tabIndex: host.tabIndex,
        interactiveContent: Boolean(host.shadowRoot?.querySelector('button, a[href]')),
      };
    });

    expect(semantics).toEqual({ hidden: 'true', tabIndex: -1, interactiveContent: false });

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement?.id)).toBe('after');
  });
});
