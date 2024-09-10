import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-carousel-item',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class BdsCarouselItem {
  render(): HTMLElement {
    return <slot />;
  }
}
