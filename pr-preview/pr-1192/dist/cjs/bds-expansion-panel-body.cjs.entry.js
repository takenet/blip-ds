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
        return (index.h(index.Host, { key: '09bbd38d3a4392f7825cbe7c86291d5d267bafbe' }, index.h("div", { key: '84ccce7f3c0290b91f214efa13d57a3426a642b2', class: "expansion-content", hidden: this.open }, index.h("div", { key: 'a135f926c679e1a8555a1b87396f807663ac1fcb', class: "with-line" }, index.h("slot", { key: 'bb74332b857860bd42f4b872b319e7db82be798b' }), this.text ? (index.h("div", { class: "text" }, index.h("p", null, this.text))) : (index.h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss;

exports.bds_expansion_panel_body = ExpansionPanelBody;
//# sourceMappingURL=bds-expansion-panel-body.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-body.cjs.entry.js.map