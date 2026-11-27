'use strict';

var index = require('./index-JW9Yq-qX.js');

const expansionPanelBodyCss = () => `:host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}`;

const ExpansionPanelBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (index.h(index.Host, { key: 'b3c42637a5081daa576792834b8611cac9545269' }, index.h("div", { key: 'e98926f04cd33af32847e98f90caf6ff308cdd7b', class: "expansion-content", hidden: this.open }, index.h("div", { key: 'e88d67a6ae5054e5bc1d3e997def9e4f4b44d3cd', class: "with-line" }, index.h("slot", { key: 'a1ddb03b2394adce14c9c5f600c9566d06e90234' }), this.text ? (index.h("div", { class: "text" }, index.h("p", null, this.text))) : (index.h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss();

exports.bds_expansion_panel_body = ExpansionPanelBody;
