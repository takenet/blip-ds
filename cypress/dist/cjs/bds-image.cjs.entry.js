'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const imageCss = ":host{display:inline-block}";

const Image = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.src = undefined;
    this.alt = undefined;
    this.width = undefined;
    this.height = undefined;
    this.objectFit = 'cover';
    this.dataTest = null;
    this.imageLoaded = false;
    this.loadError = false;
    this.currentSrc = undefined;
  }
  async loadImage() {
    if (this.src) {
      try {
        const response = await fetch(this.src);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          this.currentSrc = objectURL;
          this.imageLoaded = true;
        }
        else {
          this.loadError = true;
        }
      }
      catch (_a) {
        this.loadError = true;
      }
    }
  }
  render() {
    if (!this.imageLoaded && !this.loadError) {
      // Se a imagem ainda não foi carregada, chame o método loadImage
      this.loadImage();
    }
    if (this.imageLoaded) {
      return (index.h("img", { src: this.currentSrc, alt: this.alt, style: { objectFit: this.objectFit, width: this.width, height: this.height }, "data-test": this.dataTest, draggable: false }));
    }
    else if (!this.src) {
      // Se imageLoaded for falso e src estiver vazia, renderize a ilustração "image-not-found"
      return (index.h("div", { style: { width: this.width || this.height ? this.width : '100%' } }, index.h("bds-illustration", { type: "empty-states", name: "image-not-found", alt: this.alt, "data-test": this.dataTest })));
    }
    else {
      // Se imageLoaded for falso e src não estiver vazia, renderize a ilustração "broken-image"
      return (index.h("div", { style: { width: this.width || this.height ? this.width : '100%' } }, index.h("bds-illustration", { type: "empty-states", name: "broken-image", alt: this.alt, "data-test": this.dataTest })));
    }
  }
};
Image.style = imageCss;

exports.bds_image = Image;
