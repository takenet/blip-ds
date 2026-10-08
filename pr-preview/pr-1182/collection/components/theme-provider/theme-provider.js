import { Host, h } from '@stencil/core';
export class ThemeProvider {
  constructor() {
    this.theme = 'light';
  }
  render() {
    return (h(Host, { class: { theme: true, [`theme--${this.theme}`]: true } }, h("slot", null)));
  }
  static get is() { return "bds-theme-provider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["theme-provider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["theme-provider.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Themes",
          "resolved": "\"dark\" | \"high-contrast\" | \"light\"",
          "references": {
            "Themes": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set what theme will be aplyed inside the component.\n'light', 'dark';"
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "'light'"
      }
    };
  }
}
