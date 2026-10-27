import { readFileSync } from 'fs';
import { join } from 'path';
import { E2EPage, newE2EPage } from '@stencil/core/testing';

type TextStyle = {
  name: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing: string;
  tokens: Record<'fontFamily' | 'fontSize' | 'lineHeight' | 'fontWeight' | 'letterSpacing', string>;
};

type Case = {
  name: string;
  variant: string;
  bold: string;
  letterSpacing: string;
  expected: { fontSize: string; lineHeight: string; fontWeight: string; letterSpacing: string; fontFamily: string };
  tokens: TextStyle['tokens'];
};

const textStyles: Record<string, TextStyle> = JSON.parse(
  readFileSync(join(process.cwd(), 'node_modules/blip-tokens/build/json/uai-text-styles.json'), 'utf8'),
);

const toPx = (value: string): string => (value.endsWith('rem') ? `${parseFloat(value) * 16}px` : value);

const publishedCases: Case[] = Object.values(textStyles).map((style) => {
  const parts = style.name.split('/');
  const weight = parts.pop();
  const spaced = weight.endsWith('-space');
  return {
    name: style.name,
    variant: parts.join('-'),
    bold: spaced ? weight.replace('-space', '') : weight,
    letterSpacing: spaced ? 'expanded' : 'normal',
    expected: {
      fontSize: toPx(style.fontSize),
      lineHeight: toPx(style.lineHeight),
      fontWeight: String(style.fontWeight),
      letterSpacing: style.letterSpacing,
      fontFamily: style.fontFamily,
    },
    tokens: style.tokens,
  };
});

// These roles are local Figma styles and their published token variables are not in the installed package yet.
const WEIGHT_VALUES = { regular: '400', medium: '500', semibold: '600', bold: '700' };
const localCases: Case[] = [
  { variant: 'title-lg', role: 'title-lg', fontSize: '18px', lineHeight: '24px' },
  { variant: 'title-md', role: 'title-md', fontSize: '16px', lineHeight: '24px' },
  { variant: 'title-sm', role: 'title-sm', fontSize: '14px', lineHeight: '20px' },
  { variant: 'body-lg', role: 'body-lg', fontSize: '16px', lineHeight: '24px' },
  { variant: 'body-sm', role: 'body-sm', fontSize: '12px', lineHeight: '20px' },
].flatMap(({ variant, role, fontSize, lineHeight }) =>
  Object.entries(WEIGHT_VALUES).map(([bold, fontWeight]) => ({
    name: `${variant.replace('-', '/')}/${bold}`,
    variant,
    bold,
    letterSpacing: 'normal',
    expected: { fontSize, lineHeight, fontWeight, letterSpacing: '0px', fontFamily: 'Figtree' },
    tokens: {
      fontFamily: '--uai-font-family-sans',
      fontSize: `--uai-${role}-font-size`,
      lineHeight: `--uai-${role}-line-height`,
      fontWeight: `--uai-font-weight-${bold}`,
      letterSpacing: '--uai-letter-spacing-normal',
    },
  })),
);

const cases = [...publishedCases, ...localCases];

const SENTINELS = {
  fontFamily: 'SentinelFont',
  fontSize: '77px',
  lineHeight: '91px',
  fontWeight: '900',
  letterSpacing: '7px',
};

const withTheme = (content: string, theme = 'light') =>
  `<uai-theme-provider theme="${theme}">${content}</uai-theme-provider>`;

const typo = (c: Case, index: number) =>
  `<uai-typo id="t${index}" variant="${c.variant}" bold="${c.bold}" letter-spacing="${c.letterSpacing}" margin="false">Text</uai-typo>`;

const textStyle = (page: E2EPage, selector: string, props: string[]) =>
  page.evaluate(
    (sel: string, keys: string[]) => {
      const style = getComputedStyle(document.querySelector(sel).shadowRoot.querySelector('.typo'));
      return Object.fromEntries(keys.map((key) => [key, style.getPropertyValue(key)]));
    },
    selector,
    props,
  );

const typography = (page: E2EPage, selector: string) =>
  page.evaluate((sel: string) => {
    const style = getComputedStyle(document.querySelector(sel).shadowRoot.querySelector('.typo'));
    return {
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      fontWeight: style.fontWeight,
      letterSpacing: style.letterSpacing === 'normal' ? '0px' : style.letterSpacing,
      fontFamily: style.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
    };
  }, selector);

