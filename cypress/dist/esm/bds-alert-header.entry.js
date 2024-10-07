import { r as registerInstance, h } from './index-611fd21e.js';

const alertHeaderCss = ".alert__header{width:100%;min-height:64px;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.alert__header bds-icon{min-width:32px}.alert__header bds-typo{margin-left:8px;color:var(--color-content-din, #000000)}.alert__header--system{background:var(--color-system, #b2dffd)}.alert__header--system bds-typo{color:var(--color-content-default, #454545)}.alert__header--system .color-icon{color:var(--color-content-default, #454545)}.alert__header--error{background:var(--color-error, #f99f9f)}.alert__header--error bds-typo{color:var(--color-content-default, #454545)}.alert__header--error .color-icon{color:var(--color-content-default, #454545)}.alert__header--warning{background:var(--color-warning, #fde99b)}.alert__header--warning bds-typo{color:var(--color-content-default, #454545)}.alert__header--warning .color-icon{color:var(--color-content-default, #454545)}.alert__header--delete{background:var(--color-delete, #e60f0f)}.alert__header--delete bds-typo{color:var(--color-content-bright, #ffffff)}.alert__header--delete .color-icon{color:var(--color-content-bright, #ffffff)}";

const AlertHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = 'system';
    this.icon = null;
  }
  render() {
    return (h("div", { class: {
        alert__header: true,
        [`alert__header--${this.variant}`]: true,
      } }, this.icon && h("bds-icon", { class: "color-icon", theme: "outline", size: "x-large", name: this.icon }), h("bds-typo", { variant: "fs-16", bold: "bold" }, h("slot", null))));
  }
};
AlertHeader.style = alertHeaderCss;

export { AlertHeader as bds_alert_header };
