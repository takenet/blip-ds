import { h, Host } from '@stencil/core';
import packageJson from '../../../package.json';
export class BdsIllustration {
  constructor() {
    /**Function to map the svg and call the "formatSvg" function */
    this.setIllustrationContent = () => {
      const tokensVersion = packageJson.dependencies['blip-tokens'].replace('^', '');
      const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens@${tokensVersion}/build/json/illustrations/${this.type}/${this.name}.json`;
      fetch(apiUrl).then((response) => response.json().then((data) => {
        this.IllustrationContent = data[`asset-${this.type}-${this.name}-svg`];
      }));
    };
    this.IllustrationContent = undefined;
    this.type = 'default';
    this.name = undefined;
    this.alt = undefined;
    this.dataTest = null;
  }
  componentWillLoad() {
    this.setIllustrationContent();
  }
  render() {
    return (h(Host, { role: "img", class: {
        'bds-illustration': true,
      } }, this.IllustrationContent ? (h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
  }
  static get is() { return "bds-illustration"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["illustration.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["illustration.css"]
    };
  }
  static get assetsDirs() { return ["svg"]; }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IllustrationType",
          "resolved": "\"blip-outline\" | \"blip-solid\" | \"brand\" | \"default\" | \"empty-states\" | \"logo-integration\" | \"screens\" | \"segmented\" | \"smartphone\" | \"spots\"",
          "references": {
            "IllustrationType": {
              "location": "import",
              "path": "./illustration-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the type to use. Can be: 'default'."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the name of illustration. Verify the names on illustration tokens."
        },
        "attribute": "name",
        "reflect": false
      },
      "alt": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Alternative text for the image."
        },
        "attribute": "alt",
        "reflect": false
      },
      "dataTest": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "IllustrationContent": {}
    };
  }
}
