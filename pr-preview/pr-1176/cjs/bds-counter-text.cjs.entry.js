'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

var CounterTextState;
(function (CounterTextState) {
  CounterTextState["Default"] = "default";
  CounterTextState["Warning"] = "warning";
  CounterTextState["Delete"] = "delete";
})(CounterTextState || (CounterTextState = {}));

const counterTextCss = ".counter-text{background:var(--color-surface-2, #ededed);color:var(--color-content-disable, #595959);-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, #b2dffd);color:var(--color-content-din, black)}.counter-text--warning{background:var(--color-warning, #fde99b);color:var(--color-content-din, black)}.counter-text--delete{background:var(--color-delete, #e60f0f);color:var(--color-content-bright, white)}";

const CounterText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.length = undefined;
    this.max = undefined;
    this.active = false;
    this.warning = { max: 20, min: 2 };
    this.delete = { max: 1, min: 0 };
  }
  getState() {
    const actualLength = this.getActualLength();
    if (actualLength >= this.warning.min && actualLength <= this.warning.max) {
      return CounterTextState.Warning;
    }
    if (actualLength <= this.delete.max) {
      return CounterTextState.Delete;
    }
    return CounterTextState.Default;
  }
  getActualLength() {
    return this.max - this.length;
  }
  render() {
    const state = this.getState();
    const actualLength = this.getActualLength();
    return (index.h("div", { class: {
        'counter-text': true,
        'counter-text--active': this.active,
        [`counter-text--${state}`]: true,
      } }, index.h("bds-typo", { variant: "fs-10" }, actualLength)));
  }
};
CounterText.style = counterTextCss;

exports.bds_counter_text = CounterText;
