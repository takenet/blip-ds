import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

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
        return (h(Host, { key: '331cfbf8d09d59f7bc44936b5349560aff41626b', class: "carrosel-item" }, h("bds-theme-provider", { key: 'dcb19bd78a6610abe6011b74ec26edfac90a1e29', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '33920b16fc9eb5f1933b16b37ec61494fd548eba', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: '393a7a76b90d3519e26f199b1d90310e28c2e8fe' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

export { BdsCarouselItem as bds_carousel_item };
