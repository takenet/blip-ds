import { newSpecPage } from '@stencil/core/testing';
import { UaiBanner } from '../uai-banner';

describe('uai-banner', () => {
  it('preserves the legacy defaults', async () => {
    const page = await newSpecPage({ components: [UaiBanner], html: '<uai-banner>Texto</uai-banner>' });
    const banner = page.rootInstance;
    expect(banner.variant).toBe('system');
    expect(banner.context).toBe('outside');
    expect(banner.buttonClose).toBe('false');
    expect(banner.bannerAlign).toBe('center');
    expect(banner.dtButtonClose).toBe(null);
    expect(page.root.shadowRoot.querySelector('.banner__close')).toBeNull();
  });

  it('maps each variant to its class, icon and ARIA role', async () => {
    const expected = {
      system: ['message-ballon', 'status'],
      info: ['info', 'status'],
      success: ['checkball', 'status'],
      warning: ['warning', 'alert'],
      error: ['error', 'alert'],
    };
    for (const [variant, [icon, role]] of Object.entries(expected)) {
      const page = await newSpecPage({
        components: [UaiBanner],
        html: `<uai-banner variant="${variant}">Texto</uai-banner>`,
      });
      const holder = page.root.shadowRoot.querySelector('.banner__holder');
      expect(holder.classList.contains(`banner__holder--${variant}`)).toBe(true);
      expect(holder.getAttribute('role')).toBe(role);
      expect(page.root.shadowRoot.querySelector('.banner__icon').getAttribute('name')).toBe(icon);
    }
  });

  it('falls back to system for an unknown variant', async () => {
    const page = await newSpecPage({ components: [UaiBanner], html: '<uai-banner variant="nope">Texto</uai-banner>' });
    expect(page.root.shadowRoot.querySelector('.banner__holder--system')).not.toBeNull();
  });

  it('applies the inside context', async () => {
    const page = await newSpecPage({
      components: [UaiBanner],
      html: '<uai-banner context="inside">Texto</uai-banner>',
    });
    expect(page.root.shadowRoot.querySelector('.banner__holder--inside')).not.toBeNull();
  });

  it('renders the optional heading and the link slot', async () => {
    const page = await newSpecPage({
      components: [UaiBanner],
      html: '<uai-banner heading="Título">Texto<a slot="link" href="#">Link</a></uai-banner>',
    });
    expect(page.root.shadowRoot.querySelector('.banner__title').textContent).toBe('Título');
    expect(page.root.shadowRoot.querySelector('slot[name="link"]')).not.toBeNull();
    const without = await newSpecPage({ components: [UaiBanner], html: '<uai-banner>Texto</uai-banner>' });
    expect(without.root.shadowRoot.querySelector('.banner__title')).toBeNull();
  });

  it('renders an accessible close button that emits and hides the banner', async () => {
    const page = await newSpecPage({
      components: [UaiBanner],
      html: '<uai-banner button-close="true" dt-button-close="close-it">Texto</uai-banner>',
    });
    const close = page.root.shadowRoot.querySelector('.banner__close') as HTMLButtonElement;
    expect(close.getAttribute('aria-label')).toBe('Fechar');
    expect(close.getAttribute('data-test')).toBe('close-it');
    const closed = jest.fn();
    page.root.addEventListener('uaiBannerClose', closed);
    close.click();
    await page.waitForChanges();
    expect(closed).toHaveBeenCalledTimes(1);
    expect(page.root.classList.contains('banner--hide')).toBe(true);
  });

  it('toggles visibility with toggle()', async () => {
    const page = await newSpecPage({ components: [UaiBanner], html: '<uai-banner>Texto</uai-banner>' });
    await page.root.toggle();
    await page.waitForChanges();
    expect(page.root.classList.contains('banner--hide')).toBe(true);
    await page.root.toggle();
    await page.waitForChanges();
    expect(page.root.classList.contains('banner--hide')).toBe(false);
  });
});
