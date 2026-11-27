import { Host, h } from "@stencil/core";
import { isTag } from "../../utils/tag-name";
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
            isTag(this.element.parentElement, 'bds-nav-tree-group') &&
                this.element.parentElement;
        this.navTreeChild = this.element.querySelector('bds-nav-tree-item') === null ? false : true;
    }
    handleKeyDown(event) {
        if (event.key == 'Enter' && !this.disable) {
            this.isOpen = !this.isOpen;
        }
    }
    render() {
        return (h(Host, { key: '8111e3ced4505d5d59ce9c8b742eecad9fcca4d1' }, h("div", { key: '0245106f44b93f43102dd3c9d532abea5702d660', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: '614bf406745e58584f89ddb501d2ce80eb6a8b9c', class: {
                [`nav_main--disable`]: this.disable,
            } }, h("div", { key: '707d21c2a8df053f72172c341a6e64646e5a5ec1', onClick: this.handler, class: {
                nav_main: true,
                nav_main_active: this.isOpen,
                [`nav_main--loading`]: this.loading,
                [`nav_main--disable`]: this.disable,
            }, "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: '67d6dc0334f19a35920fb130c226b128d7a9feff', class: "nav_main_text" }, this.text && (h("bds-typo", { key: 'df38b5a25b06f26ac37e39ecd310f4a770674bba', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'd9e69caaabd494474deadc44e4a1cc73e121a091', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: 'e4b3ba17d9de7f03c8b0dab45b77eb8b02e3335f', class: "nav_main_content" }, h("slot", { key: '9274ff6b35cf4431d0b442741058024c42395e8f', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: 'b3b0e5bb41186e6e4c68a6ab1e58273039dc5ef9', name: "arrow-down", class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            } }))))), h("div", { key: 'c89a0aa03f72aeedd6f08bee6687f2ffc6255dd4', class: {
                accordion: true,
                accordion_open: this.isOpen && this.navTreeChild,
            } }, h("div", { key: '148d069efcbcd20eb72532fdf5bb5c7af229e571', class: { ['container']: true, [`container--disable`]: this.disable } }, h("slot", { key: 'bf8d9067b732770d36feac1b215b15b76dfb82d3' })))));
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
                "attribute": "collapse",
                "defaultValue": "'single'"
            },
            "isOpen": {
                "type": "boolean",
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
                "attribute": "is-open",
                "defaultValue": "false"
            },
            "icon": {
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
                    "text": "Icon. Used to add icon in list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "text": {
                "type": "string",
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
                "reflect": false,
                "attribute": "text"
            },
            "secondaryText": {
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
                    "text": "SecondaryText. Used to insert a secondaryText in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "secondary-text",
                "defaultValue": "null"
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
            },
            "loading": {
                "type": "boolean",
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
                "attribute": "loading",
                "defaultValue": "false"
            },
            "disable": {
                "type": "boolean",
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
                "attribute": "disable",
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
