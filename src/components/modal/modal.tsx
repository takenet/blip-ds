import { Component, ComponentInterface, h, Method, Event, EventEmitter, Prop } from '@stencil/core';

export type sizes = 'fixed' | 'dynamic';
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
   * Used to change the modal heights.
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public size?: sizes = 'fixed';

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

  private onClickCloseButtom = () => {
    this.open = false;
  };

  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.open = false;
    }
  }

  render() {
    return (
      <div
        class={{
          modal__dialog: true,
          'modal__dialog--open': this.open,
          [`modal__dialog--${this.size}`]: true,
        }}
      >
        <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>
        <div class={{ modal: true, [`modal--${this.size}`]: true }}>
          {this.closeButton && (
            <bds-icon
              size="medium"
              class="close-button"
              name="close"
              tabindex="0"
              onKeyDown={this.handleKeyDown.bind(this)}
              onClick={this.handleMouseClick}
            />
          )}
          {this.size == 'fixed' && <slot></slot>}
          {this.size !== 'fixed' && (
            <div class={{ slot: true, [`slot--${this.size}`]: true }}>
              <slot></slot>
            </div>
          )}
        </div>
      </div>
    );
  }
}
