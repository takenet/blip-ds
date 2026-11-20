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
 */
export class UaiToast {
    constructor() {
        this.timerStart = 0;
        this.remaining = 0;
        this.paused = false;
        this.removeOnClose = false;
        this.loaded = false;
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
            if (this.el.matches(':hover') || this.el.matches(':focus-within'))
                return;
            this.paused = false;
            if (this.open && this.remaining > 0)
                this.schedule();
        };
        this.handleFocusOut = (event) => {
            if (!this.el.contains(event.relatedTarget))
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
        return (h(Host, { key: 'd5ef66c41db784dc838e534093a6e9a8ffb96a26', class: { 'uai-toast--open': this.open }, onMouseEnter: this.pause, onMouseLeave: this.resume, onFocusin: this.pause, onFocusout: this.handleFocusOut, onKeyDown: this.handleKeyDown }, h("div", { key: 'b4b2e99d58d6e49c67c5156305f2d105d6e6c3f6', class: { toast: true, [`toast--${variant}`]: true }, part: "toast", role: role }, h("div", { key: 'd262b7b4c1108c03e604a1b8b73cc6555c0cf323', class: "toast__icon-box", part: "icon-box", "aria-hidden": "true" }, h("uai-icon", { key: 'f9ab2d40e10747dc970f4bc2b607f0fd2a48dfd3', class: "toast__icon", name: ICONS[variant], size: "medium" })), h("div", { key: '614f794f5e764feca72410527a3a0b837bd1054f', class: "toast__text" }, this.heading && (h("uai-typo", { key: '194a7aab90d7a6bfe1fd4bde7c5679c585600f0d', class: "toast__title", tag: "p", variant: "body-base", bold: "medium", margin: false }, this.heading)), h("uai-typo", { key: '26dae4c1be3a9c065d58311e039aa0b7b4867e9f', class: "toast__message", tag: "span", variant: "body-base", margin: false }, this.message, h("slot", { key: '8a2bcb0f90dd337ce23d6b762c51939f47d6dcf6' }))), this.actionLabel && (h("button", { key: '0949c98dd2065eb2586be5b62beebd57442eed58', type: "button", class: "toast__action", part: "action", "data-test": this.dtButtonAction, onClick: this.handleAction }, this.actionLabel)), this.closable && (h("button", { key: '060612237fa96dc75c1b4df2958d8d22bf9f3376', type: "button", class: "toast__close", part: "close", "aria-label": this.closeLabel, "data-test": this.dtButtonClose, onClick: () => this.dismiss('close-button') }, h("uai-icon", { key: '4885e4bb309cfc0554a5132b1f8dfa8c9ec5074b', name: "close", size: "medium", "aria-hidden": "true" }))))));
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
