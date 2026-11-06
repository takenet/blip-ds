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
        return (index.h(index.Host, { key: '5bc67b9aa7d5363dac65975c03343ed99a9147a6', class: "carrosel-item" }, index.h("bds-theme-provider", { key: '9830c85726d5261a950d276ae4f9dda35a0ff116', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: 'a5be36e77785f300f7885ba17b7976ef895849f5', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: '3306625bbdba6927e0ddecb1b44f9e91b16eddb4' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

exports.bds_carousel_item = BdsCarouselItem;
