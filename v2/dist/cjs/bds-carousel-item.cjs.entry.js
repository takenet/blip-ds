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
        return (index.h(index.Host, { key: '4790642f490dd16a97e5459a565bda0977777b3b', class: "carrosel-item" }, index.h("bds-theme-provider", { key: '524a7e8f2998d4d6e7cc53e008e6520f72936e67', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '01c8c54cd5d682fba061710c3c3684fa6507e637', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: 'aefee624ef00b5f497eaec54a58e730c29c8cef5' }))));
    }
};
BdsCarouselItem.style = carouselItemCss;

exports.bds_carousel_item = BdsCarouselItem;
//# sourceMappingURL=bds-carousel-item.entry.cjs.js.map

//# sourceMappingURL=bds-carousel-item.cjs.entry.js.map