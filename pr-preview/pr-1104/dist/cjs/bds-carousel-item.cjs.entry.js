'use strict';

var index = require('./index-D_zq0Z7d.js');

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
        return (index.h(index.Host, { key: 'c14d96bc55b5e5008d3fcb707876050b39c509c6', class: "carrosel-item" }, index.h("bds-theme-provider", { key: 'b32b18a61e3648d8c0972f700d1b231ded71b620', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '89a3347329bee52dd4fbd8646d9a415afa73ec84', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: 'bcd4d4d74eb34c667a76e114447e37927a389f71' }))));
    }
};
BdsCarouselItem.style = carouselItemCss;

exports.bds_carousel_item = BdsCarouselItem;
//# sourceMappingURL=bds-carousel-item.entry.cjs.js.map

//# sourceMappingURL=bds-carousel-item.cjs.entry.js.map