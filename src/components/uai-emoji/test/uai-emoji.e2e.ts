import { newE2EPage } from '@stencil/core/testing';

describe('uai-emoji e2e', () => {
  it('renders a known emoji from its SVG asset with its original graphic and colors', async () => {
    const page = await newE2EPage({
      html: '<uai-emoji name="smiling-face"></uai-emoji>',
    });
    await page.waitForFunction(() => Boolean(document.querySelector('uai-emoji')?.shadowRoot?.querySelector('svg')));

    const asset = await page.evaluate(() => {
      const host = document.querySelector('uai-emoji');
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

  it('does not render a broken image and warns once for an unknown emoji', async () => {
    const page = await newE2EPage();
    const warnings: string[] = [];
    const warning = new Promise<void>((resolve) => {
      page.on('console', (message) => {
        if (message.text().includes('[uai-emoji] Failed to load emoji')) resolve();
      });
    });
    page.on('console', (message) => {
      if (message.type() === 'warn' || message.type() === 'warning') warnings.push(message.text());
    });

    await page.setContent('<uai-emoji id="missing" name="not-an-emoji"></uai-emoji>');
    await page.waitForChanges();
    await page.evaluate(() => {
      document.querySelector('uai-emoji')?.setAttribute('aria-label', 'Unknown emoji');
    });
    await warning;
    await page.waitForChanges();

    const hasBrokenImage = await page.evaluate(() => {
      const host = document.querySelector('uai-emoji');
      const shadowRoot = host?.shadowRoot ?? host;
      return Boolean(shadowRoot?.querySelector('img[src], svg path, svg polygon, svg rect, svg circle'));
    });

    expect(hasBrokenImage).toBe(false);
    expect(warnings).toHaveLength(1);
    await page.close();
  });

  it('follows the host width and preserves the SVG viewBox aspect ratio', async () => {
    const page = await newE2EPage({
      html: '<uai-emoji name="smiling-face" style="display: block; width: 160px"></uai-emoji>',
    });
    await page.waitForFunction(() => Boolean(document.querySelector('uai-emoji')?.shadowRoot?.querySelector('svg')));

    const dimensions = await page.evaluate(() => {
      const host = document.querySelector('uai-emoji') as HTMLElement;
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
      html: '<uai-emoji name="smiling-face" aria-label="Smiling face"></uai-emoji>',
    });

    const semantics = await page.evaluate(() => {
      const host = document.querySelector('uai-emoji');
      return {
        role: host?.getAttribute('role'),
        label: host?.getAttribute('aria-label'),
        hidden: host?.getAttribute('aria-hidden'),
      };
    });

    expect(semantics).toEqual({ role: 'img', label: 'Smiling face', hidden: null });
  });

  it('hides a decorative emoji from assistive technology and keyboard focus by default', async () => {
    const page = await newE2EPage({
      html: '<button id="before">Before</button><uai-emoji name="smiling-face"></uai-emoji><button id="after">After</button>',
    });

    const semantics = await page.evaluate(() => {
      const host = document.querySelector('uai-emoji') as HTMLElement;
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
