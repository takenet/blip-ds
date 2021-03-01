import { Component, ComponentInterface, h, Method, Event, EventEmitter, Prop } from '@stencil/core';

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
   * Used to hide or show the close button
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public closeButton?: boolean = true;

  /**
   * Emitted when modal status has changed.
   */
  @Event() bdsModalChanged!: EventEmitter;

  /**
   * Can be used outside to open/close the modal
   */
  @Method()
  async toggle() {
    this.open = !this.open;

    if (this.open) {
      this.bdsModalChanged.emit({ modalStatus: 'opened' });
    } else {
      this.bdsModalChanged.emit({ modalStatus: 'closed' });
    }
  }

  private handleMouseClick = (): void => {
    this.open = false;
    this.bdsModalChanged.emit({ modalStatus: 'closed' });
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
          <div class="modal__container">
            <bds-modal-close-button active={this.closeButton} onClick={this.handleMouseClick}></bds-modal-close-button>
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
