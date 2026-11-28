import { newE2EPage } from '@stencil/core/testing';

const rowStyle = (page, selector: string, pseudo: string | null = null) =>
  page.$eval(
    `${selector} >>> .list-item`,
    (element: HTMLElement, pseudoElement: string | null) => {
      const style = getComputedStyle(element, pseudoElement);
      return {
        background: style.backgroundColor,
        transition: style.transitionDuration,
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
      };
    },
    pseudo,
  );

describe('uai-list-item e2e', () => {
  it('reaches interactive rows with Tab, shows the focus ring and toggles with Space and Enter', async () => {
    const page = await newE2EPage({
      html: `<uai-list-item id="text" text="Só texto"></uai-list-item>
        <uai-list-item id="check" type-list="checkbox" value="01" text="Conversas"></uai-list-item>`,
    });
    const checked = await page.spyOnEvent('uaiChecked');
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement?.id)).toBe('check');
    const focused = await rowStyle(page, '#check');
    expect(focused.outlineStyle).toBe('solid');
    expect(focused.outlineWidth).toBe('2px');
    await page.keyboard.press('Space');
    await page.waitForChanges();
    expect(await page.$eval('#check', (item: HTMLUaiListItemElement) => item.checked)).toBe(true);
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(await page.$eval('#check', (item: HTMLUaiListItemElement) => item.checked)).toBe(false);
    expect(checked).toHaveReceivedEventTimes(2);
  });

  it('shows hover with overlay/hover only on clickable rows', async () => {
    const page = await newE2EPage({
      html: `<uai-list-item id="plain" text="Texto"></uai-list-item>
        <uai-list-item id="clickable" clickable text="Abrir"></uai-list-item>`,
    });
    // Without transitions, so the computed color is the final one.
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.hover('#clickable');
    expect((await rowStyle(page, '#clickable', '::before')).background).toBe('rgba(0, 0, 0, 0.08)');
    await page.hover('#plain');
    expect((await rowStyle(page, '#plain', '::before')).background).toBe('rgba(0, 0, 0, 0)');
  });

  it('animates the state layer with duration/fast and not at all with reduced motion', async () => {
    const page = await newE2EPage({ html: '<uai-list-item clickable text="Abrir"></uai-list-item>' });
    expect((await rowStyle(page, 'uai-list-item', '::before')).transition).toBe('0.15s');
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    expect((await rowStyle(page, 'uai-list-item', '::before')).transition).toBe('0s');
  });

  it('bug 3: a real click on an action button emits the action events without toggling checked', async () => {
    const page = await newE2EPage({
      html: `<uai-list-item value="01" text="Relatório" actions-buttons='["copy"]'></uai-list-item>`,
    });
    const checked = await page.spyOnEvent('uaiChecked');
    const original = await page.spyOnEvent('uaiClickActionButtom');
    const corrected = await page.spyOnEvent('uaiClickActionButton');
    await page.click('uai-list-item >>> uai-button');
    await page.waitForChanges();
    expect(original).toHaveReceivedEventTimes(1);
    expect(corrected).toHaveReceivedEventTimes(1);
    expect(original.lastEvent.detail.icon).toBe('copy');
    expect(checked).toHaveReceivedEventTimes(0);
    expect(await page.$eval('uai-list-item', (item: HTMLUaiListItemElement) => item.checked)).toBe(false);
  });

  it('clicks on the inner control toggle the row once and keep the control change events inside', async () => {
    const page = await newE2EPage({ html: '<uai-list-item type-list="switch" value="01" text="Notificações"></uai-list-item>' });
    const checked = await page.spyOnEvent('uaiChecked');
    const inner = await page.spyOnEvent('uaiChange');
    await page.click('uai-list-item >>> .control');
    await page.waitForChanges();
    expect(checked).toHaveReceivedEventTimes(1);
    expect(inner).toHaveReceivedEventTimes(0);
    expect(await page.$eval('uai-list-item >>> uai-switch', (control: HTMLUaiSwitchElement) => control.checked)).toBe(true);
  });
});
