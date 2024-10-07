import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';

const listCss = ":host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, #454545)}.list_item .icon-item-active{color:var(--color-primary, #1e6bf1)}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, #454545)}.list_item .content-item .subtitle-item{color:var(--color-content-default, #454545)}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, #454545)}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, #454545);opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:\"\";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, #454545);opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, #454545);opacity:0.16}";

const ListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChecked = createEvent(this, "bdsChecked", 7);
    this.bdsClickActionButtom = createEvent(this, "bdsClickActionButtom", 7);
    this.handler = () => {
      this.typeList == 'radio' ? (this.checked = true) : (this.checked = !this.checked);
    };
    this.clickActionButtons = (data, event) => {
      const elementButton = event.composedPath()[0];
      this.bdsClickActionButtom.emit({
        value: this.value,
        icon: data,
        elementButton: elementButton,
      });
    };
    this.internalChips = [];
    this.internalActionsButtons = [];
    this.checked = false;
    this.typeList = null;
    this.avatarName = null;
    this.avatarThumbnail = null;
    this.icon = null;
    this.value = null;
    this.text = null;
    this.secondaryText = null;
    this.chips = [];
    this.actionsButtons = [];
    this.clickable = false;
    this.active = false;
    this.borderRadius = false;
    this.size = 'standard';
    this.dataTest = null;
  }
  componentWillLoad() {
    this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
    this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
    this.chipsChanged();
    this.actionsButtonsChanged();
  }
  checkedChanged(isChecked) {
    this.bdsChecked.emit({
      value: this.value,
      text: this.text,
      secondaryText: this.secondaryText,
      typeList: this.typeList,
      checked: isChecked,
    });
  }
  chipsChanged() {
    if (this.chips) {
      if (typeof this.chips === 'string') {
        this.internalChips = JSON.parse(this.chips);
      }
      else {
        this.internalChips = this.chips;
      }
    }
    else {
      this.internalChips = [];
    }
  }
  actionsButtonsChanged() {
    if (this.actionsButtons) {
      if (typeof this.actionsButtons === 'string') {
        this.internalActionsButtons = JSON.parse(this.actionsButtons);
      }
      else {
        this.internalActionsButtons = this.actionsButtons;
      }
    }
    else {
      this.internalActionsButtons = [];
    }
  }
  renderChips() {
    if (!this.internalChips.length) {
      return [];
    }
    return this.internalChips.map((chip, index) => {
      const id = index.toString();
      const limit = 30;
      if (chip.length <= limit) {
        return (h("bds-chip-clickable", { id: id, key: id, color: "default" }, chip));
      }
      else {
        return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "default" }, `${chip.slice(0, limit)} ...`)));
      }
    });
  }
  renderActionsButtons() {
    if (!this.internalActionsButtons.length) {
      return [];
    }
    return this.internalActionsButtons.map((button, index) => {
      const id = index.toString();
      return (h("bds-button-icon", { key: id, variant: "secondary", icon: button, size: "short", onClick: (ev) => this.clickActionButtons(button, ev) }));
    });
  }
  render() {
    const hasInput = this.clickable == true || this.typeList == 'checkbox' || this.typeList == 'radio' || this.typeList == 'switch';
    const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    return (h(Host, null, h("div", { onClick: this.handler, tabindex: "0", class: {
        list_item: true,
        clickable: hasInput,
        border_radius: this.borderRadius,
        [`list_item_${this.size}`]: true,
      }, "data-test": this.dataTest }, this.active && h("div", { class: "active" }), hasLeftInput && (h("div", { class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
        [`icon-item`]: true,
        [`icon-item-active`]: this.active,
      }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { class: { [`content-slot`]: true } }, h("slot", null)), (this.text || this.secondaryText) && (h("div", { class: {
        [`content-item`]: true,
        [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
      } }, this.text && (h("bds-typo", { class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { class: "internal-chips" }, this.renderChips()), h("slot", { name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { refer: "", name: "", checked: this.checked }))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "chips": ["chipsChanged"],
    "actionsButtons": ["actionsButtonsChanged"]
  }; }
};
ListItem.style = listCss;

export { ListItem as bds_list_item };
