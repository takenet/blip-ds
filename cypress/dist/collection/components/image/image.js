import { h } from '@stencil/core';
export class Image {
  constructor() {
    this.src = undefined;
    this.alt = undefined;
    this.width = undefined;
    this.height = undefined;
    this.objectFit = 'cover';
    this.dataTest = null;
    this.imageLoaded = false;
    this.loadError = false;
    this.currentSrc = undefined;
  }
  async loadImage() {
    if (this.src) {
      try {
        const response = await fetch(this.src);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          this.currentSrc = objectURL;
          this.imageLoaded = true;
        }
        else {
          this.loadError = true;
        }
      }
      catch (_a) {
        this.loadError = true;
      }
    }
  }
  render() {
    if (!this.imageLoaded && !this.loadError) {
      // Se a imagem ainda não foi carregada, chame o método loadImage
      this.loadImage();
    }
    if (this.imageLoaded) {
      return (h("img", { src: this.currentSrc, alt: this.alt, style: { objectFit: this.objectFit, width: this.width, height: this.height }, "data-test": this.dataTest, draggable: false }));
    }
    else if (!this.src) {
      // Se imageLoaded for falso e src estiver vazia, renderize a ilustração "image-not-found"
      return (h("div", { style: { width: this.width || this.height ? this.width : '100%' } }, h("bds-illustration", { type: "empty-states", name: "image-not-found", alt: this.alt, "data-test": this.dataTest })));
    }
    else {
      // Se imageLoaded for falso e src não estiver vazia, renderize a ilustração "broken-image"
      return (h("div", { style: { width: this.width || this.height ? this.width : '100%' } }, h("bds-illustration", { type: "empty-states", name: "broken-image", alt: this.alt, "data-test": this.dataTest })));
    }
  }
  static get is() { return "bds-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["image.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["image.css"]
    };
  }
  static get properties() {
    return {
      "src": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "URL of the main image."
        },
        "attribute": "src",
        "reflect": true
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
      "width": {
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
          "text": "Width of the image."
        },
        "attribute": "width",
        "reflect": false
      },
      "height": {
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
          "text": "Height of the image."
        },
        "attribute": "height",
        "reflect": false
      },
      "objectFit": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ObjectFitValue",
          "resolved": "\"contain\" | \"cover\" | \"fill\" | \"none\" | \"scale-down\"",
          "references": {
            "ObjectFitValue": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'."
        },
        "attribute": "object-fit",
        "reflect": false,
        "defaultValue": "'cover'"
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
      "imageLoaded": {},
      "loadError": {},
      "currentSrc": {}
    };
  }
  static get methods() {
    return {
      "loadImage": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
}
