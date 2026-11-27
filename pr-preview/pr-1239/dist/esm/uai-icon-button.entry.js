import { r as registerInstance, c as createEvent, t as transformTag, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';

const uaiIconButtonCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;vertical-align:middle}.icon-button{--icon-button-icon-size:var(--uai-sizing-lg, 1.5rem);--icon-button-bg:transparent;--icon-button-bg-hover:var(--icon-button-bg);--icon-button-bg-pressed:var(--icon-button-bg);--icon-button-fg:var(--uai-content-primary, #242729);--icon-button-border:transparent;--icon-button-overlay-hover:transparent;--icon-button-overlay-pressed:transparent;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);margin:0;padding:0;border:var(--uai-border-width-default, 1px) solid var(--icon-button-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--icon-button-bg);color:var(--icon-button-fg);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.icon-button{-webkit-transition:none;transition:none}}.icon-button::after{content:"";position:absolute;inset:calc(-1 * var(--uai-border-width-default, 1px));border-radius:inherit;background-color:transparent;pointer-events:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.icon-button::after{-webkit-transition:none;transition:none}}.icon-button:hover{background-color:var(--icon-button-bg-hover)}.icon-button:hover::after{background-color:var(--icon-button-overlay-hover)}.icon-button:active,.icon-button.active,.icon-button.icon-button--active{background-color:var(--icon-button-bg-pressed)}.icon-button:active::after,.icon-button.active::after,.icon-button.icon-button--active::after{background-color:var(--icon-button-overlay-pressed)}.icon-button:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.icon-button:disabled{opacity:var(--uai-opacity-disabled, 0.5);cursor:not-allowed}.icon-button:disabled,.icon-button.icon-button--loading{background-color:var(--icon-button-bg)}.icon-button:disabled::after,.icon-button.icon-button--loading::after{background-color:transparent}.icon-button.icon-button--loading{cursor:progress}.icon-button--size-compact{--icon-button-icon-size:var(--uai-sizing-sm, 1rem);width:var(--uai-control-height-compact, 1.5rem);height:var(--uai-control-height-compact, 1.5rem);border-radius:var(--uai-radius-md, 0.5rem)}.icon-button--size-short{--icon-button-icon-size:var(--uai-sizing-md, 1.25rem);width:var(--uai-control-height-short, 2rem);height:var(--uai-control-height-short, 2rem);border-radius:var(--uai-radius-lg, 0.75rem)}.icon-button--size-medium{--icon-button-icon-size:var(--uai-sizing-lg, 1.5rem);width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);border-radius:var(--uai-radius-lg, 0.75rem)}.icon-button--size-large{--icon-button-icon-size:var(--uai-sizing-lg, 1.5rem);width:var(--uai-control-height-large, 3.5rem);height:var(--uai-control-height-large, 3.5rem);border-radius:var(--uai-radius-lg, 0.75rem)}.icon-button--solid.icon-button--color-primary{--icon-button-bg:var(--uai-action-primary-default, #242729);--icon-button-bg-hover:var(--uai-action-primary-hover, #181a1b);--icon-button-bg-pressed:var(--uai-action-primary-pressed, #0a0a0a);--icon-button-fg:var(--uai-action-primary-foreground, #ffffff)}.icon-button--solid.icon-button--color-content,.icon-button--solid.icon-button--color-positive,.icon-button--solid.icon-button--color-negative{--icon-button-overlay-hover:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));--icon-button-overlay-pressed:var(--uai-overlay-pressed, rgba(0, 0, 0, 0.16))}.icon-button--solid.icon-button--color-content{--icon-button-bg:var(--uai-content-primary, #242729);--icon-button-fg:var(--uai-surface-background, #f2f3f3)}.icon-button--solid.icon-button--color-positive{--icon-button-bg:var(--uai-action-positive, #047857);--icon-button-fg:var(--uai-action-positive-foreground, #ffffff)}.icon-button--solid.icon-button--color-negative{--icon-button-bg:var(--uai-action-destructive, #cf0022);--icon-button-fg:var(--uai-action-destructive-foreground, #ffffff)}.icon-button--outline{--icon-button-bg:var(--uai-action-outline-default, #ffffff);--icon-button-bg-hover:var(--uai-action-outline-hover, #f2f3f3);--icon-button-bg-pressed:var(--uai-action-outline-pressed, #e4e6e7)}.icon-button--outline.icon-button--color-primary{--icon-button-fg:var(--uai-action-primary-default, #242729);--icon-button-border:var(--icon-button-fg)}.icon-button--outline.icon-button--color-content{--icon-button-fg:var(--uai-content-primary, #242729);--icon-button-border:var(--uai-border-input, #adb4b8)}.icon-button--outline.icon-button--color-content:hover:not(:disabled):not(.icon-button--loading),.icon-button--outline.icon-button--color-content:active:not(:disabled):not(.icon-button--loading){--icon-button-border:var(--uai-content-secondary, #5f676d)}.icon-button--outline.icon-button--color-content:disabled{--icon-button-border:var(--uai-border-default, #e4e6e7)}.icon-button--outline.icon-button--color-positive{--icon-button-fg:var(--uai-feedback-success, #3da329);--icon-button-border:var(--icon-button-fg)}.icon-button--outline.icon-button--color-negative{--icon-button-fg:var(--uai-action-destructive, #cf0022);--icon-button-border:var(--icon-button-fg)}.icon-button--ghost{--icon-button-bg:transparent;--icon-button-bg-hover:var(--uai-action-outline-hover, #f2f3f3);--icon-button-bg-pressed:var(--uai-action-outline-pressed, #e4e6e7)}.icon-button--ghost.icon-button--color-primary,.icon-button--ghost.icon-button--color-content{--icon-button-fg:var(--uai-content-primary, #242729)}.icon-button--ghost.icon-button--color-positive{--icon-button-fg:var(--uai-feedback-success, #3da329)}.icon-button--ghost.icon-button--color-negative{--icon-button-fg:var(--uai-action-destructive, #cf0022)}.icon-button__icon,.icon-button__spinner{-ms-flex-negative:0;flex-shrink:0;pointer-events:none}.icon-button__icon{--uai-icon-size:var(--icon-button-icon-size);color:inherit}.icon-button__spinner{-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--icon-button-icon-size);height:var(--icon-button-icon-size);border:var(--uai-border-width-thick, 2px) solid currentColor;border-right-color:transparent;border-radius:var(--uai-radius-full, 624.9375rem);-webkit-animation:uai-icon-button-spin var(--uai-duration-loop, 800ms) var(--uai-easing-linear, cubic-bezier(0, 0, 1, 1)) infinite;animation:uai-icon-button-spin var(--uai-duration-loop, 800ms) var(--uai-easing-linear, cubic-bezier(0, 0, 1, 1)) infinite}@media (prefers-reduced-motion: reduce){.icon-button__spinner{-webkit-animation:none;animation:none}}@-webkit-keyframes uai-icon-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uai-icon-button-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}`;

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
const UaiIconButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiClick = createEvent(this, "uaiClick");
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
        const rawVariant = String((_b = this.variant) !== null && _b !== void 0 ? _b : 'solid');
        if (VARIANTS.includes(rawVariant)) {
            return { variant: rawVariant, color: resolvedColor };
        }
        const mapped = LEGACY_VARIANTS[rawVariant];
        if (mapped) {
            return {
                variant: mapped.variant,
                color: (_c = mapped.color) !== null && _c !== void 0 ? _c : resolvedColor,
            };
        }
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
            return mapped;
        }
        return 'medium';
    }
    resolveType() {
        var _a;
        const rawType = String((_a = this.type) !== null && _a !== void 0 ? _a : 'button');
        if (TYPES.includes(rawType)) {
            return rawType;
        }
        return 'button';
    }
    resolveIconTheme() {
        var _a;
        const rawTheme = String((_a = this.iconTheme) !== null && _a !== void 0 ? _a : 'outline');
        if (ICON_THEMES.includes(rawTheme)) {
            return rawTheme;
        }
        return 'outline';
    }
    actOnForm(buttonType) {
        if (buttonType === 'button')
            return;
        const form = this.el.closest('form');
        if (!form)
            return;
        const proxy = document.createElement(transformTag('button'));
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
    get el() { return getElement(this); }
};
UaiIconButton.style = uaiIconButtonCss();

export { UaiIconButton as uai_icon_button };
