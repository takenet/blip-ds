import { r as registerInstance, c as createEvent, h } from './index-611fd21e.js';

const iconButtonCss = ".icon__button{border:none;margin:0;padding:0;width:auto;overflow:visible;outline:none;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s;border-radius:8px;padding:8px}.icon__button::-moz-focus-inner{border:0;padding:0}.icon__button::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.icon__button:focus-visible{outline:none}.icon__button:focus-visible::before{border-color:var(--color-focus, #c226fb)}.icon__button::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;z-index:0;border-radius:8px}.icon__button:hover::after{background-color:var(--color-hover, rgba(0, 0, 0, 0.08))}.icon__button:active::after{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.icon__button .icon__button{position:relative;z-index:1}.icon__button *{pointer-events:none}.icon__button--primary{background:var(--color-surface-primary, #1e6bf1)}.icon__button--primary .bds-icon{color:var(--color-content-bright, #ffffff)}.icon__button--primary--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#e8f2ff;border:#637798}.icon__button--primary--disabled:hover,.icon__button--primary--disabled:active{color:#e8f2ff;border:#637798}.icon__button--secondary{color:var(--color-content-default, #454545);background:transparent}.icon__button--secondary .bds-icon{color:var(--color-content-default, #454545)}.icon__button--secondary--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:transparent;border:#637798}.icon__button--secondary--disabled:hover,.icon__button--secondary--disabled:active{color:transparent;border:#637798}.icon__button--tertiary{background:transparent;border:1px solid var(--color-border-1, #c9c9c9)}.icon__button--tertiary .bds-icon{color:var(--color-content-default, #454545)}.icon__button--tertiary--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#637798;border:1px solid #637798}.icon__button--tertiary--disabled:hover,.icon__button--tertiary--disabled:active{color:#637798;border:1px solid #637798}.icon__button--ghost{background:transparent;border:1px solid var(--color-border-1, #c9c9c9)}.icon__button--ghost .bds-icon{color:var(--color-content-default, #454545)}.icon__button--ghost--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#637798;border:1px solid #637798}.icon__button--ghost--disabled:hover,.icon__button--ghost--disabled:active{color:#637798;border:1px solid #637798}.icon__button--secondary-white{background:transparent;color:#ffffff}.icon__button--secondary-white:hover,.icon__button--secondary-white:focus{background:rgba(255, 255, 255, 0.3);color:#ffffff}.icon__button--secondary-white:active{background:rgba(255, 255, 255, 0.4);color:#ffffff}.icon__button--secondary-white--disabled{cursor:not-allowed;color:#637798;background:#e8f2ff}.icon__button--delete{background:var(--color-delete, #e60f0f)}.icon__button--delete .bds-icon{color:var(--color-content-bright, #ffffff)}.icon__button--delete--disabled{opacity:50%;pointer-events:none;cursor:not-allowed;color:#ba5a5a}.icon__button--delete--disabled:hover,.icon__button--delete--disabled:active{color:#ba5a5a}.icon__button.size-tall{width:56px;height:56px}.icon__button.size-standard{width:48px;height:48px}.icon__button.size-short{width:40px;height:40px}";

const IconButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsClick = createEvent(this, "bdsClick", 7);
    this.mapSize = {
      tall: 'xxx-large',
      standard: 'x-large',
      short: 'medium',
    };
    this.mapVariantStyle = {
      primary: 'icon__button--primary',
      secondary: 'icon__button--secondary',
      tertiary: 'icon__button--tertiary',
      delete: 'icon__button--delete',
      ghost: 'icon__button--ghost',
      'secondary--white': 'icon__button--secondary-white',
    };
    this.handleClick = (ev) => {
      if (!this.disabled) {
        this.bdsClick.emit(ev);
      }
    };
    this.disabled = false;
    this.size = 'standard';
    this.variant = 'primary';
    this.iconTheme = 'outline';
    this.icon = null;
    this.dataTest = null;
  }
  render() {
    if (!this.icon)
      return null;
    const size = this.mapSize[this.size];
    const state = this.mapVariantStyle[this.variant];
    return (h("button", { onClick: (ev) => this.handleClick(ev), disabled: this.disabled, class: {
        ['icon__button']: true,
        [state]: true,
        [`${state}--disabled`]: this.disabled,
        [`size-${this.size}`]: true,
      }, "data-test": this.dataTest, tabindex: "0" }, h("bds-icon", { name: this.icon, size: size, theme: this.iconTheme, color: "inherit" })));
  }
};
IconButton.style = iconButtonCss;

export { IconButton as bds_button_icon };
