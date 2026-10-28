import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'cebb9d871633be57e6884b34195c7b0bbcd42ed0' }, h("div", { key: 'd9b12860fa2f5a8c76c409677eb98ae19191e03d', class: "header" }, h("slot", { key: '310534ef234a6c98424511766da9b641ebd3375a' })), h("bds-typo", { key: '213a83183d45375dd445ad99d691326af83370d1', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
