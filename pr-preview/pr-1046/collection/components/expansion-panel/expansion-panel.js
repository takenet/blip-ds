import { Host, h } from '@stencil/core';
export class ExpansionPanel {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bds-expansion-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["expansion-panel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["expansion-panel.css"]
    };
  }
}
