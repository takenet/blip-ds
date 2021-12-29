import { Component, h, State, Prop, Watch } from '@stencil/core';

export type closeSubMenuState = 'close' | 'pending' | 'open';

@Component({
  tag: 'bds-menu-action',
  styleUrl: 'menu-action.scss',
  shadow: true,
})
export class BdsMenuAction {
  @State() openSubMenu?: boolean = false;
  @State() stateSubMenu?: closeSubMenuState = 'close';
  @State() delaySubMenu?: boolean = false;
  @State() zIndex?: number = 0;
  @State() delay = null;
  /**
   * description.
   */
  @Prop() buttonText?: string = '';
  /**
   * description.
   */
  @Prop() subMenu?: boolean = false;
  /**
   * description.
   */
  @Prop() iconleft?: string = null;
  /**
   * description.
   */
  @Prop() lipstick?: boolean = false;

  private onCloseSubMenu = (): void => {
    this.stateSubMenu = 'close';
  };

  @Watch('openSubMenu')
  protected openSubMenuChanged(active: boolean): void {
    if (active == false) {
      this.stateSubMenu = 'pending';
      this.delay = setTimeout(this.onCloseSubMenu, 1000);
    }
    if (active == true) {
      clearTimeout(this.delay);
      this.delay = null;
      this.stateSubMenu = 'open';
    }
  }

  @Watch('stateSubMenu')
  protected stateSubMenuChanged(state: closeSubMenuState): void {
    switch (state) {
      case 'open':
        this.delaySubMenu = true;
        break;
      case 'pending':
        this.delaySubMenu = true;
        break;
      case 'close':
        this.delaySubMenu = false;
        break;
    }
  }

  render() {
    const actleft = this.iconleft && !this.subMenu;
    const actright = this.subMenu && !this.iconleft;
    const actleftright = this.iconleft && this.subMenu;

    const openSubmenu = () => {
      if (this.subMenu == true) {
        this.zIndex = 1;
        this.openSubMenu = true;
      }
    };

    const closeSubmenu = () => {
      if (this.subMenu == true) {
        this.zIndex = 0;
        this.openSubMenu = false;
      }
    };

    const zIndexSubmenu = {
      zIndex: `${this.zIndex}`,
    };

    return (
      <div
        class={{
          menuaction: true,
        }}
        onMouseOver={openSubmenu}
        onMouseOut={closeSubmenu}
      >
        <button
          class={{
            menuaction__button: true,
            [`menuaction__button__activeicleft`]: actleft,
            [`menuaction__button__activeicright`]: actright,
            [`menuaction__button__activeicleftright`]: actleftright,
            [`menuaction__button__lipstick`]: this.lipstick,
          }}
        >
          {this.iconleft && <bds-icon class="icon-item" name={this.iconleft} theme="outline" size="small"></bds-icon>}
          <bds-typo class="typo-item" variant="fs-16" tag="span">
            {this.buttonText}
          </bds-typo>
          {this.subMenu && <bds-icon class="arrow-right" name="arrow-right" theme="outline" size="small"></bds-icon>}
        </button>
        {this.subMenu && (
          <div
            class={{
              menuaction__submenu: true,
              menuaction__submenu__open: this.delaySubMenu,
            }}
            style={zIndexSubmenu}
          >
            <slot />
          </div>
        )}
      </div>
    );
  }
}
