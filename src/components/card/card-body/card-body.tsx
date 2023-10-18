import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'bds-card-body',
  shadow: true,
})
export class CardBody implements ComponentInterface {
  render() {
    return (
      <bds-grid>
        <slot />
      </bds-grid>
    );
  }
}
