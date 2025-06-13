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
        this.bdsToogleChange.emit({ value: value, element: this.element });
        if (value) {
            if (this.itemsGroup.collapse == 'single') {
                this.itemsGroup?.closeAll(this.numberElement);
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
        return (h(Host, { key: '131f28785312becf0e5e693935f8cbb68e8ad9b2' }, h("div", { key: '71f1ef136f29462d6daf43c009673a259c8b0cec', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: '224e1f9dbb02f9c89467417f8f6a9d7fe39fc8dc', class: {
                [`nav_main--disable`]: this.disable,
            } }, h("div", { key: '3f0fb5dac9d885748f443186b11008e73b221518', onClick: this.handler, class: {
                nav_main: true,
                nav_main_active: this.isOpen,
                [`nav_main--loading`]: this.loading,
                [`nav_main--disable`]: this.disable,
            }, "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: '92ee11d1514410972eec66d2dfb8b63a5897204e', class: "nav_main_text" }, this.text && (h("bds-typo", { key: '75a701317bed9329cbef47a6497a6a65b69754f0', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'e702fefc0de3d917ff3497ac244a83d84f8d92cd', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: '926452b52200ce7eb3f7433fb13f0b66538cfe0b', class: "nav_main_content" }, h("slot", { key: 'c3ef5a3d627257ce887159640645393f4142fb81', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: 'e14c12c16d6297bd9deb11e9111a3e41779699fe', name: "arrow-down", class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            } }))))), h("div", { key: 'd007ce664cdf5235cfcd0ea39528685fd29824a1', class: {
                accordion: true,
                accordion_open: this.isOpen && this.navTreeChild,
            } }, h("div", { key: 'c348e18155fe5c5f3af12578a92c24e807731aa0', class: { ['container']: true, [`container--disable`]: this.disable } }, h("slot", { key: '22fb2d8ce369426a90631bb87e13e7706db3ca08' })))));
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
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
