import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const stepperCss = ":host{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}::slotted(.stepper__container__divisor){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, rgb(89, 89, 89));margin:0px 8px;min-width:24px}::slotted(.stepper__container__divisor--completed){border-top:2px solid var(--color-primary, rgb(30, 107, 241))}";

const BdsStepper$1 = /*@__PURE__*/ proxyCustomElement(class BdsStepper extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: 'a793010b385c44a42b19bcb31ec1a6f828ac32e6', class: "stepper__container" }, h("slot", { key: '2d9955120102d625dba629acfa47380c3eed2017' })));
    }
    get el() { return this; }
    static get style() { return stepperCss; }
}, [1, "bds-stepper", {
        "setActiveStep": [64],
        "setCompletedStep": [64],
        "getActiveStep": [64],
        "resetActiveSteps": [64],
        "resetCompletedSteps": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-stepper"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-stepper":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsStepper$1);
            }
            break;
    } });
}

const BdsStepper = BdsStepper$1;
const defineCustomElement = defineCustomElement$1;

export { BdsStepper, defineCustomElement };
//# sourceMappingURL=bds-stepper.js.map

//# sourceMappingURL=bds-stepper.js.map