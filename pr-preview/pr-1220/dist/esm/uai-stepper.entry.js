import { r as registerInstance, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiStepperCss = () => `:host{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}:host([orientation=horizontal]){-ms-flex-align:start;align-items:flex-start;border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}:host([orientation=horizontal]) ::slotted(uai-step){-ms-flex:1 1 0px;flex:1 1 0}:host([orientation=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}`;

const UaiStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Layout of the steps: a row with a state bar under each step, or a column with connectors. Use vertical for long labels or narrow areas; avoid unsupported values. */
        this.orientation = 'horizontal';
        this.syncSteps = () => {
            const steps = this.steps;
            steps.forEach((step, index) => {
                step.index = index;
                step.last = index === steps.length - 1;
                step.orientation = this.orientation === 'vertical' ? 'vertical' : 'horizontal';
            });
        };
    }
    orientationChanged() {
        this.syncSteps();
    }
    get steps() {
        return Array.from(this.el.children).filter((child) => child.tagName === 'UAI-STEP');
    }
    connectedCallback() {
        this.syncSteps();
    }
    componentDidLoad() {
        this.syncSteps();
    }
    /**
     * Sets the active step. Use for moving forward or back; pair with setCompletedStep; avoid indexes outside the steps, which are ignored.
     * @param index Zero-based index of the step.
     */
    async setActiveStep(index) {
        const step = this.steps[index];
        if (!step)
            return;
        await this.resetActiveSteps();
        step.active = true;
    }
    /**
     * Marks a step as completed. Use after the person finishes a stage; pair with setActiveStep; avoid indexes outside the steps, which are ignored.
     * @param index Zero-based index of the step.
     */
    async setCompletedStep(index) {
        const step = this.steps[index];
        if (step)
            step.completed = true;
    }
    /**
     * Index of the active step, or -1 when none is active. Use to decide the next step; pair with setActiveStep; avoid assuming a step is always active.
     */
    async getActiveStep() {
        return this.steps.findIndex((step) => step.active === true);
    }
    /** Clears the active state of every step. Use before restarting a flow; pair with resetCompletedSteps. */
    async resetActiveSteps() {
        this.steps.forEach((step) => (step.active = false));
    }
    /** Clears the completed state of every step. Use before restarting a flow; pair with resetActiveSteps. */
    async resetCompletedSteps() {
        this.steps.forEach((step) => (step.completed = false));
    }
    render() {
        return (h(Host, { key: '2c81a4a7028fffddf3d405efb8ab770521b826a9', role: "list" }, h("slot", { key: 'd8a98934f143dda037f20e98e3d315109b4d6e99', onSlotchange: this.syncSteps })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "orientation": [{
                "orientationChanged": 0
            }]
    }; }
};
UaiStepper.style = uaiStepperCss();

export { UaiStepper as uai_stepper };
