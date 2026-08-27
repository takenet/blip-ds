'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const listCss = ":host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, #282828)}.list_item .icon-item-active{color:var(--color-primary, #1e6bf1)}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, #282828)}.list_item .content-item .subtitle-item{color:var(--color-content-default, #282828)}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, #282828)}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, #282828);opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:\"\";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, #282828);opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, #282828);opacity:0.16}";

const List = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsListCheckboxChange = index.createEvent(this, "bdsListCheckboxChange", 7);
    this.bdsListRadioChange = index.createEvent(this, "bdsListRadioChange", 7);
    this.bdsListSwitchChange = index.createEvent(this, "bdsListSwitchChange", 7);
    this.bdsClickActionsButtons = index.createEvent(this, "bdsClickActionsButtons", 7);
    this.itemListElement = null;
    this.chagedOptions = (event) => {
      const { detail } = event;
      if (detail.typeList == 'radio') {
        if (detail.checked == true) {
          this.value = detail;
        }
      }
      if (detail.typeList == 'checkbox') {
        this.setSelectedCheckbox();
      }
      if (detail.typeList == 'switch') {
        this.setSelectedSwitch();
      }
    };
    this.onClickActionsButtons = (event) => {
      const { detail } = event;
      this.bdsClickActionsButtons.emit(detail);
    };
    this.internalData = undefined;
    this.typeList = null;
    this.value = undefined;
    this.data = undefined;
  }
  componentWillLoad() {
    this.data && this.dataChanged();
  }
  componentWillRender() {
    this.data && this.updateData();
    if (!this.data) {
      this.setitemListElement();
    }
  }
  componentDidRender() {
    if (this.data) {
      this.internalDataChanged();
    }
  }
  dataChanged() {
    this.updateData();
  }
  valueChanged(value) {
    this.setSelectedRadio(value);
  }
  internalDataChanged() {
    this.itemListElement = this.element.shadowRoot.querySelectorAll('bds-list-item');
  }
  setitemListElement() {
    this.itemListElement = this.element.getElementsByTagName('bds-list-item');
    for (let i = 0; i < this.itemListElement.length; i++) {
      this.itemListElement[i].typeList = this.typeList;
      this.itemListElement[i].addEventListener('bdsChecked', (event) => this.chagedOptions(event));
    }
  }
  updateData() {
    if (this.data) {
      if (typeof this.data === 'string') {
        this.internalData = JSON.parse(this.data);
      }
      else {
        this.internalData = this.data;
      }
    }
  }
  setSelectedRadio(itemList) {
    const itens = Array.from(this.itemListElement);
    const radios = itens.filter((item) => item.typeList == 'radio');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value != itemList.value) {
        radios[i].checked = false;
      }
      else {
        const construct = {
          value: radios[i].value,
          text: radios[i]?.text,
          secondaryText: radios[i]?.secondaryText,
          avatarName: radios[i]?.avatarName,
          avatarThumbnail: radios[i]?.avatarThumbnail,
          typeList: radios[i]?.typeList,
        };
        this.bdsListRadioChange.emit(construct);
      }
    }
  }
  setSelectedCheckbox() {
    const checkboxs = this.itemListElement;
    const itens = Array.from(checkboxs).filter((item) => item.typeList == 'checkbox');
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
      value: term.value,
      text: term?.text,
      secondaryText: term?.secondaryText,
      avatarName: term?.avatarName,
      avatarThumbnail: term?.avatarThumbnail,
      typeList: term?.typeList,
    }));
    this.bdsListCheckboxChange.emit(result);
  }
  setSelectedSwitch() {
    const Switch = this.itemListElement;
    const itens = Array.from(Switch).filter((item) => item.typeList == 'switch');
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
      value: term.value,
      text: term?.text,
      secondaryText: term?.secondaryText,
      avatarName: term?.avatarName,
      avatarThumbnail: term?.avatarThumbnail,
      typeList: term?.typeList,
    }));
    this.bdsListSwitchChange.emit(result);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        list: true,
      } }, this.internalData ? (this.internalData.map((item, idx) => (index.h("bds-list-item", { key: idx, value: item.value, text: item.text, "type-list": this.typeList ? this.typeList : item.typeList, "secondary-text": item.secondaryText, "avatar-name": item.avatarName, "avatar-thumbnail": item.avatarThumbnail, checked: item.checked, icon: item.icon, chips: item.chips, actionsButtons: item.actionsButtons, onBdsChecked: (ev) => this.chagedOptions(ev), onBdsClickActionButtom: (ev) => this.onClickActionsButtons(ev), dataTest: item.dataTest })))) : (index.h("slot", null)))));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["dataChanged"],
    "value": ["valueChanged"],
    "internalData": ["internalDataChanged"]
  }; }
};
List.style = listCss;

exports.bds_list = List;
