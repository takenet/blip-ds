import { Component, Host, h, Prop } from '@stencil/core';

export type Color = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'outline' | 'disabled';

@Component({
  tag: 'bds-chip-tag',
  styleUrl: 'chip-tag.scss',
  shadow: true,
})
export class ChipTag {
  /**
   * used for add icon in left container. Uses the bds-icon component.
   */
  @Prop() icon?: string;
  /**
   * used for change the color. Uses one of them.
   */
  @Prop() color?: Color = 'default';
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  render() {
    return (
      <Host>
        <div
          class={{
            chip_tag: true,
            [`chip_tag--${this.color}`]: true,
          }}
          data-test={this.dataTest}
        >
          {this.icon && (
            <div class="chip_tag--icon">
              <bds-icon size="x-small" name={this.icon}></bds-icon>
            </div>
          )}
          <div class={this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full`}>
            <bds-typo no-wrap="true" class="chip_tag--text" variant="fs-12" bold="bold">
              <slot></slot>
            </bds-typo>
          </div>
        </div>
      </Host>
    );
  }
}
