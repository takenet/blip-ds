import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';

const carouselItemCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}";

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
        return (h(Host, { key: '97d4905acb5925034403e909c4b2c87aeda5ae67', class: "carrosel-item" }, h("bds-theme-provider", { key: 'e7746ebd74e698b99b7286ee93cd37f9c254fa03', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: 'd52e32c3203349d2955e037f93ba02682489b99e', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: 'e5544e36e76a18107f8fc15caa4fc65745ee3200' }))));
    }
};
BdsCarouselItem.style = carouselItemCss;

export { BdsCarouselItem as bds_carousel_item };
//# sourceMappingURL=bds-carousel-item.entry.js.map

//# sourceMappingURL=bds-carousel-item.entry.js.map