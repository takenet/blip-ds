import { newE2EPage } from '@stencil/core/testing';

describe('uai-radio e2e', () => {
  it('submits its value when selected and leaves unselected radios out of FormData', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <uai-radio label="Cartão" name="payment" value="card"></uai-radio>
          <uai-radio label="Pix" name="payment" value="pix" checked></uai-radio>
        </form>`,
    });

    expect(await page.evaluate(() => [...new FormData(document.querySelector('form')).entries()])).toEqual([
      ['payment', 'pix'],
    ]);

    await page.click('uai-radio[value="card"] >>> input');
    await page.waitForChanges();

    expect(await page.evaluate(() => [...new FormData(document.querySelector('form')).entries()])).toEqual([
      ['payment', 'card'],
    ]);
  });

  it('does not emit selection events when disabled and supports Enter activation', async () => {
    const page = await newE2EPage({
      html: `
        <uai-radio label="Desabilitado" value="disabled" disabled></uai-radio>
        <uai-radio label="Ativo" value="active"></uai-radio>`,
    });
    const events = await page.spyOnEvent('uaiClickChange');

    await page.click('uai-radio[value="disabled"] >>> input');
    await page.focus('uai-radio[value="active"] >>> input');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(events).toHaveReceivedEventTimes(1);
    expect(await page.$eval('uai-radio[value="active"]', (el: any) => el.checked)).toBe(true);
    expect(await page.$eval('uai-radio[value="disabled"]', (el: any) => el.checked)).toBe(false);
  });

  it('matches tokenized control and dot dimensions for all sizes in both themes', async () => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light">
        <uai-radio size="short" value="short" aria-label="Curto" checked></uai-radio>
        <uai-radio value="standard" aria-label="Padrão" checked></uai-radio>
        <uai-radio size="tall" value="tall" aria-label="Alto" checked></uai-radio>
      </uai-theme-provider>`,
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    for (const theme of ['light', 'dark']) {
      await page.$eval('uai-theme-provider', (host, value) => host.setAttribute('theme', value), theme);
      await page.waitForChanges();
      for (const [value, dimension] of [
        ['short', 16],
        ['standard', 20],
        ['tall', 24],
      ] as const) {
        expect(
          await page.$eval(`uai-radio[value="${value}"] >>> .radio__control`, (control: HTMLElement) => {
            const input = control.querySelector<HTMLElement>('.radio__input');
            const dot = control.querySelector<HTMLElement>('.radio__dot');
            return {
              control: [control.getBoundingClientRect().width, control.getBoundingClientRect().height],
              input: [input.getBoundingClientRect().width, input.getBoundingClientRect().height],
              dot: [parseFloat(getComputedStyle(dot).width), parseFloat(getComputedStyle(dot).height)],
              dotOpacity: getComputedStyle(dot).opacity,
            };
          }),
        ).toEqual({
          control: [dimension, dimension],
          input: [dimension, dimension],
          dot: [dimension / 2, dimension / 2],
          dotOpacity: '1',
        });
      }
    }
  });

  it('shows the hover halo only for enabled controls in both themes', async () => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light">
        <uai-radio value="available" aria-label="Disponível"></uai-radio>
        <uai-radio value="selected" aria-label="Selecionado" checked></uai-radio>
        <uai-radio value="disabled" aria-label="Desabilitado" disabled></uai-radio>
        <uai-radio value="disabled-selected" aria-label="Selecionado desabilitado" checked disabled></uai-radio>
      </uai-theme-provider>`,
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    const haloOpacity = (value: string) =>
      page.$eval(
        `uai-radio[value="${value}"] >>> .radio__control`,
        (control: HTMLElement) => getComputedStyle(control, '::before').opacity,
      );

    for (const theme of ['light', 'dark']) {
      await page.$eval('uai-theme-provider', (host, value) => host.setAttribute('theme', value), theme);
      await page.waitForChanges();

      await page.hover('uai-radio[value="available"] >>> .radio__control');
      expect(await haloOpacity('available')).toBe('1');
      await page.mouse.move(0, 0);
      expect(await haloOpacity('available')).toBe('0');

      await page.hover('uai-radio[value="selected"] >>> .radio__control');
      expect(await haloOpacity('selected')).toBe('1');

      await page.hover('uai-radio[value="disabled"] >>> .radio__control');
      expect(await haloOpacity('disabled')).toBe('0');
      await page.hover('uai-radio[value="disabled-selected"] >>> .radio__control');
      expect(await haloOpacity('disabled-selected')).toBe('0');
      await page.mouse.move(0, 0);
    }
  });
});
