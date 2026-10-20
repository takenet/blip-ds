import { r as registerInstance, h, H as Host, a as getElement } from './index-gowA9FoV.js';

const imageCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, rgb(227, 227, 227))}";

const Image = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    componentWillLoad() {
        this.loadImage();
    }
    componentDidLoad() {
        var _a;
        this.element.style.width = this.width ? this.width : 'auto';
        this.element.style.height = ((_a = this.height) === null || _a === void 0 ? void 0 : _a.length) > 0 ? this.height : 'auto';
    }
    async loadImage() {
        this.imageLoaded = false;
        this.loadError = false;
        this.currentSrc = this.src || undefined;
        this.imageHasLoading = !!this.currentSrc;
    }
    render() {
        var _a;
        return (h(Host, { key: '3de2dfe02e30c64a7ca439bcf31e442e524c6a31', class: { empty_img: !this.imageLoaded } }, this.currentSrc && !this.loadError && (h("img", { key: 'eeecb765739c9756bd5da797d20e3dcde3e555cd', src: this.currentSrc, alt: this.alt, hidden: !this.imageLoaded, onLoad: () => {
                this.imageLoaded = true;
                this.imageHasLoading = false;
            }, onError: () => {
                this.loadError = true;
                this.imageHasLoading = false;
            }, style: {
                objectFit: this.objectFit,
                width: '100%',
                height: '100%',
                filter: `brightness(${(_a = this.brightness) !== null && _a !== void 0 ? _a : 1})`,
            }, "data-test": this.dataTest, draggable: false })), !this.imageLoaded && (this.imageHasLoading ? (h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest })))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "src": ["loadImage"]
    }; }
};
Image.style = imageCss;

export { Image as bds_image };
//# sourceMappingURL=bds-image.entry.js.map

//# sourceMappingURL=bds-image.entry.js.map