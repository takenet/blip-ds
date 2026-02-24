import { h, Host } from '@stencil/core';
export class BdsCarouselItem {
  constructor() {
    this.theme = 'light';
    this.bgImage = undefined;
    this.bgImageBrightness = 1;
    this.bgColor = undefined;
  }
  render() {
    return (h(Host, { class: "carrosel-item" }, h("bds-theme-provider", { theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", null))));
  }
  static get is() { return "bds-carousel-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["carousel-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["carousel-item.css"]
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
              "location": "import",
              "path": "../theme-provider/theme-provider"
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
      },
      "bgImage": {
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
          "text": ""
        },
        "attribute": "bg-image",
        "reflect": false
      },
      "bgImageBrightness": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "bg-image-brightness",
        "reflect": false,
        "defaultValue": "1"
      },
      "bgColor": {
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
          "text": ""
        },
        "attribute": "bg-color",
        "reflect": false
      }
    };
  }
}
