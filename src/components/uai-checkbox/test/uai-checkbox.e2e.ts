import { newE2EPage } from '@stencil/core/testing';

describe('uai-checkbox e2e', () => {
  it('submits only checked values and restores the initial state on form reset', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <uai-checkbox label="Novidades" name="updates" value="email" checked></uai-checkbox>
          <uai-checkbox label="Promoções" name="promotions" value="sms"></uai-checkbox>
          <button type="reset">Limpar</button>
        </form>`,
    });

    const initialData = await page.evaluate(() => [...new FormData(document.querySelector('form')).entries()]);
    expect(initialData).toEqual([['updates', 'email']]);

    await page.click('uai-checkbox[name="promotions"] >>> input');
    await page.click('button');
    await page.waitForChanges();

    expect(await page.$eval('uai-checkbox[name="updates"]', (el: any) => el.checked)).toBe(true);
    expect(await page.$eval('uai-checkbox[name="promotions"]', (el: any) => el.checked)).toBe(false);
  });

  it('blocks submission for an unchecked required checkbox and marks it invalid', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <uai-checkbox label="Aceito os termos" name="terms" required required-error-message="Aceite os termos."></uai-checkbox>
          <button type="submit">Enviar</button>
        </form>`,
    });

    await page.click('button');
    await page.waitForChanges();

    expect(await page.$eval('uai-checkbox', (el: any) => el.getAttribute('aria-invalid'))).toBe('true');
  });

  it('uses Enter to toggle, leaves Space to native checkbox behavior, and honors fieldset disabled', async () => {
    const page = await newE2EPage({
      html: `
        <form>
          <fieldset disabled>
            <uai-checkbox label="Desabilitado" name="disabled"></uai-checkbox>
          </fieldset>
          <uai-checkbox label="Ativo" name="active"></uai-checkbox>
        </form>`,
    });

    expect(
      await page.$eval('uai-checkbox[name="disabled"] >>> input', (input: HTMLInputElement) => input.disabled),
    ).toBe(true);
    await page.focus('uai-checkbox[name="active"] >>> input');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await page.$eval('uai-checkbox[name="active"]', (el: any) => el.checked)).toBe(true);
  });

  it('disables transitions when reduced motion is requested', async () => {
    const page = await newE2EPage({ html: '<uai-checkbox label="Ativo"></uai-checkbox>' });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    expect(
      await page.$eval(
        'uai-checkbox >>> .checkbox__indicator',
        (indicator: HTMLElement) => getComputedStyle(indicator).transitionDuration,
      ),
    ).toBe('0s');
  });

  it('matches all size geometries and keeps selected and mixed marks visible in both themes', async () => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light">
        <uai-checkbox size="short" name="short-checked" label="Curto marcado" checked></uai-checkbox>
        <uai-checkbox size="short" name="short-mixed" label="Curto parcial" indeterminate></uai-checkbox>
        <uai-checkbox name="standard-checked" label="Padrão marcado" checked></uai-checkbox>
        <uai-checkbox name="standard-mixed" label="Padrão parcial" indeterminate></uai-checkbox>
        <uai-checkbox size="tall" name="tall-checked" label="Alto marcado" checked></uai-checkbox>
        <uai-checkbox size="tall" name="tall-mixed" label="Alto parcial" indeterminate></uai-checkbox>
      </uai-theme-provider>`,
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    const sizes = [
      { size: 'short', control: 16, radius: 4 },
      { size: 'standard', control: 20, radius: 8 },
      { size: 'tall', control: 24, radius: 8 },
    ] as const;

    for (const theme of ['light', 'dark']) {
      await page.$eval('uai-theme-provider', (host, value) => host.setAttribute('theme', value), theme);
      await page.waitForChanges();
      for (const { size, control, radius } of sizes) {
        const geometry = await page.$eval(
          `uai-checkbox[name="${size}-checked"] >>> .checkbox__indicator`,
          (indicator: HTMLElement) => {
            const style = getComputedStyle(indicator);
            const mark = getComputedStyle(indicator, '::after');
            return {
              width: parseFloat(style.width),
              height: parseFloat(style.height),
              radius: parseFloat(style.borderRadius),
              markWidth: parseFloat(mark.width),
              markHeight: parseFloat(mark.height),
              visibility: mark.visibility,
            };
          },
        );
        expect(geometry.width).toBe(control);
        expect(geometry.height).toBe(control);
        expect(geometry.radius).toBe(radius);
        expect(geometry.markWidth).toBeCloseTo(control * 0.5, 1);
        expect(geometry.markHeight).toBeCloseTo(control * 0.35, 1);
        expect(geometry.visibility).toBe('visible');

        const mixedMark = await page.$eval(
          `uai-checkbox[name="${size}-mixed"] >>> .checkbox__indicator`,
          (indicator: HTMLElement) => {
            const mark = getComputedStyle(indicator, '::after');
            return { width: parseFloat(mark.width), height: parseFloat(mark.height), visibility: mark.visibility };
          },
        );
        expect(mixedMark.width).toBeCloseTo(control * 0.6, 1);
        expect(mixedMark.height).toBeCloseTo(control * 0.1, 1);
        expect(mixedMark.visibility).toBe('visible');
      }
    }
    await page.focus('uai-checkbox[size="short"] >>> input');
    await page.waitForChanges();
    expect(
      await page.$eval(
        'uai-checkbox[size="short"] >>> .checkbox__indicator',
        (indicator: HTMLElement) => getComputedStyle(indicator, '::before').opacity,
      ),
    ).toBe('1');
  });

  it('shows the hover halo only for enabled controls in both themes', async () => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light">
        <uai-checkbox name="available" label="Disponível"></uai-checkbox>
        <uai-checkbox name="selected" label="Selecionado" checked></uai-checkbox>
        <uai-checkbox name="disabled" label="Desabilitado" disabled></uai-checkbox>
        <uai-checkbox name="disabled-selected" label="Selecionado desabilitado" checked disabled></uai-checkbox>
      </uai-theme-provider>`,
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    const haloOpacity = (name: string) =>
      page.$eval(
        `uai-checkbox[name="${name}"] >>> .checkbox__indicator`,
        (indicator: HTMLElement) => getComputedStyle(indicator, '::before').opacity,
      );

    for (const theme of ['light', 'dark']) {
      await page.$eval('uai-theme-provider', (host, value) => host.setAttribute('theme', value), theme);
      await page.waitForChanges();

      await page.hover('uai-checkbox[name="available"] >>> .checkbox');
      expect(await haloOpacity('available')).toBe('1');
      await page.mouse.move(0, 0);
      expect(await haloOpacity('available')).toBe('0');

      await page.hover('uai-checkbox[name="selected"] >>> .checkbox');
      expect(await haloOpacity('selected')).toBe('1');

      await page.hover('uai-checkbox[name="disabled"] >>> .checkbox');
      expect(await haloOpacity('disabled')).toBe('0');
      await page.hover('uai-checkbox[name="disabled-selected"] >>> .checkbox');
      expect(await haloOpacity('disabled-selected')).toBe('0');
      await page.mouse.move(0, 0);
    }
  });
});
