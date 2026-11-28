import { newSpecPage } from '@stencil/core/testing';
import { UaiCardFooter } from '../uai-card-footer';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

describe('uai-card-footer', () => {
  beforeEach(() => resetDeprecationWarnings());

  it('renders uai-grid with default flex-end alignment and falls back on invalid align', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const page = await newSpecPage({
      components: [UaiCardFooter],
      html: `<uai-card-footer><span>Ação</span></uai-card-footer>`,
    });
    const grid = page.root.shadowRoot.querySelector('uai-grid');
    expect(grid.getAttribute('justifycontent') || (grid as any).justifyContent).toBe('flex-end');

    page.root.align = 'invalid' as any;
    await page.waitForChanges();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
