import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const SIZES = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const supportedSize = (value) => {
    if (SIZES.includes(value))
        return value;
    warnLegacyValue('uai-avatar', 'size', value, 'standard');
    return 'standard';
};
/**
 * Static user avatar. Pass a remote image URL with `src`, explicit fallback initials with `initials`,
 * and an accessible name with `label`. The consuming application is responsible for uploading images.
 */
export class UaiAvatar {
    constructor() {
        this.imageFailed = false;
        /**
         * Avatar diameter: micro (`sizing/lg`), extra-small (`sizing/xl`), small (`sizing/2xl`), standard (`sizing/3xl`), large (`sizing/4xl`), or extra-large (`sizing/5xl`).
         */
        this.size = 'standard';
    }
    resetImageError() {
        this.imageFailed = false;
    }
    render() {
        var _a, _b;
        const size = supportedSize(this.size);
        const hasImage = !!this.src && !this.imageFailed;
        const initials = (_a = this.initials) === null || _a === void 0 ? void 0 : _a.trim();
        const label = (_b = this.label) === null || _b === void 0 ? void 0 : _b.trim();
        const iconSize = size === 'micro' ? 'x-small' : size === 'extra-small' ? 'small' : 'medium';
        return (h(Host, { key: 'e429b942626271afb7b1896d27b8a7a7873d993f', class: { [`uai-avatar--size-${size}`]: true }, role: label ? 'img' : undefined, "aria-label": label || undefined, "aria-hidden": label ? undefined : 'true', "data-test": this.dataTest }, hasImage ? (h("img", { class: "avatar__image", src: this.src, alt: "", "aria-hidden": "true", onError: () => (this.imageFailed = true) })) : initials ? (h("span", { class: "avatar__initials", "aria-hidden": "true" }, initials)) : (h("uai-icon", { class: "avatar__icon", name: "avatar-user", theme: "outline", size: iconSize, "aria-hidden": "true" }))));
    }
    static get is() { return "uai-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-avatar.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "attribute": "src",
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
                    "text": "URL of the avatar image. The consuming application handles file selection and upload."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "initials": {
                "type": "string",
                "attribute": "initials",
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
                    "text": "Explicit one- or two-character fallback shown when the image is absent or fails to load."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Accessible name for the avatar. Without a label, the avatar is hidden from assistive technology."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "UaiAvatarSize",
                    "resolved": "\"extra-large\" | \"extra-small\" | \"large\" | \"micro\" | \"small\" | \"standard\"",
                    "references": {
                        "UaiAvatarSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-avatar/uai-avatar.tsx",
                            "id": "src/components/uai-avatar/uai-avatar.tsx::UaiAvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Avatar diameter: micro (`sizing/lg`), extra-small (`sizing/xl`), small (`sizing/2xl`), standard (`sizing/3xl`), large (`sizing/4xl`), or extra-large (`sizing/5xl`)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'standard'"
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
                    "text": "Value placed on the avatar host for automated tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "imageFailed": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "src",
                "methodName": "resetImageError"
            }];
    }
}
//# sourceMappingURL=uai-avatar.js.map
