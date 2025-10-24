import { Host, h, } from "@stencil/core";
export class Banner {
    constructor() {
        this.visible = true;
        /**
         * Set the banner aligment, it can be one of: 'center', 'right' or 'left'.
         */
        this.bannerAlign = 'center';
        /**
         * Set if show up the close button.
         */
        this.buttonClose = 'false';
        /**
         * Set if the banner is external or internal.
         */
        this.context = 'outside';
        /**
         * Set the banner varient, it can be 'system' or 'warning'.
         */
        this.variant = 'system';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this._buttonClickHandler = () => {
            this.bdsBannerClose.emit();
            this.visible = false;
        };
    }
    async toggle() {
        this.visible = !this.visible;
    }
    render() {
        return (h(Host, { key: 'f0384baea98835d4d011db4ef0abebd8533406c1', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: 'de2c63f4940cf3ffd59e3fb76b634c1dae186b89', class: {
                banner__holder: true,
                [`banner__holder--align--${this.bannerAlign}`]: true,
                [`banner__holder--${this.variant}`]: true,
                [`banner__holder--context--${this.context}`]: true,
            } }, h("div", { key: '952418446181d3a85039a41747679ed08c6ebea4', class: {
                banner__content: true,
            } }, this.variant === 'warning' && (h("bds-icon", { key: 'ff0f1d4fd5a2784d68329c34f87ca41e198766aa', class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (h("bds-icon", { key: '95ff2ee0c03694a435e839fa7da073478cdd9b55', class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (h("bds-icon", { key: '8353a8b66a6f0173cc4a1a201c3c227a83977666', class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (h("bds-icon", { key: 'a44b21772b512ddca13ce2fa549e24554dbde707', class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (h("bds-icon", { key: '7f897b2d6af5cddcedaca823196b2f51b8aff780', class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), h("div", { key: 'fe81eb83dbc95af83a568f5175f2ba1eafba487e', class: "slot" }, h("slot", { key: '9169dd2c2936b6a39db1bbd908f055e0a26675da' }))), h("div", { key: '1d3908eddbd49e64cc143774e3402fd9c9903203', class: {
                banner__action: true,
            } }, this.buttonClose === 'true' && (h("div", { key: 'f625832b442182ff176f9b5c9a82b1ce21865840', class: "close", onClick: () => this._buttonClickHandler() }, h("bds-button-icon", { key: 'f047b12fcb054a1457472055669ab6efded3b02a', dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
    }
    static get is() { return "bds-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["banner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["banner.css"]
        };
    }
    static get properties() {
        return {
            "bannerAlign": {
                "type": "string",
                "attribute": "banner-align",
                "mutable": false,
                "complexType": {
                    "original": "BannerAlign",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "BannerAlign": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/banner/banner.tsx",
                            "id": "src/components/banner/banner.tsx::BannerAlign"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the banner aligment, it can be one of: 'center', 'right' or 'left'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'center'"
            },
            "buttonClose": {
                "type": "string",
                "attribute": "button-close",
                "mutable": false,
                "complexType": {
                    "original": "ButtonClose",
                    "resolved": "\"false\" | \"true\"",
                    "references": {
                        "ButtonClose": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/banner/banner.tsx",
                            "id": "src/components/banner/banner.tsx::ButtonClose"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set if show up the close button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'false'"
            },
            "context": {
                "type": "string",
                "attribute": "context",
                "mutable": false,
                "complexType": {
                    "original": "Context",
                    "resolved": "\"inside\" | \"outside\"",
                    "references": {
                        "Context": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/banner/banner.tsx",
                            "id": "src/components/banner/banner.tsx::Context"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set if the banner is external or internal."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'outside'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "BannerVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
                    "references": {
                        "BannerVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/banner/banner.tsx",
                            "id": "src/components/banner/banner.tsx::BannerVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the banner varient, it can be 'system' or 'warning'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'system'"
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
            }
        };
    }
    static get states() {
        return {
            "visible": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsBannerClose",
                "name": "bdsBannerClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the banner is closed."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=banner.js.map
