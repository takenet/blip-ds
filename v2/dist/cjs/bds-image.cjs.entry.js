'use strict';

var index = require('./index-BuAR9UTp.js');

const imageCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, rgb(227, 227, 227))}`;

const Image = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'ab977e7cd30a5099a6f03cb9db535613fef463bd', class: { empty_img: !this.imageLoaded } }, this.currentSrc && !this.loadError && (index.h("img", { key: '7f4d85726077ecb33e153fd96825dd04d59449fc', src: this.currentSrc, alt: this.alt, hidden: !this.imageLoaded, onLoad: () => {
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
            }, "data-test": this.dataTest, draggable: false })), !this.imageLoaded && (this.imageHasLoading ? (index.h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (index.h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest })))));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "src": [{
                "loadImage": 0
            }]
    }; }
};
Image.style = imageCss();

exports.bds_image = Image;
