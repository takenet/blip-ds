import { Component, ComponentInterface, Prop, h } from '@stencil/core';

export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  tag: 'bds-card-header',
  styleUrl: 'card-header.scss',
  shadow: true,
})
export class CardHeader implements ComponentInterface {
  /**
   * Prop for internal elements alignment. Will follow the same values of css.
   */
  @Prop() align?: justifyContent = 'space-between';

  render() {
    return (
      <bds-grid xxs="12" direction="row" gap="1" justifyContent={this.align} alignItems="center">
        <slot />
      </bds-grid>
    );
  }
}
