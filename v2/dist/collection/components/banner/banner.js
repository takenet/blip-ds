import { Host, h, } from "@stencil/core";
/**
 * @deprecated Use uai-banner with UaiThemeProvider for tokenized styling and accessible roles.
 */
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
        return (h(Host, { key: 'b1a5841167f53e33e92213e9ba2c35519c19e2cf', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: 'e238d74219984cded0fb3a421710a656c04759a8', class: {
                banner__holder: true,
                [`banner__holder--align--${this.bannerAlign}`]: true,
                [`banner__holder--${this.variant}`]: true,
                [`banner__holder--context--${this.context}`]: true,
            } }, h("div", { key: '3a4e25e48ae076852fdb32ae5d66686a84ce8fb2', class: {
                banner__content: true,
            } }, this.variant === 'warning' && (h("bds-icon", { key: 'bb36c6840a82d9beca18085166a48b29c6eaa08c', class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (h("bds-icon", { key: 'b29b5332364c7741caa6f10a89a81685fb9dec9c', class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (h("bds-icon", { key: 'd9ea85319859b58ecc12ced40c18c25cf1cdb29d', class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (h("bds-icon", { key: 'a3a3601ec053d9630c908b0907d200d622830e30', class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (h("bds-icon", { key: 'fcaa8322e01d32f982e2912cf0d5484ec9343dd0', class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), h("div", { key: '9d8b8acd1072dbb81669ab7b2e352d302984b294', class: "slot" }, h("slot", { key: 'c28579b61db73c16faebf0b397cf7f9f9d1c5b49' }))), h("div", { key: '194af253bc7b0a84f91128e22afadefa206ad556', class: {
                banner__action: true,
            } }, this.buttonClose === 'true' && (h("div", { key: 'ac098f4a8ed37347d0e28282e7d03c33cd770257', class: "close", onClick: () => this._buttonClickHandler() }, h("bds-button-icon", { key: '6a06f4380ed44d9acb5cd990be361d993029b49f', dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
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
                "attribute": "banner-align",
                "defaultValue": "'center'"
            },
            "buttonClose": {
                "type": "string",
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
                "attribute": "button-close",
                "defaultValue": "'false'"
            },
            "context": {
                "type": "string",
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
                "attribute": "context",
                "defaultValue": "'outside'"
            },
            "variant": {
                "type": "string",
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
                "attribute": "variant",
                "defaultValue": "'system'"
            },
            "dtButtonClose": {
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
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
