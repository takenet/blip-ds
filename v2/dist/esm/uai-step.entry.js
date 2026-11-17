import { r as registerInstance, c as createEvent, h, H as Host } from './index-CkbvGS8Z.js';

const uaiStepCss = () => `:host{display:block;min-width:0}.step{--step-accent:transparent;--step-line:var(--uai-border-default, #e4e6e7);--uai-typo-color:currentColor;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;gap:var(--uai-spacing-md, 1rem);color:var(--uai-content-secondary, #5f676d)}.step__number{display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.step__marker{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--uai-step-marker-size, var(--uai-sizing-xl, 2rem));height:var(--uai-step-marker-size, var(--uai-sizing-xl, 2rem));border-radius:var(--uai-radius-lg, 0.75rem);border:var(--uai-border-width-default, 1px) solid var(--uai-content-disabled, #848e94);color:var(--uai-content-disabled, #848e94)}.step--active .step__marker{border-color:var(--uai-content-secondary, #5f676d);background:var(--uai-content-secondary, #5f676d);color:var(--uai-content-inverse, #ffffff)}.step--completed .step__marker{border-color:var(--uai-content-primary, #242729);background:var(--uai-content-primary, #242729);color:var(--uai-content-inverse, #ffffff)}.step--active{--step-line:var(--uai-content-secondary, #5f676d);--step-accent:var(--uai-content-disabled, #848e94)}.step--completed{--step-line:var(--uai-content-primary, #242729);--step-accent:var(--uai-content-primary, #242729)}.step__content{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-width:0}.step__heading{color:var(--uai-content-primary, #242729)}.step__description{color:var(--uai-content-secondary, #5f676d)}.step--pointer{cursor:pointer}.step--pointer:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:calc(-1 * var(--uai-spacing-3xs, 0.125rem))}.step--disabled{cursor:not-allowed}.step--disabled .step__heading,.step--disabled .step__description{color:var(--uai-content-disabled, #848e94)}:host([orientation=vertical]) .step{-ms-flex-align:stretch;align-items:stretch}:host([orientation=vertical]) .step__number{padding-bottom:var(--uai-spacing-xs, 0.5rem)}:host([orientation=vertical]) .step__line{-ms-flex:1 1 0px;flex:1 1 0;min-height:var(--uai-sizing-lg, 1.5rem);border-left:var(--uai-border-width-default, 1px) solid var(--step-line)}:host([orientation=vertical]) .step__content{-ms-flex-pack:start;justify-content:flex-start;gap:var(--uai-spacing-xs, 0.5rem);padding-bottom:var(--uai-spacing-lg, 1.5rem)}:host([orientation=vertical]) .step__heading{padding:var(--uai-spacing-2xs, 0.25rem) 0}:host([orientation=horizontal]) .step{-ms-flex-align:center;align-items:center;padding:var(--uai-spacing-lg, 1.5rem);border-bottom:var(--uai-border-width-thick, 2px) solid var(--step-accent)}:host([orientation=horizontal]) .step__description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}`;

const UaiStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiStepSelect = createEvent(this, "uaiStepSelect");
        /** Step title. Use a short noun phrase; pair with description for details; avoid long sentences. */
        this.heading = null;
        /** Step description. Use for one or two lines of detail; pair with heading; in the horizontal stepper it is cut at two lines. */
        this.description = null;
        /** Layout of the step. Set by the stepper from its orientation; avoid setting it by hand. */
        this.orientation = 'horizontal';
        /** Marks the last step, which draws no connector in the vertical layout. Set by the stepper; avoid setting it by hand. */
        this.last = false;
        /** Marks the stage as done and shows a check. Use with setCompletedStep; the active step wins over completed. */
        this.completed = false;
        /** Marks the current stage. Use with setActiveStep; avoid more than one active step. */
        this.active = false;
        /** Makes the step unavailable. Use for stages that cannot be reached yet; avoid combining it with pointer. */
        this.disabled = false;
        /** Position of the step, starting at 0. Set by the stepper; avoid setting it by hand. */
        this.index = 0;
        /** Makes the step clickable and focusable, announcing uaiStepSelect. Use for steps the person can go back to; set by the stepper when navigable; ignored on disabled steps. */
        this.pointer = false;
        /** Data test is the prop to specifically test the component action object. */
        this.dataTest = null;
        this.select = () => {
            if (this.interactive)
                this.uaiStepSelect.emit(this.index);
        };
        this.onKeyDown = (event) => {
            if (!this.interactive || (event.key !== 'Enter' && event.key !== ' '))
                return;
            event.preventDefault();
            this.select();
        };
    }
    get interactive() {
        return !!this.pointer && !this.disabled;
    }
    get state() {
        if (this.active)
            return 'active';
        if (this.completed)
            return 'completed';
        return 'pending';
    }
    render() {
        const state = this.state;
        const vertical = this.orientation === 'vertical';
        return (h(Host, { key: '9b04a1ed1f30fd98ac5c4fcab1181ef3d80301ef', role: "listitem", "aria-current": this.active ? 'step' : undefined, "aria-disabled": this.disabled ? 'true' : undefined }, h("div", { key: '2b8b65be7aa63112b914c705b5acb382852604d0', class: {
                step: true,
                [`step--${state}`]: true,
                'step--disabled': this.disabled,
                'step--pointer': this.pointer && !this.disabled,
            }, "data-test": this.dataTest, role: this.interactive ? 'button' : undefined, tabindex: this.interactive ? 0 : undefined, onClick: this.select, onKeyDown: this.onKeyDown }, h("div", { key: 'cc4c4afa968de5c05f10b560a437e0cfdde1a38f', class: "step__number" }, h("span", { key: 'fab2209e6179fb720c2a734d6b7af11b2b8cd6cd', class: "step__marker", "aria-hidden": "true" }, state === 'completed' ? (h("uai-icon", { name: "check", size: "medium" })) : (h("uai-typo", { tag: "span", variant: "body-base", bold: "medium", margin: false }, this.index + 1))), vertical && !this.last && h("span", { key: 'aac5a68f1201c7db7bb00067bf808d81e72f0767', class: "step__line", "aria-hidden": "true" })), h("div", { key: 'b1e33618b5fdca4ce4faa07fa30d457dac972300', class: "step__content" }, h("uai-typo", { key: '7ff27dc4e27b237cff900c64912fbfda923ec634', tag: "span", variant: "title-md", bold: "semibold", margin: false, class: "step__heading" }, h("slot", { key: '26d5c95637d80c5f4e3d52e727973389a21d1113', name: "heading" }, this.heading)), h("div", { key: '2eff6526934b4c6fcfe0a32ff5d9231bcb00be0a', class: "step__description" }, h("uai-typo", { key: '30dc69f438b36bb2e2cb7251b8413540bf34f5cc', tag: "span", variant: "body-base", margin: false }, h("slot", { key: '625875789742d1a9d52590f1f36f420f84246157', name: "description" }, this.description)))))));
    }
};
UaiStep.style = uaiStepCss();

export { UaiStep as uai_step };
