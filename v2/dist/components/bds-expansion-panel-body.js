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
        return (h(Host, { key: '09bbd38d3a4392f7825cbe7c86291d5d267bafbe' }, h("div", { key: '84ccce7f3c0290b91f214efa13d57a3426a642b2', class: "expansion-content", hidden: this.open }, h("div", { key: 'a135f926c679e1a8555a1b87396f807663ac1fcb', class: "with-line" }, h("slot", { key: 'bb74332b857860bd42f4b872b319e7db82be798b' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
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