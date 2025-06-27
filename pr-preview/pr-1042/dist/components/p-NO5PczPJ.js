import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-CGgHblXS.js';
import { d as defineCustomElement$2 } from './p-BiURb2Nl.js';
import { d as defineCustomElement$1 } from './p-ocQDTgq9.js';

const imageCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, rgb(227, 227, 227))}";

const Image = /*@__PURE__*/ proxyCustomElement(class Image extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.imageHasLoading = false;
        /**
         * Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'.
         */
        this.objectFit = 'cover';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Indicates whether the main image has been successfully loaded.
         */
        this.imageLoaded = false;
        /**
         * Indicates whether there was an error during image loading.
         */
        this.loadError = false;
    }
    componentDidLoad() {
        var _a;
        this.element.style.width = this.width ? this.width : 'auto';
        this.element.style.height = ((_a = this.height) === null || _a === void 0 ? void 0 : _a.length) > 0 ? this.height : 'auto';
    }
    async loadImage() {
        if (this.src) {
            this.imageHasLoading = true;
            try {
                const response = await fetch(this.src);
                if (response.ok) {
                    const blob = await response.blob();
                    const objectURL = URL.createObjectURL(blob);
                    this.currentSrc = objectURL;
                    this.imageLoaded = true;
                    this.imageHasLoading = false;
                }
                else {
                    this.loadError = true;
                }
            }
            catch (_a) {
                this.imageHasLoading = false;
                this.loadError = true;
            }
        }
    }
    render() {
        if (!this.imageLoaded && !this.loadError) {
            // Se a imagem ainda não foi carregada, chame o método loadImage
            this.loadImage();
        }
        return (h(Host, { key: '707a66cceac96d4b398d8f6365c591c3341a6b44', class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? (h("img", { src: this.currentSrc, alt: this.alt, style: {
                objectFit: this.objectFit,
                width: '100%',
                height: '100%',
                filter: `brightness(${this.brightness})`,
            }, "data-test": this.dataTest, draggable: false })) : this.imageHasLoading ? (h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest }))));
    }
    get element() { return this; }
    static get style() { return imageCss; }
}, [1, "bds-image", {
        "src": [1537],
        "alt": [1],
        "width": [1],
        "height": [1],
        "objectFit": [1, "object-fit"],
        "brightness": [2],
        "dataTest": [1, "data-test"],
        "imageLoaded": [32],
        "loadError": [32],
        "currentSrc": [32],
        "loadImage": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-image", "bds-grid", "bds-illustration", "bds-skeleton"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-image":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Image);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-illustration":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bds-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Image as I, defineCustomElement as d };
//# sourceMappingURL=p-NO5PczPJ.js.map

//# sourceMappingURL=p-NO5PczPJ.js.map