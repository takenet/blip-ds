import { Component, h, Element, State, Prop, Watch } from '@stencil/core';

export type closeSubMenuState = 'close' | 'pending' | 'open';
export type positionSubMenuState = 'right' | 'left';

@Component({
  tag: 'bds-menu-action',
  styleUrl: 'menu-action.scss',
  shadow: true,
})
export class BdsMenuAction {
  private menuElement?: HTMLBdsMenuElement;

  @Element() private element: HTMLElement;

  @State() openParentMenu?: boolean = false;
  @State() openSubMenu?: boolean = false;
  @State() positionSubMenu?: positionSubMenuState = 'right';
  @State() stateSubMenu?: closeSubMenuState = 'close';
  @State() delaySubMenu?: boolean = false;
  @State() zIndex?: number = 0;
  @State() delay = null;
  /**
   * ButtonText. Used to enter the display text for the item.
   */
  @Prop() buttonText?: string = '';
  /**
   * SubMenu. Used to declare that the button will have a submenu.
   */
  @Prop() subMenu?: boolean = false;
  /**
   * Iconleft. Used to insert the string icon and make the icon available to the left of the item.
   */
  @Prop() iconLeft?: string = null;
  /**
   * Subtitle. Used to insert a subtitle in the display item.
   */
  @Prop() subtitle?: string = null;
  /**
   * Lipstick. Used to declare that the item will be a negative/error action.
   */
  @Prop() lipstick?: boolean = false;

  private onCloseSubMenu = (): void => {
    this.stateSubMenu = 'close';
  };

  componentWillLoad() {
    if (this.subMenu) {
      this.menuElement = this.element.parentElement as HTMLBdsMenuElement;
      this.menuElement.addEventListener('bdsOpenMenu', (event) => {
        this.onChangeOpenParent(event);
      });
    }
  }

  @Watch('openParentMenu')
  protected openParentMenuChanged(active: boolean): void {
    if (active) {
      const divMenu = this.menuElement.shadowRoot.querySelectorAll('div')[0];
      this.positionSubMenu = divMenu.offsetLeft + divMenu.offsetWidth + 196 >= window.innerWidth ? 'left' : 'right';
    }
  }

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

  private onChangeOpenParent = (event) => {
    this.openParentMenu = event.detail.value;
  };

  render() {
    const actLeft = this.iconLeft && !this.subMenu;
    const actRight = this.subMenu && !this.iconLeft;
    const actLeftright = this.iconLeft && this.subMenu;

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
          [`position-${this.positionSubMenu}`]: true,
        }}
        onMouseOver={openSubmenu}
        onMouseOut={closeSubmenu}
      >
        <button
          class={{
            menuaction__button: true,
            [`menuaction__button__activeicleft`]: actLeft,
            [`menuaction__button__activeicright`]: actRight,
            [`menuaction__button__activeicleftright`]: actLeftright,
            [`menuaction__button__lipstick`]: this.lipstick,
          }}
        >
          {this.iconLeft && <bds-icon class="icon-item" name={this.iconLeft} theme="outline" size="small"></bds-icon>}
          <div class="content-item">
            {this.buttonText && (
              <bds-typo class="title-item" variant="fs-16" tag="span">
                {this.buttonText}
              </bds-typo>
            )}
            {this.subtitle && (
              <bds-typo class="subtitle-item" variant="fs-10" tag="span">
                {this.subtitle}
              </bds-typo>
            )}
          </div>
          {this.subMenu && (
            <bds-icon
              class={{ arrow: true }}
              name={`arrow-${this.positionSubMenu}`}
              theme="outline"
              size="small"
            ></bds-icon>
          )}
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
