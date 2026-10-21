import { newE2EPage } from '@stencil/core/testing';

const tokenOf = (theme: string) => `
  <uai-theme-provider theme="${theme}"><span id="probe">probe</span></uai-theme-provider>
`;

const readToken = (page, token: string) =>
  page.evaluate((name: string) => getComputedStyle(document.getElementById('probe')).getPropertyValue(name).trim(), token);

describe('uai-theme-provider e2e', () => {
  it('exposes the light color tokens to its content', async () => {
    const page = await newE2EPage({ html: tokenOf('light') });

    expect(await readToken(page, '--uai-action-primary-default')).toBe('#242729');
    expect(await readToken(page, '--uai-surface-paper')).toBe('#ffffff');
  });

  it('exposes the dark color tokens to its content', async () => {
    const page = await newE2EPage({ html: tokenOf('dark') });

    expect(await readToken(page, '--uai-surface-paper')).not.toBe('#ffffff');
    expect(await readToken(page, '--uai-surface-paper')).not.toBe('');
  });

  it('exposes dimension, typography and shadow tokens in both themes', async () => {
    const page = await newE2EPage({
      html: `
        <uai-theme-provider theme="light"><span id="light">light</span></uai-theme-provider>
        <uai-theme-provider theme="dark"><span id="dark">dark</span></uai-theme-provider>
      `,
    });
    const tokensOf = (id: string) =>
      page.evaluate((elementId: string) => {
        const style = getComputedStyle(document.getElementById(elementId));
        return ['--uai-radius-lg', '--uai-body-base-font-size', '--uai-elevation-1'].map((name) =>
          style.getPropertyValue(name).trim(),
        );
      }, id);

    for (const theme of ['light', 'dark']) {
      const [radius, fontSize, elevation] = await tokensOf(theme);

      expect(radius).toBe('0.75rem');
      expect(fontSize).toBe('0.875rem');
      expect(elevation).not.toBe('');
    }
  });

  it('does not change the layout of its content', async () => {
    const page = await newE2EPage({ html: tokenOf('light') });
    const display = await page.$eval('uai-theme-provider', (el) => getComputedStyle(el).display);

    expect(display).toBe('contents');
  });

  it('does not declare tokens outside the provider', async () => {
    const page = await newE2EPage({
      html: `<span id="probe">outside</span><uai-theme-provider><span>inside</span></uai-theme-provider>`,
    });

    expect(await readToken(page, '--uai-action-primary-default')).toBe('');
  });
});
