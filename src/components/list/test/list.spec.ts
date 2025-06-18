import { newSpecPage } from '@stencil/core/testing';
import { List } from '../list';

describe('bds-list', () => {
  let page;
  let component;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [List],
      html: '<bds-list></bds-list>',
    });
    component = page.rootInstance;
  });

  it('should create and render', async () => {
    expect(component).toBeTruthy();
    expect(page.root).toBeTruthy();
  });

  describe('Props', () => {
    it('should render with default props', async () => {
      expect(component.typeList).toBeNull();
      expect(component.value).toBeUndefined();
      expect(component.data).toBeUndefined();
    });

    it('should render with type list prop', async () => {
      page = await newSpecPage({
        components: [List],
        html: '<bds-list type-list="checkbox"></bds-list>',
      });
      
      expect(page.rootInstance.typeList).toBe('checkbox');
    });

    it('should render with radio type list', async () => {
      page = await newSpecPage({
        components: [List],
        html: '<bds-list type-list="radio"></bds-list>',
      });
      
      expect(page.rootInstance.typeList).toBe('radio');
    });

    it('should render with switch type list', async () => {
      page = await newSpecPage({
        components: [List],
        html: '<bds-list type-list="switch"></bds-list>',
      });
      
      expect(page.rootInstance.typeList).toBe('switch');
    });

    it('should render with default type list', async () => {
      page = await newSpecPage({
        components: [List],
        html: '<bds-list type-list="default"></bds-list>',
      });
      
      expect(page.rootInstance.typeList).toBe('default');
    });

    it('should render with value prop', async () => {
      page = await newSpecPage({
        components: [List],
        html: '<bds-list value="option1"></bds-list>',
      });
      
      expect(page.rootInstance.value).toBe('option1');
    });

    it('should handle data as string prop', async () => {
      const dataString = '[{"value": "01", "text": "Item 1", "checked": true}]';
      page = await newSpecPage({
        components: [List],
        html: `<bds-list data='${dataString}'></bds-list>`,
      });
      
      expect(page.rootInstance.data).toBe(dataString);
      expect(page.rootInstance.internalData).toEqual([
        { value: "01", text: "Item 1", checked: true }
      ]);
    });

    it('should handle data as object array prop', async () => {
      const dataArray = [
        { value: "01", text: "Item 1", checked: true },
        { value: "02", text: "Item 2", checked: false }
      ];
      
      component.data = dataArray;
      component.dataChanged();
      
      expect(component.internalData).toEqual(dataArray);
    });
  });

  describe('Rendering', () => {
    it('should render list container', async () => {
      const listDiv = page.root.shadowRoot.querySelector('.list');
      expect(listDiv).toBeTruthy();
    });

    it('should render slot when no data provided', async () => {
      const slot = page.root.shadowRoot.querySelector('slot');
      expect(slot).toBeTruthy();
    });

    it('should render list items from data', async () => {
      const testData = [
        { value: "01", text: "Item 1", checked: true },
        { value: "02", text: "Item 2", checked: false }
      ];
      
      component.data = testData;
      component.dataChanged();
      await page.waitForChanges();
      
      const listItems = page.root.shadowRoot.querySelectorAll('bds-list-item');
      expect(listItems.length).toBe(2);
    });

    it('should pass correct props to list items', async () => {
      const testData = [
        {
          value: "01",
          text: "Item 1",
          secondaryText: "Secondary",
          avatarName: "Avatar",
          avatarThumbnail: "thumb.jpg",
          checked: true,
          icon: "settings",
          chips: ["chip1"],
          actionsButtons: ["action1"],
          dataTest: "test-item"
        }
      ];
      
      component.typeList = 'checkbox';
      component.data = testData;
      component.dataChanged();
      await page.waitForChanges();
      
      const listItem = page.root.shadowRoot.querySelector('bds-list-item');
      expect(listItem.getAttribute('value')).toBe('01');
      expect(listItem.getAttribute('text')).toBe('Item 1');
      expect(listItem.getAttribute('type-list')).toBe('checkbox');
      expect(listItem.getAttribute('secondary-text')).toBe('Secondary');
      expect(listItem.getAttribute('avatar-name')).toBe('Avatar');
      expect(listItem.getAttribute('avatar-thumbnail')).toBe('thumb.jpg');
      expect(listItem.getAttribute('icon')).toBe('settings');
      expect(listItem.hasAttribute('checked')).toBe(true);
      
      // Verify that the internal data is correctly processed
      expect(component.internalData[0].dataTest).toBe('test-item');
    });

    it('should use item type-list when no global type-list provided', async () => {
      const testData = [
        { value: "01", text: "Item 1", typeList: "radio", checked: true }
      ];
      
      component.data = testData;
      component.dataChanged();
      await page.waitForChanges();
      
      const listItem = page.root.shadowRoot.querySelector('bds-list-item');
      expect(listItem.getAttribute('type-list')).toBe('radio');
    });
  });

  describe('Data Management', () => {
    it('should parse string data to object array', async () => {
      const dataString = '[{"value": "01", "text": "Item 1"}, {"value": "02", "text": "Item 2"}]';
      
      component.data = dataString;
      component.updateData();
      
      expect(component.internalData).toEqual([
        { value: "01", text: "Item 1" },
        { value: "02", text: "Item 2" }
      ]);
    });

    it('should handle object array data directly', async () => {
      const dataArray = [
        { value: "01", text: "Item 1" },
        { value: "02", text: "Item 2" }
      ];
      
      component.data = dataArray;
      component.updateData();
      
      expect(component.internalData).toEqual(dataArray);
    });

    it('should update internal data when data prop changes', async () => {
      const initialData = [{ value: "01", text: "Item 1" }];
      const newData = [{ value: "02", text: "Item 2" }];
      
      component.data = initialData;
      component.dataChanged();
      expect(component.internalData).toEqual(initialData);
      
      component.data = newData;
      component.dataChanged();
      expect(component.internalData).toEqual(newData);
    });
  });

  describe('Events', () => {
    it('should emit bdsListCheckboxChange event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListCheckboxChange', spy);
      
      component.bdsListCheckboxChange.emit([{ value: "01", checked: true }]);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: [{ value: "01", checked: true }]
        })
      );
    });

    it('should emit bdsListRadioChange event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListRadioChange', spy);
      
      const radioData = { value: "01", text: "Item 1", typeList: "radio" };
      component.bdsListRadioChange.emit(radioData);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: radioData
        })
      );
    });

    it('should emit bdsListSwitchChange event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListSwitchChange', spy);
      
      component.bdsListSwitchChange.emit([{ value: "01", checked: true }]);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: [{ value: "01", checked: true }]
        })
      );
    });

    it('should emit bdsClickActionsButtons event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsClickActionsButtons', spy);
      
      const actionData = { action: "edit", value: "01" };
      component.bdsClickActionsButtons.emit(actionData);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: actionData
        })
      );
    });
  });

  describe('Event Handlers', () => {
    it('should handle radio selection change', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListRadioChange', spy);
      
      // Mock itemListElement
      const mockRadioItem = {
        typeList: 'radio',
        value: '01',
        text: 'Item 1',
        secondaryText: 'Secondary',
        avatarName: 'Avatar',
        avatarThumbnail: 'thumb.jpg',
        checked: false
      };
      
      component.itemListElement = [mockRadioItem];
      
      const event = new CustomEvent('bdsChecked', {
        detail: {
          typeList: 'radio',
          checked: true,
          value: '01'
        }
      });
      
      component.chagedOptions(event);
      
      expect(component.value).toEqual(event.detail);
    });

    it('should handle checkbox selection change', async () => {
      const spy = jest.spyOn(component, 'setSelectedCheckbox');
      
      const event = new CustomEvent('bdsChecked', {
        detail: {
          typeList: 'checkbox',
          checked: true,
          value: '01'
        }
      });
      
      component.chagedOptions(event);
      
      expect(spy).toHaveBeenCalled();
    });

    it('should handle switch selection change', async () => {
      const spy = jest.spyOn(component, 'setSelectedSwitch');
      
      const event = new CustomEvent('bdsChecked', {
        detail: {
          typeList: 'switch',
          checked: true,
          value: '01'
        }
      });
      
      component.chagedOptions(event);
      
      expect(spy).toHaveBeenCalled();
    });

    it('should handle action button clicks', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsClickActionsButtons', spy);
      
      const actionDetail = { action: 'delete', itemValue: '01' };
      const event = new CustomEvent('bdsClickActionButtom', {
        detail: actionDetail
      });
      
      component.onClickActionsButtons(event);
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: actionDetail
        })
      );
    });
  });

  describe('Selection Methods', () => {
    beforeEach(() => {
      // Mock itemListElement with radio items
      component.itemListElement = [
        {
          typeList: 'radio',
          value: '01',
          text: 'Item 1',
          secondaryText: 'Secondary 1',
          avatarName: 'Avatar 1',
          avatarThumbnail: 'thumb1.jpg',
          checked: false
        },
        {
          typeList: 'radio',
          value: '02',
          text: 'Item 2',
          secondaryText: 'Secondary 2',
          avatarName: 'Avatar 2',
          avatarThumbnail: 'thumb2.jpg',
          checked: false
        }
      ];
    });

    it('should select radio and emit event', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListRadioChange', spy);
      
      const selectedItem = { value: '01' };
      component.setSelectedRadio(selectedItem);
      
      expect(component.itemListElement[0].checked).toBe(false);
      expect(component.itemListElement[1].checked).toBe(false);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            value: '01',
            text: 'Item 1',
            typeList: 'radio'
          })
        })
      );
    });

    it('should handle checkbox selection', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListCheckboxChange', spy);
      
      // Mock checkbox items
      component.itemListElement = [
        { typeList: 'checkbox', value: '01', text: 'Item 1', checked: true },
        { typeList: 'checkbox', value: '02', text: 'Item 2', checked: false },
        { typeList: 'radio', value: '03', text: 'Item 3', checked: true } // Should be filtered out
      ];
      
      component.setSelectedCheckbox();
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: [
            expect.objectContaining({
              value: '01',
              text: 'Item 1',
              typeList: 'checkbox'
            })
          ]
        })
      );
    });

    it('should handle switch selection', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListSwitchChange', spy);
      
      // Mock switch items
      component.itemListElement = [
        { typeList: 'switch', value: '01', text: 'Item 1', checked: true },
        { typeList: 'switch', value: '02', text: 'Item 2', checked: false },
        { typeList: 'checkbox', value: '03', text: 'Item 3', checked: true } // Should be filtered out
      ];
      
      component.setSelectedSwitch();
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: [
            expect.objectContaining({
              value: '01',
              text: 'Item 1',
              typeList: 'switch'
            })
          ]
        })
      );
    });
  });

  describe('Value Watcher', () => {
    it('should update radio selection when value changes', async () => {
      const spy = jest.spyOn(component, 'setSelectedRadio');
      
      component.value = 'new-value';
      component.valueChanged('new-value');
      
      expect(spy).toHaveBeenCalledWith('new-value');
    });
  });

  describe('Lifecycle Methods', () => {
    it('should call dataChanged on componentWillLoad when data exists', async () => {
      const spy = jest.spyOn(component, 'dataChanged');
      component.data = [{ value: '01', text: 'Item 1' }];
      
      component.componentWillLoad();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should not call dataChanged on componentWillLoad when data is undefined', async () => {
      const spy = jest.spyOn(component, 'dataChanged');
      component.data = undefined;
      
      component.componentWillLoad();
      
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call updateData on componentWillRender when data exists', async () => {
      const spy = jest.spyOn(component, 'updateData');
      component.data = [{ value: '01', text: 'Item 1' }];
      
      component.componentWillRender();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should call setitemListElement on componentWillRender when no data', async () => {
      const spy = jest.spyOn(component, 'setitemListElement');
      component.data = undefined;
      
      component.componentWillRender();
      
      expect(spy).toHaveBeenCalled();
    });

    it('should call internalDataChanged on componentDidRender when data exists', async () => {
      const spy = jest.spyOn(component, 'internalDataChanged');
      component.data = [{ value: '01', text: 'Item 1' }];
      
      component.componentDidRender();
      
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty data array', async () => {
      component.data = [];
      component.updateData();
      
      expect(component.internalData).toEqual([]);
      
      await page.waitForChanges();
      const listItems = page.root.shadowRoot.querySelectorAll('bds-list-item');
      expect(listItems.length).toBe(0);
    });

    it('should handle invalid JSON string data', async () => {
      component.data = 'invalid-json';
      
      expect(() => component.updateData()).toThrow();
    });

    it('should handle null data', async () => {
      component.data = null;
      component.updateData();
      
      expect(component.internalData).toBeUndefined();
    });

    it('should handle missing list items in DOM', async () => {
      // Mock empty element collection
      Object.defineProperty(component.element, 'getElementsByTagName', {
        value: jest.fn().mockReturnValue([])
      });
      
      expect(() => component.setitemListElement()).not.toThrow();
    });

    it('should handle checkbox selection with no checked items', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListCheckboxChange', spy);
      
      component.itemListElement = [
        { typeList: 'checkbox', value: '01', text: 'Item 1', checked: false },
        { typeList: 'checkbox', value: '02', text: 'Item 2', checked: false }
      ];
      
      component.setSelectedCheckbox();
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: []
        })
      );
    });

    it('should handle switch selection with no checked items', async () => {
      const spy = jest.fn();
      page.root.addEventListener('bdsListSwitchChange', spy);
      
      component.itemListElement = [
        { typeList: 'switch', value: '01', text: 'Item 1', checked: false },
        { typeList: 'switch', value: '02', text: 'Item 2', checked: false }
      ];
      
      component.setSelectedSwitch();
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: []
        })
      );
    });
  });
});
