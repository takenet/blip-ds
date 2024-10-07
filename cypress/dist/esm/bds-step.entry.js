import { r as registerInstance, h, g as getElement } from './index-611fd21e.js';

const stepCss = ":host{padding:8px}:host .step{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content--completed{color:var(--color-content-disable, #636363)}:host .step__content--active{color:var(--color-primary, #1e6bf1);font-weight:bold}:host .step__content--pointer{cursor:pointer}:host .step__content--disabled{cursor:no-drop}:host .step__content__ellipse{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;border-radius:50%;background:var(--color-content-default, #454545);margin-right:4px;min-width:24px;min-height:24px}:host .step__content__ellipse bds-typo,:host .step__content__ellipse bds-icon{color:var(--color-surface-0, #ffffff)}:host .step__content__ellipse--completed{background:var(--color-content-ghost, #8c8c8c)}:host .step__content__ellipse--completed bds-typo,:host .step__content__ellipse--completed bds-icon{color:var(--color-surface-0, #ffffff)}:host .step__content__ellipse--active{background:var(--color-surface-primary, #1e6bf1)}:host .step__content__ellipse--active bds-typo,:host .step__content__ellipse--active bds-icon{color:var(--color-content-bright, #ffffff)}:host .step__content__ellipse--disabled{background:var(--color-content-ghost, #8c8c8c)}:host .step__content__ellipse--disabled bds-typo,:host .step__content__ellipse--disabled bds-icon{color:var(--color-surface-0, #ffffff)}:host .step__content__text--completed{color:var(--color-content-ghost, #8c8c8c)}:host .step__content__text--active{color:var(--color-content-default, #454545)}:host .step__content__text--disabled{color:var(--color-content-ghost, #8c8c8c)}@media (max-width: 780px){:host{display:-ms-flexbox;display:flex;-ms-flex:inherit;flex:inherit}}";

const BdsStep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.last = false;
    this.completed = false;
    this.active = false;
    this.disabled = false;
    this.index = 0;
    this.pointer = false;
    this.dataTest = null;
  }
  render() {
    return (h("div", { class: "step" }, h("div", { class: {
        step__content: true,
        'step__content--active': this.active,
        'step__content--completed': this.completed,
        'step__content--disabled': this.disabled,
        'step__content--pointer': this.pointer,
        'step--last': this.last,
      }, "data-test": this.dataTest }, h("div", { class: {
        step__content__ellipse: true,
        'step__content__ellipse--active': this.active,
        'step__content__ellipse--completed': this.completed,
        'step__content__ellipse--disabled': this.disabled,
      } }, this.completed && h("bds-icon", { name: "true" }), !this.completed && h("bds-typo", null, this.index + 1)), h("bds-typo", { variant: "fs-16", class: {
        step__content__text: true,
        'step__content__text--completed': this.completed && !this.active,
        'step__content__text--active': this.active,
        'step__content__text--disabled': this.disabled,
      }, bold: this.active ? 'bold' : 'regular' }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
BdsStep.style = stepCss;

export { BdsStep as bds_step };
