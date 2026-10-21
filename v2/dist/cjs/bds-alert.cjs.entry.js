'use strict';

var index = require('./index-DQyYkciT.js');

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
        return (index.h("div", { key: '8a70a1412d8c847471c541be5ea2013798a28ed3', class: {
                alert__dialog: true,
                'alert__dialog--open': this.open,
                [`alert__dialog--${this.position}`]: true,
            } }, index.h("div", { key: '5c0cc30a287836e2f93a644c070978494700d4bf', class: "alert", "data-test": this.dataTest }, index.h("slot", { key: '2fd8fb4580a3139d766274c4a001d80b9d5116ff' }))));
    }
    static get watchers() { return {
        "open": ["isOpenChanged"]
    }; }
};
BdsAlert.style = alertCss;

exports.bds_alert = BdsAlert;
//# sourceMappingURL=bds-alert.entry.cjs.js.map

//# sourceMappingURL=bds-alert.cjs.entry.js.map