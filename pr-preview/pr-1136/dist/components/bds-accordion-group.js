import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const accordionCss = ".accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:\"\";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}";

const AccordionGroup = /*@__PURE__*/ proxyCustomElement(class AccordionGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsAccordionCloseAll = createEvent(this, "bdsAccordionCloseAll");
        this.bdsAccordionOpenAll = createEvent(this, "bdsAccordionOpenAll");
        this.accordionsElement = null;
        this.collapse = 'single';
        this.divisor = true;
    }
    async closeAll(actNumber) {
        this.bdsAccordionCloseAll.emit();
        for (let i = 0; i < this.accordionsElement.length; i++) {
            if (this.collapse != 'multiple') {
                if (actNumber != i)
                    this.accordionsElement[i].close();
            }
            else {
                this.accordionsElement[i].close();
            }
        }
    }
    async openAll(actNumber) {
        this.bdsAccordionOpenAll.emit();
        for (let i = 0; i < this.accordionsElement.length; i++) {
            if (this.collapse != 'multiple') {
                if (actNumber != i)
                    this.accordionsElement[i].open();
            }
            else {
                this.accordionsElement[i].open();
            }
        }
    }
    divisorChanged(newValue) {
        if (this.accordionsElement) {
            for (let i = 0; i < this.accordionsElement.length; i++) {
                this.accordionsElement[i].divisor = newValue; // Atualiza divisor nos filhos
            }
        }
    }
    componentWillRender() {
        this.accordionsElement = this.element.getElementsByTagName('bds-accordion');
        for (let i = 0; i < this.accordionsElement.length; i++) {
            this.accordionsElement[i].reciveNumber(i);
            this.accordionsElement[i].divisor = this.divisor;
        }
    }
    render() {
        return (h("div", { key: '2340a98ebbc6fc125052be06ca9aff17c8d503c7', class: "accordion_group" }, h("slot", { key: '3c322b73b2e4a7b6c83d453d95bc9e105c478dd3' })));
    }
    get element() { return this; }
    static get watchers() { return {
        "divisor": ["divisorChanged"]
    }; }
    static get style() { return accordionCss; }
}, [1, "bds-accordion-group", {
        "collapse": [1],
        "divisor": [4],
        "closeAll": [64],
        "openAll": [64]
    }, undefined, {
        "divisor": ["divisorChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-accordion-group"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-accordion-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AccordionGroup);
            }
            break;
    } });
}

const BdsAccordionGroup = AccordionGroup;
const defineCustomElement = defineCustomElement$1;

export { BdsAccordionGroup, defineCustomElement };
//# sourceMappingURL=bds-accordion-group.js.map

//# sourceMappingURL=bds-accordion-group.js.map