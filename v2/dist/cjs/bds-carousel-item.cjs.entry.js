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
        return (index.h(index.Host, { key: 'f22b3aa5ca703694fed3fdd8042cf9d3cc680fe8', class: "carrosel-item" }, index.h("bds-theme-provider", { key: 'ec90a5cc0238947c580edaa1ee517f5130d969a3', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (index.h("bds-image", { key: 'e1233d9d40727a931139ae104158e51254da3bda', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), index.h("slot", { key: '4a8d7fa943b6e56d1d53c22a0fca61dec60c70f8' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

exports.bds_carousel_item = BdsCarouselItem;
