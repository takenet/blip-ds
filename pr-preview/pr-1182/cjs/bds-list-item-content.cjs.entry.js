'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const listCss = ".sc-bds-list-item-content-h{display:block;width:100%}.list_item_content.sc-bds-list-item-content-h{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item.sc-bds-list-item-content{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall.sc-bds-list-item-content{padding:16px}.list_item_standard.sc-bds-list-item-content{padding:8px 16px}.list_item_short.sc-bds-list-item-content{padding:8px}.list_item.sc-bds-list-item-content .input_list.sc-bds-list-item-content{position:relative}.list_item.sc-bds-list-item-content .avatar-item.sc-bds-list-item-content{position:relative;display:block}.list_item.sc-bds-list-item-content .icon-item.sc-bds-list-item-content{position:relative;color:var(--color-content-default, #282828)}.list_item.sc-bds-list-item-content .icon-item-active.sc-bds-list-item-content{color:var(--color-primary, #1e6bf1)}.list_item.sc-bds-list-item-content .grow-up.sc-bds-list-item-content{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item.sc-bds-list-item-content .content-slot.sc-bds-list-item-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item.sc-bds-list-item-content .content-item.sc-bds-list-item-content{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item.sc-bds-list-item-content .content-item.sc-bds-list-item-content .title-item.sc-bds-list-item-content{color:var(--color-content-default, #282828)}.list_item.sc-bds-list-item-content .content-item.sc-bds-list-item-content .subtitle-item.sc-bds-list-item-content{color:var(--color-content-default, #282828)}.list_item.sc-bds-list-item-content .content-area.sc-bds-list-item-content{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item.sc-bds-list-item-content .content-area.sc-bds-list-item-content .internal-chips.sc-bds-list-item-content,.list_item .content-area .sc-bds-list-item-content-s>*{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item.sc-bds-list-item-content .action-area.sc-bds-list-item-content{position:relative}.list_item.sc-bds-list-item-content .action-area.sc-bds-list-item-content .internal-actions-buttons.sc-bds-list-item-content,.list_item .action-area .sc-bds-list-item-content-s>*{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, #282828)}.list_item.sc-bds-list-item-content .icon-arrow.sc-bds-list-item-content{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item.sc-bds-list-item-content .icon-arrow-active.sc-bds-list-item-content{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius.sc-bds-list-item-content{border-radius:8px}.border_radius.sc-bds-list-item-content:before,.border_radius.sc-bds-list-item-content:after,.border_radius.sc-bds-list-item-content .active.sc-bds-list-item-content{border-radius:8px}.active.sc-bds-list-item-content{position:absolute;background-color:var(--color-content-default, #282828);opacity:0.08;inset:0}.clickable.sc-bds-list-item-content{position:relative;cursor:pointer;gap:8px}.clickable.sc-bds-list-item-content:before{content:\"\";position:absolute;inset:0}.clickable.sc-bds-list-item-content:hover:before{background-color:var(--color-content-default, #282828);opacity:0.08}.clickable.sc-bds-list-item-content:active:before{background-color:var(--color-content-default, #282828);opacity:0.16}";

const ListItemContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.direction = 'column';
    this.justifyContent = 'flex-start';
    this.flexWrap = 'wrap';
    this.alignItems = 'flex-start';
    this.gap = undefined;
  }
  render() {
    return (index.h(index.Host, { class: {
        list_item_content: true,
      } }, index.h("bds-grid", { direction: this.direction, flexWrap: this.flexWrap, justifyContent: this.justifyContent, alignItems: this.alignItems, gap: this.gap }, index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
ListItemContent.style = listCss;

exports.bds_list_item_content = ListItemContent;
