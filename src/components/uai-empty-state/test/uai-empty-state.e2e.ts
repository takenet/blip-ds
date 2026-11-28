import { newE2EPage } from '@stencil/core/testing';

const wrap = (html: string) => `<uai-theme-provider theme="light">${html}</uai-theme-provider>`;

const boxSize = (page, selector = 'uai-empty-state') =>
  page.evaluate((sel) => {
    const box = document.querySelector(sel).shadowRoot.querySelector('.empty-state__icon-box') as HTMLElement;
    const rect = box.getBoundingClientRect();
    return { width: rect.width, height: rect.height, radius: getComputedStyle(box).borderTopLeftRadius };
  }, selector);

describe('uai-empty-state e2e', () => {
  it('lays out the page variant with the UAI sizes', async () => {
    const page = await newE2EPage({
      html: wrap('<uai-empty-state heading="Escolha uma conversa" description="Texto de apoio"></uai-empty-state>'),
    });
    const box = await boxSize(page);
    expect(box.width).toBe(40);
    expect(box.height).toBe(40);
    const host = await page.find('uai-empty-state');
    const style = await host.getComputedStyle();
    expect(style.paddingTop).toBe('40px');
    expect(style.paddingLeft).toBe('24px');
    expect(style.textAlign).toBe('center');
  });

  it('lays out the inline variant with the smaller sizes', async () => {
    const page = await newE2EPage({
      html: wrap('<uai-empty-state variant="inline" heading="Nenhum contato"></uai-empty-state>'),
    });
    const box = await boxSize(page);
    expect(box.width).toBe(32);
    const host = await page.find('uai-empty-state');
    const style = await host.getComputedStyle();
    expect(style.paddingTop).toBe('24px');
    expect(style.paddingLeft).toBe('16px');
  });

  it('renders the heading with the chosen element', async () => {
    const page = await newE2EPage({
      html: wrap('<uai-empty-state heading="Título" heading-tag="h3"></uai-empty-state>'),
    });
    const tag = await page.evaluate(() => {
      const typo = document.querySelector('uai-empty-state').shadowRoot.querySelector('.empty-state__heading');
      return typo.shadowRoot.querySelector('.typo').tagName;
    });
    expect(tag).toBe('H3');
  });

  it('hides the empty description and actions', async () => {
    const page = await newE2EPage({ html: wrap('<uai-empty-state heading="Título"></uai-empty-state>') });
    const displays = await page.evaluate(() => {
      const root = document.querySelector('uai-empty-state').shadowRoot;
      return ['.empty-state__description', '.empty-state__actions'].map(
        (sel) => getComputedStyle(root.querySelector(sel)).display,
      );
    });
    expect(displays).toEqual(['none', 'none']);
  });

  it('shows actions added after load and keeps focus on the slotted button only', async () => {
    const page = await newE2EPage({ html: wrap('<uai-empty-state heading="Título"></uai-empty-state>') });
    await page.evaluate(() => {
      const button = document.createElement('uai-button');
      button.setAttribute('slot', 'actions');
      button.textContent = 'Tentar de novo';
      document.querySelector('uai-empty-state').appendChild(button);
    });
    await page.waitForChanges();
    const display = await page.evaluate(
      () =>
        getComputedStyle(
          document.querySelector('uai-empty-state').shadowRoot.querySelector('.empty-state__actions'),
        ).display,
    );
    expect(display).toBe('flex');

    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBe('UAI-BUTTON');
  });

  it('uses role="alert" and the error colors in the error tone', async () => {
    const page = await newE2EPage({
      html: wrap('<uai-empty-state tone="error" heading="Não foi possível carregar"></uai-empty-state>'),
    });
    const host = await page.find('uai-empty-state');
    expect(host.getAttribute('role')).toBe('alert');
    const colors = await page.evaluate(() => {
      const box = document.querySelector('uai-empty-state').shadowRoot.querySelector('.empty-state__icon-box');
      const style = getComputedStyle(box);
      return { color: style.color, background: style.backgroundColor };
    });
    const neutral = await newE2EPage({ html: wrap('<uai-empty-state heading="Título"></uai-empty-state>') });
    const neutralColors = await neutral.evaluate(() => {
      const box = document.querySelector('uai-empty-state').shadowRoot.querySelector('.empty-state__icon-box');
      const style = getComputedStyle(box);
      return { color: style.color, background: style.backgroundColor };
    });
    expect(colors.color).not.toBe(neutralColors.color);
    expect(colors.background).not.toBe(neutralColors.background);
  });
});
