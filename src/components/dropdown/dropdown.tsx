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
import { getScrollParent, positionAbsoluteElement } from '../../utils/position-element';

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

  @State() openSubMenu?: boolean = false;
  @State() stateSubMenu?: subMenuState = 'close';
  @State() zIndex?: number = 0;
  @State() delay = null;
  @State() isChildDrop?: boolean = false;

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
    this.activatorElement = this.hostElement.querySelector('[slot="dropdown-activator"]').children[0];
    this.isChildDrop = !!this.getDropParent(this.hostElement);
    this.intoView = getScrollParent(this.hostElement);
    if (this.isChildDrop || this.activeMode == 'hover') {
      this.activatorElement.addEventListener('mouseover', () => this.openSubmenu());
      this.activatorElement.addEventListener('click', () => this.openSubmenu());
      this.activatorElement.addEventListener('mouseout', () => this.closeSubmenu());
    } else {
      this.activatorElement.addEventListener('click', () => this.toggle());
    }
  }

  componentDidLoad() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.hostElement,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    const parent = this.getDropParent(this.hostElement);
    if (this.isChildDrop) {
      this.dropElement.classList.add(`dropdown__sub-menu__${parent.y}`);
      this.dropElement.classList.add(`dropdown__sub-menu__${parent.x}`);
    } else {
      this.dropElement.classList.add(`dropdown__basic__${positionValue.y}`);
      this.dropElement.classList.add(`dropdown__basic__${positionValue.x}`);
    }
  }

  @Method()
  async toggle() {
    this.open = !this.open;
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
        <div
          ref={(el) => this.refDropElement(el)}
          class={{
            dropdown: true,
            dropdown__open: this.open,
          }}
          onMouseOver={() => this.openSubmenu()}
          onMouseOut={() => this.closeSubmenu()}
        >
          <div class="content" style={zIndexSubmenu}>
            <slot name="dropdown-content"></slot>
          </div>
        </div>
        {!this.isChildDrop && this.open && (
          <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>
        )}
      </Host>
    );
  }
}
