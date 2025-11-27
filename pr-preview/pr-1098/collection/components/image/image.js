import { h, Host } from '@stencil/core';
export class Image {
  constructor() {
    this.imageHasLoading = false;
    this.src = undefined;
    this.alt = undefined;
    this.width = undefined;
    this.height = undefined;
    this.objectFit = 'cover';
    this.brightness = undefined;
    this.dataTest = null;
    this.imageLoaded = false;
    this.loadError = false;
    this.currentSrc = undefined;
  }
  componentDidLoad() {
    this.element.style.width = this.width ? this.width : 'auto';
    this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
  }
  async loadImage() {
    if (this.src) {
      this.imageHasLoading = true;
      try {
        // Check if src is a data URL
        if (this.src.startsWith('data:')) {
          // Data URLs don't need to be fetched - use directly
          // Use Promise.resolve to keep it async and avoid state changes during render
          await Promise.resolve();
          this.currentSrc = this.src;
          this.imageLoaded = true;
          this.imageHasLoading = false;
        }
        else {
          // Regular URLs need to be fetched
          const response = await fetch(this.src);
          if (response.ok) {
            const blob = await response.blob();
            const objectURL = URL.createObjectURL(blob);
            this.currentSrc = objectURL;
            this.imageLoaded = true;
            this.imageHasLoading = false;
          }
          else {
            this.loadError = true;
          }
        }
      }
      catch {
        this.imageHasLoading = false;
        this.loadError = true;
      }
    }
  }
  render() {
    if (!this.imageLoaded && !this.loadError) {
      // Se a imagem ainda não foi carregada, chame o método loadImage
      this.loadImage();
    }
    return (h(Host, { class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? (h("img", { src: this.currentSrc, alt: this.alt, style: {
        objectFit: this.objectFit,
        width: '100%',
        height: '100%',
        filter: `brightness(${this.brightness})`,
      }, "data-test": this.dataTest, draggable: false })) : this.imageHasLoading ? (h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest }))));
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
      "brightness": {
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
          "text": "Brightness of the image."
        },
        "attribute": "brightness",
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
  static get elementRef() { return "element"; }
}
