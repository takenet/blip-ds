import { Component, Host, ComponentInterface, h, State, Method, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { getScrollParent, positionElement } from '../../utils/position-element';

export type menuPosition = 'bottom' | 'right';

@Component({
  tag: 'bds-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class BdsMenu implements ComponentInterface {
  private menuElement?: HTMLElement;

  @State() refElement?: HTMLElement = null;
  @State() intoView?: HTMLElement = null;
  @State() menupositionTop?: number = 0;
  @State() menupositionLeft?: number = 0;
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

  /**
   * bdsOpenMenu. Event to return selected date value.
   */
  @Event() bdsOpenMenu?: EventEmitter;

  componentWillLoad() {
    this.refElement = document.getElementById(this.menu);
    this.intoView = getScrollParent(this.refElement);
  }

  @Method()
  async toggle() {
    this.open = !this.open;
  }

  @Watch('open')
  protected openMenu() {
    this.bdsOpenMenu.emit({ value: this.open });
    if (this.open) {
      const positionValue = positionElement({
        actionElement: this.refElement,
        changedElement: this.menuElement,
        intoView: this.intoView,
      });
      this.menupositionTop = positionValue.top;
      this.menupositionLeft = positionValue.left;
    }
  }

  private refMenuElement = (el: HTMLElement): void => {
    this.menuElement = el;
  };

  private onClickCloseButtom = () => {
    this.open = false;
  };

  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };

    return (
      <Host>
        <div
          ref={this.refMenuElement}
          class={{
            menu: true,
            [`menu__${this.position}`]: true,
            [`menu__open`]: this.open,
          }}
          style={menuPosition}
        >
          <slot></slot>
        </div>
        {this.open && <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>}
      </Host>
    );
  }
}
