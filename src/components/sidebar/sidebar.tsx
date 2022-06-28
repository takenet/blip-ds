import { Component, h, State, Prop, Event, EventEmitter, Method, Watch } from '@stencil/core';

export type sidebarPosition = 'left' | 'right';

@Component({
  tag: 'bds-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true,
})
export class Sidebar {
  @State() InnerSpacing?: number = 0;

  /**
   * isOpen. Used to open sidebar.
   */
  @Prop({ mutable: true, reflect: true }) isOpen?: boolean = false;

  /**
   * sidebar position. Used to position the sidebar. Either on the left or on the right.
   */
  @Prop() sidebarPosition?: sidebarPosition = 'left';

  /**
   * header Title. Used to add title in header sidebar.
   */
  @Prop() headerTitle?: string = null;

  /**
   * header Icon. Used to add icon in header sidebar.
   */
  @Prop() headerIcon?: string = null;

  /**
   * header Avatar Name. Used to add avatar in header sidebar.
   */
  @Prop() headerAvatarName?: string = null;

  /**
   * header Avatar Thumb. Used to add avatar in header sidebar.
   */
  @Prop() headerAvatarThumb?: string = null;
  /**
   * footer Button Apply. Used to add title in button apply.
   */
  @Prop() footerButtonApply?: string = null;

  /**
   * footer Button Cancel. Used to add title in button cancel.
   */
  @Prop() footerButtonCancel?: string = null;

  /**
   * bdsClickCancelButtom. Event to return click cancel buttom.
   */
  @Event() bdsClickCancelButtom?: EventEmitter;

  /**
   * bdsClickApplyButtom. Event to return click apply buttom.
   */
  @Event() bdsClickApplyButtom?: EventEmitter;

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

  private listiner = (event) => {
    if (event.key == 'Escape') {
      this.isOpen = false;
    }
  };

  private onClickCloseButtom = () => {
    this.isOpen = false;
  };

  private onClickCancelButtom = () => {
    this.bdsClickCancelButtom.emit();
  };

  private onClickApplyButtom = () => {
    this.bdsClickApplyButtom.emit();
  };

  render() {
    return (
      <div
        class={{
          sidebar_dialog: true,
          is_open: this.isOpen,
        }}
      >
        <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>
        <div class={{ sidebar: true, is_open: this.isOpen, [`position_${this.sidebarPosition}`]: true }}>
          <div class={{ header: true }}>
            <div class={{ content: true }}>
              {this.headerAvatarName || this.headerAvatarThumb ? (
                <bds-avatar name={this.headerAvatarName} thumbnail={this.headerAvatarThumb} size="large"></bds-avatar>
              ) : (
                this.headerIcon && <bds-icon size="medium" name={this.headerIcon} color="inherit"></bds-icon>
              )}
              {this.headerTitle && (
                <bds-typo bold="bold" variant="fs-20" line-height="double" margin={false}>
                  {this.headerTitle}
                </bds-typo>
              )}
              <bds-icon
                class={{
                  closeButton: true,
                }}
                size="medium"
                name="close"
                color="inherit"
                tabindex="0"
                onClick={() => this.onClickCloseButtom()}
              ></bds-icon>
            </div>
          </div>
          <div class={{ body: true }}>
            <div class={{ content: true }}>
              <slot></slot>
            </div>
          </div>
          <div class={{ footer: true }}>
            <div class={{ content: true }}>
              {this.footerButtonCancel && (
                <bds-button variant="secondary" onClick={() => this.onClickCancelButtom()}>
                  {this.footerButtonCancel}
                </bds-button>
              )}
              {this.footerButtonApply && (
                <bds-button variant="primary" onClick={() => this.onClickApplyButtom()}>
                  {this.footerButtonApply}
                </bds-button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
