import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { loadPrimitives } from './uai-primitives-harness';

// spacing/2xs and spacing/xs resolved with the default 16px root font size.
const GAP = 4;
const MARGIN = 8;

const PANEL_SCSS = `
  .panel {
    @include uai-overlay-panel;
    background: white;
  }
`;

type Box = { top: number; right: number; bottom: number; left: number; width: number; height: number };

const setup = async (html: string) => {
  const page = await newE2EPage({ html: `<style>body { margin: 0; }</style>${html}` });
  await page.setViewport({ width: 1000, height: 800 });
  await loadPrimitives(page, PANEL_SCSS);
  await page.evaluate(() => {
    const w = window as any;
    w.overlays = {};
    w.closes = [];
    w.overlay = (name: string, matchTriggerWidth = false) => {
      w.overlays[name] = new w.UaiOverlay({
        trigger: document.getElementById(`${name}-trigger`),
        panel: document.getElementById(`${name}-panel`),
        matchTriggerWidth,
        onClose: (reason: string) => w.closes.push(`${name}:${reason}`),
      });
      return w.overlays[name];
    };
  });
  return page;
};

const open = (page: E2EPage, name: string, matchTriggerWidth = false) =>
  page.evaluate((n: string, m: boolean) => (window as any).overlay(n, m).open(), name, matchTriggerWidth);

const isOpen = (page: E2EPage, name: string) => page.evaluate((n: string) => (window as any).overlays[n].isOpen, name);

const box = (page: E2EPage, id: string): Promise<Box> =>
  page.evaluate((i: string) => {
    const { top, right, bottom, left, width, height } = document.getElementById(i).getBoundingClientRect();
    return { top, right, bottom, left, width, height };
  }, id);

const panel = (name: string, content = 'Opção') => `<div id="${name}-panel" class="panel">${content}</div>`;
const trigger = (name: string, style: string) => `<button id="${name}-trigger" style="${style}">Abrir</button>`;

