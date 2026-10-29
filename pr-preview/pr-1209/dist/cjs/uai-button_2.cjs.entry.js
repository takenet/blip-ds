'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiIcons = require('./uai-icons-CNosT5AB.js');
var deprecation = require('./deprecation-DQqFZBv-.js');
var escapeHtml = require('./escape-html-B45RAHsl.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');

const uaiButtonCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;vertical-align:middle}:host(.uai-button--block){display:-ms-flexbox;display:flex;width:100%}:host(.uai-button--group){width:auto}.button{--button-height:var(--uai-control-height-medium, 2.5rem);--button-padding-x:var(--uai-spacing-sm, 0.75rem);--button-radius:var(--uai-radius-lg, 0.75rem);--button-icon-size:var(--uai-sizing-lg, 1.5rem);--button-bg:transparent;--button-bg-hover:var(--button-bg);--button-bg-pressed:var(--button-bg);--button-fg:var(--uai-content-primary, #242729);--button-border:transparent;--button-overlay-hover:transparent;--button-overlay-pressed:transparent;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;min-height:var(--button-height);margin:0;padding:0 var(--button-padding-x);border:var(--uai-border-width-default, 1px) solid var(--button-border);border-radius:var(--button-radius);background-color:var(--button-bg);color:var(--button-fg);white-space:nowrap;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.button{-webkit-transition:none;transition:none}}.button::after{content:"";position:absolute;inset:calc(-1 * var(--uai-border-width-default, 1px));border-radius:inherit;background-color:transparent;pointer-events:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.button::after{-webkit-transition:none;transition:none}}.button:hover{background-color:var(--button-bg-hover)}.button:hover::after{background-color:var(--button-overlay-hover)}.button:active,.button.button--active{background-color:var(--button-bg-pressed)}.button:active::after,.button.button--active::after{background-color:var(--button-overlay-pressed)}.button:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.button:disabled{opacity:var(--uai-opacity-disabled, 0.5);cursor:not-allowed}.button:disabled,.button.button--loading{background-color:var(--button-bg)}.button:disabled::after,.button.button--loading::after{background-color:transparent}.button.button--loading{cursor:progress}.button--size-compact{--button-height:var(--uai-control-height-compact, 1.5rem);--button-padding-x:var(--uai-spacing-xs, 0.5rem);--button-radius:var(--uai-radius-md, 0.5rem);--button-icon-size:var(--uai-sizing-sm, 1rem)}.button--size-short{--button-height:var(--uai-control-height-short, 2rem);--button-icon-size:var(--uai-sizing-md, 1.25rem)}.button--size-large{--button-height:var(--uai-control-height-large, 3.5rem);--button-padding-x:var(--uai-spacing-md, 1rem)}.button--icon-only{min-width:var(--button-height);padding:0}.button--solid.button--color-primary{--button-bg:var(--uai-action-primary-default, #242729);--button-bg-hover:var(--uai-action-primary-hover, #181a1b);--button-bg-pressed:var(--uai-action-primary-pressed, #0a0a0a);--button-fg:var(--uai-action-primary-foreground, #ffffff)}.button--solid.button--color-content,.button--solid.button--color-positive,.button--solid.button--color-negative{--button-overlay-hover:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));--button-overlay-pressed:var(--uai-overlay-pressed, rgba(0, 0, 0, 0.16))}.button--solid.button--color-content{--button-bg:var(--uai-content-primary, #242729);--button-fg:var(--uai-surface-background, #f2f3f3)}.button--solid.button--color-positive{--button-bg:var(--uai-action-positive, #047857);--button-fg:var(--uai-action-positive-foreground, #ffffff)}.button--solid.button--color-negative{--button-bg:var(--uai-action-destructive, #cf0022);--button-fg:var(--uai-action-destructive-foreground, #ffffff)}.button--outline,.button--text{--button-bg-hover:var(--uai-action-outline-hover, #f2f3f3);--button-bg-pressed:var(--uai-action-outline-pressed, #e4e6e7)}.button--outline{--button-bg:var(--uai-action-outline-default, #ffffff)}.button--outline.button--color-primary,.button--text.button--color-primary{--button-fg:var(--uai-action-primary-default, #242729)}.button--outline.button--color-content,.button--text.button--color-content{--button-fg:var(--uai-content-primary, #242729)}.button--outline.button--color-positive,.button--text.button--color-positive{--button-fg:var(--uai-feedback-success, #3da329)}.button--outline.button--color-negative,.button--text.button--color-negative{--button-fg:var(--uai-action-destructive, #cf0022)}.button--outline.button--color-primary,.button--outline.button--color-positive,.button--outline.button--color-negative{--button-border:var(--button-fg)}.button--outline.button--color-content{--button-border:var(--uai-border-default, #e4e6e7)}.button--justify-space-between{-ms-flex-pack:justify;justify-content:space-between}.button--position-row-first{border-top-right-radius:0;border-bottom-right-radius:0}.button--position-row-middle,.button--position-column-middle{border-radius:0}.button--position-row-last{border-top-left-radius:0;border-bottom-left-radius:0}.button--position-column-first{border-bottom-left-radius:0;border-bottom-right-radius:0}.button--position-column-last{border-top-left-radius:0;border-top-right-radius:0}.button__typo{--uai-typo-color:currentColor}.button__label{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.button__label--hidden{display:none}.button__group{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.button__icon,.button__spinner{-ms-flex-negative:0;flex-shrink:0;pointer-events:none}.button__icon{--uai-icon-size:var(--button-icon-size);color:inherit}.button__spinner{-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--button-icon-size);height:var(--button-icon-size);border:var(--uai-border-width-thick, 2px) solid currentColor;border-right-color:transparent;border-radius:var(--uai-radius-full, 624.9375rem);-webkit-animation:uai-button-spin var(--uai-duration-loop, 800ms) var(--uai-easing-linear, cubic-bezier(0, 0, 1, 1)) infinite;animation:uai-button-spin var(--uai-duration-loop, 800ms) var(--uai-easing-linear, cubic-bezier(0, 0, 1, 1)) infinite}@media (prefers-reduced-motion: reduce){.button__spinner{-webkit-animation:none;animation:none}}@-webkit-keyframes uai-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uai-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}`;

const VARIANTS = ['solid', 'outline', 'text'];
const COLORS = ['primary', 'content', 'negative', 'positive'];
const SIZES$1 = ['compact', 'short', 'medium', 'large'];
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
const UaiButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiClick = index.createEvent(this, "uaiClick");
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
         * Expansion state of a controlled panel. Use on disclosure actions; pair with an overlay; avoid on unrelated buttons.
         */
        this.ariaExpanded = null;
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
     * Focuses the native button. Use to restore keyboard focus; pair with overlays; avoid accessing the button Shadow DOM.
     */
    async setFocus() {
        var _a, _b;
        (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button')) === null || _b === void 0 ? void 0 : _b.focus();
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
    }
    componentWillLoad() {
        this.warnDeprecated();
        this.updateHasLabel();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            deprecation.warnOnce('uai-button', 'theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
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
        if (this.typeIcon === 'icon' && uaiIcons.isUaiIcon(theme, name)) {
            return index.h("uai-icon", { class: classes, name: name, theme: theme, "aria-hidden": "true" });
        }
        deprecation.warnOnce('uai-button', `icon:${theme}:${this.typeIcon}:${name}`, `"${name}" is not in the UAI icon set (theme "${theme}", type "${this.typeIcon}"). Falling back to the legacy bds-icon, which is deprecated here.`);
        return (index.h("bds-icon", { class: classes, name: name, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: ICON_SIZE[size], "aria-hidden": "true" }));
    }
    render() {
        const variant = supported('variant', this.variant, VARIANTS, 'solid');
        const color = supported('color', this.color, COLORS, 'primary');
        const size = supported('size', this.size, SIZES$1, 'medium');
        const justify = supported('justifyContent', this.justifyContent, JUSTIFY, 'center');
        const leftIconName = this.icon || this.iconLeft;
        const rightIconName = this.arrow ? 'arrow-right' : this.iconRight;
        const iconOnly = !this.hasLabel && !!(leftIconName || rightIconName);
        if (iconOnly && !this.ariaLabel) {
            deprecation.warnOnce('uai-button', 'icon-only-accessible-name', 'Icon-only buttons require an aria-label.');
        }
        const left = this.loading ? (index.h("span", { class: "button__spinner", "aria-hidden": "true" })) : leftIconName ? (this.renderIcon(leftIconName, size, 'left')) : null;
        const right = rightIconName && !(iconOnly && this.loading) ? this.renderIcon(rightIconName, size, 'right') : null;
        const label = (index.h("span", { key: 'ad72ae3cf22fc257a2ca05c83eeb0dc0e289bc51', class: { button__label: true, 'button__label--hidden': !this.hasLabel } }, index.h("uai-typo", { key: 'fb02017b7617364e36b0a00ae13a7feffb1533e8', class: "button__typo", tag: "span", variant: size === 'compact' ? 'caption' : 'body-base', bold: "medium", margin: false, noWrap: true }, index.h("slot", { key: '36995fbe630f1b8b5d31b7460a3a71feff582aa0', onSlotchange: this.updateHasLabel }))));
        const grouped = this.groupIcon && justify === 'space-between' && left;
        return (index.h(index.Host, { key: 'dc4a0b406e08c952c0726ba7fa610e2799e80720', class: {
                'uai-button--block': this.block || this.fullWidth,
                'uai-button--group': !!this.position,
            } }, index.h("button", { key: 'ac8233818cbbb15b0f359cddda31dab7c6a4fd54', class: {
                button: true,
                [`button--${variant}`]: true,
                [`button--color-${color}`]: true,
                [`button--size-${size}`]: true,
                [`button--justify-${justify}`]: true,
                [`button--position-${this.direction}-${this.position}`]: !!this.position,
                'button--icon-only': iconOnly,
                'button--active': !!this.active,
                'button--loading': this.loading,
            }, part: "button", type: "button", disabled: this.disabled, "aria-disabled": this.loading ? 'true' : undefined, "aria-busy": this.loading ? 'true' : undefined, "aria-label": this.ariaLabel || undefined, "aria-expanded": this.ariaExpanded, "aria-pressed": this.active === undefined ? undefined : String(this.active), "data-test": this.dataTest, onClick: this.handleClick }, grouped ? (index.h("span", { class: "button__group" }, left, label)) : ([left, label]), right)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "groupIcon": [{
                "warnDeprecated": 0
            }],
        "bdsLoadingVariant": [{
                "warnDeprecated": 0
            }],
        "bdsLoadingColor": [{
                "warnDeprecated": 0
            }]
    }; }
};
UaiButton.style = uaiButtonCss();

const uaiInputCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-width, 100%)}:host(.uai-input--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input--disabled):not(.uai-input--readonly):not(.uai-input--danger):not(.uai-input--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input--disabled) .input__control{cursor:not-allowed}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.input__native[type=number]{-moz-appearance:textfield}.input__native::-webkit-inner-spin-button,.input__native::-webkit-outer-spin-button,.input__native::-webkit-search-cancel-button,.input__native::-webkit-search-decoration{margin:0;-webkit-appearance:none;appearance:none}.input__icon{-ms-flex:none;flex:none;color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.input__counter{--uai-typo-color:currentColor;-ms-flex:none;flex:none;color:var(--uai-content-secondary, #5f676d)}.input__counter--warning{color:var(--uai-feedback-warning, #ff8000)}.input__counter--delete{color:var(--uai-feedback-error, #cf0022)}:host(.uai-input--disabled) .input__counter{color:var(--uai-content-disabled, #848e94)}`;

const TYPES = ['text', 'email', 'number', 'search'];
const SIZES = ['short', 'medium'];
// Legacy types keep working with the native type until their specialized UAI component exists.
const LEGACY_TYPES = {
    password: { native: 'password', replacement: 'uai-input-password' },
    phonenumber: { native: 'tel', replacement: 'uai-input-phone' },
    date: { native: 'date', replacement: 'uai-input-date or uai-datepicker' },
};
// bds-input props with no place in the standard field: accepted, with a one-time warning (D-6).
const LEGACY_PROPS = [
    ['isTextarea', 'Use uai-textarea for multiline text.'],
    ['rows', 'Use uai-textarea for multiline text.'],
    ['cols', 'Use uai-textarea for multiline text.'],
    ['autoResize', 'Use uai-textarea for multiline text.'],
    ['resizable', 'Use uai-textarea for multiline text.'],
    ['minHeight', 'Use uai-textarea for multiline text.'],
    ['maxHeight', 'Use uai-textarea for multiline text.'],
    ['chips', 'Use uai-input-chips.'],
    ['iconSize', 'The icon size follows the field.'],
    ['debounceDelay', undefined],
];
const VALIDITY_FLAGS = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooLong',
    'tooShort',
    'rangeUnderflow',
    'rangeOverflow',
    'stepMismatch',
    'badInput',
];
let instances = 0;
const UaiInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiInput = index.createEvent(this, "uaiInput");
        this.uaiOnBlur = index.createEvent(this, "uaiOnBlur");
        this.uaiFocus = index.createEvent(this, "uaiFocus");
        this.uaiSubmit = index.createEvent(this, "uaiSubmit");
        this.uaiPatternValidation = index.createEvent(this, "uaiPatternValidation");
        this.uaiKeyDownBackspace = index.createEvent(this, "uaiKeyDownBackspace");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.validationDanger = false;
        this.validationText = '';
        this.disabledByForm = false;
        this.defaultValue = '';
        this.id = `uai-input-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Kind of text. Can be one of: 'text' (default), 'email', 'number', 'search'.
         * 'password', 'phonenumber' and 'date' still work but are deprecated: use the specialized UAI inputs.
         */
        this.type = 'text';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * Label shown above the field. Without a visible label, set aria-label.
         */
        this.label = '';
        /**
         * Example of the expected text, shown while the field is empty. Do not use it as the label.
         */
        this.placeholder = '';
        /**
         * Automatic capitalization on virtual keyboards. Can be one of: 'off' (default), 'none', 'words', 'on', 'sentences', 'characters'.
         */
        this.autoCapitalize = 'off';
        /**
         * Browser autofill hint. Can be one of: 'off' (default), 'on', 'current-password', 'new-password', 'username'.
         */
        this.autoComplete = 'off';
        /**
         * If true, the value can be selected and copied but not edited. It looks like the default state.
         */
        this.readonly = false;
        /**
         * Message below the field that helps to fill it.
         */
        this.helperMessage = '';
        /**
         * Message below the field while danger is true.
         */
        this.errorMessage = '';
        /**
         * Message below the field while success is true.
         */
        this.successMessage = '';
        /**
         * UaiIcon name shown before the text, for example "search".
         */
        this.icon = '';
        /**
         * If true, the field cannot be focused or edited and is left out of the form data.
         */
        this.disabled = false;
        /**
         * If true, shows the error state and errorMessage. Has priority over success.
         */
        this.danger = false;
        /**
         * If true, shows the success state and successMessage.
         */
        this.success = false;
        /**
         * Current text of the field.
         */
        this.value = '';
        /**
         * If true, shows the number of characters typed and maxlength.
         */
        this.counterLength = false;
        /**
         * Ranges of remaining characters that color the counter: warning (feedback/warning) and delete (feedback/error).
         */
        this.counterLengthRule = null;
        /**
         * If true, Enter clears the field after emitting uaiSubmit and does not submit the form (for chat-like fields).
         */
        this.isSubmit = false;
        /**
         * If true, uaiChange emits the value with HTML special characters escaped.
         */
        this.encode = false;
        /**
         * Accessible name of the field when there is no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        this.onInput = (event) => {
            var _a;
            this.value = event.target.value;
            if (this.type === 'email' && ((_a = this.nativeInput.validity) === null || _a === void 0 ? void 0 : _a.typeMismatch))
                this.showValidation(true);
            this.uaiInput.emit(event);
        };
        this.onBlur = () => {
            if (this.pattern)
                this.uaiPatternValidation.emit(new RegExp(this.pattern).test(this.nativeInput.value));
            this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'Enter') {
                if (event.isComposing)
                    return;
                this.uaiSubmit.emit({ event, value: this.value });
                if (this.isSubmit) {
                    event.preventDefault();
                    this.value = '';
                    return;
                }
                if (!event.defaultPrevented)
                    (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
            }
            else if (event.key === 'Backspace' || event.key === 'Delete') {
                this.uaiKeyDownBackspace.emit({ event, value: this.value });
            }
        };
        // Clicks on the field box (outside slotted content) focus the native input, as clicking a native field does.
        this.onControlClick = (event) => {
            var _a;
            if (!this.el.contains(event.target))
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }
    /**
     * Moves the focus to the field.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Removes the focus from the field.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Returns the native input element.
     */
    async getInputElement() {
        return this.nativeInput;
    }
    /**
     * Returns true when the value meets required, minlength, maxlength, min, max, pattern and type.
     */
    async isValid() {
        return this.nativeInput ? this.nativeInput.validity.valid : true;
    }
    /**
     * Clears the value.
     */
    async clear() {
        this.value = '';
    }
    // The browser reads the host name attribute for the form data; inputName fills it when name is not set.
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(value);
        this.uaiChange.emit({ value: this.encode ? escapeHtml.escapeHtml(value) : value });
    }
    // Native form validation of the host (submit or checkValidity) shows the error state.
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.defaultValue = this.value || '';
        this.inputNameChanged();
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new uaiFormControl.UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue,
                onReset: (value) => {
                    this.validationDanger = false;
                    this.value = value;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                    });
                },
            });
        }
        this.warnLegacyUsage();
    }
    componentDidRender() {
        if (this.nativeInput && this.nativeInput.value !== (this.value || '')) {
            this.nativeInput.value = this.value || '';
        }
        this.syncValidity();
    }
    formResetCallback() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
    }
    formDisabledCallback(disabled) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setDisabled(disabled);
    }
    formStateRestoreCallback(state) {
        if (typeof state === 'string')
            this.value = state;
    }
    warnLegacyUsage() {
        for (const [prop, hint] of LEGACY_PROPS) {
        }
    }
    get nativeType() {
        if (TYPES.includes(this.type))
            return this.type;
        const legacy = LEGACY_TYPES[this.type];
        if (legacy)
            return legacy.native;
        return 'text';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'medium';
    }
    // Message for the first failing constraint: the contract prop or, without it, the browser message.
    messageFor(validity) {
        const native = this.nativeInput.validationMessage;
        if (validity.valueMissing)
            return this.requiredErrorMessage || native;
        if (validity.tooShort)
            return this.minlengthErrorMessage || native;
        if (validity.rangeUnderflow)
            return this.minErrorMessage || native;
        if (validity.rangeOverflow)
            return this.maxErrorMessage || native;
        if (validity.typeMismatch && this.type === 'email')
            return this.emailErrorMessage || native;
        if (validity.badInput && this.type === 'number')
            return this.numberErrorMessage || native;
        return native;
    }
    syncValidity() {
        if (!this.nativeInput || !this.formControl)
            return;
        const validity = this.nativeInput.validity;
        if (!validity)
            return;
        const flags = {};
        for (const flag of VALIDITY_FLAGS)
            if (validity[flag])
                flags[flag] = true;
        this.formControl.setValidity(flags, validity.valid ? '' : this.messageFor(validity), this.nativeInput);
        if (this.validationDanger)
            this.showValidation(!validity.valid);
    }
    showValidation(show) {
        var _a;
        const validity = (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.validity;
        const danger = show && !!validity && !validity.valid;
        const text = danger ? this.messageFor(validity) : '';
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
        if (text !== this.validationText)
            this.validationText = text;
    }
    counterState(length) {
        const rule = this.counterLengthRule;
        if (!rule || !this.maxlength)
            return null;
        const remaining = this.maxlength - length;
        if (rule.delete && remaining <= rule.delete.max)
            return 'delete';
        if (rule.warning && remaining >= rule.warning.min && remaining <= rule.warning.max)
            return 'warning';
        return null;
    }
    render() {
        const disabled = this.disabled || this.disabledByForm;
        const invalid = this.danger || this.validationDanger;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || this.validationText
            : this.validationDanger
                ? this.validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const length = (this.value || '').length;
        const counterState = this.counterState(length);
        const describedBy = [message && `${this.id}-message`, this.counterLength && `${this.id}-counter`]
            .filter(Boolean)
            .join(' ');
        return (index.h(index.Host, { key: '6b10011c15e5ed622569add9fc903c00815ac4a6', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input--size-${this.sizeValue}`]: true,
                'uai-input--danger': invalid,
                'uai-input--success': success,
                'uai-input--disabled': disabled,
                'uai-input--readonly': this.readonly && !disabled,
            } }, index.h("div", { key: '9e5a7d1232dc183560adddabf99b01bdd361f348', class: "input" }, this.label && (index.h("label", { key: '2e77b2c170e9be7242fe84a730daf6d942a4ff70', class: "input__label", for: this.id }, index.h("uai-typo", { key: 'b8e1e807ee8f2daed407fc1fdea11a9794f5eebc', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), index.h("div", { key: 'b954d035187973b79bbdbd9983e3a38b36a64dd4', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && index.h("uai-icon", { key: '33a8afd19e207b43c0476ed38504d9d2811e9eac', class: "input__icon", name: this.icon, size: "medium" }), index.h("slot", { key: '00f7e6749b4be6240125f2e7b40ee764786125b3', name: "input-left" }), index.h("div", { key: 'ed52b4c662949b815e8ef8dfc97f8efd19223229', class: "input__field" }, index.h("slot", { key: 'ac91b03474d0b150f09b36ccb6e3b71cd4a21679', name: "inside-input-left" }), index.h("input", { key: '5bfda1d7eb883ac5fb601ef724114f4fbb8195dc', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: this.nativeType, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, pattern: this.pattern, value: this.value || '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), this.counterLength && (index.h("uai-typo", { key: 'c530f168fd563afa5053582e3cda74b842040b3a', id: `${this.id}-counter`, class: { input__counter: true, [`input__counter--${counterState}`]: !!counterState }, variant: "caption", tag: "span", margin: false }, this.maxlength ? `${length}/${this.maxlength}` : `${length}`)), invalid && index.h("uai-icon", { key: '47c08c4d5daad552abfacaaa94516b1d23621797', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && index.h("uai-icon", { key: '7ebe50e02a6a0b47805fa4e28f93b5c918dac832', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), index.h("slot", { key: 'e2ff1bc829ea283898fb334088336151dd1fd231', name: "input-right" })), message && (index.h("div", { key: 'ec47b080f1daba0f30e49dde04396bc9a8d2439a', id: `${this.id}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: '43568d6a15cb5cac78afffb2f1786b1336edfd79', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "inputName": [{
                "inputNameChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UaiInput.style = uaiInputCss();

exports.uai_button = UaiButton;
exports.uai_input = UaiInput;
