import { Component, h, State, Prop, Method, Watch, Element } from '@stencil/core';

export type sidebarPosition = 'left' | 'right';

@Component({
  tag: 'bds-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true,
})
export class Sidebar {
  private hasFooterSlot: boolean;

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
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
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
    const contentBody = {
      position: 'absolute',
      inset: '0',
      padding: '8px 24px',
      overflowY: 'scroll',
      overflowX: 'clip',
    };
    return (
      <div
        class={{
          sidebar_dialog: true,
          is_open: this.isOpen,
          [`position_${this.sidebarPosition}`]: true,
        }}
      >
        <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>
        <div class={{ sidebar: true, is_open: this.isOpen }}>
          <div class={{ header: true }}>
            <div class={{ content: true }}>
              <slot name="header" />
              <bds-button-icon
                class={{
                  closeButton: true,
                }}
                icon="close"
                size="short"
                variant="secondary"
                onClick={() => this.onClickCloseButtom()}
              ></bds-button-icon>
            </div>
          </div>
          <div class={{ body: true }}>
            <div class={{ content: true }} style={contentBody}>
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
