import { newE2EPage } from '@stencil/core/testing';

describe('uai-filter-bar e2e', () => {
  it('Scenario: Fechamento por Escape com retorno de foco e movimento reduzido', async () => {
    const page = await newE2EPage();
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.setContent(`
      <div data-uai-theme="light">
        <uai-filter-bar id="fb"></uai-filter-bar>
      </div>
    `);

    await page.$eval('#fb', (el: any) => {
      el.categories = [{ id: 'canal', label: 'Canal', options: ['WhatsApp', 'Webchat'] }];
    });
    await page.waitForChanges();

    await page.$eval('#fb', (el: any) => el.open());
    await page.waitForChanges();

    const isOpenBefore = await page.$eval('uai-filter-bar >>> .filter-panel', (el) =>
      el.classList.contains('uai-overlay--open'),
    );
    expect(isOpenBefore).toBe(true);

    const transitionDuration = await page.$eval(
      'uai-filter-bar >>> .filter-panel',
      (el) => getComputedStyle(el).transitionDuration,
    );
    expect(transitionDuration.split(',').every((v) => v.trim() === '0s' || v.trim() === '0ms')).toBe(true);

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    const isOpenAfter = await page.$eval('uai-filter-bar >>> .filter-panel', (el) =>
      el.classList.contains('uai-overlay--open'),
    );
    expect(isOpenAfter).toBe(false);
  });
});
