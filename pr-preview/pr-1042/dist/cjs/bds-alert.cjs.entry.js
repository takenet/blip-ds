'use strict';

var index = require('./index-D_zq0Z7d.js');

const alertCss = ".alert__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000}.alert__dialog .alert{position:relative;margin:48px auto 0;overflow:hidden;max-width:424px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}.alert__dialog--open{opacity:1;visibility:visible}.alert__dialog--fixed{position:fixed}.alert__dialog--contain{position:absolute}";

const BdsAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsAlertChanged = index.createEvent(this, "bdsAlertChanged");
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
        return (index.h("div", { key: '53b7fbb22a38788cd76b827ae5aaf29db20c4fbc', class: {
                alert__dialog: true,
                'alert__dialog--open': this.open,
                [`alert__dialog--${this.position}`]: true,
            } }, index.h("div", { key: 'c076bd0a8626a1f3271bfe60f86a4e6e68c8993b', class: "alert", "data-test": this.dataTest }, index.h("slot", { key: 'e79559b82493e9efc52a221479c5c603a6b0a25a' }))));
    }
    static get watchers() { return {
        "open": ["isOpenChanged"]
    }; }
};
BdsAlert.style = alertCss;

exports.bds_alert = BdsAlert;
//# sourceMappingURL=bds-alert.entry.cjs.js.map

//# sourceMappingURL=bds-alert.cjs.entry.js.map