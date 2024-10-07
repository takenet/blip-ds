import { r as registerInstance, h } from './index-611fd21e.js';

var CounterTextState;
(function (CounterTextState) {
  CounterTextState["Default"] = "default";
  CounterTextState["Warning"] = "warning";
  CounterTextState["Delete"] = "delete";
})(CounterTextState || (CounterTextState = {}));

const counterTextCss = ".counter-text{background:var(--color-surface-2, #e0e0e0);color:var(--color-content-disable, #636363);-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, #b2dffd);color:var(--color-content-din, #000000)}.counter-text--warning{background:var(--color-warning, #fde99b);color:var(--color-content-din, #000000)}.counter-text--delete{background:var(--color-delete, #e60f0f);color:var(--color-content-bright, #ffffff)}";

const CounterText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: {
        'counter-text': true,
        'counter-text--active': this.active,
        [`counter-text--${state}`]: true,
      } }, h("bds-typo", { variant: "fs-10" }, actualLength)));
  }
};
CounterText.style = counterTextCss;

export { CounterText as bds_counter_text };
