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

export type activeMode = 'hover' | 'click';
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
  @State() isChildDrop?: boolean = false;

  @Prop({ mutable: true, reflect: true }) axleY?: reference | string = 'bottom';
  @Prop({ mutable: true, reflect: true }) axleX?: reference | string = 'right';

  /**
   * Open. Used to open/close the dropdown.
   */
  @Prop() public activeMode?: activeMode = 'click';

  /**
   * Open. Used to open/close the dropdown.
   */
  @Prop({ mutable: true, reflect: true }) public open?: boolean = false;

  /**
   * bdsToggle. Event to return selected date value.
   */
  @Event() bdsToggle?: EventEmitter;

  componentWillLoad() {
    this.activatorElement = this.hostElement.querySelector('[slot="activator"]').children[0];
    this.isChildDrop = !!this.getDropParent(this.hostElement);
    this.intoView = getScrollParent(this.hostElement);
    if (this.isChildDrop || this.activeMode == 'hover') {
      this.activatorElement.addEventListener('mouseover', () => this.openSubmenu());
      this.activatorElement.addEventListener('click', () => this.openSubmenu());
      this.activatorElement.addEventListener('mouseout', () => this.closeSubmenu());

      return (
        this.activatorElement.removeEventListener('mouseover', () => this.openSubmenu()),
        this.activatorElement.removeEventListener('click', () => this.openSubmenu()),
        this.activatorElement.removeEventListener('mouseout', () => this.closeSubmenu())
      );
    } else {
      this.activatorElement.addEventListener('click', () => this.toggle());
      return this.activatorElement.removeEventListener('click', () => this.toggle());
    }
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
      const parent = this.getDropParent(this.hostElement);
      if (this.isChildDrop) {
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

  // private refDropElement = (el: HTMLElement): void => {
  //   this.dropElement = el;
  // };

  private onClickCloseButtom = () => {
    this.open = false;
  };

  private openSubmenu = () => {
    if (this.isChildDrop) {
      this.zIndex = 1;
    }
    this.openSubMenu = true;
  };

  private closeSubmenu = () => {
    if (this.isChildDrop) {
      this.zIndex = 0;
    }
    this.openSubMenu = false;
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
        <slot name="dropdown-activator"></slot>
        {!this.isChildDrop && this.open && (
          <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>
        )}
        <div
          ref={(el) => (this.dropElement = el)}
          class={{
            dropdown: true,
            [`dropdown__open`]: this.open,
            [`dropdown__${this.isChildDrop ? 'sub-menu' : 'basic'}__${this.axleY}`]: true,
            [`dropdown__${this.isChildDrop ? 'sub-menu' : 'basic'}__${this.axleX}`]: true,
          }}
          onMouseOver={() => this.openSubmenu()}
          onMouseOut={() => this.closeSubmenu()}
        >
          <div class="dropdown-content" style={zIndexSubmenu}>
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
