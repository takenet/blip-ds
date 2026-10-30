import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

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
        return (h(Host, { key: 'f212046a8f75d8c7e9e8c36a122b58f6fbde65c1', class: "carrosel-item" }, h("bds-theme-provider", { key: 'aa1ec211a3abe45ec446e96fddcbfc02f077b98c', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '18b285142578c643608faa09be80dda28f4fe0c8', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: '7990fc5119bc0a4d7604be6e0cd87e56bd19ca1f' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

export { BdsCarouselItem as bds_carousel_item };
