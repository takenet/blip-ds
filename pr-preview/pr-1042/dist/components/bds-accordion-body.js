import { p as proxyCustomElement, H, h } from './index.js';

const accordionCss = ".accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:\"\";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}";

const AccordionBody = /*@__PURE__*/ proxyCustomElement(class AccordionBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.container = null;
        this.isOpen = false;
        this.isOpenAftAnimation = false;
        this.numberElement = null;
        this.hasDivisor = true;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refContainer = (el) => {
            this.container = el;
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    async divisor(valor) {
        this.hasDivisor = valor;
    }
    isOpenChanged() {
        this.heightContainer = this.isOpen ? (this.container?.offsetHeight || 0) : 0;
        if (this.isOpen) {
            setTimeout(() => {
                this.isOpenAftAnimation = true;
            }, 500);
        }
        else {
            this.isOpenAftAnimation = false;
        }
    }
    render() {
        return (h("div", { key: '1ce7d8262b30074d8c611d9ef1e7d9dc34cc95af', class: {
                accordion_body: true,
                accordion_body_divisor: this.hasDivisor,
                accordion_body_isOpen: this.isOpenAftAnimation,
            }, style: { height: `${this.heightContainer}px` }, "data-test": this.dataTest }, h("div", { key: '4758185d2898ac14015d1bf542fdaaec385fca9b', class: "container", ref: (el) => this.refContainer(el) }, h("slot", { key: 'e82b005345aa83ceeaef25a115a25d51e308a40f' }))));
    }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"]
    }; }
    static get style() { return accordionCss; }
}, [1, "bds-accordion-body", {
        "dataTest": [1, "data-test"],
        "isOpen": [32],
        "isOpenAftAnimation": [32],
        "heightContainer": [32],
        "numberElement": [32],
        "hasDivisor": [32],
        "toggle": [64],
        "open": [64],
        "close": [64],
        "divisor": [64]
    }, undefined, {
        "isOpen": ["isOpenChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-accordion-body"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-accordion-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AccordionBody);
            }
            break;
    } });
}

const BdsAccordionBody = AccordionBody;
const defineCustomElement = defineCustomElement$1;

export { BdsAccordionBody, defineCustomElement };
//# sourceMappingURL=bds-accordion-body.js.map

//# sourceMappingURL=bds-accordion-body.js.map