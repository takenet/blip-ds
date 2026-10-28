import { r as registerInstance, c as createEvent, h } from './index-CkbvGS8Z.js';

const alertCss = () => `.alert__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000}.alert__dialog .alert{position:relative;margin:48px auto 0;overflow:hidden;max-width:424px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}.alert__dialog--open{opacity:1;visibility:visible}.alert__dialog--fixed{position:fixed}.alert__dialog--contain{position:absolute}`;

const BdsAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '78d161080f83af7c89f4ca983ddf0be83c2e1406', class: {
                alert__dialog: true,
                'alert__dialog--open': this.open,
                [`alert__dialog--${this.position}`]: true,
            } }, h("div", { key: '65c9a51e59690a658ba0cae4942194ad3d90349f', class: "alert", "data-test": this.dataTest }, h("slot", { key: '7b978deff03c0c2f2705da775d1fcf35d1e03ed9' }))));
    }
    static get watchers() { return {
        "open": [{
                "isOpenChanged": 0
            }]
    }; }
};
BdsAlert.style = alertCss();

export { BdsAlert as bds_alert };
