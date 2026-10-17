'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";

const TabPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.group = undefined;
    this.isActive = false;
  }
  handleTabChange(event) {
    this.isActive = event.detail == this.group;
  }
  render() {
    return (index.h(index.Host, { class: {
        'bds-tab-panel': true,
        ['bds-tab-panel--selected']: this.isActive,
      } }, index.h("slot", null)));
  }
};
TabPanel.style = tabPanelCss;

exports.bds_tab_panel = TabPanel;
