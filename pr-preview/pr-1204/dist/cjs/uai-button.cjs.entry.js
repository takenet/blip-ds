'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiIcons = require('./uai-icons-B5MxU3JG.js');

const uaiButtonCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;vertical-align:middle}:host(.uai-button--block){display:-ms-flexbox;display:flex;width:100%}:host(.uai-button--group){width:auto}.button{--button-height:var(--uai-control-height-medium, 2.5rem);--button-padding-x:var(--uai-spacing-sm, 0.75rem);--button-radius:var(--uai-radius-lg, 0.75rem);--button-icon-size:var(--uai-sizing-lg, 1.5rem);--button-bg:transparent;--button-bg-hover:var(--button-bg);--button-bg-pressed:var(--button-bg);--button-fg:var(--uai-content-primary, #242729);--button-border:transparent;--button-overlay-hover:transparent;--button-overlay-pressed:transparent;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem);-webkit-box-sizing:border-box;box-sizing:border-box;min-height:var(--button-height);margin:0;padding:0 var(--button-padding-x);border:var(--uai-border-width-default, 1px) solid var(--button-border);border-radius:var(--button-radius);background-color:var(--button-bg);color:var(--button-fg);white-space:nowrap;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.button{-webkit-transition:none;transition:none}}.button::after{content:"";position:absolute;inset:calc(-1 * var(--uai-border-width-default, 1px));border-radius:inherit;background-color:transparent;pointer-events:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.button::after{-webkit-transition:none;transition:none}}.button:hover{background-color:var(--button-bg-hover)}.button:hover::after{background-color:var(--button-overlay-hover)}.button:active,.button.button--active{background-color:var(--button-bg-pressed)}.button:active::after,.button.button--active::after{background-color:var(--button-overlay-pressed)}.button:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.button:disabled{opacity:var(--uai-opacity-disabled, 0.5);cursor:not-allowed}.button:disabled,.button.button--loading{background-color:var(--button-bg)}.button:disabled::after,.button.button--loading::after{background-color:transparent}.button.button--loading{cursor:progress}.button--size-compact{--button-height:var(--uai-control-height-compact, 1.5rem);--button-padding-x:var(--uai-spacing-xs, 0.5rem);--button-radius:var(--uai-radius-md, 0.5rem);--button-icon-size:var(--uai-sizing-sm, 1rem)}.button--size-short{--button-height:var(--uai-control-height-short, 2rem);--button-icon-size:var(--uai-sizing-md, 1.25rem)}.button--size-large{--button-height:var(--uai-control-height-large, 3.5rem);--button-padding-x:var(--uai-spacing-md, 1rem)}.button--icon-only{min-width:var(--button-height);padding:0}.button--solid.button--color-primary{--button-bg:var(--uai-action-primary-default, #242729);--button-bg-hover:var(--uai-action-primary-hover, #181a1b);--button-bg-pressed:var(--uai-action-primary-pressed, #0a0a0a);--button-fg:var(--uai-action-primary-foreground, #ffffff)}.button--solid.button--color-content,.button--solid.button--color-positive,.button--solid.button--color-negative{--button-overlay-hover:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));--button-overlay-pressed:var(--uai-overlay-pressed, rgba(0, 0, 0, 0.16))}.button--solid.button--color-content{--button-bg:var(--uai-content-primary, #242729);--button-fg:var(--uai-surface-background, #f2f3f3)}.button--solid.button--color-positive{--button-bg:var(--uai-action-positive, #047857);--button-fg:var(--uai-action-positive-foreground, #ffffff)}.button--solid.button--color-negative{--button-bg:var(--uai-action-destructive, #cf0022);--button-fg:var(--uai-action-destructive-foreground, #ffffff)}.button--outline,.button--text{--button-bg-hover:var(--uai-action-outline-hover, #f2f3f3);--button-bg-pressed:var(--uai-action-outline-pressed, #e4e6e7)}.button--outline{--button-bg:var(--uai-action-outline-default, #ffffff)}.button--outline.button--color-primary,.button--text.button--color-primary{--button-fg:var(--uai-action-primary-default, #242729)}.button--outline.button--color-content,.button--text.button--color-content{--button-fg:var(--uai-content-primary, #242729)}.button--outline.button--color-positive,.button--text.button--color-positive{--button-fg:var(--uai-feedback-success, #3da329)}.button--outline.button--color-negative,.button--text.button--color-negative{--button-fg:var(--uai-action-destructive, #cf0022)}.button--outline.button--color-primary,.button--outline.button--color-positive,.button--outline.button--color-negative{--button-border:var(--button-fg)}.button--outline.button--color-content{--button-border:var(--uai-border-default, #e4e6e7)}.button--justify-space-between{-ms-flex-pack:justify;justify-content:space-between}.button--position-row-first{border-top-right-radius:0;border-bottom-right-radius:0}.button--position-row-middle,.button--position-column-middle{border-radius:0}.button--position-row-last{border-top-left-radius:0;border-bottom-left-radius:0}.button--position-column-first{border-bottom-left-radius:0;border-bottom-right-radius:0}.button--position-column-last{border-top-left-radius:0;border-top-right-radius:0}.button__typo{--uai-typo-color:currentColor}.button__label{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.button__label--hidden{display:none}.button__group{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.button__icon,.button__spinner{-ms-flex-negative:0;flex-shrink:0;pointer-events:none}.button__icon{--uai-icon-size:var(--button-icon-size);color:inherit}.button__spinner{-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--button-icon-size);height:var(--button-icon-size);border:var(--uai-border-width-thick, 2px) solid currentColor;border-right-color:transparent;border-radius:var(--uai-radius-full, 624.9375rem);-webkit-animation:uai-button-spin var(--uai-duration-loop, 800ms) var(--uai-easing-linear, cubic-bezier(0, 0, 1, 1)) infinite;animation:uai-button-spin var(--uai-duration-loop, 800ms) var(--uai-easing-linear, cubic-bezier(0, 0, 1, 1)) infinite}@media (prefers-reduced-motion: reduce){.button__spinner{-webkit-animation:none;animation:none}}@-webkit-keyframes uai-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uai-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}`;

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
    }
    componentWillLoad() {
        this.warnDeprecated();
        this.updateHasLabel();
    }
    componentDidLoad() {
        if (!hasThemeRoot(this.el)) {
            uaiIcons.warnOnce('uai-button', 'theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
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
        uaiIcons.warnOnce('uai-button', `icon:${theme}:${this.typeIcon}:${name}`, `"${name}" is not in the UAI icon set (theme "${theme}", type "${this.typeIcon}"). Falling back to the legacy bds-icon, which is deprecated here.`);
        return (index.h("bds-icon", { class: classes, name: name, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: ICON_SIZE[size], "aria-hidden": "true" }));
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
            uaiIcons.warnOnce('uai-button', 'icon-only-accessible-name', 'Icon-only buttons require an aria-label.');
        }
        const left = this.loading ? (index.h("span", { class: "button__spinner", "aria-hidden": "true" })) : leftIconName ? (this.renderIcon(leftIconName, size, 'left')) : null;
        const right = rightIconName && !(iconOnly && this.loading) ? this.renderIcon(rightIconName, size, 'right') : null;
        const label = (index.h("span", { key: 'bd39af4fc8dee1c43fa5a054093bfd07de4acf83', class: { button__label: true, 'button__label--hidden': !this.hasLabel } }, index.h("uai-typo", { key: 'e39f136dd648e70abf3960edbacf38d0fda098c7', class: "button__typo", tag: "span", variant: size === 'compact' ? 'caption' : 'body-base', bold: "medium", margin: false, noWrap: true }, index.h("slot", { key: '07a400e275ff0983b04b83945f0931b77dc2ee5c', onSlotchange: this.updateHasLabel }))));
        const grouped = this.groupIcon && justify === 'space-between' && left;
        return (index.h(index.Host, { key: '9afa9bebc295a97831481594008e8b5972dfdaf0', class: {
                'uai-button--block': this.block || this.fullWidth,
                'uai-button--group': !!this.position,
            } }, index.h("button", { key: '9841dc0aa47a1d81ac6358bba767031ed14d3705', class: {
                button: true,
                [`button--${variant}`]: true,
                [`button--color-${color}`]: true,
                [`button--size-${size}`]: true,
                [`button--justify-${justify}`]: true,
                [`button--position-${this.direction}-${this.position}`]: !!this.position,
                'button--icon-only': iconOnly,
                'button--active': !!this.active,
                'button--loading': this.loading,
            }, part: "button", type: "button", disabled: this.disabled, "aria-disabled": this.loading ? 'true' : undefined, "aria-busy": this.loading ? 'true' : undefined, "aria-label": this.ariaLabel || undefined, "aria-pressed": this.active === undefined ? undefined : String(this.active), "data-test": this.dataTest, onClick: this.handleClick }, grouped ? (index.h("span", { class: "button__group" }, left, label)) : ([left, label]), right)));
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

exports.uai_button = UaiButton;
