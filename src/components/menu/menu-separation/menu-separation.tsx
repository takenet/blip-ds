import { Component, h, Prop } from '@stencil/core';

export type divisorSize = 'small' | 'default' | 'large';

@Component({
  tag: 'bds-menu-separation',
  styleUrl: 'menu-separation.scss',
  shadow: true,
})
export class BdsMenuSeparation {
  /**
   * Value. Used to insert a title to the divider.
   */
  @Prop() value?: string = null;
  /**
   * Size. Used to set the size of the divider.
   */
  @Prop() size?: string = null;
  render() {
    return (
      <div
        class={{
          menuseparation: true,
          [`menuseparation__${this.size}`]: true,
        }}
      >
        {this.value && (
          <bds-typo class="title-item" variant="fs-10" tag="span">
            {this.value}
          </bds-typo>
        )}
        <div class="dividor-item"></div>
      </div>
    );
  }
}
