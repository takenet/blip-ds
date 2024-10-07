'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const accordionCss = ".accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #454545);cursor:pointer}.accordion_header::before{content:\"\";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #454545);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #f6f6f6)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #f6f6f6)}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:transparent}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, #c9c9c9)}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #454545)}";

const AccordionHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.accordionElement = null;
    this.toggleHeader = () => {
      var _a, _b;
      if (this.isOpen) {
        (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
      }
      else {
        (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
      }
    };
    this.isOpen = false;
    this.btToggleIsfocus = false;
    this.numberElement = null;
    this.accordionTitle = null;
    this.icon = null;
    this.avatarName = null;
    this.avatarThumb = null;
    this.dataTest = null;
  }
  async toggle() {
    this.isOpen = !this.isOpen;
  }
  async open() {
    this.isOpen = true;
  }
  async close() {
    this.isOpen = false;
  }
  componentWillRender() {
    this.accordionElement = this.element.parentElement;
  }
  handleKeyDown(event) {
    var _a, _b;
    if (event.key == 'Enter') {
      if (this.isOpen) {
        (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
      }
      else {
        (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
      }
    }
  }
  render() {
    return (index.h("div", { onClick: this.toggleHeader, class: { accordion_header: true }, "data-test": this.dataTest }, this.avatarName || this.avatarThumb ? (index.h("bds-avatar", { name: this.avatarName, thumbnail: this.avatarThumb, size: "extra-small" })) : (this.icon && index.h("bds-icon", { size: "x-large", name: this.icon, color: "inherit" })), this.accordionTitle && (index.h("bds-typo", { bold: "bold", variant: "fs-16", "line-height": "double" }, this.accordionTitle)), index.h("slot", null), index.h("bds-icon", { class: {
        accButton: true,
        accButton__isopen: this.isOpen,
        accButton__isfocus: this.btToggleIsfocus,
      }, size: "x-large", name: "arrow-down", color: "inherit", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) })));
  }
  get element() { return index.getElement(this); }
};
AccordionHeader.style = accordionCss;

exports.bds_accordion_header = AccordionHeader;
