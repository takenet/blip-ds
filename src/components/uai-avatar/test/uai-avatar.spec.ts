import { newSpecPage } from '@stencil/core/testing';
import { UaiAvatar } from '../uai-avatar';
import { initialsOf } from '../uai-avatar-initials';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const render = (html: string) => newSpecPage({ components: [UaiAvatar], html });
const shadow = (page) => page.root.shadowRoot as ShadowRoot;
const initials = (page) => shadow(page).querySelector('.avatar__initials')?.textContent.trim();

describe('uai-avatar initials', () => {
  it.each([
    ['ana maria silva', 'AS'],
    ['Bruno', 'B'],
    ['  Élida   Ônix  ', 'EO'],
    ['Maria Eduarda dos Santos Albuquerque', 'MA'],
    ['', ''],
    [null, ''],
  ])('builds "%s" into "%s"', (name, expected) => {
    expect(initialsOf(name)).toBe(expected);
  });
});

describe('uai-avatar', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    resetDeprecationWarnings();
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('bds-avatar contract', () => {
    it('shows the initials of the name and names the avatar', async () => {
      const page = await render(`<uai-avatar name="ana maria silva"></uai-avatar>`);

      expect(initials(page)).toBe('AS');
      expect(page.root.getAttribute('role')).toBe('img');
      expect(page.root.getAttribute('aria-label')).toBe('ana maria silva');
      expect(page.root.hasAttribute('tabindex')).toBe(false);
    });

    it('shows the thumbnail', async () => {
      const page = await render(`<uai-avatar name="Ana" thumbnail="https://example.com/ana.png"></uai-avatar>`);
      const image = shadow(page).querySelector('img.avatar__image');

      expect(image.getAttribute('src')).toBe('https://example.com/ana.png');
      expect(image.getAttribute('alt')).toBe('');
      expect(page.root).toHaveClass('uai-avatar--color-surface');
    });

    it('falls back to the initials when the image fails', async () => {
      const page = await render(`<uai-avatar name="Ana Silva" thumbnail="https://example.com/x.png"></uai-avatar>`);

      shadow(page).querySelector('img').dispatchEvent(new Event('error'));
      await page.waitForChanges();

      expect(initials(page)).toBe('AS');
    });

    it('shows the generic icon and stays decorative without a name', async () => {
      const page = await render(`<uai-avatar></uai-avatar>`);

      expect(shadow(page).querySelector('uai-icon.avatar__icon').getAttribute('name')).toBe('avatar-user');
      expect(page.root.getAttribute('aria-hidden')).toBe('true');
    });

    it('shows the counter', async () => {
      const page = await render(`<uai-avatar ellipsis="5"></uai-avatar>`);

      expect(shadow(page).querySelector('.avatar__ellipsis').textContent.trim()).toBe('+5');
      expect(page.root.getAttribute('aria-label')).toBe('+5');
    });

    it('emits uaiClickAvatar on click', async () => {
      const page = await render(`<uai-avatar name="Ana"></uai-avatar>`);
      const click = jest.fn();
      page.root.addEventListener('uaiClickAvatar', click);

      page.root.click();
      await page.waitForChanges();

      expect(click).toHaveBeenCalled();
    });
  });

  describe('colors', () => {
    it.each([
      ['Ana', 'info'],
      ['Bruno', 'success'],
      ['Carla', 'warning'],
      ['Diego', 'error'],
      ['Eva', 'info'],
    ])('picks the color of %s by the first letter', async (name, color) => {
      const page = await render(`<uai-avatar name="${name}"></uai-avatar>`);

      expect(page.root).toHaveClass(`uai-avatar--color-${color}`);
    });

    it.each([
      ['system', 'info'],
      ['surface', 'surface'],
      ['purple', 'info'],
    ])('maps color="%s" to %s', async (color, resolved) => {
      const page = await render(`<uai-avatar name="Ana" color="${color}"></uai-avatar>`);

      expect(page.root).toHaveClass(`uai-avatar--color-${resolved}`);
    });

    it('uses the neutral color for a name that does not start with a letter', async () => {
      const page = await render(`<uai-avatar name="2º turno"></uai-avatar>`);

      expect(page.root).toHaveClass('uai-avatar--color-surface');
    });
  });

  describe('upload', () => {
    it.each(['upload', 'open-upload'])('is a keyboard button with %s', async (attribute) => {
      const page = await render(`<uai-avatar name="Ana Silva" ${attribute}></uai-avatar>`);
      const click = jest.fn();
      page.root.addEventListener('uaiClickAvatar', click);

      page.root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      await page.waitForChanges();

      expect(page.root.getAttribute('role')).toBe('button');
      expect(page.root.getAttribute('tabindex')).toBe('0');
      expect(shadow(page).querySelector('.avatar__upload uai-icon').getAttribute('name')).toBe('upload');
      expect(click).toHaveBeenCalled();
    });

    it('has the image picker only with openUpload', async () => {
      const page = await render(`<uai-avatar name="Ana" open-upload></uai-avatar>`);
      const file = shadow(page).querySelector('input.avatar__file');

      expect(file.getAttribute('type')).toBe('file');
      expect(file.getAttribute('accept')).toBe('image/*');
    });
  });

  describe('previous uai-avatar API', () => {
    it('limits initials to two characters without a name', async () => {
      const page = await render(`<uai-avatar initials="Ana Silva" size="micro"></uai-avatar>`);

      expect(initials(page)).toBe('AN');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('"initials" is deprecated'));
    });

    it('uses label as the name and src as the thumbnail', async () => {
      const page = await render(`<uai-avatar label="Ana Silva" src="https://example.com/a.png"></uai-avatar>`);

      expect(page.root.getAttribute('aria-label')).toBe('Ana Silva');
      expect(shadow(page).querySelector('img').getAttribute('src')).toBe('https://example.com/a.png');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('"src" is deprecated'));
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('"label" is deprecated'));
    });

    it('prefers the initials of the name over the initials prop', async () => {
      const page = await render(`<uai-avatar name="Bruno Lima" initials="XY"></uai-avatar>`);

      expect(initials(page)).toBe('BL');
    });
  });

  describe('sizes', () => {
    it.each([
      ['', 'standard'],
      ['size="micro"', 'micro'],
      ['size="extra-large"', 'extra-large'],
      ['size="huge"', 'standard'],
    ])('maps %s to %s', async (attribute, size) => {
      const page = await render(`<uai-avatar name="Ana" ${attribute}></uai-avatar>`);

      expect(page.root).toHaveClass(`uai-avatar--size-${size}`);
    });
  });
});
