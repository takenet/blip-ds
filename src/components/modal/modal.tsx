import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'bds-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class BdsModal implements ComponentInterface {
  /**
   * Used to open/close the modal
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public open?: boolean = false;

  /**
   * Used to open/close the modal
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public closeButton?: boolean = true;

  /**
   * Used to show or hide close button
   */
  @Prop({
    mutable: true,
    reflect: true,
  })

  /**
   * Can be used outside to open/close the modal
   */
  @Method()
  async toggle() {
    this.open = !this.open;
  }

  private handleMouseClick = (): void => {
    this.open = false;
  };

  render() {
    return (
      <div
        class={{
          modal__dialog: true,
          'modal__dialog--open': this.open,
        }}
      >
        <div class="modal">
          <bds-modal-close-button active={this.closeButton} onClick={this.handleMouseClick}></bds-modal-close-button>
          <slot></slot>
        </div>
      </div>
    );
  }
}
