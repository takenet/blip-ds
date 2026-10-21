import { newSpecPage } from '@stencil/core/testing';
import { UaiThemeProvider } from '../uai-theme-provider';

describe('uai-theme-provider', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders data-uai-theme="light" by default', async () => {
    const page = await newSpecPage({ components: [UaiThemeProvider], html: `<uai-theme-provider></uai-theme-provider>` });

    expect(page.root.getAttribute('data-uai-theme')).toBe('light');
    expect(page.root.getAttribute('theme')).toBe('light');
  });

  it('renders data-uai-theme="dark"', async () => {
    const page = await newSpecPage({
      components: [UaiThemeProvider],
      html: `<uai-theme-provider theme="dark"></uai-theme-provider>`,
    });

    expect(page.root.getAttribute('data-uai-theme')).toBe('dark');
  });

  it('falls back to light and warns on an unsupported theme', async () => {
    const page = await newSpecPage({
      components: [UaiThemeProvider],
      html: `<uai-theme-provider theme="high-contrast"></uai-theme-provider>`,
    });

    expect(page.root.getAttribute('data-uai-theme')).toBe('light');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Unsupported theme "high-contrast"'));
  });

  it('updates data-uai-theme when the theme changes', async () => {
    const page = await newSpecPage({ components: [UaiThemeProvider], html: `<uai-theme-provider></uai-theme-provider>` });

    page.root.theme = 'dark';
    await page.waitForChanges();

    expect(page.root.getAttribute('data-uai-theme')).toBe('dark');
  });

  it('renders a slot for its content', async () => {
    const page = await newSpecPage({
      components: [UaiThemeProvider],
      html: `<uai-theme-provider><span>content</span></uai-theme-provider>`,
    });

    expect(page.root.shadowRoot.querySelector('slot')).not.toBeNull();
    expect(page.root.querySelector('span').textContent).toBe('content');
  });
});
