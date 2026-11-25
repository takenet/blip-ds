import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
import { isCreatedContainer, isModal, isOpenModal, toastContainerFor, } from "../../utils/uai-toast";
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
/**
 * Short notification that floats over the page, with the result of an action or a system message.
 * Use for transient feedback; pair with UaiToastContainer (or `show()`, which creates it) and a short text; avoid it
 * for messages the user must act on, which belong in a modal or a banner.
 *
 * @slot - Optional rich content shown after `message`, such as text with a link.
 * @part toast - The toast surface.
 * @part icon-box - The box around the variant icon.
 * @part action - The action button.
 * @part close - The close button.
 * @part progress - The line along the bottom that shrinks over the duration.
 */
export class UaiToast {
    constructor() {
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
            isCreatedContainer(container) &&
            (!container.isConnected || (isModal(container.parentElement) && !isOpenModal(container.parentElement)));
        if (!container || stale) {
            removeOnClose = removeOnClose !== null && removeOnClose !== void 0 ? removeOnClose : true;
            toastContainerFor(this.position, this.el).appendChild(this.el);
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
        return this.el.closest('uai-toast-container');
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
        if (!known)
            warnLegacyValue('uai-toast', 'variant', this.variant, variant);
        const urgent = variant === 'error' || variant === 'warning';
        // Inside a container, the container announces the toast; alone, the toast is its own live region.
        const role = this.container() ? undefined : urgent ? 'alert' : 'status';
        return (h(Host, { key: 'd25f2c9d124930f98c725ccabd6982ea095313f5', class: { 'uai-toast--open': this.open }, onMouseEnter: this.pause, onMouseLeave: this.resume, onFocusin: this.pause, onFocusout: this.handleFocusOut, onKeyDown: this.handleKeyDown }, h("div", { key: '967bc9ce1aa15f725f7aa8fc4b2c3054d0bb07f8', class: { toast: true, [`toast--${variant}`]: true }, part: "toast", role: role }, h("div", { key: '7536679a086a5d5ac1b84b295dd877f83031cd66', class: "toast__icon-box", part: "icon-box", "aria-hidden": "true" }, h("uai-icon", { key: '95300db1bd1ee7ac72bda285c473730bad29256e', class: "toast__icon", name: ICONS[variant], size: "medium" })), h("div", { key: 'c1827adb355ade7ba7c420c53326019fc700dec5', class: "toast__text" }, this.heading && (h("uai-typo", { key: '920e325b176357b369857023e78b472ba6fa448f', class: "toast__title", tag: "p", variant: "body-base", bold: "medium", margin: false }, this.heading)), h("uai-typo", { key: 'd3c7013a76c883b563ae936c28b98d551099bc2f', class: "toast__message", tag: "span", variant: "body-base", margin: false }, this.message, h("slot", { key: 'b1e42f6c7ce1cd99a07d633cc1980d8bbe448622' }))), this.actionLabel && (h("button", { key: '65d01d3abdd590857f2df6220e507fcb84b4727a', type: "button", class: "toast__action", part: "action", "data-test": this.dtButtonAction, onClick: this.handleAction }, this.actionLabel)), this.closable && (h("button", { key: '30c609b8a85338c204cd4c9bd72a96f7ccc9326b', type: "button", class: "toast__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.dismiss('close-button') }, h("uai-icon", { key: '9b735ba67babc6638e55c36a94d96ae4b95f2cba', name: "close", size: "medium", "aria-hidden": "true" }))), this.open && this.duration > 0 && (
        // The remaining time as a line that shrinks with it; a new key restarts it, and it stops while paused.
        h("div", { key: 'df21556423b2a9fd274f9cb3acb281574873e521', class: "toast__progress", part: "progress", "aria-hidden": "true" }, h("div", { key: this.cycle, class: { 'toast__progress-bar': true, 'toast__progress-bar--paused': this.paused }, style: { animationDuration: `${this.duration}ms` } }))))));
    }
    static get is() { return "uai-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-toast.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiToastVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
                    "references": {
                        "UaiToastVariant": {
                            "location": "import",
                            "path": "../../utils/uai-toast",
                            "id": "src/utils/uai-toast.ts::UaiToastVariant",
                            "referenceLocation": "UaiToastVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "variant",
                "defaultValue": "'system'"
            },
            "heading": {
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
                    "text": "Optional short title, without a final period. Use for the reason of the notification; avoid long titles."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading",
                "defaultValue": "null"
            },
            "message": {
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
                    "text": "Short text, preferably one line. It is plain text (never HTML); for a link, use the default slot."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message",
                "defaultValue": "null"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the toast is shown. Use show() and close() to also place it and emit the events; avoid toggling it in a loop."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "duration": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Time in milliseconds before the toast closes by itself; 0 keeps it open. The time pauses while the mouse or the focus is on it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "duration",
                "defaultValue": "0"
            },
            "closable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows the close button. Keep it on unless the toast closes by itself; avoid a toast nobody can dismiss."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "closable",
                "defaultValue": "true"
            },
            "closeLabel": {
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
                    "text": "Accessible name of the close button. Use a translated label; avoid leaving it generic."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "close-label",
                "defaultValue": "'Fechar'"
            },
            "actionLabel": {
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
                    "text": "Text of the optional action button, such as \"Desfazer\". Clicking it emits uaiToastAction and closes the toast."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "action-label",
                "defaultValue": "null"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiToastPosition",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "UaiToastPosition": {
                            "location": "import",
                            "path": "../../utils/uai-toast",
                            "id": "src/utils/uai-toast.ts::UaiToastPosition",
                            "referenceLocation": "UaiToastPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Position used by show() when the toast is not inside a UaiToastContainer. Avoid mixing positions for the same kind of message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position",
                "defaultValue": "'bottom-left'"
            },
            "dtButtonClose": {
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
                    "text": "Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            },
            "dtButtonAction": {
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
                    "text": "Test selector on the action button. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-action",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "paused": {},
            "cycle": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiToastOpen",
                "name": "uaiToastOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the toast opens. UaiToastContainer uses it to stay on top and announce the toast."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "uaiToastClose",
                "name": "uaiToastClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the toast closes, with the reason: close-button, action, timeout, escape or method."
                },
                "complexType": {
                    "original": "{ reason: UaiToastCloseReason }",
                    "resolved": "{ reason: UaiToastCloseReason; }",
                    "references": {
                        "UaiToastCloseReason": {
                            "location": "import",
                            "path": "../../utils/uai-toast",
                            "id": "src/utils/uai-toast.ts::UaiToastCloseReason",
                            "referenceLocation": "UaiToastCloseReason"
                        }
                    }
                }
            }, {
                "method": "uaiToastAction",
                "name": "uaiToastAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the action button is clicked, before the toast closes. Use to run the action, such as undoing."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "(options?: UaiToastOptions) => Promise<void>",
                    "parameters": [{
                            "name": "options",
                            "type": "{ variant?: UaiToastVariant; heading?: string; message?: string; duration?: number; closable?: boolean; closeLabel?: string; actionLabel?: string; position?: UaiToastPosition; removeOnClose?: boolean; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "UaiToastOptions": {
                            "location": "import",
                            "path": "../../utils/uai-toast",
                            "id": "src/utils/uai-toast.ts::UaiToastOptions",
                            "referenceLocation": "UaiToastOptions"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the toast. Outside a UaiToastContainer, it moves the toast into the container of its position (created in the\nnearest UaiThemeProvider when there is none) and removes it from the page after it closes. Options replace the props\nof the same name; `removeOnClose` decides whether the toast leaves the page after closing.",
                    "tags": []
                }
            },
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the toast and emits uaiToastClose with reason \"method\".",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "openChanged"
            }, {
                "propName": "duration",
                "methodName": "durationChanged"
            }];
    }
}
