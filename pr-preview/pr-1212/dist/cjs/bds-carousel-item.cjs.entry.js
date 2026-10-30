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
        return (index.h(index.Host, { key: '6a8f7c6469e5817332dcea6931840fdc7a0e5503', class: "carrosel-item" }, index.h("bds-theme-provider", { key: 'fca974dab255ca04e0fe72bfced375174803505d', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: '1122859e1541c9a69e86662c8db280564cc80e9a', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: '0422980a546d17f73d82476cab89787815a42105' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

exports.bds_carousel_item = BdsCarouselItem;
