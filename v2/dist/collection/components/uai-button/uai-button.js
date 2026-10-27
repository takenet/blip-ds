import { Host, h } from "@stencil/core";
import { isUaiIcon } from "../../globals/uai-icons";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
const VARIANTS = ['solid', 'outline', 'text'];
const COLORS = ['primary', 'content', 'negative', 'positive'];
const SIZES = ['compact', 'short', 'medium', 'large'];
const JUSTIFY = ['center', 'space-between'];
const ICON_SIZE = {
    compact: 'x-small',
    short: 'small',
    medium: 'medium',
    large: 'medium',
};
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    warnLegacyValue('uai-button', prop, value, fallback);
    return fallback;
};
const hasThemeRoot = (el) => {
    let node = el;
    while (node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-uai-theme'))
            return true;
        node = node.parentNode || node.host || null;
    }
    return false;
};
/**
 * Button that triggers an action. Use variant "solid" for the main action of a screen and "outline" or "text" for the others;
 * color says what the action does (primary, content, positive, negative). For navigation to another page, use a link.
 * The label is the children. Icons use UaiIcon names. Wrap the app in UaiThemeProvider.
 *
 * @slot - Label of the button. Put the left icon and the label together here when using groupIcon.
 * @part button - The native button element.
 */
export class UaiButton {
    constructor() {
        this.direction = 'row';
        this.hasLabel = true;
        /**
         * If true, the button takes the full width of its container.
         */
        this.block = false;
        /**
         * If true, the button takes the full width of its container with centered content.
         */
        this.fullWidth = false;
        /**
         * Horizontal alignment of the button content. Can be one of:
         * 'center' (default), 'space-between' (left content to the left, right content to the right).
         */
        this.justifyContent = 'center';
        /**
         * If true, the button is disabled.
         */
        this.disabled = false;
        /**
         * Color of the button. Can be one of:
         * 'primary', 'content', 'negative', 'positive'.
         */
        this.color = 'primary';
        /**
         * Size of the button. Can be one of:
         * 'compact' (`control-height/compact`), 'short' (`control-height/short`), 'medium' (`control-height/medium`), 'large' (`control-height/large`).
         */
        this.size = 'medium';
        /**
         * Visual style of the button. Can be one of:
         * 'solid', 'outline', 'text'.
         */
        this.variant = 'solid';
        /**
         * Icon rendered before the label. Uses the bds-icon component. Takes precedence over iconLeft.
         */
        this.icon = null;
        /**
         * Icon rendered before the label. Uses the bds-icon component.
         */
        this.iconLeft = null;
        /**
         * Icon rendered after the label. Uses the bds-icon component.
         */
        this.iconRight = null;
        /**
         * If true, renders an 'arrow-right' icon after the label.
         */
        this.arrow = false;
        /**
         * Type of the button. Can be one of:
         * 'button', 'submit', 'reset'. 'submit' and 'reset' act on the enclosing form.
         */
        this.type = 'button';
        /**
         * Theme of the icons. Can be one of:
         * 'outline', 'solid'.
         */
        this.iconTheme = 'outline';
        /**
         * Type of the icons. Can be one of:
         * 'icon', 'logo', 'emoji'.
         */
        this.typeIcon = 'icon';
        /**
         * If true, shows a loading spinner and blocks uaiClick.
         */
        this.loading = false;
        /**
         * Accessible name of the button. Required when the button has no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.updateHasLabel = () => {
            this.hasLabel = Array.from(this.el.childNodes).some((node) => node.nodeType === Node.ELEMENT_NODE ? true : node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
        };
        this.handleClick = (ev) => {
            if (this.disabled || this.loading) {
                ev.preventDefault();
                ev.stopPropagation();
                return;
            }
            this.uaiClick.emit(ev);
            this.actOnForm();
        };
    }
    /**
     * Sets the active (pressed) state of the button.
     */
    async isActive(value) {
        this.active = value;
    }
    /**
     * Sets the position of the button inside a group.
     */
    async setPosition(position) {
        this.position = position;
    }
    /**
     * Sets the direction of the group the button belongs to.
     */
    async setDirection(direction) {
        this.direction = direction;
    }
    /**
     * Sets the size of the button.
     */
    async setSize(size) {
        this.size = size;
    }
    /**
     * Sets the color of the button.
     */
    async setColor(color) {
        this.color = color;
    }
    /**
     * Sets the variant of the button.
     */
    async setVariant(variant) {
        this.variant = variant;
    }
    warnDeprecated() {
        if (this.groupIcon !== undefined) {
            warnDeprecated('uai-button', 'groupIcon', 'Put the left icon and the label together in the default slot.');
        }
        if (this.bdsLoadingVariant !== undefined) {
            warnDeprecated('uai-button', 'bdsLoadingVariant');
        }
        if (this.bdsLoadingColor !== undefined) {
            warnDeprecated('uai-button', 'bdsLoadingColor');
        }
    }
    componentWillLoad() {
        this.warnDeprecated();
        this.updateHasLabel();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            warnOnce('uai-button', 'theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
        }
    }
    // The native button lives in the shadow root, outside the light-DOM form, so a temporary native button
    // inside the form performs the submit or reset (keeping validation and the submit event).
    actOnForm() {
        if (this.type === 'button')
            return;
        const form = this.el.closest('form');
        if (!form)
            return;
        const proxy = document.createElement('button');
        proxy.type = this.type;
        proxy.style.display = 'none';
        form.appendChild(proxy);
        proxy.click();
        proxy.remove();
    }
    renderIcon(name, size, position) {
        const theme = this.iconTheme === 'solid' ? 'solid' : 'outline';
        const classes = { button__icon: true, [`button__icon--${position}`]: true };
        if (this.typeIcon === 'icon' && isUaiIcon(theme, name)) {
            return h("uai-icon", { class: classes, name: name, theme: theme, "aria-hidden": "true" });
        }
        warnOnce('uai-button', `icon:${theme}:${this.typeIcon}:${name}`, `"${name}" is not in the UAI icon set (theme "${theme}", type "${this.typeIcon}"). Falling back to the legacy bds-icon, which is deprecated here.`);
        return (h("bds-icon", { class: classes, name: name, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: ICON_SIZE[size], "aria-hidden": "true" }));
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'solid');
        const color = supported('color', this.color, COLORS, 'primary');
        const size = supported('size', this.size, SIZES, 'medium');
        const justify = supported('justifyContent', this.justifyContent, JUSTIFY, 'center');
        const leftIconName = this.icon || this.iconLeft;
        const rightIconName = this.arrow ? 'arrow-right' : this.iconRight;
        const iconOnly = !this.hasLabel && !!(leftIconName || rightIconName);
        if (iconOnly && !this.ariaLabel) {
            warnOnce('uai-button', 'icon-only-accessible-name', 'Icon-only buttons require an aria-label.');
        }
        const left = this.loading ? (h("span", { class: "button__spinner", "aria-hidden": "true" })) : leftIconName ? (this.renderIcon(leftIconName, size, 'left')) : null;
        const right = rightIconName && !(iconOnly && this.loading) ? this.renderIcon(rightIconName, size, 'right') : null;
        const label = (h("span", { key: 'bd39af4fc8dee1c43fa5a054093bfd07de4acf83', class: { button__label: true, 'button__label--hidden': !this.hasLabel } }, h("uai-typo", { key: 'e39f136dd648e70abf3960edbacf38d0fda098c7', class: "button__typo", tag: "span", variant: size === 'compact' ? 'caption' : 'body-base', bold: "medium", margin: false, noWrap: true }, h("slot", { key: '07a400e275ff0983b04b83945f0931b77dc2ee5c', onSlotchange: this.updateHasLabel }))));
        const grouped = this.groupIcon && justify === 'space-between' && left;
        return (h(Host, { key: '9afa9bebc295a97831481594008e8b5972dfdaf0', class: {
                'uai-button--block': this.block || this.fullWidth,
                'uai-button--group': !!this.position,
            } }, h("button", { key: '9841dc0aa47a1d81ac6358bba767031ed14d3705', class: {
                button: true,
                [`button--${variant}`]: true,
                [`button--color-${color}`]: true,
                [`button--size-${size}`]: true,
                [`button--justify-${justify}`]: true,
                [`button--position-${this.direction}-${this.position}`]: !!this.position,
                'button--icon-only': iconOnly,
                'button--active': !!this.active,
                'button--loading': this.loading,
            }, part: "button", type: "button", disabled: this.disabled, "aria-disabled": this.loading ? 'true' : undefined, "aria-busy": this.loading ? 'true' : undefined, "aria-label": this.ariaLabel || undefined, "aria-pressed": this.active === undefined ? undefined : String(this.active), "data-test": this.dataTest, onClick: this.handleClick }, grouped ? (h("span", { class: "button__group" }, left, label)) : ([left, label]), right)));
    }
    static get is() { return "uai-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-button.css"]
        };
    }
    static get properties() {
        return {
            "block": {
                "type": "boolean",
                "attribute": "block",
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
                    "text": "If true, the button takes the full width of its container."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "fullWidth": {
                "type": "boolean",
                "attribute": "full-width",
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
                    "text": "If true, the button takes the full width of its container with centered content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "justifyContent": {
                "type": "string",
                "attribute": "justify-content",
                "mutable": false,
                "complexType": {
                    "original": "UaiButtonJustifyContent",
                    "resolved": "\"center\" | \"space-between\"",
                    "references": {
                        "UaiButtonJustifyContent": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonJustifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Horizontal alignment of the button content. Can be one of:\n'center' (default), 'space-between' (left content to the left, right content to the right)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'center'"
            },
            "groupIcon": {
                "type": "boolean",
                "attribute": "group-icon",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Put the left icon and the label together in the default slot instead.\nIf true, keeps the left icon together with the label when justifyContent is 'space-between'."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "If true, the button is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": true,
                "complexType": {
                    "original": "UaiButtonColor",
                    "resolved": "\"content\" | \"negative\" | \"positive\" | \"primary\"",
                    "references": {
                        "UaiButtonColor": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Color of the button. Can be one of:\n'primary', 'content', 'negative', 'positive'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "UaiButtonSize",
                    "resolved": "\"compact\" | \"large\" | \"medium\" | \"short\"",
                    "references": {
                        "UaiButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the button. Can be one of:\n'compact' (`control-height/compact`), 'short' (`control-height/short`), 'medium' (`control-height/medium`), 'large' (`control-height/large`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'medium'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": true,
                "complexType": {
                    "original": "UaiButtonVariant",
                    "resolved": "\"outline\" | \"solid\" | \"text\"",
                    "references": {
                        "UaiButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Visual style of the button. Can be one of:\n'solid', 'outline', 'text'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'solid'"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "Icon rendered before the label. Uses the bds-icon component. Takes precedence over iconLeft."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            },
            "iconLeft": {
                "type": "string",
                "attribute": "icon-left",
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
                    "text": "Icon rendered before the label. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            },
            "iconRight": {
                "type": "string",
                "attribute": "icon-right",
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
                    "text": "Icon rendered after the label. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            },
            "arrow": {
                "type": "boolean",
                "attribute": "arrow",
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
                    "text": "If true, renders an 'arrow-right' icon after the label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "UaiButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "UaiButtonType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the button. Can be one of:\n'button', 'submit', 'reset'. 'submit' and 'reset' act on the enclosing form."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "iconTheme": {
                "type": "string",
                "attribute": "icon-theme",
                "mutable": false,
                "complexType": {
                    "original": "UaiButtonIconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "UaiButtonIconTheme": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonIconTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme of the icons. Can be one of:\n'outline', 'solid'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'outline'"
            },
            "typeIcon": {
                "type": "string",
                "attribute": "type-icon",
                "mutable": false,
                "complexType": {
                    "original": "UaiButtonIconType",
                    "resolved": "\"emoji\" | \"icon\" | \"logo\"",
                    "references": {
                        "UaiButtonIconType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonIconType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the icons. Can be one of:\n'icon', 'logo', 'emoji'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'icon'"
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
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
                    "text": "If true, shows a loading spinner and blocks uaiClick."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "bdsLoadingVariant": {
                "type": "string",
                "attribute": "bds-loading-variant",
                "mutable": false,
                "complexType": {
                    "original": "LoadingSpinnerVariant",
                    "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "LoadingSpinnerVariant": {
                            "location": "import",
                            "path": "../loading-spinner/loading-spinner",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::LoadingSpinnerVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "The spinner follows the button variant and color. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "bdsLoadingColor": {
                "type": "string",
                "attribute": "bds-loading-color",
                "mutable": false,
                "complexType": {
                    "original": "colorsVariants",
                    "resolved": "\"content\" | \"light\" | \"main\" | \"negative\" | \"positive\"",
                    "references": {
                        "colorsVariants": {
                            "location": "import",
                            "path": "../loading-spinner/loading-spinner",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::colorsVariants"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "The spinner follows the button variant and color. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabel": {
                "type": "string",
                "attribute": "aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name of the button. Required when the button has no visible label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
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
                    "text": "Data test is the prop to specifically test the component action object."
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
            "active": {},
            "position": {},
            "direction": {},
            "hasLabel": {}
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
                    "text": "Emitted when the button is activated by click, Enter or Space. Carries the native click event.\nNot emitted while the button is disabled or loading."
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
                    "text": "Sets the active (pressed) state of the button.",
                    "tags": []
                }
            },
            "setPosition": {
                "complexType": {
                    "signature": "(position: UaiButtonPosition) => Promise<void>",
                    "parameters": [{
                            "name": "position",
                            "type": "\"first\" | \"last\" | \"middle\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "UaiButtonPosition": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonPosition"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the position of the button inside a group.",
                    "tags": []
                }
            },
            "setDirection": {
                "complexType": {
                    "signature": "(direction: UaiButtonDirection) => Promise<void>",
                    "parameters": [{
                            "name": "direction",
                            "type": "\"row\" | \"column\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "UaiButtonDirection": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonDirection"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the direction of the group the button belongs to.",
                    "tags": []
                }
            },
            "setSize": {
                "complexType": {
                    "signature": "(size: UaiButtonSize) => Promise<void>",
                    "parameters": [{
                            "name": "size",
                            "type": "\"medium\" | \"large\" | \"short\" | \"compact\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "UaiButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonSize"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the size of the button.",
                    "tags": []
                }
            },
            "setColor": {
                "complexType": {
                    "signature": "(color: UaiButtonColor) => Promise<void>",
                    "parameters": [{
                            "name": "color",
                            "type": "\"content\" | \"positive\" | \"negative\" | \"primary\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "UaiButtonColor": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonColor"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the color of the button.",
                    "tags": []
                }
            },
            "setVariant": {
                "complexType": {
                    "signature": "(variant: UaiButtonVariant) => Promise<void>",
                    "parameters": [{
                            "name": "variant",
                            "type": "\"outline\" | \"solid\" | \"text\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "UaiButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-button/uai-button.tsx",
                            "id": "src/components/uai-button/uai-button.tsx::UaiButtonVariant"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the variant of the button.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "groupIcon",
                "methodName": "warnDeprecated"
            }, {
                "propName": "bdsLoadingVariant",
                "methodName": "warnDeprecated"
            }, {
                "propName": "bdsLoadingColor",
                "methodName": "warnDeprecated"
            }];
    }
}
//# sourceMappingURL=uai-button.js.map
