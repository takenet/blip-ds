'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelBodyCss = () => `:host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}`;

const ExpansionPanelBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (index.h(index.Host, { key: '1cb4c7980083310e7fa51d55008f62f323e5d577' }, index.h("div", { key: 'daff7a68c8fe1b55d0132bb9346aba8a6490fe8c', class: "expansion-content", hidden: this.open }, index.h("div", { key: 'b543b9dd9a9c25841fba3edf83205501b37a0654', class: "with-line" }, index.h("slot", { key: 'b494805221a3180af14ba60bb1dd7920ba564c6a' }), this.text ? (index.h("div", { class: "text" }, index.h("p", null, this.text))) : (index.h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss();

exports.bds_expansion_panel_body = ExpansionPanelBody;
