import { Host, h } from "@stencil/core";
export class NavTree {
    constructor() {
        this.itemsGroup = null;
        this.isOpenAftAnimation = false;
        this.navTreeChild = null;
        this.numberElement = null;
        /**
         * Focus Selected. Used to add title in header accordion.
         */
        this.collapse = 'single';
        /**
         * A prop for make the nav open.
         */
        this.isOpen = false;
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Loading state. Indicates if the component is in a loading state.
         */
        this.loading = false;
        /**
         * Disable state. Indicates if the component is disabled.
         */
        this.disable = false;
        this.handler = () => {
            if (!this.loading && !this.disable) {
                this.isOpen = !this.isOpen;
            }
        };
    }
    async toggle() {
        if (!this.disable) {
            this.isOpen = !this.isOpen;
        }
    }
    async reciveNumber(number) {
        this.numberElement = number;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    isOpenChanged(value) {
        var _a;
        this.bdsToogleChange.emit({ value: value, element: this.element });
        if (value) {
            if (this.itemsGroup.collapse == 'single') {
                (_a = this.itemsGroup) === null || _a === void 0 ? void 0 : _a.closeAll(this.numberElement);
            }
        }
    }
    componentWillLoad() {
        this.itemsGroup =
            this.element.parentElement.tagName == 'BDS-NAV-TREE-GROUP' &&
                this.element.parentElement;
        this.navTreeChild = this.element.querySelector('bds-nav-tree-item') === null ? false : true;
    }
    handleKeyDown(event) {
        if (event.key == 'Enter' && !this.disable) {
            this.isOpen = !this.isOpen;
        }
    }
    render() {
        return (h(Host, { key: 'c3b83bc79738411d309fc031b8967cd559860685' }, h("div", { key: '1d5c99d78339a4a685d3bc3fe5d7ab1d6ea4b265', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: 'a3c3232c515afc6ee51f253edc756421e464ae9d', class: {
                [`nav_main--disable`]: this.disable,
            } }, h("div", { key: '9b8b8025503db5afd800aa6d0764cd3bb28e45f7', onClick: this.handler, class: {
                nav_main: true,
                nav_main_active: this.isOpen,
                [`nav_main--loading`]: this.loading,
                [`nav_main--disable`]: this.disable,
            }, "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: 'f74e3435801872bdb295c4dae49cc67570ff1ec6', class: "nav_main_text" }, this.text && (h("bds-typo", { key: '59acc4f6eeac7718d5ed43e218f53ef5e6327716', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'b82578a514065a57a0d21accacb02287b1001fed', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: '463a467bb7358e6e4fb5dcb3592d9d23531d8d0b', class: "nav_main_content" }, h("slot", { key: 'c62fc1631249715a74655f285bbcfcc90eceeeab', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: 'badd66942ffc608d2ff3fcda03e68a9c5f5c07ad', name: "arrow-down", class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            } }))))), h("div", { key: '94d3f177c5f38acf3c20deffa720c8e102514ace', class: {
                accordion: true,
                accordion_open: this.isOpen && this.navTreeChild,
            } }, h("div", { key: '436c06f2c9520de2b1c2c392f5ec6e4b50aa3431', class: { ['container']: true, [`container--disable`]: this.disable } }, h("slot", { key: '656f6ab4bf453b7cff42a5bed47275852a7c560c' })))));
    }
    static get is() { return "bds-nav-tree"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nav-tree.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nav-tree.css"]
        };
    }
    static get properties() {
        return {
            "collapse": {
                "type": "string",
                "attribute": "collapse",
                "mutable": false,
                "complexType": {
                    "original": "collapses",
                    "resolved": "\"multiple\" | \"single\"",
                    "references": {
                        "collapses": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/nav-tree/nav-tree.tsx",
                            "id": "src/components/nav-tree/nav-tree.tsx::collapses"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Focus Selected. Used to add title in header accordion."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'single'"
            },
            "isOpen": {
                "type": "boolean",
                "attribute": "is-open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A prop for make the nav open."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Icon. Used to add icon in list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "text": {
                "type": "string",
                "attribute": "text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text. Used to insert a text in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "secondaryText": {
                "type": "string",
                "attribute": "secondary-text",
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
                    "text": "SecondaryText. Used to insert a secondaryText in the display item."
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
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Loading state. Indicates if the component is in a loading state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disable": {
                "type": "boolean",
                "attribute": "disable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disable state. Indicates if the component is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpenAftAnimation": {},
            "navTreeChild": {},
            "numberElement": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsToogleChange",
                "name": "bdsToogleChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "When de open or close of component change, the event are dispache."
                },
                "complexType": {
                    "original": "{ value?: boolean; element: HTMLElement }",
                    "resolved": "{ value?: boolean; element: HTMLElement; }",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                }
            }];
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
            "reciveNumber": {
                "complexType": {
                    "signature": "(number: any) => Promise<void>",
                    "parameters": [{
                            "name": "number",
                            "type": "any",
                            "docs": ""
                        }],
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
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }];
    }
}
//# sourceMappingURL=nav-tree.js.map
