import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bds-carousel-item',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class BdsCarouselItem {
  render() {
    return (
      <Host class={{ item: true }}>
        <slot></slot>
      </Host>
    );
  }
}
