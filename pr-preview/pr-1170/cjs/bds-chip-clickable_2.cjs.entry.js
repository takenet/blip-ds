'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const chipClickableCss = ":host{display:-ms-flexbox;display:flex;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%}:host .chip_clickable{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:24px;border-radius:12px;padding:2px 6px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:1;-ms-flex-negative:0;flex-shrink:0}:host .chip_clickable--container-text--full{width:100%}:host .chip_clickable--container-text--min{width:calc(100% - 36px)}:host .chip_clickable--container-text--half{width:calc(100% - 16px)}:host .chip_clickable--hide{display:none;padding:0;border:none}:host .chip_clickable .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, #c226fb) solid 2px}:host .chip_clickable--click{cursor:pointer}:host .chip_clickable--click .chip_darker{opacity:0;position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable--click:hover .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip_clickable--click:active .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip_clickable--disabled{cursor:default;background-color:var(--color-surface-3, #e3e3e3)}:host .chip_clickable--disabled .chip_clickable--icon{color:var(--color-content-default, #282828)}:host .chip_clickable--disabled .chip_clickable--text{color:var(--color-content-default, #282828)}:host .chip_clickable--disabled .chip_clickable--close{cursor:default}:host .chip_clickable--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;margin:0;padding:0 2px;z-index:2;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;line-height:1}:host .chip_clickable--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;padding-right:2px;z-index:2}:host .chip_clickable--close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:16px;padding-left:2px;mix-blend-mode:hard-light;opacity:0.5;z-index:2;position:relative;cursor:pointer}:host .chip_clickable--close .close_focus:focus{position:absolute;width:100%;height:100%;left:-2px;border-radius:4px;outline:var(--color-focus, #c226fb) solid 2px}:host .chip_clickable--tall{height:32px;border-radius:16px;padding:4px 8px}:host .chip_clickable--tall .chip_clickable--text{height:20px;line-height:1.1}:host .chip_clickable--tall .chip_clickable--icon{height:20px;padding-right:4px}:host .chip_clickable--tall .chip_clickable--close{height:20px;padding-left:4px}:host .chip_clickable--default{background-color:var(--color-system, #b2dffd);color:var(--color-content-din, black)}:host .chip_clickable--info{background-color:var(--color-info, #80e3eb);color:var(--color-content-din, black)}:host .chip_clickable--success{background-color:var(--color-success, #84ebbc);color:var(--color-content-din, black)}:host .chip_clickable--warning{background-color:var(--color-warning, #fde99b);color:var(--color-content-din, black)}:host .chip_clickable--danger{background-color:var(--color-error, #fabebe);color:var(--color-content-din, black)}:host .chip_clickable--outline{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));color:var(--color-content-default, #282828)}:host .chip_clickable:focus-visible{outline:none}";

