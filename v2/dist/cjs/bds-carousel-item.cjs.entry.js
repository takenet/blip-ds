'use strict';

var index = require('./index-DQyYkciT.js');

const carouselItemCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}";

const BdsCarouselItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Set what theme will be aplyed inside the component.
         * 'light', 'dark';
         */
        this.theme = 'light';
        this.bgImageBrightness = 1;
    }
    render() {
        return (index.h(index.Host, { key: 'b2f8cdc055d5de2543f9a6944a4b1041be114b1b', class: "carrosel-item" }, index.h("bds-theme-provider", { key: '9fdf9eba6c5e22051ab430d0143b0df99c98c489', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '0e95a72eaf02b289aa21c01950e22603e8229311', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: '09142215709d9d3b320f70434215a52f2463929e' }))));
    }
};
BdsCarouselItem.style = carouselItemCss;

exports.bds_carousel_item = BdsCarouselItem;
//# sourceMappingURL=bds-carousel-item.entry.cjs.js.map

//# sourceMappingURL=bds-carousel-item.cjs.entry.js.map