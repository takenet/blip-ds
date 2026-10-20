import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const expansionPanelBodyCss = ":host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}";

const ExpansionPanelBody = /*@__PURE__*/ proxyCustomElement(class ExpansionPanelBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: 'ddab00688a9778f798ada103add18ea646bb0882' }, h("div", { key: '7b8aa624dc540e3e981f08695e7fe8807e0b91dc', class: "expansion-content", hidden: this.open }, h("div", { key: '1cf712b7bf727de3fc7784438e47370bb786cd16', class: "with-line" }, h("slot", { key: 'bb9a0251cb488815c6020490a841fd1f22f42df4' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
    }
    static get style() { return expansionPanelBodyCss; }
}, [1, "bds-expansion-panel-body", {
        "open": [4],
        "text": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-expansion-panel-body"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-expansion-panel-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ExpansionPanelBody);
            }
            break;
    } });
}

const BdsExpansionPanelBody = ExpansionPanelBody;
const defineCustomElement = defineCustomElement$1;

export { BdsExpansionPanelBody, defineCustomElement };
//# sourceMappingURL=bds-expansion-panel-body.js.map

//# sourceMappingURL=bds-expansion-panel-body.js.map