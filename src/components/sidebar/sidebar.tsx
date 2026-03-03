import { Component, h, State, Prop, EventEmitter, Event, Method, Watch, Element } from '@stencil/core';

export type sidebarPosition = 'left' | 'right';
export type sidebarType = 'over' | 'fixed';
export type sidebarBackground = 'surface-0' | 'surface-1' | 'surface-2' | 'surface-3' | 'surface-4';

@Component({
  tag: 'bds-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true,
})
export class Sidebar {
  private hasFooterSlot: boolean;
  private hasHeaderSlot: boolean;

  @Element() hostElement: HTMLElement;

  @State() InnerSpacing?: number = 0;

  /**;
   * isOpen. Used to open sidebar.
   */
  @Prop({ mutable: true, reflect: true }) isOpen?: boolean = this.type === 'fixed' ? true : false;

  /**
   * sidebar position. Used to position the sidebar. Either on the left or on the right.
   */
  @Prop() sidebarPosition?: sidebarPosition = 'left';

  /**
   * sidebar type. Used to define how open.
   */
  @Prop() type?: sidebarType = 'over';

  /**
   * If true, a lateral margin will apear in the content.
   */
  @Prop() margin?: boolean = true;
  /**
   * Width, number to define sidebar width.
   */
  @Prop() width?: number = 360;

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
   * Width, number to define sidebar width.
   */
  @Prop() background?: sidebarBackground = 'surface-2';

  /**
   * Emitted when the isOpen has changed.
   */
  @Event() bdsToggle!: EventEmitter;

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  @Watch('isOpen')
  isOpenChanged(newValue: boolean): void {
    this.bdsToggle.emit({ value: newValue });
    if (newValue === true) {
      document.addEventListener('keyup', this.listiner, false);
    } else {
      document.removeEventListener('keyup', this.listiner, false);
    }
  }

  componentWillLoad() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }

  private listiner = (event) => {
    if (event.key == 'Escape' && this.type !== 'fixed') {
      this.isOpen = false;
    }
  };

  private onClickCloseButtom = () => {
    this.isOpen = false;
  };

  render() {
    return (
      <div
        class={{
          sidebar_dialog: true,
          is_open: this.isOpen,
          [`type_${this.type}`]: true,
        }}
      >
        {this.type === 'over' ? (
          <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()} data-test={this.dtOutzone}></div>
        ) : (
          ''
        )}
        <div
          class={{
            sidebar: true,
            is_open: this.isOpen,
            [`type_${this.type}`]: true,
            [`position_${this.sidebarPosition}`]: true,
            [`background_${this.background}`]: true,
          }}
          style={{ width: `${this.width < 144 ? 144 : this.width}px` }}
        >
          {this.hasHeaderSlot && (
            <div class={{ header: true }}>
              <div class={{ content: true }}>
                <slot name="header" />
              </div>
              {this.type === 'fixed' ? (
                ''
              ) : (
                <bds-button-icon
                  class={{
                    closeButton: true,
                  }}
                  icon="close"
                  size="short"
                  variant="secondary"
                  onClick={() => this.onClickCloseButtom()}
                  dataTest={this.dtButtonClose}
                ></bds-button-icon>
              )}
            </div>
          )}

          <div class={{ body: true }}>
            <div class={{ content: true, element_scrolled: true, margin: this.margin }}>
              <slot name="body" />
            </div>
          </div>
          {this.hasFooterSlot && (
            <div class={{ footer: true }}>
              <div class={{ content: true }}>
                <slot name="footer" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
