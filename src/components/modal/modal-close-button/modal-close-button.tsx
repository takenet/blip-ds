import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'bds-modal-close-button',
  styleUrl: 'modal-close-button.scss',
  shadow: true,
})
export class BdsModalCloseButton implements ComponentInterface {
  @Prop({
    mutable: true,
    reflect: true,
  })
  public active?: boolean = true;

  render() {
    return (
      <div
        class={{
          'modal__close__button-icon': true,
          'modal__close__button-icon--active': this.active,
        }}
      >
        <bds-icon size="medium" name="close"></bds-icon>
      </div>
    );
  }
}