describe('uai-typo e2e', () => {
  it('covers the 28 text styles published by blip-tokens', () => {
    expect(publishedCases).toHaveLength(28);
  });

  it('matches the values of every Figma text style', async () => {
    const page = await newE2EPage({ html: withTheme(cases.map(typo).join('')) });
    const actual = {};
    for (const [index, c] of cases.entries()) actual[c.name] = await typography(page, `#t${index}`);

    expect(actual).toEqual(Object.fromEntries(cases.map((c) => [c.name, c.expected])));
  });

  it('builds every text style from its token variables', async () => {
    const html = cases
      .map((c, index) => {
        const overrides = Object.entries(c.tokens)
          .map(([key, variable]) => `${variable}: ${SENTINELS[key]}`)
          .join('; ');
        return `<div style="${overrides}">${typo(c, index)}</div>`;
      })
      .join('');
    const page = await newE2EPage({ html: withTheme(html) });
    const actual = {};
    for (const [index, c] of cases.entries()) actual[c.name] = await typography(page, `#t${index}`);

    expect(actual).toEqual(Object.fromEntries(cases.map((c) => [c.name, SENTINELS])));
  });

  it('applies the bottom margin to display and heading variants only', async () => {
    const page = await newE2EPage({
      html: withTheme(`
        <uai-typo id="heading" variant="heading-lg">Heading</uai-typo>
        <uai-typo id="display" variant="display">Display</uai-typo>
        <uai-typo id="no-margin" variant="heading-lg" margin="false">Heading</uai-typo>
        <uai-typo id="body">Body</uai-typo>
        <uai-typo id="paragraph" paragraph>Paragraph</uai-typo>
      `),
    });
    const actual = {};
    for (const id of ['heading', 'display', 'no-margin', 'body', 'paragraph']) {
      actual[id] = await textStyle(page, `#${id}`, ['margin-top', 'margin-bottom']);
    }

    expect(actual).toEqual({
      heading: { 'margin-top': '0px', 'margin-bottom': '24px' },
      display: { 'margin-top': '0px', 'margin-bottom': '24px' },
      'no-margin': { 'margin-top': '0px', 'margin-bottom': '0px' },
      body: { 'margin-top': '0px', 'margin-bottom': '0px' },
      paragraph: { 'margin-top': '0px', 'margin-bottom': '16px' },
    });
  });

  describe('modifiers', () => {
    it('applies italic and no-wrap', async () => {
      const page = await newE2EPage({ html: withTheme(`<uai-typo italic no-wrap>Text</uai-typo>`) });
      const style = await textStyle(page, 'uai-typo', ['font-style', 'white-space', 'text-overflow', 'overflow']);

      expect(style).toEqual({
        'font-style': 'italic',
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis',
        overflow: 'hidden',
      });
    });
  });

  describe('theme', () => {
    it('uses the content primary color of each theme', async () => {
      const page = await newE2EPage({
        html: `
          <uai-theme-provider theme="light">
            <uai-typo id="light">Text</uai-typo><span id="light-probe" style="color: var(--uai-content-primary)"></span>
          </uai-theme-provider>
          <uai-theme-provider theme="dark">
            <uai-typo id="dark">Text</uai-typo><span id="dark-probe" style="color: var(--uai-content-primary)"></span>
          </uai-theme-provider>
        `,
      });
      const colors = await page.evaluate(() => {
        const color = (sel: string, inner = false) => {
          const el = document.querySelector(sel);
          return getComputedStyle(inner ? el.shadowRoot.querySelector('.typo') : el).color;
        };
        return {
          light: color('#light', true),
          lightProbe: color('#light-probe'),
          dark: color('#dark', true),
          darkProbe: color('#dark-probe'),
        };
      });

      expect(colors.light).toBe(colors.lightProbe);
      expect(colors.dark).toBe(colors.darkProbe);
      expect(colors.light).not.toBe(colors.dark);
    });

    it('falls back to the light tokens when no theme is set', async () => {
      const page = await newE2EPage({ html: `<uai-typo variant="heading-lg" bold="semibold">Text</uai-typo>` });
      const style = await page.evaluate(() => {
        const computed = getComputedStyle(document.querySelector('uai-typo').shadowRoot.querySelector('.typo'));
        return [computed.fontSize, computed.lineHeight, computed.fontWeight, computed.color];
      });

      expect(style).toEqual(['24px', '32px', '600', 'rgb(36, 39, 41)']);
    });
  });
});
