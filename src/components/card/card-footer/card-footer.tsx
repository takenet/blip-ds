import { Component, ComponentInterface, h, Prop } from '@stencil/core';

export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  tag: 'bds-card-footer',
  shadow: true,
})
export class CardFooter implements ComponentInterface {
  @Prop() align?: justifyContent = 'flex-end';
  render() {
    return (
      <bds-grid direction="row" gap="2" justifyContent={this.align}>
        <slot />
      </bds-grid>
    );
  }
}
