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
        return (h(Host, { key: 'ab977e7cd30a5099a6f03cb9db535613fef463bd', class: { empty_img: !this.imageLoaded } }, this.currentSrc && !this.loadError && (h("img", { key: '7f4d85726077ecb33e153fd96825dd04d59449fc', src: this.currentSrc, alt: this.alt, hidden: !this.imageLoaded, onLoad: () => {
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
                "reflect": true,
                "attribute": "src"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alt"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height"
            },
            "objectFit": {
                "type": "string",
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
                "attribute": "object-fit",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "brightness"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
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