const ChipClickable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.chipClickableClose = index.createEvent(this, "chipClickableClose", 7);
    this.chipClickableClick = index.createEvent(this, "chipClickableClick", 7);
    this.visible = true;
    this.icon = undefined;
    this.avatar = undefined;
    this.color = 'default';
    this.size = 'standard';
    this.clickable = false;
    this.close = false;
    this.disabled = false;
    this.dataTest = null;
    this.dtButtonClose = null;
  }
  handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.chipClickableClick.emit();
    }
  }
  handleClick(event) {
    if (!this.disabled) {
      event.preventDefault();
      this.chipClickableClick.emit();
    }
  }
  handleCloseChip(event) {
    event.preventDefault();
    this.chipClickableClose.emit({ id: this.element.id });
  }
  handleCloseKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.chipClickableClose.emit({ id: this.element.id });
    }
  }
  getSizeAvatarChip() {
    if (this.size === 'tall') {
      return 'extra-small';
    }
    else
      return 'micro';
  }
  getSizeIconChip() {
    if (this.size === 'tall') {
      return 'medium';
    }
    else
      return 'x-small';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        chip_clickable: true,
        [`chip_clickable--${this.color}`]: !this.disabled,
        [`chip_clickable--${this.size}`]: true,
        'chip_clickable--hide': !this.visible,
        'chip_clickable--click': this.clickable,
        'chip_clickable--disabled': this.disabled,
      }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (index.h("div", { class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && index.h("div", { class: "chip_darker" }), this.icon && !this.avatar && (index.h("div", { class: "chip_clickable--icon" }, index.h("bds-icon", { size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (index.h("div", { class: "chip_clickable--avatar" }, index.h("bds-avatar", { size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), index.h("div", { class: this.close && (this.icon || this.avatar)
        ? `chip_clickable--container-text--min`
        : !this.close && !this.icon && !this.avatar
          ? `chip_clickable--container-text--full`
          : `chip_clickable--container-text--half` }, index.h("bds-typo", { "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, index.h("slot", null))), this.close && (index.h("div", { class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (index.h("div", { class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), index.h("bds-icon", { size: "x-small", theme: "solid", name: "error" }))))));
  }
  get element() { return index.getElement(this); }
};
ChipClickable.style = chipClickableCss;

const tooltipCss = ".tooltip__wrapper{display:inline-block;position:relative}.tooltip__tip{position:absolute;left:50%;border-radius:8px;padding:8px;background:var(--color-content-default, #282828);z-index:90000;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:32px;max-width:320px;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));visibility:hidden;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.tooltip__tip--visible{visibility:visible}.tooltip__tip::before{content:\"\";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:-6px;border-width:6px}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + 10px)}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--color-content-default, #282828)}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + 6px)}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + 10px);top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:-5px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--color-content-default, #282828)}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + 10px)}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--color-content-default, #282828)}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + 6px)}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + 10px);top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:-11px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--color-content-default, #282828)}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__tip__text pre{margin:0;display:-ms-flexbox;display:flex;font-family:inherit;white-space:break-spaces}.tooltip__tip__text .text{color:var(--color-surface-1, #f6f6f6)}";

const Tooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isMouseOver = false;
    this.textVerify = undefined;
    this.maxWidtTooltip = undefined;
    this.tooltipText = 'Tooltip';
    this.disabled = false;
    this.position = 'left-center';
    this.maxWidth = '320px';
    this.dataTest = null;
  }
  /**
   * Method for change the visibility of tooltip.
   */
  async visible() {
    this.isMouseOver = true;
  }
  /**
   * Method for change the visibility of tooltip.
   */
  async invisible() {
    this.isMouseOver = false;
  }
  setVisibility(value) {
    if (this.disabled) {
      this.isMouseOver = false;
      return;
    }
    this.isMouseOver = value;
  }
  componentWillLoad() {
    this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
    this.maxWidtTooltip = this.maxWidth;
  }
  tooltipTextChanged() {
    this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
  }
  maxWidthChanged() {
    this.maxWidtTooltip = this.maxWidth;
  }
  render() {
    const styleTooltip = {
      maxWidth: this.maxWidtTooltip,
    };
    return (index.h("div", { class: "tooltip__wrapper" }, index.h("div", { onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), "data-test": this.dataTest }, index.h("slot", null)), index.h("div", { class: {
        tooltip__tip: true,
        [`tooltip__tip--${this.position}`]: true,
        'tooltip__tip--visible': this.isMouseOver,
      }, style: styleTooltip }, index.h("div", { class: { tooltip__tip__text: true } }, index.h("pre", null, index.h("bds-typo", { class: "text", "no-wrap": "false", variant: "fs-12" }, this.textVerify))))));
  }
  static get watchers() { return {
    "tooltipText": ["tooltipTextChanged"],
    "maxWidth": ["maxWidthChanged"]
  }; }
};
Tooltip.style = tooltipCss;

exports.bds_chip_clickable = ChipClickable;
exports.bds_tooltip = Tooltip;
