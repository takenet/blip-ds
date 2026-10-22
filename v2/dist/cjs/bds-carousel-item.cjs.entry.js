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
        return (index.h(index.Host, { key: '38ed1e36726ba360880a2c3154efd66e68058f66', class: "carrosel-item" }, index.h("bds-theme-provider", { key: '89c4b9ca53aa99e615d01ef518a2912c5bbd0d3d', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '79d44206ee540c473a54a7f8183ea955d1a90c08', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: 'ec86652ff127e65b34759bb93d54e73b026b9281' }))));
    }
};
BdsCarouselItem.style = carouselItemCss;

exports.bds_carousel_item = BdsCarouselItem;
//# sourceMappingURL=bds-carousel-item.entry.cjs.js.map

//# sourceMappingURL=bds-carousel-item.cjs.entry.js.map