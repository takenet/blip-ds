import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-611fd21e.js';

const loadingBarCss = ":host{display:block}.loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border-radius:32px;border:1px solid var(--color-content-disable, #636363);margin-bottom:8px}.loading_bar.size_small{height:8px}.loading_bar.size_small .bar_behind .loading{border-radius:1px}.loading_bar.size_default{height:16px}.loading_bar.size_default .bar_behind .loading{border-radius:2px}.loading_bar .bar_behind{position:absolute;inset:0.5px 1px 1px 0.5px;border-radius:16px;overflow:hidden}.loading_bar .bar_behind .loading{position:absolute;height:100%;background-color:var(--color-extended-blue, #1968f0);-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;overflow:hidden}.loading_bar .bar_behind .loading .loader{position:absolute;left:-16px;width:calc(100% + 16px);height:100%;background:white;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(75%, rgba(255, 255, 255, 0)), color-stop(75%, rgba(0, 0, 0, 0.26)));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.26) 75%);background-size:4px;-webkit-transform:skewX(-15deg);transform:skewX(-15deg);-webkit-animation-name:load;animation-name:load;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.typo_loading{padding-left:8px;padding-right:8px;color:var(--color-content-default, #454545)}@-webkit-keyframes load{from{left:-16px}to{left:0}}@keyframes load{from{left:-16px}to{left:0}}";

const BdsloadingBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.percent = 0;
    this.size = 'default';
    this.text = '';
    this.dataTest = null;
  }
  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (h(Host, null, h("div", { class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { class: { bar_behind: true } }, h("div", { class: { loading: true }, style: styles }, h("div", { class: "loader" }))))));
  }
};
BdsloadingBar.style = loadingBarCss;

const RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsRadioGroupChange = createEvent(this, "bdsRadioGroupChange", 7);
    this.radioGroupElement = null;
    this.chagedOptions = (value, event) => {
      if (event.detail.checked == true) {
        this.value = value;
      }
    };
    this.value = undefined;
  }
  valueChanged(value) {
    this.setSelectedRadio(value);
    this.bdsRadioGroupChange.emit({ value });
  }
  componentWillRender() {
    this.radioGroupElement = this.element.getElementsByTagName('bds-radio');
    for (let i = 0; i < this.radioGroupElement.length; i++) {
      this.radioGroupElement[i].addEventListener('bdsChange', (event) => this.chagedOptions(this.radioGroupElement[i].value, event));
    }
  }
  setSelectedRadio(value) {
    const radios = this.radioGroupElement;
    for (let i = 0; i < radios.length; i++) {
      const getValue = radios[i].value;
      radios[i].checked = false;
      if (radios[i].checked == false && value == getValue) {
        radios[i].checked = true;
      }
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};

const skeletonCss = ".skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, #454545);opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}";

const Skeleton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shape = 'square';
    this.height = '50px';
    this.width = '100%';
    this.dataTest = null;
  }
  render() {
    return (h(Host, { style: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        width: this.width,
        height: this.height,
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
      } }, h("bds-grid", { xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
        overflow: 'hidden',
      }, "data-test": this.dataTest }, h("div", { class: "animation" }))));
  }
};
Skeleton.style = skeletonCss;

export { BdsloadingBar as bds_loading_bar, RadioGroup as bds_radio_group, Skeleton as bds_skeleton };
