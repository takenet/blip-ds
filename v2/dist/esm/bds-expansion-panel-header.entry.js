import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'efca585d835f590de2f160bdad92aff8c3adaa83' }, h("div", { key: '6d0d05a892ab0e7a60189d78ff176a81526e2e30', class: "header" }, h("slot", { key: '820264364049a67e1e2d7900baab3789a97aac40' })), h("bds-typo", { key: '5a3d3375f141615c41ea71e02e5dfe4560b38d5c', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
