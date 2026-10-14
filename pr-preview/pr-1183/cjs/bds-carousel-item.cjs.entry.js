'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const carouselItemCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}";

const BdsCarouselItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'light';
    this.bgImage = undefined;
    this.bgImageBrightness = 1;
    this.bgColor = undefined;
  }
  render() {
    return (index.h(index.Host, { class: "carrosel-item" }, index.h("bds-theme-provider", { theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", null))));
  }
};
BdsCarouselItem.style = carouselItemCss;

exports.bds_carousel_item = BdsCarouselItem;
