import { r as registerInstance, c as createEvent, h } from './index-611fd21e.js';

const alertCss = ".alert__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000}.alert__dialog .alert{position:relative;margin:48px auto 0;overflow:hidden;max-width:424px;border-radius:8px;background:var(--color-surface-1, #f6f6f6);-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}.alert__dialog--open{opacity:1;visibility:visible}.alert__dialog--fixed{position:fixed}.alert__dialog--contain{position:absolute}";

const BdsAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsAlertChanged = createEvent(this, "bdsAlertChanged", 7);
    this.listener = (event) => {
      if (event.key == 'Enter' || event.key == 'Escape') {
        this.toggle();
      }
    };
    this.open = false;
    this.dataTest = null;
    this.position = 'fixed';
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
    return (h("div", { class: {
        alert__dialog: true,
        'alert__dialog--open': this.open,
        [`alert__dialog--${this.position}`]: true,
      } }, h("div", { class: "alert", "data-test": this.dataTest }, h("slot", null))));
  }
  static get watchers() { return {
    "open": ["isOpenChanged"]
  }; }
};
BdsAlert.style = alertCss;

export { BdsAlert as bds_alert };
