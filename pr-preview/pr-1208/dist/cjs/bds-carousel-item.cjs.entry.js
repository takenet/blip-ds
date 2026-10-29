'use strict';

var index = require('./index-BuAR9UTp.js');

const carouselItemCss = () => `:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}`;

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
        return (index.h(index.Host, { key: '9816220cbe08d233e5ae19dcccc229fd40a7adae', class: "carrosel-item" }, index.h("bds-theme-provider", { key: '24a9af783186acf42a7e2922abfa324c642c8948', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '63a88c7d0efb79a38e97af5015438c269360bfca', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: '227dca52a0cb6282c30e2972dd8caf6707ce0852' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

exports.bds_carousel_item = BdsCarouselItem;
