import { r as registerInstance, h, H as Host, a as getElement } from './index-COEIU3SQ.js';

const stepperCss = ":host{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}::slotted(.stepper__container__divisor){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, rgb(89, 89, 89));margin:0px 8px;min-width:24px}::slotted(.stepper__container__divisor--completed){border-top:2px solid var(--color-primary, rgb(30, 107, 241))}";

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
        return (h(Host, { key: 'c3268c5970d6292d82a1510b506f3e085edb1801', class: "stepper__container" }, h("slot", { key: '7d61bc23bd0e9b0252a16a7b78141bcdccb4d60f' })));
    }
    get el() { return getElement(this); }
};
BdsStepper.style = stepperCss;

export { BdsStepper as bds_stepper };
//# sourceMappingURL=bds-stepper.entry.js.map

//# sourceMappingURL=bds-stepper.entry.js.map