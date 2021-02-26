import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'bds-modal-buttons',
  styleUrl: 'modal-buttons.scss',
  shadow: true,
})
export class BdsModalButtons implements ComponentInterface {
  render() {
    return (
      <div class="modal__buttons">
          <slot />
      </div>
    );
  }
}
