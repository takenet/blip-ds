import { r as registerInstance, h, H as Host, a as getElement } from './index-UYZ9xe6Z.js';

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
    componentDidLoad() {
        this.element.style.width = this.width ? this.width : 'auto';
        this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
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
            catch {
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
    get element() { return getElement(this); }
};
Image.style = imageCss;

export { Image as bds_image };
//# sourceMappingURL=bds-image.entry.js.map

//# sourceMappingURL=bds-image.entry.js.map