import { r as registerInstance, h, H as Host } from './index-C3J6Z5OX.js';

const expansionPanelBodyCss = ":host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #8ca0b3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#8ca0b3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d2dfe6;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}";

const ExpansionPanelBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: '60bf4fb3d6bc5d6a483b723aa424a0504990b9b3' }, h("div", { key: '0c4d81efe8ca2af62c969b60626a3cfed4e5a0dd', class: "expansion-content", hidden: this.open }, h("div", { key: 'c78e5d70669201e94a4361e774865a3c0d079da1', class: "with-line" }, h("slot", { key: 'd718d1570b459ba4dec3fc6cda9c44d1f7918e9b' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss;

export { ExpansionPanelBody as bds_expansion_panel_body };
//# sourceMappingURL=bds-expansion-panel-body.entry.js.map

//# sourceMappingURL=bds-expansion-panel-body.entry.js.map