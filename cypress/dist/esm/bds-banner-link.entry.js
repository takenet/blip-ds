import { r as registerInstance, c as createEvent, h, g as getElement } from './index-611fd21e.js';

const bannerLinkCss = ":Host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;text-decoration:underline;white-space:nowrap;margin-left:16px;-ms-flex-order:2;order:2}.banner__link{position:relative}.banner__link::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.banner__link:focus-visible{outline:none}.banner__link:focus-visible::before{border-color:var(--color-focus, #c226fb)}";

const BannerLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsBannerLink = createEvent(this, "bdsBannerLink", 7);
    this._buttonClickHandler = () => {
      this.bdsBannerLink.emit(this.el);
      window.open(this.link);
    };
    this.link = undefined;
    this.dataTest = null;
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.bdsBannerLink.emit(this.el);
      window.open(this.link);
    }
  }
  render() {
    const Element = 'a';
    return (h(Element, { class: { banner__link: true }, onClick: () => this._buttonClickHandler(), "data-test": this.dataTest, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
BannerLink.style = bannerLinkCss;

export { BannerLink as bds_banner_link };
