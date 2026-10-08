import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";

const TabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.group = undefined;
    this.isActive = false;
  }
  handleTabChange(event) {
    this.isActive = event.detail == this.group;
  }
  render() {
    return (h(Host, { class: {
        'bds-tab-panel': true,
        ['bds-tab-panel--selected']: this.isActive,
      } }, h("slot", null)));
  }
};
TabPanel.style = tabPanelCss;

export { TabPanel as bds_tab_panel };
