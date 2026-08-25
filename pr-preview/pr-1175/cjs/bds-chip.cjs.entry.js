'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const chipCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:pointer;white-space:nowrap;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-weight:600}:host(.chip){border-radius:8px;padding:3px 8px}:host(.chip--primary){background:#e8f2ff;color:#3f7de8}:host(.chip--click.chip--primary:hover){background:#d1e3fa;color:#125ad5}:host(.chip--watermelon){background:#fb5a8b;color:#ffffff}:host(.chip--default){background:#f8fbfb;color:#8ca0b3}:host(.chip--danger){background:#ffa5a5;color:#ff4c4c}:host(.chip--click.chip--danger:hover){background:#fccccc;color:#6a2026}:host(.chip--filter){background:#125ad5;color:#ffffff}:host(.chip--click.chip--filter:hover){background:#0747a6;color:#ffffff}:host(.chip--standard){height:24px;font-size:0.75rem}:host(.chip--tall){height:32px;font-size:0.875rem}.chip__delete{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:6px;cursor:pointer}.chip__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-right:4px}";

const Chip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsDelete = index.createEvent(this, "bdsDelete", 7);
    this.icon = undefined;
    this.size = 'standard';
    this.variant = 'default';
    this.danger = false;
    this.filter = false;
    this.clickable = false;
    this.deletable = false;
    this.disabled = false;
  }
  handleClickDelete(event) {
    if (!this.deletable || this.disabled)
      return;
    event.preventDefault();
    this.bdsDelete.emit({ id: this.element.id });
  }
  getClickClass() {
    return this.clickable ? { 'chip--click': true } : {};
  }
  getSizeClass() {
    return this.size === 'standard' ? { 'chip--standard': true } : { 'chip--tall': true };
  }
  getStateClass() {
    if (this.disabled) {
      return { 'chip--default': true };
    }
    if (this.danger) {
      return { 'chip--danger': true };
    }
    if (this.filter) {
      return { 'chip--filter': true };
    }
    if (this.variant === 'primary') {
      return { 'chip--primary': true };
    }
    if (this.variant === 'watermelon') {
      return { 'chip--watermelon': true };
    }
    return { 'chip--default': true };
  }
  render() {
    return (index.h(index.Host, { class: {
        chip: true,
        ...this.getClickClass(),
        ...this.getStateClass(),
        ...this.getSizeClass(),
      } }, this.icon && (index.h("div", { class: "chip__icon" }, index.h("bds-icon", { size: "x-small", name: this.icon }))), index.h("slot", null), this.deletable && (index.h("div", { class: "chip__delete", onClick: this.handleClickDelete.bind(this) }, index.h("bds-icon", { size: "x-small", theme: "solid", name: "error" })))));
  }
  get element() { return index.getElement(this); }
};
Chip.style = chipCss;

exports.bds_chip = Chip;
