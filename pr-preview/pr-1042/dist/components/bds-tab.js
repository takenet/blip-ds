import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const tabCss = ".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, rgb(89, 89, 89));border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, rgb(40, 40, 40))}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}";

const Tab = /*@__PURE__*/ proxyCustomElement(class Tab extends H {
    constructor() {
        super();
        this.__registerHost();
        this.bdsTabChange = createEvent(this, "bdsTabChange");
        /**
         * Prop to control externally if a tab will be active by default
         */
        this.active = false;
        /**
         * State to control if a tab is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    async onClick() {
        this.bdsTabChange.emit(this.group);
    }
    render() {
        const bold = this.isActive ? 'bold' : 'regular';
        return (h(Host, { key: '8f7ec6e0536a51a222c2b26e491542b0d921b650', class: {
                'bds-tab': true,
                ['bds-tab--selected']: this.isActive,
            }, onClick: this.onClick.bind(this) }, h("div", { key: '4e1dc9282dc14c436959119d51d36f9bc6bcb6be', class: "bds-tab__text" }, h("bds-typo", { key: 'a555ee8e27ae9711ae9d6081d98ee3f1fc546f7f', variant: "fs-16", bold: bold }, this.label))));
    }
    static get style() { return tabCss; }
}, [0, "bds-tab", {
        "group": [1],
        "label": [1],
        "active": [4],
        "isActive": [32]
    }, [[16, "bdsTabChange", "handleTabChange"], [16, "bdsTabInit", "handleTabChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-tab", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tab);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsTab = Tab;
const defineCustomElement = defineCustomElement$1;

export { BdsTab, defineCustomElement };
//# sourceMappingURL=bds-tab.js.map

//# sourceMappingURL=bds-tab.js.map