import { newSpecPage } from '@stencil/core/testing';
import { UaiTabGroup } from '../uai-tab-group';
import { UaiTabItem } from '../../uai-tab-item/uai-tab-item';
import { UaiBadge } from '../../uai-badge/uai-badge';
import { UaiTabItemElement } from '../../uai-tab-item/uai-tab-item-interface';
import { resetDeprecationWarnings } from '../../../utils/deprecation';

const setup = (items = '<uai-tab-item label="Resumo">Painel resumo</uai-tab-item><uai-tab-item label="Detalhes">Painel detalhes</uai-tab-item>', props = '') =>
  newSpecPage({
    components: [UaiTabGroup, UaiTabItem, UaiBadge],
    html: `<uai-tab-group aria-label="Relatórios" ${props}>${items}</uai-tab-group>`,
  });

describe('uai-tab-group', () => {
  beforeEach(() => resetDeprecationWarnings());

  it('preserves defaults and exposes related tab and panel roles in the same scope', async () => {
    const page = await setup();
    expect(page.rootInstance.align).toBe('center');
    expect(page.rootInstance.contentScrollable).toBe(true);
    expect(page.rootInstance.dtButtonPrev).toBeNull();
    expect(page.rootInstance.dtButtonNext).toBeNull();
    expect(page.root.shadowRoot).toBeNull();
    expect(page.root.querySelector('[role="tablist"]').getAttribute('aria-label')).toBe('Relatórios');
    const tabs = page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const panels = page.root.querySelectorAll<UaiTabItemElement>('uai-tab-item');
    expect(tabs).toHaveLength(2);
    expect(tabs[0].getAttribute('aria-controls')).toBe(panels[0].id);
    expect(panels[0].getAttribute('aria-labelledby')).toBe(tabs[0].id);
    expect(panels[0].getAttribute('role')).toBe('tabpanel');
    expect(panels[0].open).toBe(true);
    expect(panels[1].hidden).toBe(true);
    expect(tabs[0].tabIndex).toBe(0);
    expect(tabs[1].tabIndex).toBe(-1);
    expect(panels[0].textContent).toContain('Painel resumo');
  });

  it('selects and reactivates with a single event containing the actual item element', async () => {
    const page = await setup();
    const change = jest.fn();
    page.root.addEventListener('uaiTabChange', change);
    const second = page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]')[1];
    second.click();
    await page.waitForChanges();
    second.click();
    await page.waitForChanges();
    const items = page.root.querySelectorAll<UaiTabItemElement>('uai-tab-item');
    expect(change).toHaveBeenCalledTimes(2);
    expect(change.mock.calls[0][0].detail).toBe(items[1]);
    expect(change.mock.calls[0][0].bubbles).toBe(true);
    expect(change.mock.calls[0][0].composed).toBe(true);
    expect(change.mock.calls[0][0].cancelable).toBe(true);
    expect(items[0].open).toBe(false);
    expect(items[1].open).toBe(true);
  });

  it('opens the first enabled tab and leaves an entirely disabled or empty group without a selection', async () => {
    const page = await setup('<uai-tab-item label="Indisponível" disable></uai-tab-item><uai-tab-item label="Resumo"></uai-tab-item>');
    const items = page.root.querySelectorAll<UaiTabItemElement>('uai-tab-item');
    expect(items[0].open).toBe(false);
    expect(items[1].open).toBe(true);
    const disabled = await setup('<uai-tab-item label="Indisponível" disable open></uai-tab-item>');
    expect(disabled.root.querySelector<UaiTabItemElement>('uai-tab-item').open).toBe(false);
    expect(disabled.root.querySelector('[role="tab"]').getAttribute('aria-selected')).toBe('false');
    const empty = await setup('');
    expect(empty.root.querySelectorAll('[role="tab"]')).toHaveLength(0);
  });

  it('normalizes multiple initial open props without emitting a user event', async () => {
    const page = await setup('<uai-tab-item label="Um" open></uai-tab-item><uai-tab-item label="Dois" open></uai-tab-item>');
    const items = page.root.querySelectorAll<UaiTabItemElement>('uai-tab-item');
    expect(items[0].open).toBe(true);
    expect(items[1].open).toBe(false);
  });

  it('distinguishes a disabled activation from an availability prop change', async () => {
    const page = await setup('<uai-tab-item label="Resumo"></uai-tab-item><uai-tab-item label="Detalhes" disable></uai-tab-item>');
    const change = jest.fn();
    const attempted = jest.fn();
    const availability = jest.fn();
    page.root.addEventListener('uaiTabChange', change);
    page.root.addEventListener('uaiTabDisabled', attempted);
    page.root.addEventListener('uaiDisabled', availability);
    const second = page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]')[1];
    const item = page.root.querySelectorAll<UaiTabItemElement>('uai-tab-item')[1];
    second.click();
    await page.waitForChanges();
    expect(attempted).toHaveBeenCalledTimes(1);
    expect(attempted.mock.calls[0][0].detail).toBe(item);
    expect(change).not.toHaveBeenCalled();
    item.disable = false;
    await page.waitForChanges();
    expect(availability).toHaveBeenCalledTimes(1);
    expect(availability.mock.calls[0][0].detail).toEqual({ item: 1, disable: false });
    expect(attempted).toHaveBeenCalledTimes(1);
  });

  it('handles external selection and disabled selection recovery without fake activation events', async () => {
    const page = await setup();
    const change = jest.fn();
    page.root.addEventListener('uaiTabChange', change);
    const items = page.root.querySelectorAll<UaiTabItemElement>('uai-tab-item');
    items[1].open = true;
    await page.waitForChanges();
    expect(items[1].open).toBe(true);
    expect(items[0].open).toBe(false);
    items[1].disable = true;
    await page.waitForChanges();
    expect(items[0].open).toBe(true);
    expect(items[1].hidden).toBe(true);
    expect(change).not.toHaveBeenCalled();
  });

  it('moves focus manually, skips disabled tabs, wraps and activates once with Space or Enter', async () => {
    const page = await setup('<uai-tab-item label="Um"></uai-tab-item><uai-tab-item label="Dois" disable></uai-tab-item><uai-tab-item label="Três"></uai-tab-item>');
    const change = jest.fn();
    page.root.addEventListener('uaiTabChange', change);
    let tabs = page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
    await page.waitForChanges();
    tabs = page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs[2].tabIndex).toBe(0);
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(change).not.toHaveBeenCalled();
    tabs[2].dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
    await page.waitForChanges();
    expect(change).toHaveBeenCalledTimes(1);
    tabs[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true, cancelable: true }));
    await page.waitForChanges();
    tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true, cancelable: true }));
    await page.waitForChanges();
    expect(tabs[2].tabIndex).toBe(0);
    tabs[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
    await page.waitForChanges();
    expect(change).toHaveBeenCalledTimes(2);
    const tab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    tabs[2].dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(false);
  });

  it('retains icon, badge, error and layout properties across activation and later changes', async () => {
    const page = await setup('<uai-tab-item label="Resumo" icon="info" icon-position="right" badge badge-number="1000" badge-position="left" error></uai-tab-item><uai-tab-item label="Detalhes"></uai-tab-item>');
    page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]')[1].click();
    await page.waitForChanges();
    page.root.querySelectorAll<HTMLButtonElement>('[role="tab"]')[0].click();
    await page.waitForChanges();
    let first = page.root.querySelector('[role="tab"]');
    expect(first.querySelector('uai-badge').shadowRoot.querySelector('uai-typo').textContent).toBe('999+');
    expect(first.getAttribute('aria-invalid')).toBe('true');
    expect(first.querySelector('uai-icon[name="info"]')).not.toBeNull();
    const item = page.root.querySelector<UaiTabItemElement>('uai-tab-item');
    item.badgeNumber = 0;
    item.label = 'Atualizado';
    await page.waitForChanges();
    first = page.root.querySelector('[role="tab"]');
    expect(first.getAttribute('aria-label')).toBe('Atualizado');
    expect(first.querySelector('uai-badge').shadowRoot.querySelector('.badge--empty')).not.toBeNull();
    expect(first.querySelector('uai-badge').shadowRoot.querySelector('uai-typo')).toBeNull();
  });

  it('composes the public badge without changing item shapes, colors, animation or positioning props', async () => {
    const page = await setup('<uai-tab-item label="Resumo" badge badge-shape="triangle" badge-color="warning" badge-animation></uai-tab-item>');
    const badge = page.root.querySelector('uai-badge');
    expect(badge.shape).toBe('triangle');
    expect(badge.color).toBe('warning');
    expect(badge.animation).toBe(true);
    expect(badge.number).toBeNull();
    expect(badge.icon).toBeNull();
    expect(badge.shadowRoot.querySelector('.badge--triangle.badge--warning.badge--animated')).not.toBeNull();
    expect(page.root.querySelector('bds-badge')).toBeNull();
  });

  it('renders icon-only tabs without discarding the accessible label', async () => {
    const page = await setup('<uai-tab-item label="Informações" icon="info" icon-only></uai-tab-item>');
    const tab = page.root.querySelector('[role="tab"]');
    expect(tab.getAttribute('aria-label')).toBe('Informações');
    expect(tab.querySelector('uai-typo')).toBeNull();
    expect(tab.querySelector('uai-icon')).not.toBeNull();
  });

  it('keeps independent groups isolated even when they are nested in panels', async () => {
    const page = await setup('<uai-tab-item label="Externo"><uai-tab-group aria-label="Interno"><uai-tab-item label="Interno um"></uai-tab-item><uai-tab-item label="Interno dois"></uai-tab-item></uai-tab-group></uai-tab-item><uai-tab-item label="Outro"></uai-tab-item>');
    const outerList = page.root.querySelector('.uai-tabs__list');
    expect(outerList.querySelectorAll('[role="tab"]')).toHaveLength(2);
    const inner = page.root.querySelector('uai-tab-item').querySelector('uai-tab-group');
    inner.querySelectorAll<HTMLButtonElement>('[role="tab"]')[1].click();
    await page.waitForChanges();
    expect(outerList.querySelector('[role="tab"]').getAttribute('aria-selected')).toBe('true');
    expect(inner.querySelectorAll('[role="tab"]')[1].getAttribute('aria-selected')).toBe('true');
  });
});
