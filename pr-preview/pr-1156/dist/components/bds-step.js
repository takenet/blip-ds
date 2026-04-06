import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$3 } from './p-DmvHH3kg.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const stepCss = ":host{padding:8px}:host .step{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .step__content--completed{color:var(--color-content-disable, rgb(89, 89, 89))}:host .step__content--active{color:var(--color-primary, rgb(30, 107, 241));font-weight:bold}:host .step__content--pointer{cursor:pointer}:host .step__content--disabled{cursor:no-drop}:host .step__content__ellipse{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;border-radius:50%;background:var(--color-content-default, rgb(40, 40, 40));margin-right:4px;min-width:24px;min-height:24px}:host .step__content__ellipse bds-typo,:host .step__content__ellipse bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__ellipse--completed{background:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__ellipse--completed bds-typo,:host .step__content__ellipse--completed bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__ellipse--active{background:var(--color-surface-primary, rgb(30, 107, 241))}:host .step__content__ellipse--active bds-typo,:host .step__content__ellipse--active bds-icon{color:var(--color-content-bright, rgb(255, 255, 255))}:host .step__content__ellipse--disabled{background:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__ellipse--disabled bds-typo,:host .step__content__ellipse--disabled bds-icon{color:var(--color-surface-0, rgb(255, 255, 255))}:host .step__content__text--completed{color:var(--color-content-ghost, rgb(140, 140, 140))}:host .step__content__text--active{color:var(--color-content-default, rgb(40, 40, 40))}:host .step__content__text--disabled{color:var(--color-content-ghost, rgb(140, 140, 140))}@media (max-width: 780px){:host{display:-ms-flexbox;display:flex;-ms-flex:inherit;flex:inherit}}";

const BdsStep$1 = /*@__PURE__*/ proxyCustomElement(class BdsStep extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h("div", { key: '203fdf2d91cb6475ac03b5f30ad5e71d9bbd72d0', class: "step" }, h("div", { key: 'bf2297c873eee6b9eb4a74b677081ce6356f9caa', class: {
                step__content: true,
                'step__content--active': this.active,
                'step__content--completed': this.completed,
                'step__content--disabled': this.disabled,
                'step__content--pointer': this.pointer,
                'step--last': this.last,
            }, "data-test": this.dataTest }, h("div", { key: 'e5779bf01feb112a567b44551c702a9ba3328593', class: {
                step__content__ellipse: true,
                'step__content__ellipse--active': this.active,
                'step__content__ellipse--completed': this.completed,
                'step__content__ellipse--disabled': this.disabled,
            } }, this.completed && h("bds-icon", { key: '5f2ddd07843ae680d632040b96ea44562df6bae8', name: "true" }), !this.completed && h("bds-typo", { key: 'bd902986b9ccdc70b4e8a4bfa073dcdf26de6521' }, this.index + 1)), h("bds-typo", { key: '029eab5a10635af2ca7eed833164b9c640dd1306', variant: "fs-16", class: {
                step__content__text: true,
                'step__content__text--completed': this.completed && !this.active,
                'step__content__text--active': this.active,
                'step__content__text--disabled': this.disabled,
            }, bold: this.active ? 'bold' : 'regular' }, h("slot", { key: 'e2f79ad9d1ff6dfcfe3d7133b83bb24834c45070' })))));
    }
    get el() { return this; }
    static get style() { return stepCss; }
}, [1, "bds-step", {
        "last": [4],
        "completed": [4],
        "active": [4],
        "disabled": [4],
        "index": [2],
        "pointer": [4],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-step", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-step":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsStep$1);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsStep = BdsStep$1;
const defineCustomElement = defineCustomElement$1;

export { BdsStep, defineCustomElement };
//# sourceMappingURL=bds-step.js.map

//# sourceMappingURL=bds-step.js.map