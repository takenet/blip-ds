import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiBannerCss = () => `:host{display:block;width:100%}:host(.banner--hide){display:none}.banner__holder{--banner-tint:var(--uai-feedback-info, #0073e5);--banner-base:var(--uai-surface-paper, #ffffff);--banner-fg:var(--uai-content-primary, #242729);--banner-bg:color-mix(in srgb, var(--banner-tint) 20%, var(--banner-base));--banner-border:color-mix(in srgb, var(--banner-tint) 50%, var(--banner-base));--banner-box-bg:color-mix(in srgb, var(--banner-tint) 40%, var(--banner-base));--banner-box-border:color-mix(in srgb, var(--banner-tint) 60%, var(--banner-base));-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-md, 1rem);width:100%;padding:var(--uai-spacing-md, 1rem);border:var(--uai-border-width-default, 1px) solid var(--banner-border);background:var(--banner-bg);-webkit-box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));color:var(--banner-fg);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.banner__holder--inside{border-radius:var(--uai-radius-xl, 1rem)}.banner__holder--info{--banner-tint:var(--uai-feedback-info, #0073e5)}.banner__holder--success{--banner-tint:var(--uai-feedback-success, #3da329)}.banner__holder--warning{--banner-tint:var(--uai-feedback-warning, #ff8000)}.banner__holder--error{--banner-tint:var(--uai-feedback-error, #cf0022)}.banner__holder--system{--banner-base:var(--uai-action-primary-default, #242729);--banner-tint:var(--uai-action-primary-foreground, #ffffff);--banner-fg:var(--uai-action-primary-foreground, #ffffff);--banner-bg:var(--banner-base);--banner-border:color-mix(in srgb, var(--banner-tint) 10%, var(--banner-base));--banner-box-bg:color-mix(in srgb, var(--banner-tint) 20%, var(--banner-base));--banner-box-border:var(--banner-border)}.banner__icon-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--uai-sizing-3xl, 3rem);height:var(--uai-sizing-3xl, 3rem);border:var(--uai-border-width-default, 1px) solid var(--banner-box-border);border-radius:var(--uai-radius-md, 0.5rem);background:var(--banner-box-bg)}.banner__icon{--uai-icon-size:var(--uai-sizing-xl, 2rem);color:var(--banner-fg)}.banner__text{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-width:0;word-break:break-word}.banner__title,.banner__message{--uai-typo-color:var(--banner-fg);display:block}::slotted([slot=link]){display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;min-height:var(--uai-control-height-medium, 2.5rem);padding:0 var(--uai-spacing-sm, 0.75rem);border-radius:var(--uai-radius-lg, 0.75rem);color:inherit;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-body-base-line-height, 1.375rem);text-decoration:none;white-space:nowrap;cursor:pointer}.banner__close{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--uai-control-height-medium, 2.5rem);height:var(--uai-control-height-medium, 2.5rem);margin:0;padding:0;border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:inherit;cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.banner__close{-webkit-transition:none;transition:none}}.banner__close:hover{background:color-mix(in srgb, var(--banner-fg) 10%, transparent)}.banner__close:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}`;

const VARIANTS = ['system', 'warning', 'info', 'error', 'success'];
const ICONS = {
    system: 'message-ballon',
    info: 'info',
    success: 'checkball',
    warning: 'warning',
    error: 'error',
};
const UaiBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiBannerClose = createEvent(this, "uaiBannerClose");
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
    }
    render() {
        const known = VARIANTS.find((candidate) => candidate === this.variant);
        const variant = known || 'system';
        const urgent = variant === 'error' || variant === 'warning';
        return (h(Host, { key: '4e88b6af2bafe1d2e4a9c1c9f1182c58cacc7f61', class: { banner: true, 'banner--hide': !this.visible } }, h("div", { key: '1ad06fd6b09ca9db7251e250fad70c4cc3dfc23a', class: {
                banner__holder: true,
                [`banner__holder--${variant}`]: true,
                'banner__holder--inside': this.context === 'inside',
            }, part: "holder", role: urgent ? 'alert' : 'status' }, h("div", { key: 'b3dedf5848fa034214faba9256310c782c0900a0', class: "banner__icon-box", part: "icon-box", "aria-hidden": "true" }, h("uai-icon", { key: '902be2f297f274e06faa644a727a53855d182a79', class: "banner__icon", name: ICONS[variant], size: "medium" })), h("div", { key: '93bc8d36fa5e832ba73597826758e80e63b3567a', class: "banner__text" }, this.heading && (h("uai-typo", { key: '4f41661b33894e85f8a53dd06c1bc93152b17dcf', class: "banner__title", tag: "p", variant: "body-base", bold: "medium", margin: false }, this.heading)), h("uai-typo", { key: '8ab7cfd2e5f2adab2c607f7aa045fec7378c10ad', class: "banner__message", tag: "span", variant: "body-base", margin: false }, h("slot", { key: '22f9a08f12f17681581f0b5bcc811d6332cb1d03' }))), h("slot", { key: 'a7a45091db6c2d8289b6ae5315c0e84d5260d774', name: "link" }), String(this.buttonClose) === 'true' && (h("button", { key: '01cdb7a22409dfc10fdc59b60066b6b168e6c346', type: "button", class: "banner__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: this.close }, h("uai-icon", { key: 'c747a9fc28893f16f3e7f0c20581b463dc7a6d2e', name: "close", size: "medium", "aria-hidden": "true" }))))));
    }
    get el() { return getElement(this); }
};
UaiBanner.style = uaiBannerCss();

export { UaiBanner as uai_banner };
