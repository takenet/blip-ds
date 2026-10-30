import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '9254a59a12ca2b427805349aa402a9973c225179' }, h("div", { key: 'be4bdfa2ac2f05a3407c1ddd439c121a4a5f626e', class: "header" }, h("slot", { key: 'c7e1fefcc9336f874d5d9bab866df0c6a219b4c2' })), h("bds-typo", { key: 'cebc15574009fe1689eda2601ba30f6e47d0b8e4', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
