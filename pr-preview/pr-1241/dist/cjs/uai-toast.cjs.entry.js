'use strict';

var index = require('./index-GTJCA4wH.js');
var uaiToast = require('./uai-toast-D1WUYP7I.js');

const uaiToastCss = () => `:host{display:block;opacity:0;-webkit-transform:translateY(var(--uai-spacing-xs, 0.5rem));transform:translateY(var(--uai-spacing-xs, 0.5rem));-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){:host{-webkit-transition:none;transition:none}}:host(:not(.uai-toast--open)){display:none}:host(.uai-toast--open){opacity:1;-webkit-transform:none;transform:none}@starting-style{:host(.uai-toast--open){opacity:0;-webkit-transform:translateY(var(--uai-spacing-xs, 0.5rem));transform:translateY(var(--uai-spacing-xs, 0.5rem))}}.toast{--toast-tint:var(--uai-feedback-info, #0073e5);--toast-base:var(--uai-surface-paper, #ffffff);--toast-fg:var(--uai-content-primary, #242729);--toast-bg:color-mix(in srgb, var(--toast-tint) 20%, var(--toast-base));--toast-border:color-mix(in srgb, var(--toast-tint) 50%, var(--toast-base));--toast-box-bg:color-mix(in srgb, var(--toast-tint) 40%, var(--toast-base));--toast-box-border:color-mix(in srgb, var(--toast-tint) 60%, var(--toast-base));--toast-progress:color-mix(in srgb, var(--toast-tint) 80%, transparent);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-md, 1rem);width:100%;padding:var(--uai-spacing-md, 1rem);overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--toast-border);border-radius:var(--uai-radius-xl, 1rem);background:var(--toast-bg);-webkit-box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));box-shadow:var(--uai-elevation-dialog, 0px 32px 32px -20px rgba(0, 0, 0, 0.1));color:var(--toast-fg);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.toast--info{--toast-tint:var(--uai-feedback-info, #0073e5)}.toast--success{--toast-tint:var(--uai-feedback-success, #3da329)}.toast--warning{--toast-tint:var(--uai-feedback-warning, #ff8000)}.toast--error{--toast-tint:var(--uai-feedback-error, #cf0022)}.toast--system{--toast-base:var(--uai-action-primary-default, #242729);--toast-tint:var(--uai-action-primary-foreground, #ffffff);--toast-fg:var(--uai-action-primary-foreground, #ffffff);--toast-bg:var(--toast-base);--toast-border:color-mix(in srgb, var(--toast-tint) 10%, var(--toast-base));--toast-box-bg:color-mix(in srgb, var(--toast-tint) 20%, var(--toast-base));--toast-box-border:var(--toast-border);--toast-progress:color-mix(in srgb, var(--toast-fg) 40%, transparent)}.toast>*{opacity:var(--toast-content-opacity, 1);-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.toast>*{-webkit-transition:none;transition:none}}.toast__progress{position:absolute;right:0;bottom:0;left:0;pointer-events:none}.toast__progress-bar{border-top:var(--uai-border-width-thick, 2px) solid var(--toast-progress);-webkit-transform-origin:left center;transform-origin:left center;-webkit-animation:uai-toast-progress linear forwards;animation:uai-toast-progress linear forwards}.toast__progress-bar--paused{-webkit-animation-play-state:paused;animation-play-state:paused}@media (forced-colors: active){.toast__progress-bar{border-top-color:CanvasText}}@-webkit-keyframes uai-toast-progress{from{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes uai-toast-progress{from{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(0);transform:scaleX(0)}}.toast__icon-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--uai-sizing-3xl, 3rem);height:var(--uai-sizing-3xl, 3rem);border:var(--uai-border-width-default, 1px) solid var(--toast-box-border);border-radius:var(--uai-radius-md, 0.5rem);background:var(--toast-box-bg)}.toast__icon{--uai-icon-size:var(--uai-sizing-xl, 2rem);color:var(--toast-fg)}.toast__text{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-width:0;word-break:break-word}.toast__title,.toast__message{--uai-typo-color:var(--toast-fg);display:block}.toast__message ::slotted(a){color:inherit;font-weight:var(--uai-font-weight-medium, 500)}.toast__action,.toast__close{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:var(--uai-control-height-medium, 2.5rem);margin:0;padding:0;border:0;border-radius:var(--uai-radius-lg, 0.75rem);background:transparent;color:inherit;cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.toast__action,.toast__close{-webkit-transition:none;transition:none}}.toast__action:hover,.toast__close:hover{background:color-mix(in srgb, var(--toast-fg) 10%, transparent)}.toast__action:focus-visible,.toast__close:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.toast__action{padding:0 var(--uai-spacing-sm, 0.75rem);font-family:inherit;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--uai-body-base-line-height, 1.375rem);white-space:nowrap}.toast__close{width:var(--uai-control-height-medium, 2.5rem)}`;

