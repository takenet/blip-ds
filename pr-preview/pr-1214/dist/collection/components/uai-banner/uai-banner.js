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
        return (h(Host, { key: '054a4981c1beb491540e31ebc23587d0e9cf1223', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: 'eff5d8dc3fc7cd470d3d48dbfec17f022c9414ac', class: {
                banner__holder: true,
                [`banner__holder--${variant}`]: true,
                'banner__holder--inside': this.context === 'inside',
            }, part: "holder", role: urgent ? 'alert' : 'status' }, h("div", { key: '31110b872471d5782feca91ce14f415d79f08e56', class: "banner__icon-box", part: "icon-box", "aria-hidden": "true" }, h("uai-icon", { key: '94104fc38e23439fbb89f5531628bde5472021b7', class: "banner__icon", name: ICONS[variant], size: "medium" })), h("div", { key: 'efba12151e37960520163e190c4d697de839c534', class: "banner__text" }, this.heading && (h("uai-typo", { key: '43bb8cca4a59002c044ea05bb369db64b6848046', class: "banner__title", tag: "p", variant: "body-base", bold: "medium", margin: false }, this.heading)), h("uai-typo", { key: '44bcebaee1a9be332e71353721b4df93143deddc', class: "banner__message", tag: "span", variant: "body-base", margin: false }, h("slot", { key: '52c935ea68face352e49312eb9d65c745c76e657' }))), h("slot", { key: '720da10bd311b11ef1b01dcd2ea936aeb7f39c3c', name: "link" }), String(this.buttonClose) === 'true' && (h("button", { key: '8d2a3cf39a42022d9aa71cdbd9484ef0b9ff8cd8', type: "button", class: "banner__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: this.close }, h("uai-icon", { key: '96220fbb474ed7be55b75871dcc269afc9a2d5ad', name: "close", size: "medium", "aria-hidden": "true" }))))));
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
