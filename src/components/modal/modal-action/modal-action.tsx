import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'bds-modal-action',
  styleUrl: 'modal-action.scss',
  shadow: true,
})
export class BdsModalAction implements ComponentInterface {
  render() {
    return (
      <div class="modal__action">
        <slot />
      </div>
    );
  }
}
