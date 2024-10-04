'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const accordionCss = ".accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #454545);cursor:pointer}.accordion_header::before{content:\"\";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #454545);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #f6f6f6)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #f6f6f6)}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:transparent}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, #c9c9c9)}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #454545)}";

const AccordionBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.container = null;
    this.refContainer = (el) => {
      this.container = el;
    };
    this.isOpen = false;
    this.isOpenAftAnimation = false;
    this.heightContainer = undefined;
    this.numberElement = null;
    this.hasDivisor = true;
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
  async divisor(valor) {
    this.hasDivisor = valor;
  }
  isOpenChanged() {
    this.heightContainer = this.isOpen ? this.container.offsetHeight : 0;
    if (this.isOpen) {
      setTimeout(() => {
        this.isOpenAftAnimation = !this.isOpenAftAnimation;
      }, 500);
    }
    else {
      this.isOpenAftAnimation = !this.isOpenAftAnimation;
    }
  }
  render() {
    return (index.h("div", { class: {
        accordion_body: true,
        accordion_body_divisor: this.hasDivisor,
        accordion_body_isOpen: this.isOpenAftAnimation,
      }, style: { height: `${this.heightContainer}px` }, "data-test": this.dataTest }, index.h("div", { class: "container", ref: (el) => this.refContainer(el) }, index.h("slot", null))));
  }
  static get watchers() { return {
    "isOpen": ["isOpenChanged"]
  }; }
};
AccordionBody.style = accordionCss;

exports.bds_accordion_body = AccordionBody;
