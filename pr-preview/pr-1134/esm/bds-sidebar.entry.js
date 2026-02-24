import { r as registerInstance, c as createEvent, h, g as getElement } from './index-611fd21e.js';

const sidebarCss = ".sidebar_dialog{width:100%;height:100vh;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));background-color:rgba(0, 0, 0, 0.7);opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;display:none}.sidebar_dialog.type_over{position:fixed;top:0;left:0;z-index:80000}.sidebar_dialog.type_over .sidebar{z-index:90000}.sidebar_dialog.type_fixed{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;height:100%;-webkit-box-shadow:none;box-shadow:none}.sidebar_dialog.is_open{display:-ms-flexbox;display:flex;opacity:1;visibility:visible}.sidebar_dialog .outzone{-ms-flex-order:2;order:2;width:100%;height:100vh}.sidebar_dialog .sidebar{width:360px;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--color-surface-2, #ededed);-ms-flex-negative:0;flex-shrink:0}.sidebar_dialog .sidebar.position_left{-ms-flex-order:1;order:1}.sidebar_dialog .sidebar.position_right{-ms-flex-order:3;order:3}.sidebar_dialog .sidebar.background_surface-1{background-color:var(--color-surface-1, #f6f6f6)}.sidebar_dialog .sidebar.background_surface-2{background-color:var(--color-surface-2, #ededed)}.sidebar_dialog .sidebar.background_surface-3{background-color:var(--color-surface-3, #e3e3e3)}.sidebar_dialog .sidebar.background_surface-4{background-color:var(--color-surface-4, #141414)}.sidebar_dialog .sidebar.type_fixed{width:288px}.sidebar_dialog .sidebar .header{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px}.sidebar_dialog .sidebar .header .content{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;position:relative;color:var(--color-content-default, #282828)}.sidebar_dialog .sidebar .header .content ::slotted(*){width:100%}.sidebar_dialog .sidebar .header .closeButton{border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1;cursor:pointer;color:var(--color-content-default, #282828)}.sidebar_dialog .sidebar .body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.sidebar_dialog .sidebar .body .content{position:absolute;inset:0;z-index:999999;overflow-y:overlay;overflow-x:clip}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.sidebar_dialog .sidebar .body .margin{padding:8px 24px}.sidebar_dialog .sidebar .footer .content{padding:24px}.sidebar_dialog .sidebar .footer .content ::slotted(*){height:40px;overflow:hidden}.sidebar_dialog .sidebar.is_open.position_left{right:calc(100% - 360px)}.sidebar_dialog .sidebar.is_open.position_right{left:calc(100% - 360px)}";

const Sidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsToggle = createEvent(this, "bdsToggle", 7);
    this.listiner = (event) => {
      if (event.key == 'Escape' && this.type !== 'fixed') {
        this.isOpen = false;
      }
    };
    this.onClickCloseButtom = () => {
      this.isOpen = false;
    };
    this.InnerSpacing = 0;
    this.isOpen = this.type === 'fixed' ? true : false;
    this.sidebarPosition = 'left';
    this.type = 'over';
    this.margin = true;
    this.width = 360;
    this.dtOutzone = null;
    this.dtButtonClose = null;
    this.background = 'surface-2';
  }
  async toggle() {
    this.isOpen = !this.isOpen;
  }
  isOpenChanged(newValue) {
    this.bdsToggle.emit({ value: newValue });
    if (newValue === true) {
      document.addEventListener('keyup', this.listiner, false);
    }
    else {
      document.removeEventListener('keyup', this.listiner, false);
    }
  }
  componentWillLoad() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }
  render() {
    return (h("div", { class: {
        sidebar_dialog: true,
        is_open: this.isOpen,
        [`type_${this.type}`]: true,
      } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { class: {
        sidebar: true,
        is_open: this.isOpen,
        [`type_${this.type}`]: true,
        [`position_${this.sidebarPosition}`]: true,
        [`background_${this.background}`]: true,
      }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { class: { header: true } }, h("div", { class: { content: true } }, h("slot", { name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
        closeButton: true,
      }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { class: { body: true } }, h("div", { class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { name: "body" }))), this.hasFooterSlot && (h("div", { class: { footer: true } }, h("div", { class: { content: true } }, h("slot", { name: "footer" })))))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "isOpen": ["isOpenChanged"]
  }; }
};
Sidebar.style = sidebarCss;

export { Sidebar as bds_sidebar };
