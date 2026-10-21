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

describe('uai-button e2e', () => {
  describe('form', () => {
    it('submits the enclosing form when type is submit', async () => {
      const page = await newE2EPage({
        html: `<form onsubmit="event.preventDefault()"><input name="q" value="x" /><uai-button type="submit">Send</uai-button></form>`,
      });
      const form = await page.find('form');
      const submit = await form.spyOnEvent('submit');

      await (await page.find('uai-button')).click();
      await page.waitForChanges();

      expect(submit).toHaveReceivedEventTimes(1);
    });

    it('resets the enclosing form when type is reset', async () => {
      const page = await newE2EPage({
        html: `<form><input id="field" value="initial" /><uai-button type="reset">Reset</uai-button></form>`,
      });
      await page.$eval('#field', (el: HTMLInputElement) => (el.value = 'changed'));

      await (await page.find('uai-button')).click();
      await page.waitForChanges();

      expect(await page.$eval('#field', (el: HTMLInputElement) => el.value)).toBe('initial');
    });

    it('does not submit when type is button', async () => {
      const page = await newE2EPage({
        html: `<form onsubmit="event.preventDefault()"><uai-button>Click</uai-button></form>`,
      });
      const form = await page.find('form');
      const submit = await form.spyOnEvent('submit');

      await (await page.find('uai-button')).click();
      await page.waitForChanges();

      expect(submit).toHaveReceivedEventTimes(0);
    });
  });

  describe('interaction', () => {
    it.each(['Enter', 'Space'])('emits uaiClick when %s is pressed', async (key) => {
      const page = await newE2EPage({ html: withTheme(`<uai-button>Save</uai-button>`) });
      const button = await page.find('uai-button');
      const click = await button.spyOnEvent('uaiClick');

      await page.keyboard.press('Tab');
      await page.keyboard.press(key);
      await page.waitForChanges();

      expect(click).toHaveReceivedEventTimes(1);
    });

    it.each(['disabled', 'loading'])('does not emit uaiClick while %s', async (attr) => {
      const page = await newE2EPage({ html: withTheme(`<uai-button ${attr}>Save</uai-button>`) });
      const button = await page.find('uai-button');
      const click = await button.spyOnEvent('uaiClick');

      await button.click();
      await page.waitForChanges();

      expect(click).toHaveReceivedEventTimes(0);
    });

    it('keeps a loading button focusable', async () => {
      const page = await newE2EPage({ html: withTheme(`<uai-button loading>Save</uai-button>`) });

      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.tagName);

      expect(focused).toBe('UAI-BUTTON');
    });
  });

  describe('visual recipe', () => {
    it.each([
      ['compact', '24px', '8px', '8px', '12px', '600'],
      ['short', '32px', '12px', '12px', '14px', '500'],
      ['medium', '40px', '12px', '12px', '14px', '500'],
      ['large', '56px', '16px', '12px', '14px', '500'],
    ])('size %s is %s high with the Figma recipe', async (size, height, paddingX, radius, fontSize, fontWeight) => {
      const page = await newE2EPage({ html: withTheme(`<uai-button size="${size}">Save</uai-button>`) });
      const style = await buttonStyle(page, 'uai-button', [
        'height',
        'padding-left',
        'border-top-left-radius',
        'font-size',
        'font-weight',
        'column-gap',
      ]);

      expect(style).toEqual({
        height,
        'padding-left': paddingX,
        'border-top-left-radius': radius,
        'font-size': fontSize,
        'font-weight': fontWeight,
        'column-gap': '8px',
      });
    });

    it('makes an icon-only button square', async () => {
      const page = await newE2EPage({
        html: withTheme(`<uai-button icon="add" aria-label="Add" size="short"></uai-button>`),
      });
      const style = await buttonStyle(page, 'uai-button', ['width', 'height']);

      expect(style).toEqual({ width: '32px', height: '32px' });
    });

    it.each([
      ['solid', 'primary', 'rgb(36, 39, 41)', 'rgb(255, 255, 255)'],
      ['solid', 'negative', 'rgb(207, 0, 34)', 'rgb(255, 255, 255)'],
      ['solid', 'positive', 'rgb(61, 163, 41)', 'rgb(255, 255, 255)'],
      ['outline', 'primary', 'rgb(255, 255, 255)', 'rgb(36, 39, 41)'],
      ['text', 'negative', 'rgba(0, 0, 0, 0)', 'rgb(207, 0, 34)'],
    ])('variant %s with color %s uses the UAI tokens', async (variant, color, background, foreground) => {
      const page = await newE2EPage({
        html: withTheme(`<uai-button variant="${variant}" color="${color}">Save</uai-button>`),
      });
      const style = await buttonStyle(page, 'uai-button', ['background-color', 'color']);

      expect(style).toEqual({ 'background-color': background, color: foreground });
    });

    it('uses the outline border of the chosen color', async () => {
      const page = await newE2EPage({
        html: withTheme(`<uai-button variant="outline" color="negative">Delete</uai-button>`),
      });
      const style = await buttonStyle(page, 'uai-button', ['border-top-color', 'border-top-width']);

      expect(style).toEqual({ 'border-top-color': 'rgb(207, 0, 34)', 'border-top-width': '1px' });
    });

    it('switches colors with the dark theme', async () => {
      const page = await newE2EPage({
        html: `${withTheme(`<uai-button id="light">Save</uai-button>`)}${withTheme(`<uai-button id="dark">Save</uai-button>`, 'dark')}`,
      });

      const lightStyle = await buttonStyle(page, '#light', ['background-color']);
      const darkStyle = await buttonStyle(page, '#dark', ['background-color']);

      expect(darkStyle['background-color']).not.toBe(lightStyle['background-color']);
    });

    it('dims a disabled button', async () => {
      const page = await newE2EPage({ html: withTheme(`<uai-button disabled>Save</uai-button>`) });
      const style = await buttonStyle(page, 'uai-button', ['opacity']);

      expect(style).toEqual({ opacity: '0.5' });
    });
  });
});
