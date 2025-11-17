import { r as registerInstance, h, a as getElement } from './index-C3J6Z5OX.js';

const stepCss = ":host{padding:8px}:host .step{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content--completed{color:var(--color-content-disable, rgb(89, 89, 89))}:host .step__content--active{color:var(--color-primary, rgb(30, 107, 241));font-weight:bold}:host .step__content--pointer{cursor:pointer}:host .step__content--disabled{cursor:no-drop}:host .step__content__ellipse{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;border-radius:50%;background:var(--color-content-default, rgb(40, 40, 40));margin-right:4px;min-width:24px;min-height:24px}:host .step__content__ellipse bds-typo,:host .step__content__ellipse bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__ellipse--completed{background:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__ellipse--completed bds-typo,:host .step__content__ellipse--completed bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__ellipse--active{background:var(--color-surface-primary, rgb(30, 107, 241))}:host .step__content__ellipse--active bds-typo,:host .step__content__ellipse--active bds-icon{color:var(--color-content-bright, rgb(255, 255, 255))}:host .step__content__ellipse--disabled{background:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__ellipse--disabled bds-typo,:host .step__content__ellipse--disabled bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__text--completed{color:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__text--active{color:var(--color-content-default, rgb(40, 40, 40))}:host .step__content__text--disabled{color:var(--color-content-ghost, rgb(140, 140, 140))}@media (max-width: 780px){:host{display:-ms-flexbox;display:flex;-ms-flex:inherit;flex:inherit}}";

const BdsStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Used to define the last step component on the list
         */
        this.last = false;
        /**
         * Used to complete the step
         */
        this.completed = false;
        /**
         * Used to set the step as active
         */
        this.active = false;
        /**
         * Used to set the step as disabled
         */
        this.disabled = false;
        /**
         * Used to set the index of the steps
         */
        this.index = 0;
        /**
         * Used to set cursor pointer on the step (useful to allow clicks on the steps)
         */
        this.pointer = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h("div", { key: 'a0748f1ca2dc9fd4e0f7e6dbca088cf6398fe911', class: "step" }, h("div", { key: '1f484fd5e103fc22a08c4ae9f0dcdf570af99b06', class: {
                step__content: true,
                'step__content--active': this.active,
                'step__content--completed': this.completed,
                'step__content--disabled': this.disabled,
                'step__content--pointer': this.pointer,
                'step--last': this.last,
            }, "data-test": this.dataTest }, h("div", { key: '0244bd77513adfc8b9b01bf3a69dc0ca78d7a027', class: {
                step__content__ellipse: true,
                'step__content__ellipse--active': this.active,
                'step__content__ellipse--completed': this.completed,
                'step__content__ellipse--disabled': this.disabled,
            } }, this.completed && h("bds-icon", { key: '6e0f5eaee2c8e3ae6389088978afed64ab73218e', name: "true" }), !this.completed && h("bds-typo", { key: 'a5fd230a2df68822270ec9867ea00ba80e2466cd' }, this.index + 1)), h("bds-typo", { key: 'ed57207502db70efe8060eedc9e043005f4afdf9', variant: "fs-16", class: {
                step__content__text: true,
                'step__content__text--completed': this.completed && !this.active,
                'step__content__text--active': this.active,
                'step__content__text--disabled': this.disabled,
            }, bold: this.active ? 'bold' : 'regular' }, h("slot", { key: 'e8c522939df2928192c4055c73b9bb580b81dda2' })))));
    }
    get el() { return getElement(this); }
};
BdsStep.style = stepCss;

export { BdsStep as bds_step };
//# sourceMappingURL=bds-step.entry.js.map

//# sourceMappingURL=bds-step.entry.js.map