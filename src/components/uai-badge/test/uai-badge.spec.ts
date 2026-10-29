import { newSpecPage } from '@stencil/core/testing';
import { Build } from '@stencil/core';
import { UaiBadge } from '../uai-badge';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (attributes = '') =>
  newSpecPage({
    components: [UaiBadge],
    html: `<uai-badge ${attributes}></uai-badge>`,
  });

describe('uai-badge', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    resetDeprecationWarnings();
  });

  it('preserves the six inherited defaults and adds only an optional accessible label', async () => {
    const page = await render();
    expect(page.rootInstance.color).toBe('system');
    expect(page.rootInstance.shape).toBe('circle');
    expect(page.rootInstance.icon).toBeNull();
    expect(page.rootInstance.number).toBeUndefined();
    expect(page.rootInstance.animation).toBe(false);
    expect(page.rootInstance.dataTest).toBeNull();
    expect(page.rootInstance.ariaLabel).toBeNull();
    expect(page.root.shadowRoot.querySelector('.badge--status')).not.toBeNull();
    expect(page.root.hasAttribute('tabindex')).toBe(false);
    expect(page.root.hasAttribute('aria-live')).toBe(false);
    expect(page.root.shadowRoot.querySelector('slot')).toBeNull();
  });

  it.each(['system', 'danger', 'warning', 'success', 'neutral'])('accepts color %s', async (color) => {
    const page = await render(`color="${color}"`);
    expect(page.root.shadowRoot.querySelector(`.badge--${color}`)).not.toBeNull();
  });

  it.each(['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'])(
    'preserves shape %s for all nonnumeric modes',
    async (shape) => {
      const page = await render(`shape="${shape}"`);
      for (const [number, icon, type] of [
        [undefined, null, 'status'],
        [undefined, 'info', 'icon'],
        [0, 'info', 'empty'],
      ] as const) {
        page.root.number = number;
        page.root.icon = icon;
        await page.waitForChanges();
        expect(page.root.shadowRoot.querySelector(`.badge--${shape}.badge--${type}`)).not.toBeNull();
      }
    },
  );

  it.each([
    [998, '998'],
    [999, '999+'],
    [1000, '999+'],
    [-2, '-2'],
    [1.5, '1.5'],
  ])('displays %s as %s', async (number, expected) => {
    const page = await render(`number="${number}" icon="info" shape="triangle"`);
    expect(page.root.shadowRoot.querySelector('uai-typo').textContent).toBe(expected);
    expect(page.root.shadowRoot.querySelector('.badge--number.badge--circle')).not.toBeNull();
    expect(page.root.shadowRoot.querySelector('uai-icon')).toBeNull();
  });

  it('resolves zero before icon at initial load', async () => {
    const page = await render('number="0" icon="info"');
    expect(page.root.shadowRoot.querySelector('.badge--empty')).not.toBeNull();
    expect(page.root.shadowRoot.querySelector('uai-icon')).toBeNull();
    expect(page.root.shadowRoot.querySelector('uai-typo')).toBeNull();
  });

  it('recomputes modes after number and icon changes without stale state', async () => {
    const page = await render();
    for (const [number, icon, type] of [
      [5, 'info', 'number'],
      [0, 'info', 'empty'],
      [null, 'info', 'icon'],
      [undefined, null, 'status'],
      [undefined, 'info', 'icon'],
      [42, null, 'number'],
      [null, null, 'status'],
      [undefined, '', 'status'],
    ] as const) {
      page.root.number = number;
      page.root.icon = icon;
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector(`.badge--${type}`)).not.toBeNull();
    }
  });

  it('prefers a known UAI glyph and isolates it from the background shape', async () => {
    const page = await render('icon="info" shape="triangle"');
    const glyph = page.root.shadowRoot.querySelector('uai-icon');
    expect(glyph.getAttribute('name')).toBe('info');
    expect(glyph.getAttribute('aria-hidden')).toBe('true');
    expect(page.root.shadowRoot.querySelector('bds-icon')).toBeNull();
    expect(page.root.shadowRoot.querySelector('.badge__shape').contains(glyph)).toBe(false);
  });

  it('keeps an explicit legacy fallback without changing the icon API', async () => {
    const page = await render('icon="audio-closed" shape="polygon"');
    const glyph = page.root.shadowRoot.querySelector('bds-icon');
    expect(glyph.getAttribute('name')).toBe('audio-closed');
    expect(glyph.getAttribute('color')).toBe('currentColor');
    expect(glyph.getAttribute('size')).toBe('xx-small');
  });

  it('keeps data-test on the visual element and exposes a label without duplicate content', async () => {
    const page = await render('data-test="badge" aria-label="Novas mensagens" number="5"');
    expect(page.root.getAttribute('role')).toBe('img');
    expect(page.root.getAttribute('aria-label')).toBe('Novas mensagens');
    expect(page.root.shadowRoot.querySelector('[data-test="badge"]').getAttribute('aria-hidden')).toBe('true');
    page.root.ariaLabel = null;
    await page.waitForChanges();
    expect(page.root.hasAttribute('role')).toBe(false);
    expect(page.root.shadowRoot.querySelector('.badge').hasAttribute('aria-hidden')).toBe(false);
  });

  it('only adds a separate pulse when animation is enabled', async () => {
    const page = await render();
    expect(page.root.shadowRoot.querySelector('.badge__pulse')).toBeNull();
    page.root.animation = true;
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.badge--animated .badge__pulse')).not.toBeNull();
  });

  it('falls back observably for unsupported shapes and colors', async () => {
    const previous = Build.isDev;
    Build.isDev = true;
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    try {
      const page = await render('shape="unsupported" color="unsupported"');
      expect(page.root.shadowRoot.querySelector('.badge--circle.badge--system')).not.toBeNull();
      expect(warn).toHaveBeenCalledWith('[uai-badge] Unsupported shape "unsupported". Using "circle".');
      expect(warn).toHaveBeenCalledWith('[uai-badge] Unsupported color "unsupported". Using "system".');
    } finally {
      Build.isDev = previous;
    }
  });
});
