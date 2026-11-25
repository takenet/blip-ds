'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelBodyCss = () => `:host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}`;

const ExpansionPanelBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (index.h(index.Host, { key: '8e11eb906427f1a3fd129229a866d7ea75cf2de0' }, index.h("div", { key: '7bf210751a28dfc0bbe13cf9afd630c5bf5263e7', class: "expansion-content", hidden: this.open }, index.h("div", { key: 'd948d3873cce9f175cc262ed2ae1cd151c8717df', class: "with-line" }, index.h("slot", { key: '459643c8806070c9c37754ed197a5e45a1bd6001' }), this.text ? (index.h("div", { class: "text" }, index.h("p", null, this.text))) : (index.h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss();

exports.bds_expansion_panel_body = ExpansionPanelBody;
