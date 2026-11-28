import { newSpecPage } from '@stencil/core/testing';
import { UaiListItem } from '../uai-list-item';
import { UaiListItemContent } from '../uai-list-item-content';
import { UaiGrid } from '../../uai-grid/uai-grid';

const render = (html: string) => newSpecPage({ components: [UaiListItem], html });
const row = (page) => page.root.shadowRoot.querySelector('.list-item') as HTMLElement;

describe('uai-list-item', () => {
  describe('API kept from bds-list-item', () => {
    it('has the same defaults', async () => {
      const page = await render('<uai-list-item></uai-list-item>');
      const item = page.rootInstance as UaiListItem;
      expect(item.checked).toBe(false);
      expect(item.typeList).toBeNull();
      expect(item.avatarName).toBeNull();
      expect(item.avatarThumbnail).toBeNull();
      expect(item.icon).toBeNull();
      expect(item.value).toBeNull();
      expect(item.text).toBeNull();
      expect(item.secondaryText).toBeNull();
      expect(item.chips).toEqual([]);
      expect(item.actionsButtons).toEqual([]);
      expect(item.clickable).toBe(false);
      expect(item.active).toBe(false);
      expect(item.borderRadius).toBe(false);
      expect(item.size).toBe('standard');
      expect(item.dataTest).toBeNull();
    });

    it.each(['tall', 'standard', 'short'])('applies the %s size', async (size) => {
      const page = await render(`<uai-list-item size="${size}"></uai-list-item>`);
      expect(row(page).classList.contains(`list-item--${size}`)).toBe(true);
    });

    it('renders text, secondary text, border radius and data-test', async () => {
      const page = await render(
        '<uai-list-item text="Título" secondary-text="Apoio" border-radius data-test="row"></uai-list-item>',
      );
      const title = page.root.shadowRoot.querySelector('.title-item');
      expect(title.textContent).toBe('Título');
      expect(title.getAttribute('variant')).toBe('body-lg');
      expect(page.root.shadowRoot.querySelector('.subtitle-item').getAttribute('variant')).toBe('caption');
      expect(row(page).classList.contains('list-item--border-radius')).toBe(true);
      expect(row(page).getAttribute('data-test')).toBe('row');
    });

    it('marks the active row: selected class, solid icon and bold text', async () => {
      const page = await render('<uai-list-item text="Atual" icon="home" active></uai-list-item>');
      expect(row(page).classList.contains('list-item--active')).toBe(true);
      expect(page.root.shadowRoot.querySelector('uai-icon').getAttribute('theme')).toBe('solid');
      expect(page.root.shadowRoot.querySelector('.title-item').getAttribute('bold')).toBe('bold');
    });

    it('uses the outline icon when not active', async () => {
      const page = await render('<uai-list-item icon="home"></uai-list-item>');
      expect(page.root.shadowRoot.querySelector('uai-icon').getAttribute('theme')).toBe('outline');
    });

    it('gives the avatar priority over the icon', async () => {
      const page = await render('<uai-list-item avatar-name="Ana Souza" icon="home"></uai-list-item>');
      const avatar = page.root.shadowRoot.querySelector('uai-avatar');
      expect(avatar.getAttribute('size')).toBe('extra-small');
      expect(page.root.shadowRoot.querySelector('uai-icon')).toBeNull();
    });

    it('puts checkbox and radio on the left and the switch on the right', async () => {
      for (const type of ['checkbox', 'radio']) {
        const page = await render(`<uai-list-item type-list="${type}" text="Item"></uai-list-item>`);
        expect(row(page).firstElementChild.classList.contains(`control--${type}`)).toBe(true);
      }
      const page = await render('<uai-list-item type-list="switch" text="Item"></uai-list-item>');
      expect(row(page).lastElementChild.classList.contains('control--switch')).toBe(true);
    });

    it('keeps the inner controls out of focus and of the accessibility tree', async () => {
      const page = await render('<uai-list-item type-list="checkbox" text="Item"></uai-list-item>');
      const control = page.root.shadowRoot.querySelector('.control');
      expect(control.getAttribute('aria-hidden')).toBe('true');
      expect(control.hasAttribute('inert')).toBe(true);
    });

    it('parses chips from JSON and cuts chips over 30 characters with a tooltip', async () => {
      const long = 'a'.repeat(31);
      const page = await render(`<uai-list-item chips='["Chip", "${long}"]'></uai-list-item>`);
      const chips = page.root.shadowRoot.querySelectorAll('.chip');
      expect(chips[0].textContent).toBe('Chip');
      expect(chips[1].textContent).toBe(`${'a'.repeat(30)} ...`);
      const tooltip = page.root.shadowRoot.querySelector('uai-tooltip');
      expect(tooltip.getAttribute('tooltip-text')).toBe(long);
      expect(tooltip.getAttribute('position')).toBe('top-center');
    });

    it('keeps the previous chips while the attribute is not valid JSON yet', async () => {
      const page = await render(`<uai-list-item chips='["Chip"]'></uai-list-item>`);
      page.root.setAttribute('chips', '{{ vm.chips }}');
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelectorAll('.chip').length).toBe(1);
    });

    it('renders action buttons as outline content short icon buttons with a name', async () => {
      const page = await render(`<uai-list-item actions-buttons='["copy", "more-options-horizontal"]'></uai-list-item>`);
      const buttons = page.root.shadowRoot.querySelectorAll('uai-button');
      expect(buttons.length).toBe(2);
      expect(buttons[0].getAttribute('variant')).toBe('outline');
      expect(buttons[0].getAttribute('color')).toBe('content');
      expect(buttons[0].getAttribute('size')).toBe('short');
      expect(buttons[0].getAttribute('icon')).toBe('copy');
      expect(buttons[0].getAttribute('aria-label')).toBe('copy');
    });

    it.each(['checkbox', 'radio', 'switch'])('hides the action area with typeList %s', async (type) => {
      const page = await render(`<uai-list-item type-list="${type}" actions-buttons='["copy"]'></uai-list-item>`);
      expect(page.root.shadowRoot.querySelector('.action-area')).toBeNull();
    });

    it('toggles checkbox and switch rows on click and emits uaiChecked', async () => {
      for (const type of ['checkbox', 'switch']) {
        const page = await render(
          `<uai-list-item type-list="${type}" value="01" text="Item" secondary-text="Apoio"></uai-list-item>`,
        );
        const spy = jest.fn();
        page.root.addEventListener('uaiChecked', spy);
        row(page).click();
        await page.waitForChanges();
        expect(page.root.checked).toBe(true);
        expect(spy.mock.calls[0][0].detail).toEqual({
          value: '01',
          text: 'Item',
          secondaryText: 'Apoio',
          typeList: type,
          checked: true,
        });
        row(page).click();
        await page.waitForChanges();
        expect(page.root.checked).toBe(false);
        expect(spy).toHaveBeenCalledTimes(2);
      }
    });

    it('keeps a radio row checked on a second click', async () => {
      const page = await render('<uai-list-item type-list="radio" value="01"></uai-list-item>');
      const spy = jest.fn();
      page.root.addEventListener('uaiChecked', spy);
      row(page).click();
      row(page).click();
      await page.waitForChanges();
      expect(page.root.checked).toBe(true);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('behavior changes from bds-list-item (SOLFAC-117)', () => {
    it('bug 4: does not emit uaiChecked when checked is changed by code', async () => {
      const page = await render('<uai-list-item type-list="checkbox" value="01"></uai-list-item>');
      const spy = jest.fn();
      page.root.addEventListener('uaiChecked', spy);
      page.root.checked = true;
      await page.waitForChanges();
      page.root.checked = false;
      await page.waitForChanges();
      expect(spy).not.toHaveBeenCalled();
    });

    it('bug 5: lets the text grow when there are no chips and no content or action slots', async () => {
      const page = await render('<uai-list-item text="Item"></uai-list-item>');
      expect(page.root.shadowRoot.querySelector('.content-item').classList.contains('grow-up')).toBe(true);
      const withChips = await render(`<uai-list-item text="Item" chips='["Chip"]'></uai-list-item>`);
      expect(withChips.root.shadowRoot.querySelector('.content-item').classList.contains('grow-up')).toBe(false);
      const withSlot = await render('<uai-list-item text="Item"><span slot="action-area">Ação</span></uai-list-item>');
      expect(withSlot.root.shadowRoot.querySelector('.content-item').classList.contains('grow-up')).toBe(false);
    });

    it.each([
      ['checkbox', 'checkbox'],
      ['radio', 'radio'],
      ['switch', 'switch'],
    ])('a: exposes role %s with aria-checked for typeList %s', async (type, role) => {
      const page = await render(`<uai-list-item type-list="${type}" checked text="Item"></uai-list-item>`);
      expect(row(page).getAttribute('role')).toBe(role);
      expect(row(page).getAttribute('aria-checked')).toBe('true');
      expect(row(page).getAttribute('tabindex')).toBe('0');
      expect(row(page).getAttribute('aria-labelledby')).toBe('list-item-text');
    });

    it('a: exposes a clickable default row as a focusable button', async () => {
      const page = await render('<uai-list-item clickable text="Abrir"></uai-list-item>');
      expect(row(page).getAttribute('role')).toBe('button');
      expect(row(page).getAttribute('tabindex')).toBe('0');
      expect(row(page).hasAttribute('aria-checked')).toBe(false);
    });

    it('a: keeps a non-clickable default row out of the tab order', async () => {
      const page = await render('<uai-list-item text="Texto"></uai-list-item>');
      expect(row(page).hasAttribute('role')).toBe(false);
      expect(row(page).hasAttribute('tabindex')).toBe(false);
    });

    it.each(['Enter', ' '])('a: toggles the row with the "%s" key', async (key) => {
      const page = await render('<uai-list-item type-list="checkbox" value="01"></uai-list-item>');
      const spy = jest.fn();
      page.root.addEventListener('uaiChecked', spy);
      row(page).dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, composed: true }));
      await page.waitForChanges();
      expect(page.root.checked).toBe(true);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('a: ignores other keys', async () => {
      const page = await render('<uai-list-item type-list="checkbox"></uai-list-item>');
      row(page).dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true, composed: true }));
      await page.waitForChanges();
      expect(page.root.checked).toBe(false);
    });

    it('c: emits uaiClickActionButtom and uaiClickActionButton with the same detail', async () => {
      const page = await render(`<uai-list-item value="01" actions-buttons='["copy"]'></uai-list-item>`);
      const original = jest.fn();
      const corrected = jest.fn();
      page.root.addEventListener('uaiClickActionButtom', original);
      page.root.addEventListener('uaiClickActionButton', corrected);
      const button = page.root.shadowRoot.querySelector('uai-button') as HTMLElement;
      button.click();
      await page.waitForChanges();
      expect(original).toHaveBeenCalledTimes(1);
      expect(corrected).toHaveBeenCalledTimes(1);
      expect(original.mock.calls[0][0].detail).toEqual({ value: '01', icon: 'copy', elementButton: button });
      expect(corrected.mock.calls[0][0].detail).toEqual(original.mock.calls[0][0].detail);
    });

    it('bug 3: a click on an action button does not toggle checked', async () => {
      const page = await render(`<uai-list-item value="01" actions-buttons='["copy"]'></uai-list-item>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiChecked', spy);
      (page.root.shadowRoot.querySelector('uai-button') as HTMLElement).click();
      await page.waitForChanges();
      expect(page.root.checked).toBe(false);
      expect(spy).not.toHaveBeenCalled();
    });
  });
});

describe('uai-list-item-content', () => {
  it('keeps the bds-list-item-content defaults and passes them to uai-grid', async () => {
    const page = await newSpecPage({
      components: [UaiListItemContent, UaiGrid],
      html: '<uai-list-item-content gap="2"><span>Texto</span></uai-list-item-content>',
    });
    const grid = page.root.querySelector('uai-grid') as HTMLUaiGridElement;
    expect(page.root.classList.contains('list_item_content')).toBe(true);
    expect(grid.direction).toBe('column');
    expect(grid.justifyContent).toBe('flex-start');
    expect(grid.flexWrap).toBe('wrap');
    expect(grid.alignItems).toBe('flex-start');
    expect(grid.gap).toBe('2');
  });
});
