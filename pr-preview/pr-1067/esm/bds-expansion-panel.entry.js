import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const expansionPanelCss = "*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}";

const ExpansionPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ExpansionPanel.style = expansionPanelCss;

export { ExpansionPanel as bds_expansion_panel };
