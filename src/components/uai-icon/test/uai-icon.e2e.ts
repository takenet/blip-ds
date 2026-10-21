import { E2EPage, newE2EPage } from '@stencil/core/testing';

const iconStyle = (page: E2EPage, selector: string) =>
  page.evaluate((sel: string) => {
    const host = document.querySelector(sel);
    const style = getComputedStyle(host);
    const before = getComputedStyle(host.shadowRoot.querySelector('.uai-icon'), '::before');
    return {
      width: style.width,
      height: style.height,
      fontSize: style.fontSize,
      color: style.color,
      fontFamily: before.fontFamily,
      content: before.content,
    };
  }, selector);

describe('uai-icon e2e', () => {
  it.each([
    ['x-small', '16px'],
    ['small', '20px'],
    ['medium', '24px'],
  ])('draws a %s icon in a %s box, as in the Figma', async (size, px) => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light"><uai-icon name="info" size="${size}"></uai-icon></uai-theme-provider>`,
    });
    const style = await iconStyle(page, 'uai-icon');

    expect([style.width, style.height, style.fontSize]).toEqual([px, px, px]);
  });

  it('draws the glyph with the uai-icon font', async () => {
    const page = await newE2EPage({ html: `<uai-icon name="info"></uai-icon>` });
    const style = await iconStyle(page, 'uai-icon');

    expect(style.fontFamily).toContain('uai-icon');
    expect(style.content).not.toBe('none');
  });

  it('inherits the surrounding text color by default', async () => {
    const page = await newE2EPage({ html: `<p style="color: rgb(1, 2, 3)"><uai-icon name="info"></uai-icon></p>` });

    expect((await iconStyle(page, 'uai-icon')).color).toBe('rgb(1, 2, 3)');
  });

  it('uses the color token of each theme', async () => {
    const page = await newE2EPage({
      html: `
        <uai-theme-provider theme="light"><uai-icon id="light" name="info" color="feedback-error"></uai-icon><span id="light-probe" style="color: var(--uai-feedback-error)"></span></uai-theme-provider>
        <uai-theme-provider theme="dark"><uai-icon id="dark" name="info" color="feedback-error"></uai-icon><span id="dark-probe" style="color: var(--uai-feedback-error)"></span></uai-theme-provider>
      `,
    });
    const colors = await page.evaluate(() => {
      const color = (sel: string) => getComputedStyle(document.querySelector(sel)).color;
      return [color('#light'), color('#light-probe'), color('#dark'), color('#dark-probe')];
    });

    expect(colors[0]).toBe(colors[1]);
    expect(colors[2]).toBe(colors[3]);
  });

  it('falls back to the light tokens when no theme is set', async () => {
    const page = await newE2EPage({ html: `<uai-icon name="info" size="small" color="content-primary"></uai-icon>` });
    const style = await iconStyle(page, 'uai-icon');

    expect([style.width, style.color]).toEqual(['20px', 'rgb(36, 39, 41)']);
  });

  it('lets an embedding component set the size with --uai-icon-size', async () => {
    const page = await newE2EPage({ html: `<uai-icon name="info" style="--uai-icon-size: 40px"></uai-icon>` });
    const style = await iconStyle(page, 'uai-icon');

    expect([style.width, style.height, style.fontSize]).toEqual(['40px', '40px', '40px']);
  });
});
