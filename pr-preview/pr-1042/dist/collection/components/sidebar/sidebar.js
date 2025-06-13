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
        return (h("div", { key: 'e6deb15e0767aca5765da85253edb25275a3345c', class: {
                sidebar_dialog: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
            } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { key: '628e26bb30098a3cf687f449a9e7154d275c8aa6', class: {
                sidebar: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
                [`position_${this.sidebarPosition}`]: true,
                [`background_${this.background}`]: true,
            }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { key: '2e0940cfb93436bfa7ea68f26b2c3c4fc17d338a', class: { header: true } }, h("div", { key: '9441898c76d539b0dd037d7f0ddc09a9b97006c0', class: { content: true } }, h("slot", { key: '36e6cf1412a711238fb043eda74069a0df5e7ca6', name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
                closeButton: true,
            }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { key: '7b6a4dcb5b5201333150c026424ac466b28b55ae', class: { body: true } }, h("div", { key: 'a0d820911e08ee57b6630883314126af7cfa686a', class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { key: '2bf6b69461b9a15144eb3a71c8a0481a9bf7c0b8', name: "body" }))), this.hasFooterSlot && (h("div", { key: '44322eb7b9454fcc463361c186f54472e8b77963', class: { footer: true } }, h("div", { key: '9926981535f59752e9451a26fe30bc6ba8c9f67d', class: { content: true } }, h("slot", { key: '89db67b27e4a305793d3b5b05c0486715da82cfe', name: "footer" })))))));
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
