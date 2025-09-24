import { h } from "@stencil/core";
export class AccordionHeader {
    constructor() {
        this.accordionElement = null;
        this.isOpen = false;
        this.btToggleIsfocus = false;
        this.numberElement = null;
        /**
         * Accordion Title. Used to add title in header accordion.
         */
        this.accordionTitle = null;
        /**
         * Icon. Used to add icon in header accordion.
         */
        this.icon = null;
        /**
         * Avatar Name. Used to add avatar in header accordion.
         */
        this.avatarName = null;
        /**
         * Avatar Thumb. Used to add avatar in header accordion.
         */
        this.avatarThumb = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.toggleHeader = () => {
            var _a, _b;
            if (this.isOpen) {
                (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
            }
            else {
                (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
            }
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    componentWillRender() {
        this.accordionElement = this.element.parentElement;
    }
    handleKeyDown(event) {
        var _a, _b;
        if (event.key == 'Enter') {
            if (this.isOpen) {
                (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
            }
            else {
                (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
            }
        }
    }
    render() {
        return (h("div", { key: '187061591a0438fad6432f12708fb0b1d6ae2f2a', onClick: this.toggleHeader, class: { accordion_header: true }, "data-test": this.dataTest }, this.avatarName || this.avatarThumb ? (h("bds-avatar", { name: this.avatarName, thumbnail: this.avatarThumb, size: "extra-small" })) : (this.icon && h("bds-icon", { size: "x-large", name: this.icon, color: "inherit" })), this.accordionTitle && (h("bds-typo", { key: '7bdadadb86dc1cc7e5aa85a28e9e6b70b39eed24', bold: "bold", variant: "fs-16", "line-height": "double" }, this.accordionTitle)), h("slot", { key: '94a857b65dbdc8ebe1621e4436d8c0414444fd95' }), h("bds-icon", { key: '9733311a10ebe3849f53cb13614d52dc56b2b7ab', class: {
                accButton: true,
                accButton__isopen: this.isOpen,
                accButton__isfocus: this.btToggleIsfocus,
            }, size: "x-large", name: "arrow-down", color: "inherit", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) })));
    }
    static get is() { return "bds-accordion-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordion.css"]
        };
    }
    static get properties() {
        return {
            "accordionTitle": {
                "type": "string",
                "attribute": "accordion-title",
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
                    "text": "Accordion Title. Used to add title in header accordion."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "Icon. Used to add icon in header accordion."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarName": {
                "type": "string",
                "attribute": "avatar-name",
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
                    "text": "Avatar Name. Used to add avatar in header accordion."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarThumb": {
                "type": "string",
                "attribute": "avatar-thumb",
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
                    "text": "Avatar Thumb. Used to add avatar in header accordion."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
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
            "isOpen": {},
            "btToggleIsfocus": {},
            "numberElement": {}
        };
    }
    static get methods() {
        return {
            "toggle": {
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
            },
            "open": {
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
            },
            "close": {
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
//# sourceMappingURL=accordion-header.js.map
