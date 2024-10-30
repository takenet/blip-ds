import { Component, h, Host, Prop } from '@stencil/core';
import { Themes } from '../theme-provider/theme-provider';
@Component({
  tag: 'bds-carousel-item',
  styleUrl: 'carousel-item.scss',
  shadow: true,
})
export class BdsCarouselItem {
  /**
   * Set what theme will be aplyed inside the component.
   * 'light', 'dark';
   */
  @Prop() theme?: Themes = 'light';

  @Prop() bgImage?: string;

  @Prop() bgImageBrightness?: number = 1;

  @Prop() bgColor?: string;

  render(): HTMLElement {
    return (
      <Host class="carrosel-item">
        <bds-theme-provider theme={this.theme} class="carrosel-item-frame" style={{ background: this.bgColor }}>
          {this.bgImage && (
            <bds-image
              class="image-bg"
              alt="Example of a image"
              width="100%"
              height="100%"
              brightness={this.bgImageBrightness}
              object-fit="cover"
              src={this.bgImage}
            />
          )}
          <slot />
        </bds-theme-provider>
      </Host>
    );
  }
}
