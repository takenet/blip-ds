import { p as proxyCustomElement, H, h } from './index.js';

const alertActionsCss = ".alert__actions{width:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;position:relative;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__actions ::slotted(bds-button:nth-child(1)){margin-right:16px !important}";

const AlertActions = /*@__PURE__*/ proxyCustomElement(class AlertActions extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: '3dabe1d71e6636d7dcb2674b954ddfba99998f04', class: "alert__actions" }, h("slot", { key: '51aa1a3b95f55efeaca11b3a59496a92c78a8247' })));
    }
    static get style() { return alertActionsCss; }
}, [1, "bds-alert-actions"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-alert-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-alert-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AlertActions);
            }
            break;
    } });
}

const BdsAlertActions = AlertActions;
const defineCustomElement = defineCustomElement$1;

export { BdsAlertActions, defineCustomElement };
//# sourceMappingURL=bds-alert-actions.js.map

//# sourceMappingURL=bds-alert-actions.js.map