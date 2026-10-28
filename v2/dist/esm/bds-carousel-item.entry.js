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
        return (h(Host, { key: 'c8a4cddb82731ba9930a6e06a94e2fd4b2444442', class: "carrosel-item" }, h("bds-theme-provider", { key: 'b3e9d283a334b3fb90a7709ca6751342fd005ef9', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '024ca7306e295b736d40f0e337278fdbe7474f79', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: '322673ea8d126b732b4b515d7b1bb7c8c04a123e' }))));
    }
};
BdsCarouselItem.style = carouselItemCss();

export { BdsCarouselItem as bds_carousel_item };