describe('uai-overlay e2e', () => {
  describe('distance from the trigger and the viewport', () => {
    it('opens at spacing/2xs below the trigger, in the top layer', async () => {
      const page = await setup(`${trigger('a', 'position: absolute; top: 100px; left: 100px')}${panel('a')}`);
      await open(page, 'a');
      const [t, p] = [await box(page, 'a-trigger'), await box(page, 'a-panel')];
      expect(p.top).toBeCloseTo(t.bottom + GAP, 0);
      expect(p.left).toBeCloseTo(t.left, 0);
      expect(await page.evaluate(() => document.getElementById('a-panel').matches(':popover-open'))).toBe(true);
    });

    it('aligns to the trigger end near the right edge and keeps spacing/xs from the viewport', async () => {
      const page = await setup(
        `${trigger('a', 'position: absolute; top: 100px; right: 2px; width: 40px')}${panel('a', '<div style="width: 300px">Opção</div>')}`,
      );
      await open(page, 'a');
      const p = await box(page, 'a-panel');
      expect(p.right).toBeLessThanOrEqual(1000 - MARGIN + 0.5);
      expect(p.right).toBeCloseTo(1000 - MARGIN, 0);
    });
  });

  it('opens above a trigger at the end of the page', async () => {
    const page = await setup(
      `${trigger('a', 'position: absolute; bottom: 20px; left: 100px')}${panel('a', '<div style="height: 200px">Opção</div>')}`,
    );
    await open(page, 'a');
    const [t, p] = [await box(page, 'a-trigger'), await box(page, 'a-panel')];
    expect(await page.$eval('#a-panel', (el) => (el as HTMLElement).dataset.side)).toBe('top');
    expect(p.bottom).toBeCloseTo(t.top - GAP, 0);
  });

  it('follows the trigger while its container scrolls and closes when the trigger is no longer visible', async () => {
    const page = await setup(`
      <div id="scroller" style="position: absolute; top: 50px; left: 50px; width: 300px; height: 300px; overflow: auto">
        <div style="height: 100px"></div>
        <button id="a-trigger">Abrir</button>
        <div style="height: 1000px"></div>
      </div>
      ${panel('a')}`);
    await open(page, 'a');
    await page.$eval('#scroller', (el) => (el.scrollTop = 60));
    await page.waitForFunction(() => {
      const t = document.getElementById('a-trigger').getBoundingClientRect();
      const p = document.getElementById('a-panel').getBoundingClientRect();
      return Math.abs(p.top - (t.bottom + 4)) < 1;
    });

    await page.$eval('#scroller', (el) => (el.scrollTop = 400));
    await page.waitForFunction(() => !(window as any).overlays.a.isOpen);
    expect(await page.evaluate(() => (window as any).closes)).toEqual(['a:trigger-hidden']);
    // display stays block during the duration/moderate fade-out, then the panel leaves the layout.
    await page.waitForFunction(() => getComputedStyle(document.getElementById('a-panel')).display === 'none');
  });

  it('takes no layout space while closed', async () => {
    const page = await setup(`
      <aside id="sidebar" style="width: 200px; height: 300px; overflow: auto">
        <button id="a-trigger">Data</button>
        ${panel('a', '<div style="width: 600px">Calendário</div>')}
      </aside>`);
    const noScroll = () => page.$eval('#sidebar', (el) => el.scrollWidth <= el.clientWidth);
    expect(await noScroll()).toBe(true);
    await open(page, 'a');
    expect(await noScroll()).toBe(true);
  });

  describe('width', () => {
    it('is at least the trigger width when requested', async () => {
      const page = await setup(
        `${trigger('a', 'position: absolute; top: 100px; left: 100px; width: 320px')}${panel('a', 'A')}`,
      );
      await open(page, 'a', true);
      expect((await box(page, 'a-panel')).width).toBeCloseTo(320, 0);
    });

    it('grows with the content up to the viewport minus twice spacing/xs', async () => {
      const page = await setup(
        `${trigger('a', 'position: absolute; top: 100px; left: 100px')}${panel('a', '<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">' + 'Opção muito longa '.repeat(100) + '</div>')}`,
      );
      await open(page, 'a', true);
      const p = await box(page, 'a-panel');
      expect(p.width).toBeCloseTo(1000 - 2 * MARGIN, 0);
      expect(p.left).toBeCloseTo(MARGIN, 0);
    });
  });

  describe('keyboard, click outside and focus', () => {
    const nested = `
      ${trigger('a', 'position: absolute; top: 100px; left: 100px')}
      <div id="a-panel" class="panel">
        <p id="a-text">Menu</p>
        <button id="b-trigger">Submenu</button>
      </div>
      <div id="b-panel" class="panel"><button id="b-item">Item</button></div>
      <p id="outside" style="position: absolute; top: 600px; left: 600px">Fora</p>`;

    it('closes only the most recent panel with Escape and returns focus to its trigger', async () => {
      const page = await setup(nested);
      await open(page, 'a');
      await open(page, 'b');
      await page.focus('#b-item');

      await page.keyboard.press('Escape');
      expect(await isOpen(page, 'b')).toBe(false);
      expect(await isOpen(page, 'a')).toBe(true);
      expect(await page.evaluate(() => document.activeElement.id)).toBe('b-trigger');

      await page.keyboard.press('Escape');
      expect(await isOpen(page, 'a')).toBe(false);
      expect(await page.evaluate(() => document.activeElement.id)).toBe('a-trigger');
      expect(await page.evaluate(() => (window as any).closes)).toEqual(['b:escape', 'a:escape']);
    });

    it('closes with a click outside, keeping the panels that contain the click', async () => {
      const page = await setup(nested);
      await open(page, 'a');
      await open(page, 'b');

      await page.click('#b-trigger');
      expect(await isOpen(page, 'a')).toBe(true);
      expect(await isOpen(page, 'b')).toBe(true);

      await page.click('#a-text');
      expect(await isOpen(page, 'b')).toBe(false);
      expect(await isOpen(page, 'a')).toBe(true);

      await page.click('#outside');
      expect(await isOpen(page, 'a')).toBe(false);
      expect(await page.evaluate(() => (window as any).closes)).toEqual(['b:outside', 'a:outside']);
    });
  });

  it('stays above an open bds-modal', async () => {
    const page = await setup(`
      <bds-modal open="true">
        <button id="a-trigger">Abrir</button>
        ${panel('a', '<div style="width: 200px; height: 80px">Opção</div>')}
      </bds-modal>`);
    await page.waitForChanges();
    await open(page, 'a');
    const p = await box(page, 'a-panel');
    const hit = await page.evaluate(
      (x: number, y: number) => document.getElementById('a-panel').contains(document.elementFromPoint(x, y)),
      p.left + p.width / 2,
      p.top + p.height / 2,
    );
    expect(hit).toBe(true);
  });

  describe('motion', () => {
    const transition = (page: E2EPage) =>
      page.$eval('#a-panel', (el) => {
        const style = getComputedStyle(el);
        return {
          property: style.transitionProperty,
          duration: style.transitionDuration,
          easing: style.transitionTimingFunction,
        };
      });

    it('fades in and out with duration/moderate and easing/standard', async () => {
      const page = await setup(`${trigger('a', '')}${panel('a')}`);
      const { property, duration, easing } = await transition(page);
      expect(property).toBe('opacity, display, overlay');
      expect(duration).toBe('0.2s, 0.2s, 0.2s');
      expect(easing.split(', cubic')[0]).toBe('cubic-bezier(0.25, 0.1, 0.25, 1)');
    });

    it('appears and disappears without transition with reduced motion', async () => {
      const page = await setup(`${trigger('a', '')}${panel('a')}`);
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      expect((await transition(page)).duration).toBe('0s');
      await open(page, 'a');
      expect(await page.$eval('#a-panel', (el) => getComputedStyle(el).opacity)).toBe('1');
    });
  });

  it('falls back to position: fixed without the Popover API', async () => {
    const page = await setup(`${trigger('a', 'position: absolute; top: 100px; left: 100px')}${panel('a')}`);
    await page.evaluate(() => delete (HTMLElement.prototype as any).popover);
    await open(page, 'a');
    const [t, p] = [await box(page, 'a-trigger'), await box(page, 'a-panel')];
    expect(await page.$eval('#a-panel', (el) => el.hasAttribute('popover'))).toBe(false);
    expect(p.top).toBeCloseTo(t.bottom + GAP, 0);
    expect(await page.$eval('#a-panel', (el) => getComputedStyle(el).position)).toBe('fixed');
  });
});
