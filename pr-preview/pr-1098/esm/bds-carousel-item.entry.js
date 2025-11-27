import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const carouselItemCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}";

const BdsCarouselItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = 'light';
    this.bgImage = undefined;
    this.bgImageBrightness = 1;
    this.bgColor = undefined;
  }
  render() {
    return (h(Host, { class: "carrosel-item" }, h("bds-theme-provider", { theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", null))));
  }
};
BdsCarouselItem.style = carouselItemCss;

export { BdsCarouselItem as bds_carousel_item };
