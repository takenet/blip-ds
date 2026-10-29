import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { readFileSync } from 'fs';
import { join } from 'path';

const colors = ['system', 'danger', 'warning', 'success', 'neutral'];
const shapes = ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'];
const tokens = ['uai-colors.css', 'uai-dimensions.css', 'uai-typography.css', 'uai-motion.css']
  .map((file) => readFileSync(join(process.cwd(), 'node_modules/blip-tokens/build/css', file), 'utf8'))
  .join('\n');
const iconCss = readFileSync(join(process.cwd(), 'node_modules/blip-tokens/build/uai-icons/uai-icon.css'), 'utf8');

async function fixture(content: string, theme = 'light'): Promise<E2EPage> {
  const page = await newE2EPage();
  await page.setContent(`<style>${tokens}${iconCss}</style><div data-uai-theme="${theme}">${content}</div>`);
  return page;
}

describe('uai-badge browser contract', () => {
  it.each(['light', 'dark'])('uses the button primary pair for the default system color in %s', async (theme) => {
    const page = await fixture('<uai-badge number="12"></uai-badge><uai-button>Action</uai-button>', theme);
    try {
      const actual = await page.evaluate(() => {
        const badge = document.querySelector('uai-badge').shadowRoot;
        const button = document.querySelector('uai-button').shadowRoot.querySelector('.button');
        return {
          badgeBackground: getComputedStyle(badge.querySelector('.badge__shape')).backgroundColor,
          badgeForeground: getComputedStyle(badge.querySelector('.badge')).color,
          buttonBackground: getComputedStyle(button).backgroundColor,
          buttonForeground: getComputedStyle(button).color,
        };
      });
      expect(actual.badgeBackground).toBe(actual.buttonBackground);
      expect(actual.badgeForeground).toBe(actual.buttonForeground);
    } finally {
      await page.close();
    }
  });

  it('preserves defaults and exposes a passive, named visual element', async () => {
    const page = await fixture('<uai-badge data-test="indicator" aria-label="Novas mensagens"></uai-badge>');
    try {
      const badge = await page.find('uai-badge');
      expect(await badge.getProperty('color')).toBe('system');
      expect(await badge.getProperty('shape')).toBe('circle');
      expect(await badge.getProperty('icon')).toBeNull();
      expect(await badge.getProperty('number')).toBeUndefined();
      expect(await badge.getProperty('animation')).toBe(false);
      expect(badge.getAttribute('aria-label')).toBe('Novas mensagens');
      expect(badge.getAttribute('role')).toBe('img');
      expect(badge.hasAttribute('tabindex')).toBe(false);
      expect(badge.hasAttribute('aria-live')).toBe(false);
      const visual = await page.find('uai-badge >>> [data-test="indicator"]');
      expect(visual.getAttribute('aria-hidden')).toBe('true');
    } finally {
      await page.close();
    }
  });

  it('recomputes precedence, inclusive cap and missing content after updates', async () => {
    const page = await fixture('<uai-badge icon="info" number="0"></uai-badge>');
    try {
      const badge = await page.find('uai-badge');
      expect(await page.find('uai-badge >>> .badge--empty')).not.toBeNull();
      for (const [number, expected] of [
        [998, '998'],
        [999, '999+'],
        [1000, '999+'],
        [-2, '-2'],
        [1.5, '1.5'],
      ] as const) {
        badge.setProperty('number', number);
        await page.waitForChanges();
        expect((await page.find('uai-badge >>> uai-typo')).textContent).toBe(expected);
        expect(await page.find('uai-badge >>> uai-icon')).toBeNull();
      }
      badge.setProperty('number', null);
      await page.waitForChanges();
      expect(await page.find('uai-badge >>> uai-icon')).not.toBeNull();
      badge.setProperty('icon', null);
      badge.setProperty('number', undefined);
      await page.waitForChanges();
      expect(await page.find('uai-badge >>> .badge--status')).not.toBeNull();
      badge.setProperty('icon', 'info');
      badge.setProperty('number', 0);
      await page.waitForChanges();
      expect(await page.find('uai-badge >>> .badge--empty')).not.toBeNull();
    } finally {
      await page.close();
    }
  });

  it('keeps all shapes, clips only backgrounds and fits glyph bounds inside the usable geometry', async () => {
    const page = await fixture(shapes.map((shape) => `<uai-badge shape="${shape}" icon="info"></uai-badge>`).join(''));
    try {
      const evidence = await page.evaluate(() =>
        Array.from(document.querySelectorAll('uai-badge')).map((host) => {
          const root = host.shadowRoot;
          const shape = root.querySelector('.badge__shape');
          const glyph = root.querySelector('uai-icon');
          const bg = shape.getBoundingClientRect();
          const box = glyph.getBoundingClientRect();
          const points = [
            [box.left, box.top],
            [box.right, box.top],
            [box.left, box.bottom],
            [box.right, box.bottom],
          ].map(([x, y]) => [(x - bg.left) / bg.width, (y - bg.top) / bg.height]);
          const name = host.getAttribute('shape');
          const fits = points.every(([x, y]) => {
            const tolerance = 0.01;
            if (name === 'triangle') return Math.abs(x - 0.5) <= y / 2 + tolerance;
            if (name === 'triangle-reverse') return Math.abs(x - 0.5) <= (1 - y) / 2 + tolerance;
            if (name === 'polygon') return Math.abs(x - 0.5) + Math.abs(y - 0.5) <= 0.5 + tolerance;
            return x >= -tolerance && x <= 1 + tolerance && y >= -tolerance && y <= 1 + tolerance;
          });
          return {
            fits,
            glyphClip: getComputedStyle(glyph).clipPath,
            contentClip: getComputedStyle(root.querySelector('.badge__content')).clipPath,
            shapeClip: getComputedStyle(shape).clipPath,
            contains: shape.contains(glyph),
            width: box.width,
          };
        }),
      );
      expect(evidence).toHaveLength(shapes.length);
      for (const value of evidence) {
        expect(value.fits).toBe(true);
        expect(value.glyphClip).toBe('none');
        expect(value.contentClip).toBe('none');
        expect(value.contains).toBe(false);
        expect(value.width).toBeGreaterThan(0);
      }
      expect(evidence[1].shapeClip).not.toBe('none');
      expect(evidence[2].shapeClip).not.toBe('none');
      expect(evidence[3].shapeClip).not.toBe('none');
      const badges = await page.findAll('uai-badge');
      for (const badge of badges) badge.setProperty('number', 0);
      await page.waitForChanges();
      expect(await page.findAll('uai-badge >>> .badge--empty')).toHaveLength(shapes.length);
      for (const badge of badges) badge.setProperty('number', 12);
      await page.waitForChanges();
      expect(await page.findAll('uai-badge >>> .badge--number.badge--circle')).toHaveLength(shapes.length);
    } finally {
      await page.close();
    }
  });

  it('uses the real legacy-only audio-closed icon through an explicit fallback', async () => {
    const page = await fixture('<uai-badge icon="audio-closed" shape="polygon"></uai-badge>');
    try {
      const icon = await page.find('uai-badge >>> bds-icon');
      expect(icon).not.toBeNull();
      expect(await icon.getProperty('name')).toBe('audio-closed');
      expect(await icon.getProperty('color')).toBe('currentColor');
      expect(await page.find('uai-badge >>> uai-icon')).toBeNull();
      const svg = await page.evaluate(
        () =>
          document
            .querySelector('uai-badge')
            .shadowRoot.querySelector('bds-icon')
            .shadowRoot.querySelector('svg')
            ?.getBoundingClientRect().width || 0,
      );
      expect(svg).toBeGreaterThan(0);
    } finally {
      await page.close();
    }
  });

  it.each(['light', 'dark'])('meets computed text and icon contrast for every color in %s', async (theme) => {
    const page = await fixture(
      colors
        .map(
          (color) => `<uai-badge color="${color}" number="12"></uai-badge>
      <uai-badge color="${color}" icon="info"></uai-badge>`,
        )
        .join(''),
      theme,
    );
    try {
      const ratios = await page.evaluate(() => {
        const luminance = (value: string) => {
          const channels = value
            .match(/[\d.]+/g)
            .slice(0, 3)
            .map(Number)
            .map((channel) => {
              const s = channel / 255;
              return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
            });
          return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
        };
        return Array.from(document.querySelectorAll('uai-badge')).map((host) => {
          const root = host.shadowRoot;
          const typo = root.querySelector('uai-typo');
          const foreground = typo ? typo.shadowRoot.querySelector('.typo') : root.querySelector('uai-icon');
          const fg = luminance(getComputedStyle(foreground).color);
          const bg = luminance(getComputedStyle(root.querySelector('.badge__shape')).backgroundColor);
          return { text: !!typo, ratio: (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05) };
        });
      });
      expect(ratios).toHaveLength(colors.length * 2);
      for (const value of ratios) expect(value.ratio).toBeGreaterThanOrEqual(value.text ? 4.5 : 3);
    } finally {
      await page.close();
    }
  });

  it('stops every continuous pulse when reduced motion is requested', async () => {
    const page = await fixture(
      shapes.map((shape) => `<uai-badge shape="${shape}" animation="true" icon="info"></uai-badge>`).join(''),
    );
    try {
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      const animations = await page.evaluate(() =>
        Array.from(document.querySelectorAll('uai-badge')).map((host) => {
          const style = getComputedStyle(host.shadowRoot.querySelector('.badge__pulse'));
          return { animation: style.animationName, display: style.display };
        }),
      );
      for (const value of animations) {
        expect(value.animation).toBe('none');
        expect(value.display).toBe('none');
      }
    } finally {
      await page.close();
    }
  });

  it('preserves foreground, background and shapes under forced colors without a global override', async () => {
    const page = await fixture(
      shapes
        .flatMap((shape) => [
          `<uai-badge shape="${shape}"></uai-badge>`,
          `<uai-badge shape="${shape}" icon="info"></uai-badge>`,
          `<uai-badge shape="${shape}" number="0"></uai-badge>`,
          `<uai-badge shape="${shape}" number="12"></uai-badge>`,
        ])
        .join(''),
    );
    try {
      const session = await page.createCDPSession();
      await session.send('Emulation.setEmulatedMedia', { features: [{ name: 'forced-colors', value: 'active' }] });
      const values = await page.evaluate(() => ({
        active: matchMedia('(forced-colors: active)').matches,
        globalAdjustment: getComputedStyle(document.documentElement).forcedColorAdjust,
        badges: Array.from(document.querySelectorAll('uai-badge')).map((host) => {
          const root = host.shadowRoot;
          const background = root.querySelector('.badge__shape');
          return {
            fg: getComputedStyle(root.querySelector('.badge')).color,
            bg: getComputedStyle(background).backgroundColor,
            width: background.getBoundingClientRect().width,
            height: background.getBoundingClientRect().height,
            clip: getComputedStyle(background).clipPath,
            shape: host.getAttribute('shape'),
            numeric: root.querySelector('.badge--number') !== null,
          };
        }),
      }));
      expect(values.active).toBe(true);
      expect(values.globalAdjustment).toBe('auto');
      expect(values.badges).toHaveLength(shapes.length * 4);
      for (const value of values.badges) {
        expect(value.fg).not.toBe(value.bg);
        expect(value.width).toBeGreaterThan(0);
        expect(value.height).toBeGreaterThan(0);
        if (!value.numeric && ['triangle', 'triangle-reverse', 'polygon'].includes(value.shape)) {
          expect(value.clip).not.toBe('none');
        }
      }
    } finally {
      await page.close();
    }
  });
});
