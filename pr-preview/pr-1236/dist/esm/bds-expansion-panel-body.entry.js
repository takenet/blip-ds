import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const expansionPanelBodyCss = () => `:host{display:block}.expansion-content{display:-ms-flexbox;display:flex;padding-left:22px}.expansion-content .with-line{border-left:2px solid #e3e3e3;padding-left:9px;padding-top:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-direction:column;flex-direction:column;width:100%}.expansion-content .circle{width:8px;height:8px;border-radius:50%;background-color:#e3e3e3;position:relative;right:14px}.expansion-content .text{right:28px;width:37px;height:30px;position:relative;background:#d4d4d4;-ms-flex-pack:center;justify-content:center;border-radius:8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#202c44;top:10px}`;

const ExpansionPanelBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: '0e5730edad17604d60924113cab8e7e8ba994cba' }, h("div", { key: 'a94b30a96cb07e4de47b2c23da7d1788caf1105e', class: "expansion-content", hidden: this.open }, h("div", { key: 'b24969b8eeeb75ce09e37677e1cb383a846955a3', class: "with-line" }, h("slot", { key: 'ebd3721879f1d15a4221fe88491fd00e46a64b2e' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
    }
};
ExpansionPanelBody.style = expansionPanelBodyCss();

export { ExpansionPanelBody as bds_expansion_panel_body };
