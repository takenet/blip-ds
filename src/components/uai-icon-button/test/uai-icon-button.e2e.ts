import { E2EPage, newE2EPage } from '@stencil/core/testing';

const withTheme = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const buttonStyle = (page: E2EPage, selector: string, props: string[]) =>
  page.evaluate(
    (sel: string, keys: string[]) => {
      const host = document.querySelector(sel);
      const style = getComputedStyle(host.shadowRoot.querySelector('button'));
      return Object.fromEntries(keys.map((key) => [key, style.getPropertyValue(key)]));
    },
    selector,
    props,
  );

describe('uai-icon-button e2e', () => {
  it.each(['Enter', 'Space'])('emits uaiClick when activated with %s', async (key) => {
    const page = await newE2EPage({
      html: withTheme('<uai-icon-button icon="add" aria-label="Adicionar"></uai-icon-button>'),
    });
    const host = await page.find('uai-icon-button');
    const click = await host.spyOnEvent('uaiClick');

    await page.keyboard.press('Tab');
    await page.keyboard.press(key);
    await page.waitForChanges();

    expect(click).toHaveReceivedEventTimes(1);
  });

  it.each(['disabled', 'loading'])('does not emit uaiClick while %s', async (attr) => {
    const page = await newE2EPage({
      html: withTheme(`<uai-icon-button icon="add" ${attr} aria-label="Adicionar"></uai-icon-button>`),
    });
    const host = await page.find('uai-icon-button');
    const click = await host.spyOnEvent('uaiClick');

    await host.click();
    await page.waitForChanges();

    expect(click).toHaveReceivedEventTimes(0);
  });

  it.each([
    ['compact', '24px', '8px', '16px'],
    ['short', '32px', '12px', '20px'],
    ['medium', '40px', '12px', '24px'],
    ['large', '56px', '12px', '24px'],
  ])('renders square %s size (%s) with radius %s and glyph %s', async (size, boxSize, radius, iconSize) => {
    const page = await newE2EPage({
      html: withTheme(`<uai-icon-button icon="info" size="${size}" aria-label="Info"></uai-icon-button>`),
    });
    const style = await buttonStyle(page, 'uai-icon-button', ['width', 'height', 'border-top-left-radius']);
    const glyph = await page.evaluate(() => {
      const icon = document.querySelector('uai-icon-button').shadowRoot.querySelector('uai-icon');
      const computed = getComputedStyle(icon);
      return { width: computed.width, height: computed.height };
    });

    expect(style).toEqual({
      width: boxSize,
      height: boxSize,
      'border-top-left-radius': radius,
    });
    expect(glyph).toEqual({ width: iconSize, height: iconSize });
  });

  it('shows focus ring and disables transitions under prefers-reduced-motion: reduce', async () => {
    const page = await newE2EPage({
      html: withTheme('<uai-icon-button id="btn" icon="info" loading aria-label="Carregando"></uai-icon-button>'),
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.keyboard.press('Tab');

    const result = await page.evaluate(() => {
      const button = document.querySelector('#btn').shadowRoot.querySelector('button');
      const spinner = document.querySelector('#btn').shadowRoot.querySelector('.icon-button__spinner');
      const btnStyle = getComputedStyle(button);
      return {
        outlineStyle: btnStyle.outlineStyle,
        outlineWidth: btnStyle.outlineWidth,
        transition: btnStyle.transition,
        animationName: getComputedStyle(spinner).animationName,
      };
    });

    expect(result.outlineStyle).toBe('solid');
    expect(result.outlineWidth).not.toBe('0px');
    expect(result.transition).toBe('none');
    expect(result.animationName).toBe('none');
  });

  it('applies transparent resting background and pressed token on active ghost button', async () => {
    const page = await newE2EPage({
      html: withTheme('<uai-icon-button id="ghost" icon="close" variant="ghost" aria-label="Fechar"></uai-icon-button>'),
    });

    const resting = await buttonStyle(page, '#ghost', ['background-color']);
    expect(resting['background-color']).toBe('rgba(0, 0, 0, 0)');

    const host = await page.find('#ghost');
    await host.callMethod('isActive', true);
    await page.waitForChanges();

    const active = await buttonStyle(page, '#ghost', ['background-color']);
    expect(active['background-color']).not.toBe('rgba(0, 0, 0, 0)');
  });
});
