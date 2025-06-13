import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const alertCss = ".alert__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000}.alert__dialog .alert{position:relative;margin:48px auto 0;overflow:hidden;max-width:424px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}.alert__dialog--open{opacity:1;visibility:visible}.alert__dialog--fixed{position:fixed}.alert__dialog--contain{position:absolute}";

const BdsAlert$1 = /*@__PURE__*/ proxyCustomElement(class BdsAlert extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsAlertChanged = createEvent(this, "bdsAlertChanged");
        /**
         * Used to open/close the alert
         */
        this.open = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Define whether the component will occupy the entire screen or just the parent.
         */
        this.position = 'fixed';
        this.listener = (event) => {
            if (event.key == 'Enter' || event.key == 'Escape') {
                this.toggle();
            }
        };
    }
    /**
     * Can be used outside to open/close the alert
     */
    async toggle() {
        this.open = !this.open;
        if (this.open) {
            this.bdsAlertChanged.emit({ alertStatus: 'opened' });
        }
        else {
            this.bdsAlertChanged.emit({ alertStatus: 'closed' });
        }
    }
    isOpenChanged() {
        if (this.open) {
            document.addEventListener('keydown', this.listener, false);
        }
        else
            document.removeEventListener('keydown', this.listener, false);
    }
    render() {
        return (h("div", { key: '1ce82360d314de97b33c4f70ba6c40998417e443', class: {
                alert__dialog: true,
                'alert__dialog--open': this.open,
                [`alert__dialog--${this.position}`]: true,
            } }, h("div", { key: '68e6abf59b1b4b069109ce54e3f773fb01770dff', class: "alert", "data-test": this.dataTest }, h("slot", { key: 'a6c62897d2fa9cde6f904e6c0322c8abb7110e7e' }))));
    }
    static get watchers() { return {
        "open": ["isOpenChanged"]
    }; }
    static get style() { return alertCss; }
}, [1, "bds-alert", {
        "open": [1540],
        "dataTest": [1, "data-test"],
        "position": [1],
        "toggle": [64]
    }, undefined, {
        "open": ["isOpenChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsAlert$1);
            }
            break;
    } });
}

const BdsAlert = BdsAlert$1;
const defineCustomElement = defineCustomElement$1;

export { BdsAlert, defineCustomElement };
//# sourceMappingURL=bds-alert.js.map

//# sourceMappingURL=bds-alert.js.map