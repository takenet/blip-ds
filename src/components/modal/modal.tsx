import { Component, ComponentInterface, h, Method, Event, EventEmitter, Prop, Watch } from '@stencil/core';

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
   * If true, the modal will close clicking outside the component.
   */
  @Prop() outzoneClose?: boolean = true;

  /**
   * If true, the modal will close keydown Enter.
   */
  @Prop() enterClose?: boolean = true;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtOutzone is the data-test to button close.
   */
  @Prop() dtOutzone?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonClose is the data-test to button close.
   */
  @Prop() dtButtonClose?: string = null;

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

  @Watch('open')
  protected isOpenChanged(): void {
    if (this.open) {
      document.addEventListener('keydown', this.listener, false);
    } else document.removeEventListener('keydown', this.listener, false);
  }

  private listener = (event) => {
    if (this.enterClose && (event.key == 'Enter' || event.key == 'Escape')) {
      this.toggle();
    }
  };

  private handleMouseClick = (): void => {
    this.open = false;
    this.bdsModalChanged.emit({ modalStatus: 'closed' });
  };

  private onClickCloseButtom = () => {
    if (this.outzoneClose === true) {
      this.open = false;
      this.bdsModalChanged.emit({ modalStatus: 'closed' });
    }
  };

  render() {
    return (
      <div
        class={{
          modal__dialog: true,
          'modal__dialog--open': this.open,
          [`modal__dialog--${this.size}`]: true,
        }}
      >
        <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()} data-test={this.dtOutzone}></div>
        <div class={{ modal: true, [`modal--${this.size}`]: true }}>
          {this.closeButton && (
            <bds-icon
              size="medium"
              class="close-button"
              name="close"
              tabindex="0"
              onClick={this.handleMouseClick}
              dataTest={this.dtButtonClose}
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