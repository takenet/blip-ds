import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';

const buttonCss = ":host{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host(.block){width:100%;display:-ms-flexbox;display:flex}:host(.group){width:auto}:host:focus-visible{outline:none}.button{border:none;margin:0;padding:0;width:auto;overflow:visible;outline:none;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;border-radius:8px;border-style:solid;border-left-width:1px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;gap:4px;padding:0 16px;-webkit-transition:all 0.5s;transition:all 0.5s}.button::-moz-focus-inner{border:0;padding:0}.button__size--short{height:32px}.button__size--standard{height:40px}.button__size--medium{height:40px}.button__size--large{height:56px}.button__only-icon--medium{padding:8px;gap:0}.button__only-icon--large{padding:8px 16px;gap:0}.button--block,.button--group{width:100%}.button bds-loading-spinner{max-height:100%;position:absolute}.button *{pointer-events:none}.button__color--primary.button__variant--solid,.button__color--primary.button__variant--primary{background-color:var(--color-primary, #1e6bf1);border-color:transparent}.button__color--primary.button__variant--solid .typo_buttom,.button__color--primary.button__variant--solid .icon_buttom,.button__color--primary.button__variant--primary .typo_buttom,.button__color--primary.button__variant--primary .icon_buttom{color:var(--color-content-bright, #ffffff)}.button__color--primary.button__variant--solid--disabled,.button__color--primary.button__variant--primary--disabled{opacity:50%;pointer-events:none}.button__color--primary.button__variant--outline,.button__color--primary.button__variant--tertiary{background-color:transparent;border-color:var(--color-primary, #1e6bf1)}.button__color--primary.button__variant--outline .typo_buttom,.button__color--primary.button__variant--outline .icon_buttom,.button__color--primary.button__variant--tertiary .typo_buttom,.button__color--primary.button__variant--tertiary .icon_buttom{color:var(--color-primary, #1e6bf1)}.button__color--primary.button__variant--outline--disabled,.button__color--primary.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__color--primary.button__variant--text,.button__color--primary.button__variant--secondary{background-color:transparent;border-color:transparent}.button__color--primary.button__variant--text .typo_buttom,.button__color--primary.button__variant--text .icon_buttom,.button__color--primary.button__variant--secondary .typo_buttom,.button__color--primary.button__variant--secondary .icon_buttom{color:var(--color-primary, #1e6bf1)}.button__color--primary.button__variant--text--disabled,.button__color--primary.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button__color--content.button__variant--solid,.button__color--content.button__variant--primary{background-color:var(--color-content-default, #454545);border-color:transparent}.button__color--content.button__variant--solid .typo_buttom,.button__color--content.button__variant--solid .icon_buttom,.button__color--content.button__variant--primary .typo_buttom,.button__color--content.button__variant--primary .icon_buttom{color:var(--color-surface-0, #ffffff)}.button__color--content.button__variant--solid--disabled,.button__color--content.button__variant--primary--disabled{opacity:50%;pointer-events:none}.button__color--content.button__variant--outline,.button__color--content.button__variant--tertiary{background-color:transparent;border-color:var(--color-content-default, #454545)}.button__color--content.button__variant--outline .typo_buttom,.button__color--content.button__variant--outline .icon_buttom,.button__color--content.button__variant--tertiary .typo_buttom,.button__color--content.button__variant--tertiary .icon_buttom{color:var(--color-content-default, #454545)}.button__color--content.button__variant--outline--disabled,.button__color--content.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__color--content.button__variant--text,.button__color--content.button__variant--secondary{background-color:transparent;border-color:transparent}.button__color--content.button__variant--text .typo_buttom,.button__color--content.button__variant--text .icon_buttom,.button__color--content.button__variant--secondary .typo_buttom,.button__color--content.button__variant--secondary .icon_buttom{color:var(--color-content-default, #454545)}.button__color--content.button__variant--text--disabled,.button__color--content.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button__color--negative.button__variant--solid,.button__color--negative.button__variant--primary,.button__color--negative.button__variant--delete{background-color:var(--color-delete, #e60f0f);border-color:transparent}.button__color--negative.button__variant--solid .typo_buttom,.button__color--negative.button__variant--solid .icon_buttom,.button__color--negative.button__variant--primary .typo_buttom,.button__color--negative.button__variant--primary .icon_buttom,.button__color--negative.button__variant--delete .typo_buttom,.button__color--negative.button__variant--delete .icon_buttom{color:var(--color-surface-0, #ffffff)}.button__color--negative.button__variant--solid--disabled,.button__color--negative.button__variant--primary--disabled,.button__color--negative.button__variant--delete--disabled{opacity:50%;pointer-events:none}.button__color--negative.button__variant--outline,.button__color--negative.button__variant--tertiary,.button__color--negative.button__variant--delete{background-color:transparent;border-color:var(--color-delete, #e60f0f)}.button__color--negative.button__variant--outline .typo_buttom,.button__color--negative.button__variant--outline .icon_buttom,.button__color--negative.button__variant--tertiary .typo_buttom,.button__color--negative.button__variant--tertiary .icon_buttom,.button__color--negative.button__variant--delete .typo_buttom,.button__color--negative.button__variant--delete .icon_buttom{color:var(--color-delete, #e60f0f)}.button__color--negative.button__variant--outline--disabled,.button__color--negative.button__variant--tertiary--disabled,.button__color--negative.button__variant--delete--disabled{opacity:50%;pointer-events:none}.button__color--negative.button__variant--text,.button__color--negative.button__variant--secondary,.button__color--negative.button__variant--delete{background-color:transparent;border-color:transparent}.button__color--negative.button__variant--text .typo_buttom,.button__color--negative.button__variant--text .icon_buttom,.button__color--negative.button__variant--secondary .typo_buttom,.button__color--negative.button__variant--secondary .icon_buttom,.button__color--negative.button__variant--delete .typo_buttom,.button__color--negative.button__variant--delete .icon_buttom{color:var(--color-delete, #e60f0f)}.button__color--negative.button__variant--text--disabled,.button__color--negative.button__variant--secondary--disabled,.button__color--negative.button__variant--delete--disabled{opacity:50%;pointer-events:none}.button__color--positive.button__variant--solid,.button__color--positive.button__variant--primary{background-color:var(--color-positive, #10603b);border-color:transparent}.button__color--positive.button__variant--solid .typo_buttom,.button__color--positive.button__variant--solid .icon_buttom,.button__color--positive.button__variant--primary .typo_buttom,.button__color--positive.button__variant--primary .icon_buttom{color:var(--color-surface-0, #ffffff)}.button__color--positive.button__variant--solid--disabled,.button__color--positive.button__variant--primary--disabled{opacity:50%;pointer-events:none}.button__color--positive.button__variant--outline,.button__color--positive.button__variant--tertiary{background-color:transparent;border-color:var(--color-positive, #10603b)}.button__color--positive.button__variant--outline .typo_buttom,.button__color--positive.button__variant--outline .icon_buttom,.button__color--positive.button__variant--tertiary .typo_buttom,.button__color--positive.button__variant--tertiary .icon_buttom{color:var(--color-positive, #10603b)}.button__color--positive.button__variant--outline--disabled,.button__color--positive.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__color--positive.button__variant--text,.button__color--positive.button__variant--secondary{background-color:transparent;border-color:transparent}.button__color--positive.button__variant--text .typo_buttom,.button__color--positive.button__variant--text .icon_buttom,.button__color--positive.button__variant--secondary .typo_buttom,.button__color--positive.button__variant--secondary .icon_buttom{color:var(--color-positive, #10603b)}.button__color--positive.button__variant--text--disabled,.button__color--positive.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button.button__variant--secondary{background-color:transparent;border-color:transparent}.button.button__variant--secondary .typo_buttom,.button.button__variant--secondary .icon_buttom{color:var(--color-content-default, #454545)}.button.button__variant--secondary--disabled{opacity:50%;pointer-events:none}.button.button__variant--tertiary{background-color:transparent;border-color:var(--color-border-1, #c9c9c9)}.button.button__variant--tertiary .typo_buttom,.button.button__variant--tertiary .icon_buttom{color:var(--color-content-default, #454545)}.button.button__variant--tertiary--disabled{opacity:50%;pointer-events:none}.button__group{width:100%}.button__position--row--first{border-top-left-radius:10px;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:0;border-left-width:1px;border-top-width:1px;border-bottom-width:1px;border-right-width:1px}.button__position--row--middle{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-width:1px;border-bottom-width:1px;border-left-width:0;border-right-width:1px}.button__position--row--last{border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:10px;border-right-width:1px;border-top-width:1px;border-bottom-width:1px;border-left-width:0px}.button__position--column--first{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0;border-left-width:1px;border-top-width:1px;border-bottom-width:1px;border-right-width:1px}.button__position--column--middle{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-width:0px;border-bottom-width:1px;border-left-width:1px;border-right-width:1px}.button__position--column--last{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-right-width:1px;border-top-width:0px;border-bottom-width:1px;border-left-width:1px}.button__arrow{color:inherit;background-color:inherit;height:24px;margin-left:2px}.button__content{height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}.button::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;z-index:0;border-radius:8px;-webkit-transition:all 0.3s;transition:all 0.3s}.button__position--row--first::before{border-top-left-radius:10px;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:0}.button__position--row--middle::before{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.button__position--row--last::before{border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:10px}.button__position--column--first::before{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}.button__position--column--middle::before{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.button__position--column--last::before{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.button:hover::before{background-color:var(--color-hover, rgba(0, 0, 0, 0.08))}.button:active::before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.button--active::before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.button .hide{cursor:not-allowed;opacity:0}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}.disabled{pointer-events:none}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsClick = createEvent(this, "bdsClick", 7);
    this.handleClick = (ev) => {
      if (!this.disabled) {
        if (ev.key == 'Enter') {
          this.bdsClick.emit(ev);
        }
        if (ev.type == 'click') {
          this.bdsClick.emit(ev);
        }
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.slotText = undefined;
    this.active = undefined;
    this.position = undefined;
    this.direction = undefined;
    this.group = false;
    this.loadingColor = undefined;
    this.block = false;
    this.disabled = false;
    this.color = 'primary';
    this.size = 'medium';
    this.variant = 'solid';
    this.icon = null;
    this.iconLeft = null;
    this.iconRight = null;
    this.arrow = false;
    this.type = 'button';
    this.iconTheme = 'outline';
    this.typeIcon = 'icon';
    this.bdsLoading = false;
    this.bdsLoadingVariant = 'primary';
    this.bdsLoadingColor = 'main';
    this.dataTest = null;
  }
  async isActive(value) {
    this.active = value;
  }
  async setPosition(position) {
    this.position = position;
    this.position ? (this.group = true) : false;
  }
  async setDirection(direction) {
    this.direction = direction;
  }
  async setSize(size) {
    this.size = size;
  }
  async setColor(color) {
    this.color = color;
  }
  async setVariant(variant) {
    this.variant = variant;
  }
  componentDidRender() {
    this.logSlotText();
    this.buttonLegacy();
  }
  buttonLegacy() {
    this.variant === 'facebook' ? this.setVariant('outline') : this.setVariant(this.variant);
    this.size === 'tall'
      ? this.setSize('large')
      : this.size === 'standard'
        ? this.setSize('medium')
        : this.setSize(this.size);
  }
  logSlotText() {
    const slot = this.el.shadowRoot.querySelector('slot');
    const onlyIconElement = this.el.shadowRoot.querySelector('button');
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      let slotText = '';
      assignedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          slotText += node.textContent;
        }
      });
      if (slotText === '' && this.size === 'medium') {
        onlyIconElement.classList.add('button__only-icon--medium');
      }
      if (slotText === '' && this.size === 'large') {
        onlyIconElement.classList.add('button__only-icon--large');
      }
    }
  }
  renderLoadingSpinner() {
    if (this.variant === 'solid') {
      if (['primary', 'positive', 'negative'].includes(this.color)) {
        this.loadingColor = 'light';
      }
      else if (this.color === 'content') {
        this.loadingColor = 'content';
      }
    }
    else if (this.variant === 'outline' || this.variant === 'text') {
      this.loadingColor = this.color === 'positive' ? 'positive' : this.color === 'negative' ? 'negative' : 'main';
    }
    return h("bds-loading-spinner", { size: "small", color: this.loadingColor });
  }
  render() {
    return (h(Host, { class: { host: true, block: this.block, group: this.group } }, h("div", { tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("button", { onClick: (ev) => this.handleClick(ev), disabled: this.disabled, tabindex: "-1", "aria-disabled": this.disabled ? 'true' : 'false', "aria-live": "assertive", type: this.type, class: {
        button: true,
        'button--block': this.block,
        'button--group': this.group,
        [`button__position--${this.direction}--${this.position}`]: true,
        'button--active': this.active,
        [`button__variant--${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
        [`button__${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
        [`button__color--${this.variant === 'delete' ? 'negative' : this.color}`]: true,
        [`button__variant--${this.variant}--disabled`]: this.disabled,
        [`button__size--${this.size}`]: true,
      }, part: "button", "data-test": this.dataTest }, this.bdsLoading ? this.renderLoadingSpinner() : '', this.iconLeft || this.icon ? (h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.icon ? this.icon : this.iconLeft, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: 'medium' })) : (''), h("bds-typo", { class: { typo_buttom: true, hide: this.bdsLoading }, variant: "fs-14", lineHeight: "simple", bold: "bold" }, h("slot", null)), this.iconRight || this.arrow ? (h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.arrow ? 'arrow-right' : this.iconRight, color: "inherit", theme: this.iconTheme, type: this.typeIcon })) : (''))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "bdsLoading": ["renderLoadingSpinner"]
  }; }
};
Button.style = buttonCss;

export { Button as bds_button };
