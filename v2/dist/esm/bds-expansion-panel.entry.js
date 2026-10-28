import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '84b85e529d1855022cdf617706bc10824f4b6f1b' }, h("slot", { key: '40ec2f213773b53b9d7791c51b3b105f214bd06a' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

export { ExpansionPanel as bds_expansion_panel };
