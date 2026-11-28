import { newSpecPage } from '@stencil/core/testing';
import { UaiCardHeader } from '../uai-card-header';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

describe('uai-card-header', () => {
  beforeEach(() => resetDeprecationWarnings());

  it('renders uai-grid with default space-between alignment and falls back on invalid align', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const page = await newSpecPage({
      components: [UaiCardHeader],
      html: `<uai-card-header><span>Título</span></uai-card-header>`,
    });
    const grid = page.root.shadowRoot.querySelector('uai-grid');
    expect(grid.getAttribute('justifycontent') || (grid as any).justifyContent).toBe('space-between');

    page.root.align = 'invalid' as any;
    await page.waitForChanges();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
