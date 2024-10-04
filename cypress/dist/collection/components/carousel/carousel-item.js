import { h } from '@stencil/core';
export class BdsCarouselItem {
  render() {
    return h("slot", null);
  }
  static get is() { return "bds-carousel-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["carousel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["carousel.css"]
    };
  }
}
