import {
  Component,
  Host,
  ComponentInterface,
  h,
  Element,
  State,
  Method,
  Prop,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { getScrollParent, positionAbsoluteElement, reference } from '../../utils/position-element';

export type dropdownPosition = 'bottom' | 'right';
export type subMenuState = 'close' | 'pending' | 'open';

@Component({
  tag: 'bds-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class BdsDropdown implements ComponentInterface {
  private activatorElement?: Element;
  private dropElement?: HTMLElement;

  @Element() hostElement: HTMLElement;

  @State() intoView?: HTMLElement = null;

  @State() openParentMenu?: boolean = false;
  @State() openSubMenu?: boolean = false;
  @State() stateSubMenu?: subMenuState = 'close';
  @State() zIndex?: number = 0;
  @State() delay = null;
  @Prop({ mutable: true, reflect: true }) axleY?: reference | string = 'bottom';
  @Prop({ mutable: true, reflect: true }) axleX?: reference | string = 'right';

  /**
   * Open. Used to open/close the dropdown.
   */
  @Prop({ mutable: true, reflect: true }) public open?: boolean = false;

  /**
   * isSubMenu. Used toselect type of item list.
   */
  @Prop() isSubMenu?: boolean = false;

  /**
   * bdsToggle. Event to return selected date value.
   */
  @Event() bdsToggle?: EventEmitter;

  componentWillLoad() {
    this.activatorElement = this.hostElement.querySelector('[slot="activator"]').children[0];
    if (this.isSubMenu) {
      this.activatorElement.addEventListener('mouseover', () => this.openSubmenu());
      this.activatorElement.addEventListener('click', () => this.openSubmenu());
      this.activatorElement.addEventListener('mouseout', () => this.closeSubmenu());
    } else {
      this.activatorElement.addEventListener('click', () => this.toggle());
    }
    this.intoView = getScrollParent(this.hostElement);
  }

  @Method()
  async toggle() {
    this.open = !this.open;
  }

  @Watch('open')
  protected openMenu() {
    if (this.open) {
      const positionValue = positionAbsoluteElement({
        actionElement: this.hostElement,
        changedElement: this.dropElement,
        intoView: this.intoView,
      });
      if (this.isSubMenu) {
        const parent = this.getDropParent(this.hostElement);
        this.axleX = parent.axleX;
        this.axleY = parent.axleY;
      } else {
        this.axleX = positionValue.x;
        this.axleY = positionValue.y;
      }
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
  protected stateSubMenuChanged(state: subMenuState): void {
    switch (state) {
      case 'open':
        this.open = true;
        break;
      case 'pending':
        this.open = true;
        break;
      case 'close':
        this.open = false;
        break;
    }
  }

  private onCloseSubMenu = (): void => {
    this.stateSubMenu = 'close';
  };

  private refDropElement = (el: HTMLElement): void => {
    this.dropElement = el;
  };

  private onClickCloseButtom = (event) => {
    this.open = false;
    event.stopPropagation();
  };

  private openSubmenu = () => {
    if (this.isSubMenu) {
      this.zIndex = 1;
      this.openSubMenu = true;
    }
  };

  private closeSubmenu = () => {
    if (this.isSubMenu) {
      this.zIndex = 0;
      this.openSubMenu = false;
    }
  };

  getDropParent = (node: HTMLElement) => {
    if (node === null) {
      return null;
    }
    const parentElement = node.offsetParent as HTMLElement;
    if (parentElement?.tagName == 'BDS-DROPDOWN') {
      return parentElement;
    } else {
      return this.getDropParent(parentElement.offsetParent as HTMLElement);
    }
  };

  render() {
    const zIndexSubmenu = {
      zIndex: `${this.zIndex}`,
    };
    return (
      <Host>
        <slot name="activator"></slot>
        {!this.isSubMenu && this.open && (
          <div class={{ outzone: true }} onClick={(ev) => this.onClickCloseButtom(ev)}></div>
        )}
        <div
          ref={this.refDropElement}
          class={{
            dropdown: true,
            [`dropdown__open`]: this.open,
            [`dropdown__${this.isSubMenu ? 'sub-menu' : 'basic'}__${this.axleY}`]: true,
            [`dropdown__${this.isSubMenu ? 'sub-menu' : 'basic'}__${this.axleX}`]: true,
          }}
          onMouseOver={() => this.openSubmenu()}
          onMouseOut={() => this.closeSubmenu()}
        >
          <div class="content" style={zIndexSubmenu}>
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
