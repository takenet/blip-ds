import { h, Host } from "@stencil/core";
export class Image {
    constructor() {
        this.imageHasLoading = false;
        /**
         * Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'.
         */
        this.objectFit = 'cover';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Indicates whether the main image has been successfully loaded.
         */
        this.imageLoaded = false;
        /**
         * Indicates whether there was an error during image loading.
         */
        this.loadError = false;
    }
    componentDidLoad() {
        this.element.style.width = this.width ? this.width : 'auto';
        this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
    }
    async loadImage() {
        if (this.src) {
            this.imageHasLoading = true;
            try {
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
        return (h(Host, { key: '707a66cceac96d4b398d8f6365c591c3341a6b44', class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? (h("img", { src: this.currentSrc, alt: this.alt, style: {
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
                "attribute": "src",
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
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "alt": {
                "type": "string",
                "attribute": "alt",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "width": {
                "type": "string",
                "attribute": "width",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "height": {
                "type": "string",
                "attribute": "height",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "objectFit": {
                "type": "string",
                "attribute": "object-fit",
                "mutable": false,
                "complexType": {
                    "original": "ObjectFitValue",
                    "resolved": "\"contain\" | \"cover\" | \"fill\" | \"none\" | \"scale-down\"",
                    "references": {
                        "ObjectFitValue": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/image/image.tsx",
                            "id": "src/components/image/image.tsx::ObjectFitValue"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'cover'"
            },
            "brightness": {
                "type": "number",
                "attribute": "brightness",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                "getter": false,
                "setter": false,
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
                            "location": "global",
                            "id": "global::Promise"
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
//# sourceMappingURL=image.js.map
