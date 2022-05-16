import { Component, Host, Prop, h } from '@stencil/core';

export type loadingSize = 'small' | 'standard' | 'large';
export type colorsVariants = 'default' | 'white';

@Component({
  tag: 'bds-fast-loading',
  styleUrl: 'fast-loading.scss',
  shadow: true,
})
export class BdsFastLoading {
  /**
   * Size, Entered as one of the size. Can be one of:
   * 'small', 'standard', 'large'.
   */
  @Prop() size?: loadingSize = 'standard';
  /**
   * Color, Entered as one of the color. Can be one of:
   * 'default', 'white'.
   */
  @Prop() color?: colorsVariants = 'default';

  render() {
    return (
      <Host>
        <div class={{ fast_loading: true }}></div>
      </Host>
    );
  }
}
