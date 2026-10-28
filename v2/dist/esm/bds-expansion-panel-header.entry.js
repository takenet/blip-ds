import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '6fd1fd651bf6355d45bd787c4f26b2ded4f19c32' }, h("div", { key: 'afc5ee22d7f954fce1a0e4763931a175c3a905cf', class: "header" }, h("slot", { key: 'eec81d1f7e6c56f51701634359fd339f3c07d22a' })), h("bds-typo", { key: 'b999f7fa48ef6d30b6465139e23a014c11264b94', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
