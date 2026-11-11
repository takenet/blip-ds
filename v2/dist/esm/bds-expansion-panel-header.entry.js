import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0c5ca8ca3d841e17af2e38617d59ab088ae6d130' }, h("div", { key: '2f1bd7fb5529e7eaa4b72fb8729cf68d84761fd7', class: "header" }, h("slot", { key: 'ca9b3ab48b64a69a936b91dbbde74115a9bc554d' })), h("bds-typo", { key: '59f4542dc242238e92276120ab6109e2be6c019e', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
