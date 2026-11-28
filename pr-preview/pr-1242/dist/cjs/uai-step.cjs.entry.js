'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiStepCss = () => `:host{display:block;min-width:0}.step{--step-accent:transparent;--step-line:var(--uai-border-default, #e4e6e7);--uai-typo-color:currentColor;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;gap:var(--uai-spacing-md, 1rem);color:var(--uai-content-secondary, #5f676d)}.step__number{display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.step__marker{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--uai-step-marker-size, var(--uai-sizing-xl, 2rem));height:var(--uai-step-marker-size, var(--uai-sizing-xl, 2rem));border-radius:var(--uai-radius-lg, 0.75rem);border:var(--uai-border-width-default, 1px) solid var(--uai-content-disabled, #848e94);color:var(--uai-content-disabled, #848e94)}.step--active .step__marker{border-color:var(--uai-content-secondary, #5f676d);background:var(--uai-content-secondary, #5f676d);color:var(--uai-content-inverse, #ffffff)}.step--completed .step__marker{border-color:var(--uai-content-primary, #242729);background:var(--uai-content-primary, #242729);color:var(--uai-content-inverse, #ffffff)}.step--active{--step-line:var(--uai-content-secondary, #5f676d);--step-accent:var(--uai-content-disabled, #848e94)}.step--completed{--step-line:var(--uai-content-primary, #242729);--step-accent:var(--uai-content-primary, #242729)}.step__content{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-width:0}.step__heading{color:var(--uai-content-primary, #242729)}.step__description{color:var(--uai-content-secondary, #5f676d)}.step--pointer{cursor:pointer}.step--pointer:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:calc(-1 * var(--uai-spacing-3xs, 0.125rem))}.step--disabled{cursor:not-allowed}.step--disabled .step__heading,.step--disabled .step__description{color:var(--uai-content-disabled, #848e94)}:host([orientation=vertical]) .step{-ms-flex-align:stretch;align-items:stretch}:host([orientation=vertical]) .step__number{padding-bottom:var(--uai-spacing-xs, 0.5rem)}:host([orientation=vertical]) .step__line{-ms-flex:1 1 0px;flex:1 1 0;min-height:var(--uai-sizing-lg, 1.5rem);border-left:var(--uai-border-width-default, 1px) solid var(--step-line)}:host([orientation=vertical]) .step__content{-ms-flex-pack:start;justify-content:flex-start;gap:var(--uai-spacing-xs, 0.5rem);padding-bottom:var(--uai-spacing-lg, 1.5rem)}:host([orientation=vertical]) .step__heading{padding:var(--uai-spacing-2xs, 0.25rem) 0}:host([orientation=horizontal]) .step{-ms-flex-align:center;align-items:center;padding:var(--uai-spacing-lg, 1.5rem);border-bottom:var(--uai-border-width-thick, 2px) solid var(--step-accent)}:host([orientation=horizontal]) .step__description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}`;

const UaiStep = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiStepSelect = index.createEvent(this, "uaiStepSelect");
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
        return (index.h(index.Host, { key: '4d432455e781393cf9277edd3d656ed4fbecc81e', role: "listitem", "aria-current": this.active ? 'step' : undefined, "aria-disabled": this.disabled ? 'true' : undefined }, index.h("div", { key: '649ded66dbf04fd9c6b51ff2e2dd89658f518405', class: {
                step: true,
                [`step--${state}`]: true,
                'step--disabled': this.disabled,
                'step--pointer': this.pointer && !this.disabled,
            }, "data-test": this.dataTest, role: this.interactive ? 'button' : undefined, tabindex: this.interactive ? 0 : undefined, onClick: this.select, onKeyDown: this.onKeyDown }, index.h("div", { key: '3bf7ce22a700eb12b8a7c586311df07e526a2b0f', class: "step__number" }, index.h("span", { key: 'b2bd15c9416c1ea59058d17dc947ce7a9b505b20', class: "step__marker", "aria-hidden": "true" }, state === 'completed' ? (index.h("uai-icon", { name: "check", size: "medium" })) : (index.h("uai-typo", { tag: "span", variant: "body-base", bold: "medium", margin: false }, this.index + 1))), vertical && !this.last && index.h("span", { key: 'e108de434073016ca2bcad29e352442086bcffc7', class: "step__line", "aria-hidden": "true" })), index.h("div", { key: '4260948ab617e11009476d907e705beeef286838', class: "step__content" }, index.h("uai-typo", { key: '26aef2660edeeb20a10055f8c11c4dcce78d8536', tag: "span", variant: "title-md", bold: "semibold", margin: false, class: "step__heading" }, index.h("slot", { key: '8918d40be81b187c831e2f36330acf035cf47df4', name: "heading" }, this.heading)), index.h("div", { key: '89722cd43a46f4eb11d1a177ec4e48ddb9c1da26', class: "step__description" }, index.h("uai-typo", { key: 'dccecbc8520b92ab29bb58d1bb4eea651b54170a', tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: 'f3e6d0f144a37adfe8f893aeb7a8f731d17fd0e2', name: "description" }, this.description)))))));
    }
};
UaiStep.style = uaiStepCss();

exports.uai_step = UaiStep;
