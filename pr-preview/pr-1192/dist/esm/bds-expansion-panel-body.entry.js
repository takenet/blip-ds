import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';

const expansionPanelBodyCss = ":host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}";

const ExpansionPanelBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: '569f97aa18a16220c3e83cd641316fdbc760d6e0' }, h("div", { key: '4ec5872314662bb72657377da856a55d35615823', class: "expansion-content", hidden: this.open }, h("div", { key: '3bdc1d8cc12ac8c20bbbae84a866e3c93332ac74', class: "with-line" }, h("slot", { key: '28d217ec8203dba9e76d1ab212a6167aa22a891c' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss;

export { ExpansionPanelBody as bds_expansion_panel_body };
//# sourceMappingURL=bds-expansion-panel-body.entry.js.map

//# sourceMappingURL=bds-expansion-panel-body.entry.js.map