import { Host, h } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
const VARIANTS = ['solid', 'outline', 'ghost'];
const COLORS = ['primary', 'content', 'positive', 'negative'];
const SIZES = ['compact', 'short', 'medium', 'large'];
const TYPES = ['button', 'submit', 'reset'];
const ICON_THEMES = ['outline', 'solid'];
const LEGACY_VARIANTS = {
    text: { variant: 'ghost' },
    primary: { variant: 'solid' },
    secondary: { variant: 'outline' },
    'secondary--white': { variant: 'outline' },
    tertiary: { variant: 'outline' },
    delete: { variant: 'solid', color: 'negative' },
};
const LEGACY_SIZES = {
    standard: 'medium',
    tall: 'large',
};
const ICON_SIZE = {
    compact: 'x-small',
    short: 'small',
    medium: 'medium',
    large: 'medium',
};
/**
 * Square icon-only action button for toolbars, card headers, and compact controls.
 * Use `variant="ghost"` or `variant="outline"` for secondary actions and `variant="solid"` for high-emphasis triggers;
 * pair with `aria-label` or `aria-labelledby` so assistive technologies announce the action; avoid omitting an accessible name.
 *
 * @part button - The native button element.
 */
export class UaiIconButton {
    constructor() {
        /**
         * Name of the glyph from the UAI icon font. When omitted, nothing is rendered.
         */
        this.icon = null;
        /**
         * Style of the UAI icon glyph (`outline` or `solid`).
         */
        this.iconTheme = 'outline';
        /**
         * Visual emphasis of the button (`solid`, `outline`, or `ghost`).
         */
        this.variant = 'solid';
        /**
         * Semantic color of the action (`primary`, `content`, `positive`, or `negative`).
         */
        this.color = 'primary';
        /**
         * Control size (`compact`, `short`, `medium`, or `large`), mapped to `control-height/*` tokens.
         */
        this.size = 'medium';
        /**
         * If true, disables the native button and prevents `uaiClick` emission.
         */
        this.disabled = false;
        /**
         * If true, renders a loading spinner instead of the icon and prevents `uaiClick` emission.
         */
        this.loading = false;
        /**
         * Native button type (`button`, `submit`, or `reset`).
         */
        this.type = 'button';
        /**
         * Accessible name forwarded to the inner `<button>`. Required when `aria-labelledby` is not set.
         */
        this.ariaLabel = null;
        /**
         * ID reference forwarded to the inner `<button>` when labelled by an external element.
         */
        this.ariaLabelledby = null;
        /**
         * Selector attribute forwarded to the inner `<button>` for automated tests.
         */
        this.dataTest = null;
        this.handleClick = (ev) => {
            if (this.disabled || this.loading) {
                ev.preventDefault();
                ev.stopPropagation();
                return;
            }
            this.uaiClick.emit(ev);
            this.actOnForm(this.resolveType());
        };
    }
    /**
     * Controls the visual active/pressed state of the button programmatically.
     */
    async isActive(value) {
        this.active = value;
    }
    resolveVariantAndColor() {
        var _a, _b, _c;
        const rawColor = String((_a = this.color) !== null && _a !== void 0 ? _a : 'primary');
        let resolvedColor = 'primary';
        if (COLORS.includes(rawColor)) {
            resolvedColor = rawColor;
        }
        else {
            warnLegacyValue('uai-icon-button', 'color', rawColor, 'primary');
        }
        const rawVariant = String((_b = this.variant) !== null && _b !== void 0 ? _b : 'solid');
        if (VARIANTS.includes(rawVariant)) {
            return { variant: rawVariant, color: resolvedColor };
        }
        const mapped = LEGACY_VARIANTS[rawVariant];
        if (mapped) {
            warnLegacyValue('uai-icon-button', 'variant', rawVariant, mapped.variant);
            return {
                variant: mapped.variant,
                color: (_c = mapped.color) !== null && _c !== void 0 ? _c : resolvedColor,
            };
        }
        warnLegacyValue('uai-icon-button', 'variant', rawVariant, 'solid');
        return { variant: 'solid', color: resolvedColor };
    }
    resolveSize() {
        var _a;
        const rawSize = String((_a = this.size) !== null && _a !== void 0 ? _a : 'medium');
        if (SIZES.includes(rawSize)) {
            return rawSize;
        }
        const mapped = LEGACY_SIZES[rawSize];
        if (mapped) {
            warnLegacyValue('uai-icon-button', 'size', rawSize, mapped);
            return mapped;
        }
        warnLegacyValue('uai-icon-button', 'size', rawSize, 'medium');
        return 'medium';
    }
    resolveType() {
        var _a;
        const rawType = String((_a = this.type) !== null && _a !== void 0 ? _a : 'button');
        if (TYPES.includes(rawType)) {
            return rawType;
        }
        warnLegacyValue('uai-icon-button', 'type', rawType, 'button');
        return 'button';
    }
    resolveIconTheme() {
        var _a;
        const rawTheme = String((_a = this.iconTheme) !== null && _a !== void 0 ? _a : 'outline');
        if (ICON_THEMES.includes(rawTheme)) {
            return rawTheme;
        }
        warnLegacyValue('uai-icon-button', 'iconTheme', rawTheme, 'outline');
        return 'outline';
    }
    actOnForm(buttonType) {
        if (buttonType === 'button')
            return;
        const form = this.el.closest('form');
        if (!form)
            return;
        const proxy = document.createElement('button');
        proxy.type = buttonType;
        proxy.style.display = 'none';
        form.appendChild(proxy);
        proxy.click();
        proxy.remove();
    }
    render() {
        if (!this.icon)
            return null;
        const { variant, color } = this.resolveVariantAndColor();
        const size = this.resolveSize();
        const buttonType = this.resolveType();
        const theme = this.resolveIconTheme();
        const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();
        const ariaLabelledby = (this.ariaLabelledby || this.el.getAttribute('aria-labelledby') || '').trim();
        if (!ariaLabel && !ariaLabelledby) {
            warnOnce('uai-icon-button', 'missing-accessible-name', 'Icon buttons require an accessible name via aria-label or aria-labelledby.');
        }
        return (h(Host, null, h("button", { part: "button", type: buttonType, class: {
                'icon-button': true,
                [`icon-button--${variant}`]: true,
                [`icon-button--color-${color}`]: true,
                [`icon-button--size-${size}`]: true,
                'icon-button--active': !!this.active,
                active: !!this.active,
                'icon-button--loading': !!this.loading,
            }, disabled: this.disabled, "aria-disabled": this.loading ? 'true' : undefined, "aria-busy": this.loading ? 'true' : undefined, "aria-label": ariaLabel || undefined, "aria-labelledby": ariaLabelledby || undefined, "aria-pressed": this.active === undefined ? undefined : String(this.active), "data-test": this.dataTest, onClick: this.handleClick }, this.loading ? (h("span", { class: "icon-button__spinner", "aria-hidden": "true" })) : (h("uai-icon", { class: "icon-button__icon", name: this.icon, theme: theme, size: ICON_SIZE[size], "aria-hidden": "true" })))));
    }
    static get is() { return "uai-icon-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-icon-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-icon-button.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
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
                    "text": "Name of the glyph from the UAI icon font. When omitted, nothing is rendered."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "null"
            },
            "iconTheme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconButtonIconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "UaiIconButtonIconTheme": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-button/uai-icon-button.tsx",
                            "id": "src/components/uai-icon-button/uai-icon-button.tsx::UaiIconButtonIconTheme"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Style of the UAI icon glyph (`outline` or `solid`)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon-theme",
                "defaultValue": "'outline'"
            },
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiIconButtonVariant",
                    "resolved": "\"ghost\" | \"outline\" | \"solid\"",
                    "references": {
                        "UaiIconButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-button/uai-icon-button.tsx",
                            "id": "src/components/uai-icon-button/uai-icon-button.tsx::UaiIconButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Visual emphasis of the button (`solid`, `outline`, or `ghost`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'solid'"
            },
            "color": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiIconButtonColor",
                    "resolved": "\"content\" | \"negative\" | \"positive\" | \"primary\"",
                    "references": {
                        "UaiIconButtonColor": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-button/uai-icon-button.tsx",
                            "id": "src/components/uai-icon-button/uai-icon-button.tsx::UaiIconButtonColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Semantic color of the action (`primary`, `content`, `positive`, or `negative`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiIconButtonSize",
                    "resolved": "\"compact\" | \"large\" | \"medium\" | \"short\"",
                    "references": {
                        "UaiIconButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-button/uai-icon-button.tsx",
                            "id": "src/components/uai-icon-button/uai-icon-button.tsx::UaiIconButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Control size (`compact`, `short`, `medium`, or `large`), mapped to `control-height/*` tokens."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "disabled": {
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
                    "text": "If true, disables the native button and prevents `uaiClick` emission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "loading": {
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
                    "text": "If true, renders a loading spinner instead of the icon and prevents `uaiClick` emission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiIconButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "UaiIconButtonType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-icon-button/uai-icon-button.tsx",
                            "id": "src/components/uai-icon-button/uai-icon-button.tsx::UaiIconButtonType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Native button type (`button`, `submit`, or `reset`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'button'"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name forwarded to the inner `<button>`. Required when `aria-labelledby` is not set."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "ariaLabelledby": {
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
                    "text": "ID reference forwarded to the inner `<button>` when labelled by an external element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-labelledby",
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
                    "text": "Selector attribute forwarded to the inner `<button>` for automated tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "active": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiClick",
                "name": "uaiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button is activated by pointer or keyboard while enabled and not loading."
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "isActive": {
                "complexType": {
                    "signature": "(value: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Controls the visual active/pressed state of the button programmatically.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
