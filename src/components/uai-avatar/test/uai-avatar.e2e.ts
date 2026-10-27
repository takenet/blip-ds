import { E2EPage, newE2EPage } from '@stencil/core/testing';

const withTheme = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const avatarStyle = (page: E2EPage, selector: string, props: string[]) =>
  page.evaluate(
    (sel: string, keys: string[]) => {
      const host = document.querySelector(sel);
      const style = getComputedStyle(host);
      return Object.fromEntries(keys.map((key) => [key, style.getPropertyValue(key)]));
    },
    selector,
    props,
  );

describe('uai-avatar e2e', () => {
  it.each([
    ['micro', '24px', '12px'],
    ['extra-small', '32px', '14px'],
    ['small', '40px', '16px'],
    ['standard', '48px', '20px'],
    ['large', '64px', '24px'],
    ['extra-large', '72px', '32px'],
  ])('renders %s at %s with %s initials', async (size, diameter, fontSize) => {
    const page = await newE2EPage({
      html: withTheme(`<uai-avatar id="avatar" size="${size}" initials="AB" label="Alex Brown"></uai-avatar>`),
    });
    const style = await avatarStyle(page, '#avatar', ['width', 'height', 'font-size', 'border-radius']);

    expect(style).toEqual({
      width: diameter,
      height: diameter,
      'font-size': fontSize,
      'border-radius': '9999px',
    });
    expect(await page.$eval('#avatar', (el: HTMLElement) => el.getAttribute('aria-label'))).toBe('Alex Brown');
  });

  it('uses the image and falls back to initials when it fails', async () => {
    const page = await newE2EPage({
      html: withTheme(
        '<uai-avatar id="avatar" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22/%3E" initials="AB"></uai-avatar>',
      ),
    });

    expect(await page.$eval('#avatar', (el: HTMLElement) => !!el.shadowRoot.querySelector('img'))).toBe(true);
    await page.$eval('#avatar', (el: HTMLElement) => {
      el.shadowRoot.querySelector('img').dispatchEvent(new Event('error'));
    });
    await page.waitForChanges();

    expect(
      await page.$eval('#avatar', (el: HTMLElement) => el.shadowRoot.querySelector('.avatar__initials')?.textContent),
    ).toBe('AB');
  });

  it('uses the official user icon when neither image nor initials are provided', async () => {
    const page = await newE2EPage({ html: withTheme('<uai-avatar id="avatar" label="Profile"></uai-avatar>') });

    expect(
      await page.$eval(
        '#avatar',
        (el: HTMLElement) => el.shadowRoot.querySelector('uai-icon[name="avatar-user"]') !== null,
      ),
    ).toBe(true);
  });

  it.each([
    ['light', 'rgb(242, 243, 243)', 'rgb(95, 103, 109)'],
    ['dark', 'rgb(47, 52, 55)', 'rgb(173, 180, 184)'],
  ])('uses semantic %s colors for the fallback', async (theme, background, color) => {
    const page = await newE2EPage({
      html: withTheme('<uai-avatar id="avatar" initials="AB"></uai-avatar>', theme),
    });
    const style = await avatarStyle(page, '#avatar', ['background-color', 'color']);

    expect(style).toEqual({ 'background-color': background, color });
  });

  it('does not make the static avatar focusable', async () => {
    const page = await newE2EPage({
      html: withTheme('<button>Before</button><uai-avatar initials="AB"></uai-avatar>'),
    });

    await page.keyboard.press('Tab');

    expect(await page.evaluate(() => document.activeElement?.tagName)).toBe('BUTTON');
  });
});
