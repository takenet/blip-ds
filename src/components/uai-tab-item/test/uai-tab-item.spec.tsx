import { newSpecPage } from '@stencil/core/testing';
import { UaiTabItem } from '../uai-tab-item';

describe('uai-tab-item', () => {
  it('preserves all inherited defaults and content', async () => {
    const page = await newSpecPage({ components: [UaiTabItem], html: '<uai-tab-item>Conteúdo</uai-tab-item>' });
    const item = page.rootInstance;
    expect(item.numberElement).toBeNull();
    expect(item.label).toBeNull();
    expect(item.icon).toBeNull();
    expect(item.iconPosition).toBe('left');
    expect(item.iconTheme).toBe('outline');
    expect(item.badge).toBe(false);
    expect(item.badgeShape).toBe('circle');
    expect(item.badgeColor).toBe('system');
    expect(item.badgeIcon).toBeNull();
    expect(item.badgeAnimation).toBe(false);
    expect(item.badgePosition).toBe('left');
    expect(item.badgeNumber).toBeNull();
    expect(item.disable).toBe(false);
    expect(item.error).toBe(false);
    expect(item.headerStyle).toBeNull();
    expect(item.contentStyle).toBeNull();
    expect(item.open).toBe(false);
    expect(item.dataTest).toBeNull();
    expect(page.root.hidden).toBe(true);
    expect(page.root.textContent).toBe('Conteúdo');
  });

  it('preserves the reciveNumber spelling and availability payload', async () => {
    const page = await newSpecPage({ components: [UaiTabItem], html: '<uai-tab-item label="Resumo"></uai-tab-item>' });
    const listener = jest.fn();
    page.root.addEventListener('uaiDisabled', listener);
    await page.rootInstance.reciveNumber(7);
    page.rootInstance.disable = true;
    await page.waitForChanges();
    expect(page.root.getAttribute('number-element')).toBe('7');
    expect(listener.mock.calls[0][0].detail).toEqual({ item: 7, disable: true });
    page.rootInstance.disable = false;
    await page.waitForChanges();
    expect(listener.mock.calls[1][0].detail).toEqual({ item: 7, disable: false });
  });

  it('hides disabled or closed panels and preserves the data-test target', async () => {
    const page = await newSpecPage({ components: [UaiTabItem], html: '<uai-tab-item open data-test="painel">Resumo</uai-tab-item>' });
    expect(page.root.hidden).toBe(false);
    expect(page.root).toHaveClass('is-open');
    expect(page.root.shadowRoot.querySelector('[data-test="painel"]')).not.toBeNull();
    page.rootInstance.disable = true;
    await page.waitForChanges();
    expect(page.root.hidden).toBe(true);
    expect(page.root).not.toHaveClass('is-open');
  });
});
