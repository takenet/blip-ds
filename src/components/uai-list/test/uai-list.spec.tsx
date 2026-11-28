import { newSpecPage } from '@stencil/core/testing';
import { UaiList } from '../uai-list';
import { UaiListItem } from '../../uai-list-item/uai-list-item';

const render = (html: string) => newSpecPage({ components: [UaiList, UaiListItem], html });
const DATA = JSON.stringify([
  { value: '01', text: 'Ana Souza', secondaryText: 'Atendente', avatarName: 'Ana Souza' },
  { value: '02', text: 'Bruno Lima', secondaryText: 'Supervisor' },
  { value: '03', text: 'Carla Dias', secondaryText: 'Administradora' },
]);

const dataItems = (page) => Array.from(page.root.shadowRoot.querySelectorAll('uai-list-item')) as HTMLUaiListItemElement[];
const clickRow = async (page, item: HTMLUaiListItemElement) => {
  (item.shadowRoot.querySelector('.list-item') as HTMLElement).click();
  await page.waitForChanges();
};

describe('uai-list', () => {
  describe('API kept from bds-list', () => {
    it('has the same defaults', async () => {
      const page = await render('<uai-list></uai-list>');
      const list = page.rootInstance as UaiList;
      expect(list.typeList).toBeNull();
      expect(list.value).toBeUndefined();
      expect(list.data).toBeUndefined();
    });

    it('renders rows from JSON data and ignores children', async () => {
      const page = await render(`<uai-list data='${DATA}'><uai-list-item text="Filho"></uai-list-item></uai-list>`);
      const items = dataItems(page);
      expect(items.length).toBe(3);
      expect(items[0].text).toBe('Ana Souza');
      expect(items[0].avatarName).toBe('Ana Souza');
      expect(page.root.shadowRoot.querySelector('slot')).toBeNull();
    });

    it('renders rows from an array', async () => {
      const page = await render('<uai-list></uai-list>');
      page.root.data = JSON.parse(DATA);
      await page.waitForChanges();
      expect(dataItems(page).length).toBe(3);
    });

    it('keeps the current rows while data is not valid JSON yet', async () => {
      const page = await render(`<uai-list data='${DATA}'></uai-list>`);
      page.root.setAttribute('data', '{{ vm.rows }}');
      await page.waitForChanges();
      expect(dataItems(page).length).toBe(3);
    });

    it('applies the list typeList to every data row', async () => {
      const page = await render(`<uai-list type-list="checkbox" data='${DATA}'></uai-list>`);
      expect(dataItems(page).every((item) => item.typeList === 'checkbox')).toBe(true);
    });

    it('emits uaiListCheckboxChange with every checked row', async () => {
      const page = await render(`<uai-list type-list="checkbox" data='${DATA}'></uai-list>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiListCheckboxChange', spy);
      const items = dataItems(page);
      await clickRow(page, items[0]);
      await clickRow(page, items[2]);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy.mock.calls[1][0].detail).toEqual([
        { value: '01', text: 'Ana Souza', secondaryText: 'Atendente', avatarName: 'Ana Souza', avatarThumbnail: null, typeList: 'checkbox' },
        { value: '03', text: 'Carla Dias', secondaryText: 'Administradora', avatarName: null, avatarThumbnail: null, typeList: 'checkbox' },
      ]);
    });

    it('emits uaiListSwitchChange with every row that is on', async () => {
      const page = await render(`<uai-list type-list="switch" data='${DATA}'></uai-list>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiListSwitchChange', spy);
      const items = dataItems(page);
      await clickRow(page, items[1]);
      expect(spy.mock.calls[0][0].detail.map((row) => row.value)).toEqual(['02']);
      await clickRow(page, items[1]);
      expect(spy.mock.calls[1][0].detail).toEqual([]);
    });

    it('selects one radio, clears the others and emits uaiListRadioChange with the row', async () => {
      const page = await render(`<uai-list type-list="radio" data='${DATA}'></uai-list>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiListRadioChange', spy);
      const items = dataItems(page);
      await clickRow(page, items[0]);
      await clickRow(page, items[1]);
      expect(items.map((item) => item.checked)).toEqual([false, true, false]);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy.mock.calls[1][0].detail).toEqual({
        value: '02',
        text: 'Bruno Lima',
        secondaryText: 'Supervisor',
        avatarName: null,
        avatarThumbnail: null,
        typeList: 'radio',
      });
    });

    it('works with uai-list-item children', async () => {
      const page = await render(`<uai-list type-list="checkbox">
        <uai-list-item value="01" text="Um"></uai-list-item>
        <uai-list-item value="02" text="Dois"></uai-list-item>
      </uai-list>`);
      const items = Array.from(page.root.querySelectorAll('uai-list-item')) as HTMLUaiListItemElement[];
      expect(items.every((item) => item.typeList === 'checkbox')).toBe(true);
      const spy = jest.fn();
      page.root.addEventListener('uaiListCheckboxChange', spy);
      await clickRow(page, items[1]);
      expect(spy.mock.calls[0][0].detail.map((row) => row.value)).toEqual(['02']);
    });
  });

  describe('behavior changes from bds-list (SOLFAC-117)', () => {
    it('bug 1: value keeps the value string of the clicked radio', async () => {
      const page = await render(`<uai-list type-list="radio" data='${DATA}'></uai-list>`);
      await clickRow(page, dataItems(page)[2]);
      expect(page.root.value).toBe('03');
      expect(page.root.getAttribute('value')).toBe('03');
    });

    it('bug 1: a value set from outside selects the matching radio', async () => {
      const page = await render(`<uai-list type-list="radio" value="02" data='${DATA}'></uai-list>`);
      expect(dataItems(page).map((item) => item.checked)).toEqual([false, true, false]);
      page.root.value = '03';
      await page.waitForChanges();
      expect(dataItems(page).map((item) => item.checked)).toEqual([false, false, true]);
    });

    it('bug 2: a list without typeList keeps the typeList of each child', async () => {
      const page = await render(`<uai-list>
        <uai-list-item value="01" type-list="switch"></uai-list-item>
        <uai-list-item value="02" type-list="checkbox"></uai-list-item>
      </uai-list>`);
      const items = Array.from(page.root.querySelectorAll('uai-list-item')) as HTMLUaiListItemElement[];
      expect(items.map((item) => item.typeList)).toEqual(['switch', 'checkbox']);
    });

    it('bug 4: selecting a radio does not emit uaiChecked for the radios it clears', async () => {
      const page = await render(`<uai-list type-list="radio" value="01" data='${DATA}'></uai-list>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiChecked', spy);
      await clickRow(page, dataItems(page)[1]);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0].detail).toMatchObject({ value: '02', checked: true });
    });

    it('bug 4: changes made by code do not emit the list change events', async () => {
      const page = await render(`<uai-list type-list="checkbox" data='${DATA}'></uai-list>`);
      const spy = jest.fn();
      page.root.addEventListener('uaiListCheckboxChange', spy);
      dataItems(page)[0].checked = true;
      await page.waitForChanges();
      expect(spy).not.toHaveBeenCalled();
    });

    it('c: emits uaiClickActionsButtons and uaiClickActionsButton with the row detail', async () => {
      const data = JSON.stringify([{ value: '01', text: 'Relatório', actionsButtons: ['copy'] }]);
      const page = await render(`<uai-list data='${data}'></uai-list>`);
      const original = jest.fn();
      const corrected = jest.fn();
      page.root.addEventListener('uaiClickActionsButtons', original);
      page.root.addEventListener('uaiClickActionsButton', corrected);
      const button = dataItems(page)[0].shadowRoot.querySelector('uai-button') as HTMLElement;
      button.click();
      await page.waitForChanges();
      expect(original).toHaveBeenCalledTimes(1);
      expect(original.mock.calls[0][0].detail).toEqual({ value: '01', icon: 'copy', elementButton: button });
      expect(corrected.mock.calls[0][0].detail).toEqual(original.mock.calls[0][0].detail);
    });

    it('a: exposes the list and listitem roles', async () => {
      const page = await render(`<uai-list data='${DATA}'></uai-list>`);
      expect(page.root.getAttribute('role')).toBe('list');
      expect(dataItems(page).every((item) => item.getAttribute('role') === 'listitem')).toBe(true);
    });

    it('a: exposes a radio list as a radiogroup', async () => {
      const page = await render(`<uai-list type-list="radio">
        <uai-list-item value="01"></uai-list-item>
      </uai-list>`);
      expect(page.root.getAttribute('role')).toBe('radiogroup');
      expect(page.root.querySelector('uai-list-item').getAttribute('role')).toBe('none');
    });
  });
});
