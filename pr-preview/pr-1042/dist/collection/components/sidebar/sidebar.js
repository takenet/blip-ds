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
        return (h("div", { key: '13ba704ac3fd10d7c77d4ded636c5b17c5560c87', class: {
                sidebar_dialog: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
            } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { key: '498dbf3de26d0dd07e5cfbe68a484f0771225df3', class: {
                sidebar: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
                [`position_${this.sidebarPosition}`]: true,
                [`background_${this.background}`]: true,
            }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { key: '5ff63216fe15dcb73f5c1bac2d40cb450a12efe4', class: { header: true } }, h("div", { key: '513387ec6653504e8b4f960f6c204fa29f79b7ef', class: { content: true } }, h("slot", { key: '2f66f02119c41d41c0b54ec310971845920ffd75', name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
                closeButton: true,
            }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { key: '1fe85b9e8df3ff755f73decb42a013c917240eae', class: { body: true } }, h("div", { key: '6da11a2c668372b9dc612aa99a598c9929796bce', class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { key: 'ccd7205ca9a9a2c1c821b84a0f166f1c9678e288', name: "body" }))), this.hasFooterSlot && (h("div", { key: '60401dd3bf62dd56903e48835f1bf1a4170ae370', class: { footer: true } }, h("div", { key: 'd316cc85e985252145748929d4a585b05a8d96ed', class: { content: true } }, h("slot", { key: '0b917bd07043a083f15ae67dea83d15ee418596d', name: "footer" })))))));
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
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }];
    }
}
//# sourceMappingURL=sidebar.js.map
