import { newE2EPage } from '@stencil/core/testing';

describe('uai-switch e2e', () => {
  it('uses the visible label for naming, activation and hover without enabling disabled settings', async () => {
    const page = await newE2EPage({
      html: '<meta charset="utf-8"><uai-switch label="Notificações"></uai-switch><uai-switch label="Indisponível" disabled></uai-switch>',
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const events = await page.spyOnEvent('uaiChange');
    expect(
      await page.$eval('uai-switch >>> input', (input: HTMLInputElement) => input.labels[0].textContent.trim()),
    ).toBe('Notificações');
    await page.hover('uai-switch >>> .switch__text');
    expect(
      await page.$eval(
        'uai-switch >>> .switch__handle',
        (handle: HTMLElement) => getComputedStyle(handle, '::before').opacity,
      ),
    ).toBe('1');
    await page.click('uai-switch >>> .switch__text');
    await page.waitForChanges();
    expect(events).toHaveReceivedEventTimes(1);
    expect(events.lastEvent.detail).toEqual({ checked: true });
    await page.click('uai-switch[disabled] >>> .switch__text');
    await page.waitForChanges();
    expect(events).toHaveReceivedEventTimes(1);
  });

  it('handles keyboard and events once, exposes switch semantics and skips disabled controls', async () => {
    const page = await newE2EPage({
      html: '<uai-switch aria-label="Notificações"></uai-switch><uai-switch aria-label="Indisponível" disabled></uai-switch>',
    });
    const events = await page.spyOnEvent('uaiChange');
    await page.focus('uai-switch >>> input');
    await page.keyboard.press('Space');
    await page.waitForChanges();
    expect(events).toHaveReceivedEventTimes(1);
    expect(events.lastEvent.detail).toEqual({ checked: true });
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(events).toHaveReceivedEventTimes(2);
    expect(events.lastEvent.detail).toEqual({ checked: false });
    expect(await page.$eval('uai-switch >>> input', (input: HTMLInputElement) => input.getAttribute('role'))).toBe(
      'switch',
    );
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement?.tagName)).not.toBe('UAI-SWITCH');
  });

  it('submits checked values, restores defaults on reset and honors disabled fieldsets', async () => {
    const page = await newE2EPage({
      html: `<form>
        <uai-switch name="notifications" value="email" checked aria-label="Notificações"></uai-switch>
        <uai-switch name="updates" aria-label="Atualizações"></uai-switch>
        <fieldset disabled><uai-switch name="disabled" checked aria-label="Indisponível"></uai-switch></fieldset>
        <button type="reset">Restaurar</button>
      </form>`,
    });
    const values = () => page.evaluate(() => Array.from(new FormData(document.querySelector('form')).entries()));
    expect(await values()).toEqual([['notifications', 'email']]);
    expect(await page.$eval('uai-switch[name="disabled"] >>> input', (input: HTMLInputElement) => input.disabled)).toBe(
      true,
    );
    await page.click('uai-switch[name="notifications"] >>> input');
    await page.waitForChanges();
    expect(await values()).toEqual([]);
    await page.click('button');
    await page.waitForChanges();
    expect(await values()).toEqual([['notifications', 'email']]);
  });

  it('matches tokenized geometry in both themes and disables motion on request', async () => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light">
        <uai-switch aria-label="Curto" size="short" checked></uai-switch>
        <uai-switch aria-label="Padrão" checked></uai-switch>
        <uai-switch aria-label="Alto" size="tall" checked></uai-switch>
      </uai-theme-provider>`,
    });
    for (const theme of ['light', 'dark']) {
      await page.$eval('uai-theme-provider', (host, value) => host.setAttribute('theme', value), theme);
      await page.waitForChanges();
      for (const [selector, width, height, handle, translation] of [
        ['[size="short"]', 32, 16, 12, 16],
        [':not([size])', 40, 20, 16, 20],
        ['[size="tall"]', 48, 24, 20, 24],
      ] as const) {
        expect(
          await page.$eval(`uai-switch${selector} >>> .switch__track`, (track: HTMLElement) => {
            const handle = track.querySelector<HTMLElement>('.switch__handle');
            return {
              width: track.getBoundingClientRect().width,
              height: track.getBoundingClientRect().height,
              handle: handle.getBoundingClientRect().width,
              translation: new DOMMatrix(getComputedStyle(handle).transform).m41,
            };
          }),
        ).toEqual({ width, height, handle, translation });
      }
    }
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    expect(
      await page.$eval(
        'uai-switch >>> .switch__handle',
        (handle: HTMLElement) => getComputedStyle(handle).transitionDuration,
      ),
    ).toBe('0s');
  });

  it('shows the hover halo only for enabled controls in both themes', async () => {
    const page = await newE2EPage({
      html: `<uai-theme-provider theme="light">
        <uai-switch name="available" aria-label="Disponível"></uai-switch>
        <uai-switch name="selected" aria-label="Selecionado" checked></uai-switch>
        <uai-switch name="disabled" aria-label="Desabilitado" disabled></uai-switch>
        <uai-switch name="disabled-selected" aria-label="Selecionado desabilitado" checked disabled></uai-switch>
      </uai-theme-provider>`,
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    const haloOpacity = (name: string) =>
      page.$eval(
        `uai-switch[name="${name}"] >>> .switch__handle`,
        (handle: HTMLElement) => getComputedStyle(handle, '::before').opacity,
      );

    for (const theme of ['light', 'dark']) {
      await page.$eval('uai-theme-provider', (host, value) => host.setAttribute('theme', value), theme);
      await page.waitForChanges();

      await page.hover('uai-switch[name="available"] >>> input');
      expect(await haloOpacity('available')).toBe('1');
      await page.mouse.move(0, 0);
      expect(await haloOpacity('available')).toBe('0');

      await page.hover('uai-switch[name="selected"] >>> input');
      expect(await haloOpacity('selected')).toBe('1');

      await page.hover('uai-switch[name="disabled"] >>> input');
      expect(await haloOpacity('disabled')).toBe('0');
      await page.hover('uai-switch[name="disabled-selected"] >>> input');
      expect(await haloOpacity('disabled-selected')).toBe('0');
      await page.mouse.move(0, 0);
    }
  });
});
