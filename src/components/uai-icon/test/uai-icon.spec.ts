import { newSpecPage } from '@stencil/core/testing';
import { readFileSync } from 'fs';
import { join } from 'path';
import { UAI_OUTLINE_ICONS, UAI_SOLID_ICONS } from '../../../globals/uai-icons';
import { UaiIcon } from '../uai-icon';

const render = (html: string) => newSpecPage({ components: [UaiIcon], html });
const glyph = (page) => page.root.shadowRoot.querySelector('.uai-icon');

describe('uai-icon', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders the outline glyph at medium size by default', async () => {
    const page = await render(`<uai-icon name="info"></uai-icon>`);

    expect(glyph(page).getAttribute('class')).toBe('uai-icon uai-icon-outline-info');
    expect(page.root).toHaveClass('uai-icon--size-medium');
    expect(page.root.getAttribute('aria-hidden')).toBe('true');
    expect(page.root.getAttribute('role')).toBeNull();
    expect(warn).not.toHaveBeenCalled();
  });

  it('renders the solid glyph when theme is solid', async () => {
    const page = await render(`<uai-icon name="info" theme="solid"></uai-icon>`);

    expect(glyph(page)).toHaveClass('uai-icon-solid-info');
  });

  it.each(['x-small', 'small', 'medium'])('accepts size %s', async (size) => {
    const page = await render(`<uai-icon name="info" size="${size}"></uai-icon>`);

    expect(page.root).toHaveClass(`uai-icon--size-${size}`);
  });

  it('inherits the text color by default', async () => {
    const page = await render(`<uai-icon name="info"></uai-icon>`);

    expect(page.root.getAttribute('class')).not.toContain('uai-icon--color-');
  });

  it('applies a color token when color is set', async () => {
    const page = await render(`<uai-icon name="info" color="feedback-error"></uai-icon>`);

    expect(page.root).toHaveClass('uai-icon--color-feedback-error');
  });

  it('is exposed as an image when it has an accessible name', async () => {
    const page = await render(`<uai-icon name="warning" aria-label="Atenção"></uai-icon>`);

    expect(page.root.getAttribute('role')).toBe('img');
    expect(page.root.getAttribute('aria-label')).toBe('Atenção');
    expect(page.root.getAttribute('aria-hidden')).toBeNull();
  });

  it('forwards data-test to the glyph', async () => {
    const page = await render(`<uai-icon name="info" data-test="info-icon"></uai-icon>`);

    expect(glyph(page).getAttribute('data-test')).toBe('info-icon');
  });

  it('warns and draws no glyph for names outside the UAI icon font', async () => {
    const page = await render(`<uai-icon name="not-an-icon"></uai-icon>`);

    expect(glyph(page).getAttribute('class')).toBe('uai-icon');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('"not-an-icon" is not a outline icon'));
  });

  it.each([
    ['size', 'size="large"', 'uai-icon--size-medium'],
    ['theme', 'theme="filled"', 'uai-icon--size-medium'],
  ])('falls back and warns on an unsupported %s', async (prop, attr, hostClass) => {
    const page = await render(`<uai-icon name="info" ${attr}></uai-icon>`);

    expect(page.root).toHaveClass(hostClass);
    expect(glyph(page)).toHaveClass('uai-icon-outline-info');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining(`Unsupported ${prop}`));
  });

  it('ignores an unsupported color and inherits the text color', async () => {
    const page = await render(`<uai-icon name="info" color="red"></uai-icon>`);

    expect(page.root.getAttribute('class')).not.toContain('uai-icon--color-');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported color "red"'));
  });
});

describe('uai icon names', () => {
  it('match the glyphs shipped by the blip-tokens UAI icon font', () => {
    const css = readFileSync(join(process.cwd(), 'node_modules/blip-tokens/build/uai-icons/uai-icon.css'), 'utf8');
    const read = (theme: string) =>
      [...css.matchAll(new RegExp(`uai-icon-${theme}-([a-z0-9-]+):before`, 'g'))].map((match) => match[1]);

    expect([...UAI_OUTLINE_ICONS]).toEqual(read('outline'));
    expect([...UAI_SOLID_ICONS]).toEqual(read('solid'));
  });
});
