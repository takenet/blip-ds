import { Host, h } from "@stencil/core";
import { warnDeprecated, warnLegacyValue } from "../../utils/deprecation";
const VARIANTS = ['system', 'warning', 'info', 'error', 'success'];
const ICONS = {
    system: 'message-ballon',
    info: 'info',
    success: 'checkball',
    warning: 'warning',
    error: 'error',
};
/**
 * Notification bar for a system, informational, success, warning or error message.
 * Use for page or section level notices; pair with UaiThemeProvider and a short text; avoid it for transient feedback.
 *
 * @slot - Short message text, preferably one line.
 * @slot link - Optional link or action shown before the close button.
 * @part holder - The banner container.
 * @part icon-box - The box around the variant icon.
 * @part close - The close button.
 */
export class UaiBanner {
    constructor() {
        this.visible = true;
        /** Kept for compatibility; the content always fills the available width. Avoid relying on it for layout. */
        this.bannerAlign = 'center';
        /** Shows the close button when 'true'. Use for dismissible notices; pair with uaiBannerClose; avoid it for critical errors. */
        this.buttonClose = 'false';
        /** Rounds the banner when 'inside' a container. Use 'outside' for a full-width bar; avoid mixing both in one page. */
        this.context = 'outside';
        /** Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning. */
        this.variant = 'system';
        /** Optional short title shown above the text, without a final period. Use for the reason of the notice; avoid long titles. */
        this.heading = null;
        /** Accessible name of the close button. Use a translated label; pair with buttonClose. Avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        this.close = () => {
            this.uaiBannerClose.emit();
            this.visible = false;
        };
    }
    /** Toggles the banner visibility. Use for imperative control; pair with uaiBannerClose. Avoid hiding critical errors. */
    async toggle() {
        this.visible = !this.visible;
    }
    componentWillLoad() {
        if (this.bannerAlign !== 'center') {
            warnDeprecated('uai-banner', 'bannerAlign', 'The content always fills the available width.');
        }
    }
    render() {
        const known = VARIANTS.find((candidate) => candidate === this.variant);
        const variant = known || 'system';
        if (!known)
            warnLegacyValue('uai-banner', 'variant', this.variant, variant);
        const urgent = variant === 'error' || variant === 'warning';
        return (h(Host, { key: '4e88b6af2bafe1d2e4a9c1c9f1182c58cacc7f61', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: '1ad06fd6b09ca9db7251e250fad70c4cc3dfc23a', class: {
                banner__holder: true,
                [`banner__holder--${variant}`]: true,
                'banner__holder--inside': this.context === 'inside',
            }, part: "holder", role: urgent ? 'alert' : 'status' }, h("div", { key: 'b3dedf5848fa034214faba9256310c782c0900a0', class: "banner__icon-box", part: "icon-box", "aria-hidden": "true" }, h("uai-icon", { key: '902be2f297f274e06faa644a727a53855d182a79', class: "banner__icon", name: ICONS[variant], size: "medium" })), h("div", { key: '93bc8d36fa5e832ba73597826758e80e63b3567a', class: "banner__text" }, this.heading && (h("uai-typo", { key: '4f41661b33894e85f8a53dd06c1bc93152b17dcf', class: "banner__title", tag: "p", variant: "body-base", bold: "medium", margin: false }, this.heading)), h("uai-typo", { key: '8ab7cfd2e5f2adab2c607f7aa045fec7378c10ad', class: "banner__message", tag: "span", variant: "body-base", margin: false }, h("slot", { key: '22f9a08f12f17681581f0b5bcc811d6332cb1d03' }))), h("slot", { key: 'a7a45091db6c2d8289b6ae5315c0e84d5260d774', name: "link" }), String(this.buttonClose) === 'true' && (h("button", { key: '01cdb7a22409dfc10fdc59b60066b6b168e6c346', type: "button", class: "banner__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: this.close }, h("uai-icon", { key: 'c747a9fc28893f16f3e7f0c20581b463dc7a6d2e', name: "close", size: "medium", "aria-hidden": "true" }))))));
    }
    static get is() { return "uai-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-banner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-banner.css"]
        };
    }
    static get properties() {
        return {
            "bannerAlign": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBannerAlign",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "UaiBannerAlign": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-banner/uai-banner.tsx",
                            "id": "src/components/uai-banner/uai-banner.tsx::UaiBannerAlign"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Kept for compatibility; the content always fills the available width. Avoid relying on it for layout."
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
                    "original": "UaiBannerButtonClose",
                    "resolved": "\"false\" | \"true\"",
                    "references": {
                        "UaiBannerButtonClose": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-banner/uai-banner.tsx",
                            "id": "src/components/uai-banner/uai-banner.tsx::UaiBannerButtonClose"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows the close button when 'true'. Use for dismissible notices; pair with uaiBannerClose; avoid it for critical errors."
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
                    "original": "UaiBannerContext",
                    "resolved": "\"inside\" | \"outside\"",
                    "references": {
                        "UaiBannerContext": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-banner/uai-banner.tsx",
                            "id": "src/components/uai-banner/uai-banner.tsx::UaiBannerContext"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Rounds the banner when 'inside' a container. Use 'outside' for a full-width bar; avoid mixing both in one page."
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
                    "original": "UaiBannerVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
                    "references": {
                        "UaiBannerVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-banner/uai-banner.tsx",
                            "id": "src/components/uai-banner/uai-banner.tsx::UaiBannerVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'system'"
            },
            "heading": {
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
                    "text": "Optional short title shown above the text, without a final period. Use for the reason of the notice; avoid long titles."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "null"
            },
            "closeLabel": {
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
                    "text": "Accessible name of the close button. Use a translated label; pair with buttonClose. Avoid leaving it generic."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "close-label",
                "defaultValue": "'Fechar'"
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
                    "text": "Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it."
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
                "method": "uaiBannerClose",
                "name": "uaiBannerClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the banner is closed with the close button. Use to persist the dismissal; avoid duplicate handlers."
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
                    "text": "Toggles the banner visibility. Use for imperative control; pair with uaiBannerClose. Avoid hiding critical errors.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
