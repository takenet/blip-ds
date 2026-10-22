import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-R_xz97kF.js';

const uaiButtonCss = ":host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;vertical-align:middle}:host(.uai-button--block){display:-ms-flexbox;display:flex;width:100%}:host(.uai-button--group){width:auto}.button{--button-height:var(--uai-spacing-2xl);--button-padding-x:var(--uai-spacing-sm);--button-radius:var(--uai-radius-lg);--button-icon-size:var(--uai-sizing-lg);--button-font-size:var(--uai-body-base-font-size);--button-line-height:var(--uai-body-base-line-height);--button-font-weight:var(--uai-font-weight-medium);--button-bg:transparent;--button-bg-hover:var(--button-bg);--button-bg-pressed:var(--button-bg);--button-fg:var(--uai-content-primary);--button-border:transparent;--button-overlay-hover:transparent;--button-overlay-pressed:transparent;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs);-webkit-box-sizing:border-box;box-sizing:border-box;min-height:var(--button-height);margin:0;padding:0 var(--button-padding-x);border:var(--uai-border-width-default) solid var(--button-border);border-radius:var(--button-radius);background-color:var(--button-bg);color:var(--button-fg);font-family:var(--uai-font-family-sans), \"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:var(--button-font-size);font-weight:var(--button-font-weight);line-height:var(--button-line-height);letter-spacing:var(--uai-letter-spacing-normal);white-space:nowrap;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;-webkit-transition:background-color 150ms ease, border-color 150ms ease, color 150ms ease;transition:background-color 150ms ease, border-color 150ms ease, color 150ms ease}.button::after{content:\"\";position:absolute;inset:calc(-1 * var(--uai-border-width-default));border-radius:inherit;background-color:transparent;pointer-events:none;-webkit-transition:background-color 150ms ease;transition:background-color 150ms ease}.button:hover{background-color:var(--button-bg-hover)}.button:hover::after{background-color:var(--button-overlay-hover)}.button:active,.button.button--active{background-color:var(--button-bg-pressed)}.button:active::after,.button.button--active::after{background-color:var(--button-overlay-pressed)}.button:focus-visible{outline:var(--uai-border-width-thick) solid var(--uai-border-ring);outline-offset:var(--uai-spacing-3xs)}.button:disabled{opacity:0.5;cursor:not-allowed}.button:disabled,.button.button--loading{background-color:var(--button-bg)}.button:disabled::after,.button.button--loading::after{background-color:transparent}.button.button--loading{cursor:progress}.button--size-compact{--button-height:var(--uai-spacing-lg);--button-padding-x:var(--uai-spacing-xs);--button-radius:var(--uai-radius-md);--button-icon-size:var(--uai-sizing-sm);--button-font-size:var(--uai-caption-font-size);--button-line-height:var(--uai-caption-line-height);--button-font-weight:var(--uai-font-weight-medium)}.button--size-short{--button-height:var(--uai-spacing-xl);--button-icon-size:var(--uai-sizing-md)}.button--size-large{--button-height:var(--uai-spacing-4xl);--button-padding-x:var(--uai-spacing-md)}.button--icon-only{min-width:var(--button-height);padding:0}.button--solid.button--color-primary{--button-bg:var(--uai-action-primary-default);--button-bg-hover:var(--uai-action-primary-hover);--button-bg-pressed:var(--uai-action-primary-pressed);--button-fg:var(--uai-action-primary-foreground)}.button--solid.button--color-content,.button--solid.button--color-positive,.button--solid.button--color-negative{--button-overlay-hover:var(--uai-overlay-hover);--button-overlay-pressed:var(--uai-overlay-pressed)}.button--solid.button--color-content{--button-bg:var(--uai-content-primary);--button-fg:var(--uai-surface-background)}.button--solid.button--color-positive{--button-bg:var(--uai-feedback-success);--button-fg:var(--uai-fixed-bright)}.button--solid.button--color-negative{--button-bg:var(--uai-action-destructive);--button-fg:var(--uai-action-destructive-foreground)}.button--outline,.button--text{--button-bg-hover:var(--uai-action-outline-hover);--button-bg-pressed:var(--uai-action-outline-pressed)}.button--outline{--button-bg:var(--uai-action-outline-default)}.button--outline.button--color-primary,.button--text.button--color-primary{--button-fg:var(--uai-action-primary-default)}.button--outline.button--color-content,.button--text.button--color-content{--button-fg:var(--uai-content-primary)}.button--outline.button--color-positive,.button--text.button--color-positive{--button-fg:var(--uai-feedback-success)}.button--outline.button--color-negative,.button--text.button--color-negative{--button-fg:var(--uai-action-destructive)}.button--outline.button--color-primary,.button--outline.button--color-positive,.button--outline.button--color-negative{--button-border:var(--button-fg)}.button--outline.button--color-content{--button-border:var(--uai-border-default)}.button--justify-space-between{-ms-flex-pack:justify;justify-content:space-between}.button--position-row-first{border-top-right-radius:0;border-bottom-right-radius:0}.button--position-row-middle,.button--position-column-middle{border-radius:0}.button--position-row-last{border-top-left-radius:0;border-bottom-left-radius:0}.button--position-column-first{border-bottom-left-radius:0;border-bottom-right-radius:0}.button--position-column-last{border-top-left-radius:0;border-top-right-radius:0}.button__label{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.button__label--hidden{display:none}.button__group{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs)}.button__icon,.button__spinner{-ms-flex-negative:0;flex-shrink:0;pointer-events:none}.button__icon{color:inherit}.button__spinner{-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--button-icon-size);height:var(--button-icon-size);border:var(--uai-border-width-thick) solid currentColor;border-right-color:transparent;border-radius:var(--uai-radius-full);-webkit-animation:uai-button-spin 800ms linear infinite;animation:uai-button-spin 800ms linear infinite}@-webkit-keyframes uai-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uai-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.button,.button::after{-webkit-transition:none;transition:none}.button__spinner{-webkit-animation-duration:2400ms;animation-duration:2400ms}}";

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
const warnings = new Set();
const warnOnce = (key, message) => {
    if (warnings.has(key))
        return;
    warnings.add(key);
    console.warn(`[uai-button] ${message}`);
};
const supported = (prop, value, allowed, fallback) => {
    if (allowed.includes(value))
        return value;
    warnOnce(`${prop}:${value}`, `Unsupported ${prop} "${value}". Using "${fallback}".`);
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
const UaiButton$1 = /*@__PURE__*/ proxyCustomElement(class UaiButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.uaiClick = createEvent(this, "uaiClick");
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
         * 'compact' (24px), 'short' (32px), 'medium' (40px), 'large' (56px).
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
            warnOnce('groupIcon', '"groupIcon" is deprecated. Put the left icon and the label together in the default slot.');
        }
        if (this.bdsLoadingVariant !== undefined) {
            warnOnce('bdsLoadingVariant', '"bdsLoadingVariant" is deprecated and has no effect.');
        }
        if (this.bdsLoadingColor !== undefined) {
            warnOnce('bdsLoadingColor', '"bdsLoadingColor" is deprecated and has no effect.');
        }
    }
    componentWillLoad() {
        this.warnDeprecated();
        this.updateHasLabel();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            warnOnce('theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
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
        return (h("bds-icon", { class: { button__icon: true, [`button__icon--${position}`]: true }, name: name, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: ICON_SIZE[size], "aria-hidden": "true" }));
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'solid');
        const color = supported('color', this.color, COLORS, 'primary');
        const size = supported('size', this.size, SIZES, 'medium');
        const justify = supported('justifyContent', this.justifyContent, JUSTIFY, 'center');
        const leftIconName = this.icon || this.iconLeft;
        const rightIconName = this.arrow ? 'arrow-right' : this.iconRight;
        const iconOnly = !this.hasLabel && !!(leftIconName || rightIconName);
        const left = this.loading ? (h("span", { class: "button__spinner", "aria-hidden": "true" })) : leftIconName ? (this.renderIcon(leftIconName, size, 'left')) : null;
        const right = rightIconName && !(iconOnly && this.loading) ? this.renderIcon(rightIconName, size, 'right') : null;
        const label = (h("span", { key: 'f3138fe5562c5a093c389461c854d12acd27ca0b', class: { button__label: true, 'button__label--hidden': !this.hasLabel } }, h("slot", { key: 'e836fac19ad76fa2fc9bd392405a6dc330ad4c05', onSlotchange: this.updateHasLabel })));
        const grouped = this.groupIcon && justify === 'space-between' && left;
        return (h(Host, { key: 'f4eb3738c2cd6b4df20992ca6eb5105835eaae33', class: {
                'uai-button--block': this.block || this.fullWidth,
                'uai-button--group': !!this.position,
            } }, h("button", { key: 'd88b0a6e363742172dad5521e41461126c100d0e', class: {
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
    get el() { return this; }
    static get watchers() { return {
        "groupIcon": ["warnDeprecated"],
        "bdsLoadingVariant": ["warnDeprecated"],
        "bdsLoadingColor": ["warnDeprecated"]
    }; }
    static get style() { return uaiButtonCss; }
}, [1, "uai-button", {
        "block": [4],
        "fullWidth": [4, "full-width"],
        "justifyContent": [1, "justify-content"],
        "groupIcon": [4, "group-icon"],
        "disabled": [4],
        "color": [1025],
        "size": [1025],
        "variant": [1025],
        "icon": [513],
        "iconLeft": [513, "icon-left"],
        "iconRight": [513, "icon-right"],
        "arrow": [4],
        "type": [1],
        "iconTheme": [513, "icon-theme"],
        "typeIcon": [513, "type-icon"],
        "loading": [4],
        "bdsLoadingVariant": [1, "bds-loading-variant"],
        "bdsLoadingColor": [1, "bds-loading-color"],
        "ariaLabel": [1, "aria-label"],
        "dataTest": [1, "data-test"],
        "active": [32],
        "position": [32],
        "direction": [32],
        "hasLabel": [32],
        "isActive": [64],
        "setPosition": [64],
        "setDirection": [64],
        "setSize": [64],
        "setColor": [64],
        "setVariant": [64]
    }, undefined, {
        "groupIcon": ["warnDeprecated"],
        "bdsLoadingVariant": ["warnDeprecated"],
        "bdsLoadingColor": ["warnDeprecated"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["uai-button", "bds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "uai-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, UaiButton$1);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const UaiButton = UaiButton$1;
const defineCustomElement = defineCustomElement$1;

export { UaiButton, defineCustomElement };
//# sourceMappingURL=uai-button.js.map

//# sourceMappingURL=uai-button.js.map