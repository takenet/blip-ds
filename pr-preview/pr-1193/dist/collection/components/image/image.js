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
    componentWillLoad() {
        this.loadImage();
    }
    componentDidLoad() {
        var _a;
        this.element.style.width = this.width ? this.width : 'auto';
        this.element.style.height = ((_a = this.height) === null || _a === void 0 ? void 0 : _a.length) > 0 ? this.height : 'auto';
    }
    async loadImage() {
        this.imageLoaded = false;
        this.loadError = false;
        this.currentSrc = this.src || undefined;
        this.imageHasLoading = !!this.currentSrc;
    }
    render() {
        var _a;
        return (h(Host, { key: '3de2dfe02e30c64a7ca439bcf31e442e524c6a31', class: { empty_img: !this.imageLoaded } }, this.currentSrc && !this.loadError && (h("img", { key: 'eeecb765739c9756bd5da797d20e3dcde3e555cd', src: this.currentSrc, alt: this.alt, hidden: !this.imageLoaded, onLoad: () => {
                this.imageLoaded = true;
                this.imageHasLoading = false;
            }, onError: () => {
                this.loadError = true;
                this.imageHasLoading = false;
            }, style: {
                objectFit: this.objectFit,
                width: '100%',
                height: '100%',
                filter: `brightness(${(_a = this.brightness) !== null && _a !== void 0 ? _a : 1})`,
            }, "data-test": this.dataTest, draggable: false })), !this.imageLoaded && (this.imageHasLoading ? (h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest })))));
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
            "imageHasLoading": {},
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
    static get watchers() {
        return [{
                "propName": "src",
                "methodName": "loadImage"
            }];
    }
}
//# sourceMappingURL=image.js.map
