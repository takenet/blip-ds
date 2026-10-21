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
        return (index.h(index.Host, { key: 'dc8f7fa05ee9790c507a5b12493ab51463957abb', class: "carrosel-item" }, index.h("bds-theme-provider", { key: 'a631e914479c108a67f234b7c16f5d3616196d6e', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '642e5e630b08cf9a2f2814adf4fd3174adfbcd9d', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: '8cd4b5eb8a6817cfd6de5eb3366a24b3e158c08d' }))));
    }
};
BdsCarouselItem.style = carouselItemCss;

exports.bds_carousel_item = BdsCarouselItem;
//# sourceMappingURL=bds-carousel-item.entry.cjs.js.map

//# sourceMappingURL=bds-carousel-item.cjs.entry.js.map