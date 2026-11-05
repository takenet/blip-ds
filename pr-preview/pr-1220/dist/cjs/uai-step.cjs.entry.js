'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiStepCss = () => `:host{display:block;min-width:0}.step{--step-accent:transparent;--step-line:var(--uai-border-default, #e4e6e7);--uai-typo-color:currentColor;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;gap:var(--uai-spacing-md, 1rem);color:var(--uai-content-secondary, #5f676d)}.step__number{display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.step__marker{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--uai-step-marker-size, var(--uai-sizing-xl, 2rem));height:var(--uai-step-marker-size, var(--uai-sizing-xl, 2rem));border-radius:var(--uai-radius-lg, 0.75rem);border:var(--uai-border-width-default, 1px) solid var(--uai-content-disabled, #848e94);color:var(--uai-content-disabled, #848e94)}.step--active .step__marker{border-color:var(--uai-content-secondary, #5f676d);background:var(--uai-content-secondary, #5f676d);color:var(--uai-content-inverse, #ffffff)}.step--completed .step__marker{border-color:var(--uai-content-primary, #242729);background:var(--uai-content-primary, #242729);color:var(--uai-content-inverse, #ffffff)}.step--active{--step-line:var(--uai-content-secondary, #5f676d);--step-accent:var(--uai-content-disabled, #848e94)}.step--completed{--step-line:var(--uai-content-primary, #242729);--step-accent:var(--uai-content-primary, #242729)}.step__content{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-width:0}.step__heading{color:var(--uai-content-primary, #242729)}.step__description{color:var(--uai-content-secondary, #5f676d)}.step--pointer{cursor:pointer}.step--disabled{cursor:not-allowed}.step--disabled .step__heading,.step--disabled .step__description{color:var(--uai-content-disabled, #848e94)}:host([orientation=vertical]) .step{-ms-flex-align:stretch;align-items:stretch}:host([orientation=vertical]) .step__number{padding-bottom:var(--uai-spacing-xs, 0.5rem)}:host([orientation=vertical]) .step__line{-ms-flex:1 1 0px;flex:1 1 0;min-height:var(--uai-sizing-lg, 1.5rem);border-left:var(--uai-border-width-default, 1px) solid var(--step-line)}:host([orientation=vertical]) .step__content{-ms-flex-pack:start;justify-content:flex-start;gap:var(--uai-spacing-xs, 0.5rem);padding-bottom:var(--uai-spacing-lg, 1.5rem)}:host([orientation=vertical]) .step__heading{padding:var(--uai-spacing-2xs, 0.25rem) 0}:host([orientation=horizontal]) .step{-ms-flex-align:center;align-items:center;padding:var(--uai-spacing-lg, 1.5rem);border-bottom:var(--uai-border-width-thick, 2px) solid var(--step-accent)}:host([orientation=horizontal]) .step__description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}`;

const UaiStep = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        /** Shows a pointer cursor. Use when steps are clickable; ignored on disabled steps. */
        this.pointer = false;
        /** Data test is the prop to specifically test the component action object. */
        this.dataTest = null;
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
        return (index.h(index.Host, { key: 'e9b9bcda67abf61c4a50d61ef916f54bc88118c6', role: "listitem", "aria-current": this.active ? 'step' : undefined, "aria-disabled": this.disabled ? 'true' : undefined }, index.h("div", { key: 'cb837bebac79753299e3fae010a09e76fb48d4a3', class: {
                step: true,
                [`step--${state}`]: true,
                'step--disabled': this.disabled,
                'step--pointer': this.pointer && !this.disabled,
            }, "data-test": this.dataTest }, index.h("div", { key: 'abb39dc9ea711947d23481d4a6cd42af3a351ccf', class: "step__number" }, index.h("span", { key: 'd5253ba16542a3e6321fed2f35ac18093df7d835', class: "step__marker", "aria-hidden": "true" }, state === 'completed' ? (index.h("uai-icon", { name: "check", size: "medium" })) : (index.h("uai-typo", { tag: "span", variant: "body-base", bold: "medium", margin: false }, this.index + 1))), vertical && !this.last && index.h("span", { key: '82f29a9b9b692ea0bccd3f518ed535e12a8f759f', class: "step__line", "aria-hidden": "true" })), index.h("div", { key: '5d33e216282bbf3223127639b8d24729e8dbdd7d', class: "step__content" }, index.h("uai-typo", { key: 'f458562324c0885c522ae44dd30a51ad3a3fe848', tag: "span", variant: "title-md", bold: "semibold", margin: false, class: "step__heading" }, index.h("slot", { key: '65570b953e2345ea3ace4fea5186299f0c95e65b', name: "heading" }, this.heading)), index.h("div", { key: 'b675184e13f27b7f3183665dd7fe3d3aeb2925ad', class: "step__description" }, index.h("uai-typo", { key: '743e8947b57a497e94f101bb332b0dfce9bc6b2f', tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: '2e17f7d2f1abc9a4a86249806cdfed69391d4fbf', name: "description" }, this.description)))))));
    }
};
UaiStep.style = uaiStepCss();

exports.uai_step = UaiStep;
