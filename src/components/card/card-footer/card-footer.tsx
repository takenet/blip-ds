import { Component, ComponentInterface, h, Prop } from '@stencil/core';

export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  tag: 'bds-card-footer',
  styleUrl: 'card-footer.scss',
  shadow: true,
})
export class CardFooter implements ComponentInterface {
  /**
   * Prop for internal elements alignment. Will follow the same values of css.
   */
  @Prop() align?: justifyContent = 'flex-end';
  render() {
    return (
      <bds-grid xxs="12" direction="row" gap="2" justifyContent={this.align}>
        <slot />
      </bds-grid>
    );
  }
}
