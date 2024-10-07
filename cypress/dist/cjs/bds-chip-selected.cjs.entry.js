'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const chipSelectedCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, #c226fb) solid 2px}:host .chip .chip_darker{position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;height:20px;z-index:2}:host .chip--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip--tall{height:40px;border-radius:24px}:host .chip--default{background-color:var(--color-system, #b2dffd);color:var(--color-content-default, #454545)}:host .chip--info{background-color:var(--color-info, #80e3eb);color:var(--color-content-default, #454545)}:host .chip--success{background-color:var(--color-success, #84ebbc);color:var(--color-content-default, #454545)}:host .chip--warning{background-color:var(--color-warning, #fde99b);color:var(--color-content-default, #454545)}:host .chip--danger{background-color:var(--color-error, #f99f9f);color:var(--color-content-default, #454545)}:host .chip--outline{border:1px solid var(--color-border-1, #c9c9c9);color:var(--color-content-default, #454545);padding:2px 3px}:host .chip--outline .chip_darker{height:calc(100% + 2px)}:host .chip:hover{cursor:pointer}:host .chip:hover .chip_darker{-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip:active{cursor:pointer}:host .chip:active .chip_darker{-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip:focus-visible{outline:none}:host .chip_selected{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface-1, #f6f6f6);border:2px solid var(--color-content-default, #454545)}:host .chip_selected--container-text--full{width:100%}:host .chip_selected--container-text--half{width:calc(100% - 20px)}:host .chip_selected--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:var(--color-content-default, #454545)}:host .chip_selected--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, #454545);font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_selected--tall{height:40px;border-radius:24px}:host .chip_selected:hover{opacity:38%;cursor:pointer}:host .chip_selected:active{opacity:38%}:host .chip_disabled{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;background-color:var(--color-surface-3, #cfcfcf)}:host .chip_disabled--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;width:16px;height:20px;color:var(--color-content-default, #454545);z-index:2}:host .chip_disabled--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, #454545);font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif}:host .chip_disabled--tall{height:40px;border-radius:24px}:host .chip_disabled:hover{cursor:default}";

const ChipSelected = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.chipClick = index.createEvent(this, "chipClick", 7);
    this.isSelected = false;
    this.icon = undefined;
    this.color = 'default';
    this.size = 'standard';
    this.selected = false;
    this.disabled = false;
    this.dataTest = null;
  }
  handleKeyDown(event) {
    if (event.key === ' ' && !this.disabled) {
      event.preventDefault();
      if (this.isSelected) {
        return (this.isSelected = false);
      }
      else {
        return (this.isSelected = true);
      }
    }
  }
  handleClick(event) {
    if (this.disabled)
      return;
    event.preventDefault();
    if (this.isSelected) {
      return (this.isSelected = false);
    }
    else {
      return (this.isSelected = true);
    }
  }
  componentWillLoad() {
    this.el.focus();
    this.isSelected = this.selected;
  }
  getDisabledChip() {
    return this.disabled ? { chip_disabled: true, [`chip_disabled--${this.size}`]: true } : {};
  }
  getStyleChip() {
    return this.isSelected
      ? { chip_selected: true, [`chip_selected--${this.size}`]: true }
      : { [`chip--${this.color}`]: true, [`chip--${this.size}`]: true };
  }
  getStyleText() {
    if (this.isSelected) {
      const chipSelected = { 'chip_selected--text': true };
      return chipSelected;
    }
  }
  getSizeIconChip() {
    if (this.size === 'tall') {
      return 'medium';
    }
    else
      return 'x-small';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: Object.assign(Object.assign({ chip: true }, this.getStyleChip()), this.getDisabledChip()), onClick: this.handleClick, "data-test": this.dataTest }, !this.disabled && index.h("div", { class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && index.h("div", { class: "chip_darker" }), this.icon && !this.isSelected && (index.h("div", { class: "chip--icon" }, index.h("bds-icon", { size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (index.h("div", { class: "chip_selected--icon" }, index.h("bds-icon", { size: this.getSizeIconChip(), name: "checkball" }))), index.h("div", { class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, index.h("bds-typo", { class: Object.assign({ 'chip--text': true }, this.getStyleText()), variant: "fs-12", "no-wrap": true, bold: "bold" }, index.h("slot", null))))));
  }
  get el() { return index.getElement(this); }
};
ChipSelected.style = chipSelectedCss;

exports.bds_chip_selected = ChipSelected;
