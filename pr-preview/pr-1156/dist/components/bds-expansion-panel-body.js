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
        return (h(Host, { key: 'c6eea3401fed479f4a0a5ec8cb92b4f00538c5d9' }, h("div", { key: '4cf516d111d15a018d0cc98943539f100984d562', class: "expansion-content", hidden: this.open }, h("div", { key: '7369f2f19487801c6458f7ec472d328adf08eda6', class: "with-line" }, h("slot", { key: '2d7e482529bbea2a4c04c7e3f00ce7a9c02ce27f' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
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