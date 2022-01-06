import { Component, ComponentInterface, h, State, Method, Prop, Watch } from '@stencil/core';

export type menuPosition = 'bottom' | 'right';

@Component({
  tag: 'bds-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class BdsMenu implements ComponentInterface {
  @State() menuPositionTopToBottom?: number = 0;
  @State() menuPositionLeftToBottom?: number = 0;
  @State() menuPositionTopToRight?: number = 0;
  @State() menuPositionLeftToRight?: number = 0;
  /**
   * Menu. Used to link the minus with the action button.
   */
  @Prop() menu?: string = null;
  /**
   * Position. Used to position the Menu. Either on the left or on the bottom.
   */
  @Prop() position?: menuPosition = 'right';
  /**
   * Open. Used to open/close the menu.
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public open?: boolean = false;

  @Method()
  async toggle() {
    this.open = !this.open;
  }

  @Watch('open')
  protected openMenu() {
    if (this.open == true) {
      const element = document.getElementById(this.menu);
      this.menuPositionTopToBottom = element.offsetTop + element.offsetHeight;
      this.menuPositionLeftToBottom = element.offsetLeft;
      this.menuPositionTopToRight = element.offsetTop;
      this.menuPositionLeftToRight = element.offsetLeft + element.offsetWidth;
    }
  }

  render() {
    const menuPosition = (position: menuPosition) => {
      if (position == 'right') {
        return {
          top: `${this.menuPositionTopToRight}px`,
          left: `${this.menuPositionLeftToRight}px`,
        };
      } else {
        return {
          top: `${this.menuPositionTopToBottom}px`,
          left: `${this.menuPositionLeftToBottom}px`,
        };
      }
    };

    return (
      <div
        class={{
          menu: true,
          [`menu__${this.position}`]: true,
          [`menu__open`]: this.open,
        }}
        style={menuPosition(this.position)}
      >
        <slot></slot>
      </div>
    );
  }
}
