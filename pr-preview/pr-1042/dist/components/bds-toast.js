import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$7 } from './p-DQgO4OMj.js';
import { d as defineCustomElement$6 } from './p-BlC8WqrE.js';
import { d as defineCustomElement$5 } from './p-BHBVuzyo.js';
import { d as defineCustomElement$4 } from './p-DOQirQsC.js';
import { d as defineCustomElement$3 } from './p-DfFxq3wo.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const toastCss = ":host .show,:host .hide{display:-ms-flexbox;display:flex}:host .show{opacity:1}:host .show--top-right,:host .show--bottom-right{-webkit-animation:toastAnimationFadeInFromRight 1s;animation:toastAnimationFadeInFromRight 1s}:host .show--top-left,:host .show--bottom-left{-webkit-animation:toastAnimationFadeInFromLeft 1s;animation:toastAnimationFadeInFromLeft 1s}:host .hide{-webkit-transition:all 1s;transition:all 1s;-webkit-animation:toastAnimationFadeOut 0.5s;animation:toastAnimationFadeOut 0.5s}.toast{display:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));color:var(--color-content-default, rgb(40, 40, 40));opacity:0;margin-top:16px;overflow:hidden;gap:16px}.toast--action--icon{min-width:440px;max-width:440px;padding:8px 16px}.toast--action--icon bds-icon-button{height:32px}@media (max-width: 780px){.toast--action--icon{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--action--button{min-width:440px;max-width:456px;padding:8px 16px}@media (max-width: 780px){.toast--action--button{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--system{background:var(--color-system, rgb(178, 223, 253))}.toast--error{background:var(--color-error, rgb(250, 190, 190))}.toast--success{background:var(--color-success, rgb(132, 235, 188))}.toast--warning{background:var(--color-warning, rgb(253, 233, 155))}.toast--undo{background-color:var(--color-system, rgb(178, 223, 253))}.toast--redo{background-color:var(--color-system, rgb(178, 223, 253))}.toast--notification{background-color:var(--color-surface-1, rgb(246, 246, 246))}.toast__icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px 0}.toast__ballon{display:-ms-flexbox;display:flex;position:absolute;top:-8px;left:-12px;color:var(--color-system, rgb(178, 223, 253));width:72px}.toast__content{position:relative;height:100%;width:100%;-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:8px 0}.toast__action{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.toast__action bds-button-icon,.toast__action bds-button{position:relative}.toast__action bds-button-icon::before,.toast__action bds-button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.toast__action bds-button-icon:focus-visible,.toast__action bds-button:focus-visible{outline:none}.toast__action bds-button-icon:focus-visible::before,.toast__action bds-button:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.toast__action__button{white-space:nowrap}@-webkit-keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}@keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}";

