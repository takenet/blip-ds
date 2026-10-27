import { newSpecPage } from '@stencil/core/testing';
import { UaiAvatar } from '../uai-avatar';

const render = (html: string) => newSpecPage({ components: [UaiAvatar], html });

describe('uai-avatar', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders an icon fallback by default and hides the decorative avatar from assistive technology', async () => {
    const page = await render('<uai-avatar></uai-avatar>');

    expect(page.root.size).toBe('standard');
    expect(page.root.shadowRoot.querySelector('uai-icon[name="avatar-user"]')).not.toBeNull();
    expect(page.root.getAttribute('aria-hidden')).toBe('true');
    expect(page.root.getAttribute('role')).toBeNull();
  });

  it('renders explicit initials and trims surrounding whitespace', async () => {
    const page = await render('<uai-avatar initials="  ab  " label="Alex Brown"></uai-avatar>');

    expect(page.root.shadowRoot.querySelector('.avatar__initials').textContent).toBe('ab');
    expect(page.root.getAttribute('role')).toBe('img');
    expect(page.root.getAttribute('aria-label')).toBe('Alex Brown');
    expect(page.root.getAttribute('aria-hidden')).toBeNull();
  });

  it('treats an empty accessible label as decorative', async () => {
    const page = await render('<uai-avatar initials="AB" label="   "></uai-avatar>');

    expect(page.root.getAttribute('role')).toBeNull();
    expect(page.root.getAttribute('aria-label')).toBeNull();
    expect(page.root.getAttribute('aria-hidden')).toBe('true');
  });

  it('uses the image when src is supplied and keeps initials available as fallback', async () => {
    const page = await render('<uai-avatar src="https://example.test/avatar.png" initials="AB"></uai-avatar>');
    const image = page.root.shadowRoot.querySelector('img') as HTMLImageElement;

    expect(image.getAttribute('src')).toBe('https://example.test/avatar.png');
    expect(image.getAttribute('alt')).toBe('');
    expect(page.root.shadowRoot.querySelector('.avatar__initials')).toBeNull();

    image.dispatchEvent(new Event('error'));
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('img')).toBeNull();
    expect(page.root.shadowRoot.querySelector('.avatar__initials').textContent).toBe('AB');
  });

  it('resets an image error when src changes', async () => {
    const page = await render('<uai-avatar src="https://example.test/invalid.png" initials="AB"></uai-avatar>');
    const avatar = page.rootInstance as UaiAvatar;
    const image = page.root.shadowRoot.querySelector('img') as HTMLImageElement;

    image.dispatchEvent(new Event('error'));
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.avatar__initials')).not.toBeNull();

    avatar.src = 'https://example.test/next.png';
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://example.test/next.png');
  });

  it.each([
    ['micro', 'uai-avatar--size-micro'],
    ['extra-small', 'uai-avatar--size-extra-small'],
    ['small', 'uai-avatar--size-small'],
    ['standard', 'uai-avatar--size-standard'],
    ['large', 'uai-avatar--size-large'],
    ['extra-large', 'uai-avatar--size-extra-large'],
  ])('supports the %s size', async (size, className) => {
    const page = await render(`<uai-avatar size="${size}" initials="AB"></uai-avatar>`);

    expect(page.root).toHaveClass(className);
  });

  it('falls back to standard and warns for an unsupported size', async () => {
    const page = await render('<uai-avatar size="giant"></uai-avatar>');

    expect(page.root).toHaveClass('uai-avatar--size-standard');
    expect(warn).toHaveBeenCalledWith('[uai-avatar] Unsupported size "giant". Using "standard".');
  });

  it('forwards data-test to the avatar host', async () => {
    const page = await render('<uai-avatar data-test="profile-avatar"></uai-avatar>');

    expect(page.root.getAttribute('data-test')).toBe('profile-avatar');
  });
});
