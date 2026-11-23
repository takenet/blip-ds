import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'a4b0602a9b41f5297fbe1c4b66a51069bbc3400b' }, h("div", { key: 'b395a39d5af70579d5ed55fac16b948b305734df', class: "header" }, h("slot", { key: '98b78301877d2034582fe32d8ed488c60d09e92c' })), h("bds-typo", { key: 'd7869851d3ce33ef74820cfc02ac888ee7c96f8b', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
