'use strict';

var index = require('./index-DQyYkciT.js');

const expansionPanelBodyCss = ":host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}";

const ExpansionPanelBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (index.h(index.Host, { key: 'ddab00688a9778f798ada103add18ea646bb0882' }, index.h("div", { key: '7b8aa624dc540e3e981f08695e7fe8807e0b91dc', class: "expansion-content", hidden: this.open }, index.h("div", { key: '1cf712b7bf727de3fc7784438e47370bb786cd16', class: "with-line" }, index.h("slot", { key: 'bb9a0251cb488815c6020490a841fd1f22f42df4' }), this.text ? (index.h("div", { class: "text" }, index.h("p", null, this.text))) : (index.h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss;

exports.bds_expansion_panel_body = ExpansionPanelBody;
//# sourceMappingURL=bds-expansion-panel-body.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-body.cjs.entry.js.map