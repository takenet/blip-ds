import { r as registerInstance, h, H as Host, g as getElement } from './index-611fd21e.js';

const imageCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, #e3e3e3)}";

const Image = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? (h("img", { src: this.currentSrc, alt: this.alt, style: {
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
