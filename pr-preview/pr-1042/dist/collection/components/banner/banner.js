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
        return (h(Host, { key: '27ee27aeb3a375d75eebafd1795fd2fc78eea48f', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: '4e31102e5f18b2664076a0bfccab2febe07954df', class: {
                banner__holder: true,
                [`banner__holder--align--${this.bannerAlign}`]: true,
                [`banner__holder--${this.variant}`]: true,
                [`banner__holder--context--${this.context}`]: true,
            } }, h("div", { key: '08a0a493ea4ff8401eedc973240e81b025f7234d', class: {
                banner__content: true,
            } }, this.variant === 'warning' && (h("bds-icon", { key: 'ce61b43bcd1956070e0a840d3906fbb19fb0cdca', class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (h("bds-icon", { key: 'b9e6e763066f989322fc5b239a057b0b0e8fa517', class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (h("bds-icon", { key: '59811115f02c915b9814c80b6f24eb7a73de6c80', class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (h("bds-icon", { key: 'cb5b19c054320fb6edad2b670fc1ecacd76bbad1', class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (h("bds-icon", { key: '517f3279e4403eabee3288bed1fa78d22cf9a1f0', class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), h("div", { key: 'de9869683f7d64148845c28d3a4bc81b78819431', class: "slot" }, h("slot", { key: 'f2a9193db85cdff95eb723a4274d3810fe3e34d1' }))), h("div", { key: 'c0ecdffc93b26a3d27e063af01e5107fa63a5e95', class: {
                banner__action: true,
            } }, this.buttonClose === 'true' && (h("div", { key: '6a1a14d1e666787802aa54b231b70d68a13155a1', class: "close", onClick: () => this._buttonClickHandler() }, h("bds-button-icon", { key: '8c9dbc85c5ffdebc66b470b95aaaa45200bb8ba1', dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=banner.js.map
