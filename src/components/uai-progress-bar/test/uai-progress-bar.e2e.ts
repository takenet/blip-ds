import { newE2EPage } from '@stencil/core/testing';

const withTheme = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

describe('uai-progress-bar e2e', () => {
  it('renders the single Figma track (sizing/2xs, radius/2xl, surface/background) with accent/ai-start fill', async () => {
    const page = await newE2EPage({
      html: withTheme('<uai-progress-bar percent="50" aria-label="Progresso"></uai-progress-bar>'),
    });

    const styles = await page.evaluate(() => {
      const root = document.querySelector('uai-progress-bar').shadowRoot;
      const track = getComputedStyle(root.querySelector('.progress__track'));
      const fill = getComputedStyle(root.querySelector('.progress__fill'));
      const tokens = getComputedStyle(document.querySelector('uai-theme-provider'));
      const toRgb = (value: string) => {
        const probe = document.createElement('div');
        probe.style.color = value;
        document.body.appendChild(probe);
        const rgb = getComputedStyle(probe).color;
        probe.remove();
        return rgb;
      };
      const toPx = (value: string) => {
        const probe = document.createElement('div');
        probe.style.width = value;
        document.body.appendChild(probe);
        const px = getComputedStyle(probe).width;
        probe.remove();
        return px;
      };
      return {
        height: track.height === toPx(tokens.getPropertyValue('--uai-sizing-2xs').trim()),
        borderRadius: track.borderTopLeftRadius === toPx(tokens.getPropertyValue('--uai-radius-2xl').trim()),
        backgroundColor: track.backgroundColor === toRgb(tokens.getPropertyValue('--uai-surface-background').trim()),
        fillColor: fill.backgroundColor === toRgb(tokens.getPropertyValue('--uai-accent-ai-start').trim()),
      };
    });

    expect(styles).toEqual({ height: true, borderRadius: true, backgroundColor: true, fillColor: true });
  });

  it('disables fill transition on regression and under prefers-reduced-motion: reduce', async () => {
    const page = await newE2EPage({
      html: withTheme('<uai-progress-bar id="bar" percent="40" aria-label="Progresso"></uai-progress-bar>'),
    });

    const bar = await page.find('#bar');
    bar.setProperty('percent', 75);
    await page.waitForChanges();

    const advancingTransition = await page.evaluate(
      () => getComputedStyle(document.querySelector('#bar').shadowRoot.querySelector('.progress__fill')).transitionProperty,
    );
    expect(advancingTransition).toBe('width');

    bar.setProperty('percent', 20);
    await page.waitForChanges();

    const regressionTransition = await page.evaluate(
      () => getComputedStyle(document.querySelector('#bar').shadowRoot.querySelector('.progress__fill')).transition,
    );
    expect(regressionTransition).toContain('none');

    bar.setProperty('percent', 60);
    await page.waitForChanges();
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    const reducedMotionTransition = await page.evaluate(
      () => getComputedStyle(document.querySelector('#bar').shadowRoot.querySelector('.progress__fill')).transition,
    );
    expect(reducedMotionTransition).toContain('none');
  });
});
