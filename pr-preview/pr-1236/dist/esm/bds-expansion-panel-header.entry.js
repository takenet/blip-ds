import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e7cbbcbab0da92a11c9d1f58c35db39c1275c37a' }, h("div", { key: 'dd92ea14738fb533ac407343ef801e1f0a6ff81b', class: "header" }, h("slot", { key: '6b83b8c1ab7de8d71df1333ec2fda93a47129cf2' })), h("bds-typo", { key: '9bba2719a418ceeaadbcccba5870be44ca3aacf5', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

export { ExpansionPanelHeader as bds_expansion_panel_header };