const VARIANTS = ['system', 'info', 'success', 'warning', 'error'];
const ICONS = {
    system: 'message-ballon',
    info: 'info',
    success: 'checkball',
    warning: 'warning',
    error: 'error',
};
const OPTION_KEYS = [
    'variant',
    'heading',
    'message',
    'duration',
    'closable',
    'closeLabel',
    'actionLabel',
    'position',
];
// Time of the closing transition (duration/moderate, resolved from the theme), so a toast placed by show() fades out
// before it leaves the page. Reduced motion has no transition.
const closingTime = (element) => {
    var _a;
    if ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-reduced-motion: reduce)').matches)
        return 0;
    const value = getComputedStyle(element).getPropertyValue('--uai-duration-moderate').trim();
    const time = parseFloat(value);
    if (Number.isNaN(time))
        return 0;
    return value.endsWith('ms') ? time : time * 1000;
};
const UaiToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiToastOpen = index.createEvent(this, "uaiToastOpen");
        this.uaiToastClose = index.createEvent(this, "uaiToastClose");
        this.uaiToastAction = index.createEvent(this, "uaiToastAction");
        this.timerStart = 0;
        this.remaining = 0;
        this.removeOnClose = false;
        this.loaded = false;
        /** The time is paused: the progress line stops with it. */
        this.paused = false;
        /** A new count of the time, which restarts the progress line. */
        this.cycle = 0;
        /** Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning. */
        this.variant = 'system';
        /** Optional short title, without a final period. Use for the reason of the notification; avoid long titles. */
        this.heading = null;
        /** Short text, preferably one line. It is plain text (never HTML); for a link, use the default slot. */
        this.message = null;
        /** Whether the toast is shown. Use show() and close() to also place it and emit the events; avoid toggling it in a loop. */
        this.open = false;
        /** Time in milliseconds before the toast closes by itself; 0 keeps it open. The time pauses while the mouse or the focus is on it. */
        this.duration = 0;
        /** Shows the close button. Keep it on unless the toast closes by itself; avoid a toast nobody can dismiss. */
        this.closable = true;
        /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
        this.closeLabel = 'Fechar';
        /** Text of the optional action button, such as "Desfazer". Clicking it emits uaiToastAction and closes the toast. */
        this.actionLabel = null;
        /** Position used by show() when the toast is not inside a UaiToastContainer. Avoid mixing positions for the same kind of message. */
        this.position = 'bottom-left';
        /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonClose = null;
        /** Test selector on the action button. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dtButtonAction = null;
        this.handleVisibility = () => {
            if (document.visibilityState === 'hidden')
                this.pause();
            else
                this.resume();
        };
        // The time stops while the user reads or reaches the toast (WCAG 2.2.1) and resumes with what was left.
        this.pause = () => {
            if (this.paused)
                return;
            this.paused = true;
            if (!this.timer)
                return;
            this.clearTimer();
            this.remaining = Math.max(0, this.remaining - (Date.now() - this.timerStart));
        };
        this.resume = () => {
            if (!this.paused)
                return;
            const held = (element) => !!element && (element.matches(':hover') || element.matches(':focus-within'));
            if (held(this.el) || held(this.stack) || document.visibilityState === 'hidden')
                return;
            this.paused = false;
            if (this.open && this.remaining > 0)
                this.schedule();
        };
        this.handleFocusOut = (event) => {
            var _a;
            const next = event.relatedTarget;
            if (!this.el.contains(next) && !((_a = this.stack) === null || _a === void 0 ? void 0 : _a.contains(next)))
                setTimeout(this.resume);
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape' && this.closable) {
                // Escape closes only the toast, not a modal it is in.
                event.preventDefault();
                event.stopPropagation();
                this.dismiss('escape');
            }
        };
        this.handleAction = () => {
            this.uaiToastAction.emit();
            this.dismiss('action');
        };
    }
    /**
     * Opens the toast. Outside a UaiToastContainer, it moves the toast into the container of its position (created in the
     * nearest UaiThemeProvider when there is none) and removes it from the page after it closes. Options replace the props
     * of the same name; `removeOnClose` decides whether the toast leaves the page after closing.
     */
    async show(options = {}) {
        for (const key of OPTION_KEYS) {
            if (options[key] !== undefined)
                this.el[key] = options[key];
        }
        let removeOnClose = options.removeOnClose;
        const container = this.container();
        // A container show() created in a modal that closed meanwhile (or that left the page) is not used.
        const stale = container &&
            uaiToast.isCreatedContainer(container) &&
            (!container.isConnected || (uaiToast.isModal(container.parentElement) && !uaiToast.isOpenModal(container.parentElement)));
        if (!container || stale) {
            removeOnClose = removeOnClose !== null && removeOnClose !== void 0 ? removeOnClose : true;
            uaiToast.toastContainerFor(this.position, this.el).appendChild(this.el);
        }
        this.removeOnClose = removeOnClose !== null && removeOnClose !== void 0 ? removeOnClose : false;
        this.open = true;
    }
    /** Closes the toast and emits uaiToastClose with reason "method". */
    async close() {
        this.dismiss('method');
    }
    openChanged(open) {
        if (open) {
            this.uaiToastOpen.emit();
            this.startTimer(this.duration);
        }
        else {
            this.clearTimer();
        }
    }
    durationChanged() {
        if (this.open)
            this.startTimer(this.duration);
    }
    componentDidLoad() {
        this.loaded = true;
        if (this.open)
            this.openChanged(true);
    }
    // Moving an open toast (from a closing modal to the page) keeps the time it had left.
    connectedCallback() {
        this.watchStack();
        document.addEventListener('visibilitychange', this.handleVisibility);
        if (!this.loaded || !this.open)
            return;
        this.paused = false;
        if (this.remaining > 0)
            this.schedule();
    }
    disconnectedCallback() {
        if (this.timer)
            this.remaining = Math.max(0, this.remaining - (Date.now() - this.timerStart));
        this.clearTimer();
        this.unwatchStack();
        document.removeEventListener('visibilitychange', this.handleVisibility);
    }
    // The time of every toast in a stack pauses while the stack is under the pointer or has the focus, as the stack
    // unfolds; it also pauses while the page is in the background.
    watchStack() {
        var _a, _b, _c, _d;
        this.unwatchStack();
        this.stack = this.container();
        (_a = this.stack) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', this.pause);
        (_b = this.stack) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseleave', this.resume);
        (_c = this.stack) === null || _c === void 0 ? void 0 : _c.addEventListener('focusin', this.pause);
        (_d = this.stack) === null || _d === void 0 ? void 0 : _d.addEventListener('focusout', this.handleFocusOut);
    }
    unwatchStack() {
        var _a, _b, _c, _d;
        (_a = this.stack) === null || _a === void 0 ? void 0 : _a.removeEventListener('mouseenter', this.pause);
        (_b = this.stack) === null || _b === void 0 ? void 0 : _b.removeEventListener('mouseleave', this.resume);
        (_c = this.stack) === null || _c === void 0 ? void 0 : _c.removeEventListener('focusin', this.pause);
        (_d = this.stack) === null || _d === void 0 ? void 0 : _d.removeEventListener('focusout', this.handleFocusOut);
        this.stack = null;
    }
    container() {
        return this.el.closest(`${index.transformTag("uai-toast-container")}`);
    }
    dismiss(reason) {
        if (!this.open)
            return;
        this.open = false;
        this.uaiToastClose.emit({ reason });
        if (this.removeOnClose) {
            this.removeOnClose = false;
            const delay = closingTime(this.el);
            setTimeout(() => {
                if (!this.open)
                    this.el.remove();
            }, delay);
        }
    }
    startTimer(time) {
        this.clearTimer();
        this.remaining = time > 0 ? time : 0;
        this.cycle++;
        if (!this.remaining || this.paused)
            return;
        this.schedule();
    }
    schedule() {
        this.clearTimer();
        this.timerStart = Date.now();
        this.timer = setTimeout(() => this.dismiss('timeout'), this.remaining);
    }
    clearTimer() {
        if (this.timer)
            clearTimeout(this.timer);
        this.timer = undefined;
    }
    render() {
        const known = VARIANTS.find((candidate) => candidate === this.variant);
        const variant = known || 'system';
        const urgent = variant === 'error' || variant === 'warning';
        // Inside a container, the container announces the toast; alone, the toast is its own live region.
        const role = this.container() ? undefined : urgent ? 'alert' : 'status';
        return (index.h(index.Host, { key: 'cfebda18eeb2222b7c8350b23ed1a5d11061547f', class: { 'uai-toast--open': this.open }, onMouseEnter: this.pause, onMouseLeave: this.resume, onFocusin: this.pause, onFocusout: this.handleFocusOut, onKeyDown: this.handleKeyDown }, index.h("div", { key: '533ad2c4357f71dd99bd61264fedf02777b0f54f', class: { toast: true, [`toast--${variant}`]: true }, part: "toast", role: role }, index.h("div", { key: 'd145deb01a3c762cbc731813af8e7fb849e6efe6', class: "toast__icon-box", part: "icon-box", "aria-hidden": "true" }, index.h("uai-icon", { key: '9825720c54de490dea1e22bfd7f62de8467598de', class: "toast__icon", name: ICONS[variant], size: "medium" })), index.h("div", { key: 'cb030e2a64d3f0ce1650e1235f1c8d19ba35ea36', class: "toast__text" }, this.heading && (index.h("uai-typo", { key: 'a8a757781997d50eeb18aaacfa272bcb4bd25456', class: "toast__title", tag: "p", variant: "body-base", bold: "medium", margin: false }, this.heading)), index.h("uai-typo", { key: '24612985dd2547ddd4578394f28abb35a764d124', class: "toast__message", tag: "span", variant: "body-base", margin: false }, this.message, index.h("slot", { key: '0ad3b2a2ec9ab86362dbfc1b86f021b73a0ea6b9' }))), this.actionLabel && (index.h("button", { key: '4b80f5a8de009fb2010b9f77b11d4656c2fa6013', type: "button", class: "toast__action", part: "action", "data-test": this.dtButtonAction, onClick: this.handleAction }, this.actionLabel)), this.closable && (index.h("button", { key: '35fc918095b785c7663d66150bfcd890573e2dda', type: "button", class: "toast__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.dismiss('close-button') }, index.h("uai-icon", { key: 'ce6a306423496303b0530fb600577012e26f518f', name: "close", size: "medium", "aria-hidden": "true" }))), this.open && this.duration > 0 && (
        // The remaining time as a line that shrinks with it; a new key restarts it, and it stops while paused.
        index.h("div", { key: '443f45d8c961f7a560cf98af16b6d7984867a0b8', class: "toast__progress", part: "progress", "aria-hidden": "true" }, index.h("div", { key: this.cycle, class: { 'toast__progress-bar': true, 'toast__progress-bar--paused': this.paused }, style: { animationDuration: `${this.duration}ms` } }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": [{
                "openChanged": 0
            }],
        "duration": [{
                "durationChanged": 0
            }]
    }; }
};
UaiToast.style = uaiToastCss();

exports.uai_toast = UaiToast;
