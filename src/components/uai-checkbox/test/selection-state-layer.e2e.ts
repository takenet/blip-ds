import { newE2EPage } from '@stencil/core/testing';

describe('selection control state-layer motion', () => {
  for (const [tag, layer] of [
    ['uai-checkbox', '.checkbox__indicator'],
    ['uai-radio', '.radio__control'],
    ['uai-switch', '.switch__handle'],
  ]) {
    it(`${tag} animates entry and exit, retains keyboard focus and respects reduced motion`, async () => {
      const page = await newE2EPage({
        html: `<${tag} aria-label="Option" value="option"></${tag}>`,
      });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);

      const state = () =>
        page.$eval(`${tag} >>> ${layer}`, (element: HTMLElement) => {
          const style = getComputedStyle(element, '::before');
          return {
            opacity: Number(style.opacity),
            scale: new DOMMatrix(style.transform).a,
            properties: style.transitionProperty,
            duration: style.transitionDuration,
          };
        });
      const sampleTransition = () =>
        page.$eval(`${tag} >>> ${layer}`, (element: HTMLElement) => {
          const transitions = element.getAnimations({ subtree: true });
          for (const transition of transitions) {
            transition.pause();
            transition.currentTime = Number(transition.effect.getTiming().duration) / 2;
          }
          const style = getComputedStyle(element, '::before');
          const sample = { opacity: Number(style.opacity), scale: new DOMMatrix(style.transform).a };
          for (const transition of transitions) transition.finish();
          return sample;
        });

      expect((await state()).opacity).toBe(0);
      expect((await state()).scale).toBe(0.75);
      expect((await state()).properties.split(', ')).toEqual(expect.arrayContaining(['opacity', 'transform']));
      expect((await state()).duration.split(', ').every((duration) => duration === '0.15s')).toBe(true);

      await page.hover(`${tag} >>> input`);
      const entry = await sampleTransition();
      expect(entry.opacity).toBeGreaterThan(0);
      expect(entry.opacity).toBeLessThan(1);
      expect(entry.scale).toBeGreaterThan(0.75);
      expect(entry.scale).toBeLessThan(1);
      expect((await state()).opacity).toBe(1);
      expect((await state()).scale).toBe(1);

      await page.mouse.move(0, 0);
      const exit = await sampleTransition();
      expect(exit.opacity).toBeGreaterThan(0);
      expect(exit.opacity).toBeLessThan(1);
      expect(exit.scale).toBeGreaterThan(0.75);
      expect(exit.scale).toBeLessThan(1);
      expect((await state()).opacity).toBe(0);
      expect((await state()).scale).toBe(0.75);

      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.keyboard.press('Tab');
      expect((await state()).opacity).toBe(1);
      expect((await state()).scale).toBe(1);
      expect((await state()).duration).toBe('0s');
      await page.$eval(`${tag} >>> input`, (input: HTMLInputElement) => input.blur());
      expect((await state()).opacity).toBe(0);
    });
  }
});
