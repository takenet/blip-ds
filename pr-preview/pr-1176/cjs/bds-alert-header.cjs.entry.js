'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const alertHeaderCss = ".alert__header{width:100%;min-height:64px;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.alert__header bds-icon{min-width:32px}.alert__header bds-typo{margin-left:8px;color:var(--color-content-din, black)}.alert__header--system{background:var(--color-system, #b2dffd)}.alert__header--system bds-typo{color:var(--color-content-default, #282828)}.alert__header--system .color-icon{color:var(--color-content-default, #282828)}.alert__header--error{background:var(--color-error, #fabebe)}.alert__header--error bds-typo{color:var(--color-content-default, #282828)}.alert__header--error .color-icon{color:var(--color-content-default, #282828)}.alert__header--warning{background:var(--color-warning, #fde99b)}.alert__header--warning bds-typo{color:var(--color-content-default, #282828)}.alert__header--warning .color-icon{color:var(--color-content-default, #282828)}.alert__header--delete{background:var(--color-delete, #e60f0f)}.alert__header--delete bds-typo{color:var(--color-content-bright, white)}.alert__header--delete .color-icon{color:var(--color-content-bright, white)}";

const AlertHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = 'system';
    this.icon = null;
  }
  render() {
    return (index.h("div", { class: {
        alert__header: true,
        [`alert__header--${this.variant}`]: true,
      } }, this.icon && index.h("bds-icon", { class: "color-icon", theme: "outline", size: "x-large", name: this.icon }), index.h("bds-typo", { variant: "fs-16", bold: "bold" }, index.h("slot", null))));
  }
};
AlertHeader.style = alertHeaderCss;

exports.bds_alert_header = AlertHeader;
