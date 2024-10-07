import { r as registerInstance, h, g as getElement } from './index-611fd21e.js';

const stepperCss = ".stepper__container{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.stepper__container ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}.stepper__container__divisor{-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, #636363);margin:0px 8px;min-width:24px}.stepper__container__divisor--completed{border-top:2px solid var(--color-primary, #1e6bf1)}";

const BdsStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    this.childOptions.forEach((option, index) => {
      option.index = index;
      if (index === this.childOptions.length - 1) {
        option.last = true;
      }
    });
  }
  componentDidLoad() {
    this.renderLine();
  }
  /**
   * Set the active step
   *
   * @param index The index of the step to be set as active
   * @returns void
   */
  async setActiveStep(index) {
    this.resetActiveSteps();
    this.childOptions[index].active = true;
  }
  /**
   * Set the completed step
   *
   * @param index The index of the step to be set as completed
   * @returns void
   */
  async setCompletedStep(index) {
    this.childOptions[index].completed = true;
  }
  /**
   * Returns the active step
   *
   * @returns HTMLBdsStepElement
   */
  async getActiveStep() {
    return this.childOptions.find((step) => step.active === true).index;
  }
  /**
   * Reset all active steps
   *
   * @returns void
   */
  async resetActiveSteps() {
    for (const step of this.childOptions) {
      step.active = false;
    }
  }
  /**
   * Reset all completed steps
   *
   * @returns void
   */
  async resetCompletedSteps() {
    for (const step of this.childOptions) {
      step.completed = false;
    }
  }
  get childOptions() {
    return Array.from(this.el.querySelectorAll('bds-step'));
  }
  renderLine() {
    const line = document.createElement('div');
    line.classList.add('stepper__container__divisor');
    Array.from(this.childOptions).forEach((item, idx) => {
      if (this.childOptions.length - 1 != idx) {
        item.insertAdjacentHTML('afterend', line.outerHTML);
      }
    });
  }
  render() {
    return (h("div", { class: "stepper__container" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
BdsStepper.style = stepperCss;

export { BdsStepper as bds_stepper };
