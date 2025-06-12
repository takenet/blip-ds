import { Host, h } from "@stencil/core";
export class NavTreeItem {
    constructor() {
        this.navTreeParent = null;
        this.navTreeChild = null;
        this.itensElement = null;
        /**
         * Focus Selected. Used to add title in header accordion.
         */
        this.collapse = 'single';
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * Active. Used to define when the item is highlighted.
         */
        this.isOpen = false;
        /**
         * Loading state. Indicates if the component is in a loading state.
         */
        this.loading = false;
        /**
         * Disable state. Indicates if the component is disabled.
         */
        this.disable = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handler = () => {
            if (!this.loading && !this.disable) {
                if (this.navTreeParent.collapse == 'single') {
                    for (let i = 0; i < this.itensElement.length; i++) {
                        if (this.itensElement[i] != this.element)
                            this.itensElement[i].isOpen = false;
                    }
                }
                this.toggle();
            }
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged(value) {
        this.bdsToogleChange.emit({ value: value, element: this.element });
        // if (this.navTreeChild) this.navTreeChild.isOpen = value;
    }
    componentWillLoad() {
        this.navTreeParent =
            (this.element.parentElement.tagName == 'BDS-NAV-TREE' && this.element.parentElement) ||
                ('BDS-NAV-TREE-ITEM' && this.element.parentElement);
        this.navTreeChild = this.element.querySelector('bds-nav-tree-item');
    }
    componentWillRender() {
        this.itensElement = this.navTreeParent.getElementsByTagName('bds-nav-tree-item');
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.handler();
        }
    }
    render() {
        return (h(Host, { key: '132f1aef904238c9b1f06c6e3aca642352e624dc' }, h("div", { key: '4bb75979a31792d0f0dd0410fdfff246138dc0f6', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: '65d30eaa7a06897792095e7ae07fb581a5c344df', class: {
                nav_tree_item: true,
                nav_tree_item_active: this.isOpen,
                nav_tree_item_button: !this.navTreeChild,
                nav_tree_item_button_active: !this.navTreeChild && this.isOpen,
                [`nav_tree_item--loading`]: this.loading,
                [`nav_tree_item--disable`]: this.disable,
            }, onClick: () => this.handler(), "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: 'dde25a462dd853123f9887fb0c5b894a4c78d195', class: "nav_tree_item_content" }, this.text && (h("bds-typo", { key: '8b005de6c39ed9307eb37aef926d153ebfb8131e', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: '8d3ffaa925e509aad1b34d120c3eab83e27b8c05', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: '0ade154ce111fbb6cf8bae7963ab39c6577f1e58', class: "nav_tree_item_slot" }, h("slot", { key: '77b7c0dd3867fa0625ade6b94886d8635cb9e9d0', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: 'ff516a57eca474bfc55474165bddab1a982146f4', class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            }, name: "arrow-down" })))), this.navTreeChild && (h("div", { key: 'fb148be91f18db7517aaeb4058ea2fd74f79f3fe', class: {
                accordion: true,
                accordion_open: this.isOpen,
            } }, h("div", { key: '5eb2a7ad53d70954a8a0df66fd400c1f814339bb', class: "container" }, h("slot", { key: 'dd1b62b23e6bb68f8844294eb21f5ae23f594cbb' }))))));
    }
    static get is() { return "bds-nav-tree-item"; }
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
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/nav-tree/nav-tree-item.tsx",
                            "id": "src/components/nav-tree/nav-tree-item.tsx::collapses"
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
                    "text": "Active. Used to define when the item is highlighted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
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
    static get events() {
        return [{
                "method": "bdsToogleChange",
                "name": "bdsToogleChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "When de activation of component change, the event are dispache."
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
//# sourceMappingURL=nav-tree-item.js.map
