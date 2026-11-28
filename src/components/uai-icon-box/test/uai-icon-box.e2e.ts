import { newE2EPage } from '@stencil/core/testing';

const withTheme = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

describe('uai-icon-box e2e', () => {
  it.each([
    ['sm', '20px', '36px'],
    ['md', '24px', '40px'],
    ['lg', '32px', '48px'],
  ])('renders %s with glyph %s, padding spacing/xs and radius/md (total %s)', async (size, glyphSize, boxSize) => {
    const page = await newE2EPage({
      html: withTheme(`<uai-icon-box icon="robot-2" size="${size}"></uai-icon-box>`),
    });

    const metrics = await page.evaluate(() => {
      const host = document.querySelector('uai-icon-box');
      const box = host.shadowRoot.querySelector('.icon-box');
      const icon = host.shadowRoot.querySelector('uai-icon');
      const boxStyle = getComputedStyle(box);
      const iconStyle = getComputedStyle(icon);
      return {
        paddingTop: boxStyle.paddingTop,
        borderRadius: boxStyle.borderTopLeftRadius,
        boxWidth: boxStyle.width,
        boxHeight: boxStyle.height,
        iconWidth: iconStyle.width,
        iconHeight: iconStyle.height,
      };
    });

    expect(metrics).toEqual({
      paddingTop: '8px',
      borderRadius: '8px',
      boxWidth: boxSize,
      boxHeight: boxSize,
      iconWidth: glyphSize,
      iconHeight: glyphSize,
    });
  });

  it('renders custom slotted content preserving surface and radius tokens', async () => {
    const page = await newE2EPage({
      html: withTheme('<uai-icon-box><span id="custom-glyph">AI</span></uai-icon-box>'),
    });

    const result = await page.evaluate(() => {
      const host = document.querySelector('uai-icon-box');
      const boxStyle = getComputedStyle(host.shadowRoot.querySelector('.icon-box'));
      return {
        ariaHidden: host.getAttribute('aria-hidden'),
        borderRadius: boxStyle.borderTopLeftRadius,
        backgroundColor: boxStyle.backgroundColor,
        slottedText: document.querySelector('#custom-glyph')?.textContent,
      };
    });

    expect(result.ariaHidden).toBe('true');
    expect(result.borderRadius).toBe('8px');
    expect(result.backgroundColor).toBe('rgb(242, 243, 243)');
    expect(result.slottedText).toBe('AI');
  });
});
