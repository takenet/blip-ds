import { h } from "@stencil/core";
export class Sidebar {
    constructor() {
        this.InnerSpacing = 0;
        /**;
         * isOpen. Used to open sidebar.
         */
        this.isOpen = this.type === 'fixed' ? true : false;
        /**
         * sidebar position. Used to position the sidebar. Either on the left or on the right.
         */
        this.sidebarPosition = 'left';
        /**
         * sidebar type. Used to define how open.
         */
        this.type = 'over';
        /**
         * If true, a lateral margin will apear in the content.
         */
        this.margin = true;
        /**
         * Width, number to define sidebar width.
         */
        this.width = 360;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to button close.
         */
        this.dtOutzone = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Width, number to define sidebar width.
         */
        this.background = 'surface-2';
        this.listiner = (event) => {
            if (event.key == 'Escape' && this.type !== 'fixed') {
                this.isOpen = false;
            }
        };
        this.onClickCloseButtom = () => {
            this.isOpen = false;
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged(newValue) {
        this.bdsToggle.emit({ value: newValue });
        if (newValue === true) {
            document.addEventListener('keyup', this.listiner, false);
        }
        else {
            document.removeEventListener('keyup', this.listiner, false);
        }
    }
    componentWillLoad() {
        this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
        this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
    }
    render() {
        return (h("div", { key: '6a28b23936d194ff0e9b85a67a9ed6929d8a6eae', class: {
                sidebar_dialog: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
            } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { key: 'fbe30dcc8f4b4edf4974d3ca5e9f2dd7b3af19c5', class: {
                sidebar: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
                [`position_${this.sidebarPosition}`]: true,
                [`background_${this.background}`]: true,
            }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { key: '4986a151f22653b354c7067d0d8c8fb47f4d1075', class: { header: true } }, h("div", { key: 'e6ca184aafa3b030c7092ad93a36a959ad42f4c8', class: { content: true } }, h("slot", { key: 'df771cc232129a7920cdd02236d62eb16b96b9b7', name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
                closeButton: true,
            }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { key: '4af832ac6385607998d02bd2b6bc0c9adb084aee', class: { body: true } }, h("div", { key: 'c50c703d56a9c368093e977a52062c94a7c4bf2c', class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { key: 'c1bd9e729bd4d857d0da69e300301b1b3929c321', name: "body" }))), this.hasFooterSlot && (h("div", { key: '4123cbb084466f2eef25423b47acef6f09ce3c40', class: { footer: true } }, h("div", { key: '2d10d1921041a202770eb7e9cd126a7cb446f019', class: { content: true } }, h("slot", { key: 'c2fb737665f52abc3a1c0523014c9d1ead74a320', name: "footer" })))))));
    }
    static get is() { return "bds-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["sidebar.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ";\nisOpen. Used to open sidebar."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "this.type === 'fixed' ? true : false"
            },
            "sidebarPosition": {
                "type": "string",
                "attribute": "sidebar-position",
                "mutable": false,
                "complexType": {
                    "original": "sidebarPosition",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "sidebarPosition": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/sidebar/sidebar.tsx",
                            "id": "src/components/sidebar/sidebar.tsx::sidebarPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sidebar position. Used to position the sidebar. Either on the left or on the right."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "sidebarType",
                    "resolved": "\"fixed\" | \"over\"",
                    "references": {
                        "sidebarType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/sidebar/sidebar.tsx",
                            "id": "src/components/sidebar/sidebar.tsx::sidebarType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sidebar type. Used to define how open."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'over'"
            },
            "margin": {
                "type": "boolean",
                "attribute": "margin",
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
                    "text": "If true, a lateral margin will apear in the content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "width": {
                "type": "number",
                "attribute": "width",
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
                    "text": "Width, number to define sidebar width."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "360"
            },
            "dtOutzone": {
                "type": "string",
                "attribute": "dt-outzone",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtOutzone is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonClose": {
                "type": "string",
                "attribute": "dt-button-close",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "background": {
                "type": "string",
                "attribute": "background",
                "mutable": false,
                "complexType": {
                    "original": "sidebarBackground",
                    "resolved": "\"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
                    "references": {
                        "sidebarBackground": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/sidebar/sidebar.tsx",
                            "id": "src/components/sidebar/sidebar.tsx::sidebarBackground"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Width, number to define sidebar width."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'surface-2'"
            }
        };
    }
    static get states() {
        return {
            "InnerSpacing": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsToggle",
                "name": "bdsToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the isOpen has changed."
                },
                "complexType": {
                    "original": "{ value: boolean }",
                    "resolved": "{ value: boolean; }",
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
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }];
    }
}
//# sourceMappingURL=sidebar.js.map
