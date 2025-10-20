'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const imageCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, #e3e3e3)}";

const Image = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.imageHasLoading = false;
    this.src = undefined;
    this.alt = undefined;
    this.width = undefined;
    this.height = undefined;
    this.objectFit = 'cover';
    this.brightness = undefined;
    this.dataTest = null;
    this.imageLoaded = false;
    this.loadError = false;
    this.currentSrc = undefined;
  }
  componentDidLoad() {
    this.element.style.width = this.width ? this.width : 'auto';
    this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
  }
  async loadImage() {
    if (this.src) {
      this.imageHasLoading = true;
      try {
        // Check if src is a data URL
        if (this.src.startsWith('data:')) {
          // Data URLs don't need to be fetched - use directly
          // Use Promise.resolve to keep it async and avoid state changes during render
          await Promise.resolve();
          this.currentSrc = this.src;
          this.imageLoaded = true;
          this.imageHasLoading = false;
        }
        else {
          // Regular URLs need to be fetched
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
    return (index.h(index.Host, { class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? (index.h("img", { src: this.currentSrc, alt: this.alt, style: {
        objectFit: this.objectFit,
        width: '100%',
        height: '100%',
        filter: `brightness(${this.brightness})`,
      }, "data-test": this.dataTest, draggable: false })) : this.imageHasLoading ? (index.h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (index.h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest }))));
  }
  get element() { return index.getElement(this); }
};
Image.style = imageCss;

exports.bds_image = Image;
