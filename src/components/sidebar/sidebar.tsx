import { Component, h, State, Prop, Method, Watch, Element } from '@stencil/core';

export type sidebarPosition = 'left' | 'right';
export type sidebarType = 'over' | 'fixed';
export type sidebarBackground = 'surface-1' | 'surface-2' | 'surface-3' | 'surface-4';

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
  @Prop({ mutable: true, reflect: true }) isOpen?: boolean = false;

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
  @Prop() width?: number;

  /**
   * Width, number to define sidebar width.
   */
  @Prop() backgournd?: sidebarBackground = 'surface-2';

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  @Watch('isOpen')
  isOpenChanged(newValue: boolean): void {
    if (newValue === true) {
      document.addEventListener('keyup', this.listiner, false);
    } else {
      document.removeEventListener('keyup', this.listiner, false);
    }
  }

  componentWillLoad() {
    this.type === 'fixed' ? (this.isOpen = true) : '';
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }

  private listiner = (event) => {
    if (event.key == 'Escape') {
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
        {this.type === 'over' ? <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div> : ''}
        <div
          class={{
            sidebar: true,
            is_open: this.isOpen,
            [`type_${this.type}`]: true,
            [`position_${this.sidebarPosition}`]: true,
            [`background_${this.backgournd}`]: true,
          }}
          style={{ width: `${this.width > 144 ? this.width : 144}px` }}
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
