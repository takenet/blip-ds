'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const positionElement = require('./position-element-c9b15fa1.js');

const menuCss = ".menu{position:fixed;pointer-events:none;top:0;left:0;padding:2px;background-color:var(--color-surface-1, #f6f6f6);border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);width:240px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}";

const BdsMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsToggle = index.createEvent(this, "bdsToggle", 7);
    this.refMenuElement = (el) => {
      this.menuElement = el;
    };
    this.onClickCloseButtom = (event) => {
      this.open = false;
      event.stopPropagation();
    };
    this.refElement = null;
    this.intoView = null;
    this.menupositionTop = 0;
    this.menupositionLeft = 0;
    this.menu = null;
    this.position = 'right';
    this.open = false;
  }
  componentWillLoad() {
    this.refElement = document.getElementById(this.menu);
    this.intoView = positionElement.getScrollParent(this.refElement);
  }
  async toggle() {
    this.open = !this.open;
  }
  openMenu() {
    this.bdsToggle.emit({ value: this.open });
    if (this.open) {
      const positionValue = positionElement.positionElement({
        actionElement: this.refElement,
        changedElement: this.menuElement,
        intoView: this.intoView,
      });
      this.menupositionTop = positionValue.top;
      this.menupositionLeft = positionValue.left;
    }
  }
  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };
    return (index.h(index.Host, null, index.h("div", { ref: this.refMenuElement, class: {
        menu: true,
        [`menu__${this.position}`]: true,
        [`menu__open`]: this.open,
      }, style: menuPosition }, index.h("slot", null)), this.open && index.h("div", { class: { outzone: true }, onClick: (ev) => this.onClickCloseButtom(ev) })));
  }
  static get watchers() { return {
    "open": ["openMenu"]
  }; }
};
BdsMenu.style = menuCss;

exports.bds_menu = BdsMenu;