const BdsToast$1 = /*@__PURE__*/ proxyCustomElement(class BdsToast extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.toastButtonClick = createEvent(this, "toastButtonClick");
        /**
         * used for add the icon. Uses the bds-icon component.
         */
        this.icon = null;
        /**
         * ActionType. Defines if the button should have a button or an icon. Can be one of:
         * 'icon', 'button';
         */
        this.actionType = 'button';
        /**
         * Variant. Defines the color of the toast. Can be one of:
         * 'system', 'error', 'success', 'warning', 'undo', 'redo';
         */
        this.variant = 'system';
        /**
         * Time to close the toast in seconds
         * 0 = never close automatically (default value)
         */
        this.duration = 0;
        /**
         * Define an action to the button toast. Can be one of:
         * 'close', 'custom';
         * if the action type is set to close, the button will close automatically.
         * if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted.
         */
        this.buttonAction = 'close';
        /**
         * Controls the open event of the component:
         */
        this.show = false;
        /**
         * Controls the hide event of the component:
         */
        this.hide = false;
        /**
         * The toast position on the screen. Can be one of:
         * 'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value);
         */
        this.position = 'bottom-left';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonAction is the data-test to button action.
         */
        this.dtButtonAction = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Sends an event to be used when creating an action when clicking the toast button
         */
        this._buttonClickHandler = () => {
            if (this.buttonAction === 'close')
                this.close();
            else {
                this.toastButtonClick.emit(this.el);
                this.close();
            }
        };
        this.mapIconName = {
            system: 'bell',
            error: 'error',
            success: 'like',
            warning: 'attention',
            undo: 'undo',
            redo: 'redo',
            notification: 'notification',
        };
    }
    _keyPressHandler(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (this.buttonAction === 'close')
                this.close();
            else {
                this.toastButtonClick.emit(this.el);
                this.close();
            }
        }
    }
    /**
     * Can be used outside to open the toast
     */
    async create({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }) {
        let toastContainer = document.querySelector(`bds-toast-container.${variant === 'notification' ? 'top-right' : 'bottom-left'}`);
        if (toastContainer) {
            toastContainer.appendChild(this.el);
            toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
        }
        else {
            toastContainer = document.createElement('bds-toast-container');
            toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
            document.body.appendChild(toastContainer);
            toastContainer.appendChild(this.el);
        }
        this.el.actionType = actionType || 'button';
        this.el.buttonAction = buttonAction || 'close';
        this.el.buttonText = buttonText;
        this.el.toastText = toastText;
        this.el.toastTitle = toastTitle;
        this.el.variant = variant || 'system';
        this.el.duration = duration * 1000 || 0;
        this.el.position = variant === 'notification' ? 'top-right' : 'bottom-left';
        this.el.icon = icon !== null && icon !== void 0 ? icon : this.mapIconName[this.variant];
        this.el.show = true;
        if (this.el.duration > 0) {
            setTimeout(() => {
                this.el.hide = true;
                setTimeout(() => {
                    this.el.remove();
                }, 400);
            }, this.el.duration);
        }
    }
    /**
     * Can be used outside the component to close the toast
     */
    async close() {
        if (this.el.shadowRoot) {
            this.el.shadowRoot.querySelector('div').classList.remove('show');
            this.el.shadowRoot.querySelector('div').classList.add('hide');
        }
        else {
            this.el.querySelector('div').classList.remove('show');
            this.el.querySelector('div').classList.add('hide');
        }
        setTimeout(() => {
            this.el.remove();
        }, 400);
    }
    render() {
        return (h("div", { key: '2196f1a7a0ee9ca2aa87095acb3c5da4746d6c7d', class: {
                toast: true,
                [`toast--${this.variant}`]: true,
                [`toast--action--${this.actionType}`]: true,
                [`show show--${this.position}`]: this.show,
                hide: this.hide,
            } }, this.variant === 'notification' && (h("bds-icon", { key: 'f6ac304c504bbcc6d4a0969795cb2c589e870633', class: "toast__ballon", theme: "solid", name: "blip-chat", size: "brand" })), this.icon && h("bds-icon", { key: 'f20cf21397152dfb9a079e988eeb9d6c7d003d1c', class: "toast__icon", theme: "outline", size: "medium", name: this.icon }), h("div", { key: '40efb04f0f380908b991d45bd983b92d664e78ea', class: "toast__content" }, this.toastTitle && (h("bds-typo", { key: '3a77a0fb420f685040851db899bcc39b31a935d7', variant: "fs-14", bold: "bold" }, this.toastTitle)), this.toastText && h("bds-typo", { key: 'afb241f37594380cdaabb67b434b5636c3849e7f', variant: "fs-14", innerHTML: this.toastText })), h("div", { key: '615535d9c4e115d31105e648f4b509e27e52142a', class: {
                toast__action: true,
                [`toast__action__${this.actionType}`]: true,
            } }, this.actionType === 'button' ? (h("bds-button", { onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", onClick: () => this._buttonClickHandler(), variant: "secondary", size: "standard", dataTest: this.dtButtonAction }, this.buttonText)) : (h("bds-button-icon", { onClick: () => this._buttonClickHandler(), size: "short", onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", variant: "secondary", icon: "close", dataTest: this.dtButtonClose })))));
    }
    get el() { return this; }
    static get style() { return toastCss; }
}, [1, "bds-toast", {
        "icon": [513],
        "actionType": [1, "action-type"],
        "variant": [1],
        "toastTitle": [1, "toast-title"],
        "toastText": [1, "toast-text"],
        "buttonText": [1, "button-text"],
        "duration": [2],
        "buttonAction": [1, "button-action"],
        "show": [4],
        "hide": [4],
        "position": [1],
        "dtButtonAction": [1, "dt-button-action"],
        "dtButtonClose": [1, "dt-button-close"],
        "create": [64],
        "close": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-toast", "bds-button", "bds-button-icon", "bds-icon", "bds-loading-spinner", "bds-toast-container", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-toast":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsToast$1);
            }
            break;
        case "bds-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bds-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-loading-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-toast-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsToast = BdsToast$1;
const defineCustomElement = defineCustomElement$1;

export { BdsToast, defineCustomElement };
//# sourceMappingURL=bds-toast.js.map

//# sourceMappingURL=bds-toast.js.map