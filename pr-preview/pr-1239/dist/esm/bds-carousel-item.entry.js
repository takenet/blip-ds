import { r as registerInstance, h, H as Host } from './index-DUwG7Zwx.js';

const carouselItemCss = () => `:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}`;

const BdsCarouselItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Set what theme will be aplyed inside the component.
         * 'light', 'dark';
         */
        this.theme = 'light';
        this.bgImageBrightness = 1;
    }
    render() {
        return (h(Host, { key: '3454805988e06580f9af56bc6bfde6cfac9e90f8', class: "carrosel-item" }, h("bds-theme-provider", { key: '27c05299e2d0455f7dca76fa64088338cb72e208', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: 'd5b9211bb2040f5ce34c51a29a6606c485ce75e1', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: '6713f0b75e806ffb61e0a1197b28c5a85cb53b3b' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

export { BdsCarouselItem as bds_carousel_item };
