import { Host, h } from "@stencil/core";
import { warnDeprecated, warnLegacyValue } from "../../utils/deprecation";
import { colorLetter } from "../avatar/color-letter";
import { initialsOf } from "./uai-avatar-initials";
const TAG = 'uai-avatar';
const SIZES = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const COLORS = ['colorLetter', 'system', 'success', 'warning', 'error', 'info', 'surface'];
// system and info share feedback/info-subtle: UAI has a single information surface.
const UAI_COLOR = {
    system: 'info',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
    surface: 'surface',
};
const ICON_SIZE = {
    micro: 'x-small',
    'extra-small': 'small',
    small: 'medium',
    standard: 'medium',
    large: 'medium',
    'extra-large': 'medium',
};
/**
 * Avatar of a person: photo, initials of the name or a generic icon. Same contract as bds-avatar with UAI tokens.
 * Give the full name in `name`: it builds the initials and the accessible name. Use it in lists, profiles and
 * headers. Pair with the person's name nearby when the avatar is small. Avoid it as a generic button; use `upload`
 * or `openUpload` only when the avatar itself changes the photo. Wrap the app in UaiThemeProvider.
 *
 * @part avatar - The circle with the photo, initials, icon or counter.
 */
export class UaiAvatar {
    constructor() {
        this.imageFailed = false;
        /**
         * Full name of the person. Builds the initials (first letter of the first and the last name) and the accessible
         * name.
         */
        this.name = null;
        /**
         * URL of the photo. Without it, or if it fails to load, the initials are shown.
         */
        this.thumbnail = null;
        /**
         * Avatar size. Can be one of: 'micro', 'extra-small', 'small', 'standard' (default), 'large', 'extra-large'.
         */
        this.size = 'standard';
        /**
         * Background behind the initials. Can be one of: 'colorLetter' (default, picked by the first letter of the name),
         * 'system', 'success', 'warning', 'error', 'info', 'surface' (neutral).
         */
        this.color = 'colorLetter';
        /**
         * If true, shows the upload icon on hover and focus. The click only emits uaiClickAvatar; the app opens its own
         * picker.
         */
        this.upload = false;
        /**
         * If true, activating the avatar opens the image picker, shows the chosen image and emits uaiImageUpload.
         */
        this.openUpload = false;
        /**
         * Number of hidden people, shown as "+N" (for example in a group of avatars).
         */
        this.ellipsis = null;
        /**
         * Data test id, set on the host.
         */
        this.dataTest = null;
        this.onClick = (event) => {
            this.activate(event);
        };
        this.onKeyDown = (event) => {
            if (!this.interactive || (event.key !== 'Enter' && event.key !== ' '))
                return;
            event.preventDefault();
            this.activate(event);
        };
        this.onFileChange = (event) => {
            var _a;
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (!file)
                return;
            const reader = new FileReader();
            reader.onload = () => {
                const url = reader.result;
                this.thumbnail = url;
                this.uaiImageUpload.emit(url);
            };
            reader.readAsDataURL(file);
        };
    }
    resetImageError() {
        this.imageFailed = false;
    }
    componentWillLoad() {
        if (this.src !== undefined && this.src !== null)
            warnDeprecated(TAG, 'src', 'Use thumbnail.');
        if (this.label !== undefined && this.label !== null)
            warnDeprecated(TAG, 'label', 'Use name.');
        if (this.initials !== undefined && this.initials !== null) {
            warnDeprecated(TAG, 'initials', 'The initials come from name.');
        }
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'standard');
        return 'standard';
    }
    get personName() {
        return (this.name || this.label || '').trim();
    }
    get image() {
        return this.thumbnail || this.src || '';
    }
    get interactive() {
        return !!(this.upload || this.openUpload);
    }
    get text() {
        const fromName = initialsOf(this.personName);
        if (fromName)
            return fromName;
        return (this.initials || '').trim().slice(0, 2).toUpperCase();
    }
    resolvedColor(initials) {
        let color = this.color;
        if (!COLORS.includes(color)) {
            warnLegacyValue(TAG, 'color', color, 'colorLetter');
            color = 'colorLetter';
        }
        if (color !== 'colorLetter')
            return UAI_COLOR[color];
        const letter = colorLetter.find((item) => item.value === initials.charAt(0));
        return letter ? UAI_COLOR[letter.color] || 'surface' : 'surface';
    }
    activate(event) {
        var _a;
        this.uaiClickAvatar.emit(event);
        if (this.openUpload)
            (_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.click();
    }
    renderContent(size, initials) {
        if (this.ellipsis) {
            return (h("span", { class: "avatar__ellipsis", "aria-hidden": "true" }, `+${this.ellipsis}`));
        }
        if (this.image && !this.imageFailed) {
            return (h("img", { class: "avatar__image", src: this.image, alt: "", "aria-hidden": "true", onError: () => (this.imageFailed = true) }));
        }
        if (initials) {
            return (h("span", { class: "avatar__initials", "aria-hidden": "true" }, initials));
        }
        return (h("uai-icon", { class: "avatar__icon", name: "avatar-user", theme: "outline", size: ICON_SIZE[size], "aria-hidden": "true" }));
    }
    render() {
        const size = this.sizeValue;
        const initials = this.text;
        const hasImage = !!this.image && !this.imageFailed;
        const color = this.ellipsis || hasImage || !initials ? 'surface' : this.resolvedColor(initials);
        const name = this.personName;
        const interactive = this.interactive;
        const accessibleName = name || (this.ellipsis ? `+${this.ellipsis}` : '');
        return (h(Host, { key: 'a1c8e3c50dc773d675b3f6adb4517eb19ed529a6', class: {
                [`uai-avatar--size-${size}`]: true,
                [`uai-avatar--color-${color}`]: true,
                'uai-avatar--upload': interactive,
            }, role: interactive ? 'button' : accessibleName ? 'img' : null, tabindex: interactive ? '0' : null, "aria-label": interactive ? accessibleName || 'Avatar' : accessibleName || null, "aria-hidden": !interactive && !accessibleName ? 'true' : null, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: this.onKeyDown }, h("div", { key: '850a88c2048d86d6dc45727e8b16fea784a798a5', class: "avatar", part: "avatar" }, this.renderContent(size, initials), interactive && (h("div", { key: 'daf6efc4c3e4fc18233e0b283aacf63820918059', class: "avatar__upload", "aria-hidden": "true" }, h("uai-icon", { key: '57eb2eea6bcc80d8d32a14b3eff7f0d86b22f331', name: "upload", theme: "outline", size: ICON_SIZE[size] })))), this.openUpload && (h("input", { key: '0c3a4589a42aedc84c68a09a4700486f9bc551e0', ref: (input) => (this.fileInput = input), class: "avatar__file", type: "file", accept: "image/*", tabindex: "-1", "aria-hidden": "true", onChange: this.onFileChange, onClick: (event) => event.stopPropagation() }))));
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
            "name": {
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
                    "text": "Full name of the person. Builds the initials (first letter of the first and the last name) and the accessible\nname."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "null"
            },
            "thumbnail": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "URL of the photo. Without it, or if it fails to load, the initials are shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "thumbnail",
                "defaultValue": "null"
            },
            "size": {
                "type": "string",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Avatar size. Can be one of: 'micro', 'extra-small', 'small', 'standard' (default), 'large', 'extra-large'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'standard'"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiAvatarColor",
                    "resolved": "\"colorLetter\" | \"error\" | \"info\" | \"success\" | \"surface\" | \"system\" | \"warning\"",
                    "references": {
                        "UaiAvatarColor": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-avatar/uai-avatar.tsx",
                            "id": "src/components/uai-avatar/uai-avatar.tsx::UaiAvatarColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Background behind the initials. Can be one of: 'colorLetter' (default, picked by the first letter of the name),\n'system', 'success', 'warning', 'error', 'info', 'surface' (neutral)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'colorLetter'"
            },
            "upload": {
                "type": "boolean",
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
                    "text": "If true, shows the upload icon on hover and focus. The click only emits uaiClickAvatar; the app opens its own\npicker."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "upload",
                "defaultValue": "false"
            },
            "openUpload": {
                "type": "boolean",
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
                    "text": "If true, activating the avatar opens the image picker, shows the chosen image and emits uaiImageUpload."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open-upload",
                "defaultValue": "false"
            },
            "ellipsis": {
                "type": "number",
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
                    "text": "Number of hidden people, shown as \"+N\" (for example in a group of avatars)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ellipsis",
                "defaultValue": "null"
            },
            "dataTest": {
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
                    "text": "Data test id, set on the host."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            },
            "src": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use thumbnail."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "src"
            },
            "label": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use name. It builds the initials and the accessible name."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "initials": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "The initials come from name. Without name, at most two characters are shown."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "initials"
            }
        };
    }
    static get states() {
        return {
            "imageFailed": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiClickAvatar",
                "name": "uaiClickAvatar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the avatar is clicked, or activated with Enter or Space when it is interactive."
                },
                "complexType": {
                    "original": "PointerEvent | KeyboardEvent",
                    "resolved": "KeyboardEvent | PointerEvent",
                    "references": {
                        "PointerEvent": {
                            "location": "global",
                            "id": "global::PointerEvent"
                        },
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }, {
                "method": "uaiImageUpload",
                "name": "uaiImageUpload",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted with the chosen image as a data URL, when openUpload is true."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "thumbnail",
                "methodName": "resetImageError"
            }, {
                "propName": "src",
                "methodName": "resetImageError"
            }];
    }
}
