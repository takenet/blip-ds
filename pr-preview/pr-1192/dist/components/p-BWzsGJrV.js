import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const toastContainerCss = ".sc-bds-toast-container-h{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:110000;width:456px}.bottom-right.sc-bds-toast-container-h{bottom:48px;right:48px}.bottom-left.sc-bds-toast-container-h{bottom:48px;left:48px}.top-right.sc-bds-toast-container-h{top:24px;right:24px}.top-left.sc-bds-toast-container-h{top:48px;left:48px}@media (max-width: 780px){.sc-bds-toast-container-h{right:0px;left:0px;width:100%}.top-left.sc-bds-toast-container-h,.top-right.sc-bds-toast-container-h{top:20px}.bottom-left.sc-bds-toast-container-h,.bottom-right.sc-bds-toast-container-h{bottom:20px}}";

const BdsToastContainer = /*@__PURE__*/ proxyCustomElement(class BdsToastContainer extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '53e5a316a94f5c50ae33d9e6ce15019b5ce984f6' }, h("slot", { key: '18f1cafe68882146fb55f608294e6295926ce0d4' })));
    }
    static get style() { return toastContainerCss; }
}, [6, "bds-toast-container"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-toast-container"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-toast-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsToastContainer);
            }
            break;
    } });
}

export { BdsToastContainer as B, defineCustomElement as d };
//# sourceMappingURL=p-BWzsGJrV.js.map

//# sourceMappingURL=p-BWzsGJrV.js.map