import { r as registerInstance, c as createEvent, h, g as getElement } from './index-611fd21e.js';

const toastCss = ":host .show,:host .hide{display:-ms-flexbox;display:flex}:host .show{opacity:1}:host .show--top-right,:host .show--bottom-right{-webkit-animation:toastAnimationFadeInFromRight 1s;animation:toastAnimationFadeInFromRight 1s}:host .show--top-left,:host .show--bottom-left{-webkit-animation:toastAnimationFadeInFromLeft 1s;animation:toastAnimationFadeInFromLeft 1s}:host .hide{-webkit-transition:all 1s;transition:all 1s;-webkit-animation:toastAnimationFadeOut 0.5s;animation:toastAnimationFadeOut 0.5s}.toast{display:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));color:var(--color-content-default, #454545);opacity:0;margin-top:16px;overflow:hidden;gap:16px}.toast--action--icon{min-width:440px;max-width:440px;padding:8px 16px}.toast--action--icon bds-icon-button{height:32px}@media (max-width: 780px){.toast--action--icon{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--action--button{min-width:440px;max-width:456px;padding:8px 16px}@media (max-width: 780px){.toast--action--button{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--system{background:var(--color-system, #b2dffd)}.toast--error{background:var(--color-error, #f99f9f)}.toast--success{background:var(--color-success, #84ebbc)}.toast--warning{background:var(--color-warning, #fde99b)}.toast--undo{background-color:var(--color-system, #b2dffd)}.toast--redo{background-color:var(--color-system, #b2dffd)}.toast--notification{background-color:var(--color-surface-1, #f6f6f6)}.toast__icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px 0}.toast__ballon{display:-ms-flexbox;display:flex;position:absolute;top:-8px;left:-12px;color:var(--color-system, #b2dffd);width:72px}.toast__content{position:relative;height:100%;width:100%;-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:8px 0}.toast__action{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.toast__action bds-button-icon,.toast__action bds-button{position:relative}.toast__action bds-button-icon::before,.toast__action bds-button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.toast__action bds-button-icon:focus-visible,.toast__action bds-button:focus-visible{outline:none}.toast__action bds-button-icon:focus-visible::before,.toast__action bds-button:focus-visible::before{border-color:var(--color-focus, #c226fb)}.toast__action__button{white-space:nowrap}@-webkit-keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}@keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}";

const BdsToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toastButtonClick = createEvent(this, "toastButtonClick", 7);
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
    this.icon = null;
    this.actionType = 'button';
    this.variant = 'system';
    this.toastTitle = undefined;
    this.toastText = undefined;
    this.buttonText = undefined;
    this.duration = 0;
    this.buttonAction = 'close';
    this.show = false;
    this.hide = false;
    this.position = 'bottom-left';
    this.dtButtonAction = null;
    this.dtButtonClose = null;
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
    return (h("div", { class: {
        toast: true,
        [`toast--${this.variant}`]: true,
        [`toast--action--${this.actionType}`]: true,
        [`show show--${this.position}`]: this.show,
        hide: this.hide,
      } }, this.variant === 'notification' && (h("bds-icon", { class: "toast__ballon", theme: "solid", name: "blip-chat", size: "brand" })), this.icon && h("bds-icon", { class: "toast__icon", theme: "outline", size: "medium", name: this.icon }), h("div", { class: "toast__content" }, this.toastTitle && (h("bds-typo", { variant: "fs-14", bold: "bold" }, this.toastTitle)), this.toastText && h("bds-typo", { variant: "fs-14", innerHTML: this.toastText })), h("div", { class: {
        toast__action: true,
        [`toast__action__${this.actionType}`]: true,
      } }, this.actionType === 'button' ? (h("bds-button", { onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", onClick: () => this._buttonClickHandler(), variant: "secondary", size: "standard", dataTest: this.dtButtonAction }, this.buttonText)) : (h("bds-button-icon", { onClick: () => this._buttonClickHandler(), size: "short", onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", variant: "secondary", icon: "close", dataTest: this.dtButtonClose })))));
  }
  get el() { return getElement(this); }
};
BdsToast.style = toastCss;

export { BdsToast as bds_toast };
